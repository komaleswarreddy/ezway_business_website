export const contactHeroContent = {
  headline: [
    { text: "LET'S", accent: false },
    { text: " TALK.", accent: true },
  ],
  subtext:
    "Question, feedback, partnership idea, or just want to say hi — we're here and we reply fast.",
};

export const contactFormContent = {
  heading: "SEND US A MESSAGE",
  subtext: "Fill the form and we'll get back within 24 hours.",
  fields: {
    fullName: { label: "Full Name", placeholder: "Your full name" },
    email: { label: "Email Address", placeholder: "you@example.com" },
    phone: { label: "Phone Number", placeholder: "+91 98765 43210" },
    subject: { label: "Subject", placeholder: "Reason for contact" },
    message: { label: "Message", placeholder: "Tell us how we can help..." },
  },
  submitLabel: "Send Message",
};

export const contactDetailsContent = {
  heading: "CONTACT DETAILS",
  items: [
    {
      icon: "pin" as const,
      label: "ADDRESS",
      lines: ["Chipurupalle, Vizianagaram", "Andhra Pradesh, India - 535128"],
    },
    {
      icon: "phone" as const,
      label: "PHONE",
      lines: ["+91 94932 30191"],
      href: "tel:+919493230191",
    },
    {
      icon: "mail" as const,
      label: "EMAIL",
      lines: ["Email available soon"],
    },
    {
      icon: "globe" as const,
      label: "WEBSITE",
      lines: ["ezway.in"],
      href: "https://ezway.in/",
    },
  ],
};

export const followUsContent = {
  heading: "FOLLOW US",
  items: [
    {
      icon: "instagram" as const,
      handle: "@ezway_app",
      platform: "Instagram",
      href: "https://www.instagram.com/ezway_app?igsi=MTg4MXlmeHFkdWZ0dg==",
    },
    {
      icon: "facebook" as const,
      handle: "eZway",
      platform: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61591798813237",
    },
    {
      icon: "linkedin" as const,
      handle: "eZway Ridesharing",
      platform: "LinkedIn",
      href: "https://www.linkedin.com/company/ezwayridesharing/",
    },
    {
      icon: "youtube" as const,
      handle: "@eZwayApp",
      platform: "YouTube",
      href: "https://www.youtube.com/@eZwayApp",
    },
  ],
};
