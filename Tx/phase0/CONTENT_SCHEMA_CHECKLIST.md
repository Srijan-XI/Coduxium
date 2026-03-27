# Content Schema and Checklist (Phase 0)

## Scope
This schema is required for all new technology pages added in Phases 1-8.

## Required Metadata
- HTML title includes technology name and site context.
- Meta description (120-170 chars) with clear summary.
- Meta keywords include technology, category, and 3-6 related terms.
- Canonical or stable relative page path in category naming style.

Checklist:
- [ ] Title present and correct
- [ ] Meta description present
- [ ] Meta keywords present
- [ ] Path naming matches section conventions

## Required Page Structure
1. Hero/Header
- Technology name
- One-line value proposition
- Category badges

2. Introduction
- What it is
- Why use it
- Core capabilities

3. Installation and Setup
- Platform-specific or environment-specific setup
- Verification steps

4. User Guide
- Basic commands or starter flow
- Typical workflow examples

5. Advanced Topics
- Performance, architecture, or integration patterns
- Common pitfalls and best practices

6. Ecosystem and Tools
- Official docs
- Related tools/frameworks/plugins

7. Next Steps / Quick Links
- Internal links to related pages
- External official references

Checklist:
- [ ] All required sections exist
- [ ] Section order is preserved
- [ ] At least one code or command example included
- [ ] At least one internal and one external link included

## Navigation and Components
- Include category return link or breadcrumb.
- Include shared interaction components when used by category:
  - Scroll to top
  - Theme switch
  - Code highlighter

Checklist:
- [ ] Navigation path included
- [ ] Shared components wired correctly for page depth

## Quality Baseline
- Single H1 per page.
- H2/H3 hierarchy in logical order.
- No placeholder text left behind.
- Mobile layout remains readable.

Checklist:
- [ ] Heading hierarchy valid
- [ ] No placeholder content
- [ ] Mobile sanity check passed

## Parent Index Update Rule
After any page batch is created:
- Update parent category index links in same PR.
- Verify no stale or missing entries.

Checklist:
- [ ] Parent index updated
- [ ] New pages reachable from parent index

## Search Integration Rule
If section has search index logic, add entry or ensure crawlability.

Checklist:
- [ ] Search visibility verified for each new technology
