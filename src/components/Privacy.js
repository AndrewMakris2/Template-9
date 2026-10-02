import { esc } from './utils.js';

/** Fills {business}, {email} and {address} from the rest of content.js. */
const fill = (text, { business, contact }) =>
  String(text)
    .replace(/\{business\}/g, business.name)
    .replace(/\{email\}/g, contact.email)
    .replace(/\{address\}/g, contact.address);

/** The /privacy/ page: a plain, readable policy in this site's colours and fonts. */
export function Privacy(content) {
  const { business, privacy, analytics = {} } = content;
  const cookies = analytics.ga4MeasurementId
    ? privacy.cookies.ga4
    : analytics.umamiWebsiteId
      ? privacy.cookies.umami
      : privacy.cookies.none;
  const sections = privacy.sections
    .map((s) => {
      const paragraphs = s.auto === 'cookies' ? [cookies] : s.paragraphs;
      return `
    <section class="mt-10">
      <h2 class="font-heading text-2xl text-ink">${esc(s.heading)}</h2>
      ${paragraphs.map((p) => `<p class="mt-3 text-base leading-relaxed text-muted">${esc(fill(p, content))}</p>`).join('')}
    </section>`;
    })
    .join('');

  return `
<header class="border-b border-line bg-paper">
  <div class="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-5 py-5">
    <a href="/" class="font-heading text-xl text-ink">${esc(business.name)}</a>
    <a href="/" class="text-sm text-muted underline-offset-4 hover:underline">${esc(privacy.backLabel)}</a>
  </div>
</header>
<main id="main" class="bg-paper px-5 py-16 md:py-24">
  <article class="mx-auto max-w-3xl">
    <h1 class="font-heading text-4xl text-ink md:text-5xl">${esc(privacy.title)}</h1>
    <p class="mt-3 text-sm text-muted">${esc(privacy.updatedLabel)} ${esc(privacy.updated)}</p>
    <p class="mt-8 text-lg leading-relaxed text-ink">${esc(fill(privacy.intro, content))}</p>
    ${sections}
  </article>
</main>`;
}
