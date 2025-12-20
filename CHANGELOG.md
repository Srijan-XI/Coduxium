# Changelog

All notable changes to DevSphere will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Linux Distribution Pages** - Created comprehensive guides for 15 Linux distributions:
  - Arch family: Arch Linux, BlackArch, Garuda Linux, RedArch
  - Debian family: Ubuntu, Kali Linux, Linux Mint, ParrotSec
  - Red Hat family: Fedora, RHEL, CentOS, Oracle Linux
  - Independent: Gentoo, Slackware
- **Linux Core Pages** - Added essential Linux documentation:
  - `linux.html` - Main Linux ecosystem overview with sidebar navigation
  - `kernel.html` - Linux kernel architecture and components
  - `filesystem.html` - File system hierarchy and structure
  - `install.html` - Installation guides for various methods
  - `commands.html` - Essential Linux command reference
- **Brutalist Watermark Component** - Interactive watermark on all pages:
  - Shield icon with cyan glow effect
  - Shimmer animation on hover
  - Auto-injected via JavaScript
  - Links to creator's GitHub profile
  - Fully responsive and theme-aware
- **Linux Section Integration** - Added Linux to main navigation:
  - Updated `index.html` with Linux links
  - Added Linux filter chip to content controls
  - Integrated 15 Linux items into `app.js` data model
  - Added "Linux Distros" stat to dashboard
- **Organized File Structure** - Created dedicated `watermark/` folder:
  - `watermark/watermark.css` - Component styling
  - `watermark/watermark.js` - Auto-injection script
  - Updated all import paths across codebase

### Changed
- **Linux Page Enhancement** - Added left sidebar for improved navigation
  - Sticky sidebar with links to all distributions
  - Organized by distribution families
  - Core concepts and installation sections
- **Ubuntu Page Path Fix** - Corrected CSS import path from 3 to 4 levels deep
- **Arch Family Link** - Added RedArch to Arch Linux related distributions
- **Watermark Design Evolution**:
  - Replaced Microsoft-style logo with Lucide shield icon
  - Enhanced with glassmorphism and drop-shadow effects
  - Improved hover interactions and animations

### Fixed
- **Path Corrections** - Verified and corrected all file paths across 89+ HTML files:
  - Fixed Ubuntu page CSS path (3 → 4 levels)
  - Verified all Linux distribution page paths
  - Confirmed main.css import paths
  - Validated component script references
- **Comprehensive Path Audit (Dec 2025)** - Fixed broken navigation links across multiple files:
  - `js/app.js` - Corrected 5 quick link paths (Contact, Quickstart, Documentation, Community, Security)
  - `Guidelines/Security Policy/SecurityPolicy.html` - Fixed footer links to Community, Languages, Frameworks, and Databases pages
  - `Guidelines/Community/community.html` - Fixed FAQ and SecurityPolicy cross-references with correct relative paths
  - `docpages/Documentation/documentation.html` - Updated quick access links to FAQ and Contact with proper sibling directory navigation
  - All paths now correctly navigate folder structure with appropriate `../` depth levels
- **Gentoo Page** - Restored accidentally deleted `pages/Linux/Gentoo/gentoo.html`
- **CSS Lint Errors** - Cleaned up orphaned code from watermark updates

### Technical Details
- **Watermark Implementation**:
  - CSS3 animations: `watermarkSlide`, `shimmer`, `glow`
  - SVG shield icon with dynamic stroke colors
  - Brutalist design with bold borders and shadows
  - Z-index: 9999 (fixed positioning)
- **Linux Pages Architecture**:
  - Consistent structure across all distro pages
  - Shared styling with Space Grotesk font
  - Distro-specific color schemes
  - Information grid layout
  - Responsive breakpoints
- **File Organization**:
  - Total Linux pages: 20 (5 core + 15 distros)
  - Total codebase: 100+ HTML files
  - Path integrity: 100% verified

## [1.3.0] - 2025-01-XX

### Added
- Linux ecosystem section with core concepts
- Distribution families overview
- Learning paths for beginners and advanced users

### Changed
- Updated changelog page with version 1.3.0
- Enhanced Resources page with Linux section
- Updated tools page with Linux tools

---

## Version History

- **Unreleased** - Linux distributions, watermark component, path fixes
- **1.3.0** - Linux ecosystem foundation
- **1.2.x** - Previous features (search, themes, components)
- **1.1.x** - Initial frameworks and database pages
- **1.0.0** - Initial release

---

**Note**: For detailed commit history, see the [Git log](https://github.com/Srijan-XI/Install-and-Learn-DevLangs/commits/).

## Contributing

If you'd like to contribute to DevSphere, please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Update this changelog
5. Submit a pull request

---

**Created by [Srijan-XI](https://github.com/Srijan-XI)** 🛡️
