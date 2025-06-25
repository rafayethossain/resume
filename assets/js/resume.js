// Custom JS extracted from index.html

// Smooth scroll and active nav
if (document.querySelectorAll('.sidebar .nav a').length) {
  document.querySelectorAll('.sidebar .nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash) {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 24,
            behavior: 'smooth'
          });
          document.querySelectorAll('.sidebar .nav a').forEach(a => a.classList.remove('active'));
          this.classList.add('active');
        }
      }
    });
  });
}
// Progress bar accessibility
window.addEventListener('scroll', function() {
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  const bar = document.getElementById('progressBar');
  if (bar) {
    bar.style.width = progress + '%';
    bar.setAttribute('aria-valuenow', Math.round(progress));
  }
});
// Hamburger menu for mobile
function toggleSidebarNav() {
  const nav = document.querySelector('.sidebar .nav');
  if (nav) nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
function handleResize() {
  const nav = document.querySelector('.sidebar .nav');
  const hamburger = document.querySelector('.hamburger');
  if (window.innerWidth <= 900) {
    if (nav) nav.style.display = 'none';
    if (hamburger) hamburger.style.display = 'block';
  } else {
    if (nav) nav.style.display = 'flex';
    if (hamburger) hamburger.style.display = 'none';
  }
}
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);
// Section fade-in animation on scroll
function revealSections() {
  document.querySelectorAll('.section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);
// Accessibility: Add skip to main content link
(function() {
  var skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  skipLink.setAttribute('tabindex', '0');
  skipLink.style.position = 'absolute';
  skipLink.style.left = '-999px';
  skipLink.style.top = '10px';
  skipLink.style.background = '#fff';
  skipLink.style.color = '#a084ca';
  skipLink.style.padding = '8px 16px';
  skipLink.style.borderRadius = '6px';
  skipLink.style.zIndex = '10000';
  skipLink.style.transition = 'left 0.2s';
  skipLink.addEventListener('focus', function() {
    this.style.left = '16px';
  });
  skipLink.addEventListener('blur', function() {
    this.style.left = '-999px';
  });
  document.body.insertBefore(skipLink, document.body.firstChild);
  var main = document.querySelector('main');
  if (main) main.id = 'main-content';
})();
