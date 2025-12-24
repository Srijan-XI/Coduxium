# 🌐 Coduxium XI — Static Site Repository Info

A lightweight, modern, and feature-rich web interface to explore the **Coduxium XI** repository. This static site provides a comprehensive guide to languages, frameworks, databases, and tools with a premium user experience.

## ✨ Features

### 🎨 UI & UX
- **Dark/Light Theme**: Smooth toggle with persistent preference (LocalStorage).
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile.
- **Animations**: Smooth transitions, hover effects, and page animations.
- **Scroll-to-Top**: Floating button for easy navigation on long pages.
- **Breadcrumb Navigation**: Automatic path detection with smart emoji icons.

### 🔍 Search & Navigation
- **Real-time Search**: Instant search across 100+ technologies including languages, frameworks, databases, DevOps tools, development tools, AI/ML libraries, security tools, and Linux distributions
- **Keyboard Navigation**: Full keyboard support for search results
- **Filter Chips**: Quick filtering by category (Languages, Frameworks, Databases, Linux, DevOps, Testing)
- **Direct Links**: Quick access to install guides, documentation, and intros

### 💻 Developer Tools
- **Syntax Highlighting**: Supports 13+ languages (Python, JS, Java, C++, etc.) via Highlight.js.
- **Code Themes**: 6 beautiful themes (VS Dark, Monokai, GitHub, Dracula, Nord, Atom One Dark).
- **Copy-to-Clipboard**: One-click copy for all code blocks.
- **Icon Library**: 70+ technology icons with emojis and colors.

### 📊 Live Stats
- **Dashboard**: Overview of available languages, frameworks, databases, DevOps tools, development tools, testing frameworks, AI/ML libraries, game engines, security tools, and Linux distros.
- **20 Programming Languages**: Python, Java, JavaScript, TypeScript, Rust, Go, C/C++, C#, PHP, Ruby, Swift, Kotlin, R, SQL, KQL, Bash, Scala, Dart, MATLAB, Assembly
- **25 Frameworks**: React, Vue, Angular, Node.js, Express, Next.js, Django, Flask, FastAPI, Laravel, Spring Boot, and more
- **11 Databases**: MySQL, PostgreSQL, MongoDB, Redis, DynamoDB, MariaDB, SQLite, Neo4j, IBM Db2, Snowflake, BigQuery
- **9 DevOps Tools**: Docker, Git, GitHub, GitLab, BitBucket, Jenkins, Kubernetes, Terraform, Ansible
- **8 Development Tools**: Postman, Vite, Vitest, YAML, TOML, JSON, XML, CSV
- **8 AI/ML Libraries**: TensorFlow, PyTorch, Scikit-learn, CUDA, HuggingFace, LangChain, Apache Spark, Apache Kafka
- **6 Security Tools**: AquaSecurity, SonarQube, Snyk, HashiCorp Vault, Metasploit, Security Tools
- **24 Linux Distributions**: Comprehensive guides for Arch, Debian, Red Hat families, and more

### 🎨 Design Elements
- **Brutalist Watermark**: Interactive shield-icon watermark on all pages.
- **Glassmorphism Effects**: Modern frosted glass UI elements.
- **Premium Animations**: Smooth transitions, hover effects, and micro-interactions.

## 🚀 How to Run Locally

### Option 1: Python HTTP Server
Run this command in the project root:
```powershell
python -m http.server 5500
```
Open: `http://localhost:5500`

### Option 2: Node.js `serve`
Run this command in the project root:
```powershell
npx serve -l 5500
```
Open: `http://localhost:5500`

### Option 3: Open Directly
Simply double-click `index.html` to open in your browser. Note: Some features like relative links or local storage might behave differently depending on browser security settings for local files.

## 📂 Project Structure

- `index.html` — Main entry point.
- `main.css` — Global styles and layout.
- `app.js` — Core logic for rendering and state management.
- `components/` — Modular components:
  - `breadcrumb/` — Navigation path logic.
  - `search/` — Search engine and UI.
  - `theme-switch/` — Dark/light mode toggle.
  - `scroll-to-top/` — Scroll behavior.
  - `code-highlighter/` — Syntax highlighting and copy functionality.
  - `icons/` — Icon library and assets.
  - `animations.css` — Global animation definitions.
- `watermark/` — Brutalist watermark component:
  - `watermark.css` — Watermark styling.
  - `watermark.js` — Auto-inject watermark on all pages.
- `pages/` — Content pages for each technology:
  - `Languages/` — Programming languages guides
  - `Framework/` — Web frameworks documentation
  - `Database/` — Database systems info
  - `DevelopmentTools/` — Development tools (Postman, Vite, Vitest, YAML, TOML, JSON, XML, CSV)
  - `Testing/` — Testing frameworks
  - `Linux/` — Linux distributions and guides:
    - Core pages: `linux.html`, `kernel.html`, `filesystem.html`, `install.html`, `commands.html`
    - `Arch/` — Arch Linux, BlackArch, Garuda, RedArch, SteamOS
    - `Debian/` — Ubuntu, Kali, Linux Mint, ParrotSec, Pop!_OS, Zorin, MX Linux, Tails
    - `RedHat/` — Fedora, RHEL, CentOS, Oracle Linux, Rocky Linux
    - `Gentoo/` — Gentoo Linux, ChromeOS Flex
    - `Slackware/` — Slackware Linux
    - `Alpine/` — Alpine Linux
    - `Qubes/` — Qubes OS
- `pagesw/` — Extended content:
  - `DevOps-I&A/` — DevOps & Infrastructure/Automation tools
  - `DevSecOps&SecurityTools/` — Security and DevSecOps tools
  - `DE-AI-ML/` — Data Engineering, AI, and ML libraries
  - `GameEngines/` — Game development engines
  - `CloudS/` — Cloud services (AWS, Azure, GCP, DigitalOcean)
  - `OS/` — Operating Systems (Windows, macOS, iOS, Android)
- `pagex/` — Utility pages:
  - `Resources/` — Learning resources and tutorials
  - `tools/` — Developer tools overview
  - `notes/` — Development notes
  - `projects/` — Project showcases
- `docpages/` — General documentation pages.

## 🛠️ Technologies

- **Core**: Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Styling**: CSS Grid, Flexbox, CSS Variables.
- **Fonts**: Inter (Google Fonts).
- **External Libs**: Highlight.js (CDN) for syntax highlighting.
- **Storage**: LocalStorage for user preferences.

## ⚙️ Configuration

To enable GitHub specific links (Download ZIP, Repo, Issues), ensure the `repoConfig` is set in `index.html`:

```html
<script>
  window.repoConfig = {
    repoUrl: "https://github.com/Srijan-XI/Install-and-Learn-DevLangs",
    zipUrl: "https://github.com/Srijan-XI/Install-and-Learn-DevLangs/archive/refs/heads/main.zip"
  };
</script>
```

---

**Enjoy exploring Coduxium XI!** 🚀
