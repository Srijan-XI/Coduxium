(() => {
	// --- Config (optional override via window.repoConfig) ---
	const cfg = Object.assign({
		repoUrl: null,
		zipUrl: null,
	}, window.repoConfig || {});

	// --- Data model ---
	const languages = [
		{ type: 'language', name: 'Python', folder: 'Languages/Python', intro: 'Languages/Python/Python.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/PYTHON/Python%20questions' },
		{ type: 'language', name: 'Java', folder: 'Languages/Java', intro: 'Languages/Java/Java.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/JAVA/Question' },
		{ type: 'language', name: 'JavaScript', folder: 'Languages/Js', intro: 'Languages/Js/Js.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/JavaScript/questions' },
		{ type: 'language', name: 'TypeScript', folder: 'Languages/Ts', intro: 'Languages/Ts/Ts.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/TypeScript/questions' },
		{ type: 'language', name: 'C & C++', folder: 'Languages/C&C++', intro: 'Languages/C&C++/C&C++.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/C%20%26%20C%2B%2B/questions%20of%20c%20%26%20cpp' },
		{ type: 'language', name: 'C#', folder: 'Languages/CSharp', intro: 'Languages/CSharp/CSharp.html' },
		{ type: 'language', name: 'Rust', folder: 'Languages/Rust', intro: 'Languages/Rust/Rust.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/RUST/Qustions' },
		{ type: 'language', name: 'Go', folder: 'Languages/Golang', intro: 'Languages/Golang/Golang.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/Golang/questions' },
		{ type: 'language', name: 'PHP', folder: 'Languages/php', intro: 'Languages/php/php.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/PHP/Question' },
		{ type: 'language', name: 'R', folder: 'Languages/R', intro: 'Languages/R/R.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/R/R%20programming%20questions' },
		{ type: 'language', name: 'SQL', folder: 'Languages/SQL', intro: 'Languages/SQL/SQL.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/SQL/questions' },
		{ type: 'language', name: 'KQL', folder: 'Languages/Kql', intro: 'Languages/Kql/Kql.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/Kql/Questions' },
		{ type: 'language', name: 'Bash', folder: 'Languages/Bash', intro: 'Languages/Bash/Bash.html', questions: 'https://github.com/Srijan-XI/RunexisForge/tree/main/Bash/Questions' },
		{ type: 'language', name: 'Swift', folder: 'Languages/swift', intro: 'Languages/swift/swift.html' },
		{ type: 'language', name: 'Ruby', folder: 'Languages/ruby', intro: 'Languages/ruby/ruby.html' },
		{ type: 'language', name: 'Kotlin', folder: 'Languages/kotlin', intro: 'Languages/kotlin/kotlin.html' },
		{ type: 'language', name: 'MATLAB', folder: 'Languages/MATLAB', intro: 'Languages/MATLAB/MATLAB.html' },
		{ type: 'language', name: 'Dart', folder: 'Languages/Dart', intro: 'Languages/Dart/Dart.html' },
		{ type: 'language', name: 'Assembly', folder: 'Languages/Assembly', intro: 'Languages/Assembly/Assembly.html' },
		{ type: 'language', name: 'Scala', folder: 'Languages/Scala', intro: 'Languages/Scala/Scala.html' },
		{ type: 'language', name: 'Zig', folder: 'Languages/Zig', intro: 'Languages/Zig/Zig.html' },
		{ type: 'language', name: 'Lua', folder: 'Languages/Lua', intro: 'Languages/Lua/Lua.html' },
		{ type: 'language', name: 'Haskell', folder: 'Languages/Haskell', intro: 'Languages/Haskell/Haskell.html' },
		{ type: 'language', name: 'Julia', folder: 'Languages/Julia', intro: 'Languages/Julia/Julia.html' }
	];

	const frameworks = [
		{ type: 'framework', name: 'Node.js', intro: 'Framework/BFW/NodeJs/NodeJs.html', folder: 'Framework/BFW/NodeJs' },
		{ type: 'framework', name: 'Express.js', intro: 'Framework/BFW/ExpressJs/ExpressJs.html', folder: 'Framework/BFW/ExpressJs' },
		{ type: 'framework', name: 'NestJS', intro: 'Framework/BFW/NestJs/NestJs.html', folder: 'Framework/BFW/NestJs' },
		{ type: 'framework', name: 'Fastify', intro: 'Framework/BFW/Fastify/Fastify.html', folder: 'Framework/BFW/Fastify' },
		{ type: 'framework', name: 'Koa', intro: 'Framework/BFW/Koa/Koa.html', folder: 'Framework/BFW/Koa' },
		{ type: 'framework', name: 'hapi', intro: 'Framework/BFW/Hapi/Hapi.html', folder: 'Framework/BFW/Hapi' },
		{ type: 'framework', name: 'AdonisJS', intro: 'Framework/BFW/AdonisJs/AdonisJs.html', folder: 'Framework/BFW/AdonisJs' },
		{ type: 'framework', name: 'Sails.js', intro: 'Framework/BFW/SailsJs/SailsJs.html', folder: 'Framework/BFW/SailsJs' },
		{ type: 'framework', name: 'Hono', intro: 'Framework/BFW/Hono/Hono.html', folder: 'Framework/BFW/Hono' },
		{ type: 'framework', name: 'Elysia', intro: 'Framework/BFW/Elysia/Elysia.html', folder: 'Framework/BFW/Elysia' },
		{ type: 'framework', name: 'Next.js', intro: 'Framework/FFW/NextJs/NextJs.html', folder: 'Framework/FFW/NextJs' },
		{ type: 'framework', name: 'Nuxt.js', intro: 'Framework/FFW/NuxtJs/NuxtJs.html', folder: 'Framework/FFW/NuxtJs' },
		{ type: 'framework', name: 'Remix', intro: 'Framework/FFW/Remix/Remix.html', folder: 'Framework/FFW/Remix' },
		{ type: 'framework', name: 'Astro', intro: 'Framework/FFW/Astro/Astro.html', folder: 'Framework/FFW/Astro' },
		{ type: 'framework', name: 'Django', intro: 'Framework/BFW/Django/Django.html', folder: 'Framework/BFW/Django' },
		{ type: 'framework', name: 'Flask', intro: 'Framework/BFW/Flask/Flask.html', folder: 'Framework/BFW/Flask' },
		{ type: 'framework', name: 'FastAPI', intro: 'Framework/BFW/FastAPI/FastAPI.html', folder: 'Framework/BFW/FastAPI' },
		{ type: 'framework', name: 'Laravel', intro: 'Framework/BFW/Laravel/Laravel.html', folder: 'Framework/BFW/Laravel' },
		{ type: 'framework', name: 'Spring Boot', intro: 'Framework/BFW/Spring Boot/Spring Boot.html', folder: 'Framework/BFW/Spring Boot' },
		{ type: 'framework', name: 'Gin', intro: 'Framework/BFW/Gin/Gin.html', folder: 'Framework/BFW/Gin' },
		{ type: 'framework', name: 'React', intro: 'Framework/FFW/react/react.html', folder: 'Framework/FFW/react' },
		{ type: 'framework', name: 'Vue', intro: 'Framework/FFW/vue/vue.html', folder: 'Framework/FFW/vue' },
		{ type: 'framework', name: 'Angular', intro: 'Framework/FFW/angular/angular.html', folder: 'Framework/FFW/angular' },
		{ type: 'framework', name: 'Svelte', intro: 'Framework/FFW/svelte/svelte.html', folder: 'Framework/FFW/svelte' },
		{ type: 'framework', name: 'Solid.js', intro: 'Framework/FFW/SolidJs/SolidJs.html', folder: 'Framework/FFW/SolidJs' },
		{ type: 'framework', name: 'Tauri', intro: 'Framework/AFW/tauri/tauri.html', folder: 'Framework/AFW/tauri' },
		{ type: 'framework', name: 'Electron', intro: 'Framework/AFW/Electron/Electron.html', folder: 'Framework/AFW/Electron' },
		{ type: 'framework', name: 'Streamlit', intro: 'Framework/FFW/streamlit/streamlit.html', folder: 'Framework/FFW/streamlit' },
		{ type: 'framework', name: 'Ruby on Rails', intro: 'Framework/BFW/ruby-on-rails/ruby-on-rails.html', folder: 'Framework/BFW/ruby-on-rails' },
		{ type: 'framework', name: 'ASP.NET Core', intro: 'Framework/BFW/aspnet-core/aspnet-core.html', folder: 'Framework/BFW/aspnet-core' },
		{ type: 'framework', name: 'Qwik', intro: 'Framework/FFW/Qwik/Qwik.html', folder: 'Framework/FFW/Qwik' },
		{ type: 'framework', name: 'htmx', intro: 'Framework/FFW/htmx/htmx.html', folder: 'Framework/FFW/htmx' },
		{ type: 'framework', name: 'Alpine.js', intro: 'Framework/FFW/AlpineJs/AlpineJs.html', folder: 'Framework/FFW/AlpineJs' },
		{ type: 'framework', name: 'Stencil', intro: 'Framework/FFW/Stencil/Stencil.html', folder: 'Framework/FFW/Stencil' },
		{ type: 'framework', name: 'Web Components', intro: 'Framework/FFW/WebComponents/WebComponents.html', folder: 'Framework/FFW/WebComponents' }
	];

	const databases = [
		{ type: 'database', name: 'DynamoDB', intro: 'Database/DynamoDB/DynamoDB.html', folder: 'Database/DynamoDB' },
		{ type: 'database', name: 'MongoDB', intro: 'Database/MongoDB/MongoDB.html', folder: 'Database/MongoDB' },
		{ type: 'database', name: 'MySQL', intro: 'Database/MySQL/MySQL.html', folder: 'Database/MySQL' },
		{ type: 'database', name: 'PostgreSQL', intro: 'Database/PostgreSQL/PostgreSQL.html', folder: 'Database/PostgreSQL' },
		{ type: 'database', name: 'Redis', intro: 'Database/Redis/Redis.html', folder: 'Database/Redis' },
		{ type: 'database', name: 'MariaDB', intro: 'Database/MariaDB/MariaDB.html', folder: 'Database/MariaDB' },
		{ type: 'database', name: 'SQLite', intro: 'Database/SQLite/SQLite.html', folder: 'Database/SQLite' },
		{ type: 'database', name: 'Neo4j', intro: 'Database/Neo4j/Neo4j.html', folder: 'Database/Neo4j' },
		{ type: 'database', name: 'IBM Db2', intro: 'Database/IBMDb2/IBMDb2.html', folder: 'Database/IBMDb2' },
		{ type: 'database', name: 'Snowflake', intro: 'Database/Snowflake/Snowflake.html', folder: 'Database/Snowflake' },
		{ type: 'database', name: 'BigQuery', intro: 'Database/BigQuery/BigQuery.html', folder: 'Database/BigQuery' }
	];

	const tools = [
		{ type: 'tool', name: 'Docker', intro: 'DevOps-I&A/Docker/Docker.html', folder: 'DevOps-I&A/Docker' },
		{ type: 'tool', name: 'GitHub', intro: 'DevOps-I&A/GitHub/GitHub.html', folder: 'DevOps-I&A/GitHub' },
		{ type: 'tool', name: 'GitLab', intro: 'DevOps-I&A/GitLab/GitLab.html', folder: 'DevOps-I&A/GitLab' },
		{ type: 'tool', name: 'BitBucket', intro: 'DevOps-I&A/BitBucket/BitBucket.html', folder: 'DevOps-I&A/BitBucket' },
		{ type: 'tool', name: 'Jenkins', intro: 'DevOps-I&A/Jenkins/Jenkins.html', folder: 'DevOps-I&A/Jenkins' },
		{ type: 'tool', name: 'Git', intro: 'DevOps-I&A/Git/Git.html', folder: 'DevOps-I&A/Git' },
		{ type: 'tool', name: 'Kubernetes', intro: 'DevOps-I&A/kubernetes/kubernetes.html', folder: 'DevOps-I&A/kubernetes' },
		{ type: 'tool', name: 'Terraform', intro: 'DevOps-I&A/terraform/terraform.html', folder: 'DevOps-I&A/terraform' },
		{ type: 'tool', name: 'Ansible', intro: 'DevOps-I&A/ansible/ansible.html', folder: 'DevOps-I&A/ansible' }
	];

	const developmentTools = [
		{ type: 'dev-tool', name: 'Postman', intro: 'DevelopmentTools/Postman/Postman.html', folder: 'DevelopmentTools/Postman' },
		{ type: 'dev-tool', name: 'Vite', intro: 'DevelopmentTools/Vite/Vite.html', folder: 'DevelopmentTools/Vite' },
		{ type: 'dev-tool', name: 'Vitest', intro: 'DevelopmentTools/Vitest/Vitest.html', folder: 'DevelopmentTools/Vitest' },
		{ type: 'dev-tool', name: 'YAML', intro: 'DevelopmentTools/YAML/YAML.html', folder: 'DevelopmentTools/YAML' },
		{ type: 'dev-tool', name: 'TOML', intro: 'DevelopmentTools/TOML/TOML.html', folder: 'DevelopmentTools/TOML' },
		{ type: 'dev-tool', name: 'JSON', intro: 'DevelopmentTools/JSON/JSON.html', folder: 'DevelopmentTools/JSON' },
		{ type: 'dev-tool', name: 'XML', intro: 'DevelopmentTools/XML/XML.html', folder: 'DevelopmentTools/XML' },
		{ type: 'dev-tool', name: 'CSV', intro: 'DevelopmentTools/CSV/CSV.html', folder: 'DevelopmentTools/CSV' }
	];

	const testingTools = [
		{ type: 'testing', name: 'Jest', intro: 'Testing/Jest/Jest.html', folder: 'Testing/Jest' },
		{ type: 'testing', name: 'JTest', intro: 'Testing/JTest/JTest.html', folder: 'Testing/JTest' }
	];

	const aiLibraries = [
		{ type: 'ai-library', name: 'CUDA', intro: 'DE-AI-ML/cuda/cuda.html', folder: 'DE-AI-ML/cuda' },
		{ type: 'ai-library', name: 'PyTorch', intro: 'DE-AI-ML/pytorch/pytorch.html', folder: 'DE-AI-ML/pytorch' },
		{ type: 'ai-library', name: 'TensorFlow', intro: 'DE-AI-ML/tensorflow/tensorflow.html', folder: 'DE-AI-ML/tensorflow' },
		{ type: 'ai-library', name: 'Scikit-learn', intro: 'DE-AI-ML/scikit-learn/scikit-learn.html', folder: 'DE-AI-ML/scikit-learn' },
		{ type: 'ai-library', name: 'Hugging Face', intro: 'DE-AI-ML/huggingface/huggingface.html', folder: 'DE-AI-ML/huggingface' },
		{ type: 'ai-library', name: 'LangChain', intro: 'DE-AI-ML/langchain/langchain.html', folder: 'DE-AI-ML/langchain' },
		{ type: 'ai-library', name: 'Apache Spark', intro: 'DE-AI-ML/apache-spark/apache-spark.html', folder: 'DE-AI-ML/apache-spark' },
		{ type: 'ai-library', name: 'Apache Kafka', intro: 'DE-AI-ML/apache-kafka/apache-kafka.html', folder: 'DE-AI-ML/apache-kafka' }
	];

	const dataProcessing = [
		{ type: 'data-processing', name: 'NumPy', intro: 'DE-AI-ML/numpy/numpy.html', folder: 'DE-AI-ML/numpy' },
		{ type: 'data-processing', name: 'Pandas', intro: 'DE-AI-ML/pandas/pandas.html', folder: 'DE-AI-ML/pandas' }
	];

	const gameEngines = [
		{ type: 'game-engine', name: 'Godot', intro: 'GameEngines/godot/godot.html', folder: 'GameEngines/godot' },
		{ type: 'game-engine', name: 'Unity', intro: 'GameEngines/unity/unity.html', folder: 'GameEngines/unity' },
		{ type: 'game-engine', name: 'Unreal Engine', intro: 'GameEngines/unreal-engine/unreal-engine.html', folder: 'GameEngines/unreal-engine' }
	];

	const securityTools = [
		{ type: 'security', name: 'AquaSecurity', intro: 'DevSecOps&SecurityTools/AquaSecurity/AquaSecurity.html', folder: 'DevSecOps&SecurityTools/AquaSecurity' },
		{ type: 'security', name: 'SonarQube', intro: 'DevSecOps&SecurityTools/SonarQube/SonarQube.html', folder: 'DevSecOps&SecurityTools/SonarQube' },
		{ type: 'security', name: 'Snyk', intro: 'DevSecOps&SecurityTools/Snuk/Snyk.html', folder: 'DevSecOps&SecurityTools/Snuk' },
		{ type: 'security', name: 'HashiCorp Vault', intro: 'DevSecOps&SecurityTools/HashiCorpVault/HashiCorpVault.html', folder: 'DevSecOps&SecurityTools/HashiCorpVault' },
		{ type: 'security', name: 'Metasploit', intro: 'DevSecOps&SecurityTools/metasploit/metasploit.html', folder: 'DevSecOps&SecurityTools/metasploit' },
		{ type: 'security', name: 'Security Tools', intro: 'DevSecOps&SecurityTools/security-tools/security-tools.html', folder: 'DevSecOps&SecurityTools/security-tools' }
	];

	const linuxDistros = [
		{ type: 'linux', name: 'Linux Overview', intro: 'Linux/linux.html', folder: 'Linux' },
		{ type: 'linux', name: 'Arch Linux', intro: 'Linux/Arch/arch.html', folder: 'Linux/Arch' },
		{ type: 'linux', name: 'BlackArch', intro: 'Linux/Arch/BlackArch/blackarch.html', folder: 'Linux/Arch/BlackArch' },
		{ type: 'linux', name: 'Garuda Linux', intro: 'Linux/Arch/Garuda/garuda.html', folder: 'Linux/Arch/Garuda' },
		{ type: 'linux', name: 'RedArch', intro: 'Linux/Arch/RedArch/redarch.html', folder: 'Linux/Arch/RedArch' },
		{ type: 'linux', name: 'SteamOS', intro: 'Linux/Arch/SteamOS/SteamOS.html', folder: 'Linux/Arch/SteamOS' },
		{ type: 'linux', name: 'Ubuntu', intro: 'Linux/Debian/Ubuntu/ubuntu.html', folder: 'Linux/Debian/Ubuntu' },
		{ type: 'linux', name: 'Kali Linux', intro: 'Linux/Debian/Kali/kali.html', folder: 'Linux/Debian/Kali' },
		{ type: 'linux', name: 'Linux Mint', intro: 'Linux/Debian/Mint/mint.html', folder: 'Linux/Debian/Mint' },
		{ type: 'linux', name: 'ParrotSec', intro: 'Linux/Debian/ParrotSec/parrotsec.html', folder: 'Linux/Debian/ParrotSec' },
		{ type: 'linux', name: 'Pop!_OS', intro: 'Linux/Debian/PopOS/PopOS.html', folder: 'Linux/Debian/PopOS' },
		{ type: 'linux', name: 'Zorin OS', intro: 'Linux/Debian/Zorin/Zorin.html', folder: 'Linux/Debian/Zorin' },
		{ type: 'linux', name: 'MX Linux', intro: 'Linux/Debian/MXLinux/MXLinux.html', folder: 'Linux/Debian/MXLinux' },
		{ type: 'linux', name: 'Tails', intro: 'Linux/Debian/Tails/Tails.html', folder: 'Linux/Debian/Tails' },
		{ type: 'linux', name: 'Fedora', intro: 'Linux/RedHat/Fedora/fedora.html', folder: 'Linux/RedHat/Fedora' },
		{ type: 'linux', name: 'RHEL', intro: 'Linux/RedHat/RHEL/rhel.html', folder: 'Linux/RedHat/RHEL' },
		{ type: 'linux', name: 'CentOS', intro: 'Linux/RedHat/CentOS/centos.html', folder: 'Linux/RedHat/CentOS' },
		{ type: 'linux', name: 'Oracle Linux', intro: 'Linux/RedHat/Oracle/oracle.html', folder: 'Linux/RedHat/Oracle' },
		{ type: 'linux', name: 'Rocky Linux', intro: 'Linux/RedHat/RockyLinux/RockyLinux.html', folder: 'Linux/RedHat/RockyLinux' },
		{ type: 'linux', name: 'Gentoo', intro: 'Linux/Gentoo/gentoo.html', folder: 'Linux/Gentoo' },
		{ type: 'linux', name: 'ChromeOS Flex', intro: 'Linux/Gentoo/ChromeOSFlex/ChromeOSFlex.html', folder: 'Linux/Gentoo/ChromeOSFlex' },
		{ type: 'linux', name: 'Slackware', intro: 'Linux/Slackware/slackware.html', folder: 'Linux/Slackware' },
		{ type: 'linux', name: 'Alpine Linux', intro: 'Linux/Alpine/Alpine.html', folder: 'Linux/Alpine' },
		{ type: 'linux', name: 'Qubes OS', intro: 'Linux/Qubes/Qubes.html', folder: 'Linux/Qubes' }
	];

	const quickLinks = [
		{ label: 'Contact', url: 'docpages/Contact/contact.html' },
		{ label: 'About', url: 'docpages/about/about.html' },
		{ label: 'Quickstart', url: 'docpages/QuickStart/quickstart.html' },
		{ label: 'Documentation', url: 'docpages/Documentation/documentation.html' },
		{ label: 'Community', url: 'Guidelines/Community/community.html' },
		{ label: 'Resources', url: 'pagex/Resources/Resources.html' },
		{ label: 'FAQ', url: 'docpages/FAQ/FAQ.html' },
		{ label: 'Changelog', url: 'docpages/changelog/changelog.html' },
		{ label: 'Security', url: 'Guidelines/Security Policy/SecurityPolicy.html' },
		{ label: 'License', url: 'https://github.com/Srijan-XI/RunexisForge/blob/main/LICENSE' },
		{ label: 'Notes', url: 'pagex/notes/notes.html' },
		{ label: 'Projects', url: 'pagex/projects/projects.html' },
		{ label: 'Tools', url: 'pagex/tools/tools.html' },
	];

	const allItems = [...languages, ...frameworks, ...databases, ...tools, ...developmentTools, ...testingTools, ...linuxDistros, ...aiLibraries, ...dataProcessing, ...gameEngines, ...securityTools];

	// Expose catalog for other scripts (e.g., components/search/search.js)
	if (typeof window !== 'undefined') {
		if (!window.languages) window.languages = languages;
		if (!window.frameworks) window.frameworks = frameworks;
		if (!window.databases) window.databases = databases;
		if (!window.tools) window.tools = tools;
		if (!window.developmentTools) window.developmentTools = developmentTools;
		if (!window.testingTools) window.testingTools = testingTools;
		if (!window.linuxDistros) window.linuxDistros = linuxDistros;
		if (!window.aiLibraries) window.aiLibraries = aiLibraries;
		if (!window.dataProcessing) window.dataProcessing = dataProcessing;
		if (!window.gameEngines) window.gameEngines = gameEngines;
		if (!window.securityTools) window.securityTools = securityTools;
	}

	// --- Utilities ---
	const byId = (id) => document.getElementById(id);
	const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
	const el = (tag, className, attrs = {}) => {
		const e = document.createElement(tag);
		if (className) e.className = className;
		for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
		return e;
	};
	const encodePath = (parts) => parts.map(encodeURIComponent).join('/');
	const rel = (parts) => `../${encodePath(parts)}`;
	const nowFmt = () => new Date().toLocaleString();

	// --- Rendering ---
	function renderStats() {
		const s = byId('stats');
		s.innerHTML = '';
		const stats = [
			{ label: 'Languages', num: String(languages.length) },
			{ label: 'Frameworks', num: String(frameworks.length) },
			{ label: 'Databases', num: String(databases.length) },
			{ label: 'DevOps Tools', num: String(tools.length) },
			{ label: 'Dev Tools', num: String(developmentTools.length) },
			{ label: 'Testing', num: String(testingTools.length) },
			{ label: 'Linux Distros', num: String(linuxDistros.length) },
			{ label: 'AI/ML Libraries', num: String(aiLibraries.length) },
			{ label: 'Data Processing', num: String(dataProcessing.length) },
			{ label: 'Game Engines', num: String(gameEngines.length) },
			{ label: 'Security Tools', num: String(securityTools.length) },
		];
		for (const st of stats) {
			const card = el('div', 'stat');
			const num = el('div', 'num'); num.textContent = st.num;
			const lab = el('div', 'label'); lab.textContent = st.label;
			card.append(num, lab);
			s.append(card);
		}
	}

	function typeBadge(t) {
		const b = el('span', 'badge');
		b.textContent = t.charAt(0).toUpperCase() + t.slice(1);
		return b;
	}

	function cardFor(item) {
		// Use enhanced rendering if available
		if (typeof renderEnhancedCards === 'function') {
			return null; // Enhanced rendering handles this
		}

		// Fallback to original card rendering
		const c = el('div', 'card');
		c.dataset.type = item.type;

		const title = el('div', 'title');
		title.textContent = item.name;
		const meta = el('div', 'meta');
		meta.append(typeBadge(item.type));

		const links = el('div', 'links');

		// Language-specific
		if (item.type === 'language') {
			if (item.intro) {
				const installA = el('a', null, { href: `pages/${item.intro}`, target: '_blank', rel: 'noopener' });
				installA.textContent = 'Learn';
				links.append(installA);
			}
			if (item.questions) {
				const qA = el('a', null, { href: item.questions, target: '_blank', rel: 'noopener' });
				qA.textContent = 'Questions';
				links.append(qA);
			}
		}

		// Pages content hosted under /pages
		if ((item.type === 'framework' || item.type === 'database' || item.type === 'dev-tool' || item.type === 'testing' || item.type === 'linux') && item.intro) {
			const iA = el('a', null, { href: `pages/${item.intro}`, target: '_blank', rel: 'noopener' });
			iA.textContent = 'Learn';
			links.append(iA);
		}

		// Pages content hosted under /pagesw (DevOps tools)
		if (item.type === 'tool' && item.intro) {
			const iA = el('a', null, { href: `pagesw/${item.intro}`, target: '_blank', rel: 'noopener' });
			iA.textContent = 'Learn';
			links.append(iA);
		}

		// Pages content hosted under /pagesw
		if ((item.type === 'ai-library' || item.type === 'data-processing' || item.type === 'game-engine' || item.type === 'security') && item.intro) {
			const iA = el('a', null, { href: `pagesw/${item.intro}`, target: '_blank', rel: 'noopener' });
			iA.textContent = 'Learn';
			links.append(iA);
		}

		// Extra pages hosted under /pagex
		if (item.type === 'pagex' && item.url) {
			const iA = el('a', null, { href: item.url, target: '_blank', rel: 'noopener' });
			iA.textContent = 'Open';
			links.append(iA);
		}

		c.append(title, meta, links);
		return c;
	}

	function renderCards(list = allItems) {
		// Use enhanced rendering if available (from index.html)
		if (typeof renderEnhancedCards === 'function') {
			renderEnhancedCards(list);
			return;
		}

		// Fallback to original rendering
		const wrap = byId('cards');
		wrap.innerHTML = '';
		list.forEach(item => {
			const card = cardFor(item);
			if (card) wrap.append(card);
		});
	}

	function renderQuickLinks() {
		const wrap = byId('links');
		wrap.innerHTML = '';
		quickLinks.forEach(q => {
			const href = q.url || rel(q.path);
			const a = el('a', null, { href: href, target: '_blank', rel: 'noopener' });
			a.textContent = q.label;
			wrap.append(a);
		});
	}	// --- Interactions ---
	function setupSearchAndFilters() {
		const search = byId('search');
		// Support both the legacy ".chip" and the modern index ".filter-chip".
		const chips = $$('.filter-chip').length ? $$('.filter-chip') : $$('.chip');
		let filter = 'all';
		let query = '';

		const apply = () => {
			const q = query.trim().toLowerCase();
			const list = allItems.filter(it => {
				const matchesType = filter === 'all' ? true : it.type === filter;
				const matchesQuery = q ? it.name.toLowerCase().includes(q) : true;
				return matchesType && matchesQuery;
			});
			renderCards(list);
		};

		if (search) {
			search.addEventListener('input', (e) => { query = e.target.value || ''; apply(); });
		}
		chips.forEach(ch => ch.addEventListener('click', () => {
			chips.forEach(x => x.classList.remove('active'));
			ch.classList.add('active');
			filter = ch.dataset.filter || 'all';
			apply();
		}));

		// Initial render respects the default active chip.
		const initialActive = chips.find(c => c.classList.contains('active'));
		if (initialActive && initialActive.dataset.filter) {
			filter = initialActive.dataset.filter;
		}
		apply();
	}

	function setupTheme() {
		// If ThemeSwitcher is managing theme, skip duplicate setup
		if (window && window.CoduxiumXIThemeManager === 'theme-switcher') return;
		const btn = byId('btn-theme');
		const key = 'il-devlangs-theme';
		const set = (val) => {
			document.body.classList.toggle('light', val === 'light');
			localStorage.setItem(key, val);
		};
		const stored = localStorage.getItem(key);
		if (stored) set(stored); else set('dark');
		if (btn) {
			btn.addEventListener('click', () => {
				const cur = document.body.classList.contains('light') ? 'light' : 'dark';
				set(cur === 'light' ? 'dark' : 'light');
			});
		}
	}

	function setupRepoLinks() {
		const aZip = byId('btn-download');
		const aRepo = byId('repo-link');
		const aIssues = byId('issues-link');
		const aDisclaimerRepo = byId('disclaimer-repo-link');
		const meta = byId('meta');

		// These elements are optional depending on the page.
		if (aZip) {
			if (cfg.zipUrl) aZip.href = cfg.zipUrl;
			else {
				aZip.href = '#';
				aZip.setAttribute('aria-disabled', 'true');
				aZip.classList.add('disabled');
			}
		}
		if (cfg.repoUrl) {
			if (aRepo) aRepo.href = cfg.repoUrl;
			if (aIssues) aIssues.href = `${cfg.repoUrl.replace(/\/$/, '')}/issues`;
			if (aDisclaimerRepo) aDisclaimerRepo.href = cfg.repoUrl;
		} else {
			if (aRepo) aRepo.href = '#';
			if (aIssues) aIssues.href = '#';
			if (aDisclaimerRepo) aDisclaimerRepo.href = '#';
		}
		if (meta) meta.textContent = '';
	}

	// --- Init ---
	function init() {
		renderStats();
		renderCards();
		renderQuickLinks();
		setupSearchAndFilters();
		setupTheme();
		setupRepoLinks();
	}

	document.addEventListener('DOMContentLoaded', init);
})();


// Enhanced rendering functions for modern index page
function renderEnhancedStats() {
	const s = document.getElementById('stats');
	if (!s) return;
	s.innerHTML = '';
	s.className = 'stats-showcase';

	const langCount = (window.languages || []).length;
	const frameworkCount = (window.frameworks || []).length;
	const dbCount = (window.databases || []).length;
	const devopsCount = (window.tools || []).length;
	const devToolsCount = (window.developmentTools || []).length;
	const testingCount = (window.testingTools || []).length;
	const linuxCount = (window.linuxDistros || []).length;
	const aiCount = (window.aiLibraries || []).length;
	const securityCount = (window.securityTools || []).length;

	const stats = [
		{ label: 'Languages', num: String(langCount) },
		{ label: 'Frameworks', num: String(frameworkCount) },
		{ label: 'Databases', num: String(dbCount) },
		{ label: 'DevOps Tools', num: String(devopsCount) },
		{ label: 'Dev Tools', num: String(devToolsCount) },
		{ label: 'Testing', num: String(testingCount) },
		{ label: 'Linux Distros', num: String(linuxCount) },
		{ label: 'AI/ML Libraries', num: String(aiCount) },
		{ label: 'Security Tools', num: String(securityCount) }
	];

	stats.forEach(st => {
		const card = document.createElement('div');
		card.className = 'stat-card';
		card.innerHTML = `
			<div class="stat-number">${st.num}</div>
			<div class="stat-label">${st.label}</div>
		`;
		s.appendChild(card);
	});
}

function renderEnhancedCards(list) {
	const wrap = document.getElementById('cards');
	if (!wrap) return;
	wrap.innerHTML = '';
	wrap.className = 'content-grid';

	list.forEach(item => {
		const card = document.createElement('div');
		card.className = 'tech-card';
		card.dataset.type = item.type;

		const typeName = item.type.charAt(0).toUpperCase() + item.type.slice(1);

		let linksHTML = '';
		if (item.type === 'language' && item.intro) {
			linksHTML += `<a href="pages/${item.intro}" class="card-link" target="_blank" rel="noopener">📚 Learn</a>`;
			if (item.questions) {
				linksHTML += `<a href="${item.questions}" class="card-link" target="_blank" rel="noopener">❓ Questions</a>`;
			}
		} else if ((item.type === 'framework' || item.type === 'database' || item.type === 'dev-tool' || item.type === 'testing' || item.type === 'linux') && item.intro) {
			linksHTML += `<a href="pages/${item.intro}" class="card-link" target="_blank" rel="noopener">📚 Learn</a>`;
		} else if ((item.type === 'tool' || item.type === 'ai-library' || item.type === 'data-processing' || item.type === 'game-engine' || item.type === 'security') && item.intro) {
			linksHTML += `<a href="pagesw/${item.intro}" class="card-link" target="_blank" rel="noopener">📚 Learn</a>`;
		}

		card.innerHTML = `
			<div class="card-header">
				<h3 class="card-title">${item.name}</h3>
				<span class="card-badge">${typeName}</span>
			</div>
			<div class="card-actions">
				${linksHTML}
			</div>
		`;

		wrap.appendChild(card);
	});
}

function renderEnhancedLinks() {
	const wrap = document.getElementById('links');
	if (!wrap) return;
	wrap.innerHTML = '';
	wrap.className = 'links-grid';

	const quickLinks = [
		{ label: '📞 Contact', url: 'docpages/Contact/contact.html' },
		{ label: '⚡ Quickstart', url: 'docpages/QuickStart/quickstart.html' },
		{ label: '📖 Documentation', url: 'docpages/Documentation/documentation.html' },
		{ label: '👥 Community', url: 'Guidelines/Community/community.html' },
		{ label: '📚 Resources', url: 'pagex/Resources/Resources.html' },
		{ label: '❓ FAQ', url: 'docpages/FAQ/FAQ.html' },
		{ label: '📝 Changelog', url: 'docpages/changelog/changelog.html' },
		{ label: '🔒 Security', url: 'Guidelines/Security Policy/SecurityPolicy.html' },
		{ label: '📜 License', url: 'https://github.com/Srijan-XI/RunexisForge/blob/main/LICENSE' },
		{ label: '📓 Notes', url: 'pagex/notes/notes.html' },
		{ label: '🚀 Projects', url: 'pagex/projects/projects.html' },
		{ label: '🛠️ Tools', url: 'pagex/tools/tools.html' }
	];

	quickLinks.forEach(q => {
		const a = document.createElement('a');
		a.href = q.url;
		a.className = 'quick-link';
		a.target = '_blank';
		a.rel = 'noopener';
		a.textContent = q.label;
		wrap.appendChild(a);
	});
}

// Setup enhanced filter chips for index page
if (typeof window !== 'undefined') {
	document.addEventListener('DOMContentLoaded', () => {
		const chips = document.querySelectorAll('.filter-chip');
		if (chips.length > 0) {
			// Call enhanced rendering if we're on the index page
			if (window.languages && document.getElementById('stats')) {
				renderEnhancedStats();
				renderEnhancedLinks();
			}
		}
	});
}

