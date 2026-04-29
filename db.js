// ══════════════════════════════════════════════════════════════════════════════
//  BGP ANALYZER — IndexedDB Database Layer
//  Substitui o cache simples de localStorage por um banco de dados estruturado
//  com suporte a transações, índices, cursor e queries.
//
//  Banco: bgp_analyzer_db  |  Versão: 3
//  Object Stores:
//    - operadoras   : dados de ASN coletados (RIPE + PeeringDB)
//    - prefixos     : prefixos /24 por ASN
//    - analises     : resultados de análise de AS-PATH
//    - mitigacao    : resultados de scan MOAS / scrubbing
//    - eventos      : log histórico de coletas e análises
// ══════════════════════════════════════════════════════════════════════════════

var BGP_DB = (function () {

  var DB_NAME    = 'bgp_analyzer_db';
  var DB_VERSION = 3;
  var db         = null;   // instância IDBDatabase
  var _onReady   = [];     // fila de callbacks aguardando abertura

  // ── Schema ────────────────────────────────────────────────────────────────
  var STORES = {
    operadoras: {
      keyPath: 'asn',
      indexes: [
        { name: 'nome_op',    field: 'nome_op',    unique: false },
        { name: 'tipo_rede',  field: 'tipo_rede',  unique: false },
        { name: 'coletado_em',field: 'coletado_em',unique: false }
      ]
    },
    prefixos: {
      keyPath: 'id',        // asn + '_' + prefixo
      indexes: [
        { name: 'asn',      field: 'asn',      unique: false },
        { name: 'prefixo',  field: 'prefixo',  unique: false },
        { name: 'mascara',  field: 'mascara',  unique: false }
      ]
    },
    analises: {
      keyPath: 'asn',
      indexes: [
        { name: 'desvio_suspeito', field: 'desvio_suspeito', unique: false },
        { name: 'analisado_em',    field: 'analisado_em',    unique: false }
      ]
    },
    mitigacao: {
      keyPath: 'id',        // prefixo + '_' + asn_mitigador
      indexes: [
        { name: 'prefixo',      field: 'prefixo',      unique: false },
        { name: 'asn_dono',     field: 'asn_dono',     unique: false },
        { name: 'asn_mitigador',field: 'asn_mitigador',unique: false },
        { name: 'detectado_em', field: 'detectado_em', unique: false }
      ]
    },
    eventos: {
      keyPath:       'id',
      autoIncrement: true,
      indexes: [
        { name: 'tipo',      field: 'tipo',      unique: false },
        { name: 'asn',       field: 'asn',       unique: false },
        { name: 'timestamp', field: 'timestamp', unique: false }
      ]
    }
  };

  // ── Abertura / upgrade do banco ───────────────────────────────────────────
  function abrir() {
    return new Promise(function (resolve, reject) {
      if (db) { resolve(db); return; }

      var req = indexedDB.open(DB_NAME, DB_VERSION);

      req.onupgradeneeded = function (ev) {
        var idb = ev.target.result;
        var tx  = ev.target.transaction;

        Object.entries(STORES).forEach(function (entry) {
          var nome  = entry[0];
          var conf  = entry[1];
          var store;

          if (!idb.objectStoreNames.contains(nome)) {
            var opts = { keyPath: conf.keyPath };
            if (conf.autoIncrement) opts.autoIncrement = true;
            store = idb.createObjectStore(nome, opts);
          } else {
            store = tx.objectStore(nome);
          }

          (conf.indexes || []).forEach(function (idx) {
            if (!store.indexNames.contains(idx.name)) {
              store.createIndex(idx.name, idx.field, { unique: idx.unique });
            }
          });
        });
      };

      req.onsuccess = function (ev) {
        db = ev.target.result;
        db.onversionchange = function () { db.close(); db = null; };
        _onReady.forEach(function (fn) { fn(db); });
        _onReady = [];
        resolve(db);
      };

      req.onerror = function (ev) {
        console.error('[BGP_DB] Erro ao abrir banco:', ev.target.error);
        reject(ev.target.error);
      };
    });
  }

  // ── Helpers de transação ──────────────────────────────────────────────────
  function tx(stores, modo, fn) {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var t = idb.transaction(stores, modo);
        t.onerror   = function (e) { reject(e.target.error); };
        t.onabort   = function (e) { reject(e.target.error); };
        t.oncomplete = function ()  { resolve(); };
        fn(t);
      });
    });
  }

  function get(store, key) {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var req = idb.transaction(store, 'readonly').objectStore(store).get(key);
        req.onsuccess = function () { resolve(req.result || null); };
        req.onerror   = function (e) { reject(e.target.error); };
      });
    });
  }

  function getAll(store, indexName, value) {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var os  = idb.transaction(store, 'readonly').objectStore(store);
        var req = indexName ? os.index(indexName).getAll(value) : os.getAll();
        req.onsuccess = function () { resolve(req.result || []); };
        req.onerror   = function (e) { reject(e.target.error); };
      });
    });
  }

  function put(store, obj) {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var req = idb.transaction(store, 'readwrite').objectStore(store).put(obj);
        req.onsuccess = function () { resolve(req.result); };
        req.onerror   = function (e) { reject(e.target.error); };
      });
    });
  }

  function del(store, key) {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var req = idb.transaction(store, 'readwrite').objectStore(store).delete(key);
        req.onsuccess = function () { resolve(); };
        req.onerror   = function (e) { reject(e.target.error); };
      });
    });
  }

  function clear(store) {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var req = idb.transaction(store, 'readwrite').objectStore(store).clear();
        req.onsuccess = function () { resolve(); };
        req.onerror   = function (e) { reject(e.target.error); };
      });
    });
  }

  function count(store) {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var req = idb.transaction(store, 'readonly').objectStore(store).count();
        req.onsuccess = function () { resolve(req.result); };
        req.onerror   = function (e) { reject(e.target.error); };
      });
    });
  }

  // ── API Pública ───────────────────────────────────────────────────────────

  // --- Operadoras -----------------------------------------------------------
  function salvarOperadora(entry) {
    entry.coletado_em = new Date().toISOString();
    return put('operadoras', entry);
  }

  function buscarOperadora(asn) {
    return get('operadoras', String(asn));
  }

  function listarOperadoras() {
    return getAll('operadoras');
  }

  function contarOperadoras() {
    return count('operadoras');
  }

  // --- Prefixos /24 ---------------------------------------------------------
  function salvarPrefixos(asn, listaPrefixos) {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var t   = idb.transaction('prefixos', 'readwrite');
        var os  = t.objectStore('prefixos');
        var ts  = new Date().toISOString();

        t.oncomplete = function () { resolve(); };
        t.onerror    = function (e) { reject(e.target.error); };

        listaPrefixos.forEach(function (prefixo) {
          var mascara = prefixo.split('/')[1] || '?';
          os.put({
            id:         String(asn) + '_' + prefixo,
            asn:        String(asn),
            prefixo:    prefixo,
            mascara:    mascara,
            salvo_em:   ts
          });
        });
      });
    });
  }

  function buscarPrefixosPorASN(asn) {
    return getAll('prefixos', 'asn', String(asn)).then(function (rows) {
      return rows.map(function (r) { return r.prefixo; });
    });
  }

  function listarTodosPrefixos24() {
    return getAll('prefixos', 'mascara', '24');
  }

  function contarPrefixos24() {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var req = idb.transaction('prefixos', 'readonly')
          .objectStore('prefixos')
          .index('mascara')
          .count('24');
        req.onsuccess = function () { resolve(req.result); };
        req.onerror   = function (e) { reject(e.target.error); };
      });
    });
  }

  // --- Análises AS-PATH -----------------------------------------------------
  function salvarAnalise(asn, resultado) {
    resultado.asn        = String(asn);
    resultado.analisado_em = new Date().toISOString();
    return put('analises', resultado);
  }

  function buscarAnalise(asn) {
    return get('analises', String(asn));
  }

  function listarAnalises() {
    return getAll('analises');
  }

  function contarDesvios() {
    return abrir().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var req = idb.transaction('analises', 'readonly')
          .objectStore('analises')
          .index('desvio_suspeito')
          .count(1);
        req.onsuccess = function () { resolve(req.result); };
        req.onerror   = function (e) { reject(e.target.error); };
      });
    });
  }

  // --- Mitigação / MOAS -----------------------------------------------------
  function salvarMitigacao(resultado) {
    // resultado: { prefixo, asn_dono, nome_dono, mitigadores[], redundante, n_upstreams }
    var ts = new Date().toISOString();
    var ops = [];
    resultado.mitigadores.forEach(function (asnMit) {
      ops.push(put('mitigacao', {
        id:            resultado.prefixo + '_' + asnMit,
        prefixo:       resultado.prefixo,
        asn_dono:      String(resultado.asn_dono),
        nome_dono:     resultado.nome_dono,
        asn_mitigador: String(asnMit),
        redundante:    resultado.redundante,
        n_upstreams:   resultado.n_upstreams,
        origens:       resultado.origens,
        detectado_em:  ts
      }));
    });
    return Promise.all(ops);
  }

  function listarMitigacoes() {
    return getAll('mitigacao');
  }

  function buscarMitigacoesPorPrefixo(prefixo) {
    return getAll('mitigacao', 'prefixo', prefixo);
  }

  function buscarMitigacoesPorMitigador(asnMit) {
    return getAll('mitigacao', 'asn_mitigador', String(asnMit));
  }

  // --- Eventos / Log Histórico ----------------------------------------------
  function registrarEvento(tipo, asn, detalhes) {
    return put('eventos', {
      tipo:       tipo,
      asn:        String(asn || ''),
      detalhes:   detalhes || {},
      timestamp:  new Date().toISOString()
    });
  }

  function listarEventos(limite) {
    return getAll('eventos').then(function (todos) {
      todos.sort(function (a, b) { return b.id - a.id; });
      return limite ? todos.slice(0, limite) : todos;
    });
  }

  // --- Utilitários gerais ---------------------------------------------------
  function limparTudo() {
    var stores = Object.keys(STORES);
    return Promise.all(stores.map(clear));
  }

  function limparColeta() {
    return Promise.all([
      clear('operadoras'),
      clear('prefixos'),
      clear('analises')
    ]);
  }

  function limparMitigacao() {
    return clear('mitigacao');
  }

  function estatisticas() {
    return Promise.all([
      count('operadoras'),
      count('prefixos'),
      contarPrefixos24(),
      count('analises'),
      count('mitigacao'),
      count('eventos')
    ]).then(function (res) {
      return {
        operadoras: res[0],
        prefixos:   res[1],
        prefixos24: res[2],
        analises:   res[3],
        mitigacao:  res[4],
        eventos:    res[5]
      };
    });
  }

  // Exportar snapshot completo como JSON (para backup / auditoria)
  function exportarJSON() {
    return Promise.all([
      listarOperadoras(),
      listarTodosPrefixos24(),
      listarAnalises(),
      listarMitigacoes(),
      listarEventos(200)
    ]).then(function (res) {
      return {
        versao:    DB_VERSION,
        exportado_em: new Date().toISOString(),
        operadoras: res[0],
        prefixos:   res[1],
        analises:   res[2],
        mitigacao:  res[3],
        eventos:    res[4]
      };
    });
  }

  // ── Inicialização (pré-aquece a conexão) ──────────────────────────────────
  abrir().catch(function (e) {
    console.error('[BGP_DB] Falha na inicialização do IndexedDB:', e);
  });

  // ── Interface pública ─────────────────────────────────────────────────────
  return {
    // Operadoras
    salvarOperadora:         salvarOperadora,
    buscarOperadora:         buscarOperadora,
    listarOperadoras:        listarOperadoras,
    contarOperadoras:        contarOperadoras,

    // Prefixos
    salvarPrefixos:          salvarPrefixos,
    buscarPrefixosPorASN:    buscarPrefixosPorASN,
    listarTodosPrefixos24:   listarTodosPrefixos24,
    contarPrefixos24:        contarPrefixos24,

    // Análises
    salvarAnalise:           salvarAnalise,
    buscarAnalise:           buscarAnalise,
    listarAnalises:          listarAnalises,
    contarDesvios:           contarDesvios,

    // Mitigação
    salvarMitigacao:         salvarMitigacao,
    listarMitigacoes:        listarMitigacoes,
    buscarMitigacoesPorPrefixo:   buscarMitigacoesPorPrefixo,
    buscarMitigacoesPorMitigador: buscarMitigacoesPorMitigador,

    // Eventos
    registrarEvento:         registrarEvento,
    listarEventos:           listarEventos,

    // Utilitários
    limparTudo:              limparTudo,
    limparColeta:            limparColeta,
    limparMitigacao:         limparMitigacao,
    estatisticas:            estatisticas,
    exportarJSON:            exportarJSON,
    abrir:                   abrir   // acesso à conexão bruta (emergência)
  };

})();
