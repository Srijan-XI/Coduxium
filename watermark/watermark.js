// Brutalist Watermark Component - Auto-inject on all pages
(function () {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectWatermark);
    } else {
        injectWatermark();
    }

    function injectWatermark() {
        // Create watermark container
        const watermarkContainer = document.createElement('div');
        watermarkContainer.className = 'watermark-container';

        // Create watermark link (can link to GitHub profile)
        const watermarkLink = document.createElement('a');
        watermarkLink.href = 'https://github.com/Srijan-XI';
        watermarkLink.target = '_blank';
        watermarkLink.rel = 'noopener noreferrer';
        watermarkLink.className = 'brutalist-watermark';
        watermarkLink.setAttribute('aria-label', 'Created by Srijan-XI');

        // Create logo div with shield SVG
        const logo = document.createElement('div');
        logo.className = 'watermark-logo';
        logo.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
            </svg>
        `;

        // Create text div
        const text = document.createElement('div');
        text.className = 'watermark-text';

        const topText = document.createElement('span');
        topText.textContent = 'Created by';

        const bottomText = document.createElement('span');
        bottomText.textContent = 'Srijan-xi';

        text.appendChild(topText);
        text.appendChild(bottomText);

        // Assemble watermark
        watermarkLink.appendChild(logo);
        watermarkLink.appendChild(text);
        watermarkContainer.appendChild(watermarkLink);

        // Inject into body
        document.body.appendChild(watermarkContainer);
    }
})();
