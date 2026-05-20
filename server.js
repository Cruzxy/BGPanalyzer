require('dotenv').config();

const path = require('node:path');
const fs = require('node:fs/promises');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');

const ROOT_DIR = __dirname;
const PORT = Number(process.env.PORT || 80);
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const MONGODB_DB = process.env.MONGODB_DB || 'bgp_analyzer';
const FILE_DB_FALLBACK = process.env.FILE_DB_FALLBACK !== 'false';
const DATA_FILE = path.resolve(ROOT_DIR, process.env.DATA_FILE || './data/bgp-analyzer.dev.json');
const SCHEMA_VERSION = 'api-v1';

function now() {
  return new Date().toISOString();
}

function normalizeAsn(asn) {
  return String(asn || '').replace(/^AS/i, '').trim();
}

function normalizePrefix(prefixo) {
  return String(prefixo || '').trim();
}

function withoutMongoId(row) {
  if (!row) return row;
  const copy = { ...row };
  delete copy._id;
  return copy;
}

function formatBytes(bytes) {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let idx = 0;
  while (value >= 1024 && idx < units.length - 1) {
    value /= 1024;
    idx += 1;
  }
  return `${idx === 0 ? value : value.toFixed(1)} ${units[idx]}`;
}

class MongoStore {
  constructor(client, db) {
    this.client = client;
    this.db = db;
    this.engine = 'MongoDB';
  }

  static async connect() {
    const client = new MongoClient(MONGODB_URI, { serverSelectionTimeoutMS: 2500 });
    await client.connect();
    const store = new MongoStore(client, client.db(MONGODB_DB));
    await store.ensureIndexes();
    await store.touch('boot');
    return store;
  }

  collection(name) {
    return this.db.collection(name);
  }

  async ensureIndexes() {
    await Promise.all([
      this.collection('operadoras').createIndex({ asn: 1 }, { unique: true }),
      this.collection('operadoras').createIndex({ nome_op: 1 }),
      this.collection('operadoras').createIndex({ coletado_em: -1 }),
      this.collection('prefixos').createIndex({ id: 1 }, { unique: true }),
      this.collection('prefixos').createIndex({ asn: 1 }),
      this.collection('prefixos').createIndex({ mascara: 1 }),
      this.collection('analises').createIndex({ asn: 1 }, { unique: true }),
      this.collection('analises').createIndex({ desvio_suspeito: 1 }),
      this.collection('mitigacao').createIndex({ id: 1 }, { unique: true }),
      this.collection('mitigacao').createIndex({ prefixo: 1 }),
      this.collection('mitigacao').createIndex({ asn_dono: 1 }),
      this.collection('mitigacao').createIndex({ asn_mitigador: 1 }),
      this.collection('eventos').createIndex({ timestamp: -1 }),
      this.collection('eventos').createIndex({ tipo: 1 })
    ]);
  }

  async touch(reason) {
    await this.collection('meta').updateOne(
      { chave: 'database' },
      { $set: { chave: 'database', engine: this.engine, schema: SCHEMA_VERSION, updated_at: now(), reason } },
      { upsert: true }
    );
  }

  async salvarOperadora(entry) {
    const doc = {
      ...entry,
      asn: normalizeAsn(entry.asn),
      prefixos: Array.isArray(entry.prefixos) ? entry.prefixos : [],
      coletado_em: entry.coletado_em || now()
    };
    await this.collection('operadoras').updateOne({ asn: doc.asn }, { $set: doc }, { upsert: true });
    await this.touch('salvar_operadora');
    return doc;
  }

  async buscarOperadora(asn) {
    return withoutMongoId(await this.collection('operadoras').findOne({ asn: normalizeAsn(asn) }));
  }

  async listarOperadoras() {
    return (await this.collection('operadoras').find({}, { projection: { _id: 0 } }).sort({ coletado_em: -1 }).toArray());
  }

  async salvarPrefixos(asn, listaPrefixos) {
    const asnNorm = normalizeAsn(asn);
    const docs = (listaPrefixos || []).map((prefixo) => ({
      id: `${asnNorm}_${prefixo}`,
      asn: asnNorm,
      prefixo,
      mascara: String(prefixo).split('/')[1] || '?',
      salvo_em: now()
    }));
    await this.collection('prefixos').deleteMany({ asn: asnNorm });
    if (docs.length) await this.collection('prefixos').insertMany(docs, { ordered: false });
    await this.touch('salvar_prefixos');
    return docs.length;
  }

  async listarPrefixos(query = {}) {
    const filter = {};
    if (query.asn) filter.asn = normalizeAsn(query.asn);
    if (query.mascara) filter.mascara = String(query.mascara);
    return this.collection('prefixos').find(filter, { projection: { _id: 0 } }).sort({ asn: 1, prefixo: 1 }).toArray();
  }

  async salvarAnalise(asn, resultado) {
    const doc = {
      ...resultado,
      asn: normalizeAsn(asn),
      desvio_suspeito: !!resultado.desvio_suspeito,
      media_saltos: Number(resultado.media_saltos || 0),
      paths_unicos: Number(resultado.paths_unicos || 0),
      total_paths: Number(resultado.total_paths || 0),
      asn_mais_frequentes: resultado.asn_mais_frequentes || [],
      analisado_em: resultado.analisado_em || now()
    };
    await this.collection('analises').updateOne({ asn: doc.asn }, { $set: doc }, { upsert: true });
    await this.touch('salvar_analise');
    return doc;
  }

  async buscarAnalise(asn) {
    return withoutMongoId(await this.collection('analises').findOne({ asn: normalizeAsn(asn) }));
  }

  async listarAnalises() {
    return this.collection('analises').find({}, { projection: { _id: 0 } }).sort({ analisado_em: -1 }).toArray();
  }

  async salvarMitigacao(resultado) {
    const mitigadores = resultado && Array.isArray(resultado.mitigadores) ? resultado.mitigadores : [];
    const docs = mitigadores.map((asnMit) => ({
      id: `${resultado.prefixo}_${asnMit}`,
      prefixo: normalizePrefix(resultado.prefixo),
      asn_dono: normalizeAsn(resultado.asn_dono),
      nome_dono: resultado.nome_dono || '',
      asn_mitigador: normalizeAsn(asnMit),
      redundante: !!resultado.redundante,
      n_upstreams: Number(resultado.n_upstreams || 0),
      origens: resultado.origens || [],
      detectado_em: now()
    }));
    for (const doc of docs) {
      await this.collection('mitigacao').updateOne({ id: doc.id }, { $set: doc }, { upsert: true });
    }
    if (docs.length) await this.touch('salvar_mitigacao');
    return docs.length;
  }

  async listarMitigacoes(query = {}) {
    const filter = {};
    if (query.prefixo) filter.prefixo = normalizePrefix(query.prefixo);
    if (query.asn_mitigador) filter.asn_mitigador = normalizeAsn(query.asn_mitigador);
    return this.collection('mitigacao').find(filter, { projection: { _id: 0 } }).sort({ detectado_em: -1 }).toArray();
  }

  async registrarEvento(tipo, asn, detalhes = {}) {
    const doc = { tipo: tipo || 'evento', asn: normalizeAsn(asn), detalhes, timestamp: now() };
    await this.collection('eventos').insertOne(doc);
    await this.touch('registrar_evento');
    return withoutMongoId(doc);
  }

  async listarEventos(limite = 50) {
    return this.collection('eventos').find({}, { projection: { _id: 0 } }).sort({ timestamp: -1 }).limit(Number(limite) || 50).toArray();
  }

  async limparTudo() {
    await Promise.all(['operadoras', 'prefixos', 'analises', 'mitigacao', 'eventos'].map((name) => this.collection(name).deleteMany({})));
    await this.touch('limpar_tudo');
  }

  async limparColeta() {
    await Promise.all(['operadoras', 'prefixos', 'analises'].map((name) => this.collection(name).deleteMany({})));
    await this.touch('limpar_coleta');
  }

  async limparMitigacao() {
    await this.collection('mitigacao').deleteMany({});
    await this.touch('limpar_mitigacao');
  }

  async stats() {
    const [operadoras, prefixos, prefixos24, analises, mitigacao, eventos, meta] = await Promise.all([
      this.collection('operadoras').countDocuments(),
      this.collection('prefixos').countDocuments(),
      this.collection('prefixos').countDocuments({ mascara: '24' }),
      this.collection('analises').countDocuments(),
      this.collection('mitigacao').countDocuments(),
      this.collection('eventos').countDocuments(),
      this.collection('meta').findOne({ chave: 'database' })
    ]);
    const storage = await this.db.stats().catch(() => ({ storageSize: 0 }));
    return {
      operadoras, prefixos, prefixos24, analises, mitigacao, eventos,
      engine: this.engine,
      schema: SCHEMA_VERSION,
      atualizado_em: meta ? meta.updated_at : '',
      tamanho_bytes: storage.storageSize || 0,
      tamanho_legivel: formatBytes(storage.storageSize || 0)
    };
  }
}

class FileStore {
  constructor(filePath) {
    this.filePath = filePath;
    this.engine = 'API File Store';
    this.state = null;
  }

  async load() {
    if (this.state) return;
    try {
      this.state = JSON.parse(await fs.readFile(this.filePath, 'utf8'));
    } catch {
      this.state = { operadoras: [], prefixos: [], analises: [], mitigacao: [], eventos: [], meta: {} };
      await this.save();
    }
  }

  async save() {
    await fs.mkdir(path.dirname(this.filePath), { recursive: true });
    await fs.writeFile(this.filePath, JSON.stringify(this.state, null, 2), 'utf8');
  }

  async touch(reason) {
    await this.load();
    this.state.meta = { engine: this.engine, schema: SCHEMA_VERSION, updated_at: now(), reason };
    await this.save();
  }

  async salvarOperadora(entry) {
    await this.load();
    const doc = { ...entry, asn: normalizeAsn(entry.asn), prefixos: entry.prefixos || [], coletado_em: entry.coletado_em || now() };
    this.state.operadoras = this.state.operadoras.filter((op) => op.asn !== doc.asn).concat(doc);
    await this.touch('salvar_operadora');
    return doc;
  }

  async buscarOperadora(asn) {
    await this.load();
    return this.state.operadoras.find((op) => op.asn === normalizeAsn(asn)) || null;
  }

  async listarOperadoras() {
    await this.load();
    return [...this.state.operadoras].sort((a, b) => String(b.coletado_em || '').localeCompare(String(a.coletado_em || '')));
  }

  async salvarPrefixos(asn, listaPrefixos) {
    await this.load();
    const asnNorm = normalizeAsn(asn);
    this.state.prefixos = this.state.prefixos.filter((p) => p.asn !== asnNorm);
    const lista = listaPrefixos || [];
    this.state.prefixos.push(...lista.map((prefixo) => ({
      id: `${asnNorm}_${prefixo}`,
      asn: asnNorm,
      prefixo,
      mascara: String(prefixo).split('/')[1] || '?',
      salvo_em: now()
    })));
    await this.touch('salvar_prefixos');
    return lista.length;
  }

  async listarPrefixos(query = {}) {
    await this.load();
    return this.state.prefixos.filter((p) => (!query.asn || p.asn === normalizeAsn(query.asn)) && (!query.mascara || p.mascara === String(query.mascara)));
  }

  async salvarAnalise(asn, resultado) {
    await this.load();
    const doc = { ...resultado, asn: normalizeAsn(asn), desvio_suspeito: !!resultado.desvio_suspeito, analisado_em: resultado.analisado_em || now() };
    this.state.analises = this.state.analises.filter((a) => a.asn !== doc.asn).concat(doc);
    await this.touch('salvar_analise');
    return doc;
  }

  async buscarAnalise(asn) {
    await this.load();
    return this.state.analises.find((a) => a.asn === normalizeAsn(asn)) || null;
  }

  async listarAnalises() {
    await this.load();
    return [...this.state.analises].sort((a, b) => String(b.analisado_em || '').localeCompare(String(a.analisado_em || '')));
  }

  async salvarMitigacao(resultado) {
    await this.load();
    const docs = (resultado.mitigadores || []).map((asnMit) => ({
      id: `${resultado.prefixo}_${asnMit}`,
      prefixo: normalizePrefix(resultado.prefixo),
      asn_dono: normalizeAsn(resultado.asn_dono),
      nome_dono: resultado.nome_dono || '',
      asn_mitigador: normalizeAsn(asnMit),
      redundante: !!resultado.redundante,
      n_upstreams: Number(resultado.n_upstreams || 0),
      origens: resultado.origens || [],
      detectado_em: now()
    }));
    const ids = new Set(docs.map((d) => d.id));
    this.state.mitigacao = this.state.mitigacao.filter((m) => !ids.has(m.id)).concat(docs);
    if (docs.length) await this.touch('salvar_mitigacao');
    return docs.length;
  }

  async listarMitigacoes(query = {}) {
    await this.load();
    return this.state.mitigacao.filter((m) =>
      (!query.prefixo || m.prefixo === normalizePrefix(query.prefixo)) &&
      (!query.asn_mitigador || m.asn_mitigador === normalizeAsn(query.asn_mitigador))
    ).sort((a, b) => String(b.detectado_em || '').localeCompare(String(a.detectado_em || '')));
  }

  async registrarEvento(tipo, asn, detalhes = {}) {
    await this.load();
    const doc = { id: this.state.eventos.length + 1, tipo: tipo || 'evento', asn: normalizeAsn(asn), detalhes, timestamp: now() };
    this.state.eventos.push(doc);
    await this.touch('registrar_evento');
    return doc;
  }

  async listarEventos(limite = 50) {
    await this.load();
    return [...this.state.eventos].sort((a, b) => String(b.timestamp || '').localeCompare(String(a.timestamp || ''))).slice(0, Number(limite) || 50);
  }

  async limparTudo() {
    await this.load();
    this.state.operadoras = [];
    this.state.prefixos = [];
    this.state.analises = [];
    this.state.mitigacao = [];
    this.state.eventos = [];
    await this.touch('limpar_tudo');
  }

  async limparColeta() {
    await this.load();
    this.state.operadoras = [];
    this.state.prefixos = [];
    this.state.analises = [];
    await this.touch('limpar_coleta');
  }

  async limparMitigacao() {
    await this.load();
    this.state.mitigacao = [];
    await this.touch('limpar_mitigacao');
  }

  async stats() {
    await this.load();
    const prefixos24 = this.state.prefixos.filter((p) => p.mascara === '24').length;
    let size = 0;
    try { size = (await fs.stat(this.filePath)).size; } catch {}
    return {
      operadoras: this.state.operadoras.length,
      prefixos: this.state.prefixos.length,
      prefixos24,
      analises: this.state.analises.length,
      mitigacao: this.state.mitigacao.length,
      eventos: this.state.eventos.length,
      engine: this.engine,
      schema: SCHEMA_VERSION,
      atualizado_em: this.state.meta.updated_at || '',
      tamanho_bytes: size,
      tamanho_legivel: formatBytes(size)
    };
  }
}

async function buildSnapshot(store) {
  return {
    formato: 'bgp-analyzer-api-snapshot',
    versao: SCHEMA_VERSION,
    exportado_em: now(),
    stats: await store.stats(),
    operadoras: await store.listarOperadoras(),
    prefixos: await store.listarPrefixos(),
    analises: await store.listarAnalises(),
    mitigacao: await store.listarMitigacoes(),
    eventos: await store.listarEventos(500)
  };
}

async function buildWarehouse(store) {
  const [operadoras, prefixos, analises, mitigacao, stats] = await Promise.all([
    store.listarOperadoras(),
    store.listarPrefixos(),
    store.listarAnalises(),
    store.listarMitigacoes(),
    store.stats()
  ]);

  const analisePorAsn = new Map(analises.map((a) => [normalizeAsn(a.asn), a]));
  const prefixosPorAsn = new Map();
  const moasPorDono = new Map();

  for (const p of prefixos) {
    if (!prefixosPorAsn.has(p.asn)) prefixosPorAsn.set(p.asn, []);
    prefixosPorAsn.get(p.asn).push(p);
  }
  for (const m of mitigacao) {
    if (!moasPorDono.has(m.asn_dono)) moasPorDono.set(m.asn_dono, []);
    moasPorDono.get(m.asn_dono).push(m);
  }

  return {
    formato: 'bgp-analyzer-warehouse',
    versao: SCHEMA_VERSION,
    gerado_em: now(),
    metricas: stats,
    operadoras: operadoras.map((op) => {
      const asn = normalizeAsn(op.asn);
      const pfs = prefixosPorAsn.get(asn) || [];
      const p24 = pfs.filter((p) => p.mascara === '24');
      const an = analisePorAsn.get(asn) || {};
      const moas = moasPorDono.get(asn) || [];
      let score = 0;
      if (an.desvio_suspeito) score += 45;
      if (pfs.length) score += Math.min(25, Math.round((p24.length / pfs.length) * 25));
      if (moas.length) score += Math.min(30, moas.length * 10);
      return {
        asn,
        nome: op.nome_op,
        tipo_rede: op.tipo_rede,
        total_prefixos: pfs.length,
        total_24: p24.length,
        percentual_24: pfs.length ? Math.round((p24.length / pfs.length) * 1000) / 10 : 0,
        desvio_suspeito: !!an.desvio_suspeito,
        media_saltos: an.media_saltos || 0,
        moas_detectados: moas.length,
        score_risco: Math.min(100, score),
        coletado_em: op.coletado_em
      };
    })
  };
}

async function importSnapshot(store, snapshot, limparAntes = true) {
  if (!snapshot || !Array.isArray(snapshot.operadoras)) {
    const err = new Error('Snapshot invalido.');
    err.statusCode = 400;
    throw err;
  }

  if (limparAntes) await store.limparTudo();
  for (const op of snapshot.operadoras || []) {
    await store.salvarOperadora(op);
  }
  const porAsn = new Map();
  for (const p of snapshot.prefixos || []) {
    const asn = normalizeAsn(p.asn);
    if (!porAsn.has(asn)) porAsn.set(asn, []);
    porAsn.get(asn).push(p.prefixo || p);
  }
  for (const [asn, lista] of porAsn.entries()) {
    await store.salvarPrefixos(asn, lista);
  }
  for (const a of snapshot.analises || []) {
    await store.salvarAnalise(a.asn, a);
  }
  for (const m of snapshot.mitigacao || []) {
    await store.salvarMitigacao({ ...m, mitigadores: [m.asn_mitigador] });
  }
  await store.registrarEvento('importacao', '', { operadoras: snapshot.operadoras.length });
  return { ok: true, operadoras: snapshot.operadoras.length };
}

async function createStore() {
  try {
    return await MongoStore.connect();
  } catch (error) {
    if (!FILE_DB_FALLBACK) throw error;
    console.warn(`[BGP_API] MongoDB indisponivel (${error.message}). Usando fallback local em ${DATA_FILE}`);
    const store = new FileStore(DATA_FILE);
    await store.touch('boot');
    return store;
  }
}

function asyncRoute(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

async function main() {
  const store = await createStore();
  const app = express();

  app.disable('x-powered-by');
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(cors());
  app.use(compression());
  app.use(express.json({ limit: '10mb' }));
  app.use(morgan('tiny'));

  app.get('/api/health', asyncRoute(async (req, res) => {
    res.json({ ok: true, port: PORT, engine: (await store.stats()).engine, schema: SCHEMA_VERSION });
  }));

  app.get('/api/stats', asyncRoute(async (req, res) => res.json(await store.stats())));

  app.get('/api/operadoras', asyncRoute(async (req, res) => res.json(await store.listarOperadoras())));
  app.post('/api/operadoras', asyncRoute(async (req, res) => res.status(201).json(await store.salvarOperadora(req.body))));
  app.get('/api/operadoras/:asn', asyncRoute(async (req, res) => {
    const item = await store.buscarOperadora(req.params.asn);
    if (!item) return res.status(404).json({ error: 'Operadora nao encontrada.' });
    res.json(item);
  }));

  app.get('/api/prefixos', asyncRoute(async (req, res) => res.json(await store.listarPrefixos(req.query))));
  app.post('/api/prefixos/:asn', asyncRoute(async (req, res) => {
    const lista = Array.isArray(req.body) ? req.body : req.body.prefixos;
    res.status(201).json({ count: await store.salvarPrefixos(req.params.asn, lista || []) });
  }));

  app.get('/api/analises', asyncRoute(async (req, res) => res.json(await store.listarAnalises())));
  app.post('/api/analises/:asn', asyncRoute(async (req, res) => res.status(201).json(await store.salvarAnalise(req.params.asn, req.body))));
  app.get('/api/analises/:asn', asyncRoute(async (req, res) => {
    const item = await store.buscarAnalise(req.params.asn);
    if (!item) return res.status(404).json({ error: 'Analise nao encontrada.' });
    res.json(item);
  }));

  app.get('/api/mitigacao', asyncRoute(async (req, res) => res.json(await store.listarMitigacoes(req.query))));
  app.post('/api/mitigacao', asyncRoute(async (req, res) => res.status(201).json({ count: await store.salvarMitigacao(req.body) })));

  app.get('/api/eventos', asyncRoute(async (req, res) => res.json(await store.listarEventos(req.query.limite))));
  app.post('/api/eventos', asyncRoute(async (req, res) => {
    res.status(201).json(await store.registrarEvento(req.body.tipo, req.body.asn, req.body.detalhes));
  }));

  app.delete('/api/database', asyncRoute(async (req, res) => {
    await store.limparTudo();
    res.json({ ok: true });
  }));
  app.delete('/api/database/coleta', asyncRoute(async (req, res) => {
    await store.limparColeta();
    res.json({ ok: true });
  }));
  app.delete('/api/database/mitigacao', asyncRoute(async (req, res) => {
    await store.limparMitigacao();
    res.json({ ok: true });
  }));

  app.get('/api/export/json', asyncRoute(async (req, res) => res.json(await buildSnapshot(store))));
  app.get('/api/export/warehouse', asyncRoute(async (req, res) => res.json(await buildWarehouse(store))));
  app.post('/api/import/json', asyncRoute(async (req, res) => res.status(201).json(await importSnapshot(store, req.body, req.query.limparAntes !== 'false'))));

  app.get('/', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'index.html'));
  });
  app.get('/index.html', (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.sendFile(path.join(ROOT_DIR, 'index.html'));
  });
  ['db.js', 'script.js', 'style.css'].forEach((asset) => {
    app.get('/' + asset, (req, res) => {
      res.sendFile(path.join(ROOT_DIR, asset));
    });
  });
  app.get('*', (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.sendFile(path.join(ROOT_DIR, 'index.html'));
  });

  app.use((err, req, res, next) => {
    console.error('[BGP_API]', err);
    res.status(err.statusCode || 500).json({ error: err.message || 'Erro interno da API.' });
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[BGP_API] UI e API rodando em http://localhost:${PORT}`);
    console.log(`[BGP_API] Banco: ${(store && store.engine) || 'desconhecido'}`);
  });
}

main().catch((error) => {
  console.error('[BGP_API] Falha ao iniciar:', error);
  process.exit(1);
});
