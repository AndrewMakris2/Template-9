/**
 * Counts taps on the booking, phone and email links as analytics events
 * ("book_tap", "call_tap", "email_tap"). Does nothing until an analytics ID
 * is set in src/config/content.js — the tracker scripts are only added then.
 */
function track(name) {
  window.umami?.track(name);
  window.gtag?.('event', name);
}

export function initAnalytics() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    if (link.dataset.track) track(link.dataset.track);
    else if (link.protocol === 'tel:') track('call_tap');
    else if (link.protocol === 'mailto:') track('email_tap');
  });
}
