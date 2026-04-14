"use client";

import { useEffect, useRef } from "react";
import { BsDroplet } from "react-icons/bs";
import { GiTempleGate } from "react-icons/gi";
import Image from "next/image";
import { YOJANAYEN_SECTION } from "@/constants/content";

// ---- Icon mapping ----
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shantidhara: BsDroplet,
  temple: GiTempleGate,
};

export default function YojnayenSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // ---- Fade-in on scroll with Intersection Observer ----
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="yojnayen"
      ref={sectionRef}
      className="section-fade-in relative overflow-hidden bg-secondary py-[100px] lg:py-[120px]"
    >
      {/* ---- Subtle pattern overlay ---- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ---- Decorative glow accents ---- */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---- Section Header ---- */}
        <div className="mb-16 text-center">
          {/* Decorative label */}
          <span className="font-decorative text-3xl text-primary sm:text-4xl">
            {YOJANAYEN_SECTION.sectionLabel}
          </span>

          {/* Heading */}
          <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-semibold tracking-wide text-white sm:text-4xl lg:text-5xl">
            {YOJANAYEN_SECTION.heading}
          </h2>

          {/* English heading */}
          <p className="mt-1 font-[family-name:var(--font-oswald)] text-lg tracking-wide text-white/50 sm:text-xl">
            {YOJANAYEN_SECTION.headingEnglish}
          </p>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {YOJANAYEN_SECTION.subheading}
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-[2px] w-8 rounded-full bg-primary/50" />
            <span className="h-[6px] w-[6px] rotate-45 rounded-[1px] bg-primary" />
            <span className="h-[2px] w-8 rounded-full bg-primary/50" />
          </div>
        </div>

        {/* ---- Scheme Cards ---- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {YOJANAYEN_SECTION.schemes.map((scheme) => {
            const IconComponent = iconMap[scheme.icon] || GiTempleGate;

            return (
              <div
                key={scheme.id}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-white/10 sm:p-8"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15 transition-colors duration-500 group-hover:bg-primary/25">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold tracking-wide text-white">
                      {scheme.title}
                    </h3>
                    <p className="text-sm text-white/50">{scheme.titleEnglish}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {scheme.description}
                </p>

                {/* Pricing Table (for Shantidhara) */}
                {scheme.pricing && scheme.pricing.length > 0 && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                          <th className="px-4 py-3 font-[family-name:var(--font-oswald)] text-xs font-medium tracking-wider text-white/50 uppercase">
                            अवधि
                          </th>
                          <th className="px-4 py-3 text-right font-[family-name:var(--font-oswald)] text-xs font-medium tracking-wider text-white/50 uppercase">
                            राशि
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheme.pricing.map((row, idx) => (
                          <tr
                            key={idx}
                            className={
                              idx < scheme.pricing!.length - 1
                                ? "border-b border-white/5"
                                : ""
                            }
                          >
                            <td className="px-4 py-3 text-white/70">
                              {row.label}
                            </td>
                            <td className="px-4 py-3 text-right font-semibold text-primary">
                              {row.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Poster Image (for Mandir Nirman) */}
                {scheme.posterImage && (
                  <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image
                      src={scheme.posterImage}
                      alt={scheme.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Highlights List (for Mandir Nirman) */}
                {scheme.highlights && scheme.highlights.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {scheme.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5 text-sm"
                      >
                        <span className="text-white/70">{highlight.item}</span>
                        <span className="font-semibold text-primary">
                          {highlight.amount}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href={scheme.cta.link}
                    className="inline-flex items-center rounded-full bg-primary px-8 py-3 font-[family-name:var(--font-oswald)] text-sm font-medium tracking-wider text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 active:scale-[0.97]"
                  >
                    {scheme.cta.text}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---- Bank Details ---- */}
        <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="mb-4 text-center font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-white/80">
            बैंक खाता विवरण — Bank Account Details
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/50">खाता नाम (Account Name)</span>
              <span className="font-medium text-white/80">
                {YOJANAYEN_SECTION.bankDetails.accountName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">खाता संख्या (Account No.)</span>
              <span className="font-medium text-white/80">
                {YOJANAYEN_SECTION.bankDetails.accountNo}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">IFSC</span>
              <span className="font-medium text-white/80">
                {YOJANAYEN_SECTION.bankDetails.ifsc}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">बैंक (Bank)</span>
              <span className="font-medium text-white/80">
                {YOJANAYEN_SECTION.bankDetails.bank}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
