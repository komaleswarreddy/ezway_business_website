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
      lines: ["12th Floor, Tower B, UB City", "Bangalore – 560001, Karnataka"],
    },
    {
      icon: "phone" as const,
      label: "PHONE",
      lines: ["+91 80 4567 8900", "Mon–Sat, 9 AM – 7 PM IST"],
    },
    {
      icon: "mail" as const,
      label: "EMAIL",
      lines: ["support@ezway.in", "help@ezway.in"],
    },
    {
      icon: "globe" as const,
      label: "WEBSITE",
      lines: ["www.ezway.in"],
    },
  ],
};

export const followUsContent = {
  heading: "FOLLOW US",
  items: [
    { icon: "instagram" as const, handle: "@eZwayIndia", platform: "Instagram" },
    { icon: "facebook" as const, handle: "eZway India", platform: "Facebook" },
    { icon: "youtube" as const, handle: "eZway Official", platform: "YouTube" },
  ],
};
