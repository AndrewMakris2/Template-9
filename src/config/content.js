/**
 * ============================================================================
 *  CONTENT — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every piece of text, every link, and every image path on the site comes
 *  from this file. Components never hardcode copy — they read it from here.
 *
 *  Everything below is PLACEHOLDER content. Each placeholder is marked with
 *  `// TODO: replace with real client content`. Search for "TODO" before
 *  launching a client site and make sure none are left.
 *
 *  Images:
 *    Placeholders point at picsum.photos. For a real client, drop their photos
 *    into /public/images and reference them here with root-relative paths,
 *    e.g.  src: '/images/hero.jpg'   (files in /public are served from "/").
 *    Every image needs meaningful `alt` text describing the photo.
 * ============================================================================
 */

export const content = {
  // --------------------------------------------------------------------------
  // SEO & SITE META — used for <title>, meta description and Open Graph tags
  // --------------------------------------------------------------------------
  site: {
    lang: 'en',
    // Full production URL, no trailing slash. Used for canonical + og:url.
    url: 'https://hairstylist-template-9.netlify.app', // Template 9 demo URL — TODO: replace with real client content
    title: 'Hana Mori — Precision Cuts, Head Spa & Japanese Straightening, Seattle', // TODO: replace with real client content
    description:
      'Seattle hairstylist offering precision cuts, restorative head spa rituals and Japanese straightening in a calm, minimalist studio. Book online.', // TODO: replace with real client content
    // Absolute URL recommended for social previews (1200×630 works best).
    ogImage: 'https://picsum.photos/seed/t9-og/1200/630', // TODO: replace with real client content
    ogImageAlt: 'Placeholder: sleek, glossy precision bob in soft daylight', // TODO: replace with real client content
  },

  // --------------------------------------------------------------------------
  // BUSINESS BASICS
  // --------------------------------------------------------------------------
  business: {
    name: 'Hana Mori', // TODO: replace with real client content — shown as the logo; its first letter is used on the seal stamp
    tagline: 'Quiet craft. Clean lines. Time to breathe.', // TODO: replace with real client content
    location: 'Seattle, Washington', // TODO: replace with real client content
  },

  // External booking platform (StyleSeat, Vagaro, Booksy, Schedulicity, …).
  // The site never takes bookings itself — every "Book" button links here.
  booking: {
    url: 'https://styleseat.com/PLACEHOLDER', // TODO: replace with real client content
    label: 'Book',
  },

  // --------------------------------------------------------------------------
  // NAVIGATION — `href` must match a section id below
  // --------------------------------------------------------------------------
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#gallery' },
      { label: 'Menu', href: '#services' },
      { label: 'Words', href: '#testimonials' },
      { label: 'Visit', href: '#contact' },
    ],
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    skipLinkLabel: 'Skip to content',
  },

  // --------------------------------------------------------------------------
  // HERO
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: 'Hair studio — Capitol Hill, Seattle', // TODO: replace with real client content
    heading: 'Hana Mori', // TODO: replace with real client content
    tagline: 'Quiet craft. Clean lines. Time to breathe.', // TODO: replace with real client content
    ctaLabel: 'Book an appointment',
    secondaryCtaLabel: 'See the work',
    secondaryCtaHref: '#gallery',
    image: {
      src: 'https://picsum.photos/seed/t9-hero/1200/1200', // TODO: replace with real client content
      alt: 'Placeholder: client with a sleek, glossy precision bob in soft window light', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // ABOUT
  // --------------------------------------------------------------------------
  about: {
    label: 'About',
    heading: 'Less, but done with care.', // TODO: replace with real client content
    // One string per paragraph.
    bio: [
      'I’m Hana. I trained in Tokyo and Osaka, where I learned that a great cut is quiet: it moves well, grows out gently and asks little of you each morning.', // TODO: replace with real client content
      'My studio is a small, calm room with one chair, soft light and no loud music. Appointments are unhurried, and every visit ends with a few minutes of stillness during the head spa.', // TODO: replace with real client content
    ],
    specialtiesLabel: 'Specialties',
    specialties: ['Precision cuts', 'Head spa ritual', 'Japanese straightening'], // TODO: replace with real client content
    image: {
      src: 'https://picsum.photos/seed/t9-about/800/1200', // TODO: replace with real client content
      alt: 'Placeholder: portrait of the stylist in her minimalist studio beside a paper screen', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // GALLERY — any number of images; 9+ recommended. `full` is the larger
  // version shown in the lightbox (falls back to `src` if omitted).
  // --------------------------------------------------------------------------
  gallery: {
    label: 'Work',
    heading: 'Recent work',
    lightboxCloseLabel: 'Close image',
    lightboxPrevLabel: 'Previous image',
    lightboxNextLabel: 'Next image',
    openImageLabel: 'Enlarge image', // prefixed to each image's alt for screen readers
    // TODO: replace with real client content — all 9 images below
    images: [
      { src: 'https://picsum.photos/seed/t9-g1/900/1125', full: 'https://picsum.photos/seed/t9-g1/1600/2000', alt: 'Placeholder: blunt, glass-like bob' },
      { src: 'https://picsum.photos/seed/t9-g2/900/900', full: 'https://picsum.photos/seed/t9-g2/1800/1800', alt: 'Placeholder: straight, silky long hair after Japanese straightening' },
      { src: 'https://picsum.photos/seed/t9-g3/900/1200', full: 'https://picsum.photos/seed/t9-g3/1500/2000', alt: 'Placeholder: soft layered cut with airy movement' },
      { src: 'https://picsum.photos/seed/t9-g4/1200/900', full: 'https://picsum.photos/seed/t9-g4/2000/1500', alt: 'Placeholder: head spa ritual with warm towels' },
      { src: 'https://picsum.photos/seed/t9-g5/900/1125', full: 'https://picsum.photos/seed/t9-g5/1600/2000', alt: 'Placeholder: precise short cut with a clean nape' },
      { src: 'https://picsum.photos/seed/t9-g6/900/900', full: 'https://picsum.photos/seed/t9-g6/1800/1800', alt: 'Placeholder: soft espresso colour with gloss' },
      { src: 'https://picsum.photos/seed/t9-g7/900/1200', full: 'https://picsum.photos/seed/t9-g7/1500/2000', alt: 'Placeholder: see-through fringe on a long cut' },
      { src: 'https://picsum.photos/seed/t9-g8/1200/900', full: 'https://picsum.photos/seed/t9-g8/2000/1500', alt: 'Placeholder: the calm studio with a single chair' },
      { src: 'https://picsum.photos/seed/t9-g9/900/1125', full: 'https://picsum.photos/seed/t9-g9/1600/2000', alt: 'Placeholder: chin-length cut with subtle texture' },
    ],
  },

  // --------------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------------
  services: {
    label: 'Menu',
    heading: 'Services',
    intro: 'Each service begins with a short consultation and a cup of tea. Prices are starting points.', // TODO: replace with real client content
    columnLabels: { service: 'Service', duration: 'Duration', price: 'Price' },
    // TODO: replace with real client content — all services below
    items: [
      { name: 'Precision cut', description: 'Consultation, wash, cut and style.', duration: '60 min', price: '$95' },
      { name: 'Precision bob', description: 'Blunt, glass-like bob with a detailed finish.', duration: '75 min', price: '$110' },
      { name: 'Head spa', description: 'Scalp cleanse, massage and steam.', duration: '60 min', price: '$120' },
      { name: 'Straightening', description: 'Japanese thermal straightening. Quoted at consultation.', duration: '4 hr', price: '$380+' },
      { name: 'Soft colour', description: 'Single-process colour with a gloss.', duration: '2 hr', price: '$140' },
      { name: 'Gloss', description: 'Shine and tone refresh between colours.', duration: '45 min', price: '$70' },
      { name: 'Fringe trim', description: 'A quick tidy between cuts.', duration: '15 min', price: '$20' },
      { name: 'Cut & spa', description: 'Precision cut with a full head spa.', duration: '2 hr', price: '$195' },
    ],
    note: 'Please arrive a few minutes early to settle in. Rescheduling needs 24 hours’ notice.', // TODO: replace with real client content
    ctaLabel: 'Book an appointment',
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: {
    label: 'Words',
    heading: 'From clients',
    // TODO: replace with real client content — all testimonials below
    items: [
      { quote: 'The most relaxing two hours of my month. My bob has never sat so perfectly.', name: 'Lena K.', detail: 'Precision bob' },
      { quote: 'After the head spa I felt like I’d slept for a week. Hana’s attention to detail is extraordinary.', name: 'Owen T.', detail: 'Head spa' },
      { quote: 'My hair is finally smooth without being flat. The straightening was worth every minute.', name: 'Priya N.', detail: 'Japanese straightening' },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTACT
  // --------------------------------------------------------------------------
  contact: {
    label: 'Visit',
    heading: 'Come and sit a while.',
    intro: 'Questions about a service or unsure where to begin? Leave a note and I’ll reply within two business days.', // TODO: replace with real client content
    email: 'hello@example.com', // TODO: replace with real client content
    phone: '(206) 555-0115', // TODO: replace with real client content
    address: '1520 Placeholder Ave, Suite 3, Seattle, WA 98122', // TODO: replace with real client content
    detailsLabels: { email: 'Email', phone: 'Phone', studio: 'Studio' },
    bookingHeading: 'Ready to book?',
    bookingLabel: 'Book',
    form: {
      name: 'contact', // Netlify form name — shows up in the Netlify dashboard
      fields: {
        name: { label: 'Name', placeholder: '' },
        email: { label: 'Email', placeholder: '' },
        phone: { label: 'Phone (optional)', placeholder: '' },
        message: { label: 'Message', placeholder: '' },
      },
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send',
      sendingLabel: 'Sending…',
      successMessage: 'Thank you. Your note has arrived, and I’ll reply soon.',
      errorMessage: 'Sorry, something went wrong. Please try again, or email me directly.',
    },
  },

  // --------------------------------------------------------------------------
  // SOCIAL LINKS — `platform` picks the icon. Supported: instagram, facebook,
  // tiktok, pinterest, youtube, x. The first `instagram` entry also appears
  // in the nav. Remove any the client doesn't use.
  // --------------------------------------------------------------------------
  social: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'pinterest', label: 'Pinterest', url: 'https://pinterest.com/PLACEHOLDER' }, // TODO: replace with real client content
  ],

  // --------------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------------
  footer: {
    hoursHeading: 'Hours',
    // TODO: replace with real client content
    hours: [
      { days: 'Wed – Sat', time: '10am – 6pm' },
      { days: 'Sunday', time: '11am – 4pm' },
      { days: 'Mon – Tue', time: 'Closed' },
    ],
    contactHeading: 'Studio',
    socialHeading: 'Follow',
    // "© {year} {copyrightName}. {copyrightSuffix}" — year is filled in at build time
    copyrightName: 'Hana Mori Hair', // TODO: replace with real client content
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
  },
};
