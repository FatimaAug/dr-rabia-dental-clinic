import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Dental Services | Dr Rabia Noor - The Urban Dentist",
  description:
    "Explore the full range of dental treatments offered by Dr. Rabia Noor in F-8 Markaz, Islamabad.",
};

export default function ServicesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="inline-flex items-center rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase mb-4">
            Premium Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            Our Dental Services in Islamabad
          </h2>
          <p className="text-muted leading-relaxed">
            Experience world-class dental care tailored to your unique needs,
            delivered with expertise, compassion, and cutting-edge technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:ring-primary/20 transition-all"
            >
              <span className="inline-flex w-max items-center rounded-full bg-primary-light px-3 py-1 text-[11px] font-semibold text-primary-dark uppercase tracking-wide mb-4">
                {service.badge}
              </span>
              <h2 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-primary-dark transition-colors">
                {service.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-soft px-3 py-1 text-[11px] font-medium text-muted ring-1 ring-black/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
