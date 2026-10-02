import { esc, external, hanko, initial, telHref } from './utils.js';
import { icon } from './icons.js';

/** Centred footer: seal stamp, spaced name, three small columns. */
export function Footer({ business, contact, social, footer }) {
  const year = new Date().getFullYear();
  const hours = footer.hours.map((h) => `<div class="flex justify-center gap-3"><dt>${esc(h.days)}</dt><dd class="text-ink">${esc(h.time)}</dd></div>`).join('');
  const socials = social
    .map(
      (s) =>
        `<li><a href="${esc(s.url)}" ${external} class="inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-accent" aria-label="${esc(s.label)}">${icon(s.platform, 'h-[18px] w-[18px]')}</a></li>`,
    )
    .join('');
  const heading = 'text-xs uppercase tracking-[0.3em] text-ink';

  return `
<footer class="border-t border-line bg-cream px-6 py-20 text-center text-sm text-muted">
  <div class="mx-auto max-w-5xl">
    <a href="#top" class="inline-flex flex-col items-center gap-5">
      ${hanko(initial(business.name), 'h-14 w-14 text-2xl -rotate-3')}
      <span class="font-heading text-xl tracking-[0.3em] text-ink">${esc(business.name)}</span>
    </a>
    <p class="mt-3">${esc(business.tagline)}</p>
    <span class="mx-auto mt-12 block h-px w-12 bg-ink/30" aria-hidden="true"></span>
    <div class="mt-12 grid gap-10 md:grid-cols-3">
      <div>
        <h2 class="${heading}">${esc(footer.hoursHeading)}</h2>
        <dl class="mt-4 space-y-1">${hours}</dl>
      </div>
      <div>
        <h2 class="${heading}">${esc(footer.contactHeading)}</h2>
        <address class="mt-4 space-y-1 not-italic">
          <p>${esc(contact.address)}</p>
          <p><a href="mailto:${esc(contact.email)}" class="text-ink hover:text-accent">${esc(contact.email)}</a></p>
          <p><a href="${esc(telHref(contact.phone))}" class="text-ink hover:text-accent">${esc(contact.phone)}</a></p>
        </address>
      </div>
      <div>
        <h2 class="${heading}">${esc(footer.socialHeading)}</h2>
        <ul class="mt-3 flex justify-center gap-2">${socials}</ul>
      </div>
    </div>
    <div class="mt-16 flex flex-col items-center gap-3 border-t border-line pt-6 text-xs tracking-[0.15em] sm:flex-row sm:justify-between">
      <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)} <a href="/privacy/" class="underline underline-offset-4">${esc(footer.privacyLabel)}</a></p>
      <a href="#top" class="inline-flex items-center gap-2 text-ink hover:text-accent">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-3.5 w-3.5')}</a>
    </div>
  </div>
</footer>`;
}
