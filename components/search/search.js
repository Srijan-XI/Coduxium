/**
 * Coduxium XI Search Functionality
 * Real-time search across documentation and resources
 */

class SearchEngine {
	constructor(options = {}) {
		this.searchInput = options.input || document.getElementById('search-input') || document.getElementById('search');
		this.searchResults = options.results || document.getElementById('search-results');
		this.minChars = options.minChars || 2;
		this.debounceDelay = options.debounceDelay || 300;
		
		this.searchIndex = [];
		this.debounceTimer = null;
		
		if (this.searchInput && !this.searchResults) {
			this.searchResults = document.createElement('div');
			this.searchResults.id = 'search-results';
			this.searchInput.insertAdjacentElement('afterend', this.searchResults);
		}

		if (this.searchInput) {
			this.init();
		}
	}

	init() {
		// Build search index
		this.buildSearchIndex();
		
		// Add event listeners
		this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
		this.searchInput.addEventListener('focus', () => this.showResults());
		
		// Close results when clicking outside
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.search-container')) {
				this.hideResults();
			}
		});
		
		// Keyboard navigation
		this.searchInput.addEventListener('keydown', (e) => this.handleKeyboard(e));
	}

	buildSearchIndex() {
		// Get data from app.js if available
		if (typeof languages !== 'undefined') {
			languages.forEach(lang => {
				this.searchIndex.push({
					title: lang.name,
					type: 'Language',
					url: `pages/${lang.intro}`,
					keywords: [lang.name.toLowerCase(), 'programming', 'language']
				});
			});
		}
		
		if (typeof frameworks !== 'undefined') {
			frameworks.forEach(fw => {
				this.searchIndex.push({
					title: fw.name,
					type: 'Framework',
					url: `pages/${fw.intro}`,
					keywords: [fw.name.toLowerCase(), 'framework']
				});
			});
		}
		
		if (typeof databases !== 'undefined') {
			databases.forEach(db => {
				this.searchIndex.push({
					title: db.name,
					type: 'Database',
					url: `pages/${db.intro}`,
					keywords: [db.name.toLowerCase(), 'database']
				});
			});
		}
		
		if (typeof tools !== 'undefined') {
			tools.forEach(tool => {
				this.searchIndex.push({
					title: tool.name,
					type: 'DevOps Tool',
					url: `pagesw/${tool.intro}`,
					keywords: [tool.name.toLowerCase(), 'devops', 'tool']
				});
			});
		}

		if (typeof developmentTools !== 'undefined') {
			developmentTools.forEach(devTool => {
				this.searchIndex.push({
					title: devTool.name,
					type: 'Development Tool',
					url: `pages/${devTool.intro}`,
					keywords: [devTool.name.toLowerCase(), 'development', 'tool']
				});
			});
		}

		if (typeof securityTools !== 'undefined') {
			securityTools.forEach(secTool => {
				this.searchIndex.push({
					title: secTool.name,
					type: 'Security Tool',
					url: `pagesw/${secTool.intro}`,
					keywords: [secTool.name.toLowerCase(), 'security', 'devsecops', 'tool']
				});
			});
		}

		if (typeof aiLibraries !== 'undefined') {
			aiLibraries.forEach(lib => {
				this.searchIndex.push({
					title: lib.name,
					type: 'AI/ML Library',
					url: `pagesw/${lib.intro}`,
					keywords: [lib.name.toLowerCase(), 'ai', 'ml', 'machine learning', 'data']
				});
			});
		}

		if (typeof dataProcessing !== 'undefined') {
			dataProcessing.forEach(dp => {
				this.searchIndex.push({
					title: dp.name,
					type: 'Data Processing',
					url: `pagesw/${dp.intro}`,
					keywords: [dp.name.toLowerCase(), 'data', 'processing']
				});
			});
		}

		if (typeof cloudServices !== 'undefined') {
			cloudServices.forEach(cs => {
				this.searchIndex.push({
					title: cs.name,
					type: 'Cloud Service',
					url: `pagesw/${cs.intro}`,
					keywords: [cs.name.toLowerCase(), 'cloud', 'platform']
				});
			});
		}

		if (typeof osPages !== 'undefined') {
			osPages.forEach(os => {
				this.searchIndex.push({
					title: os.name,
					type: 'Operating System',
					url: `pagesw/${os.intro}`,
					keywords: [os.name.toLowerCase(), 'os', 'operating system']
				});
			});
		}
		
		if (typeof testingTools !== 'undefined') {
			testingTools.forEach(test => {
				this.searchIndex.push({
					title: test.name,
					type: 'Testing',
					url: `pages/${test.intro}`,
					keywords: [test.name.toLowerCase(), 'testing']
				});
			});
		}

		if (typeof pagexPages !== 'undefined') {
			pagexPages.forEach(p => {
				this.searchIndex.push({
					title: p.name,
					type: 'Extras',
					url: p.url,
					keywords: [p.name.toLowerCase(), 'extras', 'resources', 'tools', 'notes', 'projects']
				});
			});
		}
		
		// Add static pages
		const staticPages = [
			{ title: 'Documentation', type: 'Guide', url: 'docpages/Documentation/documentation.html', keywords: ['docs', 'documentation', 'guide'] },
			{ title: 'FAQ', type: 'Guide', url: 'docpages/FAQ/FAQ.html', keywords: ['faq', 'help', 'questions'] },
			{ title: 'Quick Start', type: 'Guide', url: 'docpages/QuickStart/quickstart.html', keywords: ['quickstart', 'getting started', 'tutorial'] },
			{ title: 'Resources', type: 'Extras', url: 'pagex/Resources/Resources.html', keywords: ['resources', 'learning', 'materials'] },
			{ title: 'Tools', type: 'Extras', url: 'pagex/tools/tools.html', keywords: ['tools', 'utilities'] },
			{ title: 'Notes', type: 'Extras', url: 'pagex/notes/notes.html', keywords: ['notes'] },
			{ title: 'Projects', type: 'Extras', url: 'pagex/projects/projects.html', keywords: ['projects'] },
			{ title: 'Changelog', type: 'Info', url: 'docpages/changelog/changelog.html', keywords: ['changelog', 'updates', 'history'] },
			{ title: 'About', type: 'Info', url: 'docpages/about/about.html', keywords: ['about', 'information'] },
			{ title: 'Community', type: 'Info', url: 'Guidelines/Community/community.html', keywords: ['community', 'contribute', 'guidelines'] },
			{ title: 'Security Policy', type: 'Info', url: 'Guidelines/Security Policy/SecurityPolicy.html', keywords: ['security', 'policy', 'safety'] }
		];
		
		this.searchIndex.push(...staticPages);
	}

	handleSearch(e) {
		clearTimeout(this.debounceTimer);
		
		const query = e.target.value.trim();
		
		if (query.length < this.minChars) {
			this.hideResults();
			return;
		}
		
		this.debounceTimer = setTimeout(() => {
			this.performSearch(query);
		}, this.debounceDelay);
	}

	performSearch(query) {
		const lowerQuery = query.toLowerCase();
		
		const results = this.searchIndex.filter(item => {
			const titleMatch = item.title.toLowerCase().includes(lowerQuery);
			const keywordMatch = item.keywords.some(kw => kw.includes(lowerQuery));
			return titleMatch || keywordMatch;
		});
		
		// Sort by relevance (title matches first)
		results.sort((a, b) => {
			const aTitle = a.title.toLowerCase().startsWith(lowerQuery) ? 0 : 1;
			const bTitle = b.title.toLowerCase().startsWith(lowerQuery) ? 0 : 1;
			return aTitle - bTitle;
		});
		
		this.displayResults(results, query);
	}

	displayResults(results, query) {
		if (!this.searchResults) return;
		
		if (results.length === 0) {
			this.searchResults.innerHTML = `
				<div class="search-no-results">
					<p>No results found for "<strong>${this.escapeHtml(query)}</strong>"</p>
				</div>
			`;
		} else {
			const html = results.slice(0, 8).map((result, index) => `
				<a href="${result.url}" class="search-result-item" data-index="${index}">
					<div class="search-result-type">${result.type}</div>
					<div class="search-result-title">${this.highlightMatch(result.title, query)}</div>
				</a>
			`).join('');
			
			this.searchResults.innerHTML = html;
		}
		
		this.showResults();
	}

	highlightMatch(text, query) {
		const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
		return text.replace(regex, '<mark>$1</mark>');
	}

	escapeHtml(text) {
		const div = document.createElement('div');
		div.textContent = text;
		return div.innerHTML;
	}

	escapeRegex(text) {
		return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	showResults() {
		if (this.searchResults && this.searchResults.innerHTML) {
			this.searchResults.classList.add('visible');
		}
	}

	hideResults() {
		if (this.searchResults) {
			this.searchResults.classList.remove('visible');
		}
	}

	handleKeyboard(e) {
		const items = this.searchResults?.querySelectorAll('.search-result-item');
		if (!items || items.length === 0) return;
		
		const current = this.searchResults.querySelector('.search-result-item.focused');
		let index = current ? parseInt(current.dataset.index) : -1;
		
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			index = Math.min(index + 1, items.length - 1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			index = Math.max(index - 1, -1);
		} else if (e.key === 'Enter' && current) {
			e.preventDefault();
			current.click();
			return;
		} else if (e.key === 'Escape') {
			this.hideResults();
			this.searchInput.blur();
			return;
		} else {
			return;
		}
		
		items.forEach(item => item.classList.remove('focused'));
		if (index >= 0) {
			items[index].classList.add('focused');
			items[index].scrollIntoView({ block: 'nearest' });
		}
	}
}

// Initialize search
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		new SearchEngine();
	});
} else {
	new SearchEngine();
}
