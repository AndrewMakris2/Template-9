import { esc, sectionLabel, hanko, initial } from './utils.js';

/** Three quiet quotes, each "signed" with a seal stamp of the client's initial. */
export function Testimonials({ testimonials }) {
  const items = testimonials.items
    .map(
      (t, i) => `
      <li class="${i % 3 === 1 ? 'md:mt-16' : ''}">
        <figure>
          <span class="block h-px w-10 bg-ink" aria-hidden="true"></span>
          <blockquote class="mt-8 font-heading text-xl leading-loose text-ink"><p>${esc(t.quote)}</p></blockquote>
          <figcaption class="mt-8 flex items-center gap-4">
            ${hanko(initial(t.name), 'h-11 w-11 text-xl -rotate-6')}
            <span>
              <span class="block text-sm tracking-[0.15em] text-ink">${esc(t.name)}</span>
              ${t.detail ? `<span class="block text-xs text-muted">${esc(t.detail)}</span>` : ''}
            </span>
          </figcaption>
        </figure>
      </li>`,
    )
    .join('');

  return `
<section id="testimonials" class="scroll-mt-16 border-t border-line bg-paper px-6 py-24 md:scroll-mt-20 md:py-32" aria-labelledby="testimonials-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[3rem_1fr] lg:gap-12">
    <div>${sectionLabel(testimonials.label)}</div>
    <div>
      <h2 id="testimonials-heading" class="font-heading text-4xl text-ink md:text-5xl">${esc(testimonials.heading)}</h2>
      <ul class="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">${items}</ul>
    </div>
  </div>
</section>`;
}
