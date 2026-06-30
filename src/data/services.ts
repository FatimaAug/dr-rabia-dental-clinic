export interface Service {
  slug: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  longDescription: string;
}

export const services: Service[] = [
  {
    slug: "dental-emergencies",
    badge: "24/7",
    title: "Dental Emergencies",
    description:
      "Prompt emergency relief for severe toothaches and broken teeth.",
    tags: ["Same Day", "After Hours", "Urgent Care"],
    longDescription:
      "Dental emergencies can strike at any time, and when they do, fast and reliable care matters most. We offer prompt relief for severe toothaches, broken or knocked-out teeth, swelling, and dental trauma. Our team is trained to assess and treat urgent dental problems quickly, helping reduce pain and prevent further complications, with same-day and after-hours availability for urgent cases.",
  },
  {
    slug: "general-dentistry",
    badge: "Essential",
    title: "General Dentistry",
    description:
      "Routine check-ups, cleanings, and preventive dental care.",
    tags: ["Check-ups", "Cleaning", "Prevention"],
    longDescription:
      "General dentistry forms the foundation of good oral health. Our routine check-ups, professional cleanings, and preventive treatments are designed to catch problems early and keep your teeth and gums healthy for the long term. We focus on patient education so you understand exactly how to maintain a healthy smile between visits.",
  },
  {
    slug: "fillings-restorations",
    badge: "Restoration",
    title: "Fillings & Restorations",
    description: "Tooth-colored composite fillings that blend seamlessly.",
    tags: ["Composite", "Aesthetic", "Durable"],
    longDescription:
      "We use tooth-colored composite materials to restore teeth affected by decay or minor damage. These restorations blend naturally with your existing teeth, are durable, and require minimal removal of healthy tooth structure compared to traditional fillings, giving you a strong and aesthetically pleasing result.",
  },
  {
    slug: "root-canal-treatment",
    badge: "Advanced",
    title: "Root Canal Treatment",
    description:
      "Save teeth with expert root canal procedures using modern techniques.",
    tags: ["Painless", "Modern Tech", "Fast Recovery"],
    longDescription:
      "Root canal treatment is necessary when the inner pulp of a tooth becomes infected or inflamed due to deep decay, cracks, or trauma. Using modern, gentle techniques and proper anesthesia, we make the procedure as comfortable as possible while saving your natural tooth and relieving pain.",
  },
  {
    slug: "crown-bridge-onlay",
    badge: "Restoration",
    title: "Crown / Bridge / Onlay",
    description: "Restore damaged teeth with crowns, bridges, and onlays.",
    tags: ["Crowns", "Bridges", "Onlays"],
    longDescription:
      "Crowns, bridges, and onlays are custom-made restorations that repair damaged, weakened, or missing teeth. They restore function, protect the remaining tooth structure, and are crafted to match the natural shade and shape of your teeth for a seamless look.",
  },
  {
    slug: "braces",
    badge: "Popular",
    title: "Braces",
    description:
      "Traditional metal and ceramic braces for perfect tooth alignment.",
    tags: ["Metal", "Ceramic", "Custom Plan"],
    longDescription:
      "Braces remain one of the most reliable ways to correct misaligned teeth and bite issues. We offer both traditional metal and discreet ceramic braces, with a custom treatment plan tailored to your specific orthodontic needs and goals.",
  },
  {
    slug: "orthodontic-appliances",
    badge: "Discreet",
    title: "Orthodontic Appliances",
    description: "Modern clear aligners and advanced appliance systems.",
    tags: ["Clear", "Removable", "Invisible"],
    longDescription:
      "For patients seeking a more discreet option, we provide clear aligners and other modern orthodontic appliances. These removable, nearly invisible solutions gradually shift teeth into proper alignment while fitting comfortably into your daily life.",
  },
  {
    slug: "extractions",
    badge: "Surgical",
    title: "Extractions",
    description: "Expert tooth extraction with care and precision.",
    tags: ["Simple", "Surgical", "Comfortable"],
    longDescription:
      "When a tooth cannot be saved or needs to be removed for orthodontic or health reasons, our team performs both simple and surgical extractions with precision and care, ensuring your comfort throughout the process and a smooth recovery.",
  },
  {
    slug: "oral-surgery",
    badge: "Advanced",
    title: "Oral Surgery",
    description:
      "Specialized surgical procedures with advanced imaging techniques.",
    tags: ["Wisdom Teeth", "Surgical", "Precise"],
    longDescription:
      "From wisdom tooth removal to more complex surgical procedures, we use advanced imaging and precise surgical techniques to plan and perform oral surgery safely, minimizing discomfort and supporting faster healing.",
  },
  {
    slug: "dental-implants",
    badge: "Premium",
    title: "Dental Implants",
    description:
      "Gold standard tooth replacement that look and feel natural.",
    tags: ["Titanium", "Permanent", "Natural"],
    longDescription:
      "Dental implants are the gold standard for replacing missing teeth. Made from biocompatible titanium, implants fuse with the jawbone to provide a permanent, stable foundation for crowns that look, feel, and function like natural teeth.",
  },
  {
    slug: "prosthodontics",
    badge: "Solution",
    title: "Prosthodontics",
    description:
      "Custom dentures and removable prosthetics for missing teeth.",
    tags: ["Dentures", "Custom", "Comfortable"],
    longDescription:
      "Prosthodontic treatments replace one or more missing teeth using custom-made dentures and removable prosthetics. Each prosthetic is carefully designed for a comfortable fit, natural appearance, and reliable everyday function.",
  },
  {
    slug: "cosmetic-dentistry",
    badge: "Transform",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with whitening, veneers, and makeovers.",
    tags: ["Whitening", "Veneers", "Makeover"],
    longDescription:
      "Cosmetic dentistry helps you achieve the confident smile you have always wanted. From professional teeth whitening to porcelain veneers and complete smile makeovers, we tailor every treatment to enhance your natural beauty.",
  },
  {
    slug: "sedation-comfort-treatment",
    badge: "Comfort",
    title: "Sedation (Comfort Treatment)",
    description: "Safe sedation options for anxious or sensitive patients.",
    tags: ["Mild", "Moderate", "Deep"],
    longDescription:
      "We understand that dental visits can be stressful for some patients. We offer safe sedation options, ranging from mild to deeper sedation, to help anxious or sensitive patients relax and receive the care they need comfortably.",
  },
  {
    slug: "wellness",
    badge: "Prevention",
    title: "Wellness",
    description:
      "Preventive wellness programs with check-ups and education.",
    tags: ["Check-ups", "Cleaning", "Education"],
    longDescription:
      "Our wellness programs focus on long-term preventive care, combining regular check-ups, professional cleanings, and patient education to help you maintain optimal oral health and avoid more serious dental problems down the road.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
