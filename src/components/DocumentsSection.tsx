"use client";

import { useEffect, useRef, useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineTempleHindu } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { DOCUMENTS_SECTION } from "@/constants/content";
import type { IconType } from "react-icons";

// ---------------------------------------------------------------------------
// Icon mapping -- maps the string keys used in content constants to actual
// react-icons components so content authors never touch JSX.
// ---------------------------------------------------------------------------
const ICON_MAP: Record<string, IconType> = {
  book: IoBookOutline,
  donation: MdOutlineTempleHindu,
  news: BsNewspaper,
};

// ---------------------------------------------------------------------------
// Individual document card
// ---------------------------------------------------------------------------
interface DocumentCardProps {
  title: string;
  description: string;
  file: string;
  icon: string;
  index: number;
}

function DocumentCard({ title, description, file, icon, index }: DocumentCardProps) {
  const Icon = ICON_MAP[icon] || IoBookOutline;

  return (
    <div
      className="group flex flex-col items-center rounded-2xl bg-tertiary-light px-8 py-10 text-center
                 shadow-sm transition-all duration-300
                 hover:-translate-y-1 hover:shadow-lg"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon circle */}
      <div
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full
                   bg-tertiary transition-colors duration-300
                   group-hover:bg-primary"
      >
        <Icon
          className="text-primary transition-colors duration-300
                     group-hover:text-white"
          size={36}
        />
      </div>

      {/* Title */}
      <h3
        className="mb-3 text-xl font-semibold tracking-wide text-secondary
                   font-[family-name:var(--font-oswald)]"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-text-light text-[15px]">
        {description}
      </p>

      {/* Download button */}
      <a
        href={file}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2
                   font-[family-name:var(--font-oswald)] text-sm font-medium tracking-wide text-white
                   shadow-md shadow-primary/20 transition-all duration-300
                   hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30
                   active:scale-[0.97]"
      >
        <HiOutlineDownload className="h-4 w-4" />
        डाउनलोड करें
      </a>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Documents section
// ---------------------------------------------------------------------------
export default function DocumentsSection() {
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

  const { sectionLabel, heading, headingEnglish, subheading, documents } = DOCUMENTS_SECTION;

  return (
    <section
      id="documents"
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
            className="mt-2 text-3xl font-semibold tracking-wide text-secondary
                       sm:text-4xl lg:text-5xl font-[family-name:var(--font-oswald)]"
          >
            {heading}
          </h2>

          {/* English subheading */}
          <p className="mt-2 text-lg text-secondary/70 font-[family-name:var(--font-oswald)] tracking-wide">
            {headingEnglish}
          </p>

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => (
            <DocumentCard
              key={doc.title}
              title={doc.title}
              description={doc.description}
              file={doc.file}
              icon={doc.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
