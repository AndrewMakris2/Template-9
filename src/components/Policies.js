import { esc, sectionLabel } from './utils.js';

/** Optional booking policies. Shown only when `policies.enabled` is true. */
export function Policies({ policies }) {
  if (!policies?.enabled) return '';
  const items = policies.items
    .map(
      (p) => `
      <div>
        <dt class="flex items-center gap-3 font-heading text-xl tracking-[0.04em] text-ink"><span class="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>${esc(p.title)}</dt>
        <dd class="mt-3 pl-[1.125rem] text-sm leading-relaxed text-muted">${esc(p.text)}</dd>
      </div>`,
    )
    .join('');

  return `
<section id="policies" class="scroll-mt-16 border-t border-line bg-cream px-6 py-24 md:scroll-mt-20 md:py-32" aria-labelledby="policies-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[3rem_1fr] lg:gap-12">
    <div>${sectionLabel(policies.label)}</div>
    <div>
      <h2 id="policies-heading" class="font-heading text-4xl text-ink md:text-5xl">${esc(policies.heading)}</h2>
      <dl class="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">${items}</dl>
    </div>
  </div>
</section>`;
}
