(function () {
  function showToast(message) {
    var toast = document.getElementById('copyToast');
    if (!toast) return;
    toast.textContent = message || 'Copied to clipboard!';
    toast.classList.add('show');
    window.setTimeout(function () {
      toast.classList.remove('show');
    }, 1600);
  }

  function copyText(text) {
    if (!text) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () {
        showToast('Copied to clipboard!');
      }).catch(function () {
        showToast('Copy failed');
      });
    }

    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Copied to clipboard!');
    } catch (e) {
      showToast('Copy failed');
    }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest ? e.target.closest('.copy-btn') : null;
    if (!btn) return;
    e.preventDefault();
    copyText(btn.getAttribute('data-copy') || '');
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
