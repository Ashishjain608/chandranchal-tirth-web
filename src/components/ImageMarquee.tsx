"use client";

import Image from "next/image";
import { useState } from "react";

interface MarqueeImage {
  src: string;
  alt: string;
}

interface ImageMarqueeProps {
  images: MarqueeImage[];
  speed?: number;
  direction?: "left" | "right";
}

export default function ImageMarquee({
  images,
  speed = 40,
  direction = "left",
}: ImageMarqueeProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  // Duplicate array for seamless loop
  const duplicatedImages = [...images, ...images];

  const animationDirection = direction === "left" ? "marquee-left" : "marquee-right";
  const duration = `${speed}s`;

  return (
    <div className="relative w-full overflow-hidden bg-secondary/5 py-6 sm:py-8">
      {/* Gradient edge masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent" />

      {/* Scrolling strip */}
      <div
        className="marquee-strip flex gap-4 sm:gap-5 hover:[animation-play-state:paused]"
        style={{
          animation: `${animationDirection} ${duration} linear infinite`,
        }}
      >
        {duplicatedImages.map((image, index) => {
          const originalIndex = index % images.length;
          const hasError = imageErrors.has(originalIndex);

          return (
            <div
              key={`${image.src}-${index}`}
              className="relative h-[160px] w-[220px] flex-shrink-0 overflow-hidden rounded-xl shadow-md sm:h-[200px] sm:w-[280px]"
            >
              {hasError ? (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #363e5a 0%, #4a5478 50%, #d88e7d 100%)",
                  }}
                >
                  <span className="text-sm text-white/50">{image.alt}</span>
                </div>
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="280px"
                  className="object-cover"
                  onError={() => handleImageError(originalIndex)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
