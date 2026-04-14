"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageBandProps {
  imageSrc: string;
  overlayText?: string;
  overlaySubtext?: string;
}

export default function ParallaxImageBand({
  imageSrc,
  overlayText,
  overlaySubtext,
}: ParallaxImageBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden h-[250px] md:h-[350px]"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          top: "-20%",
          bottom: "-20%",
          height: "140%",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(54, 62, 90, 0.5)" }}
      />

      {/* Optional text overlay */}
      {(overlayText || overlaySubtext) && (
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          {overlayText && (
            <h3 className="font-[family-name:var(--font-oswald)] text-3xl font-semibold tracking-wide text-white sm:text-4xl lg:text-5xl">
              {overlayText}
            </h3>
          )}
          {overlaySubtext && (
            <p className="mt-2 font-[family-name:var(--font-oswald)] text-lg tracking-wide text-white/70 sm:text-xl">
              {overlaySubtext}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
