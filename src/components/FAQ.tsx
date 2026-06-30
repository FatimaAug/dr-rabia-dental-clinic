"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex items-center rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark uppercase mb-4">
            FAQs
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mx-auto">
            Clear answers to common questions about our dental services,
            treatments, and patient care.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {visibleFaqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-black/10 bg-white px-6 py-5 shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-semibold text-ink">{faq.question}</span>
                <span className="rounded-full bg-primary-light p-2 text-primary-dark transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {faqs.length > 4 && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="rounded-full border border-primary-dark/20 px-5 py-2 text-sm font-semibold text-primary-dark transition hover:bg-primary-light"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
