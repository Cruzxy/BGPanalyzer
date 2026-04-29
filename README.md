# 🛡️ BGP Analyzer — Mineração de Dados em Redes

<div align="center">

![BGP Analyzer](https://img.shields.io/badge/BGP-Analyzer-0ea5e9?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMSAxNy45M1Y0LjA3YzEuMDIuMTMgMy40OS41NCA1Ljc1IDMuMThMOCAxMiA2LjI1IDE2Ljc1QzYuOSAxOS4zOSAxMC4wMSAyMC4yMSAxMSAxOS45M3oiLz48L3N2Zz4=)
![UNDB](https://img.shields.io/badge/UNDB-7º%20Período-8b5cf6?style=for-the-badge)
![Mineração de Dados](https://img.shields.io/badge/Mineração%20de%20Dados-PjBL-22c55e?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f59e0b?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-Frontend-e34f26?style=for-the-badge&logo=html5&logoColor=white)
![RIPE NCC](https://img.shields.io/badge/RIPE%20NCC-API-005ea5?style=for-the-badge)

**Sistema analítico de Mineração de Dados aplicado à infraestrutura de Internet — Detecção de Padrões BGP em Cenários de Mitigação de Tráfego DDoS**

[📚 Contexto Acadêmico](#-contexto-acadêmico) · [🎯 Problema](#-problema) · [🏗️ Arquitetura](#️-arquitetura) · [🚀 Como Usar](#-como-usar) · [📊 Funcionalidades](#-funcionalidades) · [🔬 Metodologia KDD](#-metodologia-kdd)

</div>

---

## 🎓 Contexto Acadêmico

| Campo | Informação |
|---|---|
| **Instituição** | UNDB — Universidade Dom Bosco |
| **Curso** | Engenharia de Software |
| **Período** | 7º Período |
| **Disciplina** | Mineração de Dados |
| **Professor** | Wesleson Souza Silva |
| **Modalidade** | PjBL — Problem-Based Learning |
| **Vigência** | Fevereiro / 2026 — Junho / 2026 |
| **Carga Horária** | 68 horas |
| **Eixo Temático** | Tecnologias Aplicadas — Indústria, Inovação e Infraestrutura |

> Este projeto é o **PBL (Project-Based Learning)** da disciplina de Mineração de Dados, desenvolvido por alunos do 7º período de Engenharia de Software da UNDB, com o objetivo de aplicar técnicas de Descoberta de Conhecimento em Bases de Dados (KDD) em um ambiente real de infraestrutura de Internet.

---

## 🎯 Problema

O ecossistema de conectividade das operadoras de Internet tem enfrentado um aumento significativo na complexidade do tráfego global. Em cenários de ataque **DDoS (Distributed Denial of Service)**, prefixos IP são redirecionados para fornecedores especializados em mitigação, que passam a anunciá-los integralmente na tabela BGP global.

### ❌ Situação Atual (Problema)

- Análise de eventos de mitigação ocorre de forma **manual, pontual e reativa**
- Consultas isoladas a ferramentas de Looking Glass sem consolidação histórica
- **Nenhum mecanismo estruturado** para identificar prefixos 100% anunciados por ASNs mitigadores
- Impossibilidade de comparar períodos, calcular percentuais ou identificar padrões recorrentes
- Gestão técnica com **visibilidade limitada** sobre tendências, sazonalidade e reincidência

### ✅ Proposta de Solução

Estruturar um mecanismo analítico capaz de **coletar, armazenar, minerar e interpretar dados BGP** para identificar prefixos 100% mitigados e apoiar decisões técnicas baseadas em evidências.

---

## 🏗️ Arquitetura

```
BGP ANALYZER — Arquitetura
├── index.html          → Interface SPA (Single Page Application)
├── style.css           → Design system — dark mode + glassmorphism
├── db.js               → Camada IndexedDB (5 object stores estruturados)
└── script.js           → Lógica da aplicação + 95+ operadoras
```

### Banco de Dados — IndexedDB

```
bgp_analyzer_db (versão 3)
│
├── operadoras       keyPath: asn
│   ├── index: nome_op
│   ├── index: tipo_rede
│   └── index: coletado_em
│
├── prefixos         keyPath: id (asn_prefixo)
│   ├── index: asn
│   ├── index: prefixo
│   └── index: mascara  ← filtra /24 com IDBKeyRange
│
├── analises         keyPath: asn
│   ├── index: desvio_suspeito
│   └── index: analisado_em
│
├── mitigacao        keyPath: id (prefixo_asnMitigador)
│   ├── index: prefixo
│   ├── index: asn_dono
│   ├── index: asn_mitigador
│   └── index: detectado_em
│
└── eventos          keyPath: id (autoIncrement)
    ├── index: tipo      ← 'coleta' | 'analise' | 'scan'
    ├── index: asn
    └── index: timestamp
```

> **Por que IndexedDB?** Diferente do `localStorage` (limitado a ~5MB de JSON serializado), o IndexedDB é um banco transacional nativo do browser — suporta transações ACID, índices, cursor para queries, e pode armazenar centenas de MB de dados estruturados sem serialização.

### Stack Tecnológico

| Camada | Tecnologia |
|--------|-----------|
| **Frontend** | HTML5 + CSS3 + JavaScript (ES6+) |
| **Gráficos** | Chart.js 4.4.1 |
| **Tipografia** | IBM Plex Mono + Geist (Google Fonts) |
| **Dados BGP** | RIPE NCC Stat API (`stat.ripe.net`) |
| **Dados de Rede** | PeeringDB REST API |
| **Persistência** | **IndexedDB** (banco estruturado — 5 object stores com índices) |
| **Design** | SaaS Dashboard — Dark Mode + Glassmorphism |

---

## 📊 Funcionalidades

### 1. 🌐 Dashboard Geral
- Painel de visão geral com métricas consolidadas
- Contagem total de operadoras, prefixos, /24 detectados e desvios suspeitos
- Gráficos de barras e doughnut para distribuição de prefixos
- Status em tempo real de todas as operadoras coletadas

### 2. 📡 Coletor BGP
- Coleta dados de **95+ operadoras** do Maranhão e Brasil via RIPE Stat API
- Suporte a coleta individual por ASN ou em massa por grupo regional
- **Grupos pré-configurados:**
  - MA São Luís / Grande Ilha (20 operadoras)
  - MA PTT São Luís — IX.br (50 operadoras verificadas)
  - MA Imperatriz e Sul (12 operadoras)
  - MA Interior (29 operadoras)
  - Nordeste com cobertura no MA (20 operadoras)
  - Grandes Nacionais (7 operadoras)
  - Trânsito / CDN / Educação (12 redes)
- Terminal de log em tempo real com timestamps
- Dados integrados com PeeringDB para tipo de rede

### 3. 🔍 Analisador de Desvios BGP
- Análise individual de qualquer prefixo IP
- Detecção de desvios suspeitos via **AS-PATH** (média de saltos > 6 ou alta diversidade de paths)
- Visualização dos ASNs mais frequentes no caminho
- Gráfico de distribuição de comprimento de AS-PATHs
- Consulta ao **RIPE RIS Live** (RouteViews Collector — RRCs)

### 4. 📋 Mapa de Prefixos /24
- Listagem completa de todos os prefixos /24 coletados
- Filtro por operadora e busca textual
- Exportação para CSV
- Integração com o Analisador para análise direta de cada prefixo

### 5. 📄 Relatório Final
- Tabela consolidada com métricas de todas as operadoras analisadas:
  - Total de prefixos, quantidade de /24, percentual de /24
  - Top região, tipo PeeringDB
  - Desvio suspeito detectado e média de saltos
- Exportação para CSV (equivalente ao `relatorio_bgp.csv`)

### 6. 📊 Análise Comparativa
- **Gráfico de Barras**: Total de prefixos por operadora
- **Radar Chart**: Comparativo multidimensional normalizado
- **Scatter Plot**: Relação entre prefixos /24 vs. média de saltos
- **Heatmap de Risco**: Intensidade de risco por operadora

### 7. 🛡️ Análise de Mitigação DDoS *(Feature Principal)*
- Detecta **MOAS (Multiple Origin AS)** — co-anúncios suspeitos de prefixos /24
- Identifica **ASNs fazendo scrubbing** (mitigação ativa de DDoS)
- Verifica redundância de paths (múltiplos upstreams)
- Base de dados de **26+ provedores de scrubbing conhecidos** (Cloudflare, Akamai, Huge Networks, etc.)
- Scan paralelo configurável (3, 5 ou 8 consultas simultâneas)
- Barra de progresso com ETA em tempo real
- Exportação dos resultados para CSV

---

## 🔬 Metodologia KDD

O projeto aplica o processo **KDD (Knowledge Discovery in Databases)** completo:

```
SELEÇÃO → PRÉ-PROCESSAMENTO → TRANSFORMAÇÃO → MINERAÇÃO → INTERPRETAÇÃO
```

### Etapas Implementadas

| Etapa KDD | Implementação no BGP Analyzer |
|-----------|-------------------------------|
| **Seleção** | Consulta via RIPE Stat API e PeeringDB por ASN |
| **Pré-processamento** | Filtro de prefixos /24, normalização de AS-PATH |
| **Transformação** | Estruturação em JSON, indexação por ASN |
| **Mineração** | Detecção de MOAS, análise de desvio de AS-PATH, clustering por mitigador |
| **Interpretação** | Dashboards, relatórios CSV, heatmaps, gráficos comparativos |

### Variáveis Analisadas

| Variável | Descrição |
|----------|-----------|
| **Prefixo IP** | Bloco de endereçamento IPv4 (foco em /24) |
| **ASN de Origem** | Autonomous System Number legítimo do anunciante |
| **ASN Mitigador** | ASN que co-anuncia o prefixo (MOAS) |
| **AS-PATH** | Sequência de ASNs no caminho de roteamento |
| **Communities BGP** | Atributos de roteamento e engenharia de tráfego |
| **Timestamp** | Momento da coleta para análise temporal |
| **Tipo de Rede** | Classificação via PeeringDB (ISP, CDN, IX, etc.) |

---

## 🚀 Como Usar

### Pré-requisitos
- Navegador moderno com suporte a ES6+ e **IndexedDB** (Chrome, Firefox, Edge — qualquer versão recente)
- Conexão com a Internet (para consultas às APIs RIPE e PeeringDB)
- **Nenhuma instalação necessária** — aplicação 100% client-side (HTML + JS puro)

---

### ▶ Opção 1 — Abrir direto no navegador *(mais simples)*

```
1. Clone ou baixe o repositório
2. Dê duplo clique em  index.html
3. O navegador abre o sistema — pronto!
```

> ✅ **Funciona offline para a interface**. As coletas de dados precisam de internet.

---

### ▶ Opção 2 — Live Server (VS Code) *(recomendado para desenvolvimento)*

Se você usa **VS Code**, instale a extensão **Live Server** (Ritwick Dey):

```
1. Abra a pasta BGPanalyzer no VS Code
2. Clique com o botão direito em  index.html
3. Selecione "Open with Live Server"
4. Acesse:  http://127.0.0.1:5500
```

O Live Server faz **hot-reload automático** ao salvar qualquer arquivo — ideal durante o desenvolvimento.

---

### ▶ Opção 3 — Servidor local simples

```bash
# Clone o repositório
git clone https://github.com/Cruzxy/BGPanalyzer.git
cd BGPanalyzer

# Python 3
python -m http.server 8080
# → Acesse: http://localhost:8080

# Node.js (npx serve)
npx serve .
# → Acesse: http://localhost:3000
```

> **Nota:** Para Opção 2 e 3, a URL `file://` funciona com IndexedDB, mas algumas APIs do browser têm restrições de CORS com protocolo `file://`. Se tiver problemas com fetch, use um servidor local.

### Fluxo de Uso

```
1. COLETOR BGP
   └─ Selecione uma operadora ou grupo regional
   └─ Clique em "Coletar" (dados salvos em cache local)

2. DASHBOARD
   └─ Visualize as métricas consolidadas
   └─ Acompanhe os gráficos de distribuição

3. ANALISADOR
   └─ Insira um prefixo /24 para análise detalhada
   └─ Verifique desvios suspeitos no AS-PATH

4. MITIGAÇÃO DDOS ← Feature Principal
   └─ Clique em "Analisar Todos os Prefixos"
   └─ Aguarde o scan MOAS em todos os /24 coletados
   └─ Identifique ASNs fazendo scrubbing ativo

5. RELATÓRIO
   └─ Exporte os resultados para CSV
```

---

## 🏢 Provedores de Mitigação Monitorados

O sistema possui uma base de dados com **26+ provedores de scrubbing** conhecidos, incluindo:

### 🌍 Internacionais
| ASN | Provedor |
|-----|---------|
| AS13335 | Cloudflare Magic Transit |
| AS20940 | Akamai / Prolexic |
| AS16509 | Amazon AWS Shield |
| AS6939 | Hurricane Electric |
| AS174 | Cogent |
| AS3356 | Lumen / Level3 |
| AS2914 | NTT Communications |
| AS1299 | Telia Carrier |
| AS7018 | AT&T |

### 🇧🇷 Brasil
| ASN | Provedor |
|-----|---------|
| AS264409 | Huge Networks |
| AS263444 | Open X Tecnologia |
| AS14840 | BR.Digital (scrubbing) |
| AS4230 | Embratel (scrubbing) |
| AS22356 | Durand do Brasil |
| AS267613 | Eletronet SA |

---

## 📡 APIs Utilizadas

### RIPE NCC Stat API
```
Base URL: https://stat.ripe.net/data/

Endpoints:
├── announced-prefixes/data.json?resource=AS{asn}
├── prefix-overview/data.json?resource={prefix}
├── looking-glass/data.json?resource={prefix}
├── routing-status/data.json?resource=AS{asn}
└── as-overview/data.json?resource=AS{asn}
```

### PeeringDB API
```
Base URL: https://www.peeringdb.com/api/

Endpoints:
└── net?asn={asn}  →  Tipo de rede, capacidade, políticas
```

---

## 📁 Estrutura do Projeto

```
BGPanalyzer/
├── index.html          # Interface principal (SPA — Single Page Application)
├── style.css           # Design system — dark mode SaaS + glassmorphism
├── db.js               # Camada de banco de dados — IndexedDB estruturado
├── script.js           # Lógica da aplicação + 95 operadoras cadastradas
└── README.md           # Este arquivo
```

### Organização do `script.js`

```javascript
// ── db.js — IndexedDB Layer ───────────────────────────────
BGP_DB.salvarOperadora(entry)           // Salva ASN com dados RIPE + PDB
BGP_DB.salvarPrefixos(asn, lista)       // Salva prefixos por ASN
BGP_DB.salvarAnalise(asn, resultado)    // Salva análise de AS-PATH
BGP_DB.salvarMitigacao(resultado)       // Salva evento MOAS/scrubbing
BGP_DB.listarOperadoras()              // Retorna todos os ASNs salvos
BGP_DB.buscarPrefixosPorASN(asn)       // Query por índice de ASN
BGP_DB.listarTodosPrefixos24()         // IDBKeyRange filtra mascara='24'
BGP_DB.contarDesvios()                 // Count via índice desvio_suspeito
BGP_DB.estatisticas()                  // Stats de todas as stores
BGP_DB.exportarJSON()                  // Snapshot completo para backup
BGP_DB.limparColeta()                  // Limpa coleta sem apagar mitigação

// ── script.js — Application Logic ────────────────────────
dbCarregar()               // Carrega estado do IndexedDB para memória
dbSalvarEntry()            // Persiste operadora coletada no IDB
iniciarColeta()            // Coleta por ASN individual
coletarGrupo()             // Coleta por grupo regional
analisarPrefixo()          // Análise de AS-PATH
iniciarMitigacaoScan()     // Scan MOAS / scrubbing
verificarMitigacaoPrefixo() // Verificação individual
renderTabelaMitigacao()    // UI — tabela de mitigadores
renderComparativo()        // UI — gráficos comparativos
exportarRelatorio()        // Export CSV
```

---

## 📈 Etapas do PjBL

| Data | Atividade | Produto |
|------|-----------|---------|
| 04/02 | Apresentação do PjBL e definição de grupos | Portfólio |
| 11/02 | Imersão — definição do problema e variáveis BGP | Documento de caracterização |
| 25/02 | Pré-processamento e coleta inicial | Relatório técnico |
| 04/03 | **F1** — Coleta de Dados + Narrativa Reflexiva | Entrega (5,0 pts) |
| 25/03 | **F2** — Paper 1º CHECK | Estrutura científica (5,0 pts) |
| 29/04 | Incubators — Comunicação e Refinamento | Apresentação pública |
| 13/05 | **F3** — Projeto e Resultados | Modelo final + métricas (5,0 pts) |
| 29/05 | **S1** — Avaliação Institucional | Prova (5,0 pts) |

---

## 🔭 Roadmap Técnico

- [x] Dashboard geral com métricas consolidadas
- [x] Coletor BGP com 95+ operadoras (MA + Brasil)
- [x] Integração RIPE Stat API (dados reais)
- [x] Integração PeeringDB API
- [x] Análise de AS-PATH e detecção de desvios
- [x] Mapa de prefixos /24 com filtros
- [x] Análise comparativa (Bar, Radar, Scatter)
- [x] Cache local persistente (localStorage)
- [x] **Análise de Mitigação DDoS (MOAS)**
- [x] Scan paralelo configurável com ETA
- [x] Export CSV (relatórios e mitigação)
- [ ] Análise temporal (séries históricas)
- [ ] Clustering de comportamento de anúncios
- [ ] Interpretabilidade de modelos (SHAP/LIME)
- [ ] Otimização de hiperparâmetros

---

## 🤝 Comunidade Impactada

- **Operadoras de Telecomunicações** — Backbone nacional e regional
- **Provedores Regionais (ISPs)** — Maranhão e Nordeste
- **IXPs (Internet Exchange Points)** — PTT São Luís (IX.br)
- **Equipes de NOC e Engenharia** — Monitoramento e mitigação

---

## 📚 Referências Técnicas

- [RIPE NCC Stat API Documentation](https://stat.ripe.net/docs/02.data-api/)
- [PeeringDB API](https://docs.peeringdb.com/api/)
- [RFC 4271 — BGP-4](https://www.rfc-editor.org/rfc/rfc4271)
- [MOAS (Multiple Origin AS) — Análise](https://www.caida.org/catalog/papers/2010_moas/)
- [Processo KDD — Fayyad et al., 1996](https://dl.acm.org/doi/10.1145/240455.240464)
- [IX.br — Participantes PTT São Luís](https://ix.br/particip/br/ma/slz/)

---

## 👨‍💻 Desenvolvido por

**Turma de Engenharia de Software — 7º Período**  
UNDB — Universidade Dom Bosco  
São Luís, Maranhão — 2026

Disciplina de **Mineração de Dados**  
Professor: **Wesleson Souza Silva**

---

<div align="center">

**UNDB · Escola de Tecnologia · 2026**

*"Transformando dados BGP dispersos em conhecimento estratégico para operadoras de Internet"*

</div>
