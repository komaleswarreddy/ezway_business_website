import Image from "next/image";
import Link from "next/link";

type FooterLinkColumn = {
  title: string;
  links: string[];
};

type SiteFooterProps = {
  variant?: "home" | "about";
};

type FooterConfig = {
  description: string;
  columns: FooterLinkColumn[];
  copyright: string;
  tagline: string;
  showTopBorder: boolean;
  appBadgesRow: boolean;
  social: "home" | "about";
};

const footerConfig: Record<"home" | "about", FooterConfig> = {
  home: {
    description:
      "India's community-first ride sharing platform. Verified users, affordable rides, and a greener commute.",
    columns: [
      {
        title: "Support",
        links: ["Help Centre", "Contact Us", "Safety Tips", "Report Issue"],
      },
      {
        title: "Legal",
        links: [
          "Terms of Service",
          "Privacy Policy",
          "Cookie Policy",
          "Licenses",
        ],
      },
    ],
    copyright: "© 2024 ezWay Technologies Pvt. Ltd. - All rights reserved.",
    tagline: "Made with ♥ for India's commuters.",
    showTopBorder: true,
    appBadgesRow: true,
    social: "home",
  },
  about: {
    description:
      "India's community-first ride sharing platform. Verified users, affordable rides, and a greener commute.",
    columns: [
      {
        title: "Support",
        links: ["Help Centre", "Contact Us", "Safety Tips", "Report Issue"],
      },
      {
        title: "Legal",
        links: [
          "Terms of Service",
          "Privacy Policy",
          "Cookie Policy",
          "Licenses",
        ],
      },
    ],
    copyright: "© 2024 eZway Technologies Pvt. Ltd. - All rights reserved.",
    tagline: "Made with ♥ for India's commuters.",
    showTopBorder: true,
    appBadgesRow: true,
    social: "home",
  },
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M10 9.5v5l4.5-2.5L10 9.5zm8.8-3.2a2.5 2.5 0 0 0-1.8-1.8C15.5 4 12 4 12 4s-3.5 0-5.9.5a2.5 2.5 0 0 0-1.8 1.8C4 8.2 4 12 4 12s0 3.8.3 5.3a2.5 2.5 0 0 0 1.8 1.8C8.5 20 12 20 12 20s3.5 0 5.9-.5a2.5 2.5 0 0 0 1.8-1.8c.3-1.5.3-5.3.3-5.3s0-3.8-.2-5.3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
      <path d="M5 4l6.2 8.5L5.2 20H8l4.6-6.1L16.4 20H19l-6.5-9L18.8 4h-2.9l-4.2 5.6L8.6 4H5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M6 9h3v10H6V9zm1.5-4.5A1.8 1.8 0 1 1 6 6.3a1.8 1.8 0 0 1 1.5-1.8zM10 9h2.9v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V19H16v-4.6c0-1.1 0-2.5-1.5-2.5-1.6 0-1.9 1.3-1.9 2.5V19H10V9z" />
    </svg>
  );
}

function SocialLinks({ variant }: { variant: "home" | "about" }) {
  const links =
    variant === "home"
      ? [
          { label: "Instagram", icon: <InstagramIcon /> },
          { label: "Facebook", icon: <FacebookIcon /> },
          { label: "YouTube", icon: <YouTubeIcon /> },
        ]
      : [
          { label: "Facebook", icon: <FacebookIcon /> },
          { label: "X", icon: <XIcon /> },
          { label: "LinkedIn", icon: <LinkedInIcon /> },
        ];

  return (
    <div className="flex gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href="#"
          aria-label={link.label}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ezway-orange)] text-white"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}

export function SiteFooter({ variant = "home" }: SiteFooterProps) {
  const config = footerConfig[variant];

  return (
    <footer
      id="contact"
      className={`bg-[var(--ezway-pure-black)] px-16 pb-10 pt-16 ${
        config.showTopBorder ? "border-t-[5px] border-[var(--ezway-orange)]" : ""
      }`}
    >
      <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <Image
            src="/assets/logo/ezway-logo.png"
            alt="Ezway"
            width={120}
            height={36}
            className="mb-6"
          />
          <p className="mb-6 max-w-xs text-sm leading-relaxed text-[var(--ezway-muted)]">
            {config.description}
          </p>
          <div
            className={`mb-6 flex items-center gap-6 ${
              config.appBadgesRow ? "flex-row flex-wrap" : "flex-col items-start"
            }`}
          >
            <SocialLinks variant={config.social} />
            <div
              className={`flex gap-3 ${
                config.appBadgesRow ? "flex-row" : "flex-col"
              }`}
            >
              <Image
                src="/assets/icons/badge-google-play.png"
                alt="Get it on Google Play"
                width={150}
                height={44}
              />
              <Image
                src="/assets/icons/badge-app-store.png"
                alt="Download on the App Store"
                width={150}
                height={44}
              />
            </div>
          </div>
        </div>

        {config.columns.map((col) => (
          <div key={col.title}>
            <h4 className="ezway-label mb-4">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[var(--ezway-muted)] hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-[var(--ezway-muted)]">
        <span>{config.copyright}</span>
        <span>{config.tagline}</span>
      </div>
    </footer>
  );
}
