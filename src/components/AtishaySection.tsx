"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GiTempleGate, GiMeditation, GiStoneBlock } from "react-icons/gi";
import { PiFlowerLotus } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { BsDroplet } from "react-icons/bs";
import { ATISHAY_SECTION } from "@/constants/content";
import type { IconType } from "react-icons";

// ---------------------------------------------------------------------------
// Icon mapping -- maps the string keys used in content constants to actual
// react-icons components so content authors never touch JSX.
// ---------------------------------------------------------------------------
const ICON_MAP: Record<string, IconType> = {
  temple: GiTempleGate,
  saints: GiMeditation,
  kesar: PiFlowerLotus,
  history: IoBookOutline,
  abhishek: BsDroplet,
  idol: GiStoneBlock,
};

// ---------------------------------------------------------------------------
// Individual atishay event card
// ---------------------------------------------------------------------------
interface AtishayCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

function AtishayCard({ icon, title, description, index }: AtishayCardProps) {
  const Icon = ICON_MAP[icon];

  return (
    <div
      className="group flex items-start gap-4 rounded-xl bg-white p-5
                 shadow-sm transition-all duration-300
                 hover:-translate-y-1 hover:shadow-lg"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon circle */}
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full
                   bg-tertiary transition-colors duration-300"
      >
        {Icon && (
          <Icon
            className="text-primary transition-colors duration-300"
            size={26}
          />
        )}
      </div>

      {/* Text content */}
      <div className="min-w-0">
        <h3
          className="text-lg font-medium tracking-wide text-secondary
                     font-[family-name:var(--font-oswald)]"
        >
          {title}
        </h3>
        <p className="mt-1 text-[15px] leading-relaxed text-text-light">
          {description}
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Atishay section
// ---------------------------------------------------------------------------
export default function AtishaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

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

  const { sectionLabel, heading, headingEnglish, subheading, image, events } =
    ATISHAY_SECTION;

  return (
    <section
      id="atishay"
      ref={sectionRef}
      className="relative bg-white"
    >
      <div
        className={`mx-auto max-w-7xl px-4 py-[100px] sm:px-6 lg:px-8
                    transition-all duration-[800ms] ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Image */}
          <div className="relative mx-4 sm:mx-0">
            {/* Decorative frame behind the image */}
            <div
              className="absolute -right-3 -bottom-3 h-full w-full rounded-lg border-2 border-primary sm:-right-4 sm:-bottom-4"
              aria-hidden="true"
            />
            <div
              className="absolute -top-3 -left-3 h-16 w-16 border-t-4 border-l-4 border-primary rounded-tl-lg sm:-top-4 sm:-left-4 sm:h-24 sm:w-24"
              aria-hidden="true"
            />
            <div
              className="absolute -right-3 -bottom-3 h-16 w-16 border-r-4 border-b-4 border-primary rounded-br-lg z-10 sm:-right-4 sm:-bottom-4 sm:h-24 sm:w-24"
              aria-hidden="true"
            />

            {/* Image container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-xl">
              {!imageError ? (
                <Image
                  src={image}
                  alt={`${heading} - ${headingEnglish}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  onError={() => setImageError(true)}
                  priority={false}
                />
              ) : (
                /* Placeholder gradient when image is not available */
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #363e5a 0%, #4a5478 40%, #d88e7d 100%)",
                  }}
                >
                  {/* Decorative temple silhouette placeholder */}
                  <div className="text-center text-white/80">
                    <svg
                      className="mx-auto mb-3 h-20 w-20 opacity-60"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Simple temple icon */}
                      <path
                        d="M50 8L15 40H85L50 8Z"
                        fill="currentColor"
                        opacity="0.8"
                      />
                      <rect
                        x="25"
                        y="40"
                        width="50"
                        height="50"
                        fill="currentColor"
                        opacity="0.6"
                      />
                      <rect
                        x="40"
                        y="60"
                        width="20"
                        height="30"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      <rect
                        x="30"
                        y="45"
                        width="12"
                        height="18"
                        rx="6"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      <rect
                        x="58"
                        y="45"
                        width="12"
                        height="18"
                        rx="6"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      {/* Spire */}
                      <rect
                        x="47"
                        y="0"
                        width="6"
                        height="12"
                        rx="3"
                        fill="currentColor"
                        opacity="0.8"
                      />
                    </svg>
                    <p className="font-[family-name:var(--font-oswald)] text-lg font-light tracking-wide">
                      Sacred Deity
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right column - Content */}
          <div>
            {/* Section label */}
            <span className="font-decorative text-3xl text-primary">
              {sectionLabel}
            </span>

            {/* Hindi heading */}
            <h2 className="mt-2 text-3xl font-[family-name:var(--font-oswald)] font-semibold text-secondary sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
              {heading}
            </h2>

            {/* English subheading */}
            <p className="mt-2 text-lg font-medium text-primary sm:text-xl">
              {headingEnglish}
            </p>

            {/* Decorative divider */}
            <div className="mt-5 flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-12 rounded-full bg-primary" />
              <div className="h-[3px] w-3 rounded-full bg-primary opacity-60" />
              <div className="h-[3px] w-1.5 rounded-full bg-primary opacity-30" />
            </div>

            {/* Subheading text */}
            <p className="mt-6 text-base leading-relaxed text-text-light">
              {subheading}
            </p>

            {/* Atishay event cards grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {events.map((event, index) => (
                <AtishayCard
                  key={event.title}
                  icon={event.icon}
                  title={event.title}
                  description={event.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
