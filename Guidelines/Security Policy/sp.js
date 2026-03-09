    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to 'dark'
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