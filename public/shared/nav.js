/* ══ SHARED NAV JS ═══════════════════════════════════════
   Hamburger toggle + dropdown behavior for all pages.
   Include at bottom of <body> on every page.
═══════════════════════════════════════════════════════ */
(function() {
  // Hamburger toggle
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile nav on link click
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }

  // Close dropdown on outside click (mobile)
  document.addEventListener('click', function(e) {
    if (navLinks && !e.target.closest('.nav')) {
      navLinks.classList.remove('open');
    }
  });
})();
