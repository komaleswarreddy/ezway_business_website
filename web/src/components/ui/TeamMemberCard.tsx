import Image from "next/image";

type TeamMemberCardProps = {
  num: string;
  role: string;
  name: string;
  photo?: string;
  photoZoom?: number;
  badge?: string;
  size?: "large" | "medium";
};

export function TeamMemberCard({
  num,
  role,
  name,
  photo,
  photoZoom = 1,
  badge,
  size = "medium",
}: TeamMemberCardProps) {
  const isLarge = size === "large";
  const avatarSize = isLarge ? 230 : 170;

  return (
    <article
      className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#bdbdbd] via-[#5a5a5a] to-[#1a1a1a] transition-transform duration-300 hover:-translate-y-1 ${
        isLarge ? "min-h-[400px]" : "min-h-[340px]"
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

      <div
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-4 ring-white/10"
        style={{ width: avatarSize, height: avatarSize }}
      >
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={avatarSize * 2}
            height={avatarSize * 2}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            style={photoZoom !== 1 ? { transform: `scale(${photoZoom})` } : undefined}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-[#d9d9d9] to-[#8a8a8a]">
            <div className="absolute inset-x-4 top-6 h-16 rounded-full bg-[#b0b0b0]" />
            <div className="absolute bottom-4 left-1/2 h-14 w-20 -translate-x-1/2 rounded-t-full bg-[#a8a8a8]" />
          </div>
        )}
      </div>

      <div className={`absolute bottom-0 left-0 right-0 ${isLarge ? "p-6" : "p-5"}`}>
        <p
          className={`font-bold uppercase text-[var(--ezway-orange)] ${
            isLarge ? "text-[11px] tracking-wide" : "text-[10px] tracking-wide"
          }`}
        >
          {role}
        </p>
        <h3
          className={`ezway-display mt-1 text-white ${
            isLarge ? "text-[32px]" : "text-[16px] leading-[1.15]"
          }`}
        >
          {name}
        </h3>
      </div>
    </article>
  );
}
