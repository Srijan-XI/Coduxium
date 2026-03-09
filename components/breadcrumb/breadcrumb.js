/**
 * Coduxium XI Breadcrumb Navigation Component
 * Automatically generates breadcrumb navigation based on current URL path
 */

class Breadcrumb {
	constructor(options = {}) {
		this.container = options.container || document.getElementById('breadcrumb');
		this.separator = options.separator || '→';
		this.homeText = options.homeText || '🏠 Home';
		this.homeUrl = options.homeUrl || '/index.html';
		
		if (this.container) {
			this.render();
		}
	}

	// Parse current path and generate breadcrumb items
	generateBreadcrumbs() {
		const path = window.location.pathname;
		const parts = path.split('/').filter(part => part && part !== 'index.html');
		
		const breadcrumbs = [
			{ text: this.homeText, url: this.getRelativePath(parts.length, 'index.html') }
		];

		let currentPath = '';
		parts.forEach((part, index) => {
			currentPath += '/' + part;
			
			// Clean up the part name
			let displayName = part
				.replace(/-/g, ' ')
				.replace('.html', '')
				.replace(/%20/g, ' ');
			
			// Capitalize first letter of each word
			displayName = displayName
				.split(' ')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
			
			// Add emoji icons for known sections
			displayName = this.addIcon(displayName, part);
			
			// Determine if this is the last item (current page)
			const isLast = index === parts.length - 1;
			
			breadcrumbs.push({
				text: displayName,
				url: isLast ? null : this.getRelativePath(parts.length - index - 1, part),
				isActive: isLast
			});
		});

		return breadcrumbs;
	}

	// Get relative path based on depth
	getRelativePath(depth, target) {
		const prefix = depth > 0 ? '../'.repeat(depth) : './';
		return prefix + target;
	}

	// Add icons for known sections
	addIcon(text, originalPart) {
		const iconMap = {
			'languages': '💻',
			'framework': '🎯',
			'frameworks': '🎯',
			'database': '🗄️',
			'databases': '🗄️',
			'testing': '🧪',
			'devop': '🔧',
			'resources': '📚',
			'python': '🐍',
			'java': '☕',
			'javascript': '🟨',
			'typescript': '📘',
			'rust': '🦀',
			'golang': '🐹',
			'php': '🐘',
			'nodejs': '🟢',
			'expressjs': '⚡',
			'nextjs': '▲',
			'django': '🎸',
			'flask': '🌶️',
			'spring boot': '🍃',
			'mysql': '🐬',
			'postgresql': '🐘',
			'mongodb': '🍃',
			'redis': '🔴',
			'dynamodb': '⚡',
			'docker': '🐳',
			'git': '📦',
			'github': '🐙',
			'jenkins': '🔨',
			'postman': '📮',
			'jest': '🃏',
			'jtest': '✅',
			'install-guide': '⚙️',
			'intro': '📖',
			'documentation': '📚',
			'faq': '❓',
			'quickstart': '🚀',
			'changelog': '📝',
			'about': 'ℹ️',
			'contact': '📧',
			'community': '👥',
			'security': '🔒'
		};

		const key = text.toLowerCase();
		const icon = iconMap[key] || iconMap[originalPart.toLowerCase()];
		
		return icon ? `${icon} ${text}` : text;
	}

	// Render breadcrumb HTML
	render() {
		const breadcrumbs = this.generateBreadcrumbs();
		
		const html = breadcrumbs.map((crumb, index) => {
			const isLast = index === breadcrumbs.length - 1;
			const separator = isLast ? '' : `<span class="breadcrumb-separator">${this.separator}</span>`;
			
			if (crumb.isActive || !crumb.url) {
				return `<span class="breadcrumb-item active">${crumb.text}</span>${separator}`;
			} else {
				return `<a href="${crumb.url}" class="breadcrumb-item">${crumb.text}</a>${separator}`;
			}
		}).join('');

		this.container.innerHTML = html;
	}
}

// Auto-initialize breadcrumb when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		new Breadcrumb();
	});
} else {
	new Breadcrumb();
}
