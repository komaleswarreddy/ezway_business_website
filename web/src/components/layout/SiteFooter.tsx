import Image from "next/image";
import Link from "next/link";
import { followUsContent } from "@/data/contact-content";
import { Reveal } from "@/components/motion/Reveal";

type FooterLinkColumn = {
  title: string;
  links: string[];
};

type SiteFooterProps = {
  variant?: "home" | "about" | "careers";
};

type FooterConfig = {
  description: string;
  columns: FooterLinkColumn[];
  copyright: string;
  tagline: string;
  showTopBorder: boolean;
  appBadgesRow: boolean;
};

const footerConfig: Record<"home" | "about" | "careers", FooterConfig> = {
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
  },
  careers: {
    description:
      "India's community-first ride sharing platform. Verified users, affordable rides, and a greener commute.",
    columns: [
      {
        title: "Company",
        links: ["About", "Careers", "Contact Us"],
      },
      {
        title: "Legal",
        links: ["Terms of Service", "Privacy Policy"],
      },
    ],
    copyright: "© 2024 eZway Technologies. All rights reserved.",
    tagline: "Made with ♥ for India's commuters.",
    showTopBorder: true,
    appBadgesRow: true,
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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M6 9h3v10H6V9zm1.5-4.5A1.8 1.8 0 1 1 6 6.3a1.8 1.8 0 0 1 1.5-1.8zM10 9h2.9v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V19H16v-4.6c0-1.1 0-2.5-1.5-2.5-1.6 0-1.9 1.3-1.9 2.5V19H10V9z" />
    </svg>
  );
}

// Known footer link labels that already have a real page — everything else
// (Help Centre, Safety Tips, Cookie Policy, etc.) has no page yet, so it
// stays a "#" placeholder.
const footerLinkHrefMap: Record<string, string> = {
  About: "/about",
  Careers: "/careers",
  "Contact Us": "/contact",
  "Terms of Service": "/terms",
  "Privacy Policy": "/privacy",
};

const footerSocialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

function SocialLinks() {
  return (
    <div className="flex gap-3">
      {followUsContent.items.map((item) => {
        const Icon = footerSocialIconMap[item.icon];
        return (
          <Link
            key={item.platform}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.platform}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ezway-orange)] text-white transition-transform duration-200 hover:-translate-y-1 hover:opacity-90 active:scale-90"
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}

export function SiteFooter({ variant = "home" }: SiteFooterProps) {
  const config = footerConfig[variant];

  return (
    <footer
      id="contact"
      className={`bg-[var(--ezway-pure-black)] ${
        config.showTopBorder ? "border-t-[5px] border-[var(--ezway-orange)]" : ""
      }`}
    >
      <Reveal as="div" amount={0.1} className="ezway-container px-5 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12 lg:px-16 lg:pb-10 lg:pt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
        <div className="md:col-span-2 lg:col-span-1">
          <Image
            src="/assets/logo/ezway-logo.png"
            alt="Ezway"
            width={120}
            height={36}
            className="mb-6 h-8 w-auto lg:h-auto"
          />
          <p className="mb-6 max-w-xs text-sm leading-relaxed text-[var(--ezway-muted)]">
            {config.description}
          </p>
          <div
            className={`mb-6 flex items-center gap-4 md:gap-6 ${
              config.appBadgesRow ? "flex-row flex-wrap" : "flex-col items-start"
            }`}
          >
            <SocialLinks />
            <div
              className={`flex flex-wrap gap-3 ${
                config.appBadgesRow ? "flex-row" : "flex-col"
              }`}
            >
              <Image
                src="/assets/icons/badge-google-play.png"
                alt="Get it on Google Play"
                width={150}
                height={44}
                className="h-9 w-auto lg:h-11"
              />
              <Image
                src="/assets/icons/badge-app-store.png"
                alt="Download on the App Store"
                width={150}
                height={44}
                className="h-9 w-auto lg:h-11"
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
                    href={footerLinkHrefMap[item] ?? "#"}
                    className="text-sm text-[var(--ezway-muted)] transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[var(--ezway-muted)] sm:flex-row sm:items-center sm:justify-between lg:mt-12">
        <span>{config.copyright}</span>
        <span>{config.tagline}</span>
      </div>
      </Reveal>
    </footer>
  );
}
