import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import JsonLd from "@/components/JsonLd";
import { buildPricingPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dental Pricing | Dr Rabia Noor - The Urban Dentist",
  description:
    "Transparent pricing for all dental treatments at The Urban Dentist, F-8 Markaz Islamabad. No hidden charges — all costs discussed upfront.",
};

export default function PricingPage() {
  return (
    <>
      <JsonLd schema={buildPricingPageSchema()} />
      <PricingClient />
    </>
  );
}
