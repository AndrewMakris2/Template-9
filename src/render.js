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
  ]
    .filter(Boolean)
    .join('\n    ');
}

export function renderBody() {
  return [
    Nav(content),
    `<main id="main">`,
    Hero(content),
    About(content),
    Gallery(content),
    Services(content),
    Testimonials(content),
    Contact(content),
    `</main>`,
    Footer(content),
  ].join('\n');
}

export const lang = content.site.lang || 'en';
