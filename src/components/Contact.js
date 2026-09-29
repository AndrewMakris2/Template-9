import { esc, external, sectionLabel, buttonClasses, telHref } from './utils.js';

const inputClasses =
  'mt-2 block w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-0';
const labelClasses = 'text-xs uppercase tracking-[0.3em] text-muted';

/** Underline form, a short directory, and a round vermilion "stamp" to book. */
export function Contact({ contact, booking }) {
  const { form } = contact;
  const f = form.fields;

  return `
<section id="contact" class="scroll-mt-16 border-t border-line bg-paper px-6 py-24 md:scroll-mt-20 md:py-32" aria-labelledby="contact-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[3rem_1fr] lg:gap-12">
    <div>${sectionLabel(contact.label)}</div>
    <div>
      <h2 id="contact-heading" class="font-heading text-4xl leading-snug text-ink md:text-6xl">${esc(contact.heading)}</h2>
      <p class="mt-6 max-w-lg text-base leading-loose text-muted">${esc(contact.intro)}</p>
      <div class="mt-16 grid grid-cols-1 gap-16 md:grid-cols-12">
        <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="space-y-8 md:col-span-7" data-contact-form>
          <input type="hidden" name="form-name" value="${esc(form.name)}" />
          <p class="hidden" aria-hidden="true">
            <label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
          </p>
          <div class="grid gap-8 sm:grid-cols-2">
            <div>
              <label for="contact-name" class="${labelClasses}">${esc(f.name.label)}</label>
              <input id="contact-name" name="name" type="text" autocomplete="name" required class="${inputClasses}" placeholder="${esc(f.name.placeholder)}" />
            </div>
            <div>
              <label for="contact-email" class="${labelClasses}">${esc(f.email.label)}</label>
              <input id="contact-email" name="email" type="email" autocomplete="email" required class="${inputClasses}" placeholder="${esc(f.email.placeholder)}" />
            </div>
          </div>
          <div>
            <label for="contact-phone" class="${labelClasses}">${esc(f.phone.label)}</label>
            <input id="contact-phone" name="phone" type="tel" autocomplete="tel" class="${inputClasses}" placeholder="${esc(f.phone.placeholder)}" />
          </div>
          <div>
            <label for="contact-message" class="${labelClasses}">${esc(f.message.label)}</label>
            <textarea id="contact-message" name="message" rows="4" required class="${inputClasses} resize-y" placeholder="${esc(f.message.placeholder)}"></textarea>
          </div>
          <button type="submit" class="${buttonClasses.solid} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)}</button>
          <p class="hidden border-l border-accent pl-4 text-base text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
          <p class="hidden border-l border-accent pl-4 text-base text-accent" role="alert" data-form-error>${esc(form.errorMessage)}</p>
        </form>
        <aside class="md:col-span-4 md:col-start-9">
          <dl class="divide-y divide-line border-y border-line">
            <div class="py-5"><dt class="${labelClasses}">${esc(contact.detailsLabels.email)}</dt><dd class="mt-2"><a href="mailto:${esc(contact.email)}" class="font-heading text-lg text-ink hover:text-accent">${esc(contact.email)}</a></dd></div>
            <div class="py-5"><dt class="${labelClasses}">${esc(contact.detailsLabels.phone)}</dt><dd class="mt-2"><a href="${esc(telHref(contact.phone))}" class="font-heading text-lg text-ink hover:text-accent">${esc(contact.phone)}</a></dd></div>
            <div class="py-5"><dt class="${labelClasses}">${esc(contact.detailsLabels.studio)}</dt><dd class="mt-2 text-sm leading-relaxed text-ink"><address class="not-italic">${esc(contact.address)}</address></dd></div>
          </dl>
          <p class="mt-12 text-xs uppercase tracking-[0.3em] text-muted">${esc(contact.bookingHeading)}</p>
          <a href="${esc(booking.url)}" ${external} class="mt-5 grid h-32 w-32 place-items-center rounded-full bg-accent font-heading text-xl tracking-[0.2em] text-on-accent transition duration-500 hover:-rotate-6 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">${esc(contact.bookingLabel)}</a>
        </aside>
      </div>
    </div>
  </div>
</section>`;
}
