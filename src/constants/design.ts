// ============================================================
// DESIGN TOKENS & CONFIGURATION
// ============================================================
// Centralized design configuration matching the reference site.
// Update colors, fonts, and spacing here to change the look.
// ============================================================

export const COLORS = {
  primary: "#d88e7d", // Warm terracotta/rose
  primaryDark: "#c47a68",
  primaryLight: "#e6a898",
  secondary: "#363e5a", // Deep slate blue
  secondaryLight: "#4a5478",
  tertiary: "#f8eae1", // Soft cream
  tertiaryLight: "#fdf5f0",
  accent: "#b8860b", // Gold accent for temple
  text: "#202020",
  textLight: "#666666",
  textMuted: "#999999",
  white: "#ffffff",
  background: "#ffffff",
  gradientStart: "#F6E0DB",
  gradientEnd: "#EAF7FA",
};

export const FONTS = {
  heading: "'Oswald', sans-serif",
  body: "'Roboto', sans-serif",
  decorative: "'Bilbo Swash Caps', cursive",
};

export const GRADIENT = {
  primary: "linear-gradient(327deg, #F6E0DB 0%, #EAF7FA 100%)",
  warm: "linear-gradient(135deg, #f8eae1 0%, #fdf5f0 100%)",
  hero: "linear-gradient(180deg, rgba(54,62,90,0.7) 0%, rgba(54,62,90,0.4) 100%)",
};
