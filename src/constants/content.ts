// ============================================================
// CHANDRANCHAL SWASTI TEERTH - STATIC CONTENT CONSTANTS
// ============================================================
// All static text content is organized here for easy updates.
// Simply modify the values below to update the website content.
// ============================================================

// ----- SITE META -----
export const SITE_META = {
  title: "Chandraanchal Swasti Teerth",
  tagline: "श्री चंद्रांचल स्वस्ति तीर्थ",
  description:
    "श्री दिगंबर चंद्रांचल स्वस्ति तीर्थ - जैन अतिशय क्षेत्र प्यावड़ी, तह. पीपलू, जिला टोंक, राजस्थान। A sacred Jain pilgrimage destination dedicated to Lord Chandraprabhu.",
  keywords:
    "Jain temple, Chandraanchal, Swasti Teerth, Jain Tirth, Pyawadi, Pyawari, Peepal, Tonk, Rajasthan, Digambar Jain, Chandraprabhu, अतिशय क्षेत्र, चंद्रांचल स्वस्ति तीर्थ",
  ogImage: "/images/og-image.jpg",
};

// ----- NAVIGATION -----
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Atishay", href: "#atishay" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Yojanayen", href: "#yojanayen" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" },
];

// ----- HERO SECTION -----
export const HERO_SLIDES = [
  {
    id: 1,
    heading: "श्री चंद्रांचल स्वस्ति तीर्थ",
    subheading: "Chandraanchal Swasti Teerth",
    description:
      "श्री दिगंबर जैन अतिशय क्षेत्र प्यावड़ी, तह. पीपलू, जिला टोंक, राजस्थान — A divine abode of peace and spiritual enlightenment.",
    buttonText: "और जानें",
    buttonLink: "#about",
    image: "/images/hero-1.jpg",
  },
  {
    id: 2,
    heading: "अहिंसा परमो धर्मः",
    subheading: "Non-violence is the Supreme Religion",
    description:
      "गणिनी आर्यिका श्री स्वस्तिभूषण माता जी के पावन सानिध्य में अनुभव करें जैन धर्म की शाश्वत शिक्षाओं को।",
    buttonText: "संपर्क करें",
    buttonLink: "#contact",
    image: "/images/hero-2.jpg",
  },
  {
    id: 3,
    heading: "आत्मा की शांति का मार्ग",
    subheading: "Path to Inner Peace",
    description:
      "800 वर्ष से अधिक पुरानी प्रतिमाओं वाले इस पावन अतिशय क्षेत्र में ध्यान, प्रार्थना एवं शांति का अनुभव करें।",
    buttonText: "दान करें",
    buttonLink: "#yojanayen",
    image: "/images/hero-3.jpg",
  },
];

// ----- ABOUT SECTION (Tabbed: Temple + Mataji) -----
export const ABOUT_SECTION = {
  sectionLabel: "हमारे बारे में",
  tabs: [
    {
      id: "temple",
      label: "तीर्थ परिचय",
      heading: "श्री चंद्रांचल स्वस्ति तीर्थ",
      headingEnglish: "A Sacred Jain Pilgrimage Destination",
      paragraphs: [
        "श्री चंद्रांचल स्वस्ति तीर्थ, प्यावड़ी (तह. पीपलू, जिला टोंक, राजस्थान) एक प्राचीन एवं ऐतिहासिक दिगंबर जैन अतिशय क्षेत्र है। यहाँ विराजमान श्री 1008 चंद्रप्रभु भगवान मूलनायक के रूप में पूजित हैं।",
        "इस पावन क्षेत्र में विक्रम संवत 1904 से 1919 तक की प्राचीन प्रतिमाएँ स्थापित हैं, जो 800 वर्ष से अधिक पुरानी हैं। मंदिर परिसर में कुल 15 पवित्र प्रतिमाएँ विराजमान हैं।",
        "यहाँ 33 से अधिक प्रमाणित अतिशय (चमत्कार) घटित हुए हैं, जिनमें प्रतिमाओं पर केसर प्रकट होना प्रमुख है। यह क्षेत्र श्री स्वस्ति कल्याण समिति (रजि.), दिल्ली द्वारा संचालित है।",
      ],
      image: "/images/about-temple.jpg",
      stats: [
        { number: "800+", label: "वर्ष प्राचीन" },
        { number: "15", label: "पवित्र प्रतिमाएँ" },
        { number: "33+", label: "प्रमाणित अतिशय" },
        { number: "1000+", label: "मासिक दर्शनार्थी" },
      ],
    },
    {
      id: "mataji",
      label: "माता जी परिचय",
      heading: "गणिनी आर्यिका १०५ श्री स्वस्तिभूषण माता जी",
      headingEnglish: "Our Spiritual Guide",
      paragraphs: [
        "भारत गौरव, परम विदुषी, लेखिका, शास्त्रवाचनिका, जादूपुरी स्वस्तिधाम तीर्थ प्रणेत्री गणिनी आर्यिका १०५ श्री स्वस्तिभूषण माता जी चंद्रांचल स्वस्ति तीर्थ की प्रेरणास्रोत एवं मार्गदर्शिका हैं।",
        "माता जी ने 30 से अधिक वर्ष पूर्व दीक्षा ग्रहण की और तब से जैन धर्म के प्रचार-प्रसार, आध्यात्मिक शिक्षा एवं समाज सेवा में अपना जीवन समर्पित किया है।",
        "उनके पावन सानिध्य में अनेक तीर्थ क्षेत्रों का विकास हुआ है, जिनमें श्री मुनिसुव्रतनाथ दिगंबर जैन अतिशय क्षेत्र स्वस्तिधाम, जहाजपुर (भीलवाड़ा) प्रमुख है।",
      ],
      image: "/images/about-mataji.jpg",
      stats: [
        { number: "30+", label: "वर्ष दीक्षित" },
        { number: "100+", label: "ग्रंथ लिखित" },
        { number: "1000+", label: "प्रवचन" },
        { number: "5+", label: "तीर्थ विकसित" },
      ],
    },
  ],
};

// ----- ATISHAY SECTION (Miracles / replaces old HIGHLIGHTS) -----
export const ATISHAY_SECTION = {
  sectionLabel: "अतिशय विवरण",
  heading: "प्रमाणित चमत्कारिक घटनाएँ",
  headingEnglish: "Documented Miraculous Events",
  subheading: "श्री चंद्रांचल स्वस्ति तीर्थ पर घटित दिव्य अतिशय",
  image: "/images/atishay-deity.jpg",
  events: [
    {
      title: "प्रतिमाओं पर केसर प्रकट",
      description:
        "मूलनायक श्री चंद्रप्रभु भगवान एवं अन्य प्रतिमाओं पर स्वतः केसर प्रकट होना — यह अतिशय अनेक बार प्रमाणित हुआ है।",
      icon: "kesar",
    },
    {
      title: "प्राचीन प्रतिमाओं की प्राप्ति",
      description:
        "विक्रम संवत 1904-1919 काल की अत्यंत प्राचीन प्रतिमाएँ इस क्षेत्र से प्राप्त हुई हैं, जो इसकी ऐतिहासिकता का प्रमाण हैं।",
      icon: "idol",
    },
    {
      title: "अभिषेक के समय दिव्य संकेत",
      description:
        "पंचकल्याणक महोत्सव एवं विशेष अभिषेक के अवसर पर दिव्य एवं शुभ संकेत प्रकट होना।",
      icon: "abhishek",
    },
    {
      title: "आचार्यों एवं साधु-साध्वियों का आगमन",
      description:
        "आचार्य श्री 108 इंद्रनंदि जी महाराज, आचार्य श्री 108 विद्यानंद सागर जी सहित अनेक संतों ने इस क्षेत्र को अपने चरणों से पावन किया है।",
      icon: "saints",
    },
    {
      title: "शिलान्यास समारोह 2026",
      description:
        "जनवरी 2026 में भव्य जिन मंदिर शिलान्यास समारोह एवं 30वां दीक्षा जयंती महोत्सव का सफल आयोजन — 115 प्रतिमाएँ, 5 महाकलश, 5 यज्ञ।",
      icon: "temple",
    },
    {
      title: "800+ वर्ष का इतिहास",
      description:
        "प्यावड़ी एक प्राचीन एवं ऐतिहासिक अतिशय क्षेत्र है जिसकी मूर्तियाँ 800 वर्ष से अधिक पुरानी हैं — यह राजस्थान के प्रमुख जैन तीर्थों में से एक है।",
      icon: "history",
    },
  ],
};

// ----- GALLERY SECTION (with categories and videos) -----
export const GALLERY_SECTION = {
  sectionLabel: "गैलरी",
  heading: "पवित्र दृश्य",
  headingEnglish: "Sacred Glimpses",
  subheading: "चंद्रांचल स्वस्ति तीर्थ की दिव्य छवियाँ एवं वीडियो",
  categories: [
    {
      id: "temple",
      label: "मंदिर फोटो",
      images: [
        {
          src: "/images/gallery-1.jpg",
          alt: "श्री चंद्रप्रभु भगवान — मूलनायक",
          caption: "श्री चंद्रप्रभु भगवान (मूलनायक)",
        },
        {
          src: "/images/gallery-2.jpg",
          alt: "मुख्य मंदिर गर्भगृह का विहंगम दृश्य",
          caption: "मुख्य मंदिर गर्भगृह",
        },
        {
          src: "/images/gallery-3.jpg",
          alt: "पवित्र प्रतिमाओं का समूह",
          caption: "पवित्र मूर्तियाँ",
        },
        {
          src: "/images/gallery-4.jpg",
          alt: "प्राचीन क्षेत्रपाल देव प्रतिमा",
          caption: "प्राचीन क्षेत्रपाल देव",
        },
        {
          src: "/images/gallery-5.jpg",
          alt: "वर्तमान मंदिर भवन — प्यावड़ी",
          caption: "वर्तमान मंदिर भवन",
        },
        {
          src: "/images/gallery-6.jpg",
          alt: "माता जी मंदिर परिसर में",
          caption: "माता जी मंदिर परिसर में",
        },
        {
          src: "/images/gallery-7.jpg",
          alt: "श्री स्वस्तिभूषण माता जी",
          caption: "श्री स्वस्तिभूषण माता जी",
        },
        {
          src: "/images/gallery-8.jpg",
          alt: "माता जी — आशीर्वाद मुद्रा",
          caption: "माता जी — आशीर्वाद मुद्रा",
        },
      ],
    },
    {
      id: "events",
      label: "कार्यक्रम",
      images: [
        {
          src: "/images/event-1.jpg",
          alt: "शिलान्यास समारोह — जनवरी 2026",
          caption: "शिलान्यास समारोह एवं 30वां दीक्षा जयंती महोत्सव",
        },
      ],
    },
  ],
  videos: [
    {
      src: "/videos/sanctum-darshan.mp4",
      caption: "मुख्य गर्भगृह दर्शन",
      thumbnail: "/images/gallery-2.jpg",
    },
    {
      src: "/videos/abhishek-puja.mp4",
      caption: "अभिषेक पूजा",
      thumbnail: "/images/gallery-1.jpg",
    },
    {
      src: "/videos/sacred-idols.mp4",
      caption: "पवित्र मूर्तियाँ",
      thumbnail: "/images/gallery-3.jpg",
    },
    {
      src: "/videos/community-gathering.mp4",
      caption: "भव्य समारोह",
      thumbnail: "/images/event-1.jpg",
    },
    {
      src: "/videos/puja-ceremony.mp4",
      caption: "अभिषेक पूजा दृश्य",
      thumbnail: "/images/gallery-1.jpg",
    },
  ],
};

// ----- EVENTS SECTION -----
export const EVENTS_SECTION = {
  sectionLabel: "आयोजन",
  heading: "कार्यक्रम एवं उत्सव",
  headingEnglish: "Events & Celebrations",
  subheading: "तीर्थ क्षेत्र पर आयोजित पवित्र उत्सवों में सम्मिलित हों",
  emptyMessage: "कोई आगामी कार्यक्रम नहीं है",
  events: [
    {
      title: "भव्य जिन मंदिर शिलान्यास समारोह",
      titleEnglish: "Grand Temple Foundation Stone Ceremony",
      date: "22-23 जनवरी 2026",
      time: "सम्पूर्ण दिवस",
      description:
        "भव्य जिन मंदिर शिलान्यास समारोह एवं गणिनी आर्यिका श्री स्वस्तिभूषण माता जी का 30वां दीक्षा जयंती महोत्सव। 115 प्रतिमाएँ, 5 महाकलश, 5 यज्ञ के साथ विशाल आयोजन।",
      image: "/images/event-1.jpg",
      status: "completed" as const,
    },
    {
      title: "साप्ताहिक सत्संग",
      titleEnglish: "Weekly Satsang",
      date: "प्रत्येक रविवार",
      time: "प्रातः 10:00 - दोपहर 12:00",
      description:
        "नियमित आध्यात्मिक प्रवचन एवं प्रार्थना सभा — सभी श्रद्धालुओं एवं जिज्ञासुओं के लिए खुली।",
      image: "/images/gallery-1.jpg",
      status: "recurring" as const,
    },
    {
      title: "पर्युषण महापर्व",
      titleEnglish: "Paryushana Mahaparv",
      date: "अगस्त 2026",
      time: "सम्पूर्ण सप्ताह",
      description:
        "जैन धर्म का सबसे महत्वपूर्ण पर्व — आठ दिवसीय उपवास, प्रार्थना एवं आध्यात्मिक चिंतन का महापर्व।",
      image: "/images/gallery-2.jpg",
      status: "upcoming" as const,
    },
  ],
};

// ----- YOJANAYEN SECTION (Donation Schemes — replaces old DONATE) -----
export const YOJANAYEN_SECTION = {
  sectionLabel: "योजनाएं",
  heading: "सहयोग योजनाएं",
  headingEnglish: "Donation Schemes",
  subheading: "मंदिर निर्माण एवं धार्मिक कार्यों में अपना सहयोग दें",
  schemes: [
    {
      id: "shantidhara",
      title: "शांतिधारा योजना",
      titleEnglish: "Shantidhara Scheme",
      description:
        "प्रतिदिन मूलनायक श्री चंद्रप्रभु भगवान का जलाभिषेक — आप अपने नाम से शांतिधारा बुक कर सकते हैं।",
      pricing: [
        { label: "दैनिक", amount: "₹100" },
        { label: "मासिक", amount: "₹2,500" },
        { label: "वार्षिक", amount: "₹21,000" },
      ],
      cta: { text: "शांतिधारा बुक करें", link: "#booking" },
      icon: "shantidhara",
    },
    {
      id: "mandir-nirman",
      title: "मन्दिर निर्माण कार्य योजना",
      titleEnglish: "Temple Construction Scheme",
      description:
        "भव्य जिन मंदिर निर्माण हेतु सहयोग राशि — विभिन्न श्रेणियों में दान का अवसर।",
      posterImage: "/images/donation-poster.jpg",
      highlights: [
        { item: "मानस्तंभ", amount: "₹51 लाख" },
        { item: "सिंह द्वार", amount: "₹51 लाख" },
        { item: "मुख्य शिखर", amount: "₹21 लाख" },
        { item: "तोरण द्वार", amount: "₹11 लाख" },
      ],
      cta: { text: "दान करें", link: "#donation" },
      icon: "temple",
    },
  ],
  bankDetails: {
    accountName: "Shri Swasti Kalyan Samiti",
    accountNo: "12880100019646",
    ifsc: "BARB0PIPLOO",
    bank: "Bank of Baroda, Peeplu Branch",
  },
};

// ----- SHANTIDHARA SECTION (Booking) -----
export const SHANTIDHARA_SECTION = {
  sectionLabel: "शांतिधारा बुकिंग",
  heading: "शांतिधारा बुक करें",
  headingEnglish: "Book Shantidhara",
  subheading:
    "अपने नाम से मूलनायक श्री चंद्रप्रभु भगवान का जलाभिषेक बुक करें",
  pricing: [
    { label: "दैनिक", amount: "₹100", period: "प्रतिदिन" },
    { label: "मासिक", amount: "₹2,500", period: "प्रतिमाह" },
    { label: "वार्षिक", amount: "₹21,000", period: "प्रतिवर्ष" },
  ],
  form: {
    nameLabel: "पूरा नाम",
    namePlaceholder: "अपना पूरा नाम लिखें",
    phoneLabel: "मोबाइल नंबर",
    phonePlaceholder: "10 अंकों का मोबाइल नंबर",
    occasionLabel: "उपलक्ष्य",
    occasionPlaceholder: "जन्मदिन, पुण्यतिथि, आदि",
    submitText: "WhatsApp पर भेजें",
  },
  whatsappNumber: "918124967610",
};

// ----- DOCUMENTS SECTION -----
export const DOCUMENTS_SECTION = {
  sectionLabel: "दस्तावेज़",
  heading: "डाउनलोड करें",
  headingEnglish: "Downloads",
  subheading: "क्षेत्र से संबंधित महत्वपूर्ण दस्तावेज़",
  documents: [
    {
      title: "क्षेत्र पूजा आरती चालीसा",
      description:
        "श्री चंद्रप्रभु भगवान की पूजा, आरती, चालीसा एवं स्तोत्र संग्रह",
      file: "/documents/kshetra-puja-aarti-chalisa.pdf",
      icon: "book",
    },
    {
      title: "मन्दिर निर्माण योजना विवरण",
      description: "मन्दिर निर्माण हेतु सहयोग राशि की विस्तृत जानकारी",
      file: "/documents/mandir-nirman-yojana.jpg",
      icon: "donation",
    },
    {
      title: "समाचार — दैनिक भास्कर (24 जनवरी 2026)",
      description:
        "शिलान्यास समारोह एवं 30वां दीक्षा महोत्सव — समाचार कवरेज",
      file: "/documents/news-dainik-bhaskar-24jan.pdf",
      icon: "news",
    },
    {
      title: "समाचार — दैनिक भास्कर (23 जनवरी 2026)",
      description: "30वां दीक्षा महोत्सव शुरू — समाचार कवरेज",
      file: "/documents/news-dainik-bhaskar-23jan.pdf",
      icon: "news",
    },
    {
      title: "समाचार — दैनिक भास्कर (22 जनवरी 2026)",
      description:
        "स्वस्तिभूषण माता जी का मंगल प्रवेश — समाचार कवरेज",
      file: "/documents/news-dainik-bhaskar-22jan.pdf",
      icon: "news",
    },
    {
      title: "समाचार — दैनिक भास्कर (18 जनवरी 2026)",
      description: "माता जी संघ का मंगल प्रवेश — समाचार कवरेज",
      file: "/documents/news-dainik-bhaskar-18jan.pdf",
      icon: "news",
    },
  ],
};

// ----- CONTACT SECTION -----
export const CONTACT_SECTION = {
  sectionLabel: "संपर्क करें",
  heading: "संपर्क जानकारी",
  headingEnglish: "Get in Touch",
  subheading: "आपके प्रश्नों, सुझावों एवं दर्शन योजना हेतु संपर्क करें",
  address: {
    line1: "श्री दिगंबर (चंद्रांचल स्वस्ति तीर्थ)",
    line2: "जैन अतिशय क्षेत्र प्यावड़ी",
    line3: "तह. पीपलू, जिला टोंक, राजस्थान, भारत",
    full: "श्री दिगंबर (चंद्रांचल स्वस्ति तीर्थ) जैन अतिशय क्षेत्र प्यावड़ी, तह. पीपलू, जिला टोंक, राजस्थान, भारत",
  },
  phone: "+91 81249 67610",
  additionalPhones: [
    "+91 98298 64312",
    "+91 72228 40419",
    "+91 95098 65018",
    "+91 77929 69333",
    "+91 77370 38525",
  ],
  email: "jaintemplepyawari@gmail.com",
  whatsapp: {
    number: "918124967610",
    url: "https://wa.me/918124967610",
  },
  timings: {
    morning: "प्रातः 6:00 - दोपहर 12:00",
    evening: "सायं 4:00 - रात्रि 8:00",
    label: "दर्शन समय",
  },
  distances: [
    { place: "रींगस रेलवे स्टेशन", distance: "25 km" },
    { place: "जयपुर हवाई अड्डा", distance: "100 km" },
    { place: "फुलेरा", distance: "5 km" },
    { place: "सांभर", distance: "50 km" },
    { place: "दिग्गी", distance: "45 km" },
  ],
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
  copyright: `© ${new Date().getFullYear()} श्री चंद्रांचल स्वस्ति तीर्थ | Chandraanchal Swasti Teerth. All Rights Reserved.`,
  tagline: "श्री चंद्रांचल स्वस्ति तीर्थ",
  description:
    "श्री दिगंबर जैन अतिशय क्षेत्र प्यावड़ी — A sacred Jain pilgrimage destination dedicated to Lord Chandraprabhu and the eternal teachings of the Tirthankars.",
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
    { platform: "whatsapp", url: "https://wa.me/918124967610" },
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
    translation:
      "All life is bound together by mutual support and interdependence",
    attribution: "Tattvartha Sutra",
  },
];
