// BGP Analyzer - browser data client
// The browser no longer owns the database. This file keeps the old BGP_DB
// facade, but every operation is now persisted through the Node API.

var BGP_DB = (function () {
  var API_BASE = window.BGP_API_BASE || '/api';

  function url(path, params) {
    var finalUrl = API_BASE + path;
    if (params) {
      var qs = new URLSearchParams();
      Object.keys(params).forEach(function (key) {
        if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
          qs.set(key, params[key]);
        }
      });
      var str = qs.toString();
      if (str) finalUrl += '?' + str;
    }
    return finalUrl;
  }

  function request(path, options) {
    options = options || {};
    var headers = options.headers || {};
    if (options.body && !(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(options.body);
    }
    options.headers = headers;

    return fetch(url(path, options.query), options).then(function (res) {
      if (!res.ok) {
        return res.json().catch(function () { return {}; }).then(function (body) {
          throw new Error(body.error || ('API HTTP ' + res.status));
        });
      }
      if (res.status === 204) return null;
      return res.json();
    });
  }

  function abrir() {
    return request('/health');
  }

  function salvarOperadora(entry) {
    entry.coletado_em = entry.coletado_em || new Date().toISOString();
    return request('/operadoras', { method: 'POST', body: entry });
  }

  function buscarOperadora(asn) {
    return request('/operadoras/' + encodeURIComponent(String(asn))).catch(function (e) {
      if (String(e.message).includes('404')) return null;
      throw e;
    });
  }

  function listarOperadoras() {
    return request('/operadoras');
  }

  function contarOperadoras() {
    return estatisticas().then(function (stats) { return stats.operadoras || 0; });
  }

  function salvarPrefixos(asn, listaPrefixos) {
    return request('/prefixos/' + encodeURIComponent(String(asn)), {
      method: 'POST',
      body: { prefixos: listaPrefixos || [] }
    });
  }

  function buscarPrefixosPorASN(asn) {
    return request('/prefixos', { query: { asn: asn } }).then(function (rows) {
      return rows.map(function (r) { return r.prefixo; });
    });
  }

  function listarPrefixos() {
    return request('/prefixos');
  }

  function listarTodosPrefixos24() {
    return request('/prefixos', { query: { mascara: '24' } });
  }

  function contarPrefixos24() {
    return estatisticas().then(function (stats) { return stats.prefixos24 || 0; });
  }

  function salvarAnalise(asn, resultado) {
    resultado = resultado || {};
    resultado.analisado_em = resultado.analisado_em || new Date().toISOString();
    return request('/analises/' + encodeURIComponent(String(asn)), {
      method: 'POST',
      body: resultado
    });
  }

  function buscarAnalise(asn) {
    return request('/analises/' + encodeURIComponent(String(asn))).catch(function (e) {
      if (String(e.message).includes('404')) return null;
      throw e;
    });
  }

  function listarAnalises() {
    return request('/analises');
  }

  function contarDesvios() {
    return listarAnalises().then(function (rows) {
      return rows.filter(function (r) { return !!r.desvio_suspeito; }).length;
    });
  }

  function salvarMitigacao(resultado) {
    return request('/mitigacao', { method: 'POST', body: resultado || {} });
  }

  function listarMitigacoes() {
    return request('/mitigacao');
  }

  function buscarMitigacoesPorPrefixo(prefixo) {
    return request('/mitigacao', { query: { prefixo: prefixo } });
  }

  function buscarMitigacoesPorMitigador(asnMit) {
    return request('/mitigacao', { query: { asn_mitigador: asnMit } });
  }

  function registrarEvento(tipo, asn, detalhes) {
    return request('/eventos', {
      method: 'POST',
      body: { tipo: tipo, asn: asn, detalhes: detalhes || {} }
    });
  }

  function listarEventos(limite) {
    return request('/eventos', { query: { limite: limite || 50 } });
  }

  function limparTudo() {
    return request('/database', { method: 'DELETE' });
  }

  function limparColeta() {
    return request('/database/coleta', { method: 'DELETE' });
  }

  function limparMitigacao() {
    return request('/database/mitigacao', { method: 'DELETE' });
  }

  function estatisticas() {
    return request('/stats');
  }

  function exportarJSON() {
    return request('/export/json');
  }

  function transformarWarehouse() {
    return request('/export/warehouse');
  }

  function importarJSON(snapshot, opts) {
    opts = opts || {};
    return request('/import/json', {
      method: 'POST',
      query: { limparAntes: opts.limparAntes !== false },
      body: snapshot
    });
  }

  function migrarIndexedDBLegado() {
    if (typeof indexedDB === 'undefined') {
      return Promise.resolve({ migrado: false, motivo: 'IndexedDB indisponivel neste navegador.' });
    }
    return lerIndexedDBLegado().then(function (snapshot) {
      var total = snapshot.operadoras.length + snapshot.prefixos.length +
        snapshot.analises.length + snapshot.mitigacao.length + snapshot.eventos.length;
      if (!total) return { migrado: false, motivo: 'Nenhum dado legado encontrado.', total: 0 };
      return importarJSON(snapshot, { limparAntes: false }).then(function () {
        return {
          migrado: true,
          total: total,
          operadoras: snapshot.operadoras.length,
          prefixos: snapshot.prefixos.length,
          analises: snapshot.analises.length,
          mitigacao: snapshot.mitigacao.length,
          eventos: snapshot.eventos.length
        };
      });
    });
  }

  function lerIndexedDBLegado() {
    return new Promise(function (resolve) {
      var vazio = {
        formato: 'bgp-analyzer-browser-legacy',
        operadoras: [],
        prefixos: [],
        analises: [],
        mitigacao: [],
        eventos: []
      };
      var req;
      try {
        req = indexedDB.open('bgp_analyzer_db');
      } catch (e) {
        resolve(vazio);
        return;
      }
      req.onerror = function () { resolve(vazio); };
      req.onsuccess = function (ev) {
        var db = ev.target.result;
        var stores = Object.keys(vazio).filter(function (name) {
          return name !== 'formato' && db.objectStoreNames.contains(name);
        });
        if (!stores.length) {
          db.close();
          resolve(vazio);
          return;
        }
        Promise.all(stores.map(function (storeName) {
          return getAll(db, storeName).then(function (rows) { vazio[storeName] = rows; });
        })).then(function () {
          db.close();
          resolve(vazio);
        }).catch(function () {
          db.close();
          resolve(vazio);
        });
      };
    });
  }

  function getAll(db, storeName) {
    return new Promise(function (resolve) {
      try {
        var req = db.transaction(storeName, 'readonly').objectStore(storeName).getAll();
        req.onsuccess = function () { resolve(req.result || []); };
        req.onerror = function () { resolve([]); };
      } catch (e) {
        resolve([]);
      }
    });
  }

  abrir().catch(function (e) {
    console.error('[BGP_DB] API indisponivel:', e);
  });

  return {
    salvarOperadora: salvarOperadora,
    buscarOperadora: buscarOperadora,
    listarOperadoras: listarOperadoras,
    contarOperadoras: contarOperadoras,
    salvarPrefixos: salvarPrefixos,
    buscarPrefixosPorASN: buscarPrefixosPorASN,
    listarPrefixos: listarPrefixos,
    listarTodosPrefixos24: listarTodosPrefixos24,
    contarPrefixos24: contarPrefixos24,
    salvarAnalise: salvarAnalise,
    buscarAnalise: buscarAnalise,
    listarAnalises: listarAnalises,
    contarDesvios: contarDesvios,
    salvarMitigacao: salvarMitigacao,
    listarMitigacoes: listarMitigacoes,
    buscarMitigacoesPorPrefixo: buscarMitigacoesPorPrefixo,
    buscarMitigacoesPorMitigador: buscarMitigacoesPorMitigador,
    registrarEvento: registrarEvento,
    listarEventos: listarEventos,
    limparTudo: limparTudo,
    limparColeta: limparColeta,
    limparMitigacao: limparMitigacao,
    estatisticas: estatisticas,
    exportarJSON: exportarJSON,
    importarJSON: importarJSON,
    transformarWarehouse: transformarWarehouse,
    migrarIndexedDBLegado: migrarIndexedDBLegado,
    abrir: abrir
  };
})();
