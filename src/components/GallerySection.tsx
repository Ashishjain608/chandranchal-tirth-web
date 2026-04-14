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
      <path d="M30 35C30 35 40 40 45 55C50 70 45 85 45 85" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M70 35C70 35 60 40 55 55C50 70 55 85 55 85" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  ),
  // Temple dome / Shikhara
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L50 20" stroke="currentColor" strokeWidth="2" />
      <path d="M45 20C45 20 35 40 30 55L70 55C65 40 55 20 55 20" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <rect x="28" y="55" width="44" height="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <rect x="25" y="60" width="50" height="30" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <rect x="42" y="68" width="16" height="22" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="50" cy="15" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  // Ahimsa hand / Jain hand
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15C50 15 30 30 25 50C20 70 30 85 50 85C70 85 80 70 75 50C70 30 50 15 50 15Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <circle cx="50" cy="52" r="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M50 44L50 60M42 52L58 52" stroke="currentColor" strokeWidth="1.5" />
      <path d="M44 46L56 58M56 46L44 58" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  ),
  // Dharma Chakra / Wheel
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="28.8" y1="28.8" x2="71.2" y2="71.2" stroke="currentColor" strokeWidth="1" />
      <line x1="71.2" y1="28.8" x2="28.8" y2="71.2" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  // Swastika (sacred Jain symbol)
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 25L50 75" stroke="currentColor" strokeWidth="2" />
      <path d="M25 50L75 50" stroke="currentColor" strokeWidth="2" />
      <path d="M50 25L65 25" stroke="currentColor" strokeWidth="2" />
      <path d="M75 50L75 35" stroke="currentColor" strokeWidth="2" />
      <path d="M50 75L35 75" stroke="currentColor" strokeWidth="2" />
      <path d="M25 50L25 65" stroke="currentColor" strokeWidth="2" />
      <circle cx="37" cy="37" r="3" fill="currentColor" fillOpacity="0.3" />
      <circle cx="63" cy="37" r="3" fill="currentColor" fillOpacity="0.3" />
      <circle cx="37" cy="63" r="3" fill="currentColor" fillOpacity="0.3" />
      <circle cx="63" cy="63" r="3" fill="currentColor" fillOpacity="0.3" />
    </svg>
  ),
  // Om / Aum symbol (simplified)
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 65C30 65 25 45 40 35C55 25 65 40 55 55C45 70 30 65 30 65Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M55 55C55 55 65 50 70 40C75 30 70 20 60 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M45 75C45 75 55 78 65 70C75 62 72 50 72 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="62" cy="15" r="3" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  // Diya / Lamp
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20C50 20 48 30 48 35C48 38 50 40 50 40C50 40 52 38 52 35C52 30 50 20 50 20Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M30 50C30 50 28 65 35 72C42 79 58 79 65 72C72 65 70 50 70 50" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <line x1="35" y1="79" x2="65" y2="79" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="40" x2="50" y2="42" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  // Three dots / Tri-ratna
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15L65 45L50 40L35 45Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="50" cy="55" r="5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <circle cx="36" cy="70" r="5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <circle cx="64" cy="70" r="5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <path d="M25 82L75 82" stroke="currentColor" strokeWidth="1.5" />
      <path d="M30 86L70 86" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
];

// Unique gradient pairs for each placeholder
const PLACEHOLDER_GRADIENTS = [
  "linear-gradient(135deg, #d88e7d 0%, #e6a898 50%, #f8eae1 100%)",
  "linear-gradient(135deg, #363e5a 0%, #4a5478 50%, #7a82a0 100%)",
  "linear-gradient(135deg, #b8860b 0%, #d4a843 50%, #f0d68a 100%)",
  "linear-gradient(135deg, #4a5478 0%, #6b7ba0 50%, #eaf7fa 100%)",
  "linear-gradient(135deg, #c47a68 0%, #d88e7d 50%, #f6e0db 100%)",
  "linear-gradient(135deg, #2c3450 0%, #363e5a 50%, #5a6480 100%)",
  "linear-gradient(135deg, #d4a843 0%, #b8860b 50%, #8a6408 100%)",
  "linear-gradient(135deg, #e6a898 0%, #f6e0db 50%, #eaf7fa 100%)",
];

// Row span configuration for masonry-like effect (simplified for fewer images per category)
const ROW_SPANS = [2, 1, 1, 2, 1, 2, 1, 1];

// Tab definitions
const TABS = [
  ...GALLERY_SECTION.categories.map((cat) => ({
    id: cat.id,
    label: cat.label,
  })),
  { id: "videos", label: "वीडियो" },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(
    GALLERY_SECTION.categories[0]?.id || "temple"
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [videoModalIndex, setVideoModalIndex] = useState<number | null>(null);

  // Get the current images array based on active category
  const currentCategory = GALLERY_SECTION.categories.find(
    (cat) => cat.id === activeCategory
  );
  const currentImages = currentCategory?.images || [];

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
          prev !== null ? (prev + 1) % currentImages.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + currentImages.length) % currentImages.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, currentImages.length]);

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
        ? (prev - 1 + currentImages.length) % currentImages.length
        : null
    );
  };

  const goToNext = () => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % currentImages.length : null
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

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setLightboxIndex(null);
                }}
                className={`px-6 py-2.5 rounded-full font-[family-name:var(--font-oswald)] text-sm sm:text-base font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === tab.id
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-white text-secondary hover:bg-primary/10 shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Image Grid (for temple and events categories) */}
          {activeCategory !== "videos" && (
            <div className="grid grid-cols-1 gap-4 auto-rows-[220px] sm:grid-cols-2 sm:auto-rows-[200px] lg:grid-cols-3 md:gap-5">
              {currentImages.map((image, index) => {
                const errorKey = `${activeCategory}-${index}`;
                const showPlaceholder = imageErrors.has(errorKey);
                const spanRows = ROW_SPANS[index % ROW_SPANS.length] || 1;

                return (
                  <div
                    key={`${activeCategory}-${index}`}
                    className={`gallery-item group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 ${
                      spanRows === 2 ? "sm:row-span-2" : "row-span-1"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
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
                    {/* Image or Placeholder */}
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

                    {/* Zoom icon indicator */}
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
          )}

          {/* Videos Grid */}
          {activeCategory === "videos" && (
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

                      {/* Play button overlay */}
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
          )}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {lightboxIndex !== null && activeCategory !== "videos" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${currentImages[lightboxIndex]?.caption}`}
        >
          {/* Close Button */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Lightbox Image Content */}
          <div
            className="relative w-[90vw] h-[75vh] md:w-[80vw] md:h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {imageErrors.has(`${activeCategory}-${lightboxIndex}`) ? (
              <div
                className="w-full h-full rounded-lg flex items-center justify-center"
                style={{
                  background:
                    PLACEHOLDER_GRADIENTS[
                      lightboxIndex % PLACEHOLDER_GRADIENTS.length
                    ],
                }}
              >
                {renderPlaceholder(lightboxIndex, true)}
              </div>
            ) : (
              <Image
                src={currentImages[lightboxIndex].src}
                alt={currentImages[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-contain rounded-lg"
                onError={() => handleImageError(`${activeCategory}-${lightboxIndex}`)}
                priority
              />
            )}
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-medium tracking-wide">
              {currentImages[lightboxIndex]?.caption}
            </p>
            <p className="text-white/60 text-sm mt-1">
              {lightboxIndex + 1} / {currentImages.length}
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
          {/* Close Button */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Video Player */}
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

            {/* Caption */}
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
