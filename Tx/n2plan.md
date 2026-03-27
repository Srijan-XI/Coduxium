# Coduxium XI - Missing Technologies Rollout Plan (n2)

Source: `technology-list.txt` (all entries tagged `[TODO: missing-on-site]`).

## Goal
Add every missing technology page/entry to the site in controlled phases, with consistent structure, navigation, and QA.

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

## Phase 1 - Core Language and Frontend Gaps
### Items
- Languages: Zig, Lua, Haskell, Julia.
- Frontend: Qwik, htmx, Alpine.js, Stencil, Web-Components.

### Why first
- Highest visibility for learners and broadest inbound traffic impact.

### Exit Criteria
- All items live in language/framework sections and searchable.

## Phase 2 - Backend and API Platform Gaps
### Items
- Backend frameworks/runtimes:
	- NestJS, Fastify, Koa, Hapi, Adonis, Sails.js, Hono, Elysia, Oak
	- Actix-web, Axum, Leptos, Phoenix, Deno runtime
- API/integration standards:
	- SOAP, AsyncAPI, OAuth 2.0/OIDC, SAML, Sidekiq, Webhooks

### Exit Criteria
- Backend index pages list all new frameworks and standards with valid links.

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

## Phase 4 - Data, Build, and Security Tooling Gaps
### Items
- Data/analytics/build:
	- Matplotlib, dbt, Bazel, CMake, Maven
- Security tools:
	- OpenVAS, Scapy

### Exit Criteria
- Data Science and Security sections complete and cross-linked.

## Phase 5 - Game and Mobile Ecosystem Gaps
### Items
- Game frameworks/libraries:
	- Amethyst, Babylon.js, Bevy, Defold, FNA, LibGDX, Love2D, MonoGame, PlayCanvas, Pygame
- Mobile:
	- Expo, Ionic, Jetpack Compose, Kivy, PWA

### Exit Criteria
- Game + Mobile pages integrated with parent category hubs.

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

## Phase 7 - Database and Infra Data Gaps
### Items
- Databases and data infra:
	- ClickHouse, Couchbase, Memcached, Milvus, MinIO, Pinecone, TimescaleDB, Weaviate, etcd

### Exit Criteria
- SQL & Databases page family has no remaining TODO entries.

## Phase 8 - Utilities and OS Final Sweep
### Items
- Utilities: VPN Tools, SSH & SSL Tools
- OS: NixOS

### Exit Criteria
- `technology-list.txt` has zero `[TODO: missing-on-site]` left.

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

