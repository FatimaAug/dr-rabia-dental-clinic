"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { servicePricing } from "@/data/pricing";
import { siteConfig } from "@/data/site";

const BROWN = "#0a5857";

const DISCLAIMER =
  "The prices listed below are approximate and may vary based on the complexity of the case, materials used, and any additional procedures required. All treatment plans and final costs will be clearly discussed with the patient before treatment begins. We are committed to transparent pricing with no hidden charges.";

export default function PricingClient() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);

  const activeService = services.find((s) => s.slug === activeSlug)!;
  const treatments = servicePricing[activeSlug] ?? [];

  return (
    <div className="bg-soft min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
              <div className="px-5 py-4" style={{ backgroundColor: BROWN }}>
                <h2 className="text-white font-semibold text-base">
                  Our Services
                </h2>
              </div>
              <nav className="bg-white">
                {services.map((service, idx) => {
                  const isActive = service.slug === activeSlug;
                  return (
                    <button
                      key={service.slug}
                      onClick={() => setActiveSlug(service.slug)}
                      className={`w-full flex items-center gap-3 px-5 py-3.5 text-left text-sm transition-colors ${
                        idx !== services.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      } ${
                        isActive
                          ? "bg-gray-50 font-semibold text-ink"
                          : "text-muted hover:bg-gray-50 font-normal"
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0 transition-colors"
                        style={{
                          backgroundColor: isActive ? BROWN : "#d1d5db",
                        }}
                      />
                      {service.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-7 sm:p-10">
              {/* Heading */}
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3">
                {activeService.title}
              </h2>
              <div
                className="w-14 h-0.5 mb-6"
                style={{ backgroundColor: BROWN }}
              />

              {/* Description */}
              <p className="text-muted leading-relaxed mb-8">
                {activeService.longDescription}
              </p>

              {/* Pricing heading */}
              <h2
                className="text-xl font-semibold text-ink mb-4 pl-3 border-l-4"
                style={{ borderColor: BROWN }}
              >
                Pricing
              </h2>

              {/* Table */}
              <div className="rounded-xl overflow-hidden ring-1 ring-black/5 mb-6">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: BROWN }}>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                        Treatment
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-white">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatments.map((t, i) => (
                      <tr
                        key={t.name}
                        className={`bg-white ${i !== treatments.length - 1 ? "border-b border-gray-100" : ""}`}
                      >
                        <td className="px-6 py-4 text-sm text-ink">{t.name}</td>
                        <td className="px-6 py-4 text-sm font-bold text-ink text-right">
                          {t.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Disclaimer */}
              <div className="rounded-xl bg-amber-50 border border-amber-200 px-6 py-5 mb-8">
                <p className="text-sm font-semibold italic text-amber-700 mb-1.5">
                  * Disclaimer
                </p>
                <p className="text-sm italic leading-relaxed text-amber-600">
                  {DISCLAIMER}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="flex-1 text-center font-semibold py-4 rounded-xl text-white transition-opacity hover:opacity-90 text-sm sm:text-base"
                  style={{ backgroundColor: BROWN }}
                >
                  Book an Appointment
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="flex-1 text-center font-semibold py-4 rounded-xl text-ink border-2 border-gray-200 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  Call Us: {siteConfig.phone}
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
