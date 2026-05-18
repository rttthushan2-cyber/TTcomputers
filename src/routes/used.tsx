import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Recycle, ShieldCheck } from "lucide-react";
import { usedPcShowcase } from "@/lib/shop-mocks";
import { formatLKR } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";

export const Route = createFileRoute("/used")({
  head: () => ({
    meta: [
      { title: "Used PCs & Laptops | TTComputers" },
      {
        name: "description",
        content:
          "Used laptops, desktops, gaming PCs, office PCs and student budget machines — tested, graded, warranty-backed.",
      },
    ],
  }),
  component: UsedPage,
});

function UsedPage() {
  return (
    <div className="pb-20">
      <PageHeroBanner
        image={SITE_IMAGES.usedShowroom}
        size="lg"
        objectPosition="object-[center_40%]"
      >
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-[var(--warning)] tracking-[0.25em] font-bold drop-shadow-md">
          <Recycle className="w-3.5 h-3.5" /> TESTED USED HARDWARE
        </div>
        <h1 className="font-display mt-3 max-w-3xl text-2xl font-black leading-tight text-[var(--text-white)] drop-shadow-lg sm:text-4xl md:text-6xl">
          Used PCs &amp; <span className="text-[var(--primary-cyan)] text-glow">Laptops</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#c8d0e0] drop-shadow-md sm:text-base">
          Our main showroom focus: affordable, fully tested systems with honest grades, written
          warranty, and direct WhatsApp support from technicians — not anonymous marketplace
          listings.
        </p>
        <div className="mt-8 grid max-w-md grid-cols-3 gap-2 sm:gap-4">
          {[
            { Icon: CheckCircle2, l: "Diagnostics" },
            { Icon: ShieldCheck, l: "Warranty" },
            { Icon: Recycle, l: "Trade-ins" },
          ].map(({ Icon, l }) => (
            <div
              key={l}
              className="glass cyber-corners border border-[var(--border-glow)] bg-[rgba(5,7,17,0.45)] p-3 text-center backdrop-blur-sm"
            >
              <Icon className="mx-auto mb-1 h-5 w-5 text-[var(--primary-cyan)]" />
              <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-white)]">
                {l}
              </div>
            </div>
          ))}
        </div>
      </PageHeroBanner>

      <section className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {usedPcShowcase.map((c) => (
            <article
              key={c.id}
              className="group glass cyber-corners rounded-xl overflow-hidden border border-[var(--border-glow)] card-hover flex flex-col"
            >
              <div className="aspect-[16/10] bg-[var(--bg-section)] overflow-hidden relative">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[var(--warning)] text-[#050711] tracking-widest">
                    USED
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-[rgba(5,7,17,0.65)] text-[var(--text-white)] border border-[var(--border-glow)]">
                    {c.condition}
                  </span>
                  {c.tested && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[rgba(61,214,140,0.15)] text-[var(--success)] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Tested
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h2 className="font-display font-black text-lg text-[var(--text-white)]">
                    {c.title}
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{c.blurb}</p>
                </div>
                <ul className="text-[11px] text-[var(--text-muted)] space-y-1">
                  {c.specs.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-[var(--primary-cyan)]">▹</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                      From
                    </div>
                    <div className="font-display font-black text-xl text-[var(--primary-cyan)]">
                      {formatLKR(c.price)}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)]">
                      Warranty: {c.warranty}
                    </div>
                  </div>
                  <a
                    href={waLink(
                      `Hi ${SITE.name}, I'm interested in: ${c.title} (from ${formatLKR(c.price)})`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full btn-gradient text-[10px] font-bold uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-[var(--text-muted)] mt-10 max-w-2xl mx-auto">
          Stock rotates fast. If you need a spec sheet or live photos, message us on WhatsApp — we
          answer with real bench data, not marketing blurbs.
        </p>
      </section>
    </div>
  );
}
