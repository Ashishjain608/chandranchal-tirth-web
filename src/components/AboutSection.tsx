"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ABOUT_SECTION } from "@/constants/content";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

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
      id="about"
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
        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Image */}
          <div className="relative">
            {/* Decorative frame behind the image */}
            <div
              className="absolute -right-4 -bottom-4 h-full w-full rounded-lg border-2 border-primary"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-primary rounded-tl-lg"
              aria-hidden="true"
            />
            <div
              className="absolute -right-4 -bottom-4 h-24 w-24 border-r-4 border-b-4 border-primary rounded-br-lg z-10"
              aria-hidden="true"
            />

            {/* Image container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
              {!imageError ? (
                <Image
                  src={ABOUT_SECTION.image}
                  alt={`${ABOUT_SECTION.heading} - ${ABOUT_SECTION.headingEnglish}`}
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
                      Temple Image
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right column - Text content */}
          <div>
            {/* Section label */}
            <span className="font-decorative text-3xl text-primary">
              {ABOUT_SECTION.sectionLabel}
            </span>

            {/* Hindi heading */}
            <h2 className="mt-2 text-3xl font-[family-name:var(--font-oswald)] font-semibold text-secondary sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
              {ABOUT_SECTION.heading}
            </h2>

            {/* English subheading */}
            <p className="mt-2 text-lg font-medium text-primary sm:text-xl">
              {ABOUT_SECTION.headingEnglish}
            </p>

            {/* Decorative divider */}
            <div className="mt-5 flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-12 rounded-full bg-primary" />
              <div className="h-[3px] w-3 rounded-full bg-primary opacity-60" />
              <div className="h-[3px] w-1.5 rounded-full bg-primary opacity-30" />
            </div>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4">
              {ABOUT_SECTION.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-text-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {ABOUT_SECTION.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-primary sm:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm font-medium tracking-wide text-secondary uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
