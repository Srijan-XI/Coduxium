// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.className = 'fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300';
    themeToggle.style.cssText = 'background: var(--card, #1e293b); border: 1px solid var(--border, #334155); box-shadow: 0 4px 6px rgba(0,0,0,0.3);';

    const currentTheme = localStorage.getItem('il-devlangs-theme') || 'dark';
    themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';

    if (currentTheme === 'light') {
        document.documentElement.classList.add('light');
    }

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        const theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
        localStorage.setItem('il-devlangs-theme', theme);
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    });

    document.body.appendChild(themeToggle);
}

// Search/Filter functionality
function initSearch() {
    const searchBar = document.createElement('div');
    searchBar.className = 'max-w-6xl mx-auto mb-8 px-4';
    searchBar.innerHTML = `
        <div class="relative">
            <input 
                type="text" 
                id="toolSearch" 
                placeholder="🔍 Search for tools, technologies, or categories..."
                class="w-full px-6 py-4 rounded-xl text-lg border-2 transition-all duration-300"
                style="background: var(--card, #1e293b); border-color: var(--border, #334155); color: var(--text, #f1f5f9);"
            />
            <div id="searchResults" class="mt-2 text-sm" style="color: var(--muted, #94a3b8);"></div>
        </div>
    `;

    const header = document.querySelector('header.tools-header');
    header.after(searchBar);

    const searchInput = document.getElementById('toolSearch');
    const searchResults = document.getElementById('searchResults');
    const toolCards = document.querySelectorAll('.tool-card');
    const sections = document.querySelectorAll('main section');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (!query) {
            sections.forEach(section => section.style.display = 'block');
            toolCards.forEach(card => card.style.display = 'block');
            searchResults.textContent = '';
            return;
        }

        let visibleCount = 0;
        sections.forEach(section => {
            let sectionHasMatch = false;
            const cards = section.querySelectorAll('.tool-card');

            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'block';
                    sectionHasMatch = true;
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            section.style.display = sectionHasMatch ? 'block' : 'none';
        });

        searchResults.textContent = visibleCount > 0
            ? `Found ${visibleCount} tool${visibleCount !== 1 ? 's' : ''} matching "${query}"`
            : `No tools found matching "${query}"`;
    });

    // Focus search on "/" key
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && !searchInput.matches(':focus')) {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

// Quick navigation to sections
function initQuickNav() {
    const sections = document.querySelectorAll('main section h2');
    const navContainer = document.createElement('div');
    navContainer.className = 'max-w-6xl mx-auto mb-8 px-4';
    navContainer.innerHTML = `
        <div class="flex flex-wrap gap-2 justify-center">
            ${Array.from(sections).map((section, idx) => {
        const text = section.textContent.trim();
        const id = `section-${idx}`;
        section.parentElement.id = id;
        return `<a href="#${id}" class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300" style="background: var(--card, #1e293b); border: 1px solid var(--border, #334155); color: var(--text, #f1f5f9); text-decoration: none;">${text}</a>`;
    }).join('')}
        </div>
    `;

    const header = document.querySelector('header.tools-header');
    header.after(navContainer);
}

// Show/hide back to top button
window.addEventListener('scroll', function () {
    const backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initSearch();
    initQuickNav();

    // Add hover animations to tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 12px 24px rgba(139, 92, 246, 0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
        });
    });

    console.log('🛠️ Coduxium XI Toolkit initialized successfully!');
});