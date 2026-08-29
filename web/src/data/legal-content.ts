export type LegalSection = {
  num: string;
  title: string;
  body?: string;
  bullets?: string[];
};

export type LegalPageContent = {
  badge: string;
  heading: string;
  lastUpdated: string;
  subtext: string;
  tocLabel: string;
  sections: LegalSection[];
};

export const termsContent: LegalPageContent = {
  badge: "Legal",
  heading: "TERMS OF SERVICE",
  lastUpdated: "Last updated: 1 August 2025",
  subtext:
    "Please read these terms carefully before using the eZway platform. By accessing or using eZway, you agree to be bound by these terms.",
  tocLabel: "Contents",
  sections: [
    {
      num: "01",
      title: "Acceptance of Terms",
      body: 'By downloading, installing, or using the eZway mobile application or website (the "Platform"), you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the Platform. eZway Technologies Pvt. Ltd. reserves the right to update these terms at any time; continued use after changes constitutes acceptance.',
    },
    {
      num: "02",
      title: "Eligibility",
      bullets: [
        "You must be at least 18 years of age to use eZway.",
        "You must complete Aadhaar-based KYC verification before offering or booking rides.",
        "Accounts are non-transferable and may only be used by the registered individual.",
        "eZway reserves the right to refuse service to anyone at its sole discretion.",
      ],
    },
    {
      num: "03",
      title: "The eZway Service",
      body: "eZway is a community carpooling platform that connects individuals travelling similar routes. eZway is not a taxi or transportation company — it provides a technology platform to facilitate peer-to-peer ride-sharing. Drivers set their own schedules and eZway does not employ them. All ride arrangements are between Riders and Drivers directly.",
    },
    {
      num: "04",
      title: "User Responsibilities",
      bullets: [
        "Maintain accurate and up-to-date profile information including vehicle details and contact number.",
        "Behave respectfully toward other community members at all times.",
        "Drivers must possess a valid Indian driving licence and motor vehicle insurance.",
        "Riders must be present at the agreed pickup point on time.",
        "Any misuse of the SOS feature or false reporting may result in permanent account suspension.",
        "You are solely responsible for your conduct and any content you post on the Platform.",
      ],
    },
    {
      num: "05",
      title: "eZ Coins & Payments",
      body: "eZ Coins are a virtual currency used within the Platform for ride payments. Coins may be purchased via the in-app wallet using supported payment methods. Coins have no cash value outside the Platform and are non-refundable except as required by applicable law. eZway reserves the right to adjust Coin pricing at any time with reasonable notice.",
    },
    {
      num: "06",
      title: "Prohibited Conduct",
      bullets: [
        "Using the Platform for commercial taxi or delivery services.",
        "Sharing account credentials with third parties.",
        "Soliciting personal contact information from other users outside the Platform.",
        "Transporting hazardous materials or unlawful goods.",
        "Discriminating against users based on religion, caste, gender, or disability.",
        "Attempting to circumvent safety features including trip-start OTP verification.",
      ],
    },
    {
      num: "07",
      title: "Limitation of Liability",
      body: 'eZway is provided "as is" without warranties of any kind. To the maximum extent permitted by law, eZway shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Platform, including damages from accidents, delays, or conduct of other users. Our total liability in any matter shall not exceed the amount of Coins in your wallet at the time of the claim.',
    },
    {
      num: "08",
      title: "Termination",
      body: "eZway may suspend or terminate your account at any time for violation of these terms, fraudulent activity, or for any other reason at our discretion. Upon termination, your right to use the Platform ceases immediately. Any unused Coins may be forfeited upon termination for cause.",
    },
    {
      num: "09",
      title: "Governing Law",
      body: "These Terms shall be governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Vizianagaram, Andhra Pradesh. We encourage good-faith dispute resolution and offer a mediation process before formal legal proceedings.",
    },
  ],
};

export const privacyContent: LegalPageContent = {
  badge: "Legal",
  heading: "PRIVACY POLICY",
  lastUpdated: "Last updated: 1 August 2025",
  subtext:
    "Your privacy is important to us. This policy explains what data we collect, how we use it, and the controls you have over your information.",
  tocLabel: "Contents",
  sections: [
    {
      num: "01",
      title: "Information We Collect",
      bullets: [
        "Identity data: Full name, date of birth, Aadhaar number (hashed), and profile photo.",
        "Contact data: Mobile number, email address, and emergency contact.",
        "Vehicle data: Registration number, make, model, colour, and insurance details (Drivers only).",
        "Location data: GPS coordinates during active trips; approximate location when the app is in use.",
        "Usage data: App interactions, search history, ride history, ratings given and received.",
        "Payment data: Wallet balance and transaction history; payment instrument details processed by our PCI-compliant payment partner.",
        "Device data: Device type, OS version, IP address, and push notification tokens.",
      ],
    },
    {
      num: "02",
      title: "How We Use Your Data",
      bullets: [
        "To verify your identity and maintain community safety through KYC.",
        "To match Riders and Drivers along compatible routes.",
        "To process Coin transactions and maintain your wallet.",
        "To send ride confirmations, OTPs, and safety alerts via SMS and push notifications.",
        "To compute environmental impact (CO₂ saved) for your profile.",
        "To investigate safety incidents and support SOS requests with emergency services.",
        "To improve our matching algorithms and overall platform experience.",
      ],
    },
    {
      num: "03",
      title: "Data Sharing",
      body: "We do not sell your personal data. We share limited data with: (a) your matched Rider/Driver during an active trip (name, profile photo, vehicle details, phone number); (b) payment processors for wallet transactions; (c) Aadhaar verification agencies for KYC; (d) law enforcement when legally required. We may share anonymised, aggregated data for research purposes.",
    },
    {
      num: "04",
      title: "Location Data",
      body: "Live location is collected only during active trips and is visible to your matched co-traveller. We do not share your location history with third parties. Background location is used only to enable trip-start OTP verification and SOS. You can disable background location in your device settings, which will limit certain safety features.",
    },
    {
      num: "05",
      title: "Data Retention",
      bullets: [
        "Active account data: Retained for the lifetime of your account.",
        "Ride history: Retained for 3 years for safety and dispute resolution.",
        "KYC documents: Retained for 5 years as required by applicable law.",
        "Payment records: Retained for 7 years as required by financial regulations.",
        "Deleted accounts: Most personal data is purged within 30 days; some data may be retained longer to meet legal obligations.",
      ],
    },
    {
      num: "06",
      title: "Your Rights",
      bullets: [
        "Access: Request a copy of all personal data we hold about you.",
        "Correction: Update inaccurate or incomplete information via your profile settings.",
        "Deletion: Request account deletion; subject to legal retention obligations.",
        "Portability: Request your ride history and profile data in machine-readable format.",
        "Opt-out: Unsubscribe from marketing communications at any time.",
        "Grievance: Reach out via our Contact page within 30 days for resolution.",
      ],
    },
    {
      num: "07",
      title: "Data Security",
      body: "We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. Aadhaar numbers are stored only as salted hashes. Payment data is handled by PCI-DSS Level 1 certified processors. Our internal access controls follow the principle of least privilege. We conduct annual third-party security audits.",
    },
    {
      num: "08",
      title: "Children's Privacy",
      body: "eZway is not intended for individuals under 18. We do not knowingly collect data from minors. If we discover that a user is under 18, the account will be terminated and all associated data deleted promptly.",
    },
    {
      num: "09",
      title: "Contact",
      body: "For privacy inquiries, please reach out via our Contact page, or write to us at eZway Technologies Pvt. Ltd., Chipurupalle, Vizianagaram, Andhra Pradesh, India - 535128.",
    },
  ],
};
