# Dr Rabia Noor - The Urban Dentist Website

A Next.js + Tailwind CSS website built with the same layout/sections as
https://drrabiadentist.com/, using placeholder content copied from that site
so it can be edited later.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Contact Form (sends email to rabiaaxam@gmail.com)

The "Send Message" form on the Contact section posts to `/api/contact`,
which sends an email via SMTP using `nodemailer`. To activate it:

1. Copy `.env.local.example` to `.env.local`
2. Fill in your SMTP credentials (Gmail App Password, SendGrid, Mailgun, etc.)
3. Restart the dev server / redeploy

Until SMTP credentials are added, the form will show a friendly error asking
users to call or WhatsApp instead.

## WhatsApp Button

The floating WhatsApp button in the bottom-right corner opens a chat with
+92 334 9990515 (configured in `src/data/site.ts`).

## Working Hours

- Mon – Sat: 10AM – 9PM
- Sunday: Only Emergency
- Emergency Hours: 9PM – 10AM

Edit these in `src/data/site.ts`.

## Services

All 14 services are defined in `src/data/services.ts`. Each one automatically
gets:
- A card on the homepage Services section
- An individual page at `/services/[slug]`
- A listing on `/services`

Edit the `services` array to update titles, descriptions, tags, or detailed
content per service.

## Editing Content

- Hero, About, Testimonials, FAQ text: in `src/components/*.tsx`
- Site-wide info (phone, email, address, hours): `src/data/site.ts`
- Testimonials & FAQs: `src/data/content.ts`
- Services: `src/data/services.ts`

## Notes

- Images currently use the same stock photo URLs as the original site
  (Unsplash/Pexels). Replace with real clinic/doctor photos in
  `src/components/Hero.tsx` and `src/components/About.tsx`.
- Google Map embed is in `src/data/site.ts` (`mapsEmbed`).
