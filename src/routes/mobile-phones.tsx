import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Smartphone } from "lucide-react";
import { preorderPhones, usedPhones } from "@/lib/shop-mocks";
import { formatLKR } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";

export const Route = createFileRoute("/mobile-phones")({
  head: () => ({
    meta: [
      { title: "Mobile Phones — Used & Pre-Order | TTComputers" },
      {
        name: "description",
        content:
          "Used phones with tested batteries and brand-new phone pre-orders — iPhone, Samsung, Xiaomi and more.",
      },
    ],
  }),
  component: MobilePhonesPage,
});

function MobilePhonesPage() {
  return (
    <div className="pb-20">
      <PageHeroBanner
        image={SITE_IMAGES.mobilePhones}
        size="lg"
        objectPosition="object-[center_40%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          MOBILE
        </p>
        <h1 className="font-display mt-2 text-2xl font-black text-[var(--text-white)] drop-shadow-lg sm:text-4xl md:text-5xl">
          Mobile Phones
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[#c8d0e0] drop-shadow-md">
          Two clear lanes — tested used devices in stock today, and brand-new pre-orders sourced to
          your exact model, colour, and storage.
        </p>
      </PageHeroBanner>

      <div className="container mx-auto max-w-5xl px-3 sm:px-4 lg:px-8 py-10 sm:py-14 space-y-14">
        <section id="used-phones">
          <div className="flex items-center gap-2 mb-6">
            <Smartphone className="w-6 h-6 text-[var(--primary-cyan)]" />
            <h2 className="font-display text-xl sm:text-2xl font-black text-[var(--text-white)]">
              A. Used mobile phones
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {usedPhones.map((p) => (
              <article
                key={p.id}
                className="glass cyber-corners rounded-xl p-5 border border-[var(--border-glow)] card-hover flex flex-col"
              >
                <div className="flex flex-wrap gap-1.5 text-[10px] mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-[var(--warning)]/20 text-[var(--warning)] font-bold">
                    USED
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[var(--secondary)] text-[var(--text-white)]">
                    {p.condition}
                  </span>
                  {p.tested && (
                    <span className="px-2 py-0.5 rounded-md bg-[rgba(61,214,140,0.12)] text-[var(--success)] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Tested
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--text-white)]">
                  {p.model}
                </h3>
                <ul className="text-xs text-[var(--text-muted)] mt-2 space-y-1">
                  <li>Storage: {p.storage}</li>
                  {p.batteryHealth && <li>Battery health: {p.batteryHealth}</li>}
                  <li>Warranty: {p.warranty}</li>
                </ul>
                <div className="mt-auto pt-4 flex items-center justify-between gap-2">
                  <span className="font-display font-black text-lg text-[var(--primary-cyan)]">
                    {formatLKR(p.price)}
                  </span>
                  <a
                    href={waLink(
                      `Hi ${SITE.name}, I want the used phone: ${p.model} (${p.storage}) at ${formatLKR(p.price)}`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-[var(--border-glow)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-white)] hover:bg-[rgba(0,217,255,0.08)]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[var(--success)]" />
                    WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="preorder-phones">
          <div className="flex items-center gap-2 mb-6">
            <Smartphone className="w-6 h-6 text-[var(--primary-purple)]" />
            <h2 className="font-display text-xl sm:text-2xl font-black text-[var(--text-white)]">
              B. Brand-new mobile phone pre-orders
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {preorderPhones.map((b) => (
              <div
                key={b.id}
                className="glass cyber-corners rounded-xl p-5 border border-[var(--border-glow)]"
              >
                <div className="text-[10px] tracking-[0.25em] text-[var(--primary-cyan)] font-bold mb-1">
                  {b.brand}
                </div>
                <h3 className="font-display font-bold text-[var(--text-white)]">{b.headline}</h3>
                <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">{b.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Pre-order by model, storage, colour, and budget — we reply with lead time and payment
            milestones.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(
                `Hi ${SITE.name}, I want to pre-order a phone.\nBrand:\nModel:\nStorage:\nColour:\nBudget (LKR):\nNeeded by (date):`,
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-gradient px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider inline-flex justify-center"
            >
              WhatsApp pre-order template
            </a>
            <Link
              to="/pre-order"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[var(--border-glow)] text-xs font-bold uppercase tracking-wider text-[var(--text-white)] hover:bg-[rgba(0,217,255,0.08)]"
            >
              Other brand-new tech
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
