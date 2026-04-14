"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_SECTION } from "@/constants/content";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(327deg, #F6E0DB 0%, #EAF7FA 100%)",
      }}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[30px]"
        }`}
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        {/* Section Header */}
        <div className="mb-14 text-center">
          {/* Section label */}
          <span className="font-decorative text-3xl text-primary">
            {CONTACT_SECTION.sectionLabel}
          </span>

          {/* Heading */}
          <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-semibold text-secondary sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
            {CONTACT_SECTION.heading}
          </h2>

          {/* English subline */}
          <p className="mt-1 font-[family-name:var(--font-oswald)] text-lg tracking-wide text-secondary/70 sm:text-xl">
            {CONTACT_SECTION.headingEnglish}
          </p>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-light">
            {CONTACT_SECTION.subheading}
          </p>

          {/* Decorative divider */}
          <div
            className="mt-6 flex items-center justify-center gap-2"
            aria-hidden="true"
          >
            <div className="h-[3px] w-12 rounded-full bg-primary" />
            <div className="h-[3px] w-3 rounded-full bg-primary opacity-60" />
            <div className="h-[3px] w-1.5 rounded-full bg-primary opacity-30" />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <HiOutlineLocationMarker className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-secondary">
                  Address
                </h3>
                <a
                  href={CONTACT_SECTION.googleMaps.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-text-light leading-relaxed transition-colors duration-300 hover:text-primary"
                >
                  <span className="block">{CONTACT_SECTION.address.line1}</span>
                  <span className="block">{CONTACT_SECTION.address.line2}</span>
                  <span className="block">{CONTACT_SECTION.address.line3}</span>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <HiOutlinePhone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-secondary">
                  Phone
                </h3>
                <a
                  href={`tel:${CONTACT_SECTION.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-text-light leading-relaxed transition-colors duration-300 hover:text-primary"
                >
                  {CONTACT_SECTION.phone}
                </a>
                {/* Additional phones */}
                {CONTACT_SECTION.additionalPhones &&
                  CONTACT_SECTION.additionalPhones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-text-light leading-relaxed transition-colors duration-300 hover:text-primary"
                    >
                      {phone}
                    </a>
                  ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-50">
                <FaWhatsapp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-secondary">
                  WhatsApp
                </h3>
                <a
                  href={CONTACT_SECTION.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-green-600 leading-relaxed transition-colors duration-300 hover:text-green-700"
                >
                  <span>{CONTACT_SECTION.phone}</span>
                  <span className="text-xs font-medium bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                    Chat
                  </span>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <HiOutlineMail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-secondary">
                  Email
                </h3>
                <a
                  href={`mailto:${CONTACT_SECTION.email}`}
                  className="mt-1 block text-text-light leading-relaxed transition-colors duration-300 hover:text-primary"
                >
                  {CONTACT_SECTION.email}
                </a>
              </div>
            </div>

            {/* Darshan Timings */}
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <HiOutlineClock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-secondary">
                  {CONTACT_SECTION.timings.label}
                </h3>
                <div className="mt-1 space-y-1 text-text-light leading-relaxed">
                  <p>
                    <span className="font-medium text-secondary">
                      Morning:
                    </span>{" "}
                    {CONTACT_SECTION.timings.morning}
                  </p>
                  <p>
                    <span className="font-medium text-secondary">
                      Evening:
                    </span>{" "}
                    {CONTACT_SECTION.timings.evening}
                  </p>
                </div>
              </div>
            </div>

            {/* Distances */}
            {CONTACT_SECTION.distances && CONTACT_SECTION.distances.length > 0 && (
              <div className="mt-4 rounded-xl border border-primary/20 bg-white/60 p-6">
                <h3 className="font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-secondary mb-4">
                  दूरी <span className="text-sm font-normal text-secondary/60">(Distances)</span>
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {CONTACT_SECTION.distances.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-2 rounded-lg bg-tertiary-light/50 px-4 py-2.5"
                    >
                      <span className="text-sm text-secondary font-medium">
                        {item.place}
                      </span>
                      <span className="text-sm text-primary font-semibold whitespace-nowrap">
                        {item.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - Google Maps */}
          <div className="relative mx-3 sm:mx-0">
            {/* Decorative frame behind the map */}
            <div
              className="absolute -right-2 -bottom-2 h-full w-full rounded-lg border-2 border-primary/30 sm:-right-3 sm:-bottom-3"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <iframe
                src={CONTACT_SECTION.googleMaps.embedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chandranchal Swasthi Teerth Location"
                className="w-full"
              />
            </div>

            {/* View on Google Maps link */}
            <div className="mt-4 text-center">
              <a
                href={CONTACT_SECTION.googleMaps.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] text-sm font-medium tracking-wide text-primary transition-colors duration-300 hover:text-primary-dark"
              >
                <HiOutlineLocationMarker className="h-4 w-4" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
