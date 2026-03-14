"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BsCalendarEvent, BsClock } from "react-icons/bs";
import { EVENTS_SECTION } from "@/constants/content";

export default function EventsSection() {
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
      id="events"
      ref={sectionRef}
      className="section-fade-in bg-white py-[100px] lg:py-[120px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---- Section Header ---- */}
        <div className="mb-16 text-center">
          {/* Decorative label */}
          <span className="font-decorative text-3xl text-primary sm:text-4xl">
            {EVENTS_SECTION.sectionLabel}
          </span>

          {/* Heading */}
          <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-semibold tracking-wide text-secondary sm:text-4xl lg:text-5xl">
            {EVENTS_SECTION.heading}
          </h2>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-light sm:text-lg">
            {EVENTS_SECTION.subheading}
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-[2px] w-8 rounded-full bg-primary/40" />
            <span className="h-[6px] w-[6px] rotate-45 rounded-[1px] bg-primary" />
            <span className="h-[2px] w-8 rounded-full bg-primary/40" />
          </div>
        </div>

        {/* ---- Event Cards Grid ---- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS_SECTION.events.map((event, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-secondary/8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/12"
            >
              {/* Card Image with Date Badge */}
              <div className="relative h-48 w-full overflow-hidden bg-tertiary sm:h-56 md:h-60">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />

                {/* Date badge overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 shadow-md shadow-primary/30">
                  <BsCalendarEvent className="h-3.5 w-3.5 text-white" />
                  <span className="font-[family-name:var(--font-oswald)] text-sm font-medium tracking-wide text-white">
                    {event.date}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold tracking-wide text-secondary transition-colors duration-300 group-hover:text-primary lg:text-[22px]">
                  {event.title}
                </h3>

                {/* Time */}
                <div className="mt-3 flex items-center gap-2 text-primary">
                  <BsClock className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{event.time}</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-[15px] leading-relaxed text-text-light">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
