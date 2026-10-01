import { esc, sectionLabel } from './utils.js';

/** Optional FAQ (native <details>, no JavaScript). Shown only when `faq.enabled` is true. */
export function Faq({ faq }) {
  if (!faq?.enabled) return '';
  const items = faq.items
    .map(
      (item) => `
      <details class="group border-b border-line">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-heading text-xl tracking-[0.04em] text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-2xl [&::-webkit-details-marker]:hidden">
          ${esc(item.q)}
          <span class="relative h-4 w-4 shrink-0 text-muted" aria-hidden="true"><span class="absolute inset-x-0 top-1/2 h-px bg-current"></span><span class="absolute inset-y-0 left-1/2 w-px bg-current transition-transform duration-500 group-open:scale-y-0"></span></span>
        </summary>
        <p class="max-w-2xl pb-8 text-sm leading-relaxed text-muted">${esc(item.a)}</p>
      </details>`,
    )
    .join('');

  return `
<section id="faq" class="scroll-mt-16 border-t border-line bg-paper px-6 py-24 md:scroll-mt-20 md:py-32" aria-labelledby="faq-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[3rem_1fr] lg:gap-12">
    <div>${sectionLabel(faq.label)}</div>
    <div>
      <h2 id="faq-heading" class="font-heading text-4xl text-ink md:text-5xl">${esc(faq.heading)}</h2>
      <div class="mt-12 max-w-3xl border-t border-line">${items}</div>
    </div>
  </div>
</section>`;
}
