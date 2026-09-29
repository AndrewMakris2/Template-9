import { esc, external, sectionLabel, buttonClasses } from './utils.js';

/** Services on tall paper strips (tanzaku) with the names written vertically. */
export function Services({ services, booking }) {
  const strips = services.items
    .map(
      (s) => `
      <li>
        <article class="flex h-full flex-col border border-line bg-paper px-3 pb-5 pt-5 text-center transition-transform duration-500 hover:-translate-y-2">
          <span class="mx-auto h-2 w-2 rounded-full border border-ink/40" aria-hidden="true"></span>
          <h3 class="mx-auto mt-5 h-48 font-heading text-xl tracking-[0.12em] text-ink [writing-mode:vertical-rl]">${esc(s.name)}</h3>
          ${s.description ? `<p class="mt-4 flex-1 text-xs leading-relaxed text-muted">${esc(s.description)}</p>` : '<span class="flex-1"></span>'}
          <p class="mt-4 border-t border-line pt-3 text-[0.68rem] uppercase tracking-[0.2em] text-muted"><span class="sr-only">${esc(services.columnLabels.duration)}: </span>${esc(s.duration)}</p>
          <p class="mt-1 font-heading text-xl text-ink"><span class="sr-only">${esc(services.columnLabels.price)}: </span>${esc(s.price)}</p>
        </article>
      </li>`,
    )
    .join('');

  return `
<section id="services" class="scroll-mt-16 border-t border-line bg-cream px-6 py-24 md:scroll-mt-20 md:py-32" aria-labelledby="services-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[3rem_1fr] lg:gap-12">
    <div>${sectionLabel(services.label)}</div>
    <div>
      <div class="flex flex-wrap items-end justify-between gap-6">
        <h2 id="services-heading" class="font-heading text-4xl text-ink md:text-5xl">${esc(services.heading)}</h2>
        <p class="max-w-sm text-sm leading-relaxed text-muted">${esc(services.intro)}</p>
      </div>
      <ul class="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">${strips}</ul>
      <div class="mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        ${services.note ? `<p class="max-w-xl text-sm leading-relaxed text-muted">${esc(services.note)}</p>` : '<span></span>'}
        <a href="${esc(booking.url)}" ${external} class="shrink-0 ${buttonClasses.solid}">${esc(services.ctaLabel)}</a>
      </div>
    </div>
  </div>
</section>`;
}
