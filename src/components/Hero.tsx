const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "7+ Years Experience",
    subtitle: "Trusted care for seven years",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M12 21s-7-4.35-9.5-8.8C.7 8.4 2.3 4.8 6 4.1c2-.4 3.8.4 6 2.6 2.2-2.2 4-3 6-2.6 3.7.7 5.3 4.3 3.5 8.1C19 16.65 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "1000+ Happy Patients",
    subtitle: "Satisfaction from every patient",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="m12 3 2.5 5.6 6 .6-4.5 4 1.3 6-5.3-3.2L6.7 19l1.3-6-4.5-4 6-.6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "5.0 Rating",
    subtitle: "Personalized treatment plans",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between overflow-hidden bg-soft bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/hero-img.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-soft via-soft/50 to-soft/10" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-160 rounded-full bg-primary-light/60 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 text-center z-10">
        <p className="inline-flex items-center rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase mb-6">
          Trusted Dental Care in Islamabad
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-bold text-ink">
          Best Female Dentist in Islamabad – Cosmetic Dentist in F-8 Markaz
        </h1>
        <p className="mt-6 text-base font-medium sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Looking for a reliable and experienced dentist near you in Islamabad?
          At The Urban Dentist, we provide modern, comfortable, and sterelized
          dental care in the heart of F-8 Markaz. Led by a skilled female
          dentist, our clinic is dedicated to delivering high-quality treatments
          in a friendly and stress-free environment.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-primary-dark px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-primary/30 bg-white px-8 py-3.5 text-sm font-semibold text-primary-dark hover:bg-primary-light transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="relative border-t mt-30 border-black/5 bg-white z-10 items-center justify-center">
        <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 divide-y divide-black/5 lg:divide-y-0 lg:divide-x">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center justify-center text-center gap-3 py-8 px-4"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary-dark">
                  {f.icon}
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="text-xs text-muted">{f.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
