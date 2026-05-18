import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield } from "lucide-react";
import { serviceItems } from "@/lib/shop-mocks";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Tech Services | TTComputers" },
      {
        name: "description",
        content:
          "Repairs, CCTV, POS, software, Windows installs, upgrades, cleaning and full hardware support.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeroBanner
        image={SITE_IMAGES.servicesBench}
        size="lg"
        objectPosition="object-[center_38%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          SERVICE DECK
        </p>
        <h1 className="font-display mt-2 text-2xl font-black text-[var(--text-white)] drop-shadow-lg sm:text-4xl md:text-5xl">
          Professional Services
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[#c8d0e0] drop-shadow-md sm:mx-0">
          Services support our retail business — installs, repairs, CCTV, and POS rollouts — while
          the shop stays focused on used systems, parts, custom builds, and pre-orders.
        </p>
      </PageHeroBanner>

      <div className="container mx-auto max-w-5xl px-3 sm:px-4 lg:px-8 py-10 sm:py-14 pb-20">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {serviceItems.map((s) => (
            <div
              key={s.title}
              className="glass cyber-corners flex gap-3 rounded-xl border border-[var(--border-glow)] p-5 card-hover"
            >
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary-purple)]" />
              <div>
                <h2 className="font-display font-bold text-[var(--text-white)]">{s.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-[var(--border-glow)] bg-[var(--bg-card)]/40 p-6 sm:flex-row sm:items-center sm:p-8">
          <p className="text-sm text-[var(--text-muted)]">
            Need a site visit, office rollout quote, or same-day diagnosis? Reach the service desk
            directly.
          </p>
          <Link
            to="/contact"
            className="btn-gradient inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider"
          >
            Contact <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
