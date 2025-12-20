    const btn = document.getElementById('btn-theme');
    const key = 'il-devlangs-theme';
    const set = (val) => {
      document.body.classList.toggle('light', val === 'light');
      localStorage.setItem(key, val);
    };
    const stored = localStorage.getItem(key);
    if (stored) set(stored); else set('dark');
    btn.addEventListener('click', () => {
      const cur = document.body.classList.contains('light') ? 'light' : 'dark';
      set(cur === 'light' ? 'dark' : 'light');
    });