/**
 * Shared helpers for components. Structural only — no content, no colors.
 */

/** Escape a value for safe use in HTML text or attribute values. */
export function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener noreferrer"';

/**
 * Section label: a small vermilion dot and spaced caps. On large screens it is
 * set vertically in the left margin of each section.
 */
export function sectionLabel(text) {
  return `<p class="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted lg:sticky lg:top-28 lg:[writing-mode:vertical-rl]"><span class="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>${esc(text)}</p>`;
}

/** Vermilion seal stamp (hanko) showing a single letter. Decorative. */
export function hanko(letter, cls = 'h-10 w-10 text-xl') {
  return `<span class="inline-grid shrink-0 place-items-center rounded-[3px] bg-accent font-heading text-on-accent ${cls}" aria-hidden="true">${esc(letter)}</span>`;
}

/** First letter of a name, uppercased. */
export const initial = (name) => String(name).trim().charAt(0).toUpperCase();

/** Turn a display phone number into a tel: href. */
export function telHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

/** Shared button styles — restrained: a solid ink button and an underlined text link. */
export const buttonClasses = {
  solid:
    'inline-flex items-center justify-center gap-3 bg-ink px-8 py-3.5 text-sm tracking-[0.15em] text-on-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  link:
    'inline-flex items-center gap-3 border-b border-ink pb-1 text-sm tracking-[0.15em] text-ink transition-all duration-300 hover:gap-5 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
};
