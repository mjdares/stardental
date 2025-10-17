const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const yearEl = document.getElementById('year');

const setNavState = isOpen => {
  if (!(navToggle && nav)) return;
  nav.classList.toggle('open', isOpen);
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
};

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const willOpen = !nav.classList.contains('open');
    setNavState(willOpen);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setNavState(false));
  });
}

if (navToggle) {
  navToggle.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navToggle.click();
    }
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
