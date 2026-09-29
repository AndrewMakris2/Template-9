import { esc, external, hanko, initial, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Quiet top bar: seal-stamp logo, widely spaced links, a text-link "Book". */
export function Nav({ business, nav, booking }) {
  const links = nav.links
    .map(
      (l) =>
        `<li><a href="${esc(l.href)}" class="text-xs uppercase tracking-[0.3em] text-muted transition-colors hover:text-ink">${esc(l.label)}</a></li>`,
    )
    .join('');
  const mobileLinks = nav.links
    .map(
      (l) =>
        `<li class="border-b border-line"><a href="${esc(l.href)}" class="block py-5 font-heading text-3xl tracking-[0.1em] text-ink transition-colors hover:text-accent" data-menu-link>${esc(l.label)}</a></li>`,
    )
    .join('');

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink">${esc(nav.skipLinkLabel)}</a>
<header class="site-header sticky top-0 z-50 border-b border-line/0 transition-[border-color] duration-500" data-header>
  <div class="absolute inset-0 -z-10 bg-paper/90 backdrop-blur-md" aria-hidden="true"></div>
  <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20" aria-label="Primary">
    <a href="#top" class="flex items-center gap-3">
      ${hanko(initial(business.name), 'h-9 w-9 text-lg -rotate-3')}
      <span class="font-heading text-lg tracking-[0.2em] text-ink">${esc(business.name)}</span>
    </a>
    <div class="hidden items-center gap-12 md:flex">
      <ul class="flex items-center gap-10">${links}</ul>
      <a href="${esc(booking.url)}" ${external} class="${buttonClasses.link}">${esc(booking.label)} ${icon('arrowRight', 'h-3.5 w-3.5')}</a>
    </div>
    <button type="button" class="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(nav.menuOpenLabel)}" data-menu-toggle data-label-open="${esc(nav.menuOpenLabel)}" data-label-close="${esc(nav.menuCloseLabel)}">
      <span data-icon-open>${icon('menu', 'h-6 w-6')}</span>
      <span data-icon-close hidden>${icon('close', 'h-6 w-6')}</span>
    </button>
  </nav>
  <div id="mobile-menu" class="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper px-8 pb-12 pt-6 md:hidden" hidden data-menu>
    <ul class="border-t border-line">${mobileLinks}</ul>
    <a href="${esc(booking.url)}" ${external} class="mt-10 w-full ${buttonClasses.solid}">${esc(booking.label)}</a>
  </div>
</header>`;
}
