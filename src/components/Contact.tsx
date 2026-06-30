import { siteConfig } from "@/data/site";
import ContactForm from "./ContactForm";

const {
  name,
  phone,
  phoneHref,
  email,
  address,
  mapsHref,
  mapsEmbed,
  workingHours,
} = siteConfig;

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="inline-flex items-center rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark uppercase mb-4">
            Let&apos;s Connect
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            Get in Touch — We&apos;re Here to Help
          </h2>
          <p className="text-muted leading-relaxed">
            Have questions or ready to schedule your appointment? We&apos;d love
            to hear from you and help you achieve the smile of your dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-black/5">
            <h3 className="font-display text-2xl font-semibold text-primary mb-6">
              Send us a Message
            </h3>
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">
                Phone
              </h4>
              <a
                href={phoneHref}
                className="text-sm font-medium text-ink hover:text-primary-dark"
              >
                {phone}
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">
                Email
              </h4>
              <a
                href={`mailto:${email}`}
                className="text-sm font-medium text-ink hover:text-primary-dark break-all"
              >
                {email}
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">
                Address
              </h4>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink hover:text-primary-dark leading-relaxed"
              >
                {address}
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">
                Hours
              </h4>
              <p className="text-sm font-medium text-ink leading-relaxed">
                {workingHours.weekday}
                <br />
                {workingHours.sunday}
                <br />
                {workingHours.emergency}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
          <div className="relative h-96 sm:h-112">
            <iframe
              src={mapsEmbed}
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />

            <div className="absolute left-4 top-4 z-20  rounded-3xl bg-white p-4 shadow-lg ring-1 ring-black/10">
              <p className="text-sm font-semibold text-ink">{name}</p>
              <p className="mt-1 text-sm text-ink/80 leading-relaxed">
                {address}
              </p>
            </div>

            <a
              href={mapsHref}
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Open clinic location in Google Maps"
            />

            <div className="absolute left-1/2 bottom-4 z-20 -translate-x-1/2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-ink shadow-sm ring-1 ring-black/10">
              Open in Google Maps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
