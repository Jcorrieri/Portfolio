import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  toggleBtn?.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      navMenu.classList.toggle('flex');
    });

    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
        navMenu.classList.remove('flex');
      });
    });
  }
});
