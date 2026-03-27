# Changelog

All notable changes to Coduxium XI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Vendor Highlight.js assets locally for fully offline usage
- Expand Linux distro coverage and cross-links
- Improve changelog automation (generate end-user changelog from `CHANGELOG.md`)

## [2.1.0] - 2025-12-24

### Fixed
- **Homepage category filtering**: Fixed "Databases" (and other chips) not filtering content due to selector mismatch and duplicate handlers
  - Implementation: unify chip binding and apply filter through the same render pipeline (see `js/app.js`)
- **Runtime init crash**: Prevented `setupRepoLinks()` from throwing when optional DOM nodes are missing
  - Symptom: `Cannot set properties of null (setting 'textContent')`
  - Implementation: null-guards around optional elements (see `js/app.js`)
- **Highlight theme CORB/CORS warnings**: Removed external Highlight.js theme stylesheet fetching (e.g. `dracula.min.css`)
  - Implementation: local Highlight token styling + theme switching via root class (see `components/code-highlighter/`)
- **Critical path inconsistencies**: Fixed 20+ broken links across the site
  - DevOps tools paths corrected from `Devop&Tools/` to `DevOps-I&A/`
  - AI/ML libraries paths corrected from `AIMLLIB/` to `DE-AI-ML/`
  - Data processing paths corrected from `DataProcessing/` to `DE-AI-ML/`
  - Security tools paths corrected from `Security/` to `DevSecOps&SecurityTools/`
- **Theme manager bug**: Fixed variable name inconsistency (`Coduxium XIThemeManager` → `CoduxiumXIThemeManager`) that caused duplicate theme initialization

### Added
- **Development Tools Category** (8 tools):
  - Postman (moved from DevOps)
  - Vite - Modern frontend build tool
  - Vitest - Fast unit testing framework
  - YAML - Data serialization format
  - TOML - Configuration file format
  - JSON - JavaScript Object Notation
  - XML - Extensible Markup Language
  - CSV - Comma-Separated Values
- **DevOps Tools Expansion**:
  - GitLab with CI/CD pipelines
  - Ansible for automation
- **AI/ML Libraries Expansion**:
  - Apache Spark for big data processing
  - Apache Kafka for event streaming
- **DevSecOps Tools**:
  - AquaSecurity for container security
  - SonarQube for code quality
  - Snyk for dependency scanning
  - HashiCorp Vault for secrets management

### Documentation
- Updated Linux documentation structure and tracking notes (Linux core + distro pages)
- Refreshed changelog presentation to better separate dev vs end-user notes

### Changed
- Updated dashboard statistics to include Development Tools count
- Reorganized rendering logic to properly handle `dev-tool` type
- Updated search index to include all new categories
- Enhanced stats showcase with 11 categories (was 10)

### Developer Notes
- Changelog page in `docpages/changelog/` is currently maintained separately from this file.
- Highlight.js token theme is local, but Highlight.js scripts are still loaded from CDN.

## [1.3.0] - 2025-12-21

### Added
- Linux ecosystem section with core concepts
- Distribution families overview
- Learning paths for beginners and advanced users

### Changed
- Updated changelog page with version 1.3.0
- Enhanced Resources page with Linux section
- Updated tools page with Linux tools

---

**Note**: For detailed commit history, see the [Git log](https://github.com/Srijan-XI/RunexisForge/commits/).

## Contributing

If you'd like to contribute to Coduxium XI, please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Update this changelog
5. Submit a pull request

---

**Created by [Srijan-XI](https://github.com/Srijan-XI)** 🛡️

