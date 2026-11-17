// Keep homepage navigation transparent over the hero and dark on scroll.
(() => {
  const nav = document.querySelector('.site-nav:not(.inner-nav)');
  if (!nav) return;
  const update = () => nav.classList.toggle('is-scrolled', window.scrollY > 60);
  update();
  window.addEventListener('scroll', update, { passive: true });
})();
