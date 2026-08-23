type TeamMemberCardProps = {
  num: string;
  role: string;
  name: string;
  city: string;
  badge?: string;
  size?: "large" | "medium";
};

function LocationPin() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-[var(--ezway-orange)]">
      <path d="M8 1.5a4 4 0 0 0-4 4c0 3 4 8.5 4 8.5s4-5.5 4-8.5a4 4 0 0 0-4-4zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
}

export function TeamMemberCard({
  num,
  role,
  name,
  city,
  badge,
  size = "medium",
}: TeamMemberCardProps) {
  const isLarge = size === "large";

  return (
    <article
      className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#bdbdbd] via-[#5a5a5a] to-[#1a1a1a] ${
        isLarge ? "min-h-[400px]" : "min-h-[320px]"
      }`}
    >
      {isLarge && (
        <span className="absolute left-0 right-0 top-0 h-1 bg-[var(--ezway-orange)]" />
      )}

      {badge && (
        <span className="absolute right-4 top-5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
          {badge}
        </span>
      )}

      <span
        className={`absolute flex items-center justify-center rounded-full font-bold text-white ${
          isLarge
            ? "left-4 top-5 h-8 w-8 bg-[var(--ezway-orange)] text-sm"
            : "right-4 top-5 h-7 w-7 bg-[#555] text-xs"
        }`}
      >
        {num}
      </span>

      <div className="absolute left-1/2 top-[38%] h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#d9d9d9] to-[#8a8a8a]">
        <div className="absolute inset-x-4 top-6 h-16 rounded-full bg-[#b0b0b0]" />
        <div className="absolute bottom-4 left-1/2 h-14 w-20 -translate-x-1/2 rounded-t-full bg-[#a8a8a8]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--ezway-orange)]">
          {role}
        </p>
        <h3
          className={`ezway-display mt-1 text-white ${
            isLarge ? "text-[32px]" : "text-[22px]"
          }`}
        >
          {name}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-[var(--ezway-muted)]">
          <LocationPin />
          {city}
        </p>
      </div>
    </article>
  );
}
