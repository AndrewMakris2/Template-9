import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

// A repeating four-step placement that scatters images across a 12-column grid
// with generous empty space, like stones in a garden.
const place = [
  'md:col-start-1 md:col-span-5',
  'mt-14 md:col-start-7 md:col-span-4 md:mt-28',
  'md:col-start-3 md:col-span-4',
  'mt-14 md:col-start-8 md:col-span-5 md:mt-16',
];
const shape = ['aspect-[4/5]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/3]'];

export function Gallery({ gallery }) {
  const items = gallery.images
    .map(
      (img, i) => `
      <li class="${place[i % place.length]}">
        <button type="button" class="group block w-full overflow-hidden bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${shape[i % shape.length]}" data-lightbox-item="${i}" data-full="${esc(img.full || img.src)}" aria-label="${esc(`${gallery.openImageLabel}: ${img.alt}`)}">
          <img src="${esc(img.src)}" alt="${esc(img.alt)}" class="h-full w-full object-cover saturate-[0.8] transition duration-1000 ease-out group-hover:scale-[1.02] group-hover:saturate-100" loading="lazy" decoding="async" />
        </button>
        <p class="mt-3 font-heading text-sm text-muted" aria-hidden="true">${String(i + 1).padStart(2, '0')}</p>
      </li>`,
    )
    .join('');

  return `
<section id="gallery" class="scroll-mt-16 border-t border-line bg-paper px-6 py-24 md:scroll-mt-20 md:py-32" aria-labelledby="gallery-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[3rem_1fr] lg:gap-12">
    <div>${sectionLabel(gallery.label)}</div>
    <div>
      <h2 id="gallery-heading" class="font-heading text-4xl text-ink md:text-5xl">${esc(gallery.heading)}</h2>
      <ul class="mt-16 grid grid-cols-2 gap-x-6 md:grid-cols-12 md:gap-x-8 md:gap-y-20">${items}</ul>
    </div>
  </div>

  <dialog class="lightbox m-0 h-full max-h-none w-full max-w-none bg-paper/95 p-0 backdrop:bg-transparent" aria-label="${esc(gallery.heading)}" data-lightbox>
    <div class="flex h-full w-full items-center justify-center p-6 md:p-20" data-lightbox-backdrop>
      <img src="" alt="" class="max-h-full max-w-full object-contain" data-lightbox-img />
    </div>
    <button type="button" class="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center text-ink hover:text-accent" aria-label="${esc(gallery.lightboxCloseLabel)}" data-lightbox-close>${icon('close', 'h-6 w-6')}</button>
    <button type="button" class="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ink hover:text-accent md:left-8" aria-label="${esc(gallery.lightboxPrevLabel)}" data-lightbox-prev>${icon('chevronLeft', 'h-7 w-7')}</button>
    <button type="button" class="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ink hover:text-accent md:right-8" aria-label="${esc(gallery.lightboxNextLabel)}" data-lightbox-next>${icon('chevronRight', 'h-7 w-7')}</button>
    <p class="absolute bottom-5 left-1/2 -translate-x-1/2 font-heading text-sm tracking-[0.2em] text-muted" aria-live="polite" data-lightbox-counter></p>
  </dialog>
</section>`;
}
