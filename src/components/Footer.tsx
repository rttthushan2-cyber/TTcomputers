import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";
import brandLogo from "@/assets/ttcomputers-logo.png";
import { MAIN_NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 bg-[var(--bg-section)] border-t border-[var(--border-glow)]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative bg-[var(--gradient-main)] text-[#050711]">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-10 grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-[10px] tracking-[0.28em] mb-2 font-bold opacity-90">
                STAY CONNECTED
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black leading-tight">
                Deals on used rigs, fresh pre-orders, and build slots.
              </h3>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-2 w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 min-h-[44px] px-4 py-2.5 bg-[rgba(5,7,17,0.15)] border border-[rgba(5,7,17,0.25)] rounded-lg focus:outline-none focus:bg-[rgba(5,7,17,0.22)] placeholder:text-[#050711]/70 text-sm text-[#050711]"
              />
              <button
                type="submit"
                className="newsletter-cta-pulse min-h-[44px] px-6 py-2.5 bg-[#050711] text-[var(--primary-cyan)] tracking-wider uppercase text-xs font-bold rounded-lg hover:bg-[#0a0e1f] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={brandLogo}
                alt={`${SITE.name} — ${SITE.tagline}`}
                width={220}
                height={62}
                className="footer-logo-pulse h-11 sm:h-12 w-auto max-w-[min(240px,85%)] object-contain object-left rounded-lg ring-1 ring-[var(--border-glow)] bg-black/40 px-2 py-1"
              />
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              Colombo-based computer shop: trusted used PCs and laptops, tested parts, custom
              builds, brand-new pre-orders, phones, CCTV, POS, and full repair bench.
            </p>
            <div className="flex gap-2 mt-5">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-9 h-9 min-w-[2.25rem] min-h-[2.25rem] grid place-items-center rounded-lg border border-[var(--border-glow)] bg-[var(--bg-card)]/60 text-[var(--text-muted)] hover:text-[var(--primary-cyan)] hover:border-[var(--primary-cyan)]/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-xs tracking-[0.2em] mb-4 text-[var(--text-white)] font-bold">
              SHOP
            </h4>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              {MAIN_NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-[var(--primary-cyan)] transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/catalog" className="hover:text-[var(--primary-cyan)] transition-colors">
                  Full catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/configurator"
                  className="hover:text-[var(--primary-cyan)] transition-colors"
                >
                  PC builder simulator
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-xs tracking-[0.2em] mb-4 text-[var(--text-white)] font-bold">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li>
                <Link to="/about" className="hover:text-[var(--primary-cyan)]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--primary-cyan)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-xs tracking-[0.2em] mb-4 text-[var(--text-white)] font-bold">
              REACH US
            </h4>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--primary-cyan)] mt-0.5 shrink-0" />
                45 Galle Road, Colombo 03, Sri Lanka
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--primary-cyan)]" />
                {SITE.phoneDisplay}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[var(--success)]" />
                {SITE.phoneDisplay} (WhatsApp)
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--primary-cyan)]" />
                {SITE.email}
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[var(--primary-cyan)] mt-0.5 shrink-0" />
                Mon–Sat: 9:00 AM – 8:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-glow)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} {SITE.name} Sri Lanka. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[var(--primary-cyan)]">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--primary-cyan)]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
