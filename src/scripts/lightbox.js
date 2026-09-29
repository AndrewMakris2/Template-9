/** Gallery lightbox using the native <dialog> element. */
export function initLightbox() {
  const dialog = document.querySelector('[data-lightbox]');
  const items = [...document.querySelectorAll('[data-lightbox-item]')];
  if (!dialog || !items.length || typeof dialog.showModal !== 'function') return;

  const img = dialog.querySelector('[data-lightbox-img]');
  const counter = dialog.querySelector('[data-lightbox-counter]');
  let index = 0;
  let trigger = null;

  const show = (i) => {
    index = (i + items.length) % items.length;
    const item = items[index];
    const thumb = item.querySelector('img');
    img.style.opacity = '0';
    img.onload = () => (img.style.opacity = '1');
    img.src = item.dataset.full;
    img.alt = thumb?.alt ?? '';
    counter.textContent = `${index + 1} / ${items.length}`;
  };

  items.forEach((item, i) =>
    item.addEventListener('click', () => {
      trigger = item;
      show(i);
      dialog.showModal();
      document.body.classList.add('menu-open');
    }),
  );

  dialog.querySelector('[data-lightbox-close]').addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-lightbox-prev]').addEventListener('click', () => show(index - 1));
  dialog.querySelector('[data-lightbox-next]').addEventListener('click', () => show(index + 1));
  // Click outside the image closes.
  dialog.querySelector('[data-lightbox-backdrop]').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) dialog.close();
  });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  // Basic swipe support on touch devices.
  let startX = null;
  dialog.addEventListener('touchstart', (e) => (startX = e.touches[0].clientX), { passive: true });
  dialog.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    startX = null;
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('menu-open');
    img.removeAttribute('src');
    trigger?.focus();
  });
}
