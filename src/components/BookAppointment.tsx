import { siteConfig } from "@/data/site";

const features = [
  {
    title: "Flexible Scheduling",
    description: "Choose from available time slots that fit your schedule",
  },
  {
    title: "Quick Confirmation",
    description: "Instant booking confirmation via email and SMS",
  },
  {
    title: "Easy Location",
    description: "Conveniently located with ample parking",
  },
];

export default function BookAppointment() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-primary-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 items-start">
          <div>
            <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-light uppercase mb-4">
              Easy Booking
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Book Your Appointment
            </h2>
            <p className="text-white/80 leading-relaxed mb-2 font-medium">
              Emergency Dentist in Islamabad (Available Daily)
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              Dental pain can happen anytime. That&apos;s why we provide
              emergency dental services, including pain management and urgent
              treatments. We are available:
            </p>
            <ul className="space-y-2 text-white/90 text-sm mb-8">
              <li>
                <span className="font-semibold">
                  {siteConfig.workingHours.weekday}
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  {siteConfig.workingHours.emergency}
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  {siteConfig.workingHours.sunday}
                </span>
              </li>
            </ul>
            <p className="text-white/70 text-sm mb-1">
              Need help booking? Call us at
            </p>
            <a
              href={siteConfig.phoneHref}
              className=" text-lg font-medium text-white hover:text-accent-light transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
              >
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-white/70">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
