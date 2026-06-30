"use client";

import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="inline-flex items-center rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark uppercase mb-4">
            Trusted by Thousands
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            What Our Patients Say About Us
          </h2>
          <p className="text-muted leading-relaxed">
            Real stories from real people who trusted us with their smiles. Your
            satisfaction is our greatest achievement.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 mb-12">
          <div>
            <p className=" text-3xl font-bold text-primary-dark">5.0</p>
            <p className="text-xs text-muted">Average Rating</p>
          </div>
          <div>
            <p className=" text-3xl font-bold text-primary-dark">100%</p>
            <p className="text-xs text-muted">Satisfaction Rate</p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6"
            style={{
              width: "max-content",
              animation: "testimonialScroll 32s linear infinite",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState =
                "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState =
                "running";
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="w-80 shrink-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-light flex items-center justify-center text-xs font-semibold text-primary-dark shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-muted">{t.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://www.google.com/search?sca_esv=9e14c540528a302f&sxsrf=APpeQnuCP9UFC5PEYzr2DQy9tKPUl2f7Yg:1782837502080&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_7fvnSSHw-pZRMXVy-pfPQW8PIBi-jEUxmS-fifRw2oejW9j23gtXtuIJhTVEQ7R06xhRZTWugmrJpnqmLEIZyg2Puye0BWtq-6J2mMVIhcfszCb8Q%3D%3D&q=Dr.+Rabia+Noor+%28Dental+Surgeon%29+Reviews&sa=X&ved=2ahUKEwj6n4Ogs6-VAxU-sFYBHT9HNOkQ0bkNegQIPRAH&biw=1639&bih=787&dpr=1.25&zx=1782837534466"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary-dark hover:bg-primary-light transition-colors"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
