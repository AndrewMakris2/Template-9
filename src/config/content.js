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
  // OPTIONAL SECTIONS — hidden until `enabled: true`. When you switch one on,
  // also add it to nav.links if it should appear in the menu, e.g.
  // { label: 'FAQ', href: '#faq' }. Events sits after Services; Policies and
  // FAQ sit just before Contact.
  // --------------------------------------------------------------------------
  events: {
    enabled: false,
    label: 'Bridal & events',
    heading: 'For the big days.',
    intro: 'Wedding mornings, engagements and special occasions, in the studio or on location.', // TODO: replace with real client content
    // TODO: replace with real client content — all packages below
    packages: [
      { name: 'Bridal trial', price: '$150', description: 'A full run-through of your wedding-day look, about 90 minutes.' },
      { name: 'Wedding day', price: 'from $250', description: 'Styling on the morning, on location or in the studio.' },
      { name: 'Bridal party', price: 'from $95 each', description: 'Bridesmaids, mothers and anyone else getting ready with you.' },
    ],
    note: 'Travel within 20 miles is included. Dates book up early, so enquire as soon as you can.', // TODO: replace with real client content
    ctaLabel: 'Enquire about your date', // links to the contact form
  },

  policies: {
    enabled: false,
    label: 'Policies',
    heading: 'Good to know before you book.',
    // TODO: replace with real client content — all policies below
    items: [
      { title: 'Deposits', text: 'A 25% deposit secures your appointment and comes off your final bill.' },
      { title: 'Cancellations', text: 'Please give at least 48 hours’ notice to move or cancel. Late cancellations lose the deposit.' },
      { title: 'Running late', text: 'Arriving more than 15 minutes late may mean a shorter service or a new booking.' },
      { title: 'Colour services', text: 'New colour clients need a patch test at least 48 hours before their first appointment.' },
    ],
  },

  faq: {
    enabled: false,
    label: 'FAQ',
    heading: 'Questions, answered.',
    // TODO: replace with real client content — all questions below
    items: [
      { q: 'Do you offer consultations?', a: 'Yes. Free 15-minute consultations, in person or by video. Book one online or send a message.' },
      { q: 'How should I arrive?', a: 'With clean, dry hair unless your service includes a wash, plus any inspiration photos you love.' },
      { q: 'How long will my appointment take?', a: 'Each service lists a typical time. Colour and big changes can run longer, so plan a little extra.' },
      { q: 'How can I pay?', a: 'All major cards, Apple Pay and cash.' },
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
      privacyNote: 'Your details are only used to reply to you.',
      privacyLabel: 'Privacy policy',
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
    privacyLabel: 'Privacy policy',
  },

  // --------------------------------------------------------------------------
  // PRIVACY POLICY — the /privacy/ page, linked under the contact form and in
  // the footer. {business}, {email} and {address} are filled in from the
  // details above, and the cookies paragraph follows the analytics settings.
  // Have the client read it and change anything that doesn't match how they work.
  // --------------------------------------------------------------------------
  privacy: {
    title: 'Privacy policy',
    updatedLabel: 'Last updated',
    updated: 'October 2, 2026', // TODO: replace with real client content — the date the site goes live
    backLabel: 'Back to the site',
    intro: 'This policy explains what {business} collects through this website and how it is used.',
    sections: [
      { heading: 'What we collect', paragraphs: ['When you use the contact form, we receive your name, email address, phone number if you give it, and your message. Nothing else is collected through this site.'] },
      { heading: 'Booking', paragraphs: ['Appointments are booked through a separate booking service. When you book there, that service’s own privacy policy applies.'] },
      { heading: 'How we use it', paragraphs: ['Only to reply to you and arrange your appointment. We never sell your details or add you to marketing emails without asking first.'] },
      { heading: 'Where it’s kept', paragraphs: ['Contact form messages are stored by our website host, Netlify, and sent to us by email. We delete them once they’re no longer needed.'] },
      { heading: 'Cookies and analytics', auto: 'cookies' },
      { heading: 'Your choices', paragraphs: ['You can ask to see, correct or delete the details we hold about you by emailing {email}.'] },
      { heading: 'Children', paragraphs: ['This website isn’t aimed at children under 13, and we don’t knowingly collect their details.'] },
      { heading: 'Contact', paragraphs: ['{business}, {address}. Email: {email}.'] },
    ],
    // The cookies section uses one of these, picked from `analytics` below.
    cookies: {
      none: 'This website doesn’t use cookies or any tracking.',
      umami: 'We count visits with Umami, a privacy-friendly analytics tool that doesn’t use cookies or collect personal details.',
      ga4: 'We use Google Analytics to see how visitors use this site. It sets cookies, which you can block in your browser settings.',
    },
  },

  // --------------------------------------------------------------------------
  // DEMO BANNER — a strip saying this is a demo with sample content. Only for
  // the public template demos: tools/new-client.sh deletes this block for real
  // clients (or delete it by hand).
  // --------------------------------------------------------------------------
  demo: {
    text: 'Demo website with sample content, designed by Andrew Makris.',
    linkLabel: 'See all 10 designs',
    url: 'https://andrew-makris.netlify.app/#designs',
  },

  // --------------------------------------------------------------------------
  // GOOGLE BUSINESS DETAILS — read by search engines, not shown on the page.
  // Name, phone, email, socials and booking link come from the sections above;
  // keep the address and hours here in step with Contact and the footer.
  // Hours use 24-hour times; leave out closed days.
  // --------------------------------------------------------------------------
  localBusiness: {
    type: 'HairSalon', // or 'BeautySalon' for wider beauty services
    priceRange: '$$', // $ – $$$$
    // TODO: replace with real client content
    address: { street: '1520 Placeholder Ave, Suite 3', city: 'Seattle', region: 'WA', postalCode: '98122', country: 'US' },
    // TODO: replace with real client content
    hours: [
      { days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '18:00' },
      { days: ['Sunday'], opens: '11:00', closes: '16:00' },
    ],
  },

  // --------------------------------------------------------------------------
  // ANALYTICS — counts visitors plus taps on Book, phone and email links.
  // Off until an ID is filled in. Use one of:
  //   Umami (umami.is, no cookies)  → the site's Website ID
  //   Google Analytics 4            → the Measurement ID, e.g. 'G-XXXXXXXXXX'
  // --------------------------------------------------------------------------
  analytics: {
    umamiWebsiteId: '',
    ga4MeasurementId: '',
  },
};
