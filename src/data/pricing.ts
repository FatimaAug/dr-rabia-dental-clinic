export interface Treatment {
  name: string;
  price: string;
}

export const servicePricing: Record<string, Treatment[]> = {
  "dental-emergencies": [
    { name: "Emergency Consultation", price: "Rs. 4,000" },
    { name: "Pain Management", price: "Rs. 10,000" },
  ],
  "general-dentistry": [
    { name: "Consultation", price: "Rs. 3,000" },
    { name: "Scaling & Polishing", price: "Rs. 12,000" },
    { name: "Radiograph (Periapical)", price: "Rs. 500" },
  ],
  "fillings-restorations": [
    { name: "Composite Build-Up (Back Teeth)", price: "PKR 15,000" },
    { name: "Composite Build-Up (Front Teeth)", price: "PKR 15,000" },
    { name: "Indirect Pulp Capping (per tooth)", price: "PKR 15,000" },
    { name: "Direct Pulp Capping (per tooth)", price: "PKR 15,000" },
    { name: "Direct Pulp Capping with MTA (per tooth)", price: "PKR 15,000" },
    { name: "Temporary Filling (per tooth)", price: "PKR 3,000" },
    { name: "GIC Restoration (per tooth)", price: "PKR 7,000" },
    { name: "Composite Splint (per tooth)", price: "PKR 8,000" },
  ],
  "root-canal-treatment": [
    { name: "Root Canal (Upper Arch – Single Sitting)", price: "PKR 25,000" },
    { name: "Root Canal (Upper Arch – Multiple Sitting)", price: "PKR 25,000" },
    { name: "Root Canal (Lower Arch – Single Sitting)", price: "PKR 25,000" },
    { name: "Root Canal (Lower Arch – Multiple Sitting)", price: "PKR 25,000" },
    { name: "Root Canal Re-Treatment", price: "PKR 30,000" },
    { name: "Pulpotomy / Vital Pulp Therapy", price: "PKR 18,000" },
  ],
  "crown-bridge-onlay": [
    { name: "Crown / Onlay / Bridge – PFM", price: "PKR 25,000 (per unit)" },
    {
      name: "Crown / Onlay / Bridge – Zirconia",
      price: "PKR 45,000 (per unit)",
    },
    {
      name: "Crown / Onlay / Bridge – Metallic",
      price: "PKR 20,000 (per unit)",
    },
    { name: "Crown / Onlay / Bridge – E-Max", price: "PKR 60,000 (per unit)" },
    {
      name: "Crown / Onlay / Bridge – Gold",
      price: "PKR 60,000 (lab charges only)",
    },
  ],
  braces: [
    { name: "Ceramic Braces (Full Mouth)", price: "PKR 230,000" },
    { name: "Sapphire Braces (Full Mouth)", price: "PKR 260,000" },
    { name: "Metal Braces (Full Mouth)", price: "PKR 190,000" },
    { name: "Orthodontic Bracket (Single)", price: "PKR 1,500" },
    { name: "Clear Aligners (Full Mouth)", price: "PKR 400,000" },
    { name: "Orthodontic Initial Records", price: "PKR 5,000" },
    { name: "Orthodontic Activation", price: "PKR 5,000" },
    { name: "Orthodontic Follow-up Visit", price: "PKR 3,000" },
    { name: "Braces Removal (Single Arch)", price: "PKR 5,000" },
  ],
  "orthodontic-appliances": [
    { name: "Removable Retainer (Single Arch)", price: "PKR 10,000" },
    { name: "Removable Retainer (Both Arches)", price: "PKR 15,000" },
    { name: "Fixed Bonded Wire Retainer (Single Arch)", price: "PKR 10,000" },
    { name: "Fixed Bonded Wire Retainer (Both Arches)", price: "PKR 20,000" },
    { name: "Space Maintainer", price: "PKR 15,000" },
    { name: "Hawley Retainer", price: "PKR 25,000" },
    { name: "Hyrax Appliance", price: "PKR 30,000" },
  ],
  extractions: [
    { name: "Extraction (Simple – Non-Wisdom)", price: "PKR 10,000" },
    { name: "Extraction (Surgical – Non-Wisdom)", price: "PKR 15,000" },
    { name: "Wisdom Tooth Extraction (Non-Surgical)", price: "PKR 15,000" },
    { name: "Wisdom Tooth Impaction Surgery", price: "PKR 20,000" },
    { name: "Baby Tooth Extraction", price: "PKR 8,000" },
    { name: "Mobile Tooth Extraction", price: "PKR 5,000" },
  ],
  "oral-surgery": [
    { name: "Cyst Enucleation", price: "PKR 20,000" },
    { name: "Apicectomy", price: "PKR 15,000" },
    { name: "Tongue Tie Removal", price: "PKR 30,000" },
    { name: "Biopsy (Excisional)", price: "PKR 10,000" },
    { name: "Biopsy (Incisional)", price: "PKR 10,000" },
    { name: "Alveoloplasty (per quadrant)", price: "PKR 10,000" },
    { name: "Crown Lengthening", price: "PKR 12,000" },
  ],
  "dental-implants": [
    { name: "Straumann Implant", price: "PKR 180,000" },
    { name: "DIO Implant", price: "PKR 150,000" },
    { name: "Swiss Implant", price: "PKR 130,000" },
    { name: "Bone Grafting (1cc)", price: "PKR 60,000" },
    { name: "Collagen Membrane (Resorbable)", price: "PKR 60,000" },
  ],
  prosthodontics: [
    { name: "Complete Denture (Single Arch)", price: "PKR 80,000" },
    { name: "Complete Denture (Both Arches)", price: "PKR 150,000" },
    { name: "Partial Denture (Single Tooth)", price: "PKR 10,000" },
    { name: "Denture Relining / Rebasing", price: "PKR 15,000" },
    { name: "Denture Polishing", price: "PKR 5,000" },
    { name: "Denture Repair", price: "PKR 5,000" },
  ],
  "cosmetic-dentistry": [
    { name: "Teeth Whitening", price: "PKR 50,000" },
    { name: "Veneers (per tooth)", price: "PKR 55,000" },
    { name: "Composite Bonding (Direct Veneer)", price: "PKR 25,000" },
  ],
  "sedation-comfort-treatment": [
    { name: "Total Sedation", price: "PKR 110,000 per hour" },
    { name: "Semi Sedation", price: "PKR 25,000 per hour" },
  ],
  wellness: [
    { name: "Soft Night Guard", price: "PKR 10,000" },
    { name: "Hard Night Guard", price: "PKR 15,000" },
    { name: "Bruxism Night Guard", price: "PKR 15,000" },
    { name: "Mouth Guard", price: "PKR 20,000" },
  ],
};
