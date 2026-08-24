export const careersHeroContent = {
  headlineLine1: "BUILD THE FUTURE OF",
  headlineAccent: "SHARED",
  headlineRest: " MOBILITY.",
  subtext: [
    "We're a small, focused team solving one of India's biggest daily problems.",
    "If you want your work to matter, build with us.",
  ],
};

export type LifeCardBg = "black" | "orange" | "white" | "mint";

export const lifeAtEzwayContent = {
  label: "WHY EZWAY",
  heading: "LIFE AT EZWAY.",
  cards: [
    {
      icon: "bolt" as const,
      bg: "black" as LifeCardBg,
      title: "MOVE FAST",
      description:
        "Ship real features to real users every sprint. No endless reviews — build, launch, and learn.",
    },
    {
      icon: "globe" as const,
      bg: "orange" as LifeCardBg,
      title: "IMPACT AT SCALE",
      description:
        "Your work will be used by thousands of people making their daily commute. That's not hypothetical — it's today.",
    },
    {
      icon: "people" as const,
      bg: "white" as LifeCardBg,
      title: "SMALL, SENIOR TEAM",
      description:
        "No hierarchy, no bureaucracy. Work directly with founders and own your domain end-to-end.",
    },
    {
      icon: "badge" as const,
      bg: "white" as LifeCardBg,
      title: "COMPETITIVE PAY",
      description:
        "Market-rate salary + equity options. We believe team members should share in what we build.",
    },
    {
      icon: "leaf" as const,
      bg: "mint" as LifeCardBg,
      title: "MISSION-DRIVEN",
      description:
        "Help reduce traffic, pollution, and commute costs for millions of Indians. Real problems, real impact.",
    },
    {
      icon: "calendar" as const,
      bg: "white" as LifeCardBg,
      title: "FLEXIBLE WORK",
      description:
        "Hybrid-first culture. Work from our Bangalore office or remotely — outcomes matter, not hours.",
    },
  ],
};

export const openPositionsContent = {
  label: "NOW HIRING",
  heading: "OPEN POSITIONS.",
  rolesOpenBadge: "4 roles open",
  jobs: [
    {
      id: "growth-marketing-executive",
      title: "Growth & Marketing Executive",
      tags: ["Growth", "Bangalore", "Full-time", "1-3 years"],
      applyLabel: "Apply Now",
      description:
        "Drive user acquisition and community growth across Indian cities. Manage campaigns, partnerships, and the brand voice that resonates with India's daily commuters.",
      skills: ["Digital Marketing", "Content Strategy", "Analytics", "Community"],
    },
  ],
};

export const applicationFormContent = {
  fields: {
    fullName: { label: "Full Name", placeholder: "Your full name" },
    email: { label: "Email Address", placeholder: "you@example.com" },
    phone: { label: "Phone Number", placeholder: "+91 98765 43210" },
    portfolio: { label: "Portfolio / LinkedIn", placeholder: "https://" },
    motivation: {
      label: "Why do you want to join eZway?",
      placeholder: "Tell us what excites you about this role...",
    },
  },
  submitLabel: "Submit Application →",
};
