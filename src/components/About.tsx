import Image from "next/image";
import aboutImage from "../../public/about-section.jpg";
export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative ">
            <div className="relative  h-125 w-125 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={aboutImage}
                alt="Dr. Rabia Noor"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-30 right-25 rounded-2xl bg-muted/40 px-6 py-4 text-white backdrop-blur-md shadow-lg">
              <p className="font-display text-2xl font-bold">7+</p>
              <p className="text-xs">Years Experience</p>
            </div>
          </div>

          <div>
            <p className="inline-flex items-center rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark uppercase mb-4">
              About Us
            </p>
            <h3 className="font-display text-lg font-semibold text-accent mb-1">
              Dr. Rabia Noor
            </h3>
            <p className="text-sm text-muted mb-4">BDS, Cosmetic Dentist</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-6">
              Crafting Smiles, Building Trust
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Your Trusted Dental Expert – Dr. Rabia Noor | Best Dental surgeon
              in Islamabad. At the practice of Dr. Rabia Noor, we are dedicated
              to providing the highest standard of dental care in Islamabad.
              Backed by a team of experienced dental professionals and support
              staff, Dr. Rabia Noor leads the clinic with a strong commitment to
              precision, patient comfort, and long-term oral health.
            </p>
            <blockquote className="border-l-4 border-accent pl-5 italic text-ink/80 leading-relaxed">
              &ldquo;I believe that exceptional dental care goes beyond
              technical expertise—it requires empathy, patience, and a genuine
              commitment to each patient&apos;s wellbeing. Every smile tells a
              story, and I&apos;m honored to be part of yours.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
