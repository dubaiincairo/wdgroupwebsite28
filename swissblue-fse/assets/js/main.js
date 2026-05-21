/**
 * SwissBlue FSE — front-end JavaScript entry.
 *
 * Compiled by Vite to dist/js/main.min.js. Interactive block behaviour
 * (sticky price bar §8.8, gallery carousel, floating buttons §8.9) is added
 * in Phase 3 and later.
 *
 * @since 0.1.0
 */
document.addEventListener('DOMContentLoaded', () => {
  // Booking sticky bar (DESIGN_SYSTEM §8.8) — toggle the price breakdown panel.
  document.querySelectorAll('.swissblue-sticky-bar__toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const bar = toggle.closest('.swissblue-sticky-bar');
      const panel = bar && bar.querySelector('.swissblue-sticky-bar__panel');
      if (!panel) {
        return;
      }
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });
});
