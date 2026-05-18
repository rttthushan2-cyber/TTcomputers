import type { ReactNode } from "react";

type PageHeroBannerProps = {
  /** Bundled image URL from import */
  image: string;
  /** e.g. object-[center_30%] */
  objectPosition?: string;
  children: ReactNode;
  className?: string;
  /** Shorter strip for cart / checkout / product */
  size?: "sm" | "md" | "lg";
};

const sizeClass: Record<NonNullable<PageHeroBannerProps["size"]>, string> = {
  sm: "min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]",
  md: "min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]",
  lg: "min-h-[260px] sm:min-h-[300px] lg:min-h-[360px]",
};

/**
 * Full-width cinematic header strip used across inner pages.
 */
export function PageHeroBanner({
  image,
  objectPosition = "object-center",
  children,
  className = "",
  size = "md",
}: PageHeroBannerProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-[var(--border-glow)] ${sizeClass[size]} ${className}`}
    >
      <img
        src={image}
        alt=""
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        className={`absolute inset-0 h-full w-full object-cover ${objectPosition}`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050711]/94 via-[#050711]/78 to-[#050711]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_40%,rgba(0,217,255,0.08),transparent_55%)]" />
      <div className="absolute inset-0 grid-bg opacity-[0.1] mix-blend-screen pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-3 py-10 min-[320px]:px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {children}
      </div>
    </section>
  );
}
