# 🛡️ BGP Analyzer — Mineração de Dados em Redes

<div align="center">

![BGP Analyzer](https://img.shields.io/badge/BGP-Analyzer-0ea5e9?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMSAxNy45M1Y0LjA3YzEuMDIuMTMgMy40OS41NCA1Ljc1IDMuMThMOCAxMiA2LjI1IDE2Ljc1QzYuOSAxOS4zOSAxMC4wMSAyMC4yMSAxMSAxOS45M3oiLz48L3N2Zz4=)
![UNDB](https://img.shields.io/badge/UNDB-7º%20Período-8b5cf6?style=for-the-badge)
![Mineração de Dados](https://img.shields.io/badge/Mineração%20de%20Dados-PjBL-22c55e?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f59e0b?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-Frontend-e34f26?style=for-the-badge&logo=html5&logoColor=white)
![RIPE NCC](https://img.shields.io/badge/RIPE%20NCC-API-005ea5?style=for-the-badge)

**Sistema para coletar dados BGP, entender rotas de operadoras e identificar sinais de mitigação DDoS**

[📚 Contexto Acadêmico](#-contexto-acadêmico) · [🎯 Problema](#-problema) · [🏗️ Arquitetura](#️-arquitetura) · [📘 Glossário](#-glossário-rápido) · [🚀 Como Usar](#-como-usar) · [📊 Funcionalidades](#-funcionalidades)

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

> Este projeto é o **PBL (Project-Based Learning)** da disciplina de Mineração de Dados. Ele aplica coleta, organização e análise de dados em um cenário real de infraestrutura de Internet.

---

## 🎯 Problema

Quando uma operadora sofre um ataque **DDoS**, ela pode enviar o tráfego para um provedor de mitigação. Esse provedor filtra o tráfego ruim e pode passar a anunciar os prefixos da operadora na tabela BGP global.

### ❌ Situação Atual (Problema)

- A análise costuma ser manual e feita só depois do incidente
- As consultas ficam espalhadas em ferramentas diferentes
- É difícil saber quais prefixos aparecem com outro ASN de origem
- Fica difícil comparar operadoras, medir percentuais e encontrar padrões
- A equipe técnica perde visibilidade sobre risco e recorrência

### ✅ Proposta de Solução

Criar um painel que coleta dados BGP, salva os resultados e mostra sinais de mitigação DDoS de forma visual. O objetivo é responder perguntas simples: quais operadoras foram coletadas, quais prefixos /24 aparecem, quais rotas parecem incomuns e quais ASNs podem estar atuando como mitigadores.

---

## 🏗️ Arquitetura

```
BGP ANALYZER — Arquitetura
├── index.html          → Interface SPA (Single Page Application)
├── style.css           → Design system — dark mode + glassmorphism
├── server.js           → API Node.js + MongoDB + servidor da UI
├── db.js               → Cliente REST BGP_DB usado pela interface
└── script.js           → Lógica da aplicação + 150 operadoras
```

### Banco de Dados — API Node.js + MongoDB

```sql
-- bgp_analyzer (MongoDB, acessado pela API Node)
│
├── operadoras       índice único: asn
├── prefixos         índice único: id (asn_prefixo)
├── analises         índice único: asn
├── mitigacao        índice único: id (prefixo_asnMitigador)
├── eventos          histórico operacional
└── meta             engine, schema e atualização
```

> A interface nao grava mais dados no browser. O objeto `BGP_DB` agora e um cliente REST que envia tudo para `/api`, e a API persiste em MongoDB. Se o MongoDB nao estiver instalado no ambiente de desenvolvimento, o servidor usa um fallback em `data/bgp-analyzer.dev.json` para manter a UI testavel.

### Stack Tecnológico

| Camada | Tecnologia |
|--------|-----------|
| **Frontend** | HTML5 + CSS3 + JavaScript (ES6+) |
| **Gráficos** | Chart.js 4.4.1 |
| **Tipografia** | IBM Plex Mono + Geist (Google Fonts) |
| **Dados BGP** | RIPE NCC Stat API (`stat.ripe.net`) |
| **Dados de Rede** | PeeringDB REST API |
| **Backend/API** | Node.js + Express |
| **Persistência** | MongoDB via driver oficial (`mongodb`) |
| **Fallback dev** | JSON local em `data/bgp-analyzer.dev.json` |
| **Design** | SaaS Dashboard — Dark Mode + Glassmorphism |

---

## 📘 Glossário Rápido

| Termo | Significado simples |
|-------|---------------------|
| **BGP** | Protocolo usado pelas redes para informar por onde os blocos de IP trafegam na Internet. |
| **ASN** | Número que identifica uma rede, operadora, provedor ou grande empresa. Exemplo: AS28573. |
| **Prefixo IP** | Bloco de endereços IP anunciado por uma rede. Exemplo: `177.71.128.0/24`. |
| **/24** | Bloco IPv4 com até 256 endereços. É comum em mitigação porque é específico. |
| **AS-PATH** | Lista de ASNs por onde uma rota passou. Muitos saltos podem indicar caminho incomum. |
| **MOAS** | Mesmo prefixo anunciado por dois ou mais ASNs de origem. Pode indicar mitigação ou mudança de rota. |
| **Scrubbing** | Limpeza de tráfego DDoS por um provedor especializado. Ele filtra o ataque e entrega o tráfego válido. |
| **Upstream** | Rede usada como caminho de saída para a Internet. Ter mais de um upstream aumenta a redundância. |
| **RIPE Stat** | Fonte pública usada para consultar prefixos, rotas e dados BGP. |
| **PeeringDB** | Base pública com informações sobre redes, pontos de troca e tipo de provedor. |

---

## 📊 Funcionalidades

### 1. 🌐 Dashboard Geral
- Mostra a visão geral da coleta
- Exibe operadoras, prefixos, /24 e possíveis caminhos incomuns
- Mostra gráficos simples para comparar os dados coletados

### 2. 📡 Coletor BGP
- Coleta dados de **150 operadoras** do Maranhão e Brasil via RIPE Stat
- Permite coletar uma operadora, digitar um ASN manualmente ou coletar um grupo regional
- **Grupos pré-configurados:**
  - MA São Luís / Grande Ilha (20 operadoras)
  - MA PTT São Luís — IX.br (50 operadoras verificadas)
  - MA Imperatriz e Sul (12 operadoras)
  - MA Interior (29 operadoras)
  - Nordeste com cobertura no MA (20 operadoras)
  - Grandes Nacionais (7 operadoras)
  - Trânsito / CDN / Educação (12 redes)
- Mostra o andamento da coleta no terminal da tela
- Usa PeeringDB para complementar o tipo da rede

### 3. 🔍 Analisador de Desvios BGP
- Análise individual de qualquer prefixo IP
- Mostra o **AS-PATH**, ou seja, o caminho da rota até o prefixo
- Indica caminho incomum quando há muitos saltos ou muitos caminhos diferentes
- Mostra quais ASNs aparecem com mais frequência no caminho

### 4. 📋 Mapa de Prefixos /24
- Lista todos os prefixos /24 coletados
- Filtro por operadora e busca textual
- Exportação para CSV
- Botão para analisar um prefixo diretamente no Analisador

### 5. 📄 Relatório Final
- Junta os principais resultados em uma tabela por operadora
- Mostra total de prefixos, quantidade de /24, tipo de rede, caminho incomum e média de saltos
- Exporta o resultado para CSV

### 6. 📊 Análise Comparativa
- **Gráfico de Barras**: Total de prefixos por operadora
- **Radar**: comparação geral em escala comum
- **Dispersão**: relação entre prefixos /24 e média de saltos
- **Mapa de risco**: resumo visual das operadoras com mais sinais de atenção

### 7. 🛡️ Análise de Mitigação DDoS *(Feature Principal)*
- Detecta **MOAS**, que é quando o mesmo prefixo aparece com mais de um ASN de origem
- Identifica possíveis ASNs mitigadores
- Verifica se o prefixo tem 2 ou mais caminhos de saída, o que indica redundância
- Usa uma base de **26+ provedores conhecidos de scrubbing** como referência
- Permite analisar todos os prefixos coletados e exportar o resultado para CSV

---

## 🔬 Metodologia de Análise

O projeto usa uma sequência simples de mineração de dados:

```
SELEÇÃO → PRÉ-PROCESSAMENTO → TRANSFORMAÇÃO → MINERAÇÃO → INTERPRETAÇÃO
```

### Etapas Implementadas

| Etapa | Como aparece no BGP Analyzer |
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
| **ASN de Origem** | Rede que anuncia o prefixo como origem principal |
| **ASN Mitigador** | Rede que também aparece anunciando o prefixo durante possível mitigação |
| **AS-PATH** | Sequência de redes no caminho da rota |
| **Communities BGP** | Marcadores usados por redes para políticas de roteamento |
| **Timestamp** | Momento da coleta para análise temporal |
| **Tipo de Rede** | Classificação via PeeringDB (ISP, CDN, IX, etc.) |

---

## 🚀 Como Usar

### Pré-requisitos
- Navegador moderno com suporte a **WebAssembly** (Chrome, Firefox, Edge — qualquer versão recente)
- Node.js 20+
- MongoDB local ou remoto configurado em `MONGODB_URI`
- Conexão com a Internet (para consultas às APIs RIPE, PeeringDB e para carregar Chart.js do CDN)

---

### ▶ Opção 1 — Rodar API + UI na porta 80

```
npm install
copy .env.example .env
npm start
# Acesse: http://localhost
```

> A API serve a propria interface e os endpoints REST em `/api`.

---

### ▶ Opção 2 — MongoDB remoto

Configure `.env`:

```
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net
MONGODB_DB=bgp_analyzer
PORT=80
```

---

### ▶ Opção 3 — Desenvolvimento sem MongoDB local

```bash
npm install
$env:FILE_DB_FALLBACK="true"
$env:PORT="8080"
npm start
# Acesse: http://localhost:8080
```

> **Nota:** Mesmo no fallback, a interface continua usando a API. O arquivo local serve apenas como banco de desenvolvimento quando o MongoDB nao esta disponivel.

### Fluxo de Uso

```
1. COLETOR BGP
   └─ Selecione uma operadora ou grupo regional
   └─ Clique em "Coletar" (dados salvos pela API)

2. DASHBOARD
   └─ Visualize as métricas consolidadas
   └─ Acompanhe os gráficos de distribuição

3. ANALISADOR
   └─ Insira um prefixo /24 para análise detalhada
   └─ Veja o caminho BGP e possíveis rotas incomuns

4. MITIGAÇÃO DDOS ← Feature Principal
   └─ Clique em "Analisar Todos os Prefixos"
   └─ Aguarde a análise de MOAS nos /24 coletados
   └─ Veja quais ASNs podem estar atuando como mitigadores

5. RELATÓRIO
   └─ Exporte os resultados para CSV
```

---

## 🏢 Provedores de Mitigação Monitorados

O sistema possui uma base de dados com **26+ provedores conhecidos de scrubbing**. Eles servem como referência para identificar redes que costumam atuar na limpeza de tráfego DDoS.

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
├── server.js           # API Node.js, MongoDB e servidor estatico da UI
├── db.js               # Cliente REST usado pela interface
├── script.js           # Lógica da aplicação + 150 operadoras cadastradas
└── README.md           # Este arquivo
```

### Organização do `script.js`

```javascript
// ── db.js — REST Client para a API Node ───────────────────
BGP_DB.salvarOperadora(entry)           // INSERT OR REPLACE INTO operadoras
BGP_DB.salvarPrefixos(asn, lista)       // INSERT OR REPLACE INTO prefixos (batch)
BGP_DB.salvarAnalise(asn, resultado)    // INSERT OR REPLACE INTO analises
BGP_DB.salvarMitigacao(resultado)       // INSERT OR REPLACE INTO mitigacao
BGP_DB.listarOperadoras()              // SELECT * FROM operadoras
BGP_DB.buscarPrefixosPorASN(asn)       // SELECT prefixo WHERE asn = ?
BGP_DB.listarTodosPrefixos24()         // SELECT * WHERE mascara = '24'
BGP_DB.contarDesvios()                 // SELECT COUNT(*) WHERE desvio_suspeito = 1
BGP_DB.estatisticas()                  // COUNT(*) de todas as tabelas
BGP_DB.exportarJSON()                  // Snapshot completo para backup
BGP_DB.exportarJSON()                  // Snapshot completo da API
BGP_DB.transformarWarehouse()          // Tabela consolidada para analise
BGP_DB.migrarIndexedDBLegado()         // Migra a base antiga, se existir
BGP_DB.limparColeta()                  // DELETE FROM operadoras, prefixos, analises

// ── script.js — Application Logic ────────────────────────
dbCarregar()               // Carrega estado da API para memória
dbSalvarEntry()            // Persiste operadora coletada pela API
iniciarColeta()            // Coleta por ASN individual
coletarGrupo()             // Coleta por grupo regional
analisarPrefixo()          // Analisa o caminho BGP de um prefixo
iniciarMitigacaoScan()     // Procura MOAS e possiveis mitigadores
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
- [x] Coletor BGP com 150 operadoras (MA + Brasil)
- [x] Integração RIPE Stat API (dados reais)
- [x] Integração PeeringDB API
- [x] Análise de caminho BGP e detecção de rotas incomuns
- [x] Mapa de prefixos /24 com filtros
- [x] Análise comparativa (Bar, Radar, Scatter)
- [x] Backend Node.js com API REST
- [x] Banco persistente em MongoDB
- [x] **Análise de Mitigação DDoS (MOAS)**
- [x] Análise paralela configurável com ETA
- [x] Export CSV (relatórios e mitigação)
- [x] **Migração do banco do browser para API Node/MongoDB**
- [x] Tela de Base de Dados com backup JSON e tabela de análise
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
