"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import { FOOTER, CONTACT_SECTION } from "@/constants/content";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main footer content */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "80px", paddingBottom: "60px" }}
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Column 1 - Temple Info */}
          <div>
            <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-semibold tracking-wide text-white">
              Chandranchal Swasthi Teerth
            </h3>
            <p className="mt-2 font-decorative text-xl text-primary">
              {FOOTER.tagline}
            </p>

            {/* Decorative divider */}
            <div
              className="mt-4 flex items-center gap-2"
              aria-hidden="true"
            >
              <div className="h-[2px] w-10 rounded-full bg-primary" />
              <div className="h-[2px] w-2.5 rounded-full bg-primary opacity-60" />
              <div className="h-[2px] w-1.5 rounded-full bg-primary opacity-30" />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {FOOTER.description}
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-white">
              Quick Links
            </h4>

            {/* Decorative divider */}
            <div
              className="mt-3 flex items-center gap-2"
              aria-hidden="true"
            >
              <div className="h-[2px] w-8 rounded-full bg-primary" />
              <div className="h-[2px] w-2 rounded-full bg-primary opacity-60" />
            </div>

            <ul className="mt-5 space-y-3">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-sm text-white/70 transition-colors duration-300 hover:text-primary"
                  >
                    <span
                      className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary/50"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info + Social */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-white">
              Contact Info
            </h4>

            {/* Decorative divider */}
            <div
              className="mt-3 flex items-center gap-2"
              aria-hidden="true"
            >
              <div className="h-[2px] w-8 rounded-full bg-primary" />
              <div className="h-[2px] w-2 rounded-full bg-primary opacity-60" />
            </div>

            <ul className="mt-5 space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-white/70">
                  {CONTACT_SECTION.address.full}
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <a
                  href={`tel:${CONTACT_SECTION.phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/70 transition-colors duration-300 hover:text-primary"
                >
                  {CONTACT_SECTION.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <HiOutlineMail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <a
                  href={`mailto:${CONTACT_SECTION.email}`}
                  className="text-sm text-white/70 transition-colors duration-300 hover:text-primary"
                >
                  {CONTACT_SECTION.email}
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-8">
              <h5 className="font-[family-name:var(--font-oswald)] text-sm font-medium tracking-wider text-white/50 uppercase">
                Follow Us
              </h5>
              <div className="mt-3 flex items-center gap-3">
                {FOOTER.socialLinks.map((social) => {
                  const Icon = socialIconMap[social.platform];
                  if (!Icon) return null;

                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                      aria-label={`Follow us on ${social.platform}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-6">
            <p className="text-center text-xs tracking-wide text-white/50">
              {FOOTER.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
