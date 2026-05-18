import { Link } from "@tanstack/react-router";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { MAIN_NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";
import brandLogo from "@/assets/ttcomputers-logo.png";

function splitBrandName(name: string) {
  const upper = name.toUpperCase();
  if (name.length >= 4 && upper.startsWith("TT")) {
    return { prefix: name.slice(0, 2), suffix: name.slice(2) };
  }
  const mid = Math.ceil(name.length / 2);
  return { prefix: name.slice(0, mid), suffix: name.slice(mid) };
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const brand = useMemo(() => splitBrandName(SITE.name), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--border-glow)] bg-[var(--bg-card-glass)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(15,18,32,0.65)] transition-all duration-300${scrolled ? " header-scrolled" : ""}`}
    >
      <AnnouncementBar />
      <div className="container mx-auto px-3 min-[320px]:px-4 lg:px-8">
        <div className="flex items-center justify-between min-h-[3.5rem] py-2 sm:min-h-[4.5rem] sm:py-2.5 lg:min-h-[5.75rem] lg:py-3 gap-2 sm:gap-4">
          <Link
            to="/"
            aria-label={`${SITE.name} — home`}
            className="group flex items-center gap-3 min-[380px]:gap-3.5 sm:gap-4 md:gap-5 shrink-0 min-w-0 max-w-[min(100%,calc(100vw-8.5rem))] min-[380px]:max-w-none transition-opacity hover:opacity-[0.98]"
            onClick={() => setOpen(false)}
          >
            <div className="relative flex shrink-0 items-center justify-center">
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] max-w-[5.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary-cyan)]/12 blur-2xl transition-all duration-300 sm:blur-3xl sm:bg-[var(--primary-cyan)]/14 group-hover:bg-[var(--primary-cyan)]/22 group-hover:opacity-100 opacity-90"
                aria-hidden
              />
              <img
                src={brandLogo}
                alt=""
                width={640}
                height={220}
                decoding="async"
                fetchPriority="high"
                className="logo-pulse relative z-[1] block h-[48px] w-auto min-[380px]:h-[56px] sm:h-[68px] md:h-[76px] lg:h-[84px] xl:h-[92px] max-h-[95px] max-w-[min(200px,54vw)] min-[380px]:max-w-[min(240px,48vw)] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] object-contain object-left [image-rendering:auto] transition-[transform] duration-300 group-hover:translate-y-[-0.5px]"
              />
            </div>

            <div className="flex min-w-0 flex-col justify-center gap-1 leading-none">
              <div className="font-display whitespace-nowrap text-[1.05rem] font-black tracking-[-0.03em] min-[380px]:text-lg sm:text-xl md:text-2xl lg:text-[1.85rem] xl:text-[1.95rem] lg:tracking-[-0.04em]">
                <span className="text-[var(--text-white)]">{brand.prefix}</span>
                <span className="bg-[linear-gradient(100deg,var(--primary-cyan),var(--primary-blue),var(--primary-purple))] bg-clip-text text-transparent">
                  {brand.suffix}
                </span>
              </div>
              <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] min-[380px]:text-[9px] sm:text-[10px] sm:tracking-[0.26em] lg:text-[11px]">
                {SITE.navSubtitle}
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                placeholder="Search used PCs, parts, phones…"
                className="w-full pl-10 pr-24 py-2.5 rounded-full text-sm bg-[var(--bg-section)] border border-[var(--border-glow)] text-[var(--text-white)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-cyan)] transition-colors"
              />
              <button
                type="button"
                className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-1.5 text-[10px] font-bold tracking-wider uppercase btn-gradient rounded-full"
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
            <Link
              to="/cart"
              className="relative p-2 sm:p-2.5 text-[var(--text-muted)] hover:text-[var(--primary-cyan)] transition-colors rounded-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 min-w-[1rem] h-4 px-0.5 grid place-items-center text-[9px] font-bold bg-[var(--primary-cyan)] text-[#050711] rounded-full">
                0
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-[var(--text-white)] hover:bg-[rgba(0,217,255,0.08)]"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <nav className="hidden lg:flex flex-wrap items-center gap-x-0.5 gap-y-1 border-t border-[var(--border-glow)] -mx-3 lg:-mx-8 px-3 lg:px-8 py-1.5">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link-line px-2.5 xl:px-3 py-2.5 text-[10px] xl:text-[11px] font-semibold tracking-wide uppercase text-[var(--text-muted)] hover:text-[var(--text-white)] rounded-md transition-colors"
              activeProps={{
                className:
                  "nav-link-line px-2.5 xl:px-3 py-2.5 text-[10px] xl:text-[11px] font-bold tracking-wide uppercase rounded-md text-[var(--primary-cyan)] bg-[rgba(0,217,255,0.08)]",
              }}
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 h-4 w-px bg-[var(--border-glow)] hidden xl:block" aria-hidden />
          <Link
            to="/configurator"
            className="ml-auto px-3 py-2 text-[10px] font-bold tracking-wider uppercase text-[#050711] btn-gradient rounded-full animate-pulse-glow"
          >
            PC Builder
          </Link>
        </nav>

        <div className="lg:hidden pb-2">
          <div className="relative mt-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              placeholder="Search…"
              className="w-full pl-9 pr-3 py-2 min-h-[44px] rounded-full text-sm bg-[var(--bg-section)] border border-[var(--border-glow)] text-[var(--text-white)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-cyan)]"
            />
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-3 pt-1 flex flex-col gap-0.5 animate-fade-up border-t border-[var(--border-glow)] -mx-3 px-1">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="min-h-[44px] flex items-center px-3 rounded-lg text-sm font-medium text-[var(--text-white)] hover:bg-[rgba(0,217,255,0.08)]"
                activeProps={{
                  className:
                    "min-h-[44px] flex items-center px-3 rounded-lg text-sm font-semibold text-[var(--primary-cyan)] bg-[rgba(0,217,255,0.1)]",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/configurator"
              onClick={() => setOpen(false)}
              className="min-h-[44px] flex items-center justify-center mt-1 mx-2 btn-gradient rounded-full text-xs font-bold tracking-wider uppercase"
            >
              PC Builder
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
