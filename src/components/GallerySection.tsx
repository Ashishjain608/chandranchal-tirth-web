"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { GALLERY_SECTION } from "@/constants/content";

// Placeholder SVG icons themed around Jain temple elements
const PLACEHOLDER_ICONS: React.FC<{ className?: string }>[] = [
  // Lotus flower
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20C50 20 35 35 35 50C35 65 50 80 50 80C50 80 65 65 65 50C65 35 50 20 50 20Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M50 20C50 20 30 28 25 45C20 62 35 80 35 80" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M50 20C50 20 70 28 75 45C80 62 65 80 65 80" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  // Temple dome
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L50 20" stroke="currentColor" strokeWidth="2" />
      <path d="M45 20C45 20 35 40 30 55L70 55C65 40 55 20 55 20" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <rect x="25" y="60" width="50" height="30" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <circle cx="50" cy="15" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  // Dharma Chakra
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  // Diya / Lamp
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20C50 20 48 30 48 35C48 38 50 40 50 40C50 40 52 38 52 35C52 30 50 20 50 20Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M30 50C30 50 28 65 35 72C42 79 58 79 65 72C72 65 70 50 70 50" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    </svg>
  ),
];

const PLACEHOLDER_GRADIENTS = [
  "linear-gradient(135deg, #d88e7d 0%, #e6a898 50%, #f8eae1 100%)",
  "linear-gradient(135deg, #363e5a 0%, #4a5478 50%, #7a82a0 100%)",
  "linear-gradient(135deg, #b8860b 0%, #d4a843 50%, #f0d68a 100%)",
  "linear-gradient(135deg, #4a5478 0%, #6b7ba0 50%, #eaf7fa 100%)",
  "linear-gradient(135deg, #c47a68 0%, #d88e7d 50%, #f6e0db 100%)",
  "linear-gradient(135deg, #2c3450 0%, #363e5a 50%, #5a6480 100%)",
];

// Row span pattern for masonry effect
const ROW_SPANS = [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [videoModalIndex, setVideoModalIndex] = useState<number | null>(null);

  const allImages = GALLERY_SECTION.images;

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  // Lock body scroll when lightbox or video modal is open
  useEffect(() => {
    if (lightboxIndex !== null || videoModalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, videoModalIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % allImages.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + allImages.length) % allImages.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, allImages.length]);

  // Keyboard handling for video modal
  useEffect(() => {
    if (videoModalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVideoModalIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [videoModalIndex]);

  const handleImageError = useCallback((errorKey: string) => {
    setImageErrors((prev) => new Set(prev).add(errorKey));
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + allImages.length) % allImages.length
        : null
    );
  };

  const goToNext = () => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allImages.length : null
    );
  };

  const renderPlaceholder = (index: number, large?: boolean) => {
    const Icon = PLACEHOLDER_ICONS[index % PLACEHOLDER_ICONS.length];
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length] }}
      >
        <Icon
          className={`${
            large ? "w-28 h-28 md:w-36 md:h-36" : "w-16 h-16 md:w-24 md:h-24"
          } text-white/40`}
        />
      </div>
    );
  };

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className={`relative py-[100px] md:py-[120px] section-fade-in ${
          isVisible ? "visible" : ""
        }`}
        style={{
          background: "linear-gradient(327deg, #F6E0DB 0%, #EAF7FA 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-decorative text-3xl md:text-4xl text-primary inline-block mb-2">
              {GALLERY_SECTION.sectionLabel}
            </span>
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-semibold text-secondary uppercase tracking-wide mb-2 sm:text-4xl lg:text-5xl">
              {GALLERY_SECTION.heading}
            </h2>
            <p className="font-[family-name:var(--font-oswald)] text-lg text-secondary/70 tracking-wide mb-4 sm:text-xl">
              {GALLERY_SECTION.headingEnglish}
            </p>
            <p className="text-text-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {GALLERY_SECTION.subheading}
            </p>
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="block w-12 h-[1px] bg-primary/40" />
              <span className="block w-2 h-2 rounded-full bg-primary" />
              <span className="block w-12 h-[1px] bg-primary/40" />
            </div>
          </div>

          {/* All Images — Masonry Grid */}
          <div className="grid grid-cols-1 gap-4 auto-rows-[220px] sm:grid-cols-2 sm:auto-rows-[200px] lg:grid-cols-3 md:gap-5">
            {allImages.map((image, index) => {
              const errorKey = `img-${index}`;
              const showPlaceholder = imageErrors.has(errorKey);
              const spanRows = ROW_SPANS[index % ROW_SPANS.length] || 1;

              return (
                <div
                  key={`img-${index}`}
                  className={`gallery-item group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 ${
                    spanRows === 2 ? "sm:row-span-2" : "row-span-1"
                  }`}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${image.caption}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                >
                  {showPlaceholder ? (
                    renderPlaceholder(index)
                  ) : (
                    <>
                      {renderPlaceholder(index)}
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                        onError={() => handleImageError(errorKey)}
                      />
                    </>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-all duration-500 flex items-end">
                    <div className="w-full p-4 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <p className="text-white font-[family-name:var(--font-oswald)] text-lg md:text-xl font-medium tracking-wide">
                        {image.caption}
                      </p>
                      <p className="text-white/70 text-sm mt-1 line-clamp-2">
                        {image.alt}
                      </p>
                    </div>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Videos Subsection — Always visible */}
          {GALLERY_SECTION.videos.length > 0 && (
            <div className="mt-20">
              {/* Videos header */}
              <div className="text-center mb-10">
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-semibold text-secondary uppercase tracking-wide sm:text-3xl">
                  वीडियो गैलरी
                </h3>
                <p className="mt-1 font-[family-name:var(--font-oswald)] text-base text-secondary/60 tracking-wide">
                  Video Gallery
                </p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span className="block w-8 h-[1px] bg-primary/40" />
                  <span className="block w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="block w-8 h-[1px] bg-primary/40" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {GALLERY_SECTION.videos.map((video, index) => {
                  const errorKey = `video-thumb-${index}`;
                  const showPlaceholder = imageErrors.has(errorKey);

                  return (
                    <div
                      key={index}
                      className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer"
                      onClick={() => setVideoModalIndex(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play video: ${video.caption}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setVideoModalIndex(index);
                        }
                      }}
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video bg-secondary/10">
                        {showPlaceholder ? (
                          renderPlaceholder(index)
                        ) : (
                          <>
                            {renderPlaceholder(index)}
                            <Image
                              src={video.thumbnail}
                              alt={video.caption}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                              onError={() => handleImageError(errorKey)}
                            />
                          </>
                        )}

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-secondary/30 group-hover:bg-secondary/50 transition-all duration-300" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/30">
                            <svg
                              className="w-7 h-7 md:w-8 md:h-8 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Caption */}
                      <div className="p-4 bg-white">
                        <p className="font-[family-name:var(--font-oswald)] text-lg font-medium tracking-wide text-secondary group-hover:text-primary transition-colors duration-300">
                          {video.caption}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${allImages[lightboxIndex]?.caption}`}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 group"
            aria-label="Close lightbox"
          >
            <svg
              className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[75vh] md:w-[80vw] md:h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {imageErrors.has(`img-${lightboxIndex}`) ? (
              <div
                className="w-full h-full rounded-lg flex items-center justify-center"
                style={{
                  background: PLACEHOLDER_GRADIENTS[lightboxIndex % PLACEHOLDER_GRADIENTS.length],
                }}
              >
                {renderPlaceholder(lightboxIndex, true)}
              </div>
            ) : (
              <Image
                src={allImages[lightboxIndex].src}
                alt={allImages[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-contain rounded-lg"
                onError={() => handleImageError(`img-${lightboxIndex}`)}
                priority
              />
            )}
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-medium tracking-wide">
              {allImages[lightboxIndex]?.caption}
            </p>
            <p className="text-white/60 text-sm mt-1">
              {lightboxIndex + 1} / {allImages.length}
            </p>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {videoModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setVideoModalIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Video: ${GALLERY_SECTION.videos[videoModalIndex]?.caption}`}
        >
          <button
            onClick={() => setVideoModalIndex(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 group"
            aria-label="Close video"
          >
            <svg
              className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-[90vw] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={GALLERY_SECTION.videos[videoModalIndex].src}
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
              style={{ maxHeight: "80vh" }}
            >
              Your browser does not support the video element.
            </video>
            <div className="mt-4 text-center">
              <p className="text-white font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-medium tracking-wide">
                {GALLERY_SECTION.videos[videoModalIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
