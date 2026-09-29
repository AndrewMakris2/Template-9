# Hairstylist Portfolio — Template 9 (Zen)

A static, single-page portfolio site for an independent hairstylist. Built with
plain HTML + vanilla JS, Tailwind CSS v4 and Vite. There's no backend, CMS, or
booking system: every "Book" button links out to the stylist's existing
booking platform.

This template has its **own design** ("Zen"), inspired by Japanese wabi-sabi
minimalism: a vermilion seal stamp (hanko) built from the first letter of the
business name, section labels set vertically in the left margin, a circular
portrait inside an open ensō ring, a gallery scattered across the grid with
generous empty space, services on tall paper strips with vertical names,
testimonials "signed" with seal stamps and a round stamp-style book button.

All templates share the **same `content.js` format**, so a client's content
can be moved into any of the designs unchanged. Each template has its own
components.

---

## Run it locally

Requires Node 20+ (Netlify builds with Node 22, see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:5173 — reloads on any content/theme/component edit
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

---

## Where everything lives

```
src/
  config/
    theme.js        ← colors + font families (EDIT PER RESKIN)
    content.js      ← all text, links, services, testimonials, image paths (EDIT PER CLIENT)
  components/       ← one file per section; pure functions, no hardcoded copy/colors
  scripts/          ← browser JS: mobile menu, gallery lightbox, form submit
  styles/main.css   ← maps theme variables to Tailwind utilities (no values here)
  render.js         ← assembles the page from config + components at build time
public/images/      ← client photos go here
index.html          ← shell; head + body are injected at build time
vite.config.js      ← includes the small build-time render plugin
netlify.toml        ← Netlify build settings
```

**How it works:** at build time a small Vite plugin (in `vite.config.js`) runs
`src/render.js` in Node. That script reads `content.js` + `theme.js`, calls each
component, and writes the finished HTML into `index.html`. The deployed page is
plain static HTML, which matters for two reasons:

- Netlify only detects forms that are in the static HTML, so the contact form
  has to be rendered at build time.
- Search engines and social link previews see the real content and meta tags.

---

## Swap in a new client's content

1. Open **`src/config/content.js`**.
2. Replace every value marked `// TODO: replace with real client content`:
   business name, tagline, bio, specialties, services, testimonials, contact
   details, social links, hours, and **`booking.url`** (their StyleSeat /
   Vagaro / Booksy / Schedulicity link).
3. Set `site.url` to the real domain, and update `site.title` and
   `site.description`. These feed the `<title>`, meta description, canonical
   and Open Graph tags.
4. Add or remove services, testimonials, gallery images or social links freely.
   The components render however many entries there are.
5. When you're done, confirm no placeholders are left:

   ```bash
   grep -rn "TODO" src/config
   ```

### Images

1. Put the client's photos in **`public/images/`**, e.g. `hero.jpg`, `about.jpg`, `gallery-01.jpg`…
2. In `content.js`, point each image at its file with a root-relative path:
   ```js
   image: { src: '/images/hero.jpg', alt: 'Describe the photo' }
   ```
   For gallery images, `full` (optional) is a larger version for the lightbox.
3. Write real `alt` text for every image.
4. Set `site.ogImage` to a 1200×630 image for social previews. Use the full
   absolute URL, e.g. `https://theirdomain.com/images/og.jpg`.

Suggested sizes: hero ~2000px wide, about 900×1125 (4:5), gallery 800×1000
(4:5) with `full` at ~1600×2000. Compress JPGs before adding them (e.g. squoosh.app).

---

## Reskin the theme

Open **`src/config/theme.js`** and change the values. Keep the keys the same:

| Key | Used for |
| --- | --- |
| `paper` | main page background |
| `cream` | alternate section background (gallery, testimonials, form) |
| `ink` | primary text, dark surfaces (hero overlay, footer, solid buttons) |
| `muted` | secondary text |
| `line` | hairline borders and dividers |
| `accent` | the single accent color (labels, hovers, quote marks) |
| `onAccent` / `onInk` | text placed on accent / ink backgrounds |
| `fonts.heading` / `fonts.body` | CSS font-family stacks |
| `fonts.googleFontsUrl` | stylesheet that loads those fonts |

To change fonts, pick families at [fonts.google.com](https://fonts.google.com),
copy the embed URL into `googleFontsUrl`, and update `heading` and `body` to match.

Color changes flow automatically to the favicon (a monogram of the business
name's first letter) and the mobile browser `theme-color`.

**Reskin checklist:** edit `theme.js` → edit `content.js` → swap
`public/images/` → `npm run build`. If you ever find yourself editing a file in
`src/components/`, a value is hardcoded that belongs in config, so move it there.

---

## Deploy to Netlify

The site deploys automatically from GitHub:

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → GitHub**, then pick the repo.
3. Netlify reads `netlify.toml`, so the settings are already filled in:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Every push to `main` triggers a new build and deploy.

### Contact form

The form uses **Netlify Forms**: `data-netlify="true"` plus a honeypot field
(`bot-field`) for spam protection. After the first deploy:

1. In the Netlify dashboard, go to **Forms** and confirm a form named `contact`
   appears. You may need to enable form detection under
   **Site configuration → Forms** the first time.
2. Set up email notifications under **Forms → Form notifications** so the
   stylist receives submissions.

With JavaScript on, the form submits in the background and shows the inline
success message from `content.js`. Without JavaScript it posts normally and
Netlify shows its default thank-you page. Submissions only work on the deployed
Netlify site, not on `npm run dev`.

---

## Out of scope (by design)

- No booking system: always link out to the stylist's existing platform.
- No CMS/admin: content changes are made in `content.js` (via Claude Code).
- No e-commerce.
