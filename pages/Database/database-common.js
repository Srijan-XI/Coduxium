/* Database Pages Common JavaScript */
/* DevSphere Database Documentation - Shared JS */

(function() {
  'use strict';

  // Copy button functionality for code blocks
  function initCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const textToCopy = btn.getAttribute('data-copy');
        
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Show copy feedback toast
          const feedbackElement = document.getElementById('copyToast') || 
                                  document.getElementById('copyFeedback') || 
                                  document.querySelector('.copy-feedback');
          
          if (feedbackElement) {
            feedbackElement.classList.add('show');
            setTimeout(() => {
              feedbackElement.classList.remove('show');
            }, 1600);
          }
        }).catch(err => {
          console.error('Failed to copy text:', err);
        });
      });
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Initialize all features when DOM is ready
  function init() {
    initCopyButtons();
    initSmoothScroll();
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
