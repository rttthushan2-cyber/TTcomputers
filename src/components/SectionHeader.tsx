import { Link } from "@tanstack/react-router";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  link,
  linkLabel = "View all",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8">
      <div>
        {eyebrow && (
          <div className="text-xs text-primary tracking-[0.3em] mb-2 font-bold uppercase">
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-2xl md:text-4xl font-black tracking-tight text-ink">
          {title}
        </h2>
        {subtitle && <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>}
      </div>
      {link && (
        <Link
          to={link}
          className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-ink transition-colors tracking-wider uppercase border border-primary/30 hover:border-primary px-4 py-2 rounded-full"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
