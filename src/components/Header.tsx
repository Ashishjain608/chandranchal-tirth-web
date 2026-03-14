"use client";

import { useState, useEffect, useCallback } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NAV_ITEMS, SITE_META } from "@/constants/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // ---- Scroll listener: toggle solid header on scroll ----
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- Intersection observer: highlight active nav link ----
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // ---- Lock body scroll when mobile menu is open ----
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ---- Smooth scroll handler ----
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      const targetId = href.replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setActiveSection(href);
    },
    []
  );

  // ---- Jain Swastik decorative SVG ----
  const SwastikSymbol = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-300 ${
        isScrolled ? "text-primary" : "text-primary-light"
      }`}
      aria-hidden="true"
    >
      {/* Jain Swastik - four arms */}
      <g fill="currentColor">
        {/* Center */}
        <rect x="42" y="42" width="16" height="16" rx="2" />
        {/* Top arm */}
        <rect x="42" y="8" width="16" height="34" rx="2" />
        {/* Right hook on top */}
        <rect x="58" y="8" width="28" height="12" rx="2" />
        {/* Bottom arm */}
        <rect x="42" y="58" width="16" height="34" rx="2" />
        {/* Left hook on bottom */}
        <rect x="14" y="80" width="28" height="12" rx="2" />
        {/* Right arm */}
        <rect x="58" y="42" width="34" height="16" rx="2" />
        {/* Bottom hook on right */}
        <rect x="80" y="58" width="12" height="28" rx="2" />
        {/* Left arm */}
        <rect x="8" y="42" width="34" height="16" rx="2" />
        {/* Top hook on left */}
        <rect x="8" y="14" width="12" height="28" rx="2" />
      </g>
      {/* Three dots - representing the three jewels of Jainism */}
      <circle cx="24" cy="24" r="5" fill="currentColor" />
      <circle cx="76" cy="24" r="5" fill="currentColor" />
      <circle cx="76" cy="76" r="5" fill="currentColor" />
      <circle cx="24" cy="76" r="5" fill="currentColor" />
    </svg>
  );

  return (
    <>
      {/* ==================== HEADER ==================== */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Thin decorative top bar */}
        <div
          className={`h-[3px] w-full transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(90deg, #d88e7d 0%, #b8860b 50%, #d88e7d 100%)",
          }}
        />

        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-20">
          {/* ---- Logo / Temple Name ---- */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3"
          >
            {/* Swastik Symbol */}
            <div className="flex-shrink-0">
              <SwastikSymbol />
            </div>

            {/* Name block */}
            <div className="flex flex-col leading-none">
              <span
                className={`font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide transition-colors duration-300 sm:text-xl lg:text-[22px] ${
                  isScrolled ? "text-secondary" : "text-white"
                }`}
              >
                {SITE_META.title}
              </span>
              <span
                className={`mt-0.5 text-[11px] tracking-wider transition-colors duration-300 sm:text-xs ${
                  isScrolled ? "text-primary-dark" : "text-primary-light"
                }`}
              >
                {SITE_META.tagline}
              </span>
            </div>
          </a>

          {/* ---- Desktop Navigation ---- */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation">
            {NAV_ITEMS.map((item) => {
              const isDonate = item.label === "Donate";

              if (isDonate) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="ml-3 inline-flex items-center rounded-full bg-primary px-6 py-2 font-[family-name:var(--font-oswald)] text-sm font-medium tracking-wide text-white shadow-md shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/40 active:scale-95"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-2 font-[family-name:var(--font-oswald)] text-sm font-medium tracking-wide transition-colors duration-300 xl:px-4 ${
                    activeSection === item.href
                      ? isScrolled
                        ? "text-primary"
                        : "text-primary-light"
                      : isScrolled
                        ? "text-secondary hover:text-primary"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  {/* Active indicator bar */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                      activeSection === item.href ? "w-5" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* ---- Mobile Menu Button ---- */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 lg:hidden ${
              isMobileMenuOpen
                ? "text-secondary"
                : isScrolled
                  ? "text-secondary hover:bg-tertiary"
                  : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <RiCloseLine className="h-6 w-6" />
            ) : (
              <RiMenu3Line className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* ==================== MOBILE DRAWER ==================== */}

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-secondary/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 right-0 z-40 flex h-full w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex flex-col items-center border-b border-tertiary px-6 pt-20 pb-6">
          <SwastikSymbol />
          <h2 className="mt-3 font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-secondary">
            {SITE_META.title}
          </h2>
          <p className="mt-1 text-xs tracking-wider text-primary-dark">
            {SITE_META.tagline}
          </p>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-4" role="navigation">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isDonate = item.label === "Donate";
              const isActive = activeSection === item.href;

              if (isDonate) {
                return (
                  <li key={item.label} className="mt-4">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex w-full items-center justify-center rounded-full bg-primary py-3 font-[family-name:var(--font-oswald)] text-base font-medium tracking-wide text-white shadow-md shadow-primary/25 transition-all duration-300 hover:bg-primary-dark active:scale-[0.98]"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center rounded-lg px-4 py-3 font-[family-name:var(--font-oswald)] text-base font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-tertiary text-primary"
                        : "text-secondary hover:bg-tertiary-light hover:text-primary"
                    }`}
                  >
                    {/* Active dot indicator */}
                    <span
                      className={`mr-3 inline-block h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                        isActive ? "bg-primary" : "bg-transparent"
                      }`}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-tertiary px-6 py-5">
          <p className="text-center text-[11px] tracking-wide text-text-muted">
            A Sacred Jain Pilgrimage
          </p>
        </div>
      </div>
    </>
  );
}
