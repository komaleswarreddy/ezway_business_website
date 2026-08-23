export const homeNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export const heroContent = {
  headline: [
    { text: "SHARE THE RIDE.", accent: false },
    { text: "SPLIT THE COST.", accent: true },
  ],
  subtext:
    "Connect with verified community drivers going your way. Book a seat, split the cost, and help build a greener India one ride at a time.",
  findRideBtn: "/assets/icons/button-find-ride.png",
  offerRideBtn: "/assets/icons/button-offer-ride.png",
};

export const featuresContent = {
  label: "WHY CHOOSE EZWAY",
  heading: "BUILT FOR REAL PEOPLE.",
  intro:
    "eZWay isn't just a ride platform. It's a movement toward smarter, greener, more affordable commuting.",
  cards: [
    {
      num: "01",
      tag: "FOR PASSENGERS",
      title: "AFFORDABLE COMMUNITY RIDES.",
      description:
        "Split the cost with a verified driver heading your way. Pay with eZ Coins — no surge pricing, no hidden fees.",
      bullet: "Save up to 70% vs. solo cab rides",
      phones: [
        {
          src: "/assets/mockups/mobile-app/home-dashboard-ui.png",
          alt: "Ezway home dashboard",
          width: 118,
          height: 248,
        },
        {
          src: "/assets/mockups/mobile-app/daily-commute.png",
          alt: "Daily commute screen",
          width: 118,
          height: 248,
        },
      ],
    },
    {
      num: "02",
      title: "FULLY VERIFIED IDENTITY.",
      description:
        "Aadhaar KYC + live face scan for every user. No strangers, only community.",
      photo: "/assets/images/photos/driver-interior-car.png",
      photoAlt: "Verified driver interior view",
      verifiedLabel: "100% Identity Verified",
    },
    {
      num: "03",
      title: "GREEN IMPACT.",
      description: "12,400 kg CO₂ saved, ₹50K+ donated to NGOs each month.",
      footer: "Every ride counts",
      image: "/assets/images/photos/green-impact-forest-card.png",
      imageAlt: "Forest canopy green impact",
    },
    {
      num: "04",
      title: "SHARE YOUR ROUTE. EARN COINS.",
      description:
        "Post your daily commute once. Let verified passengers join. Earn eZ Coins that offset your fuel cost every day.",
      phones: [
        {
          src: "/assets/mockups/mobile-app/en-route-pickup.png",
          alt: "En route to pickup screen",
          width: 148,
          height: 296,
        },
        {
          src: "/assets/mockups/mobile-app/refer-and-earn.png",
          alt: "Refer and earn wallet screen",
          width: 160,
          height: 318,
        },
      ],
    },
  ],
};

export const howItWorksContent = {
  label: "SIMPLE & FAST",
  heading: "HOW IT WORKS",
  steps: [
    {
      num: "01",
      title: "SEARCH A RIDE",
      desc: "Enter your pickup, destination, and date. See verified drivers heading your way.",
      icon: "/assets/icons/how-it-works/icon-search.png",
      tone: "warm" as const,
    },
    {
      num: "02",
      title: "CONNECT & BOOK",
      desc: "View driver profiles, ratings, and vehicle details. Book a seat with a tap.",
      icon: "/assets/icons/how-it-works/icon-connect.png",
      tone: "cool" as const,
    },
    {
      num: "03",
      title: "OTP START",
      desc: "Share a one-time password with your driver to confirm the trip has begun securely.",
      icon: "/assets/icons/how-it-works/icon-shield.png",
      tone: "warm" as const,
    },
    {
      num: "04",
      title: "ARRIVE & RATE",
      desc: "Complete your journey, pay with eZ Coins, and rate your experience.",
      icon: "/assets/icons/how-it-works/icon-star.png",
      tone: "cool" as const,
    },
  ],
  cta: "Try the App",
};

export const findOfferContent = {
  label: "THE EZWAY EXPERIENCE",
  heading: ["FIND OR OFFER.", "YOUR TERMS."],
  top: {
    tag: "FOR PASSENGERS",
    heading: "FIND YOUR PERFECT RIDE.",
    description:
      "Browse verified drivers on your route. See real-time availability, ratings, and departure times — then book in seconds with eZ Coins.",
    features: [
      "Filter by rating, vehicle type, or time",
      "Every driver is KYC-verified and reviewed",
      "Live tracking from pickup to drop",
    ],
    image: "/assets/images/photos/motorcycle-riders.png",
    imageAlt: "Passengers on a motorcycle",
  },
  bottomLeft: {
    tag: "FOR DRIVERS",
    heading: ["SHARE YOUR COMMUTE.", "EARN COINS."],
    description:
      "Post your daily route once. Let verified passengers join. Earn eZ Coins that offset your fuel cost every day.",
    cta: "Offer a Ride",
    image: "/assets/mockups/mobile-app/rewards-wallet.png",
    imageAlt: "Driver rewards app",
  },
  bottomRight: {
    heading: "COMMUNITY IN NUMBERS",
    subtext: "Riders rate eZWay 4.9/5 on safety across all cities.",
    stats: [
      { value: "5,000+", label: "Verified Users", accent: "orange" as const },
      { value: "50K+", label: "Rides Completed", accent: "black" as const },
      { value: "4.8 ★", label: "Avg Driver Rating", accent: "green" as const },
      { value: "₹2M+", label: "Community Savings", accent: "blue" as const },
    ],
    image: "/assets/images/photos/drivers-laughing-car.png",
    imageAlt: "Community drivers",
  },
};

export const confidenceContent = {
  label: "EVERY TRIP, EVERY TIME",
  heading: "RIDE WITH CONFIDENCE.",
  description:
    "Safety is built into every layer of eZway — from profile verification to live tracking and emergency response.",
  background: "/assets/images/photos/city-at-night.png",
  items: [
    {
      title: "AADHAAR KYC",
      desc: "Every user verifies identity with Aadhaar and live face scan before their first ride.",
      icon: "/assets/icons/confidence/icon-aadhaar-kyc.png",
    },
    {
      title: "TRIP-START OTP",
      desc: "A one-time password is exchanged between driver and passenger to confirm the ride has started.",
      icon: "/assets/icons/confidence/icon-trip-otp.png",
    },
    {
      title: "LIVE TRACKING",
      desc: "Your location is shared in real time. Share your trip with trusted contacts at any time.",
      icon: "/assets/icons/confidence/icon-live-tracking.png",
    },
    {
      title: "SOS BUTTON",
      desc: "One-tap emergency alert sends your location to emergency contacts and our safety team instantly.",
      icon: "/assets/icons/confidence/icon-sos-shield.png",
    },
  ],
};

export const sustainabilityContent = {
  label: "RIDE GREEN",
  heading: "EVERY RIDE HELPS THE PLANET.",
  description:
    "Every time someone shares a ride instead of taking a solo trip, we collectively reduce emissions, ease traffic, and contribute to a cleaner India.",
  image: "/assets/images/photos/environmental-impact-aerial.png",
  imageAlt: "Aerial view of road through forest with environmental impact stats",
  stats: [
    {
      value: "12,400 kg",
      label: "CO2 emissions avoided",
      icon: "/assets/icons/sustainability/icon-leaf.png",
      iconBg: "bg-[#e8f5e9]",
    },
    {
      value: "50,000+",
      label: "Cars removed from roads",
      icon: "/assets/icons/sustainability/icon-car.png",
      iconBg: "bg-[#fff3e6]",
    },
    {
      value: "₹50,000+",
      label: "Donated to NGO partners",
      icon: "/assets/icons/sustainability/icon-heart-red.png",
      iconBg: "bg-[#fdecea]",
    },
    {
      value: "5,000+",
      label: "Community contributors",
      icon: "/assets/icons/sustainability/icon-community.png",
      iconBg: "bg-[#e8f0fe]",
    },
  ],
  footer: {
    icon: "/assets/icons/sustainability/icon-heart-green.png",
    highlight: "₹1 donated",
    text: " to our NGO partners after every completed ride. Zero action needed from you.",
  },
};

export const testimonialsContent = {
  label: "COMMUNITY",
  heading: "REAL PEOPLE. REAL RIDES.",
  ratingSummary: "4.8/5 (Based on 1,000+ reviews)",
  items: [
    {
      quote:
        "I've been using ezWay for 6 months for my daily commute. The drivers are super professional and I've saved over ₹2,500 a month compared to cabs. The OTP verify feature gives me complete peace of mind.",
      author: "Priya Shah",
      role: "Regular Commuter",
      variant: "dark" as const,
    },
    {
      quote:
        "ezWay makes commuting so easy and affordable. I love that I can share rides with people from my own office. Highly recommended!",
      author: "Rahul M.",
      role: "Verified",
      variant: "light" as const,
    },
    {
      quote:
        "Great platform for finding reliable rides. The app is very user-friendly and the community is great. Saved a lot on travel costs!",
      author: "Ananya S.",
      role: "Verified",
      variant: "light" as const,
    },
  ],
  statsBar: [
    {
      icon: "/assets/icons/impact/icon-star.png",
      value: "4.8/5",
      label: "Rating",
    },
    {
      icon: "/assets/icons/impact/icon-car.png",
      value: "50k+",
      label: "Rides Completed",
    },
    {
      icon: "/assets/icons/impact/icon-heart.png",
      value: "10k+",
      label: "Happy Users",
    },
    {
      icon: "/assets/icons/impact/icon-leaf.png",
      value: "5k kg",
      label: "CO2 Saved",
    },
  ],
};

export const finalCtaContent = {
  heading: "READY TO RIDE WITH US?",
  subtext: "Join 5,000+ verified Indians making every commute count.",
  primaryCta: "Get Started",
  secondaryCta: "Join Our Team →",
};
