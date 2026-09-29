import { esc, external, hanko, initial, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Text column with a vertical eyebrow, beside a circular portrait inside an open ensō ring and a seal stamp. */
export function Hero({ hero, booking, business }) {
  return `
<section id="top" class="bg-paper px-6 pb-20 pt-10 md:pb-28 md:pt-16" aria-labelledby="hero-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
    <div class="flex gap-10 lg:col-span-5">
      <p class="hidden text-xs uppercase tracking-[0.4em] text-muted lg:block lg:[writing-mode:vertical-rl]">${esc(hero.eyebrow)}</p>
      <div>
        <p class="text-xs uppercase tracking-[0.35em] text-muted lg:hidden">${esc(hero.eyebrow)}</p>
        <h1 id="hero-heading" class="mt-6 font-heading text-6xl font-medium leading-[1.05] text-ink md:text-7xl lg:mt-0 xl:text-8xl">${esc(hero.heading)}</h1>
        <span class="mt-10 block h-px w-16 bg-accent" aria-hidden="true"></span>
        <p class="mt-8 max-w-sm font-heading text-xl leading-relaxed text-muted md:text-2xl">${esc(hero.tagline)}</p>
        <div class="mt-12 flex flex-wrap items-center gap-8">
          <a href="${esc(booking.url)}" ${external} class="${buttonClasses.solid}">${esc(hero.ctaLabel)}</a>
          <a href="${esc(hero.secondaryCtaHref)}" class="${buttonClasses.link}">${esc(hero.secondaryCtaLabel)} ${icon('arrowRight', 'h-3.5 w-3.5')}</a>
        </div>
      </div>
    </div>
    <div class="lg:col-span-6 lg:col-start-7">
      <div class="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
        <div class="absolute inset-0 -translate-x-5 translate-y-5 rounded-full bg-cream" aria-hidden="true"></div>
        <div class="relative h-full w-full overflow-hidden rounded-full bg-cream">
          <img src="${esc(hero.image.src)}" alt="${esc(hero.image.alt)}" class="h-full w-full object-cover" fetchpriority="high" decoding="async" />
        </div>
        <svg class="pointer-events-none absolute -inset-5 h-[calc(100%+2.5rem)] w-[calc(100%+2.5rem)] text-ink/40" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" stroke-width="0.35" stroke-linecap="round" stroke-dasharray="268 40" transform="rotate(-70 50 50)" /></svg>
        <span class="absolute bottom-4 right-4 md:bottom-8 md:right-2">${hanko(initial(business.name), 'h-16 w-16 text-3xl -rotate-6 md:h-20 md:w-20 md:text-4xl')}</span>
      </div>
    </div>
  </div>
</section>`;
}
