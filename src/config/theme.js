/**
 * ============================================================================
 *  THEME — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every color and font family on the site comes from this file, and nothing
 *  else lives here. Components use the Tailwind utilities generated from
 *  these tokens:
 *
 *    colors.paper   → bg-paper          (washi-paper page)
 *    colors.cream   → bg-cream          (quiet alternate surface)
 *    colors.ink     → text-ink / bg-ink (sumi ink: text, lines, dark surfaces)
 *    colors.muted   → text-muted        (secondary text)
 *    colors.line    → border-line       (hairlines)
 *    colors.accent  → bg-accent         (vermilion: the seal stamp, highlights)
 *    colors.onAccent/onInk              (text on accent / ink surfaces)
 *
 *    fonts.heading  → font-heading      (Mincho serif headings)
 *    fonts.body     → font-body         (clean gothic sans body)
 *
 *  If you change font families, update `fonts.googleFontsUrl` to load them.
 * ============================================================================
 */

export const theme = {
  // Template 9 — Zen / wabi-sabi. All text/background pairs meet WCAG AA.
  colors: {
    paper: '#F4F1EA', // washi
    cream: '#E9E4D8',
    ink: '#1F1D1A', // sumi ink
    muted: '#6A655C',
    line: '#D6CFC0',
    accent: '#A8321F', // vermilion seal — TODO: pick the client's accent color
    onAccent: '#FFFFFF',
    onInk: '#F4F1EA',
  },

  fonts: {
    heading: "'Shippori Mincho', 'Hiragino Mincho ProN', 'Yu Mincho', Georgia, serif",
    body: "'Zen Kaku Gothic New', 'Hiragino Sans', ui-sans-serif, system-ui, -apple-system, sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Zen+Kaku+Gothic+New:wght@300;400;500&display=swap',
  },
};
