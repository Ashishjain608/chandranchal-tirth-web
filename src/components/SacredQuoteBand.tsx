"use client";

import { motion } from "framer-motion";
import { SACRED_QUOTES } from "@/constants/content";

interface SacredQuoteBandProps {
  quoteIndex?: number;
  backgroundImage?: string;
}

export default function SacredQuoteBand({
  quoteIndex = 0,
  backgroundImage = "/images/gallery-5.jpg",
}: SacredQuoteBandProps) {
  const quote = SACRED_QUOTES[quoteIndex % SACRED_QUOTES.length];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: "300px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(54, 62, 90, 0.7)" }}
      />

      {/* Quote content */}
      <motion.div
        className="relative z-10 flex min-h-[300px] flex-col items-center justify-center px-6 py-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Decorative line */}
        <div className="mb-6 flex items-center gap-3" aria-hidden="true">
          <span className="block h-[1px] w-10 bg-primary/60" />
          <span className="block h-2.5 w-2.5 rotate-45 rounded-[1px] bg-primary" />
          <span className="block h-[1px] w-10 bg-primary/60" />
        </div>

        {/* Hindi quote */}
        <blockquote className="font-decorative text-4xl leading-relaxed text-white sm:text-5xl lg:text-6xl">
          &ldquo;{quote.text}&rdquo;
        </blockquote>

        {/* English translation */}
        <p className="mt-4 max-w-xl font-[family-name:var(--font-oswald)] text-lg tracking-wide text-white/70 sm:text-xl">
          {quote.translation}
        </p>

        {/* Attribution */}
        <p className="mt-3 text-sm text-primary-light">
          — {quote.attribution}
        </p>

        {/* Decorative line */}
        <div className="mt-6 flex items-center gap-3" aria-hidden="true">
          <span className="block h-[1px] w-10 bg-primary/60" />
          <span className="block h-2.5 w-2.5 rotate-45 rounded-[1px] bg-primary" />
          <span className="block h-[1px] w-10 bg-primary/60" />
        </div>
      </motion.div>
    </div>
  );
}
