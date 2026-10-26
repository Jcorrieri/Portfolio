import '../css/style.css';

// ── Hamburger menu ─────────────────────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('hidden') === false;
  navToggle.classList.toggle('open', isOpen);
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.add('hidden');
    navToggle.classList.remove('open');
  });
});

// ── Active nav link via IntersectionObserver ───────────────────────────────
const navLinks = document.querySelectorAll('.nav-link');
const navTargets = document.querySelectorAll('header[id], section[id]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

navTargets.forEach(target => observer.observe(target));
