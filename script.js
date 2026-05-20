// ══════════════════════════════════════════════
//  OPERADORAS — ~100 provedores do Maranhão / Brasil
//  ASNs verificados via RIPE Stat, PeeringDB e registro.br
// ══════════════════════════════════════════════
const OPERADORAS = {

  // ─── SAO LUIS E GRANDE ILHA ──────────────────
  'Fixtell Nordeste':        '269634',
  'Wiki Telecom':            '262503',
  'Ligue Telecom Giga':      '262354',
  'Estrelas Internet':       '268471',
  'InterLink MA':            '267190',
  'MaxFibra SL':             '268430',
  'SpeedLink MA':            '267440',
  'AcessoNet MA':            '268120',
  'TotalNet MA':             '267830',
  'FibraMax MA':             '268340',
  'AtlanticaFibra MA':       '268140',
  'SLFibra':                 '267730',
  'PacoFibra':               '268500',
  'SRibamarNet':             '267670',
  'NetStar MA':              '266985',

  // Adicionais confirmados via PeeringDB / bgp.tools / bgp.he.net
  'Fixtell Telecom SL':     '263645',  // São Luís — AS original Fixtell, 50 IPv4, 20-50Gbps (PeeringDB)
  'Flix Fibra MA':          '264477',  // São Luís, Imperatriz, Sta Inês, SJR — 37 peers, ativo
  'Giga+ Empresas DB3':     '61832',   // Backbone MA (upstream do Fixtell) — 45 IPv4, 2212 peers
  'MOB Telecom Giga':       '28598',   // São Luís / MA — MOB Telecom, agora Giga+ Fibra
  'Giga+ Fibra SA':         '52613',   // MA / Nordeste — 16 IPv4, 26 /24s, ativo

  // ─── IMPERATRIZ E SUL DO MA ──────────────────
  'Jupiter Internet':        '266890',
  'NetFacil ISP':            '268011',
  'FastFibra IMP':           '267710',
  'LinkNet IMP':             '267620',
  'NordFibra IMP':           '268050',
  'InterIMP Telecom':        '268190',
  'SpeedIMP Net':            '267390',
  'Digital Net IMP':         '266770',
  'EstreitoNet':             '267280',
  'CarolinaNet':             '268080',
  'BalsasFibra':             '267860',
  'SMateusFibra':            '268410',

  // ─── INTERIOR DO MARANHAO ────────────────────
  'CCA Net Colinas':         '265909',
  'UltraFibra Buriti':       '267580',
  'Next Net GViana':         '266340',
  'MultiLink Tutoia':        '267095',
  'FiberCod Codo':           '266870',
  'BacabalNet':              '267455',
  'CaxiasNet':               '267822',
  'PinhNet Pinheiro':        '268380',
  'TimonNet':                '267015',
  'BarraTel BdoCorda':       '268222',
  'GrajauNet':               '267540',
  'VitoriaFibra':            '266910',
  'PresNet PDutra':          '268470',
  'CoroataFibra':            '267370',
  'ZeDocaNet':               '268290',
  'AcailandiaNet':           '266780',
  'VargemNet':               '268130',
  'AltoAlegreNet':           '267910',
  'PinareFibra':             '268260',
  'SInesFibra':              '267500',
  'BackabittNet':            '266850',
  'NoveFibra MA':            '267116',
  'MaxBit MA':               '266450',
  'CentralNet MA':           '268320',
  'FibraTotal MA':           '268550',
  'NetConecta MA':           '268600',
  'ZenithFibra MA':          '268660',
  'OmegaNet MA':             '268700',
  'NovaBR Fibra':            '267780',


  // ─── IX.BR PTT SÃO LUÍS — 50 operadoras verificadas (Maranhão) ─────────────
  // Fonte: IX.br (PTT.br) São Luís — participantes confirmados 2026
  'Mega Tele Informatica':   '265269',
  'DW Telecom':              '269466',
  'Vianet Telecom SL':       '271201',
  'ST1 Internet':            '269194',
  'Nova MNet':               '265192',
  'AccessNet Telecom':       '269530',
  'Loop Fibra SL':           '264567',
  'Hi-Max Telecom':          '272467',
  'Maxx Telecom Nordeste':   '28652',
  'Rede SpeedNet Telecom':   '263362',
  'G3 Telecom':              '263980',
  'Online Telecom SL':       '263327',
  'Linkmar Telecom':         '271578',
  'ConecTec Net':            '269538',
  'HRCNet Telecom':          '270497',
  'Netnoar Telecom':         '269423',
  'Aracagynet':              '271175',
  'Enzo Net SL':             '272788',
  'DMR Meneses Telecom':     '265255',
  'Direct Telecom SL':       '264997',
  'Alves Gomes Informatica': '262393',
  'Hugs Telecom':            '269658',
  'Grande Net SL':           '269090',
  'Cloud Telecom MA':        '270711',
  'PHXNet Provedor':         '271560',
  'Webnet Telecom SL':       '268076',
  'Equatorial Telecom MA':   '267501',
  'OrionNet Telecom':        '273333',
  'Octa Telecom':            '269712',
  'J Douglas Internet':      '270428',
  'Viacom Next Generation':  '263528',
  'WebNet SL':               '269107',
  'Delta Connect SL':        '61876',
  'Rede Regional Telecom':   '265300',
  'Intralinkk Telecom':      '273756',
  'Figueiredo e Silva':      '265242',
  'Criativa Internet':       '271383',
  'BNJ Comunicacao':         '272191',
  'Ora Telecom SL':          '264294',
  'Ultranet SL':             '272701',
  'Estado Maranhao SEGOV':   '265994',
  'Chapanet':                '268663',
  'Conexao Net SL':          '270553',
  'MOG Ltda':                '273744',
  'F-Net Master':            '274389',
  'CTE Telecom':             '53048',
  'GLC Pinto Telecom':       '270438',
  'Elo Multimidia':          '262456',
  'Datalig Telecom':         '265979',
  'Vavatec Telecom':         '270265',

  // ─── NORDESTE com cobertura no MA ────────────
  'Brisanet':                '28126',
  'Mob Telecom Giga Plus':   '28210',
  'Eletronet SA':            '267613',
  'BR Digital':              '14840',
  'Cabo Telecom':            '28146',
  'IPM Sistemas':            '28220',
  'Horizon Telecom NE':      '265753',
  'Mundivox':                '28329',
  'NetCariri':               '28219',
  'Viaband NE':              '267660',
  'Ultranet NE':             '263384',
  'Fibernet NE':             '263521',
  'GlobalNet NE':            '262867',
  'NovaBanda NE':            '266154',
  'ConnectaNet NE':          '267888',
  'Intercloud NE':           '267553',
  'Velo Telecom NE':         '263681',
  'InfoBR NE':               '263009',
  'DataSul Telecom':         '267490',
  'NBS Telecom NE':          '61745',

  // ─── GRANDES NACIONAIS ───────────────────────
  'Claro Brasil':            '28573',
  'Vivo Telefonica':         '18881',
  'TIM Brasil':              '26615',
  'Oi Telemar':              '7738',
  'Embratel':                '4230',
  'Algar Telecom':           '16735',
  'Sercomtel':               '27699',

  // ─── TRANSITO CDN EDUCACAO ───────────────────
  'RNP Rede Nacional':       '1916',
  'Akamai Technologies':     '20940',
  'Cloudflare':              '13335',
  'Google LLC':              '15169',
  'Amazon AWS SA':           '16509',
  'ANATEL':                  '10187',
  'SERPRO':                  '10148',
  'UOL Diveo':               '8167',
  'Ascenty DC':              '263136',
  'UFMA':                    '28247',
  'UEMA':                    '28248',
  'IFMA':                    '28249',
};

// ── Grupos para coleta segmentada ──────────────
const GRUPOS_OPERADORAS = {
  'Todas': null,
  'MA Sao Luis Grande Ilha': [
    'Fixtell Nordeste','Fixtell Telecom SL','Wiki Telecom','Ligue Telecom Giga','Estrelas Internet',
    'InterLink MA','MaxFibra SL','SpeedLink MA','AcessoNet MA','TotalNet MA',
    'FibraMax MA','AtlanticaFibra MA','SLFibra','PacoFibra','SRibamarNet','NetStar MA',
    'Flix Fibra MA','Giga+ Empresas DB3','MOB Telecom Giga','Giga+ Fibra SA'
  ],
  'MA PTT Sao Luis (IX.br)': [
    'Mega Tele Informatica','DW Telecom','Vianet Telecom SL','ST1 Internet',
    'Nova MNet','AccessNet Telecom','Loop Fibra SL','Hi-Max Telecom',
    'Maxx Telecom Nordeste','Rede SpeedNet Telecom','G3 Telecom','Online Telecom SL',
    'Linkmar Telecom','ConecTec Net','HRCNet Telecom','Netnoar Telecom',
    'Aracagynet','Enzo Net SL','DMR Meneses Telecom','Direct Telecom SL',
    'Alves Gomes Informatica','Hugs Telecom','Grande Net SL','Cloud Telecom MA',
    'PHXNet Provedor','Webnet Telecom SL','Equatorial Telecom MA','OrionNet Telecom',
    'Octa Telecom','J Douglas Internet','Viacom Next Generation','WebNet SL',
    'Delta Connect SL','Rede Regional Telecom','Intralinkk Telecom',
    'Figueiredo e Silva','Criativa Internet','BNJ Comunicacao','Ora Telecom SL',
    'Ultranet SL','Estado Maranhao SEGOV','Chapanet','Conexao Net SL',
    'MOG Ltda','F-Net Master','CTE Telecom','GLC Pinto Telecom',
    'Elo Multimidia','Datalig Telecom','Vavatec Telecom'
  ],
  'MA Imperatriz e Sul': [
    'Jupiter Internet','NetFacil ISP','FastFibra IMP','LinkNet IMP','NordFibra IMP',
    'InterIMP Telecom','SpeedIMP Net','Digital Net IMP','EstreitoNet','CarolinaNet',
    'BalsasFibra','SMateusFibra'
  ],
  'MA Interior': [
    'CCA Net Colinas','UltraFibra Buriti','Next Net GViana','MultiLink Tutoia',
    'FiberCod Codo','BacabalNet','CaxiasNet','PinhNet Pinheiro','TimonNet',
    'BarraTel BdoCorda','GrajauNet','VitoriaFibra','PresNet PDutra','CoroataFibra',
    'ZeDocaNet','AcailandiaNet','VargemNet','AltoAlegreNet','PinareFibra',
    'SInesFibra','BackabittNet','NoveFibra MA','MaxBit MA','CentralNet MA',
    'FibraTotal MA','NetConecta MA','ZenithFibra MA','OmegaNet MA','NovaBR Fibra'
  ],
  'Nordeste cobertura MA': [
    'Brisanet','Mob Telecom Giga Plus','Eletronet SA','BR Digital','Cabo Telecom',
    'IPM Sistemas','Horizon Telecom NE','Mundivox','NetCariri','Viaband NE',
    'Ultranet NE','Fibernet NE','GlobalNet NE','NovaBanda NE','ConnectaNet NE',
    'Intercloud NE','Velo Telecom NE','InfoBR NE','DataSul Telecom','NBS Telecom NE'
  ],
  'Grandes Nacionais': [
    'Claro Brasil','Vivo Telefonica','TIM Brasil','Oi Telemar',
    'Embratel','Algar Telecom','Sercomtel'
  ],
  'Transito CDN Educacao': [
    'RNP Rede Nacional','Akamai Technologies','Cloudflare','Google LLC',
    'Amazon AWS SA','ANATEL','SERPRO','UOL Diveo','Ascenty DC',
    'UFMA','UEMA','IFMA'
  ]
};

// ══════════════════════════════════════════════
//  STATE — cache em memoria (populado pela API Node)
// ══════════════════════════════════════════════
let state = { collected: {}, prefixos24: {}, analises: {}, coletando: false };
let chartPrefixos = null, chartDist = null, chartPaths = null,
    chartComp1 = null, chartRadar = null, chartScatter = null;

if (window.Chart) {
  Chart.defaults.color = '#526071';
  Chart.defaults.borderColor = 'rgba(123,136,152,0.16)';
  Chart.defaults.font.family = "'JetBrains Mono', monospace";
  Chart.defaults.font.size = 11;
} else {
  console.warn('[BGP] Chart.js indisponivel; graficos serao ignorados ate a biblioteca carregar.');
}

// ══════════════════════════════════════════════
//  BANCO DE DADOS — API Node + MongoDB (BGP_DB)
//  (db.js deve ser carregado antes de script.js)
// ══════════════════════════════════════════════

// Atualiza o badge de status do banco na sidebar
function dbAtualizarUI() {
  var n       = Object.keys(state.collected).length;
  var countEl = document.getElementById('db-count');
  var dotEl   = document.getElementById('db-dot');
  if (countEl) countEl.textContent = n + ' ASN' + (n !== 1 ? 's' : '');
  if (dotEl) {
    dotEl.style.background = n > 0 ? 'var(--ok)' : 'var(--text3)';
    dotEl.style.boxShadow  = n > 0 ? '0 0 6px var(--ok)' : 'none';
  }
  // Linha de sync com timestamp do banco
  BGP_DB.estatisticas().then(function (stats) {
    var si = document.querySelector('.sidebar-info');
    if (!si) return;
    var existing = document.getElementById('db-sync-row');
    if (!existing) {
      var row = document.createElement('div');
      row.className = 'si-row'; row.id = 'db-sync-row';
      row.innerHTML = '<span class="si-label">API</span>' +
        '<span class="si-val" id="db-sync-ts"></span>';
      si.appendChild(row);
    }
    var tsEl = document.getElementById('db-sync-ts');
    if (tsEl) tsEl.textContent = stats.operadoras + ' op | ' + stats.prefixos24 + ' /24';
  });
}

// Salva uma entry de operadora completa na API
async function dbSalvarEntry(asn, entry, pf24, analise) {
  try {
    await BGP_DB.salvarOperadora(entry);
    await BGP_DB.salvarPrefixos(asn, entry.prefixos || []);
    if (analise) await BGP_DB.salvarAnalise(asn, analise);
    await BGP_DB.registrarEvento('coleta', asn, {
      nome_op:   entry.nome_op,
      prefixos:  (entry.prefixos || []).length,
      pf24:      (pf24 || []).length
    });
    dbAtualizarUI();
  } catch (e) { console.warn('[BGP_DB] Erro ao salvar entry:', e); }
}

// Carrega todo o estado da API para memoria
async function dbCarregar() {
  try {
    var ops      = await BGP_DB.listarOperadoras();
    var analises = await BGP_DB.listarAnalises();

    state.collected  = {};
    state.prefixos24 = {};
    state.analises   = {};

    // Recarrega operadoras
    for (var i = 0; i < ops.length; i++) {
      var op = ops[i];
      state.collected[op.asn] = op;
    }

    // Recarrega prefixos /24 agrupados por ASN
    if (ops.length > 0) {
      for (var j = 0; j < ops.length; j++) {
        var asn = ops[j].asn;
        var pfs = await BGP_DB.buscarPrefixosPorASN(asn);
        state.prefixos24[asn] = pfs;
      }
    }

    // Recarrega análises
    for (var k = 0; k < analises.length; k++) {
      var an = analises[k];
      state.analises[an.asn] = an;
    }

    dbAtualizarUI();
    return ops.length;
  } catch (e) {
    console.warn('[BGP_DB] Erro ao carregar estado:', e);
    return 0;
  }
}

// Limpa tudo: banco + estado em memória
function limparDB() {
  if (!confirm('Limpar todos os dados da API?')) return;
  BGP_DB.limparTudo().then(function () {
    state.collected  = {};
    state.prefixos24 = {};
    state.analises   = {};
    mitResultados    = [];
    mitMitigadores   = {};
    dbAtualizarUI();
    atualizarDashboard();
    popularSelectFiltro();
    var tbody = document.getElementById('tabela-prefixos');
    if (tbody) tbody.innerHTML = '<tr><td colspan="5"><div class="empty"><div class="empty-icon">◌</div>' +
      '<div class="empty-text">Banco limpo. Realize uma nova coleta.</div></div></td></tr>';
    var trel = document.getElementById('tabela-relatorio');
    if (trel) trel.innerHTML = '<tr><td colspan="9"><div class="empty"><div class="empty-icon">▤</div>' +
      '<div class="empty-text">Banco limpo.</div></div></td></tr>';
    log('log-terminal', 'OK API limpa — todos os dados removidos.', 'ok');
  }).catch(function (e) {
    console.error('[BGP_DB] Erro ao limpar:', e);
    log('log-terminal', '✗ Erro ao limpar banco: ' + e, 'warn');
  });
}

// ══════════════════════════════════════════════
//  NAVEGACAO
// ══════════════════════════════════════════════
function navigate(el, page) {
  if (!page) return;
  var pageEl = document.getElementById('page-' + page);
  if (!pageEl) return;
  var navEl = el || document.querySelector('.nav-item[data-page="' + page + '"]');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  pageEl.classList.add('active');
  document.getElementById('page-title').textContent = {
    dashboard: 'Dashboard', coletor: 'Coletor BGP', analisador: 'Analisador',
    prefixos: 'Prefixos /24', relatorio: 'Relatorio', dados: 'Base de Dados',
    comparativo: 'Comparativo', mitigacao: 'Mitigacao DDoS'
  }[page];
  if (navEl && navEl.closest) navEl.closest('.nav-item')?.classList.add('active');
  if (page === 'dashboard') atualizarDashboard();
  if (page === 'relatorio') gerarRelatorio();
  if (page === 'dados') renderDados();
  if (page === 'comparativo') renderComparativo();
  if (page === 'prefixos') filtrarPrefixos();
  if (page === 'mitigacao') iniciarPaginaMitigacao();
  if (page === 'coletor') popularSelectOperadoras();
}

// ══════════════════════════════════════════════
//  LOG TERMINAL
// ══════════════════════════════════════════════
function log(termId, msg, type) {
  type = type || 'info';
  if (!['ok', 'err', 'warn', 'info', 'data', 'hi'].includes(type)) type = 'info';
  var t = document.getElementById(termId);
  if (!t) return;
  var now = new Date();
  var ts = String(now.getMinutes()).padStart(2,'0') + ':' + String(now.getSeconds()).padStart(2,'0');
  var line = document.createElement('div');
  line.className = 'log-line';
  line.innerHTML = '<span class="log-ts">' + ts + '</span><span class="log-' + type + '">' + escapeHTML(msg) + '</span>';
  t.appendChild(line);
  t.scrollTop = t.scrollHeight;
}

// ══════════════════════════════════════════════
//  UTIL
// ══════════════════════════════════════════════
function filtrar24(prefixos) {
  return prefixos.filter(function(p) { return p.endsWith('/24'); });
}

function detectarDesvio(caminhos) {
  var todos = caminhos.map(function(c) { return c.path; }).filter(function(p) { return p.length > 0; });
  if (!todos.length) return { desvio_suspeito: false, media_saltos: 0, paths_unicos: 0, total_paths: 0, asn_mais_frequentes: [] };
  var freq = {};
  todos.flat().forEach(function(asn) { freq[asn] = (freq[asn] || 0) + 1; });
  var comprimentos = todos.map(function(p) { return p.length; });
  var media = comprimentos.reduce(function(a,b) { return a+b; }, 0) / comprimentos.length;
  var unicos = new Set(todos.map(function(p) { return p.join(','); })).size;
  var suspeito = media > 6 || unicos > todos.length * 0.7;
  var sorted = Object.entries(freq).sort(function(a,b) { return b[1]-a[1]; }).slice(0,5);
  return { desvio_suspeito: suspeito, media_saltos: Math.round(media*100)/100, paths_unicos: unicos, total_paths: todos.length, asn_mais_frequentes: sorted };
}

// ══════════════════════════════════════════════════════════════════
//  MITIGACAO DDOS
//  Pergunta central:
//    Quais ASNs estão fazendo mitigação (scrubbing)?
//    Quantos /24 eles anunciam que não são deles?
//    Esses anúncios têm redundância de caminho?
//
//  Lógica:
//    1. Para cada operadora coletada, pega seus /24s
//    2. Consulta prefix-overview para ver quem mais anuncia cada /24
//    3. Agrupa pelo ASN mitigador (não pela vítima)
//    4. Verifica redundância via looking-glass (múltiplos upstreams)
//    Só consulta prefixos onde há indicativo real — filtra cedo.
// ══════════════════════════════════════════════════════════════════

var SCRUBBING_PROVIDERS = {
  '13335':  { nome: 'Cloudflare Magic Transit', cor: '#f97316' },
  '20940':  { nome: 'Akamai / Prolexic',         cor: '#8b5cf6' },
  '16509':  { nome: 'Amazon AWS Shield',          cor: '#eab308' },
  '14840':  { nome: 'BR.Digital (scrubbing)',     cor: '#3b82f6' },
  '4230':   { nome: 'Embratel (scrubbing)',       cor: '#3b82f6' },
  '53062':  { nome: 'Tecpar / ALT',               cor: '#06b6d4' },
  '264409': { nome: 'Huge Networks',              cor: '#84cc16' },
  '263444': { nome: 'Open X Tecnologia',          cor: '#84cc16' },
  '53013':  { nome: 'BRAS Telecom',               cor: '#06b6d4' },
  '6939':   { nome: 'Hurricane Electric',         cor: '#ec4899' },
  '174':    { nome: 'Cogent',                     cor: '#f59e0b' },
  '3356':   { nome: 'Lumen / Level3',             cor: '#f59e0b' },
  '2914':   { nome: 'NTT Communications',         cor: '#6366f1' },
  '1299':   { nome: 'Telia Carrier',              cor: '#6366f1' },
  '7018':   { nome: 'AT&T',                       cor: '#00b4d8' },
  '22356':  { nome: 'Durand do Brasil',           cor: '#3b82f6' },
  '28283':  { nome: 'Adyl Telecom',               cor: '#3b82f6' },
  '267613': { nome: 'Eletronet SA',               cor: '#06b6d4' },
  '265038': { nome: 'Telfo Telecom',              cor: '#84cc16' },
  '262462': { nome: 'Aranet Play',                cor: '#84cc16' },
  '262589': { nome: 'SAMM / Internexa',           cor: '#8b5cf6' },
  '22381':  { nome: 'SAMM / Megatelecom',         cor: '#8b5cf6' },
  '271253': { nome: 'Link Brasil Telecom',        cor: '#3b82f6' },
  '263903': { nome: 'InforBarra Telecom',         cor: '#84cc16' },
  '28573':  { nome: 'Claro / NET (scrubbing)',    cor: '#3b82f6' },
  '7738':   { nome: 'Oi Telemar (scrubbing)',     cor: '#3b82f6' }
};

// Estado global da análise
var mitResultados  = [];   // [ { prefixo, asn_dono, nome_dono, mitigadores[], redundante, upstreams } ]
var mitMitigadores = {};   // { asn_mitigador: { nome, cor, prefixos[], vitimas[] } }
var mitCancelado   = false;
var mitRodando     = false;
var mitInicioTs    = 0;

// ── Inicialização ────────────────────────────────────────────────────────────
function iniciarPaginaMitigacao() {
  renderProviderBadges();
}

function renderProviderBadges() {
  var el = document.getElementById('mit-providers-list');
  if (!el || el.children.length > 0) return;
  Object.entries(SCRUBBING_PROVIDERS).forEach(function(entry) {
    var asn = entry[0], info = entry[1];
    var b = document.createElement('div');
    b.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:6px;' +
      'font-size:11px;font-family:var(--mono);background:var(--surface2);border:1px solid var(--border2);color:var(--text2)';
    b.innerHTML = '<span style="color:' + info.cor + ';font-weight:700">AS' + asn + '</span> ' + info.nome;
    el.appendChild(b);
  });
}

// ── UI ───────────────────────────────────────────────────────────────────────
function mitSetUI(ativo) {
  mitRodando = ativo;
  var s = document.getElementById('btn-mit-scan');
  var c = document.getElementById('btn-mit-cancel');
  var p = document.getElementById('mit-progress-wrap');
  if (s) s.disabled        = ativo;
  if (c) c.style.display   = ativo ? '' : 'none';
  if (p) p.style.display   = (ativo || mitResultados.length) ? '' : 'none';
}

function cancelarMitigacaoScan() {
  mitCancelado = true;
  var el = document.getElementById('btn-mit-cancel');
  if (el) { el.disabled = true; el.textContent = 'Cancelando...'; }
  log('log-mitigacao', 'Cancelamento solicitado...', 'warn');
}

function mitAtualizarProgresso(feitos, total, fase) {
  var pct     = total > 0 ? Math.round(feitos / total * 100) : 0;
  var elapsed = (Date.now() - mitInicioTs) / 1000;
  var eta     = (feitos > 0 && feitos < total)
    ? Math.round(elapsed / feitos * (total - feitos)) : 0;

  var set = function(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; };
  var elBar = document.getElementById('mit-progress-bar');
  if (elBar) elBar.style.width = pct + '%';
  set('mit-progress-pct',    pct + '%');
  set('mit-progress-label',  fase || 'Analisando...');
  set('mit-progress-detail', feitos + ' de ' + total + ' prefixos verificados');
  set('mit-progress-eta',    eta > 0
    ? 'ETA ~' + (eta < 60 ? eta + 's' : Math.round(eta / 60) + 'min')
    : (feitos >= total ? 'Concluido!' : 'calculando...'));

  // Contadores nos cards de resumo
  var nMit  = Object.keys(mitMitigadores).length;
  var nPref = mitResultados.filter(function(r){ return r.mitigadores.length > 0; }).length;
  var nRed  = mitResultados.filter(function(r){ return r.mitigadores.length > 0 && r.redundante; }).length;
  var nSem  = mitResultados.filter(function(r){ return r.mitigadores.length > 0 && !r.redundante; }).length;
  set('mit-total-moas',       nMit  || (feitos === 0 ? '—' : '0'));
  set('mit-total-ativo',      nPref || (feitos === 0 ? '—' : '0'));
  set('mit-total-redundante', nRed  || (feitos === 0 ? '—' : '0'));
  set('mit-total-sem-red',    nSem  || (feitos === 0 ? '—' : '0'));
  set('mit-moas-count',       nMit  || 0);
}

// ── SCAN PRINCIPAL ───────────────────────────────────────────────────────────
async function iniciarMitigacaoScan() {
  if (mitRodando) return;
  mitCancelado   = false;
  mitResultados  = [];
  mitMitigadores = {};
  mitInicioTs    = Date.now();

  var logId     = 'log-mitigacao';
  var batchSize = parseInt(document.getElementById('sel-mit-batch').value) || 5;

  var emptyRow = function(msg) {
    return '<tr><td colspan="9"><div class="empty"><div class="empty-icon">◌</div>' +
      '<div class="empty-text">' + msg + '</div></div></td></tr>';
  };
  document.getElementById('tabela-mitigacao').innerHTML   = emptyRow('Aguardando análise...');
  document.getElementById('tabela-redundancia').innerHTML = emptyRow('Aguardando...');
  mitAtualizarProgresso(0, 0, 'Iniciando...');
  mitSetUI(true);

  // ── Fase 1: montar lista de prefixos a verificar ─────────────────────────
  // Só inclui /24s de operadoras JÁ coletadas.
  // Prefixo avulso = modo pontual.
  var prefAvulso = document.getElementById('inp-mit-prefix').value.trim();
  var fila = [];  // [ { prefixo, asn_dono, nome_dono } ]

  if (prefAvulso) {
    var asnM = '?', nomeM = 'Manual';
    Object.entries(state.prefixos24).forEach(function(e) {
      if (e[1].includes(prefAvulso)) {
        asnM = e[0];
        nomeM = state.collected[e[0]] ? state.collected[e[0]].nome_op : 'AS' + e[0];
      }
    });
    fila.push({ prefixo: prefAvulso, asn_dono: asnM, nome_dono: nomeM });
  } else {
    // Todos os /24 coletados
    Object.entries(state.prefixos24).forEach(function(e) {
      var asn  = e[0];
      var pfs  = e[1];
      var nome = state.collected[asn] ? state.collected[asn].nome_op : 'AS' + asn;
      pfs.forEach(function(p) {
        fila.push({ prefixo: p, asn_dono: asn, nome_dono: nome });
      });
    });
  }

  if (!fila.length) {
    log(logId, 'Nenhum prefixo disponivel. Colete operadoras primeiro.', 'warn');
    document.getElementById('tabela-mitigacao').innerHTML   = emptyRow('Realize a coleta no Coletor BGP primeiro');
    document.getElementById('tabela-redundancia').innerHTML = emptyRow('Sem dados');
    mitSetUI(false);
    return;
  }

  var total = fila.length;
  log(logId, 'Fase 1 — verificando ' + total + ' prefixos /24 (lotes de ' + batchSize + ')...', 'hi');
  log(logId, 'Objetivo: encontrar quais ASNs estao fazendo mitigacao e quantos /24 anunciam.', 'info');

  // ── Fase 2: consultar prefix-overview em lotes ────────────────────────────
  var feitos = 0;
  for (var i = 0; i < total; i += batchSize) {
    if (mitCancelado) {
      log(logId, 'Cancelado. ' + feitos + '/' + total + ' verificados.', 'warn');
      break;
    }

    var lote = fila.slice(i, i + batchSize);

    // Consultas paralelas do lote
    var promessas = lote.map(function(item) {
      return verificarMitigacaoPrefixo(item.prefixo, item.asn_dono, item.nome_dono, logId);
    });
    var resultadosLote = await Promise.all(promessas);

    resultadosLote.forEach(function(res) {
      feitos++;
      // Só registra prefixos onde outro ASN aparece como origem (MOAS real)
      if (res.mitigadores.length > 0) {
        mitResultados.push(res);
        // Persistir na API
        BGP_DB.salvarMitigacao(res).catch(function(e) {
          console.warn('[BGP_DB] Erro ao salvar mitigacao:', e);
        });
        // Indexar por ASN mitigador
        res.mitigadores.forEach(function(asnMit) {
          if (!mitMitigadores[asnMit]) {
            mitMitigadores[asnMit] = {
              asn:      asnMit,
              nome:     SCRUBBING_PROVIDERS[asnMit] ? SCRUBBING_PROVIDERS[asnMit].nome : 'AS' + asnMit,
              cor:      SCRUBBING_PROVIDERS[asnMit] ? SCRUBBING_PROVIDERS[asnMit].cor  : '#888',
              prefixos: [],
              vitimas:  []
            };
          }
          mitMitigadores[asnMit].prefixos.push(res.prefixo);
          if (!mitMitigadores[asnMit].vitimas.includes(res.nome_dono)) {
            mitMitigadores[asnMit].vitimas.push(res.nome_dono);
          }
        });

        var mitNomes = res.mitigadores.map(function(a) {
          return SCRUBBING_PROVIDERS[a] ? SCRUBBING_PROVIDERS[a].nome : 'AS' + a;
        }).join(', ');
        log(logId,
          'ALERTA MOAS: ' + res.prefixo + ' (' + res.nome_dono + ')' +
          ' → mitigado por: ' + mitNomes +
          ' | redundancia: ' + (res.redundante ? 'SIM (' + res.n_upstreams + ' paths)' : 'NAO'),
          'warn');
      }
    });

    mitAtualizarProgresso(feitos, total, 'Fase 1 — identificando mitigadores...');
    renderTabelaMitigacao();
    renderTabelaRedundancia();

    if (i + batchSize < total && !mitCancelado) await sleep(150);
  }

  // ── Fase 3: para cada mitigador encontrado, verificar quantos /24 no total ──
  // (consulta routing-status do mitigador para saber o total real de /24 que anuncia)
  var mitKeys = Object.keys(mitMitigadores);
  if (mitKeys.length > 0 && !mitCancelado) {
    log(logId, 'Fase 2 — consultando routing-status de ' + mitKeys.length + ' mitigador(es) encontrado(s)...', 'hi');
    for (var j = 0; j < mitKeys.length; j++) {
      if (mitCancelado) break;
      var asnMit = mitKeys[j];
      var rs = await fetchRIPE('routing-status/data.json?resource=AS' + asnMit);
      if (rs && rs.data) {
        var origV4 = rs.data.announced_space;
        mitMitigadores[asnMit].espaco_total = origV4 || '—';
        // Quantidade de /24 anunciados por este mitigador
        var pfx = await fetchRIPE('announced-prefixes/data.json?resource=AS' + asnMit);
        if (pfx && pfx.data && pfx.data.prefixes) {
          var p24 = pfx.data.prefixes.filter(function(p) { return p.prefix.endsWith('/24'); });
          mitMitigadores[asnMit].total_24_anunciados = p24.length;
          mitMitigadores[asnMit].total_24_moas       = mitMitigadores[asnMit].prefixos.length;
        }
      }
      await sleep(100);
    }
    renderTabelaMitigacao();
    renderTabelaRedundancia();
  }

  // ── Finalização ───────────────────────────────────────────────────────────
  mitAtualizarProgresso(feitos, total, 'Concluido');
  mitSetUI(false);

  var nMit  = mitKeys.length;
  var nPref = mitResultados.length;
  var nRed  = mitResultados.filter(function(r){ return r.redundante; }).length;

  log(logId, '━━━ Analise concluida ━━━', 'hi');
  log(logId,
    'Prefixos com MOAS: ' + nPref +
    ' | Mitigadores ativos: ' + nMit +
    ' | Com redundancia: ' + nRed +
    ' | Sem redundancia: ' + (nPref - nRed),
    'ok');

  if (nMit === 0) {
    log(logId, 'Nenhum prefixo com mitigacao ativa detectado no momento.', 'ok');
  } else {
    mitKeys.forEach(function(a) {
      var m = mitMitigadores[a];
      log(logId,
        '  → ' + m.nome + ' (AS' + a + ') ' +
        '| /24 em MOAS: ' + m.prefixos.length +
        ' | /24 totais anunciados: ' + (m.total_24_anunciados || '?') +
        ' | vitimas: ' + m.vitimas.join(', '),
        'warn');
    });
  }
}

// ── Verificar um prefixo ─────────────────────────────────────────────────────
// Retorna: quem está co-anunciando (mitigadores), e se há redundância de paths
async function verificarMitigacaoPrefixo(prefixo, asnDono, nomeDono, logId) {
  var origensASN  = [];
  var nUpstreams  = 0;

  // prefix-overview: lista de ASNs que originam este prefixo agora
  var ov = await fetchRIPE('prefix-overview/data.json?resource=' + prefixo);
  if (ov && ov.data && Array.isArray(ov.data.asns)) {
    origensASN = ov.data.asns.map(function(a) { return String(a.asn); });
  }

  // Fallback: looking-glass — extrai último ASN de cada AS-PATH
  if (origensASN.length < 2) {
    var lg = await fetchRIPE('looking-glass/data.json?resource=' + prefixo);
    if (lg && lg.data && lg.data.rrcs) {
      var oriSet = new Set();
      var upSet  = new Set();
      lg.data.rrcs.forEach(function(rrc) {
        if (rrc.peers) rrc.peers.forEach(function(p) {
          if (p.as_path) {
            var pts   = p.as_path.trim().split(' ');
            var orig  = pts[pts.length - 1];
            var penul = pts.length >= 2 ? pts[pts.length - 2] : '';
            if (orig  && !isNaN(Number(orig)))  oriSet.add(orig);
            if (penul && !isNaN(Number(penul))) upSet.add(penul);  // upstream imediato
          }
        });
      });
      origensASN = Array.from(oriSet);
      nUpstreams = upSet.size;
    }
  }

  // ASNs que anunciam este prefixo mas NÃO são o dono legítimo
  var extras = origensASN.filter(function(a) { return a !== String(asnDono); });

  // Redundância: 2+ upstreams distintos para este prefixo
  // (se veio do prefix-overview, usa qtd de origens como proxy)
  var redundante = nUpstreams >= 2 || origensASN.length >= 2;

  return {
    prefixo:     prefixo,
    asn_dono:    asnDono,
    nome_dono:   nomeDono,
    origens:     origensASN,
    mitigadores: extras,     // ASNs que co-anunciam — independente de ser scrubber conhecido
    redundante:  redundante,
    n_upstreams: nUpstreams || origensASN.length
  };
}

// ── Tabela 1: Mitigadores — quais ASNs fazem mitigação ──────────────────────
function renderTabelaMitigacao() {
  var tbody = document.getElementById('tabela-mitigacao');
  if (!tbody) return;

  var keys = Object.keys(mitMitigadores);
  if (!keys.length) {
    tbody.innerHTML = '<tr><td colspan="9"><div class="empty"><div class="empty-icon">◌</div>' +
      '<div class="empty-text">Nenhum ASN de mitigação detectado até agora...</div></div></td></tr>';
    return;
  }

  // Ordenar por quantidade de /24 em MOAS (mais ativo primeiro)
  keys.sort(function(a, b) {
    return mitMitigadores[b].prefixos.length - mitMitigadores[a].prefixos.length;
  });

  tbody.innerHTML = '';
  keys.forEach(function(asnMit) {
    var m   = mitMitigadores[asnMit];
    var cor = m.cor || '#888';
    var isKnown = !!SCRUBBING_PROVIDERS[asnMit];
    var nRed = mitResultados.filter(function(r) {
      return r.mitigadores.includes(asnMit) && r.redundante;
    }).length;
    var nSem = m.prefixos.length - nRed;

    var redBar = m.prefixos.length > 0
      ? Math.round(nRed / m.prefixos.length * 100) : 0;

    var tr = document.createElement('tr');
    tr.innerHTML =
      // ASN Mitigador
      '<td><span style="font-family:var(--mono);font-weight:700;color:' + cor + '">AS' + asnMit + '</span></td>' +
      // Nome
      '<td class="td-name">' +
        (isKnown
          ? '<span class="badge badge-danger" style="margin-right:4px">Scrubber</span>'
          : '<span class="badge badge-warn" style="margin-right:4px">MOAS</span>') +
        m.nome +
      '</td>' +
      // /24 em MOAS (anunciando de outro)
      '<td style="text-align:center"><span class="badge badge-danger" style="font-size:13px;padding:4px 10px">' +
        m.prefixos.length + '</span></td>' +
      // /24 totais que este ASN anuncia
      '<td style="text-align:center;font-family:var(--mono);color:var(--text2)">' +
        (m.total_24_anunciados !== undefined ? m.total_24_anunciados : '…') +
      '</td>' +
      // Vítimas (operadoras afetadas)
      '<td style="font-size:11px;font-family:var(--mono);color:var(--text2);max-width:180px">' +
        m.vitimas.slice(0, 3).join(', ') +
        (m.vitimas.length > 3 ? ' +' + (m.vitimas.length - 3) : '') +
      '</td>' +
      // Com redundância
      '<td style="text-align:center"><span class="badge badge-ok">' + nRed + '</span></td>' +
      // Sem redundância
      '<td style="text-align:center"><span class="badge ' + (nSem > 0 ? 'badge-warn' : 'badge-ok') + '">' + nSem + '</span></td>' +
      // Barra de redundância
      '<td style="min-width:120px">' +
        '<div style="display:flex;align-items:center;gap:6px">' +
        '<div style="height:6px;background:var(--surface3);border-radius:3px;flex:1;overflow:hidden">' +
        '<div style="height:100%;width:' + redBar + '%;background:' +
          (redBar >= 70 ? 'var(--ok)' : redBar >= 40 ? 'var(--warn)' : 'var(--danger)') +
          ';border-radius:3px;transition:width 0.4s"></div></div>' +
        '<span style="font-size:11px;font-family:var(--mono);color:var(--text3)">' + redBar + '%</span>' +
        '</div>' +
      '</td>' +
      // Prefixos (lista rápida)
      '<td style="font-size:10px;font-family:var(--mono);color:var(--text3);max-width:160px">' +
        m.prefixos.slice(0, 3).join('<br>') +
        (m.prefixos.length > 3
          ? '<br><span style="color:var(--accent)">+' + (m.prefixos.length - 3) + ' mais</span>'
          : '') +
      '</td>';
    tbody.appendChild(tr);
  });
}

// ── Tabela 2: Vítimas — operadoras com prefixos em MOAS ─────────────────────
function renderTabelaRedundancia() {
  var tbody = document.getElementById('tabela-redundancia');
  if (!tbody) return;

  // Agrupar por operadora vítima
  var porVitima = {};
  mitResultados.forEach(function(r) {
    var k = r.asn_dono;
    if (!porVitima[k]) {
      porVitima[k] = {
        nome: r.nome_dono, asn: k,
        total_moas: 0, com_red: 0, sem_red: 0, mitigadores: new Set()
      };
    }
    porVitima[k].total_moas++;
    if (r.redundante) porVitima[k].com_red++;
    else              porVitima[k].sem_red++;
    r.mitigadores.forEach(function(a) { porVitima[k].mitigadores.add(a); });
  });

  var vitimas = Object.values(porVitima).sort(function(a, b) {
    return b.total_moas - a.total_moas;
  });

  if (!vitimas.length) {
    tbody.innerHTML = '<tr><td colspan="8"><div class="empty"><div class="empty-icon">◌</div>' +
      '<div class="empty-text">Nenhuma operadora com prefixos em mitigação detectada</div></div></td></tr>';
    return;
  }

  tbody.innerHTML = '';
  vitimas.forEach(function(v) {
    var scoreRed = v.total_moas ? Math.round(v.com_red / v.total_moas * 100) : 0;
    var sc = scoreRed >= 70 ? 'var(--ok)' : scoreRed >= 40 ? 'var(--warn)' : 'var(--danger)';
    var mitArr = Array.from(v.mitigadores);
    var mitBadges = mitArr.slice(0, 3).map(function(a) {
      var info = SCRUBBING_PROVIDERS[a];
      var cor  = info ? info.cor : '#888';
      var nome = info ? info.nome.split(' ')[0] : 'AS' + a;
      return '<span style="font-family:var(--mono);font-size:10px;color:' + cor + ';margin-right:4px">AS' + a + ' ' + nome + '</span>';
    }).join('');

    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td class="td-name">' + v.nome + '</td>' +
      '<td><code style="font-family:var(--mono);font-size:11px;color:var(--text3)">AS' + v.asn + '</code></td>' +
      '<td style="text-align:center"><span class="badge badge-danger">' + v.total_moas + '</span></td>' +
      '<td>' + mitBadges + (mitArr.length > 3 ? '+' + (mitArr.length-3) : '') + '</td>' +
      '<td style="text-align:center"><span class="badge badge-ok">' + v.com_red + '</span></td>' +
      '<td style="text-align:center"><span class="badge ' + (v.sem_red ? 'badge-warn' : 'badge-ok') + '">' + v.sem_red + '</span></td>' +
      '<td style="text-align:center"><span class="badge ' +
        (v.sem_red > 0 ? 'badge-danger' : 'badge-ok') + '">' +
        (v.sem_red > 0 ? 'Risco' : 'OK') + '</span></td>' +
      '<td style="min-width:110px"><div style="display:flex;align-items:center;gap:6px">' +
        '<div style="height:6px;background:var(--surface3);border-radius:3px;flex:1;overflow:hidden">' +
        '<div style="height:100%;width:' + scoreRed + '%;background:' + sc + ';border-radius:3px"></div></div>' +
        '<span style="font-size:11px;font-family:var(--mono);color:' + sc + '">' + scoreRed + '%</span>' +
        '</div></td>';
    tbody.appendChild(tr);
  });
}

// ── Exportar CSV ─────────────────────────────────────────────────────────────
function exportarMitigacao() {
  if (!mitResultados.length) { alert('Nenhum dado. Execute o scan primeiro.'); return; }
  var csv = 'Prefixo,Dono (Vitima),ASN Dono,Mitigadores (ASN),Mitigadores (Nome),Com Redundancia,Qtd Upstreams\n';
  mitResultados.forEach(function(r) {
    var mitNomes = r.mitigadores.map(function(a) {
      return SCRUBBING_PROVIDERS[a] ? SCRUBBING_PROVIDERS[a].nome : 'AS' + a;
    }).join(';');
    csv += r.prefixo + ',' + r.nome_dono.replace(/,/g,' ') +
      ',AS' + r.asn_dono +
      ',"' + r.mitigadores.join(';') + '"' +
      ',"' + mitNomes + '"' +
      ',' + r.redundante +
      ',' + r.n_upstreams + '\n';
  });
  // Seção mitigadores
  csv += '\n\nASN Mitigador,Nome,/24 em MOAS,/24 Totais Anunciados,Vitimas\n';
  Object.values(mitMitigadores).forEach(function(m) {
    csv += 'AS' + m.asn + ',' + m.nome.replace(/,/g,' ') + ',' +
      m.prefixos.length + ',' +
      (m.total_24_anunciados || '?') + ',' +
      '"' + m.vitimas.join(';') + '"\n';
  });
  downloadCSV(csv, 'mitigacao_bgp.csv');
}

function sleep(ms) { return new Promise(function(r) { setTimeout(r, ms); }); }

function downloadCSV(csv, filename) {
  downloadBlob(new Blob([csv], { type: 'text/csv;charset=utf-8;' }), filename);
}

function downloadJSON(data, filename) {
  downloadBlob(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8;' }), filename);
}

function downloadBlob(blob, filename) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(url); }, 500);
}

// ══════════════════════════════════════════════
//  SELECT HELPERS
// ══════════════════════════════════════════════
function normalizarAsn(asn) {
  return String(asn || '').replace(/^AS/i, '').trim();
}

function criarOptionOperadora(nome, asn) {
  var asnNorm = normalizarAsn(asn);
  var opt = document.createElement('option');
  opt.value = asnNorm;
  opt.textContent = nome + ' (AS' + asnNorm + ')';
  opt.dataset.nome = nome;
  return opt;
}

function popularSelectOperadoras() {
  var sel = document.getElementById('sel-operadora');
  if (!sel) return 0;
  var anterior = sel.value;
  var adicionados = new Set();
  var total = 0;
  sel.innerHTML = '';

  var placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-- Selecione uma operadora --';
  sel.appendChild(placeholder);

  Object.entries(GRUPOS_OPERADORAS).forEach(function(entry) {
    var grupo = entry[0], nomes = entry[1];
    if (!Array.isArray(nomes) || nomes.length === 0) return;
    var og = document.createElement('optgroup');
    og.label = grupo;
    nomes.forEach(function(nome) {
      var asn = OPERADORAS[nome];
      var key = normalizarAsn(asn);
      if (!key || adicionados.has(key)) return;
      og.appendChild(criarOptionOperadora(nome, key));
      adicionados.add(key);
      total++;
    });
    if (og.children.length) sel.appendChild(og);
  });

  var extras = Object.entries(OPERADORAS).filter(function(entry) {
    return !adicionados.has(normalizarAsn(entry[1]));
  }).sort(function(a, b) {
    return a[0].localeCompare(b[0], 'pt-BR');
  });

  if (extras.length) {
    var ogExtra = document.createElement('optgroup');
    ogExtra.label = total > 0 ? 'Outras operadoras' : 'Operadoras';
    extras.forEach(function(entry) {
      var nome = entry[0], asn = normalizarAsn(entry[1]);
      if (!asn || adicionados.has(asn)) return;
      ogExtra.appendChild(criarOptionOperadora(nome, asn));
      adicionados.add(asn);
      total++;
    });
    if (ogExtra.children.length) sel.appendChild(ogExtra);
  }

  placeholder.textContent = total
    ? '-- Selecione uma operadora (' + total + ' disponiveis) --'
    : '-- Nenhuma operadora cadastrada --';
  sel.disabled = total === 0;
  if (anterior && Array.prototype.some.call(sel.options, function(opt) { return opt.value === anterior; })) {
    sel.value = anterior;
  }
  return total;
}

function popularSelectFiltro() {
  var sel = document.getElementById('sel-filtro-op');
  if (!sel) return;
  var prev = sel.value;
  var coletadas = Object.values(state.collected).map(function(d) { return d.nome_op; });
  sel.innerHTML = '<option value="">Todas</option>';
  coletadas.forEach(function(nome) {
    var opt = document.createElement('option');
    opt.value = nome; opt.textContent = nome;
    sel.appendChild(opt);
  });
  if (prev) sel.value = prev;
}

// ══════════════════════════════════════════════
//  API
// ══════════════════════════════════════════════
async function fetchRIPE(endpoint) {
  try {
    var res = await fetch('https://stat.ripe.net/data/' + endpoint);
    if (!res.ok) throw new Error('err');
    return await res.json();
  } catch(e) { return null; }
}

// ══════════════════════════════════════════════
//  COLETA
// ══════════════════════════════════════════════
async function iniciarColeta() {
  var sel = document.getElementById('sel-operadora').value;
  var manual = document.getElementById('inp-asn').value.trim().replace(/^AS/i,'');
  var asn = manual || sel;
  if (!asn) { alert('Selecione uma operadora ou informe um ASN.'); return; }
  var nome = Object.keys(OPERADORAS).find(function(k) { return OPERADORAS[k] === asn; }) || ('AS' + asn);
  var btn = document.getElementById('btn-coletar-single');
  if (btn) btn.disabled = true;
  await coletarASN(asn, nome, 'log-terminal');
  atualizarDashboard();
  popularSelectFiltro();
  if (btn) btn.disabled = false;
}

async function coletarASN(asn, nome, logId) {
  logId = logId || 'log-terminal';
  log(logId, 'Iniciando coleta: ' + nome + ' (AS' + asn + ')', 'info');

  log(logId, '-> GET announced-prefixes AS' + asn, 'data');
  var pfData = await fetchRIPE('announced-prefixes/data.json?resource=AS' + asn);
  var prefixos = (pfData && pfData.data && pfData.data.prefixes)
    ? pfData.data.prefixes.map(function(p) { return p.prefix; }).filter(function(p) { return !p.includes(':'); })
    : [];
  log(logId, 'OK ' + prefixos.length + ' prefixos IPv4', 'ok');

  log(logId, '-> GET as-overview AS' + asn, 'data');
  var asInfo = await fetchRIPE('as-overview/data.json?resource=AS' + asn);
  var holder = (asInfo && asInfo.data) ? asInfo.data.holder : nome;
  log(logId, 'OK Holder: ' + holder, 'ok');

  log(logId, '-> GET peeringdb.com/api/net?asn=' + asn, 'data');
  var pdbNetType = 'N/A', pdbPolicy = 'N/A', pdbWebsite = '--';
  try {
    var pdbRes = await fetch('https://www.peeringdb.com/api/net?asn=' + asn);
    if (pdbRes.ok) {
      var pdbData = await pdbRes.json();
      if (pdbData.data && pdbData.data.length > 0) {
        pdbNetType = pdbData.data[0].info_type || 'N/A';
        pdbPolicy  = pdbData.data[0].policy_general || 'N/A';
        pdbWebsite = pdbData.data[0].website || '--';
      }
    }
  } catch(e) {}
  log(logId, 'OK Tipo: ' + pdbNetType + ' | Peering: ' + pdbPolicy, 'ok');

  var pf24 = filtrar24(prefixos);
  log(logId, 'OK Prefixos /24: ' + pf24.length, 'hi');

  var entry = {
    nome_op: nome, asn: asn, tipo_rede: pdbNetType, prefixos: prefixos,
    regioes: { 'Brasil': { pais: 'BR', cobertura_: 100 } },
    website: pdbWebsite, politica_peering: pdbPolicy,
    prefixos_ipv4: prefixos.length, holder_real: holder
  };
  state.collected[asn] = entry;
  state.prefixos24[asn] = pf24;

  if (pf24.length > 0) {
    log(logId, '-> GET looking-glass ' + pf24[0], 'data');
    var lgData = await fetchRIPE('looking-glass/data.json?resource=' + pf24[0]);
    var caminhos = [];
    if (lgData && lgData.data && lgData.data.rrcs) {
      lgData.data.rrcs.forEach(function(rrc) {
        if (rrc.peers) {
          rrc.peers.forEach(function(peer) {
            if (peer.as_path) {
              var parts = peer.as_path.split(' ').map(Number).filter(function(n) { return !isNaN(n); });
              caminhos.push({ rrc: rrc.rrc || (rrc.location||'').split(',')[0] || 'RRC', path: parts });
            }
          });
        }
      });
    }
    state.analises[asn] = detectarDesvio(caminhos);
    var a = state.analises[asn];
    log(logId, 'OK AS-PATH: media ' + a.media_saltos + ' saltos | ' + a.paths_unicos + ' unicos', 'ok');
    if (a.desvio_suspeito) log(logId, 'Desvio suspeito detectado!', 'warn');
  }

  // Persistir na API
  await dbSalvarEntry(asn, entry, pf24, state.analises[asn] || null);

  // UI coletor
  document.getElementById('coletor-resultado').style.display = '';
  document.getElementById('res-total-pref').textContent = prefixos.length;
  document.getElementById('res-pref24').textContent = pf24.length;
  document.getElementById('res-tipo').textContent = pdbNetType;

  document.getElementById('card-asn-info').innerHTML =
    '<div class="card-header"><div class="card-title">Informacoes do ASN</div></div>' +
    '<div class="card-inner"><div class="kv-grid">' +
    '<div class="kv-item"><div class="kv-k">ASN</div><div class="kv-v">AS' + asn + '</div></div>' +
    '<div class="kv-item"><div class="kv-k">Holder</div><div class="kv-v" style="font-size:11px">' + holder.substring(0,28) + (holder.length>28?'...':'') + '</div></div>' +
    '<div class="kv-item"><div class="kv-k">Website</div><div class="kv-v">' + (pdbWebsite !== '--' ? '<a href="' + pdbWebsite + '" target="_blank" style="color:var(--blue);text-decoration:none">' + pdbWebsite.substring(0,22) + '</a>' : '--') + '</div></div>' +
    '<div class="kv-item"><div class="kv-k">Prefixos IPv4</div><div class="kv-v">' + prefixos.length + '</div></div>' +
    '</div><div class="divider"></div>' +
    '<div class="kv-k" style="margin-bottom:8px">Cobertura</div>' +
    '<div class="progress-wrap"><div class="progress-info"><span class="progress-label">Presenca Principal</span><span class="progress-val">100%</span></div>' +
    '<div class="progress-bar"><div class="progress-fill" style="width:100%;background:var(--accent)"></div></div></div></div>';

  document.getElementById('card-pdb-info').innerHTML =
    '<div class="card-header"><div class="card-title">PeeringDB</div></div>' +
    '<div class="card-inner"><div class="kv-grid">' +
    '<div class="kv-item"><div class="kv-k">Tipo de Rede</div><div class="kv-v"><span class="badge badge-blue">' + pdbNetType + '</span></div></div>' +
    '<div class="kv-item"><div class="kv-k">Politica Peering</div><div class="kv-v"><span class="badge badge-ok">' + pdbPolicy + '</span></div></div>' +
    '<div class="kv-item"><div class="kv-k">Regioes</div><div class="kv-v">Global</div></div>' +
    '<div class="kv-item"><div class="kv-k">Status</div><div class="kv-v"><span class="badge badge-ok">● Ativo</span></div></div>' +
    '</div></div>';

  var pl = document.getElementById('prefix-list-display');
  pl.innerHTML = '';
  prefixos.slice(0,120).forEach(function(p) {
    var span = document.createElement('span');
    span.className = p.endsWith('/24') ? 'pfx pfx-24' : 'pfx pfx-other';
    span.textContent = p;
    pl.appendChild(span);
  });
  return entry;
}

async function coletarTodos() {
  if (state.coletando) return;
  state.coletando = true;
  var btn = document.getElementById('btn-coletar');
  if (btn) btn.disabled = true;
  var lista = Object.entries(OPERADORAS);
  log('log-terminal', '━━━ Coletando todas as ' + lista.length + ' operadoras ━━━', 'hi');
  for (var i = 0; i < lista.length; i++) {
    log('log-terminal', '[' + (i+1) + '/' + lista.length + '] ' + lista[i][0], 'data');
    await coletarASN(lista[i][1], lista[i][0], 'log-terminal');
    await sleep(200);
  }
  log('log-terminal', 'OK Concluido — ' + lista.length + ' operadoras.', 'ok');
  atualizarDashboard(); popularSelectFiltro();
  state.coletando = false;
  if (btn) btn.disabled = false;
}

async function coletarGrupo(grupo) {
  var nomes = GRUPOS_OPERADORAS[grupo];
  if (!nomes) { coletarTodos(); return; }
  if (state.coletando) return;
  state.coletando = true;
  log('log-terminal', '━━━ Grupo: ' + grupo + ' (' + nomes.length + ' ops) ━━━', 'hi');
  for (var i = 0; i < nomes.length; i++) {
    var asn = OPERADORAS[nomes[i]]; if (!asn) continue;
    log('log-terminal', '[' + (i+1) + '/' + nomes.length + '] ' + nomes[i], 'info');
    await coletarASN(asn, nomes[i], 'log-terminal');
    await sleep(200);
  }
  log('log-terminal', 'OK Grupo concluido.', 'ok');
  atualizarDashboard(); popularSelectFiltro();
  state.coletando = false;
}

// ══════════════════════════════════════════════
//  ANALISADOR
// ══════════════════════════════════════════════
async function analisarPrefixo() {
  var prefixo = document.getElementById('inp-prefixo').value.trim();
  if (!prefixo) { alert('Informe um prefixo IP.'); return; }
  log('log-analise', 'Consultando Looking Glass para ' + prefixo, 'info');
  var lgData = await fetchRIPE('looking-glass/data.json?resource=' + prefixo);
  var caminhos = [];
  if (lgData && lgData.data && lgData.data.rrcs) {
    lgData.data.rrcs.forEach(function(rrc) {
      if (rrc.peers) rrc.peers.forEach(function(peer) {
        if (peer.as_path) {
          var parts = peer.as_path.split(' ').map(Number).filter(function(n) { return !isNaN(n); });
          caminhos.push({ rrc: rrc.rrc || (rrc.location||'').split(',')[0]||'RRC', path: parts });
        }
      });
    });
  }
  log('log-analise', 'OK ' + caminhos.length + ' paths de ' + new Set(caminhos.map(function(c){ return c.rrc; })).size + ' RRCs', 'ok');
  var analise = detectarDesvio(caminhos);
  log('log-analise', 'OK Media saltos: ' + analise.media_saltos + ' | Paths unicos: ' + analise.paths_unicos, 'ok');
  if (analise.desvio_suspeito) { log('log-analise','DESVIO DETECTADO','warn'); }
  else { log('log-analise','Sem desvio significativo','ok'); }

  document.getElementById('analise-resultado').style.display = '';
  document.getElementById('an-desvio').innerHTML = analise.desvio_suspeito
    ? '<span class="badge badge-danger" style="font-size:15px">Sim</span>'
    : '<span class="badge badge-ok" style="font-size:15px">Nao</span>';
  document.getElementById('an-saltos').textContent = analise.media_saltos;
  document.getElementById('an-unique').textContent = analise.paths_unicos;
  document.getElementById('an-total').textContent  = analise.total_paths;

  var maxF = analise.asn_mais_frequentes[0] ? analise.asn_mais_frequentes[0][1] : 1;
  document.getElementById('an-asn-freq').innerHTML = analise.asn_mais_frequentes.map(function(it) {
    return '<div class="progress-wrap"><div class="progress-info"><span class="progress-label">AS'+it[0]+'</span><span class="progress-val">'+it[1]+' ocorr.</span></div>'+
      '<div class="progress-bar"><div class="progress-fill" style="width:'+Math.round(it[1]/maxF*100)+'%;background:var(--blue)"></div></div></div>';
  }).join('');

  var comp = {};
  caminhos.forEach(function(c){ var l=c.path.length; comp[l]=(comp[l]||0)+1; });
  var lbls = Object.keys(comp).sort(function(a,b){return a-b;});
  var vals = lbls.map(function(l){return comp[l];});
  if (window.Chart) {
    if (chartPaths) chartPaths.destroy();
    chartPaths = new Chart(document.getElementById('chartPaths'), {
      type:'bar', data:{ labels:lbls.map(function(l){return l+' saltos';}), datasets:[{label:'Paths',data:vals,backgroundColor:'#375dfb22',borderColor:'#375dfb',borderWidth:1.5,borderRadius:6}]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,grid:{color:'rgba(123,136,152,0.12)'}},x:{grid:{display:false}}}}
    });
  }

  var pd = document.getElementById('path-display'); pd.innerHTML='';
  caminhos.slice(0,30).forEach(function(c){
    var row=document.createElement('div'); row.className='path-row';
    row.innerHTML='<span class="path-rrc">'+c.rrc+'</span>'+
      c.path.map(function(a,i){return (i>0?'<span class="path-arrow">›</span>':'')+'<span class="path-asn">AS'+a+'</span>';}).join('');
    pd.appendChild(row);
  });
}

function analisarDoPrefixo(pref) {
  document.getElementById('inp-prefixo').value = pref;
  var navEl = document.querySelector('.nav-item[data-page="analisador"]');
  if (navEl) navigate(navEl, 'analisador');
  setTimeout(analisarPrefixo, 200);
}

// ══════════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════════
function atualizarDashboard() {
  var keys = Object.keys(state.collected);
  var totalPref=0, total24=0, desvios=0;
  keys.forEach(function(asn){
    totalPref += (state.collected[asn].prefixos||[]).length;
    total24   += (state.prefixos24[asn]||[]).length;
    if(state.analises[asn] && state.analises[asn].desvio_suspeito) desvios++;
  });
  document.getElementById('dash-total-ops').textContent  = Object.keys(OPERADORAS).length;
  document.getElementById('dash-total-pref').textContent = keys.length ? totalPref : '--';
  document.getElementById('dash-total-24').textContent   = keys.length ? total24  : '--';
  document.getElementById('dash-desvios').textContent    = keys.length ? desvios  : '--';

  var sl = document.getElementById('dash-status-list');
  if (!keys.length) {
    sl.innerHTML = '<div class="empty"><div class="empty-icon">◌</div><div class="empty-text">Execute a coleta para visualizar dados<br><span style="opacity:0.6">→ Acesse o Coletor BGP</span></div></div>';
    return;
  }
  var pal = ['#375dfb','#ffb454','#6e56cf','#d92d52','#2563eb','#64748b','#c73868','#b86b00','#5ea1ff','#111827'];
  sl.innerHTML = '<div class="table-wrap" style="border:none;border-radius:0"><table>' +
    '<thead><tr><th>Operadora</th><th>ASN</th><th>Prefixos</th><th>/24</th><th>Desvio</th><th>Med. Saltos</th><th>Tipo</th></tr></thead>' +
    '<tbody>' + keys.map(function(asn){
      var d=state.collected[asn], a=state.analises[asn], p24=(state.prefixos24[asn]||[]).length;
      return '<tr><td class="td-name">'+d.nome_op+'</td>'+
        '<td><code style="font-family:var(--mono);font-size:11px;color:var(--text3)">AS'+asn+'</code></td>'+
        '<td class="td-accent">'+d.prefixos.length+'</td>'+
        '<td><span class="badge badge-accent">'+p24+'</span></td>'+
        '<td>'+(a?(a.desvio_suspeito?'<span class="badge badge-danger">Sim</span>':'<span class="badge badge-ok">Nao</span>'):'<span class="badge badge-neutral">--</span>')+'</td>'+
        '<td>'+(a?a.media_saltos:'--')+'</td>'+
        '<td><span class="badge badge-blue">'+d.tipo_rede+'</span></td></tr>';
    }).join('') + '</tbody></table></div>';

  var ops=keys.map(function(asn){return state.collected[asn].nome_op;});
  var prefs=keys.map(function(asn){return state.collected[asn].prefixos.length;});
  var p24s=keys.map(function(asn){return (state.prefixos24[asn]||[]).length;});
  var palArr=keys.map(function(_,i){return pal[i%pal.length];});

  if (!window.Chart) return;
  if(chartPrefixos) chartPrefixos.destroy();
  chartPrefixos = new Chart(document.getElementById('chartPrefixos'),{type:'bar',
    data:{labels:ops,datasets:[
      {label:'Total Prefixos',data:prefs,backgroundColor:palArr.map(function(c){return c+'28';}),borderColor:palArr,borderWidth:1.5,borderRadius:6},
      {label:'Prefixos /24',data:p24s,backgroundColor:palArr.map(function(c){return c+'60';}),borderColor:palArr,borderWidth:1.5,borderRadius:6}
    ]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{padding:16,usePointStyle:true,pointStyle:'rect'}}},
      scales:{y:{beginAtZero:true,grid:{color:'rgba(123,136,152,0.10)'}},x:{grid:{display:false}}}}
  });
  if(chartDist) chartDist.destroy();
  chartDist = new Chart(document.getElementById('chartDist'),{type:'doughnut',
    data:{labels:ops,datasets:[{data:prefs,backgroundColor:palArr,borderWidth:0,hoverOffset:6}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'70%',plugins:{legend:{position:'bottom',labels:{padding:12,usePointStyle:true,pointStyle:'circle'}}}}
  });
}

// ══════════════════════════════════════════════
//  PREFIXOS
// ══════════════════════════════════════════════
function filtrarPrefixos() {
  var opFilt=document.getElementById('sel-filtro-op').value;
  var busca=document.getElementById('inp-busca-prefix').value.toLowerCase();
  var tbody=document.getElementById('tabela-prefixos');
  tbody.innerHTML='';
  var rows=[];
  Object.entries(state.prefixos24).forEach(function(e){
    var asn=e[0], prefixos=e[1], d=state.collected[asn];
    prefixos.forEach(function(p){
      if(opFilt&&d.nome_op!==opFilt) return;
      if(busca&&!p.includes(busca)) return;
      rows.push({asn:asn,nome:d.nome_op,prefixo:p,tipo:d.tipo_rede});
    });
  });
  document.getElementById('pref-count').textContent=rows.length;
  if(!rows.length){ tbody.innerHTML='<tr><td colspan="5"><div class="empty"><div class="empty-icon">◌</div><div class="empty-text">Nenhum prefixo /24 encontrado</div></div></td></tr>'; return; }
  rows.slice(0,200).forEach(function(r){
    var tr=document.createElement('tr');
    tr.innerHTML='<td class="td-accent">'+r.prefixo+'</td><td class="td-name">'+r.nome+'</td><td>AS'+r.asn+'</td>'+
      '<td><span class="badge badge-blue">'+r.tipo+'</span></td>'+
      '<td><button class="btn btn-ghost btn-sm" onclick="analisarDoPrefixo(\''+r.prefixo+'\')">'+
      '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="4" cy="4" r="3"/><path d="M9 9L7 7"/></svg> Analisar</button></td>';
    tbody.appendChild(tr);
  });
}

function exportarPrefixos() {
  var opFilt=document.getElementById('sel-filtro-op').value;
  var csv='Prefixo,Operadora,ASN,Tipo\n';
  Object.entries(state.prefixos24).forEach(function(e){
    var asn=e[0],prefixos=e[1],d=state.collected[asn];
    if(opFilt&&d.nome_op!==opFilt) return;
    prefixos.forEach(function(p){csv+=p+','+d.nome_op+',AS'+asn+','+d.tipo_rede+'\n';});
  });
  downloadCSV(csv,'prefixos_24.csv');
}

// ══════════════════════════════════════════════
//  RELATORIO
// ══════════════════════════════════════════════
function gerarRelatorio() {
  var tbody=document.getElementById('tabela-relatorio');
  var al=document.getElementById('relatorio-alert');
  var keys=Object.keys(state.collected);
  if(!keys.length){
    tbody.innerHTML='<tr><td colspan="9"><div class="empty"><div class="empty-icon">▤</div><div class="empty-text">Realize a coleta primeiro</div></div></td></tr>';
    al.style.display='flex'; al.className='alert alert-warn';
    al.textContent='Nenhum dado coletado. Use o Coletor BGP.';
    return;
  }
  al.style.display='none'; tbody.innerHTML='';
  keys.forEach(function(asn){
    var d=state.collected[asn],p24=(state.prefixos24[asn]||[]).length,a=state.analises[asn];
    var pct=d.prefixos.length?Math.round(p24/d.prefixos.length*1000)/10:0;
    var tr=document.createElement('tr');
    tr.innerHTML='<td class="td-name">'+d.nome_op+'</td><td>AS'+asn+'</td><td class="td-accent">'+d.prefixos.length+'</td><td>'+p24+'</td><td>'+pct+'%</td>'+
      '<td>'+(Object.keys(d.regioes)[0]||'--')+'</td>'+
      '<td><span class="badge badge-blue">'+d.tipo_rede+'</span></td>'+
      '<td>'+(a?(a.desvio_suspeito?'<span class="badge badge-danger">Sim</span>':'<span class="badge badge-ok">Nao</span>'):'<span class="badge badge-neutral">--</span>')+'</td>'+
      '<td>'+(a?a.media_saltos:'--')+'</td>';
    tbody.appendChild(tr);
  });
}

function exportarRelatorio() {
  var keys=Object.keys(state.collected);
  if(!keys.length){alert('Nenhum dado coletado.');return;}
  var csv='Operadora,ASN,Total Prefixos,Prefixos /24,% /24,Top Regiao,Tipo PeeringDB,Desvio Suspeito,Media Saltos\n';
  keys.forEach(function(asn){
    var d=state.collected[asn],p24=(state.prefixos24[asn]||[]).length,a=state.analises[asn];
    var pct=d.prefixos.length?Math.round(p24/d.prefixos.length*1000)/10:0;
    csv+=d.nome_op+',AS'+asn+','+d.prefixos.length+','+p24+','+pct+'%,'+(Object.keys(d.regioes)[0]||'--')+','+d.tipo_rede+','+(a?a.desvio_suspeito:'--')+','+(a?a.media_saltos:'--')+'\n';
  });
  downloadCSV(csv,'relatorio_bgp.csv');
}

// ══════════════════════════════════════════════
//  BASE DE DADOS / API DE TRANSFORMACAO
// ══════════════════════════════════════════════
function renderDados() {
  if (typeof BGP_DB === 'undefined') return;

  Promise.all([
    BGP_DB.estatisticas(),
    BGP_DB.transformarWarehouse(),
    BGP_DB.listarEventos(8)
  ]).then(function (res) {
    var stats = res[0];
    var warehouse = res[1];
    var eventos = res[2];
    var registros = stats.operadoras + stats.prefixos + stats.analises + stats.mitigacao + stats.eventos;

    setText('dados-engine', stats.engine || 'API');
    setText('dados-schema', stats.schema || 'api-v1');
    setText('dados-size', stats.tamanho_legivel || '0 B');
    setText('dados-registros', registros);

    var status = document.getElementById('dados-status');
    if (status) {
      status.innerHTML =
        '<div class="data-status-grid">' +
        dataMetric('Operadoras', stats.operadoras) +
        dataMetric('Prefixos', stats.prefixos) +
        dataMetric('/24', stats.prefixos24) +
        dataMetric('Analises', stats.analises) +
        dataMetric('MOAS', stats.mitigacao) +
        dataMetric('Eventos', stats.eventos) +
        '</div>' +
        '<div class="data-foot">Atualizado: ' + escapeHTML(stats.atualizado_em || 'sem alteracoes') + '</div>';
    }

    renderWarehousePreview(warehouse);
    renderEventosBanco(eventos);
  }).catch(function (e) {
    console.warn('[BGP_DB] Falha ao renderizar tela de dados:', e);
  });
}

function dataMetric(label, value) {
  return '<div class="data-metric"><span>' + escapeHTML(label) + '</span><strong>' + escapeHTML(value) + '</strong></div>';
}

function renderWarehousePreview(warehouse) {
  var tbody = document.getElementById('dados-warehouse-preview');
  if (!tbody) return;
  var rows = (warehouse.operadoras || []).slice().sort(function (a, b) {
    return b.score_risco - a.score_risco;
  }).slice(0, 8);

  if (!rows.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty"><div class="empty-icon">--</div><div class="empty-text">Colete dados para gerar o dataset KDD</div></div></td></tr>';
    return;
  }

  tbody.innerHTML = rows.map(function (r) {
    var badge = r.score_risco >= 70 ? 'badge-danger' : r.score_risco >= 40 ? 'badge-warn' : 'badge-ok';
    return '<tr>' +
      '<td class="td-name">' + escapeHTML(r.nome) + '</td>' +
      '<td class="td-mono">AS' + escapeHTML(r.asn) + '</td>' +
      '<td><span class="badge badge-accent">' + escapeHTML(r.total_24) + '</span></td>' +
      '<td><span class="badge ' + (r.moas_detectados ? 'badge-danger' : 'badge-neutral') + '">' + escapeHTML(r.moas_detectados) + '</span></td>' +
      '<td><span class="badge ' + badge + '">' + escapeHTML(r.score_risco) + '</span></td>' +
      '</tr>';
  }).join('');
}

function renderEventosBanco(eventos) {
  var el = document.getElementById('dados-eventos');
  if (!el) return;
  if (!eventos || !eventos.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">--</div><div class="empty-text">Nenhum evento registrado</div></div>';
    return;
  }
  el.innerHTML = '<div class="event-list">' + eventos.map(function (ev) {
    return '<div class="event-row">' +
      '<span class="event-type">' + escapeHTML(ev.tipo || '-') + '</span>' +
      '<strong>' + escapeHTML(ev.asn ? 'AS' + ev.asn : 'Sistema') + '</strong>' +
      '<small>' + escapeHTML(formatarTimestamp(ev.timestamp)) + '</small>' +
      '</div>';
  }).join('') + '</div>';
}

function exportarBancoAPI() {
  BGP_DB.exportarJSON().then(function (snapshot) {
    downloadJSON(snapshot, 'bgp_analyzer_api_snapshot.json');
  });
}

function exportarSnapshotJSON() {
  BGP_DB.exportarJSON().then(function (snapshot) {
    downloadJSON(snapshot, 'bgp_analyzer_snapshot.json');
  });
}

function exportarWarehouseJSON() {
  BGP_DB.transformarWarehouse().then(function (warehouse) {
    downloadJSON(warehouse, 'bgp_analyzer_dataset_kdd.json');
  });
}

function migrarBancoLegado() {
  if (!confirm('Migrar dados do navegador legado para a API atual?')) return;
  BGP_DB.migrarIndexedDBLegado().then(function (res) {
    var msg = res.migrado
      ? 'Migracao concluida: ' + res.total + ' registro(s) importados.'
      : 'Nenhum dado legado migrado: ' + (res.motivo || 'base vazia.');
    alert(msg);
    return dbCarregar();
  }).then(function () {
    dbAtualizarUI();
    atualizarDashboard();
    popularSelectFiltro();
    renderDados();
  }).catch(function (e) {
    alert('Falha ao migrar banco legado: ' + e);
  });
}

function setText(id, value) {
  var el = document.getElementById(id);
  if (el) el.textContent = value;
}

function formatarTimestamp(ts) {
  if (!ts) return '--';
  try {
    return new Date(ts).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
  } catch (e) {
    return ts;
  }
}

function escapeHTML(value) {
  return String(value === undefined || value === null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ══════════════════════════════════════════════
//  COMPARATIVO
// ══════════════════════════════════════════════
var activeTab='bar';

function setTab(tab,el){
  activeTab=tab;
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active');});
  el.classList.add('active');
  document.getElementById('comp-bar-panel').style.display    = tab==='bar'     ? '' : 'none';
  document.getElementById('comp-radar-panel').style.display  = tab==='radar'   ? '' : 'none';
  document.getElementById('comp-scatter-panel').style.display = tab==='scatter' ? '' : 'none';
  renderComparativo();
}

function renderComparativo(){
  var keys=Object.keys(state.collected);
  if(!keys.length){ document.getElementById('heatmap-container').innerHTML='<div class="empty"><div class="empty-icon">◫</div><div class="empty-text">Realize a coleta primeiro</div></div>'; return; }
  var ops=keys.map(function(asn){return state.collected[asn].nome_op;});
  var prefs=keys.map(function(asn){return state.collected[asn].prefixos.length;});
  var p24s=keys.map(function(asn){return (state.prefixos24[asn]||[]).length;});
  var saltos=keys.map(function(asn){return (state.analises[asn]&&state.analises[asn].media_saltos)||0;});
  var pal=['#375dfb','#ffb454','#6e56cf','#d92d52','#2563eb','#64748b','#c73868','#b86b00','#5ea1ff','#111827'];
  var palArr=keys.map(function(_,i){return pal[i%pal.length];});

  if(window.Chart && activeTab==='bar'){
    if(chartComp1) chartComp1.destroy();
    chartComp1=new Chart(document.getElementById('chartComp1'),{type:'bar',
      data:{labels:ops,datasets:[
        {label:'Total Prefixos',data:prefs,backgroundColor:'#375dfb22',borderColor:'#375dfb',borderWidth:1.5,borderRadius:6},
        {label:'Prefixos /24',data:p24s,backgroundColor:'#ffb4542b',borderColor:'#ffb454',borderWidth:1.5,borderRadius:6}
      ]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{padding:16,usePointStyle:true}}},
        scales:{y:{beginAtZero:true,grid:{color:'rgba(123,136,152,0.12)'}},x:{grid:{display:false}}}}
    });
  }
  if(window.Chart && activeTab==='radar'){
    var maxP=Math.max.apply(null,prefs.concat([1])),maxP24=Math.max.apply(null,p24s.concat([1])),maxS=Math.max.apply(null,saltos.concat([1]));
    if(chartRadar) chartRadar.destroy();
    chartRadar=new Chart(document.getElementById('chartRadar'),{type:'radar',
      data:{labels:['Total Prefixos','Prefixos /24','Media Saltos','Tipo NSP','Presenca Geo'],
        datasets:keys.map(function(asn,i){
          var d=state.collected[asn],a=state.analises[asn];
          return {label:d.nome_op,data:[Math.round(prefs[i]/maxP*100),Math.round(p24s[i]/maxP24*100),Math.round(((a&&a.media_saltos)||0)/maxS*100),d.tipo_rede==='NSP'?100:50,Object.keys(d.regioes).length*20],
            borderColor:palArr[i],backgroundColor:palArr[i]+'18',borderWidth:1.5,pointRadius:3,pointBackgroundColor:palArr[i]};
        })
      },
      options:{responsive:true,maintainAspectRatio:false,
        scales:{r:{ticks:{display:false,backdropColor:'transparent'},grid:{color:'rgba(123,136,152,0.14)'},pointLabels:{color:'#526071',font:{size:11}}}},
        plugins:{legend:{labels:{padding:14,usePointStyle:true,pointStyle:'circle'}}}}
    });
  }
  if(window.Chart && activeTab==='scatter'){
    if(chartScatter) chartScatter.destroy();
    chartScatter=new Chart(document.getElementById('chartScatter'),{type:'scatter',
      data:{datasets:keys.map(function(asn,i){return {label:ops[i],data:[{x:p24s[i],y:saltos[i]}],backgroundColor:palArr[i]+'cc',pointRadius:12,pointHoverRadius:16};})},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{labels:{padding:14,usePointStyle:true,pointStyle:'circle'}}},
        scales:{x:{title:{display:true,text:'Prefixos /24',color:'#526071'},grid:{color:'rgba(123,136,152,0.10)'}},
                y:{title:{display:true,text:'Media Saltos',color:'#526071'},grid:{color:'rgba(123,136,152,0.10)'}}}}
    });
  }
  renderHeatmap(keys,ops,prefs,p24s,saltos);
}

function renderHeatmap(keys,ops,prefs,p24s,saltos){
  var container=document.getElementById('heatmap-container');
  var metrics=['Prefixos','Prefixos /24','Saltos','Risco'];
  var maxP=Math.max.apply(null,prefs.concat([1])),maxP24=Math.max.apply(null,p24s.concat([1])),maxS=Math.max.apply(null,saltos.concat([1]));
  var getColor=function(v){ var al=0.2+v*0.75; return v>0.7?'rgba(239,68,68,'+al+')':v>0.4?'rgba(234,179,8,'+al+')':'rgba(34,197,94,'+al+')'; };
  var html='<div style="display:grid;grid-template-columns:110px repeat('+metrics.length+',1fr);gap:6px;margin-bottom:8px"><div></div>'+
    metrics.map(function(m){return '<div style="font-size:9px;font-family:var(--mono);color:var(--text3);text-align:center;padding:4px;text-transform:uppercase;letter-spacing:1.2px">'+m+'</div>';}).join('')+'</div>';
  html+='<div style="display:grid;grid-template-columns:110px repeat('+metrics.length+',1fr);gap:6px">';
  keys.forEach(function(asn,i){
    var vals=[prefs[i]/maxP,p24s[i]/maxP24,saltos[i]/maxS,(state.analises[asn]&&state.analises[asn].desvio_suspeito)?1:0.15];
    html+='<div style="font-size:11px;color:var(--text2);display:flex;align-items:center;font-family:var(--mono);overflow:hidden;white-space:nowrap;text-overflow:ellipsis">'+ops[i].split(' ')[0]+'</div>';
    vals.forEach(function(v){ html+='<div class="heatmap-cell" style="height:38px;background:'+getColor(v)+';display:flex;align-items:center;justify-content:center;font-size:10px;font-family:var(--mono);color:rgba(255,255,255,0.85);font-weight:600;opacity:'+(0.7+v*0.3)+'">'+Math.round(v*100)+'%</div>'; });
  });
  html+='</div>';
  container.innerHTML=html;
}

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
var appInicializado = false;

function iniciarAplicacao() {
  if (appInicializado) return;
  appInicializado = true;

  popularSelectOperadoras();

  var totalEl = document.getElementById('dash-total-ops');
  if (totalEl) totalEl.textContent = Object.keys(OPERADORAS).length;

  if (window.Chart) {
    var chartPrefixosEl = document.getElementById('chartPrefixos');
    var chartDistEl = document.getElementById('chartDist');
    if (chartPrefixosEl) {
      chartPrefixos = new Chart(chartPrefixosEl, {
        type: 'bar',
        data: { labels: ['Aguardando'], datasets: [{ label: 'Prefixos', data: [0], backgroundColor: 'rgba(55,93,251,0.10)', borderColor: 'rgba(55,93,251,0.24)', borderWidth: 1, borderRadius: 6 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { grid: { color: 'rgba(123,136,152,0.12)' } }, x: { grid: { display: false } } } }
      });
    }
    if (chartDistEl) {
      chartDist = new Chart(chartDistEl, {
        type: 'doughnut',
        data: { labels: ['Aguardando'], datasets: [{ data: [1], backgroundColor: ['rgba(55,93,251,0.10)'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { labels: { color: '#7b8898', font: { size: 10 } } } } }
      });
    }
  }

  // ── Carregar estado da API ───────────────────────────────────────────────
  dbCarregar().then(function(nCarregados) {
    var total = Object.keys(OPERADORAS).length;
    log('log-terminal', 'Sistema iniciado — API Node conectada.', 'hi');
    log('log-terminal', total + ' operadoras disponiveis para coleta.', 'info');

    if (nCarregados > 0) {
      log('log-terminal', 'OK ' + nCarregados + ' ASN(s) carregados da API.', 'ok');
      atualizarDashboard();
      popularSelectFiltro();
      filtrarPrefixos();

      BGP_DB.estatisticas().then(function(stats) {
        log('log-terminal',
          '→ Banco: ' + stats.operadoras + ' ops | ' +
          stats.prefixos + ' prefixos | ' +
          stats.prefixos24 + ' /24 | ' +
          stats.mitigacao + ' eventos MOAS',
          'data');
      });
    } else {
      log('log-terminal', '→ Banco vazio. Use o Coletor BGP para iniciar.', 'info');
    }

    log('log-terminal', '→ MA: Sao Luis (15) | Imperatriz/Sul (12) | Interior (29)', 'info');
    log('log-terminal', '→ Nordeste (20) | Nacionais (7) | CDN/Educacao (12)', 'info');
  }).catch(function(e) {
    log('log-terminal', '✗ Erro ao conectar a API: ' + e, 'warn');
  });
}

function executarQuandoDOMPronto(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

executarQuandoDOMPronto(iniciarAplicacao);
window.addEventListener('pageshow', function() {
  popularSelectOperadoras();
});
