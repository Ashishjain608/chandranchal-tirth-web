"use client";

import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsDroplet } from "react-icons/bs";
import { SHANTIDHARA_SECTION } from "@/constants/content";

export default function ShantidharaBooking() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // ---- Form state ----
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");

  // ---- Validation errors ----
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    occasion?: string;
  }>({});

  // ---- Scroll fade-in with Intersection Observer (state-based) ----
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
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // ---- Validation ----
  const validate = (): boolean => {
    const newErrors: { name?: string; phone?: string; occasion?: string } = {};

    if (!name.trim()) {
      newErrors.name = "कृपया अपना नाम दर्ज करें";
    }

    if (!phone.trim() || !/^\d{10}$/.test(phone.trim())) {
      newErrors.phone = "कृपया 10 अंकों का मोबाइल नंबर दर्ज करें";
    }

    if (!occasion.trim()) {
      newErrors.occasion = "कृपया उपलक्ष्य दर्ज करें";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---- Form submit ----
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const message = `नाम: ${name.trim()}%0Aमोबाइल: ${phone.trim()}%0Aउपलक्ष्य: ${occasion.trim()}`;
    const url = `https://wa.me/${SHANTIDHARA_SECTION.whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  const { pricing, form } = SHANTIDHARA_SECTION;

  return (
    <section
      id="shantidhara"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(327deg, #F6E0DB 0%, #EAF7FA 100%)",
      }}
    >
      <div
        className={`mx-auto max-w-7xl px-4 py-[100px] sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[30px]"
        }`}
      >
        {/* ---- Two-column layout ---- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ======== Left Column: Header + Pricing ======== */}
          <div>
            {/* Section label */}
            <span className="font-decorative text-3xl text-primary sm:text-4xl">
              {SHANTIDHARA_SECTION.sectionLabel}
            </span>

            {/* Heading */}
            <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-semibold tracking-wide text-secondary sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
              {SHANTIDHARA_SECTION.heading}
            </h2>

            {/* English subheading */}
            <p className="mt-2 text-lg font-medium text-primary sm:text-xl">
              {SHANTIDHARA_SECTION.headingEnglish}
            </p>

            {/* Decorative divider */}
            <div className="mt-5 flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-12 rounded-full bg-primary" />
              <div className="h-[3px] w-3 rounded-full bg-primary opacity-60" />
              <div className="h-[3px] w-1.5 rounded-full bg-primary opacity-30" />
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-secondary/70 sm:text-[17px]">
              {SHANTIDHARA_SECTION.subheading}
            </p>

            {/* ---- Pricing Cards ---- */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {pricing.map((tier, index) => {
                const isHighlighted = tier.label === "वार्षिक";

                return (
                  <div
                    key={index}
                    className={`relative rounded-2xl p-6 text-center transition-all duration-300 ${
                      isHighlighted
                        ? "bg-primary shadow-lg shadow-primary/20 scale-[1.04]"
                        : "bg-white shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Best value badge */}
                    {isHighlighted && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                        Best Value
                      </span>
                    )}

                    {/* Droplet icon */}
                    <BsDroplet
                      className={`mx-auto h-6 w-6 ${
                        isHighlighted ? "text-white/80" : "text-primary"
                      }`}
                    />

                    {/* Label */}
                    <p
                      className={`mt-3 font-[family-name:var(--font-oswald)] text-sm font-medium uppercase tracking-wider ${
                        isHighlighted ? "text-white/90" : "text-secondary/60"
                      }`}
                    >
                      {tier.label}
                    </p>

                    {/* Amount */}
                    <p
                      className={`mt-2 font-[family-name:var(--font-oswald)] text-3xl font-bold ${
                        isHighlighted ? "text-white" : "text-primary"
                      }`}
                    >
                      {tier.amount}
                    </p>

                    {/* Period */}
                    <p
                      className={`mt-1 text-sm ${
                        isHighlighted ? "text-white/70" : "text-secondary/50"
                      }`}
                    >
                      {tier.period}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======== Right Column: Booking Form ======== */}
          <div className="flex items-center">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-full rounded-2xl bg-white p-8 shadow-lg sm:p-10"
            >
              <h3 className="mb-8 font-[family-name:var(--font-oswald)] text-2xl font-semibold tracking-wide text-secondary">
                बुकिंग फॉर्म
              </h3>

              {/* ---- Name Field ---- */}
              <div className="mb-6">
                <label
                  htmlFor="shantidhara-name"
                  className="mb-2 block font-[family-name:var(--font-oswald)] text-sm font-medium uppercase tracking-wider text-secondary"
                >
                  {form.nameLabel}
                </label>
                <input
                  id="shantidhara-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder={form.namePlaceholder}
                  className={`w-full border rounded-lg px-4 py-3 text-secondary placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* ---- Phone Field ---- */}
              <div className="mb-6">
                <label
                  htmlFor="shantidhara-phone"
                  className="mb-2 block font-[family-name:var(--font-oswald)] text-sm font-medium uppercase tracking-wider text-secondary"
                >
                  {form.phoneLabel}
                </label>
                <input
                  id="shantidhara-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  placeholder={form.phonePlaceholder}
                  className={`w-full border rounded-lg px-4 py-3 text-secondary placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${
                    errors.phone ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* ---- Occasion Field ---- */}
              <div className="mb-8">
                <label
                  htmlFor="shantidhara-occasion"
                  className="mb-2 block font-[family-name:var(--font-oswald)] text-sm font-medium uppercase tracking-wider text-secondary"
                >
                  {form.occasionLabel}
                </label>
                <input
                  id="shantidhara-occasion"
                  type="text"
                  value={occasion}
                  onChange={(e) => {
                    setOccasion(e.target.value);
                    if (errors.occasion) setErrors((prev) => ({ ...prev, occasion: undefined }));
                  }}
                  placeholder={form.occasionPlaceholder}
                  className={`w-full border rounded-lg px-4 py-3 text-secondary placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${
                    errors.occasion ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.occasion && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.occasion}</p>
                )}
              </div>

              {/* ---- Submit Button ---- */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-[0.97]"
              >
                <FaWhatsapp className="h-6 w-6" />
                {form.submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
