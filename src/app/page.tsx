import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookAppointment from "@/components/BookAppointment";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { buildHomePageSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd schema={buildHomePageSchema()} />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <BookAppointment />
      <Contact />
      <FAQ />
    </>
  );
}
