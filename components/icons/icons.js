/**
 * Coduxium XI Icon Library
 * SVG-first icon system with emoji fallback and broad technology coverage.
 */

const DEFAULT_ICON = { emoji: '📄', color: '#6B7280' };
const DEFAULT_CATEGORY = 'catalog';

const CoduxiumXIIcons = {
	languages: {},
	frameworks: {},
	databases: {},
	devops: {},
	testing: {},
	pages: {},
	catalog: {}
};

const SVG_FILE_ALIASES = {
	javascript: ['javascript.svg', 'javascript.svg'],
	typescript: ['typescript.svg'],
	python: ['python-auto.svg', 'python-auto.svg', 'python-auto.svg'],
	java: ['java.svg', 'java-auto.svg'],
	rust: ['rust.svg', 'rust-auto.svg', 'rust.svg'],
	go: ['golang.svg', 'golang.svg'],
	golang: ['golang.svg', 'golang.svg'],
	php: ['php.svg', 'php-auto.svg', 'php-light.svg'],
	bash: ['bash-auto.svg'],
	csharp: ['csharp.svg', 'cs.svg'],
	'c-and-c-plus-plus': ['c.svg'],
	'c-c-plus-plus': ['c.svg'],
	r: ['r.svg'],
	sql: ['sqlite.svg', 'sqlserver-auto.svg'],
	kql: ['sqlserver-auto.svg'],
	'scikit-learn': ['scikitlearn-auto.svg'],
	'hugging-face': ['huggingface-auto.svg'],
	'linux-overview': ['linux-auto.svg'],
	ubuntu: ['ubuntu.svg', 'ubuntu.svg'],
	'arch-linux': ['arch-linux.svg'],
	'linux-mint': ['linux-mint.svg'],
	'kali-linux': ['kali-linux.svg'],
	'asp-net-core': ['dotnet.svg'],

	nodejs: ['nodejs-auto.svg', 'nodejs-auto.svg'],
	'node-js': ['nodejs-auto.svg', 'nodejs-auto.svg'],
	expressjs: ['expressjs-auto.svg'],
	'express-js': ['expressjs-auto.svg'],
	nextjs: ['nextjs-auto.svg'],
	'next-js': ['nextjs-auto.svg'],
	vue: ['vue-js.svg'],
	angular: ['angular.svg'],
	svelte: ['svelte.svg'],
	laravel: ['laravel-auto.svg', 'laravel-auto.svg'],
	django: ['django.svg'],
	flask: ['flask.svg'],
	fastapi: ['fastapi.svg'],
	springboot: ['springboot.svg'],
	'spring-boot': ['springboot.svg'],
	rails: ['ruby-on-rails.svg', 'rails.svg'],
	'ruby-on-rails': ['ruby-on-rails.svg', 'rails.svg'],
	remix: ['remix-auto.svg'],
	nuxtjs: ['nuxtjs-auto.svg'],
	'nuxt-js': ['nuxtjs-auto.svg'],
	astro: ['astro.svg'],
	htmx: ['htmx-auto.svg'],
	solidjs: ['solidjs-auto.svg'],
	'solid-js': ['solidjs-auto.svg'],
	stencil: ['webassembly.svg'],
	'tauri': ['electron.svg'],
	electron: ['electron.svg'],
	ionic: ['android.svg'],
	expo: ['reactjs.svg'],
	'jetpack-compose': ['android.svg'],
	kivy: ['python-auto.svg'],
	metamask: ['ethereum-auto.svg'],
	bitcoin: ['bitcoin.svg'],
	solana: ['solana-auto.svg'],
	polkadot: ['bitcoin.svg'],
	contentful: ['strapi.svg'],
	ghost: ['ghostty-auto.svg'],
	payload: ['strapi.svg'],

	mongodb: ['mongodb.svg'],
	mysql: ['mysql-auto.svg'],
	postgresql: ['postgresql.svg', 'postgres.svg'],
	redis: ['redis.svg', 'redis-auto.svg'],
	mariadb: ['mariadb.svg'],
	sqlite: ['sqlite.svg'],
	dynamodb: ['dynamodb-auto.svg'],
	neo4j: ['neo4j-auto.svg'],
	cassandra: ['cassandra-auto.svg', 'apache-cassandra.svg'],
	snowflake: ['snowflake-auto.svg'],
	clickhouse: ['duckdb.svg'],
	bigquery: ['google-cloud-platform.svg'],
	memcached: ['redis.svg'],
	minio: ['aws.svg'],
	milvus: ['mongodb.svg'],
	pinecone: ['mongodb.svg'],
	weaviate: ['mongodb.svg'],
	etcd: ['consul.svg'],

	docker: ['docker.svg', 'docker.svg'],
	kubernetes: ['kubernetes.svg'],
	git: ['git.svg', 'git-auto.svg'],
	github: ['github-light.svg', 'github-light.svg'],
	gitlab: ['gitlab.svg'],
	bitbucket: ['bitbucket-auto.svg', 'bitbucket-auto.svg'],
	jenkins: ['jenkins.svg'],
	ansible: ['ansible.svg'],
	terraform: ['terraform-auto.svg', 'terraform-auto.svg'],
	postman: ['api-auto.svg'],
	azure: ['azure.svg', 'azure-auto.svg'],
	aws: ['aws.svg', 'aws-light.svg'],
	gcp: ['gcp-auto.svg', 'google-cloud-platform.svg'],
	podman: ['podman.svg'],
	nomad: ['nomad.svg'],
	consul: ['consul.svg'],
	istio: ['kubernetes.svg'],
	opentofu: ['opentofu.svg'],
	pulumi: ['terraform-auto.svg'],
	flux: ['flux-cd.svg', 'flux-operator.svg'],
	loki: ['loki.svg'],
	zipkin: ['grafana.svg'],
	'n8n': ['n8n.svg'],
	linode: ['linode.svg'],
	'ibm-cloud': ['oracle-cloud.svg'],

	jest: ['jest.svg'],
	jtest: ['jest.svg'],
	mocha: ['mocha-auto.svg'],
	pytest: ['python-auto.svg'],
	cypress: ['cypress.svg', 'cypress-auto.svg'],
	selenium: ['cypress.svg'],
	'apache-kafka': ['kafka.svg'],
	'apache-spark': ['spark-auto.svg', 'pyspark-auto.svg'],
	scapy: ['python-auto.svg'],
	pygame: ['python-auto.svg'],
	next: ['nextjs-auto.svg'],

	documentation: ['html.svg'],
	faq: ['duckduckgo.svg'],
	quickstart: ['forge.svg'],
	changelog: ['git.svg'],
	about: ['api-auto.svg'],
	contact: ['discord.svg'],
	community: ['discord.svg'],
	security: ['openvas.svg'],
	resources: ['forge.svg']
};

const CATALOG_TECHNOLOGIES = [
	'Actix Web', 'AdonisJS', 'Alpine Linux', 'Alpine.js', 'Amethyst', 'Angular', 'Ansible',
	'Apache Kafka', 'Apache Spark', 'AquaSecurity', 'Arch Linux', 'ASP.NET Core', 'Assembly',
	'Astro', 'AsyncAPI', 'Axum', 'Babylon.js', 'Bash', 'Bazel', 'Bevy', 'BigQuery', 'BitBucket',
	'Bitcoin', 'BlackArch', 'C & C++', 'C#', 'CentOS', 'ChromeOS Flex', 'ClickHouse',
	'CloudWatch', 'CMake', 'Consul', 'Contentful', 'Couchbase', 'CSV', 'CUDA', 'Dart', 'dbt',
	'Defold', 'Deno Runtime', 'Django', 'Docker', 'DynamoDB', 'Electron', 'Elysia', 'etcd',
	'Expo', 'Express.js', 'FastAPI', 'Fastify', 'Fedora', 'Flask', 'Flux', 'FNA', 'Garuda Linux',
	'Gentoo', 'Ghost', 'Gin', 'Git', 'GitHub', 'GitLab', 'Go', 'Godot', 'hapi', 'HashiCorp Vault',
	'Haskell', 'Helm', 'Hono', 'htmx', 'Hugging Face', 'IBM Cloud', 'IBM Db2', 'Ionic', 'Istio',
	'Java', 'JavaScript', 'Jenkins', 'Jest', 'Jetpack Compose', 'JSON', 'JTest', 'Julia',
	'Kali Linux', 'Kivy', 'Koa', 'Kotlin', 'KQL', 'Kubernetes', 'Kustomize', 'LangChain',
	'Laravel', 'Leptos', 'LibGDX', 'Linode', 'Linux Mint', 'Linux Overview', 'Loki', 'Love2D',
	'Lua', 'MariaDB', 'MATLAB', 'Matplotlib', 'Maven', 'Memcached', 'MetaMask', 'Metasploit',
	'Milvus', 'MinIO', 'MongoDB', 'MonoGame', 'MX Linux', 'MySQL', 'n8n', 'Neo4j', 'NestJS',
	'Next.js', 'NixOS', 'Nmap', 'Node.js', 'Nomad', 'NumPy', 'Nuxt.js', 'Oak',
	'OAuth 2.0 / OIDC', 'OpenTofu', 'OpenVAS', 'Oracle Linux', 'Pandas', 'ParrotSec', 'Payload',
	'Phoenix', 'PHP', 'Pinecone', 'PlayCanvas', 'Podman', 'Polkadot', 'Pop!_OS', 'PostgreSQL',
	'Postman', 'Pulumi', 'PWA', 'Pygame', 'Python', 'PyTorch', 'Qubes OS', 'Qwik', 'R', 'React',
	'RedArch', 'Redis', 'Remix', 'RHEL', 'Rocky Linux', 'Ruby', 'Ruby on Rails', 'Rust',
	'Sails.js', 'SAML', 'Sanity.io', 'Scala', 'Scapy', 'Scikit-learn', 'Security Tools',
	'Sidekiq', 'Skaffold', 'Slackware', 'Snowflake', 'Snyk', 'SOAP', 'Solana', 'Solid.js',
	'Solidity', 'SonarQube', 'Spring Boot', 'SQL', 'SQLite', 'SSH & SSL Tools', 'SteamOS',
	'Stencil', 'Streamlit', 'Svelte', 'Swift', 'Tails', 'Tauri', 'tcpdump', 'Tekton',
	'TensorFlow', 'Terraform', 'TimescaleDB', 'TOML', 'TypeScript', 'Ubuntu', 'Unity',
	'Unreal Engine', 'Vite', 'Vitest', 'VPN Tools', 'Vue', 'Weaviate', 'Web Components',
	'Web3JS', 'Webhooks', 'XML', 'YAML', 'Zig', 'Zipkin', 'Zorin OS'
];

let svgManifest = null;

function normalizeKey(value) {
	return String(value || '')
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/\+/g, ' plus ')
		.replace(/#/g, ' sharp ')
		.replace(/\./g, ' ')
		.replace(/\//g, ' ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function escapeHtml(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

function detectAssetBasePath() {
	if (typeof window === 'undefined') return 'assets/';
	if (window.CoduxiumIconConfig && window.CoduxiumIconConfig.assetBasePath) {
		const p = String(window.CoduxiumIconConfig.assetBasePath);
		return p.endsWith('/') ? p : `${p}/`;
	}

	if (typeof document !== 'undefined' && document.currentScript && document.currentScript.src) {
		try {
			const url = new URL(document.currentScript.src, window.location.href);
			const marker = '/components/icons/icons.js';
			if (url.pathname.endsWith(marker)) {
				return `${url.origin}${url.pathname.slice(0, -marker.length)}/assets/`;
			}
		} catch (_) {
			// Ignore URL parsing issues and fall back.
		}
	}

	// Fallback for pages where currentScript is unavailable (bundlers, dynamic loaders).
	// Detect the project root from known top-level route markers.
	try {
		const pathname = String(window.location && window.location.pathname ? window.location.pathname : '');
		const routeMarkers = [
			'/pages/',
			'/docpages/',
			'/pagex/',
			'/pagesw/',
			'/Guidelines/',
			'/components/',
			'/Tx/',
			'/css/',
			'/js/',
			'/popup-message/',
			'/watermark/'
		];

		let rootPrefix = '';
		for (const marker of routeMarkers) {
			const idx = pathname.indexOf(marker);
			if (idx > -1) {
				rootPrefix = pathname.slice(0, idx);
				break;
			}
		}

		if (!rootPrefix) {
			const clean = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
			const lastSlash = clean.lastIndexOf('/');
			rootPrefix = lastSlash > 0 ? clean.slice(0, lastSlash) : '';
		}

		const origin = window.location.origin && window.location.origin !== 'null' ? window.location.origin : '';
		return `${origin}${rootPrefix}/assets/`;
	} catch (_) {
		// Ignore fallback parsing issues.
	}

	return 'assets/';
}

function preloadSvgManifest() {
	if (typeof window === 'undefined' || typeof fetch === 'undefined') return;
	if (svgManifest !== null) return;

	svgManifest = new Set();
	const listUrl = `${detectAssetBasePath()}zicons-list.txt`;
	fetch(listUrl)
		.then((res) => (res.ok ? res.text() : ''))
		.then((text) => {
			text.split(/\r?\n/)
				.map((line) => line.trim())
				.filter((line) => line.endsWith('.svg'))
				.forEach((line) => svgManifest.add(line));
		})
		.catch(() => {
			// Keep an empty manifest if loading fails.
		});
}

function registerIcon(category, name, options = {}) {
	if (!CoduxiumXIIcons[category]) {
		CoduxiumXIIcons[category] = {};
	}

	const key = normalizeKey(name);
	CoduxiumXIIcons[category][key] = {
		name,
		emoji: options.emoji || DEFAULT_ICON.emoji,
		color: options.color || DEFAULT_ICON.color,
		svg: options.svg || null
	};
}

function seedCoreIcons() {
	[
		['languages', 'Python', '🐍', '#3776AB'],
		['languages', 'Java', '☕', '#007396'],
		['languages', 'JavaScript', '🟨', '#F7DF1E'],
		['languages', 'TypeScript', '📘', '#3178C6'],
		['languages', 'Rust', '🦀', '#CE422B'],
		['languages', 'Go', '🐹', '#00ADD8'],
		['languages', 'PHP', '🐘', '#777BB4'],
		['languages', 'C & C++', '⚡', '#00599C'],
		['languages', 'C#', '🔷', '#512BD4'],
		['languages', 'Ruby', '💎', '#CC0000'],
		['languages', 'Swift', '🕊️', '#F05138'],
		['languages', 'Kotlin', '🧩', '#7F52FF'],
		['languages', 'Bash', '💲', '#4EAA25'],
		['languages', 'R', '📊', '#276DC3'],
		['languages', 'SQL', '🗄️', '#CC2927'],
		['languages', 'KQL', '🔍', '#0078D4'],

		['frameworks', 'Node.js', '🟢', '#339933'],
		['frameworks', 'Express.js', '⚡', '#2F2F2F'],
		['frameworks', 'Next.js', '▲', '#111827'],
		['frameworks', 'React', '⚛️', '#61DAFB'],
		['frameworks', 'Vue', '💚', '#42B883'],
		['frameworks', 'Angular', '🅰️', '#DD0031'],
		['frameworks', 'Django', '🎸', '#092E20'],
		['frameworks', 'Flask', '🌶️', '#111827'],
		['frameworks', 'FastAPI', '⚡', '#05998B'],
		['frameworks', 'Laravel', '🔺', '#FF2D20'],
		['frameworks', 'Ruby on Rails', '💎', '#CC0000'],
		['frameworks', 'Spring Boot', '🍃', '#6DB33F'],
		['frameworks', 'Svelte', '🔥', '#FF3E00'],
		['frameworks', 'Nuxt.js', '💚', '#00DC82'],
		['frameworks', 'Remix', '🌀', '#0F172A'],

		['databases', 'MongoDB', '🍃', '#47A248'],
		['databases', 'MySQL', '🐬', '#4479A1'],
		['databases', 'PostgreSQL', '🐘', '#336791'],
		['databases', 'Redis', '🔴', '#DC382D'],
		['databases', 'MariaDB', '🌊', '#003545'],
		['databases', 'SQLite', '💾', '#003B57'],
		['databases', 'DynamoDB', '⚡', '#4053D6'],
		['databases', 'Snowflake', '❄️', '#29B5E8'],

		['devops', 'Docker', '🐳', '#2496ED'],
		['devops', 'Kubernetes', '☸️', '#326CE5'],
		['devops', 'Git', '📦', '#F05032'],
		['devops', 'GitHub', '🐙', '#181717'],
		['devops', 'GitLab', '🦊', '#FC6D26'],
		['devops', 'Jenkins', '🔨', '#D24939'],
		['devops', 'Ansible', '🅰️', '#EE0000'],
		['devops', 'Terraform', '☁️', '#7B42BC'],
		['devops', 'Azure', '☁️', '#0078D4'],
		['devops', 'AWS', '☁️', '#FF9900'],
		['devops', 'GCP', '☁️', '#4285F4'],
		['devops', 'Postman', '📮', '#FF6C37'],

		['testing', 'Jest', '🃏', '#C21325'],
		['testing', 'JTest', '✅', '#25A162'],
		['testing', 'Mocha', '☕', '#8D6748'],
		['testing', 'Pytest', '🧪', '#0A9EDC'],
		['testing', 'Cypress', '🌲', '#17202C'],
		['testing', 'Selenium', '🌐', '#43B02A'],

		['pages', 'Documentation', '📚', '#8B5CF6'],
		['pages', 'FAQ', '❓', '#F59E0B'],
		['pages', 'Quick Start', '🚀', '#10B981'],
		['pages', 'Changelog', '📝', '#6366F1'],
		['pages', 'About', 'ℹ️', '#3B82F6'],
		['pages', 'Contact', '📧', '#EC4899'],
		['pages', 'Community', '👥', '#8B5CF6'],
		['pages', 'Security', '🔒', '#EF4444'],
		['pages', 'Resources', '📚', '#8B5CF6']
	].forEach(([category, name, emoji, color]) => registerIcon(category, name, { emoji, color }));
}

function findIconByKey(key, category = null) {
	if (category && CoduxiumXIIcons[category] && CoduxiumXIIcons[category][key]) {
		return { icon: CoduxiumXIIcons[category][key], category };
	}

	for (const [catName, icons] of Object.entries(CoduxiumXIIcons)) {
		if (icons[key]) return { icon: icons[key], category: catName };
	}

	return null;
}

function getSvgCandidates(key, name) {
	const candidates = new Set();
	const alias = SVG_FILE_ALIASES[key] || [];
	alias.forEach((entry) => candidates.add(entry));

	const baseVariants = new Set([
		key,
		key.replace(/-and-/g, '-'),
		key.replace(/-plus/g, ''),
		key.replace(/-/g, ''),
		key.replace(/-js$/g, 'js'),
		key.replace(/-os$/g, 'os'),
		key.replace(/-tool(s)?$/g, ''),
		key.replace(/-overview$/g, ''),
		normalizeKey(name).replace(/-js$/g, 'js')
	]);

	for (const base of baseVariants) {
		if (!base) continue;
		candidates.add(`${base}.svg`);
		candidates.add(`${base}-auto.svg`);
		candidates.add(`${base}-dark.svg`);
		candidates.add(`${base}-light.svg`);
		candidates.add(`${base}-linux.svg`);
	}

	return Array.from(candidates);
}

function resolveSvgFile(key, name, explicitSvg = null) {
	if (explicitSvg) return explicitSvg;

	const candidates = getSvgCandidates(key, name);
	if (svgManifest && svgManifest.size > 0) {
		const hit = candidates.find((file) => svgManifest.has(file));
		if (hit) return hit;
	}

	return candidates[0] || null;
}

function registerCatalogCoverage() {
	for (const name of CATALOG_TECHNOLOGIES) {
		const key = normalizeKey(name);
		if (!findIconByKey(key)) {
			registerIcon(DEFAULT_CATEGORY, name, { emoji: '🧩', color: '#64748B' });
		}
	}
}

seedCoreIcons();
registerCatalogCoverage();
preloadSvgManifest();

/**
 * Get icon metadata for a technology.
 * @param {string} tech - Technology name
 * @param {string|null} category - Optional category filter
 * @returns {{name:string,emoji:string,color:string,svg:string|null,svgPath:string|null,key:string,category:string}}
 */
function getIcon(tech, category = null) {
	const name = String(tech || '').trim() || 'Unknown';
	const key = normalizeKey(name);
	const found = findIconByKey(key, category);
	const icon = found ? found.icon : { ...DEFAULT_ICON, name };
	const iconCategory = found ? found.category : DEFAULT_CATEGORY;
	const svgFile = resolveSvgFile(key, icon.name, icon.svg || null);
	const basePath = detectAssetBasePath();

	return {
		name: icon.name,
		emoji: icon.emoji,
		color: icon.color,
		svg: svgFile,
		svgPath: svgFile ? `${basePath}${svgFile}` : null,
		key,
		category: iconCategory
	};
}

/**
 * Create an icon element.
 * @param {string} tech - Technology name
 * @param {string|null} category - Optional category
 * @param {'small'|'medium'|'large'} size - Size variant
 * @returns {string}
 */
function createIcon(tech, category = null, size = 'medium') {
	const icon = getIcon(tech, category);
	const sizeMap = {
		small: '1.5rem',
		medium: '2rem',
		large: '3rem'
	};
	const iconSize = sizeMap[size] || sizeMap.medium;
	const safeName = escapeHtml(icon.name);

	if (icon.svgPath) {
		return `
			<span class="tech-icon tech-icon-${size}" style="display:inline-flex;align-items:center;justify-content:center;width:${iconSize};height:${iconSize};" title="${safeName}">
				<img class="tech-icon-svg" src="${escapeHtml(icon.svgPath)}" alt="${safeName} icon" style="width:100%;height:100%;object-fit:contain;" onerror="this.style.display='none';this.nextElementSibling.style.display='inline';" />
				<span class="tech-icon-fallback" style="display:none;font-size:${iconSize};color:${icon.color};">${icon.emoji}</span>
			</span>
		`;
	}

	return `
		<span class="tech-icon tech-icon-${size}" style="font-size:${iconSize};color:${icon.color};" title="${safeName}">
			${icon.emoji}
		</span>
	`;
}

/**
 * Create an icon with label.
 * @param {string} tech - Technology name
 * @param {string|null} category - Optional category
 * @returns {string}
 */
function createIconWithLabel(tech, category = null) {
	const icon = getIcon(tech, category);
	const iconMarkup = createIcon(tech, category, 'small');

	return `
		<div class="tech-icon-label">
			${iconMarkup}
			<span class="tech-name">${escapeHtml(icon.name)}</span>
		</div>
	`;
}

/**
 * Get all icons in a category.
 * @param {string} category - Category name
 * @returns {Record<string, {name:string,emoji:string,color:string,svg:string|null}>}
 */
function getIconsByCategory(category) {
	return CoduxiumXIIcons[category] || {};
}

/**
 * Search icons by name or key.
 * @param {string} query - Search text
 * @returns {Array}
 */
function searchIcons(query) {
	const q = String(query || '').toLowerCase();
	const results = [];

	for (const [category, icons] of Object.entries(CoduxiumXIIcons)) {
		for (const [key, icon] of Object.entries(icons)) {
			if (!q || icon.name.toLowerCase().includes(q) || key.includes(q)) {
				results.push({
					...getIcon(icon.name, category),
					category,
					key
				});
			}
		}
	}

	return results;
}

// Export for use in other modules.
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		CoduxiumXIIcons,
		getIcon,
		createIcon,
		createIconWithLabel,
		getIconsByCategory,
		searchIcons,
		normalizeKey
	};
}

