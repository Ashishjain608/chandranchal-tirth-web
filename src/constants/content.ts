// ============================================================
// CHANDRANCHAL SWASTHI TEERTH - STATIC CONTENT CONSTANTS
// ============================================================
// All static text content is organized here for easy updates.
// Simply modify the values below to update the website content.
// ============================================================

// ----- SITE META -----
export const SITE_META = {
  title: "Chandranchal Swasthi Teerth",
  tagline: "श्री चंद्रांचल स्वस्ति तीर्थ",
  description:
    "A sacred Jain pilgrimage destination dedicated to spiritual growth, peace, and the eternal teachings of Lord Mahavir.",
  keywords:
    "Jain temple, Chandranchal, Swasthi Teerth, Jain Tirth, Pyawadi, Rajasthan, Jain pilgrimage",
  ogImage: "/images/og-image.jpg",
};

// ----- NAVIGATION -----
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

// ----- HERO SECTION -----
export const HERO_SLIDES = [
  {
    id: 1,
    heading: "श्री चंद्रांचल स्वस्ति तीर्थ",
    subheading: "Chandranchal Swasthi Teerth",
    description:
      "A divine abode of peace, devotion, and spiritual enlightenment nestled in the heart of Rajasthan.",
    buttonText: "Explore More",
    buttonLink: "#about",
    image: "/images/hero-1.jpg",
  },
  {
    id: 2,
    heading: "अहिंसा परमो धर्मः",
    subheading: "Ahimsa Paramo Dharma",
    description:
      "Non-violence is the supreme religion. Experience the timeless teachings of Jainism at our sacred teerth.",
    buttonText: "Plan Your Visit",
    buttonLink: "#contact",
    image: "/images/hero-2.jpg",
  },
  {
    id: 3,
    heading: "आत्मा की शांति का मार्ग",
    subheading: "Path to Inner Peace",
    description:
      "Immerse yourself in meditation, prayer, and the serene atmosphere of this holy pilgrimage site.",
    buttonText: "Donate Now",
    buttonLink: "#donate",
    image: "/images/hero-3.jpg",
  },
];

// ----- ABOUT SECTION -----
export const ABOUT_SECTION = {
  sectionLabel: "About Us",
  heading: "श्री चंद्रांचल स्वस्ति तीर्थ",
  headingEnglish: "A Sacred Pilgrimage Destination",
  paragraphs: [
    "Chandranchal Swasthi Teerth is a revered Jain pilgrimage site located in Pyawadi, Rajasthan. This sacred destination is dedicated to the preservation and propagation of Jain teachings, serving as a beacon of spiritual enlightenment for devotees from across the world.",
    "The teerth features magnificent architecture that reflects the rich heritage of Jain temple construction, with intricate carvings, serene meditation halls, and beautifully maintained gardens that inspire peace and contemplation.",
    "Our mission is to provide a tranquil environment where devotees can deepen their spiritual practice, study the teachings of the Tirthankars, and find inner peace through meditation and prayer.",
  ],
  image: "/images/about-temple.jpg",
  stats: [
    { number: "1000+", label: "Devotees Monthly" },
    { number: "24", label: "Tirthankars Honored" },
    { number: "365", label: "Days of Service" },
    { number: "50+", label: "Years of Heritage" },
  ],
};

// ----- HIGHLIGHTS / FEATURES SECTION -----
export const HIGHLIGHTS_SECTION = {
  sectionLabel: "Our Highlights",
  heading: "What Makes Us Special",
  subheading: "Discover the unique features of Chandranchal Swasthi Teerth",
  items: [
    {
      icon: "temple",
      title: "Divine Architecture",
      description:
        "Magnificent temple architecture with intricate marble carvings and traditional Jain design elements that inspire awe and devotion.",
    },
    {
      icon: "meditation",
      title: "Meditation Center",
      description:
        "A serene meditation hall where devotees can practice dhyana and experience deep inner peace away from worldly distractions.",
    },
    {
      icon: "book",
      title: "Scriptural Studies",
      description:
        "Regular classes and discourses on Jain agamas, philosophy, and the teachings of Lord Mahavir and other Tirthankars.",
    },
    {
      icon: "community",
      title: "Community Service",
      description:
        "Active community engagement through charitable activities, food distribution, and support for those in need.",
    },
    {
      icon: "garden",
      title: "Sacred Gardens",
      description:
        "Beautifully landscaped gardens providing a peaceful atmosphere for contemplation and spiritual reflection.",
    },
    {
      icon: "calendar",
      title: "Festival Celebrations",
      description:
        "Grand celebrations of Jain festivals including Mahavir Jayanti, Paryushana, and Das Lakshana with great devotion.",
    },
  ],
};

// ----- GALLERY SECTION -----
export const GALLERY_SECTION = {
  sectionLabel: "Gallery",
  heading: "Sacred Glimpses",
  subheading: "Explore the beauty and serenity of Chandranchal Swasthi Teerth",
  images: [
    {
      src: "/images/gallery-1.jpg",
      alt: "Main temple view of Chandranchal Swasthi Teerth",
      caption: "Main Temple",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Interior of the prayer hall",
      caption: "Prayer Hall",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Intricate marble carvings",
      caption: "Marble Carvings",
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Temple garden and pathways",
      caption: "Temple Gardens",
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Festival celebrations at the temple",
      caption: "Festival Celebrations",
    },
    {
      src: "/images/gallery-6.jpg",
      alt: "Meditation area",
      caption: "Meditation Area",
    },
    {
      src: "/images/gallery-7.jpg",
      alt: "Evening aarti at the temple",
      caption: "Evening Aarti",
    },
    {
      src: "/images/gallery-8.jpg",
      alt: "Aerial view of the temple complex",
      caption: "Temple Complex",
    },
  ],
};

// ----- EVENTS SECTION -----
export const EVENTS_SECTION = {
  sectionLabel: "Upcoming Events",
  heading: "Join Our Celebrations",
  subheading:
    "Participate in sacred festivals and spiritual gatherings at the teerth",
  events: [
    {
      title: "Mahavir Jayanti Celebration",
      date: "April 10, 2026",
      time: "6:00 AM - 9:00 PM",
      description:
        "Grand celebration of the birth anniversary of Lord Mahavir with special prayers, processions, and community meals.",
      image: "/images/event-1.jpg",
    },
    {
      title: "Paryushana Mahaparv",
      date: "August 2026",
      time: "Throughout the week",
      description:
        "The most important Jain festival featuring eight days of fasting, prayer, and spiritual reflection.",
      image: "/images/event-2.jpg",
    },
    {
      title: "Weekly Satsang",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      description:
        "Regular spiritual discourse and prayer gathering open to all devotees and spiritual seekers.",
      image: "/images/event-3.jpg",
    },
  ],
};

// ----- DONATE SECTION -----
export const DONATE_SECTION = {
  sectionLabel: "Support Us",
  heading: "Contribute to a Sacred Cause",
  subheading:
    "Your generous donations help maintain the temple and support our community service activities",
  description:
    "Every contribution, big or small, helps us preserve this sacred space, organize spiritual events, and serve the community. Your donations support temple maintenance, food distribution, educational programs, and charitable activities.",
  buttonText: "Donate Now",
  buttonLink: "#contact",
  donationCategories: [
    {
      title: "Temple Maintenance",
      description: "Help maintain the beauty and sanctity of our sacred temple",
      icon: "maintenance",
    },
    {
      title: "Anna Daan (Food)",
      description: "Support daily meals for devotees and visitors",
      icon: "food",
    },
    {
      title: "Education",
      description: "Fund scriptural studies and spiritual education programs",
      icon: "education",
    },
    {
      title: "Community Service",
      description: "Support charitable activities for the underprivileged",
      icon: "service",
    },
  ],
};

// ----- CONTACT SECTION -----
export const CONTACT_SECTION = {
  sectionLabel: "Contact Us",
  heading: "Get in Touch",
  subheading: "We welcome your queries, suggestions, and visit plans",
  address: {
    line1: "Chandranchal Swasthi Teerth",
    line2: "Pyawadi, Rajasthan",
    line3: "India",
    full: "Chandranchal Swasthi Teerth, Pyawadi, Rajasthan, India",
  },
  phone: "+91 XXXXX XXXXX",
  email: "info@chandranchalswasthiteerth.org",
  timings: {
    morning: "6:00 AM - 12:00 PM",
    evening: "4:00 PM - 8:00 PM",
    label: "Darshan Timings",
  },
  googleMaps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.5!2d75.7353942!3d26.3247822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396e87e736148e9b%3A0x52a98629e7a9fde7!2sChandranchal%20Swasti%20Trith%2C%20Pyawadi!5e0!3m2!1sen!2sin!4v1",
    latitude: 26.3247822,
    longitude: 75.7353942,
    linkUrl: "https://maps.app.goo.gl/S1YvX6XM7c4kymSQ7",
  },
};

// ----- FOOTER -----
export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Chandranchal Swasthi Teerth. All Rights Reserved.`,
  tagline: "श्री चंद्रांचल स्वस्ति तीर्थ",
  description:
    "A sacred Jain pilgrimage destination dedicated to spiritual growth, peace, and the eternal teachings of the Tirthankars.",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { platform: "facebook", url: "#" },
    { platform: "instagram", url: "#" },
    { platform: "youtube", url: "#" },
    { platform: "whatsapp", url: "#" },
  ],
};

// ----- SACRED QUOTES (used in various sections) -----
export const SACRED_QUOTES = [
  {
    text: "जीवो जीवस्य जीवनम्",
    translation: "Every living being is the life of another living being",
    attribution: "Jain Scripture",
  },
  {
    text: "अहिंसा परमो धर्मः",
    translation: "Non-violence is the supreme religion",
    attribution: "Lord Mahavir",
  },
  {
    text: "परस्परोपग्रहो जीवानाम्",
    translation: "All life is bound together by mutual support and interdependence",
    attribution: "Tattvartha Sutra",
  },
];
