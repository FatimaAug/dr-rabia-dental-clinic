import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { buildServicePageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Dr Rabia Noor - The Urban Dentist`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const schema = buildServicePageSchema(service);
  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 6);

  return (
    <>
      <JsonLd schema={schema} />
      <section className="bg-soft py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-primary-dark">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/#services" className="hover:text-primary-dark">
              Services
            </Link>{" "}
            / <span className="text-ink">{service.title}</span>
          </nav>

          <span className="inline-flex items-center rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase mb-4">
            {service.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink mb-6">
            {service.title}
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-muted ring-1 ring-black/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-ink mb-4">
              About this treatment
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              {service.longDescription}
            </p>

            <div className="rounded-2xl bg-primary-light p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-primary-dark mb-2">
                Why choose Dr. Rabia Noor for {service.title.toLowerCase()}?
              </h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                With 7+ years of experience and a patient-first approach, Dr.
                Rabia Noor and her team at The Urban Dentist combine modern
                techniques with genuine care to make every visit comfortable and
                effective.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-flex items-center rounded-full bg-primary-dark px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
              >
                Book an Appointment
              </a>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">
                Quick Contact
              </h3>
              <p className="text-sm text-muted mb-1">Call us</p>
              <a
                href={siteConfig.phoneHref}
                className="block text-base font-semibold text-primary-dark mb-4"
              >
                {siteConfig.phone}
              </a>
              <p className="text-sm text-muted mb-1">Working Hours</p>
              <p className="text-sm font-medium text-ink leading-relaxed mb-1">
                {siteConfig.workingHours.weekday}
              </p>
              <p className="text-sm font-medium text-ink leading-relaxed mb-1">
                {siteConfig.workingHours.sunday}
              </p>
              <p className="text-sm font-medium text-ink leading-relaxed">
                {siteConfig.workingHours.emergency}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">
                Other Services
              </h3>
              <ul className="space-y-2.5">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-muted hover:text-primary-dark"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
