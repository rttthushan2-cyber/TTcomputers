import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Headphones,
  MessageCircle,
  Package,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from "lucide-react";
import { SITE_IMAGES } from "@/lib/site-images";
import { SITE } from "@/lib/site";
import { products, reviews } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { serviceItems } from "@/lib/shop-mocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Premium Used PCs, Laptops & Custom Builds` },
      {
        name: "description",
        content:
          "Buy trusted used computers, build your dream PC, repair devices, or pre-order brand-new tech — Colombo computer shop with island-wide logistics.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { Icon: Recycle, t: "Used PCs & laptops", d: "Graded, stress-tested, clear warranty terms." },
  { Icon: Cpu, t: "Used parts shelves", d: "CPUs, GPUs, RAM, boards, PSUs, monitors." },
  { Icon: Sparkles, t: "Custom builds", d: "Gaming, office, creator, student budgets." },
  { Icon: Package, t: "Brand-new pre-orders", d: "Laptops, desktops, phones, accessories." },
  { Icon: Wrench, t: "Full service bench", d: "Repairs, CCTV, POS, software, upgrades." },
];

function HomePage() {
  const usedFeatured = products.filter((p) => p.isUsed).slice(0, 4);
  const partsFeatured = products
    .filter((p) => ["Graphic Cards", "RAM", "SSD", "Motherboards"].includes(p.category))
    .slice(0, 4);
  const servicesPreview = serviceItems.slice(0, 4);

  return (
    <div>
      {/* Hero — full-bleed cinematic (AI-generated art) */}
      <section className="relative min-h-[min(92vh,760px)] sm:min-h-[600px] lg:min-h-[640px] border-b border-[var(--border-glow)] overflow-hidden">
        <img
          src={SITE_IMAGES.heroHome}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className="hero-bg-img absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[58%_center] lg:object-[52%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050711] from-18% via-[#050711]/82 via-48% to-[#050711]/28 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050711] from-0% via-transparent via-45% to-[#050711]/45 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_55%,rgba(124,77,255,0.18),transparent_58%)] pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-[0.1] mix-blend-screen pointer-events-none" />

        <div className="pointer-events-none absolute inset-0 hidden xl:block">
          {(
            [
              { t: "RTX Gaming Build", className: "top-[16%] right-[6%] w-36" },
              { t: "Used MacBook", className: "top-[38%] right-[14%] w-32" },
              { t: "Ryzen Custom Build", className: "bottom-[26%] right-[8%] w-40" },
              { t: "Budget Student Laptop", className: "bottom-[14%] right-[20%] w-36" },
            ] as const
          ).map(({ t, className: position }) => (
            <div
              key={t}
              className={`hero-floating-card absolute ${position} rounded-xl border border-[rgba(0,217,255,0.35)] bg-[rgba(15,18,32,0.55)] px-3 py-2.5 shadow-[0_0_28px_-6px_rgba(0,217,255,0.35)] backdrop-blur-md`}
            >
              <div className="text-[9px] tracking-[0.22em] text-[var(--primary-cyan)] font-bold uppercase">
                Featured
              </div>
              <div className="font-display text-[11px] font-black leading-tight text-[var(--text-white)] mt-0.5">
                {t}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-6xl flex-col justify-center px-3 min-[320px]:px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="hero-text-line-1 text-[10px] sm:text-xs tracking-[0.28em] text-[var(--primary-cyan)] font-bold mb-3 drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
              {SITE.name.toUpperCase()} · COLOMBO COMPUTER SHOP
            </p>
            <h1 className="hero-text-line-2 font-display text-[1.65rem] min-[375px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] text-[var(--text-white)] [text-shadow:0_2px_32px_rgba(0,0,0,0.85)]">
              Premium Used PCs, Laptops &amp; Custom Builds
            </h1>
            <p className="hero-text-line-3 mt-4 text-sm sm:text-base text-[#c8d0e0] max-w-xl leading-relaxed [text-shadow:0_1px_18px_rgba(0,0,0,0.9)]">
              Buy trusted used computers, build your dream PC, repair your devices, or pre-order
              brand-new tech — all from one powerful computer shop.
            </p>
            <div className="hero-text-line-4 pointer-events-auto mt-6 sm:mt-8 flex flex-col min-[430px]:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                to="/used"
                className="min-h-[48px] inline-flex items-center justify-center px-6 rounded-full btn-gradient text-xs font-bold tracking-wider uppercase"
              >
                Shop Used PCs
              </Link>
              <Link
                to="/configurator"
                className="min-h-[48px] inline-flex items-center justify-center px-6 rounded-full border border-[rgba(0,217,255,0.45)] bg-[rgba(5,7,17,0.45)] text-xs font-bold tracking-wider uppercase text-[var(--text-white)] backdrop-blur-sm hover:bg-[rgba(0,217,255,0.12)] transition-colors"
              >
                Start Custom Build
              </Link>
              <Link
                to="/pre-order"
                className="min-h-[48px] inline-flex items-center justify-center px-6 rounded-full border border-[rgba(124,77,255,0.5)] bg-[rgba(5,7,17,0.35)] text-xs font-bold tracking-wider uppercase text-[var(--primary-purple)] backdrop-blur-sm hover:bg-[rgba(124,77,255,0.12)] transition-colors"
              >
                Pre-Order New Tech
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-[var(--border-glow)] bg-[var(--bg-section)]">
        <div className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-8 sm:py-10">
          <ScrollReveal stagger className="grid min-[375px]:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {highlights.map(({ Icon, t, d }) => (
              <div
                key={t}
                className="glass cyber-corners p-4 border border-[var(--border-glow)] card-hover text-left min-h-[120px] flex flex-col"
              >
                <Icon className="icon-glow-pulse w-5 h-5 text-[var(--primary-cyan)] mb-2 shrink-0" />
                <div className="font-display text-xs sm:text-sm font-bold text-[var(--text-white)] leading-snug">
                  {t}
                </div>
                <p className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-1 leading-relaxed flex-1">
                  {d}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-[var(--border-glow)] bg-[var(--bg-main)]">
        <ScrollReveal stagger className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { Icon: Truck, t: "Island-wide dispatch", d: "Insured logistics partners" },
            { Icon: ShieldCheck, t: "Written warranty", d: "Clear terms on used + new" },
            { Icon: Headphones, t: "Technician WhatsApp", d: "Real humans, not bots" },
            { Icon: Cpu, t: "Workshop on-site", d: "Repairs, upgrades, POS, CCTV" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <div className="w-10 h-10 shrink-0 grid place-items-center rounded-lg bg-[var(--gradient-card)] border border-[var(--border-glow)] text-[var(--primary-cyan)]">
                <Icon className="icon-glow-pulse w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-xs sm:text-sm font-bold text-[var(--text-white)] leading-snug">
                  {t}
                </div>
                <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-0.5">{d}</div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Featured used — showroom cinematic */}
      <section className="relative overflow-hidden border-y border-[var(--border-glow)]">
        <img
          src={SITE_IMAGES.usedShowroom}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[center_42%] opacity-[0.48] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050711]/88 via-[#050711]/76 to-[#050711]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(0,217,255,0.08),transparent_45%)] pointer-events-none" />
        <div className="relative container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
          <ScrollReveal>
            <SectionHeader
              eyebrow="IN STOCK"
              title="Featured used PCs & laptops"
              subtitle="A live slice of our bench — message us if you need a different spec tier."
              link="/used"
            />
          </ScrollReveal>
          <ScrollReveal stagger className="grid min-[430px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {usedFeatured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Featured parts — cinematic components backdrop */}
      <section className="relative overflow-hidden border-y border-[var(--border-glow)]">
        <img
          src={SITE_IMAGES.homePartsBg}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[center_38%] opacity-[0.55] scale-105"
        />
        <div className="absolute inset-0 bg-[#050711]/78 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(0,217,255,0.06),transparent_55%)] pointer-events-none" />
        <div className="relative container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
          <ScrollReveal>
            <SectionHeader
              eyebrow="COMPONENTS"
              title="Featured used parts"
              subtitle="Tested where it matters — thermals on GPUs, health on drives, stability on RAM."
              link="/used-parts"
            />
          </ScrollReveal>
          <ScrollReveal stagger className="grid min-[430px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {partsFeatured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Custom build CTA — workshop cinematic */}
      <section className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
        <ScrollReveal>
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[var(--border-glow)] sm:rounded-3xl sm:min-h-[320px]">
          <img
            src={SITE_IMAGES.homeCustomBg}
            alt=""
            width={1920}
            height={1080}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050711]/88 via-[#050711]/72 to-[rgba(0,217,255,0.22)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_92%_48%,rgba(124,77,255,0.28),transparent_52%)]" />
          <div className="relative grid items-center gap-8 px-5 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[10px] tracking-[0.28em] font-bold text-[var(--primary-cyan)]">
                CUSTOM WORKSHOP
              </p>
              <h2 className="font-display mt-2 text-2xl font-black leading-tight text-[var(--text-white)] sm:text-4xl [text-shadow:0_2px_24px_rgba(0,0,0,0.85)]">
                Custom builds without guesswork
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#c8d0e0] [text-shadow:0_1px_14px_rgba(0,0,0,0.9)]">
                Tell us budget and purpose — or use the advanced PC builder simulator for compatible
                picks, mock FPS, and instant WhatsApp handoff.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/custom-builds"
                  className="min-h-[44px] inline-flex items-center gap-2 rounded-full bg-[var(--primary-cyan)] px-6 text-xs font-bold uppercase tracking-wider text-[#050711] transition-colors hover:brightness-110"
                >
                  Build consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/configurator"
                  className="min-h-[44px] inline-flex items-center gap-2 rounded-full border border-[rgba(0,217,255,0.45)] bg-[rgba(5,7,17,0.5)] px-6 text-xs font-bold uppercase tracking-wider text-[var(--text-white)] backdrop-blur-sm transition-colors hover:bg-[rgba(0,217,255,0.12)]"
                >
                  Open PC builder
                </Link>
              </div>
            </div>
            <div className="hidden justify-center lg:flex">
              <div className="animate-pulse-glow flex h-44 w-44 items-center justify-center rounded-2xl border border-[var(--border-glow)] bg-[rgba(15,18,32,0.55)] backdrop-blur-md">
                <Cpu className="animate-float h-20 w-20 text-[var(--primary-cyan)] drop-shadow-[0_0_20px_rgba(0,217,255,0.4)]" />
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Pre-order CTA */}
      <section className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
        <ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border-glow)] sm:rounded-3xl min-h-[220px] sm:min-h-[260px]">
          <img
            src={SITE_IMAGES.preorderDesk}
            alt=""
            width={1920}
            height={1080}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_45%] opacity-[0.42]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050711]/92 via-[#050711]/88 to-[#050711]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(124,77,255,0.15),transparent_50%)] pointer-events-none" />
          <div className="relative glass cyber-corners border border-[var(--border-glow)]/60 bg-[rgba(8,11,24,0.55)] backdrop-blur-md p-6 sm:p-10 grid md:grid-cols-2 gap-8 items-center m-px rounded-[inherit]">
          <div>
            <p className="text-[10px] tracking-[0.28em] text-[var(--primary-purple)] font-bold">
              BRAND NEW
            </p>
            <h2 className="font-display text-xl sm:text-3xl font-black text-[var(--text-white)] mt-2">
              Pre-order desk
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
              Laptops, desktops, components, monitors, phones, and gaming accessories —
              model-accurate quotes with clear lead times.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-start md:justify-end">
            <Link
              to="/pre-order"
              className="min-h-[44px] inline-flex items-center justify-center px-6 rounded-full btn-gradient text-xs font-bold tracking-wider uppercase"
            >
              Pre-order new tech
            </Link>
            <Link
              to="/mobile-phones"
              className="min-h-[44px] inline-flex items-center justify-center px-6 rounded-full border border-[var(--border-glow)] text-xs font-bold tracking-wider uppercase text-[var(--text-white)] hover:bg-[rgba(0,217,255,0.08)]"
            >
              Mobile phones
            </Link>
          </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Services preview */}
      <section className="relative overflow-hidden border-y border-[var(--border-glow)]">
        <img
          src={SITE_IMAGES.servicesBench}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%] opacity-[0.5]"
        />
        <div className="absolute inset-0 bg-[#080b18]/82" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(0,217,255,0.07),transparent_55%)] pointer-events-none" />
        <div className="relative bg-[rgba(8,11,24,0.35)]">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
          <ScrollReveal>
            <SectionHeader
              eyebrow="SERVICE DECK"
              title="Repairs, CCTV & POS"
              subtitle="Supporting businesses and homes — the same engineers who build your PCs."
              link="/services"
            />
          </ScrollReveal>
          <ScrollReveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {servicesPreview.map((s) => (
              <div
                key={s.title}
                className="glass cyber-corners p-4 border border-[var(--border-glow)] card-hover min-h-[120px]"
              >
                <h3 className="font-display text-sm font-bold text-[var(--text-white)]">
                  {s.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </ScrollReveal>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[var(--primary-cyan)] hover:underline"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="text-[10px] tracking-[0.28em] text-[var(--primary-cyan)] font-bold">
              QUICK PATHS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[var(--text-white)] mt-2">
              Browse focus areas
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            {
              title: "Used laptops",
              img: SITE_IMAGES.tileUsedLaptops,
              pos: "object-center" as const,
              to: "/used" as const,
            },
            {
              title: "Used GPUs",
              img: SITE_IMAGES.tileUsedGpus,
              pos: "object-center" as const,
              to: "/used-parts" as const,
            },
            {
              title: "Motherboards",
              img: SITE_IMAGES.tileMotherboards,
              pos: "object-center" as const,
              to: "/used-parts" as const,
            },
            {
              title: "Monitors",
              img: SITE_IMAGES.tileMonitors,
              pos: "object-center" as const,
              to: "/catalog" as const,
            },
            {
              title: "RAM kits",
              img: SITE_IMAGES.tileRamKits,
              pos: "object-center" as const,
              to: "/used-parts" as const,
            },
            {
              title: "PC builder",
              img: SITE_IMAGES.tilePcBuilder,
              pos: "object-center" as const,
              to: "/configurator" as const,
            },
            {
              title: "Phones",
              img: SITE_IMAGES.tilePhones,
              pos: "object-center" as const,
              to: "/mobile-phones" as const,
            },
            {
              title: "Full catalog",
              img: SITE_IMAGES.tileFullCatalog,
              pos: "object-center" as const,
              to: "/catalog" as const,
            },
          ].map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="category-tile group relative aspect-square overflow-hidden rounded-xl border border-[var(--border-glow)] bg-[var(--bg-card)]"
            >
              <img
                src={c.img}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover object-center opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80 ${c.pos}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <span className="font-display text-xs sm:text-sm font-black text-[var(--text-white)]">
                  {c.title}
                </span>
              </div>
            </Link>
          ))}
        </ScrollReveal>
      </section>

      {/* Reviews */}
      <section className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,217,255,0.1)] border border-[var(--border-glow)] text-[var(--primary-cyan)] mb-3 text-xs font-bold tracking-wider uppercase">
              ★ Google-style reviews (demo)
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[var(--text-white)]">
              Trusted by builders island-wide
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="glass cyber-corners p-5 border border-[var(--border-glow)] card-hover relative"
            >
              <div className="stars-group flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < r.rating ? "star-on fill-[var(--warning)] text-[var(--warning)]" : "text-[var(--text-muted)]"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="pt-3 border-t border-[var(--border-glow)] flex items-center gap-3">
                <div className="w-9 h-9 grid place-items-center rounded-full bg-[var(--gradient-main)] text-[#050711] font-display font-black text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-[var(--text-white)]">
                    {r.name}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] tracking-wider uppercase">
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 pb-14 sm:pb-16">
        <ScrollReveal>
        <div className="glass cyber-corners border border-[var(--border-glow)] rounded-2xl p-6 sm:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center text-center md:text-left">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-black text-[var(--text-white)]">
              Ready when you are.
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-2">
              Visit, call, or WhatsApp — we respond with stock photos and straight answers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto min-w-[200px]">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 rounded-full btn-gradient text-xs font-bold tracking-wider uppercase"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <Link
              to="/contact"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 rounded-full border border-[var(--border-glow)] text-xs font-bold tracking-wider uppercase text-[var(--text-white)] hover:bg-[rgba(0,217,255,0.08)]"
            >
              Contact page
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsappE164}`}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 rounded-full bg-[rgba(61,214,140,0.15)] border border-[rgba(61,214,140,0.35)] text-[var(--success)] text-xs font-bold tracking-wider uppercase hover:bg-[rgba(61,214,140,0.22)]"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
