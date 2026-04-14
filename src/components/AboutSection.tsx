"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ABOUT_SECTION } from "@/constants/content";

function ImageWithFallback({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #363e5a 0%, #4a5478 40%, #d88e7d 100%)",
        }}
      >
        <div className="text-center text-white/80">
          <svg
            className="mx-auto mb-3 h-20 w-20 opacity-60"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 8L15 40H85L50 8Z" fill="currentColor" opacity="0.8" />
            <rect x="25" y="40" width="50" height="50" fill="currentColor" opacity="0.6" />
            <rect x="40" y="60" width="20" height="30" fill="currentColor" opacity="0.4" />
            <rect x="47" y="0" width="6" height="12" rx="3" fill="currentColor" opacity="0.8" />
          </svg>
          <p className="font-[family-name:var(--font-oswald)] text-lg font-light tracking-wide">
            Image
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => setError(true)}
      priority={priority}
    />
  );
}

function AboutBlock({
  heading,
  headingEnglish,
  paragraphs,
  image,
  stats,
  reversed,
  thumbnails,
  sectionLabel,
  isVisible,
}: {
  heading: string;
  headingEnglish: string;
  paragraphs: string[];
  image: string;
  stats: { number: string; label: string }[];
  reversed?: boolean;
  thumbnails?: { src: string; alt: string }[];
  sectionLabel?: string;
  isVisible: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[30px]"
      }`}
    >
      {/* Image column */}
      <div className={`relative mx-4 sm:mx-0 ${reversed ? "lg:order-2" : ""}`}>
        {/* Decorative frame */}
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

        {/* Main image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
          <ImageWithFallback
            src={image}
            alt={`${heading} - ${headingEnglish}`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Thumbnail row (for Mataji block) */}
        {thumbnails && thumbnails.length > 0 && (
          <div className="mt-4 flex gap-3">
            {thumbnails.map((thumb, i) => (
              <div
                key={i}
                className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg shadow-md sm:h-24 sm:w-24"
              >
                <ImageWithFallback
                  src={thumb.src}
                  alt={thumb.alt}
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Text column */}
      <div className={reversed ? "lg:order-1" : ""}>
        {/* Section label (only on first block) */}
        {sectionLabel && (
          <span className="font-decorative text-3xl text-primary">
            {sectionLabel}
          </span>
        )}

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

        {/* Paragraphs */}
        <div className="mt-6 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-text-light">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => (
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
  );
}

export default function AboutSection() {
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
      { threshold: 0.1 }
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

  const { temple, mataji } = ABOUT_SECTION;

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
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        {/* Temple block — image left, text right */}
        <AboutBlock
          heading={temple.heading}
          headingEnglish={temple.headingEnglish}
          paragraphs={temple.paragraphs}
          image={temple.image}
          stats={temple.stats}
          sectionLabel={ABOUT_SECTION.sectionLabel}
          isVisible={isVisible}
        />

        {/* Spacer between blocks */}
        <div className="my-20 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="block h-[1px] w-16 bg-primary/30" />
          <span className="block h-2 w-2 rotate-45 rounded-[1px] bg-primary/50" />
          <span className="block h-[1px] w-16 bg-primary/30" />
        </div>

        {/* Mataji block — image right, text left */}
        <AboutBlock
          heading={mataji.heading}
          headingEnglish={mataji.headingEnglish}
          paragraphs={mataji.paragraphs}
          image={mataji.image}
          stats={mataji.stats}
          reversed
          thumbnails={mataji.thumbnails}
          isVisible={isVisible}
        />
      </div>
    </section>
  );
}
