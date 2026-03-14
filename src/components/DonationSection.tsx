"use client";

import { useEffect, useRef } from "react";
import { MdOutlineTempleHindu } from "react-icons/md";
import { IoFastFoodOutline, IoSchoolOutline } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { DONATE_SECTION } from "@/constants/content";

// ---- Icon mapping ----
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  maintenance: MdOutlineTempleHindu,
  food: IoFastFoodOutline,
  education: IoSchoolOutline,
  service: FaHandsHelping,
};

export default function DonationSection() {
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
      id="donate"
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
            {DONATE_SECTION.sectionLabel}
          </span>

          {/* Heading */}
          <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-semibold tracking-wide text-white sm:text-4xl lg:text-5xl">
            {DONATE_SECTION.heading}
          </h2>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {DONATE_SECTION.subheading}
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-[2px] w-8 rounded-full bg-primary/50" />
            <span className="h-[6px] w-[6px] rotate-45 rounded-[1px] bg-primary" />
            <span className="h-[2px] w-8 rounded-full bg-primary/50" />
          </div>
        </div>

        {/* ---- Description ---- */}
        <p className="mx-auto mb-14 max-w-3xl text-center text-base leading-relaxed text-white/60 sm:text-[17px]">
          {DONATE_SECTION.description}
        </p>

        {/* ---- Donation Category Cards ---- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DONATE_SECTION.donationCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || MdOutlineTempleHindu;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 transition-colors duration-500 group-hover:bg-primary/25">
                  <IconComponent className="h-7 w-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mt-5 font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-white">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ---- CTA Button ---- */}
        <div className="mt-14 text-center">
          <a
            href={DONATE_SECTION.buttonLink}
            className="inline-flex items-center rounded-full bg-primary px-10 py-4 font-[family-name:var(--font-oswald)] text-base font-medium tracking-wider text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 active:scale-[0.97] sm:text-lg"
          >
            {DONATE_SECTION.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
