import { esc, sectionLabel } from './utils.js';

/** Vertical margin label; a tall framed portrait and an unhurried story with a ruled specialties list. */
export function About({ about }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  const tags = about.specialties
    .map(
      (t, i) =>
        `<li class="flex items-baseline justify-between py-4"><span class="font-heading text-xl text-ink">${esc(t)}</span><span class="text-xs tabular-nums text-muted" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span></li>`,
    )
    .join('');

  return `
<section id="about" class="scroll-mt-16 border-t border-line bg-paper px-6 py-24 md:scroll-mt-20 md:py-32" aria-labelledby="about-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[3rem_1fr] lg:gap-12">
    <div>${sectionLabel(about.label)}</div>
    <div class="grid grid-cols-1 items-start gap-16 md:grid-cols-12">
      <figure class="relative mx-auto w-full max-w-xs md:col-span-5 md:max-w-none">
        <div class="absolute inset-0 translate-x-4 translate-y-4 border border-ink/25" aria-hidden="true"></div>
        <div class="relative aspect-[2/3] overflow-hidden bg-cream">
          <img src="${esc(about.image.src)}" alt="${esc(about.image.alt)}" class="h-full w-full object-cover" loading="lazy" decoding="async" width="800" height="1200" />
        </div>
      </figure>
      <div class="md:col-span-6 md:col-start-7 md:pt-20">
        <h2 id="about-heading" class="font-heading text-4xl leading-snug text-ink md:text-5xl">${esc(about.heading)}</h2>
        <div class="mt-10 space-y-6 text-base leading-loose text-muted">${bio}</div>
        <h3 class="mt-16 text-xs uppercase tracking-[0.3em] text-muted">${esc(about.specialtiesLabel)}</h3>
        <ul class="mt-4 divide-y divide-line border-y border-line">${tags}</ul>
      </div>
    </div>
  </div>
</section>`;
}
