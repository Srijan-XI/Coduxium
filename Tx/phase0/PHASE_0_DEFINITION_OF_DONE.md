# Phase 0 Definition of Done

## Purpose
This definition of done is the release gate for Phase 0 (Foundation and Template Lock).
Phase 0 can only be marked done when every item below passes.

## Required Deliverables
- One reusable template exists for each domain:
  - Languages
  - Frameworks (frontend/backend)
  - DevOps/Cloud
  - Data/DB
  - Security
  - Mobile
  - Web3
  - Game frameworks
  - Utilities/OS
- Finalized content schema and checklist for all new pages.
- QA checklist for page quality and integration.

## Validation Gates
### 1) Navigation Wired
- Parent category page links to every new page created in a batch.
- New page includes breadcrumb or return navigation path.
- No orphan pages.

Pass criteria:
- Manual click-through from category page reaches each new page.

### 2) Style Verified
- New page uses shared project CSS patterns.
- Typography, spacing, badges, and section headers align with category style.
- Theme behavior is not broken (dark/light where present).

Pass criteria:
- Visual check on desktop and mobile for at least one page per touched domain.

### 3) Links Validated
- No broken internal relative links.
- External links open correctly.
- Parent index link targets are correct.

Pass criteria:
- Manual link sweep passes with zero broken links.

### 4) Search Integration Verified
- If section uses search, new pages/entries are discoverable.
- Search labels match page title and technology name.

Pass criteria:
- Query by technology name returns expected result.

### 5) Metadata and Structure Quality
- Page title and metadata follow schema.
- Heading hierarchy is valid (single H1, ordered H2/H3 structure).
- Required sections from schema are present.

Pass criteria:
- Schema checklist shows all required fields complete.

## Final Sign-off Checklist
- [ ] Templates exist for all 9 domains
- [ ] Content schema finalized
- [ ] Navigation wired and verified
- [ ] Styling verified
- [ ] Links verified
- [ ] Search verified (if applicable)
- [ ] Desktop/mobile sanity checks completed
- [ ] Team validation: at least 2 trial pages built from template without structural drift

## Team Validation Test
Create two trial pages from templates:
- One language page
- One framework or devops page

Both must pass the same checklist before Phase 0 is marked done.
