"use client";

import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { HERO_SLIDES } from "@/constants/content";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Gradient fallbacks when images are unavailable
const SLIDE_GRADIENTS = [
  "linear-gradient(135deg, #363e5a 0%, #4a5478 40%, #5a6488 100%)",
  "linear-gradient(135deg, #4a3f5a 0%, #5a4878 40%, #6a5888 100%)",
  "linear-gradient(135deg, #3a4e5a 0%, #4a6078 40%, #5a7088 100%)",
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        loop={true}
        speed={1200}
        onSlideChange={handleSlideChange}
        className="h-full w-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            {/* Background with Ken Burns effect */}
            <div
              className={`absolute inset-0 h-full w-full ${
                activeIndex === index ? "ken-burns" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Gradient fallback behind the image */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    SLIDE_GRADIENTS[index % SLIDE_GRADIENTS.length],
                }}
              />
            </div>

            {/* Dark gradient overlay for text readability */}
            <div className="gradient-overlay absolute inset-0 z-10" />

            {/* Slide content */}
            <div className="relative z-20 flex h-full w-full items-center justify-center px-4">
              <div className="max-w-4xl text-center">
                {/* Decorative Om / Swastik accent line */}
                <div
                  className={`mb-4 transition-all duration-1000 ease-out ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <span className="font-decorative text-2xl tracking-wide text-primary-light sm:text-3xl">
                    ॥ श्री ॥
                  </span>
                </div>

                {/* Hindi heading */}
                <h1
                  className={`font-[family-name:var(--font-oswald)] text-4xl font-semibold leading-tight tracking-wide text-white transition-all duration-1000 ease-out sm:text-5xl md:text-6xl lg:text-7xl ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  {slide.heading}
                </h1>

                {/* Decorative divider */}
                <div
                  className={`mx-auto my-5 flex items-center justify-center gap-3 transition-all duration-1000 ease-out sm:my-6 ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "550ms" }}
                >
                  <span className="block h-[1px] w-12 bg-primary sm:w-16" />
                  <span className="text-lg text-primary">&#9672;</span>
                  <span className="block h-[1px] w-12 bg-primary sm:w-16" />
                </div>

                {/* English subheading */}
                <h2
                  className={`font-decorative text-2xl tracking-wide text-primary-light transition-all duration-1000 ease-out sm:text-3xl md:text-4xl ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "700ms" }}
                >
                  {slide.subheading}
                </h2>

                {/* Description */}
                <p
                  className={`mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-white/85 transition-all duration-1000 ease-out sm:mt-6 sm:text-lg md:text-xl ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "900ms" }}
                >
                  {slide.description}
                </p>

                {/* CTA Button */}
                <div
                  className={`mt-8 transition-all duration-1000 ease-out sm:mt-10 ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "1100ms" }}
                >
                  <a
                    href={slide.buttonLink}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-primary bg-primary px-8 py-3 font-[family-name:var(--font-oswald)] text-sm font-medium uppercase tracking-widest text-white transition-all duration-500 hover:bg-transparent hover:text-primary sm:px-10 sm:py-4 sm:text-base"
                  >
                    <span className="relative z-10">{slide.buttonText}</span>
                    <svg
                      className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination container */}
      <div className="hero-pagination absolute bottom-20 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center gap-2 sm:bottom-24" />

      {/* Scroll-down indicator */}
      <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 sm:bottom-8">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-white/70 transition-colors duration-300 hover:text-primary"
          aria-label="Scroll down to explore"
        >
          <span className="font-[family-name:var(--font-oswald)] text-xs uppercase tracking-[0.2em]">
            Scroll Down
          </span>
          <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1">
            <span className="animate-bounce-slow block h-2 w-1 rounded-full bg-current" />
          </span>
        </a>
      </div>

      {/* Side decorative elements */}
      <div className="pointer-events-none absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 sm:left-8 lg:block">
        <div className="flex flex-col items-center gap-3">
          <span className="block h-16 w-[1px] bg-white/20" />
          <span className="font-decorative text-sm text-white/40 [writing-mode:vertical-lr]">
            Jai Jinendra
          </span>
          <span className="block h-16 w-[1px] bg-white/20" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 sm:right-8 lg:block">
        <div className="flex flex-col items-center gap-3">
          <span className="block h-16 w-[1px] bg-white/20" />
          <span className="font-decorative text-sm text-white/40 [writing-mode:vertical-rl]">
            जय जिनेंद्र
          </span>
          <span className="block h-16 w-[1px] bg-white/20" />
        </div>
      </div>

      {/* Custom CSS for scroll bounce animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.3;
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
