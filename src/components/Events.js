import { esc, sectionLabel, buttonClasses } from './utils.js';

/** Optional bridal / events packages, quiet and spacious. Shown only when `events.enabled` is true. */
export function Events({ events }) {
  if (!events?.enabled) return '';
  const items = events.packages
    .map(
      (p) => `
      <li class="border-t border-line pt-6">
        <h3 class="font-heading text-2xl tracking-[0.04em] text-ink">${esc(p.name)}</h3>
        <p class="mt-2 font-heading text-xl text-accent">${esc(p.price)}</p>
        ${p.description ? `<p class="mt-4 text-sm leading-relaxed text-muted">${esc(p.description)}</p>` : ''}
      </li>`,
    )
    .join('');

  return `
<section id="events" class="scroll-mt-16 border-t border-line bg-paper px-6 py-24 md:scroll-mt-20 md:py-32" aria-labelledby="events-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[3rem_1fr] lg:gap-12">
    <div>${sectionLabel(events.label)}</div>
    <div>
      <div class="flex flex-wrap items-end justify-between gap-6">
        <h2 id="events-heading" class="font-heading text-4xl text-ink md:text-5xl">${esc(events.heading)}</h2>
        <p class="max-w-sm text-sm leading-relaxed text-muted">${esc(events.intro)}</p>
      </div>
      <ul class="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">${items}</ul>
      <div class="mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        ${events.note ? `<p class="max-w-xl text-sm leading-relaxed text-muted">${esc(events.note)}</p>` : '<span></span>'}
        <a href="#contact" class="shrink-0 ${buttonClasses.link}">${esc(events.ctaLabel)} <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>
</section>`;
}
