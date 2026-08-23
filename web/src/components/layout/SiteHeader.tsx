import Image from "next/image";
import Link from "next/link";
import { homeNav } from "@/data/home-content";

export function SiteHeader({ activePath = "/" }: { activePath?: string }) {
  return (
    <header className="flex items-center justify-between px-16 py-8">
      <Link href="/" className="shrink-0">
        <Image
          src="/assets/logo/ezway-logo.png"
          alt="Ezway"
          width={140}
          height={40}
          priority
        />
      </Link>

      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-[var(--ezway-nav-bg)] px-3 py-2">
        {homeNav.map((link) => {
          const isActive =
            link.href === activePath ||
            (link.href !== "/" && activePath.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[var(--ezway-orange)] text-white"
                  : "text-[var(--ezway-muted)] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link href="/#get-started" className="ezway-btn-primary shrink-0">
        Get Started
      </Link>
    </header>
  );
}
