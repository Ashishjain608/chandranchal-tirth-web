"use client";

import { useEffect, useRef, useState } from "react";

export default function DonationUPI() {
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
      { threshold: 0.15 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <section
      id="donation"
      ref={sectionRef}
      className="bg-white py-16"
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
        }`}
      >
        <span className="font-decorative text-3xl text-primary">ऑनलाइन दान</span>
        <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-2xl font-semibold text-secondary sm:text-3xl">
          Online Donation
        </h2>
        <div className="mx-auto mt-6 flex items-center justify-center gap-2">
          <span className="h-[2px] w-8 rounded-full bg-primary/40" />
          <span className="h-[6px] w-[6px] rotate-45 rounded-[1px] bg-primary" />
          <span className="h-[2px] w-8 rounded-full bg-primary/40" />
        </div>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-gray-100 bg-tertiary-light p-8 shadow-sm">
          <p className="text-text-light leading-relaxed">
            बैंक खाता विवरण — Bank Account Details
          </p>
          <div className="mt-4 space-y-2 text-left mx-auto max-w-sm">
            <p className="flex justify-between"><span className="font-medium text-secondary">खाता नाम:</span><span className="text-text-light">Shri Swasti Kalyan Samiti</span></p>
            <p className="flex justify-between"><span className="font-medium text-secondary">खाता संख्या:</span><span className="text-text-light">12880100019646</span></p>
            <p className="flex justify-between"><span className="font-medium text-secondary">IFSC:</span><span className="text-text-light">BARB0PIPLOO</span></p>
            <p className="flex justify-between"><span className="font-medium text-secondary">बैंक:</span><span className="text-text-light">Bank of Baroda, Peeplu</span></p>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            UPI ID जल्द ही उपलब्ध होगा। कृपया बैंक ट्रांसफर या संपर्क अनुभाग का उपयोग करें।
          </p>
        </div>
      </div>
    </section>
  );
}
