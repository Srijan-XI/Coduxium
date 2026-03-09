        function handleFormSubmission(event) {
            event.preventDefault();
            
            const form = document.getElementById('contactForm');
            const successMessage = document.getElementById('successMessage');

            form.style.display = 'none';
            successMessage.classList.add('show');

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Theme toggle functionality
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