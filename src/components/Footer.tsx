import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              Dr Rabia Noor
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              The Urban Dentist offers a top-quality dental experience. With
              advanced equipment and technology, we ensure that you receive the
              best possible care.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1CYrxMcWZy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-primary transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/drrabia_noor?igsh=MTY4a2RlbWVnaHM3OQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/rabia-noor-b117301a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-primary transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90 mb-4">
              Work Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <span className="text-white/90 font-medium">Mon – Sat:</span>{" "}
                10AM – 9PM
              </li>
              <li>
                <span className="text-white/90 font-medium">Sunday:</span> Only
                Emergency
              </li>
              <li>
                <span className="text-white/90 font-medium">
                  Emergency Hours:
                </span>{" "}
                9PM – 10AM
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90 mb-4">
              We accept:
            </h4>
            <div className="flex items-center">
              <Image
                src="/we-accept.png"
                alt="Accepted payment methods"
                width={220}
                height={60}
                className="h-auto w-full max-w-55 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#top" className="text-xs text-white/60  transition-colors">
            © {new Date().getFullYear()} Dr Rabia Noor. All rights reserved.
          </a>
          <div className="flex gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
