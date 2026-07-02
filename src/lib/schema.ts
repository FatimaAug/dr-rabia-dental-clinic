import { siteConfig } from "@/data/site";
import { faqs } from "@/data/content";
import { services, type Service } from "@/data/services";
import { servicePricing } from "@/data/pricing";

const BASE = siteConfig.siteUrl;

const SURGICAL_SLUGS = new Set([
  "extractions",
  "oral-surgery",
  "dental-implants",
  "root-canal-treatment",
]);

export function buildHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: `${siteConfig.clinicName} – ${siteConfig.name}`,
        description: siteConfig.tagline,
        inLanguage: "en-PK",
        publisher: { "@id": `${BASE}/#dentist` },
      },
      {
        "@type": "Dentist",
        "@id": `${BASE}/#dentist`,
        name: siteConfig.clinicName,
        alternateName: siteConfig.name,
        description:
          "Best female dentist in Islamabad providing cosmetic dentistry, emergency dental care, orthodontics, implants, and more at The Urban Dentist, F-8 Markaz.",
        url: BASE,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office #3, 1st Floor, Pakland Medical Center",
          addressLocality: "F-8 Markaz",
          addressRegion: "Islamabad",
          postalCode: "44000",
          addressCountry: "PK",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "21:00",
          },
        ],
        hasMap: siteConfig.mapsHref,
        priceRange: "PKR 3,000+",
        currenciesAccepted: "PKR",
        paymentAccepted: "Cash",
        medicalSpecialty: "Dentistry",
        employee: { "@id": `${BASE}/#doctor` },
        availableService: services.map((s) => ({
          "@type": "MedicalProcedure",
          name: s.title,
          description: s.description,
          url: `${BASE}/services/${s.slug}`,
        })),
      },
      {
        "@type": "Person",
        "@id": `${BASE}/#doctor`,
        name: "Dr. Rabia Noor",
        jobTitle: "Dental Surgeon",
        description:
          "Dr. Rabia Noor is a female dental surgeon at The Urban Dentist, F-8 Markaz, Islamabad, with 7+ years of experience in cosmetic and general dentistry.",
        worksFor: { "@id": `${BASE}/#dentist` },
        knowsAbout: services.map((s) => s.title),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function buildServicesPageSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${BASE}/services`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Dental Services – The Urban Dentist, Islamabad",
      description:
        "Complete list of dental treatments offered by Dr. Rabia Noor at The Urban Dentist, F-8 Markaz, Islamabad.",
      numberOfItems: services.length,
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE}/services/${s.slug}`,
        name: s.title,
      })),
    },
  ];
}

export function buildServicePageSchema(service: Service) {
  const pricing = servicePricing[service.slug] ?? [];
  const procedureType = SURGICAL_SLUGS.has(service.slug)
    ? "SurgicalProcedure"
    : "TherapeuticProcedure";

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${BASE}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: `${BASE}/services/${service.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": `${BASE}/services/${service.slug}#procedure`,
      name: service.title,
      description: service.longDescription,
      url: `${BASE}/services/${service.slug}`,
      bodyLocation: "Oral cavity",
      procedureType: `https://schema.org/${procedureType}`,
      provider: { "@id": `${BASE}/#dentist` },
      ...(pricing.length > 0 && {
        offers: pricing.map((t) => ({
          "@type": "Offer",
          name: t.name,
          price: t.price,
          priceCurrency: "PKR",
          seller: { "@id": `${BASE}/#dentist` },
        })),
      }),
    },
  ];
}

export function buildPricingPageSchema() {
  const catalogItems = Object.entries(servicePricing).map(
    ([slug, treatments]) => {
      const service = services.find((s) => s.slug === slug);
      return {
        "@type": "OfferCatalog",
        name: service?.title ?? slug,
        itemListElement: treatments.map((t) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: t.name,
          },
          price: t.price,
          priceCurrency: "PKR",
        })),
      };
    }
  );

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pricing",
          item: `${BASE}/pricing`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE}/pricing`,
      name: "Dental Pricing – The Urban Dentist, Islamabad",
      description:
        "Transparent pricing for all dental treatments at The Urban Dentist, F-8 Markaz Islamabad. No hidden charges — all costs discussed upfront.",
      url: `${BASE}/pricing`,
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/#dentist` },
      mainEntity: {
        "@type": "OfferCatalog",
        name: "Dental Treatment Pricing at The Urban Dentist",
        itemListElement: catalogItems,
      },
    },
  ];
}
