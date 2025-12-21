 const changelogMarkdown = `# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Swift programming language guide
- Kotlin programming language guide
- Interactive coding challenges
- Video tutorials for installation

## [1.3.0] - 2025-12-21

### Added
- **Linux Ecosystem** complete documentation section
- **Core Concepts** including Kernel Overview, Filesystem Hierarchy (FHS), and Permissions
- **Installation Guide** covering Bare Metal, Virtual Machines, and WSL
- **Command Cheat Sheet** for file operations, system management, and package managers
- **Distro Families** detailed pages for Arch, Debian, Red Hat, Gentoo, and Slackware
- **Distribution Guides** for specific distros:
  - Arch Family: Arch Linux, BlackArch, Garuda, RedArch
  - Debian Family: Ubuntu, Kali Linux, Linux Mint, ParrotSec
  - Red Hat Family: Fedora, RHEL, CentOS, Oracle Linux
  - Gentoo & Slackware guides
- **Resources** added Linux learning paths and roadmap links
- **Tools** updated with Linux-specific development tools

## [1.2.0] - 2025-11-13

### Added
- **Docker** comprehensive introduction guide covering:
  - Core concepts (Containers, Images, Dockerfile, Docker Engine)
  - Architecture and Docker vs VMs comparison
  - Installation instructions for Windows, macOS, and Linux
  - Complete command reference (containers, images, system)
  - Dockerfile examples and multi-stage builds
  - Docker Compose for multi-container applications
  - Volumes, networking, and data persistence
  - Best practices for security and optimization
  - Real-world examples (WordPress, Node.js apps)
- **JavaScript** complete practice question series (25 questions)
- **JavaScript** questions covering beginner to expert topics:
  - Q1-Q5: Beginner (Hello World, Variables, Operators, Control Flow, Loops)
  - Q6-Q12: Intermediate (Functions, Arrays, Objects, Destructuring, Promises, Async/Await, Classes)
  - Q13-Q20: Advanced (Modules, DOM, Events, Fetch API, Error Handling, Regex, JSON, Storage)
  - Q21-Q25: Expert (Design Patterns, Closures, Prototypes, Performance, Security)
- **Node.js** comprehensive introduction guide
- **Express.js** comprehensive introduction guide
- **Next.js** comprehensive introduction guide
- Updated README with JavaScript coverage (25 questions + 3 frameworks)
- Updated language count from 9 to 10
- Updated practice questions count from 91+ to 116+

### Changed
- Enhanced README.md with JavaScript framework guides
- Updated ROADMAP with JavaScript completion status

## [1.1.0] - 2025-11-13

### Added
- **Go (Golang)** complete installation guide with introduction, advantages, disadvantages
- **Go (Golang)** 10 practice questions (beginner to advanced)
- **TypeScript** comprehensive installation and usage guide
- **TypeScript** introduction with advantages, disadvantages, and use cases
- **TypeScript** 10 practice questions covering basic to advanced topics
- **SQL** main introduction and installation overview
- **MySQL** introduction and complete installation guide
- **PostgreSQL** introduction and complete installation guide  
- **MongoDB** introduction and complete installation guide
- **Redis** introduction and complete installation guide
- **DynamoDB** introduction and AWS-specific guide
- **SQL** 10 practice questions (beginner to advanced)
- Updated README with new language badges (91+ questions, 9 languages)
- Updated ROADMAP to reflect completed goals

### Changed
- Enhanced README.md with Go, TypeScript, and SQL coverage
- Updated language count from 6 to 9
- Updated practice questions count from 61+ to 91+
- Updated ROADMAP with v1.1 completion status

## [1.0.0] - 2025-11-13 (Initial Release)

### Added
- Initial repository structure
- Python installation guide and 21 practice questions
- Java installation guide and 10 practice questions
- C/C++ installation guide and 10+ practice questions
- PHP installation guide, configuration guide, and 10 practice questions
- R installation guide and 10 practice questions
- Rust installation guide and practice questions
- MIT License
- Basic README.md
- CONTRIBUTING.md with contribution guidelines
- CODE_OF_CONDUCT.md for community guidelines
- SECURITY.md for security policy
- FAQ.md with frequently asked questions
- RESOURCES.md with curated learning materials
- Issue templates for bugs, features, and questions
- Pull request template
- GitHub Actions workflow for validation
- .editorconfig for consistent coding style
- CONTRIBUTORS.md to acknowledge contributors

### Documentation
- Installation guides for all supported languages
- Platform-specific instructions (Windows, macOS, Linux)
- Usage examples and starter scripts
- Troubleshooting guides
`;

        function renderChangelog() {
            const container = document.getElementById('changelog-container');
            const lines = changelogMarkdown.split('\n');
            let currentVersionDiv = null;
            let currentCategoryDiv = null;
            let currentList = null;
            let inList = false;
            let isInitialHeader = true; // Tracks the first H1/H2 header

            lines.forEach(line => {
                line = line.trim();
                if (!line) return;

                // 1. Top-level headers (H1/H2) - New Version Block
                if (line.startsWith('## [')) {
                    // Create new version block
                    const versionMatch = line.match(/## \[(.*?)\]\s*(\s*-\s*(.*))?/);
                    if (versionMatch) {
                        currentVersionDiv = document.createElement('div');
                        currentVersionDiv.className = 'version-block';

                        const versionHeader = document.createElement('h2');
                        versionHeader.className = 'version-header';

                        const versionText = versionMatch[1];
                        const dateText = versionMatch[3] ? versionMatch[3].trim() : '';

                        versionHeader.innerHTML = `<span class="version-number">${versionText}</span> ${dateText ? `<span class="version-date">(${dateText})</span>` : ''}`;
                        currentVersionDiv.appendChild(versionHeader);
                        container.appendChild(currentVersionDiv);
                        currentCategoryDiv = null;
                        currentList = null;
                        inList = false;
                        isInitialHeader = false;
                    }
                }
                // 2. Category Headers (H3) - New Change Category
                else if (line.startsWith('### ')) {
                    const categoryName = line.substring(4).trim();
                    const categoryId = categoryName.toLowerCase().replace(/\s/g, '-');

                    if (currentVersionDiv) {
                        currentCategoryDiv = document.createElement('div');
                        currentCategoryDiv.className = 'category-section';
                        currentVersionDiv.appendChild(currentCategoryDiv);

                        const categoryHeader = document.createElement('h3');
                        categoryHeader.className = 'category-header';

                        let categoryBadgeClass = 'badge-default';

                        // Set colors for standard categories
                        if (categoryId === 'added') { categoryBadgeClass = 'badge-added'; }
                        else if (categoryId === 'changed') { categoryBadgeClass = 'badge-changed'; }
                        else if (categoryId === 'documentation') { categoryBadgeClass = 'badge-documentation'; }
                        else if (categoryId === 'planned') { categoryBadgeClass = 'badge-planned'; }
                        else if (categoryId === 'fixed') { categoryBadgeClass = 'badge-fixed'; }
                        else if (categoryId === 'removed') { categoryBadgeClass = 'badge-removed'; }

                        categoryHeader.innerHTML = `
                            <span class="category-badge ${categoryBadgeClass}">
                                ${categoryName}
                            </span>
                        `;
                        currentCategoryDiv.appendChild(categoryHeader);

                        currentList = document.createElement('ul');
                        currentList.className = 'changelog-ul';
                        currentCategoryDiv.appendChild(currentList);
                        inList = true;
                    }
                }
                // 3. List Items (Markdown lists starting with '-')
                else if (line.startsWith('- ') && currentList && inList) {
                    let content = line.substring(2).trim();

                    // Handle nested lists/descriptions (special logic for Docker/JS questions)
                    if (content.startsWith('Core concepts (') ||
                        content.startsWith('Architecture and ') ||
                        content.startsWith('Installation instructions for ') ||
                        content.startsWith('Complete command reference (') ||
                        content.startsWith('Dockerfile examples and ') ||
                        content.startsWith('Docker Compose for ') ||
                        content.startsWith('Volumes, networking, and ') ||
                        content.startsWith('Best practices for ') ||
                        content.startsWith('Real-world examples (') ||
                        content.startsWith('Q1-Q5: Beginner (') ||
                        content.startsWith('Q6-Q12: Intermediate (') ||
                        content.startsWith('Q13-Q20: Advanced (') ||
                        content.startsWith('Q21-Q25: Expert (')) {
                        // Append to the previous list item's content as a sub-point
                        if (currentList.lastElementChild) {
                            let subList = currentList.lastElementChild.querySelector('.sub-list');
                            if (!subList) {
                                subList = document.createElement('ul');
                                subList.className = 'list-disc text-sm text-gray-600 ml-6 mt-1 space-y-1';
                                subList.classList.add('sub-list');
                                currentList.lastElementChild.appendChild(subList);
                            }
                            const subItem = document.createElement('li');
                            subItem.innerHTML = content.replace(/`/g, '');
                            subList.appendChild(subItem);
                        }
                    } else {
                        // Standard list item
                        const listItem = document.createElement('li');
                        // Extract language/feature bold text for the main change
                        const matchFeature = content.match(/^\*\*(.*?)\*\*:\s*(.*)/);
                        if (matchFeature) {
                            listItem.innerHTML = `
                                <div>
                                    <strong>${matchFeature[1]}</strong>: ${matchFeature[2].replace(/`/g, '')}
                                </div>
                            `;
                        } else if (content.startsWith('Updated ')) {
                            // Handle updated counts/info
                            listItem.innerHTML = `<div style="color: var(--muted); font-style: italic;">${content.replace(/`/g, '')}</div>`;
                        }
                        else {
                            listItem.innerHTML = `<div>${content.replace(/`/g, '')}</div>`;
                        }
                        currentList.appendChild(listItem);
                    }
                }
                // 4. Regular text (Introduction, Keep a Changelog link)
                else if (isInitialHeader || !currentVersionDiv) {
                    if (line.startsWith('# Changelog')) {
                        // Skip main H1
                    } else {
                        const p = document.createElement('p');
                        p.className = 'intro-text';
                        // Replace Markdown links with HTML links
                        p.innerHTML = line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
                        container.appendChild(p);
                    }
                }
            });
        }

        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        const currentTheme = localStorage.getItem('il-devlangs-theme') || 'dark';
        if (currentTheme === 'light') {
            body.classList.add('light');
            themeToggle.textContent = '🌙';
        } else {
            themeToggle.textContent = '☀️';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light');
            const theme = body.classList.contains('light') ? 'light' : 'dark';
            localStorage.setItem('il-devlangs-theme', theme);
            themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
        });

        document.addEventListener('DOMContentLoaded', renderChangelog);