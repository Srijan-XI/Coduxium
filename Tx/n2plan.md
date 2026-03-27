# Coduxium XI - Missing Technologies Rollout Plan (n2)

Source: `technology-list.txt` (all entries tagged `[TODO: missing-on-site]`).

## Goal
Add every missing technology page/entry to the site in controlled phases, with consistent structure, navigation, and QA.

## Phase Status
- [x] Phase 0 - Foundation and Template Lock
- [x] Phase 1 - Core Language and Frontend Gaps
- [ ] Phase 2 - Backend and API Platform Gaps
- [ ] Phase 3 - DevOps and Platform Ops Gaps
- [ ] Phase 4 - Data, Build, and Security Tooling Gaps
- [ ] Phase 5 - Game and Mobile Ecosystem Gaps
- [ ] Phase 6 - Web3, CMS, and Network Tools Gaps
- [ ] Phase 7 - Database and Infra Data Gaps
- [ ] Phase 8 - Utilities and OS Final Sweep

## Execution Rules (apply to all phases)
- Use existing section conventions and shared CSS/JS patterns.
- For each new technology page: add metadata, short overview, use-cases, ecosystem/tools, and quick links.
- Update parent index pages after each batch so navigation is never stale.
- Keep naming consistent with current folder style in each section.
- Ship in small PR-sized batches; avoid one huge drop.

## Phase 0 - Foundation and Template Lock
### Scope
- Freeze one reusable page template per domain:
	- Languages
	- Frameworks (frontend/backend)
	- DevOps/Cloud
	- Data/DB
	- Security
	- Mobile
	- Web3
	- Game frameworks
	- Utilities/OS

### Deliverables
- Finalized content schema/checklist for all new pages.
- Definition of Done (DoD): navigation wired, style verified, links validated.

### Exit Criteria
- Team can generate new pages with the same layout and quality bar.

### Implementation Status
- [x] Content schema/checklist finalized:
	- `Tx/phase0/CONTENT_SCHEMA_CHECKLIST.md`
- [x] Definition of Done finalized:
	- `Tx/phase0/PHASE_0_DEFINITION_OF_DONE.md`
- [x] Reusable templates locked for all domains:
	- `Tx/phase0/templates/LANGUAGE_TEMPLATE_MASTER.html`
	- `Tx/phase0/templates/FRAMEWORK_TEMPLATE_MASTER.html`
	- `Tx/phase0/templates/DEVOPS_CLOUD_TEMPLATE_MASTER.html`
	- `Tx/phase0/templates/DATA_DB_TEMPLATE_MASTER.html`
	- `Tx/phase0/templates/SECURITY_TEMPLATE_MASTER.html`
	- `Tx/phase0/templates/MOBILE_TEMPLATE_MASTER.html`
	- `Tx/phase0/templates/WEB3_TEMPLATE_MASTER.html`
	- `Tx/phase0/templates/GAME_FRAMEWORK_TEMPLATE_MASTER.html`
	- `Tx/phase0/templates/UTILITIES_OS_TEMPLATE_MASTER.html`

## Phase 1 - Core Language and Frontend Gaps
### Items
- Languages: Zig, Lua, Haskell, Julia.
- Frontend: Qwik, htmx, Alpine.js, Stencil, Web-Components.

### Why first
- Highest visibility for learners and broadest inbound traffic impact.

### Exit Criteria
- All items live in language/framework sections and searchable.

### Implementation Status

#### Phase 1.1 - Language Core Expansion (Detailed Guides)
- [x] Language batch created and linked:
	- `pages/Languages/Zig/Zig.html`
	- `pages/Languages/Lua/Lua.html`
	- `pages/Languages/Haskell/Haskell.html`
	- `pages/Languages/Julia/Julia.html`
- [x] Language pages rewritten in detailed legacy style (intro, setup, user guide, advanced, next-steps).
- [x] Languages index updated with new entries:
	- `pages/Languages/languages.html`

#### Phase 1.2 - Frontend Framework Coverage (Detailed Guides)
- [x] Frontend framework batch created and linked:
	- `pages/Framework/FFW/Qwik/Qwik.html`
	- `pages/Framework/FFW/htmx/htmx.html`
	- `pages/Framework/FFW/AlpineJs/AlpineJs.html`
	- `pages/Framework/FFW/Stencil/Stencil.html`
	- `pages/Framework/FFW/WebComponents/WebComponents.html`
- [x] Frontend pages rewritten in detailed framework-guide style (overview, features, use-cases, getting-started, best-practices, resources).
- [x] Framework index updated with new entries:
	- `pages/Framework/frameworks.html`

#### Phase 1.3 - Quality and Consistency Gate
- [x] Naming/path consistency aligned with existing section conventions.
- [x] Metadata and section hierarchy normalized across all 9 Phase 1 pages.
- [x] Phase 1 split into sub-phases for finer execution and QA tracking.

## Phase 2 - Backend and API Platform Gaps
### Items
- Backend frameworks/runtimes:
	- NestJS, Fastify, Koa, Hapi, Adonis, Sails.js, Hono, Elysia, Oak
	- Actix-web, Axum, Leptos, Phoenix, Deno runtime
- API/integration standards:
	- SOAP, AsyncAPI, OAuth 2.0/OIDC, SAML, Sidekiq, Webhooks

### Exit Criteria
- Backend index pages list all new frameworks and standards with valid links.

### Sub-Phases

#### Phase 2.1 - Node.js Backend Framework Batch
**Scope**
- NestJS, Fastify, Koa, Hapi, Adonis, Sails.js, Hono, Elysia.

**Deliverables**
- Detailed page per framework using backend-framework template conventions.
- Framework category/index updates with valid links.
- Search integration coverage for each new framework.

**Exit Criteria**
- All Node.js backend framework pages are published and discoverable.

#### Phase 2.2 - Cross-Runtime Backend Framework Batch
**Scope**
- Oak (Deno ecosystem), Actix-web, Axum, Leptos, Phoenix, Deno runtime.

**Deliverables**
- Runtime-accurate pages (language/runtime context + practical setup).
- Parent framework index updated with grouped backend entries.
- Cross-links to related language/runtime pages.

**Exit Criteria**
- All non-Node backend/runtime entries are linked and navigable.

#### Phase 2.3 - API and Integration Standards Batch
**Scope**
- SOAP, AsyncAPI, OAuth 2.0/OIDC, SAML, Sidekiq, Webhooks.

**Deliverables**
- Standards-focused pages with architecture context, use-cases, and quick-start examples.
- Index updates in relevant framework/integration sections.
- Internal linking from backend framework pages to applicable standards.

**Exit Criteria**
- API/integration standard pages are live and connected to backend ecosystem pages.

#### Phase 2.4 - Consolidation and QA Gate
**Scope**
- Validate all Phase 2 pages and index wiring.

**Deliverables**
- Link validation sweep for all newly added Phase 2 entries.
- Metadata and heading consistency check.
- Search/filter discoverability verification from home/catalog pages.

**Exit Criteria**
- Phase 2 QA checklist fully passed and Phase 2 marked complete.

### Implementation Status

#### Phase 2.1 - Node.js Backend Framework Batch
- [x] Content pages created
- [x] Category index updated
- [x] Styling verified
- [x] Links verified
- [x] Search verified
- [x] QA sign-off

#### Phase 2.2 - Cross-Runtime Backend Framework Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 2.3 - API and Integration Standards Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 2.4 - Consolidation and QA Gate
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

## Phase 3 - DevOps and Platform Ops Gaps
### Items
- CI/CD and platform ops:
	- Tekton, Podman, Helm, Nomad, Kustomize, Skaffold
- Service mesh / infra tooling:
	- Istio, OpenTofu, Pulumi, Flux, Consul
- Cloud/observability/additional tools:
	- Linode, IBM Cloud, Loki, Zipkin, CloudWatch, n8n

### Exit Criteria
- DevOps and Cloud sections fully cover current TODO stack.

### Sub-Phases

#### Phase 3.1 - CI/CD and Delivery Tooling Batch
**Scope**
- Tekton, Helm, Kustomize, Skaffold.

**Deliverables**
- Detailed page per tool with install/setup, workflow examples, and common pitfalls.
- DevOps index/category updates with stable links.
- Cross-links between Kubernetes-native delivery tools.

**Exit Criteria**
- CI/CD delivery tool pages are published and discoverable.

#### Phase 3.2 - Runtime and Orchestration Ops Batch
**Scope**
- Podman, Nomad, Consul.

**Deliverables**
- Runtime and orchestration pages with architecture context and practical examples.
- Index and search integration for all three entries.
- Comparison links to existing Docker/Kubernetes content where relevant.

**Exit Criteria**
- Runtime/orchestration pages are live with valid internal navigation.

#### Phase 3.3 - Service Mesh and IaC Tooling Batch
**Scope**
- Istio, OpenTofu, Pulumi, Flux.

**Deliverables**
- Service mesh and IaC pages with use-case matrix and quick-start flows.
- Parent category updates in DevOps/Cloud sections.
- Related-links blocks to Kubernetes/Terraform ecosystems.

**Exit Criteria**
- Mesh and IaC tool pages are connected and searchable.

#### Phase 3.4 - Cloud and Observability Coverage Batch
**Scope**
- Linode, IBM Cloud, Loki, Zipkin, CloudWatch, n8n.

**Deliverables**
- Cloud provider and observability/workflow pages with setup + best practices.
- DevOps/Cloud section updates and validated links.
- Cross-links from observability pages to tracing/metrics/logging ecosystems.

**Exit Criteria**
- Cloud/observability entries are fully integrated into navigation.

#### Phase 3.5 - Consolidation and QA Gate
**Scope**
- Validate all Phase 3 pages and index wiring.

**Deliverables**
- Link verification sweep for all Phase 3 additions.
- Metadata and heading hierarchy consistency pass.
- Search/filter discoverability checks from home/catalog.

**Exit Criteria**
- Phase 3 QA checklist fully passed and Phase 3 marked complete.

### Implementation Status

#### Phase 3.1 - CI/CD and Delivery Tooling Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 3.2 - Runtime and Orchestration Ops Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 3.3 - Service Mesh and IaC Tooling Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 3.4 - Cloud and Observability Coverage Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 3.5 - Consolidation and QA Gate
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

## Phase 4 - Data, Build, and Security Tooling Gaps
### Items
- Data/analytics/build:
	- Matplotlib, dbt, Bazel, CMake, Maven
- Security tools:
	- OpenVAS, Scapy

### Exit Criteria
- Data Science and Security sections complete and cross-linked.

### Sub-Phases

#### Phase 4.1 - Data and Analytics Tooling Batch
**Scope**
- Matplotlib, dbt.

**Deliverables**
- Data-focused pages with setup, practical examples, and ecosystem links.
- Data/AI category index updates.
- Cross-links to Python and SQL/data pipeline pages.

**Exit Criteria**
- Data/analytics entries are published and searchable.

#### Phase 4.2 - Build System Tooling Batch
**Scope**
- Bazel, CMake, Maven.

**Deliverables**
- Build-tool pages with project setup, CI usage, and best practices.
- Framework/development index updates for build tooling.
- Cross-links to Java/C++/polyglot project pages.

**Exit Criteria**
- Build tooling entries are integrated into navigation and search.

#### Phase 4.3 - Security Tooling Batch
**Scope**
- OpenVAS, Scapy.

**Deliverables**
- Security tool pages covering setup, workflows, and responsible use notes.
- Security category updates and internal linking.
- Alignment with existing DevSecOps pages.

**Exit Criteria**
- Security tool pages are connected and accessible through category hubs.

#### Phase 4.4 - Consolidation and QA Gate
**Scope**
- Validate all Phase 4 pages and parent index wiring.

**Deliverables**
- Link validation sweep.
- Metadata/style consistency pass.
- Search discoverability checks.

**Exit Criteria**
- Phase 4 QA checklist fully passed and Phase 4 marked complete.

### Implementation Status

#### Phase 4.1 - Data and Analytics Tooling Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 4.2 - Build System Tooling Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 4.3 - Security Tooling Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 4.4 - Consolidation and QA Gate
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

## Phase 5 - Game and Mobile Ecosystem Gaps
### Items
- Game frameworks/libraries:
	- Amethyst, Babylon.js, Bevy, Defold, FNA, LibGDX, Love2D, MonoGame, PlayCanvas, Pygame
- Mobile:
	- Expo, Ionic, Jetpack Compose, Kivy, PWA

### Exit Criteria
- Game + Mobile pages integrated with parent category hubs.

### Sub-Phases

#### Phase 5.1 - Game Framework Batch A
**Scope**
- Amethyst, Bevy, Defold, FNA, MonoGame.

**Deliverables**
- Engine/framework pages with setup, pipeline, and use-case guidance.
- Game category index updates and verified links.
- Cross-links to language pages (Rust, C#, etc.) where relevant.

**Exit Criteria**
- Batch A game entries are published and searchable.

#### Phase 5.2 - Game Framework Batch B
**Scope**
- Babylon.js, LibGDX, Love2D, PlayCanvas, Pygame.

**Deliverables**
- Remaining game framework pages with consistent page schema.
- Parent category updates and validated navigation.
- Ecosystem links for rendering, physics, and deployment.

**Exit Criteria**
- Batch B game entries are integrated and discoverable.

#### Phase 5.3 - Mobile Platform and Framework Batch
**Scope**
- Expo, Ionic, Jetpack Compose, Kivy, PWA.

**Deliverables**
- Mobile pages with platform context, setup, and practical examples.
- Mobile category/index updates and search integration.
- Cross-links to related JS/Kotlin/Python framework pages.

**Exit Criteria**
- Mobile entries are live and linked from parent hubs.

#### Phase 5.4 - Consolidation and QA Gate
**Scope**
- Validate all Phase 5 pages and category wiring.

**Deliverables**
- Link and metadata consistency sweep.
- Search/filter discoverability checks.
- Responsive sanity pass for game/mobile pages.

**Exit Criteria**
- Phase 5 QA checklist fully passed and Phase 5 marked complete.

### Implementation Status

#### Phase 5.1 - Game Framework Batch A
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 5.2 - Game Framework Batch B
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 5.3 - Mobile Platform and Framework Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 5.4 - Consolidation and QA Gate
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

## Phase 6 - Web3, CMS, and Network Tools Gaps
### Items
- Web3:
	- Solidity, Bitcoin, Solana, Polkadot, Web3JS, MetaMask
- CMS:
	- Sanity.io, Contentful, Ghost, Payload
- Network:
	- Nmap, tcpdump

### Exit Criteria
- Web3/CMS/Network sections include all missing entries and route correctly.

### Sub-Phases

#### Phase 6.1 - Web3 Core Stack Batch
**Scope**
- Solidity, Web3JS, MetaMask.

**Deliverables**
- Core web3 developer workflow pages with setup and safety notes.
- Web3 category index updates with consistent link paths.
- Cross-links between smart contract, wallet, and JS integration pages.

**Exit Criteria**
- Web3 core tooling entries are published and navigable.

#### Phase 6.2 - Blockchain Ecosystem Batch
**Scope**
- Bitcoin, Solana, Polkadot.

**Deliverables**
- Chain-specific overview pages with developer entry points.
- Web3 category updates and search inclusion.
- Related-links to wallets/sdk/framework pages.

**Exit Criteria**
- Blockchain ecosystem entries are integrated and discoverable.

#### Phase 6.3 - CMS Platform Batch
**Scope**
- Sanity.io, Contentful, Ghost, Payload.

**Deliverables**
- CMS pages with architecture model, setup, and use-cases.
- CMS/category index updates with valid links.
- Cross-links to frontend frameworks and deployment pages.

**Exit Criteria**
- CMS entries are live and correctly routed from parent hubs.

#### Phase 6.4 - Network Tooling Batch
**Scope**
- Nmap, tcpdump.

**Deliverables**
- Network tool pages with practical usage patterns and safety guidance.
- Security/network section updates and search integration.
- Internal links to related security and Linux pages.

**Exit Criteria**
- Network tooling entries are accessible and cross-linked.

#### Phase 6.5 - Consolidation and QA Gate
**Scope**
- Validate all Phase 6 pages and section wiring.

**Deliverables**
- Link validation and metadata consistency sweep.
- Search discoverability checks for Web3/CMS/Network additions.
- Desktop/mobile sanity pass for new pages.

**Exit Criteria**
- Phase 6 QA checklist fully passed and Phase 6 marked complete.

### Implementation Status

#### Phase 6.1 - Web3 Core Stack Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 6.2 - Blockchain Ecosystem Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 6.3 - CMS Platform Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 6.4 - Network Tooling Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 6.5 - Consolidation and QA Gate
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

## Phase 7 - Database and Infra Data Gaps
### Items
- Databases and data infra:
	- ClickHouse, Couchbase, Memcached, Milvus, MinIO, Pinecone, TimescaleDB, Weaviate, etcd

### Exit Criteria
- SQL & Databases page family has no remaining TODO entries.

### Sub-Phases

#### Phase 7.1 - Analytical and Time-Series Database Batch
**Scope**
- ClickHouse, TimescaleDB.

**Deliverables**
- Detailed analytical/time-series pages with setup and workload guidance.
- Database index updates with validated links.
- Cross-links to SQL and data engineering pages.

**Exit Criteria**
- Analytical/time-series entries are live and discoverable.

#### Phase 7.2 - Caching and KV Infrastructure Batch
**Scope**
- Memcached, etcd.

**Deliverables**
- Caching/coordination pages with architecture and operations notes.
- Parent database/infra updates and search integration.
- Cross-links to existing Redis/DevOps pages.

**Exit Criteria**
- KV/coordination entries are integrated with valid routing.

#### Phase 7.3 - Modern NoSQL and Vector Data Batch
**Scope**
- Couchbase, Milvus, Pinecone, Weaviate, MinIO.

**Deliverables**
- NoSQL/vector/object storage pages with practical use-cases.
- Database category updates and internal linking.
- Related-links to AI/ML and backend framework pages.

**Exit Criteria**
- NoSQL/vector/storage entries are published and searchable.

#### Phase 7.4 - Consolidation and QA Gate
**Scope**
- Validate all Phase 7 pages and database family navigation.

**Deliverables**
- Link validation and metadata consistency pass.
- Search/filter discoverability checks.
- Desktop/mobile sanity pass for database entries.

**Exit Criteria**
- Phase 7 QA checklist fully passed and Phase 7 marked complete.

### Implementation Status

#### Phase 7.1 - Analytical and Time-Series Database Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 7.2 - Caching and KV Infrastructure Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 7.3 - Modern NoSQL and Vector Data Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 7.4 - Consolidation and QA Gate
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

## Phase 8 - Utilities and OS Final Sweep
### Items
- Utilities: VPN Tools, SSH & SSL Tools
- OS: NixOS

### Exit Criteria
- `technology-list.txt` has zero `[TODO: missing-on-site]` left.

### Sub-Phases

#### Phase 8.1 - Utility Tooling Batch
**Scope**
- VPN Tools, SSH & SSL Tools.

**Deliverables**
- Utility pages with setup workflows and best-practice checklists.
- Utility/category index updates with verified links.
- Cross-links to security and Linux networking pages.

**Exit Criteria**
- Utility tooling entries are integrated and discoverable.

#### Phase 8.2 - OS Completion Batch
**Scope**
- NixOS.

**Deliverables**
- NixOS page aligned to existing OS/Linux content conventions.
- OS category index update and route validation.
- Related-links to Linux ecosystem and package management content.

**Exit Criteria**
- NixOS entry is fully integrated with parent hubs.

#### Phase 8.3 - Final Sweep and Closure Gate
**Scope**
- Complete end-to-end validation and TODO closure.

**Deliverables**
- Confirm `technology-list.txt` has zero `[TODO: missing-on-site]` entries.
- Full-link audit across all newly added phases.
- Final metadata/search/responsive verification report.

**Exit Criteria**
- All rollout criteria satisfied and project marked complete.

### Implementation Status

#### Phase 8.1 - Utility Tooling Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 8.2 - OS Completion Batch
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

#### Phase 8.3 - Final Sweep and Closure Gate
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off

## QA and Validation Checklist (every phase)
- Parent category page updated with links to newly added items.
- No broken relative links.
- Page title, heading hierarchy, and metadata are consistent.
- Search index integration verified (if section uses search).
- Desktop and mobile layout sanity check.

## Suggested Batch Size and Cadence
- Batch size: 8-12 technologies per PR.
- Cadence: 1-2 phases per sprint depending on review bandwidth.
- Hard rule: do not start next phase until current phase passes QA checklist.

## Tracking Template
Use this checklist block per phase in progress tracking:

```md
### Phase X - <name>
- [ ] Content pages created
- [ ] Category index updated
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified
- [ ] QA sign-off
```

## Completion Definition
Project is complete when:
- all missing technologies from `technology-list.txt` are published,
- category navigation is updated,
- no TODO tags remain,
- and QA checklist has passed for every phase.

