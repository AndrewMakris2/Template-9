/**
 * Build-time renderer.
 *
 * Runs in Node (via the Vite plugin in vite.config.js), NOT in the browser.
 * It reads the two config files and turns them into static HTML that is
 * injected into index.html. Rendering at build time means:
 *   - Netlify can detect the contact form (it only sees forms in static HTML)
 *   - search engines / social previews see real content and meta tags
 *   - the page works before (and without) JavaScript
 */
import { content } from './config/content.js';
import { theme } from './config/theme.js';
import { esc } from './components/utils.js';
import { Nav } from './components/Nav.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Gallery } from './components/Gallery.js';
import { Services } from './components/Services.js';
import { Testimonials } from './components/Testimonials.js';
import { Events } from './components/Events.js';
import { Policies } from './components/Policies.js';
import { Faq } from './components/Faq.js';
import { Privacy } from './components/Privacy.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

/** Convert camelCase theme keys to kebab-case CSS variable names. */
const kebab = (s) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

/** theme.js → CSS custom properties consumed by src/styles/main.css */
function themeStyles() {
  const colors = Object.entries(theme.colors).map(([k, v]) => `--theme-${kebab(k)}:${v};`);
  const fonts = [`--theme-font-heading:${theme.fonts.heading};`, `--theme-font-body:${theme.fonts.body};`];
  return `<style>:root{${[...colors, ...fonts].join('')}}</style>`;
}

/** Monogram favicon from the business name's first letter, in theme colors. */
function favicon() {
  const letter = esc(content.business.name.trim().charAt(0).toUpperCase());
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="${theme.colors.ink}"/><text x="16" y="22.5" font-family="Georgia,serif" font-size="19" fill="${theme.colors.onInk}" text-anchor="middle">${letter}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Business details for search engines (schema.org), so Google can show the
 * address, hours and booking link in local results. Built from content.js.
 */
function localBusinessSchema(url) {
  const { site, business, contact, booking, social, localBusiness: biz } = content;
  if (!biz) return '';
  const data = {
    '@context': 'https://schema.org',
    '@type': biz.type,
    name: business.name,
    description: site.description,
    url: url || undefined,
    image: site.ogImage || undefined,
    telephone: contact.phone,
    email: contact.email,
    priceRange: biz.priceRange || undefined,
    address: biz.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: biz.address.street,
          addressLocality: biz.address.city,
          addressRegion: biz.address.region,
          postalCode: biz.address.postalCode,
          addressCountry: biz.address.country,
        }
      : undefined,
    openingHoursSpecification: (biz.hours || []).map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: (social || []).map((s) => s.url),
    potentialAction: booking.url ? { '@type': 'ReserveAction', target: booking.url } : undefined,
  };
  // `<` is escaped so no value can close the script tag early.
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

/** Analytics tags — only output when an ID is set in content.js (see `analytics`). */
function analyticsTags() {
  const { umamiWebsiteId, ga4MeasurementId } = content.analytics || {};
  const gaId = ga4MeasurementId && JSON.stringify(ga4MeasurementId).replace(/</g, '\\u003c');
  return [
    umamiWebsiteId && `<script defer src="https://cloud.umami.is/script.js" data-website-id="${esc(umamiWebsiteId)}"></script>`,
    gaId && `<script async src="https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId)}"></script>`,
    gaId && `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${gaId});</script>`,
  ];
}

/** "Demo website" strip for the template demos (content.demo is deleted for real clients). */
function demoBanner({ fixed = false } = {}) {
  const { demo } = content;
  if (!demo) return '';
  const strip = `${esc(demo.text)} <a href="${esc(demo.url)}" class="font-medium underline underline-offset-4">${esc(demo.linkLabel)}</a>`;
  return fixed
    ? `<div class="h-10" aria-hidden="true"></div><div class="fixed inset-x-0 bottom-0 z-40 bg-ink px-4 py-2.5 text-center text-xs text-on-ink">${strip}</div>`
    : `<div class="bg-ink px-4 py-2.5 text-center text-xs text-on-ink">${strip}</div>`;
}

/** Mark every booking link so analytics can count "Book" taps (see src/scripts/analytics.js). */
function tagBookingLinks(html) {
  const href = `href="${esc(content.booking.url)}"`;
  return html.replaceAll(href, `${href} data-track="book_tap"`);
}

export function renderHead() {
  const { site, business } = content;
  const canonical = site.url ? `${site.url.replace(/\/$/, '')}/` : '';
  return [
    `<title>${esc(site.title)}</title>`,
    `<meta name="description" content="${esc(site.description)}" />`,
    `<link rel="icon" href="${favicon()}" type="image/svg+xml" />`,
    `<meta name="theme-color" content="${esc(theme.colors.paper)}" />`,
    canonical && `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(business.name)}" />`,
    `<meta property="og:title" content="${esc(site.title)}" />`,
    `<meta property="og:description" content="${esc(site.description)}" />`,
    canonical && `<meta property="og:url" content="${esc(canonical)}" />`,
    site.ogImage && `<meta property="og:image" content="${esc(site.ogImage)}" />`,
    site.ogImageAlt && `<meta property="og:image:alt" content="${esc(site.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(site.title)}" />`,
    `<meta name="twitter:description" content="${esc(site.description)}" />`,
    site.ogImage && `<meta name="twitter:image" content="${esc(site.ogImage)}" />`,
    `<link rel="preconnect" href="https://fonts.googleapis.com" />`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
    `<link rel="stylesheet" href="${esc(theme.fonts.googleFontsUrl)}" />`,
    themeStyles(),
    localBusinessSchema(canonical),
    ...analyticsTags(),
  ]
    .filter(Boolean)
    .join('\n    ');
}

export function renderBody() {
  return tagBookingLinks([
    Nav(content),
    demoBanner(),
    `<main id="main">`,
    Hero(content),
    About(content),
    Gallery(content),
    Services(content),
    Events(content),
    Testimonials(content),
    Policies(content),
    Faq(content),
    Contact(content),
    `</main>`,
    Footer(content),
  ].join('\n'));
}

/** Head for the /privacy/ page. */
export function renderPrivacyHead() {
  const { site, business, privacy } = content;
  const url = site.url ? `${site.url.replace(/\/$/, '')}/privacy/` : '';
  return [
    `<title>${esc(privacy.title)} | ${esc(business.name)}</title>`,
    `<meta name="description" content="${esc(`${privacy.title} for ${business.name}.`)}" />`,
    `<link rel="icon" href="${favicon()}" type="image/svg+xml" />`,
    `<meta name="theme-color" content="${esc(theme.colors.paper)}" />`,
    url && `<link rel="canonical" href="${esc(url)}" />`,
    `<link rel="preconnect" href="https://fonts.googleapis.com" />`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
    `<link rel="stylesheet" href="${esc(theme.fonts.googleFontsUrl)}" />`,
    themeStyles(),
    ...analyticsTags(),
  ]
    .filter(Boolean)
    .join('\n    ');
}

export function renderPrivacyBody() {
  return Privacy(content);
}

export const lang = content.site.lang || 'en';
