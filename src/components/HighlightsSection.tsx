"use client";

import { useEffect, useRef, useState } from "react";
import { GiTempleGate, GiMeditation } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiFlowerLotus } from "react-icons/pi";
import { BsCalendarEvent } from "react-icons/bs";
import { HIGHLIGHTS_SECTION } from "@/constants/content";
import type { IconType } from "react-icons";

// ---------------------------------------------------------------------------
// Icon mapping -- maps the string keys used in content constants to actual
// react-icons components so content authors never touch JSX.
// ---------------------------------------------------------------------------
const ICON_MAP: Record<string, IconType> = {
  temple: GiTempleGate,
  meditation: GiMeditation,
  book: IoBookOutline,
  community: HiOutlineUserGroup,
  garden: PiFlowerLotus,
  calendar: BsCalendarEvent,
};

// ---------------------------------------------------------------------------
// Individual feature card
// ---------------------------------------------------------------------------
interface HighlightCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

function HighlightCard({ icon, title, description, index }: HighlightCardProps) {
  const Icon = ICON_MAP[icon];

  return (
    <div
      className="group flex flex-col items-center rounded-2xl bg-white px-8 py-10 text-center
                 shadow-sm transition-all duration-300
                 hover:-translate-y-2 hover:shadow-xl"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon circle */}
      <div
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full
                   bg-tertiary transition-colors duration-300
                   group-hover:bg-primary"
      >
        {Icon && (
          <Icon
            className="text-primary transition-colors duration-300
                       group-hover:text-white"
            size={36}
          />
        )}
      </div>

      {/* Title */}
      <h3
        className="mb-3 text-xl font-medium tracking-wide text-secondary
                   font-[family-name:var(--font-oswald)]"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="leading-relaxed text-text-light text-[15px]">
        {description}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Highlights section
// ---------------------------------------------------------------------------
export default function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const { sectionLabel, heading, subheading, items } = HIGHLIGHTS_SECTION;

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="relative bg-white"
    >
      {/* Inner wrapper with generous vertical padding */}
      <div
        className={`mx-auto max-w-7xl px-4 py-[100px] sm:px-6 lg:px-8
                    transition-all duration-[800ms] ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* ---- Section header ---- */}
        <div className="mb-16 text-center">
          {/* Decorative label */}
          <span className="font-decorative text-3xl text-primary">
            {sectionLabel}
          </span>

          {/* Heading */}
          <h2
            className="mt-2 text-3xl font-medium tracking-wide text-secondary
                       sm:text-4xl font-[family-name:var(--font-oswald)]"
          >
            {heading}
          </h2>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-2xl text-text-light text-[17px] leading-relaxed">
            {subheading}
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="block h-[2px] w-8 bg-primary/40" />
            <span className="block h-[2px] w-16 bg-primary" />
            <span className="block h-[2px] w-8 bg-primary/40" />
          </div>
        </div>

        {/* ---- Cards grid ---- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <HighlightCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
