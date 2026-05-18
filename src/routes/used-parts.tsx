import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Wrench } from "lucide-react";
import { usedPartCards } from "@/lib/shop-mocks";
import { formatLKR } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";

export const Route = createFileRoute("/used-parts")({
  head: () => ({
    meta: [
      { title: "Used PC Parts | TTComputers" },
      {
        name: "description",
        content:
          "Tested used CPUs, GPUs, RAM, storage, motherboards, PSUs, monitors and accessories.",
      },
    ],
  }),
  component: UsedPartsPage,
});

const cats = Array.from(new Set(usedPartCards.map((c) => c.category)));

function UsedPartsPage() {
  return (
    <div className="pb-16">
      <PageHeroBanner
        image={SITE_IMAGES.usedPartsWall}
        size="lg"
        objectPosition="object-[center_35%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          INVENTORY
        </p>
        <h1 className="font-display mt-2 text-2xl font-black text-[var(--text-white)] drop-shadow-lg sm:text-4xl md:text-5xl">
          Used Parts &amp; Accessories
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[#c8d0e0] drop-shadow-md sm:mx-0">
          Every item is inspected, stress-tested where applicable, and priced fairly. Stock rotates
          daily — message us for serial photos before you travel.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
          {cats.map((c) => (
            <a
              key={c}
              href={`#${encodeURIComponent(c)}`}
              className="rounded-full border border-[var(--border-glow)] bg-[rgba(5,7,17,0.45)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] backdrop-blur-sm transition-colors hover:border-[var(--primary-cyan)]/45 hover:text-[var(--text-white)] sm:text-[11px]"
            >
              {c}
            </a>
          ))}
        </div>
      </PageHeroBanner>

      <div className="container mx-auto max-w-5xl px-3 sm:px-4 lg:px-8 py-10 sm:py-12 space-y-12 sm:space-y-16">
        {cats.map((category) => (
          <section key={category} id={encodeURIComponent(category)}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
              <h2 className="font-display text-lg sm:text-2xl font-black text-[var(--text-white)] flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[var(--primary-cyan)] shrink-0" />
                {category}
              </h2>
              <Link
                to="/contact"
                className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[var(--primary-cyan)] hover:underline"
              >
                Request part not listed →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {usedPartCards
                .filter((p) => p.category === category)
                .map((p) => (
                  <article
                    key={p.id}
                    className="group glass cyber-corners rounded-xl overflow-hidden border border-[var(--border-glow)] card-hover flex flex-col"
                  >
                    <div className="aspect-[16/10] bg-[var(--bg-section)] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <div className="flex flex-wrap gap-1.5 text-[10px]">
                        <span className="px-2 py-0.5 rounded-md bg-[var(--secondary)] text-[var(--text-white)] font-semibold">
                          {p.condition}
                        </span>
                        {p.tested && (
                          <span className="px-2 py-0.5 rounded-md bg-[rgba(61,214,140,0.12)] text-[var(--success)] font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Bench tested
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm text-[var(--text-white)] leading-snug">
                        {p.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{p.specs}</p>
                      <div className="mt-auto pt-3 flex items-center justify-between gap-2">
                        <span className="font-display font-black text-base text-[var(--primary-cyan)]">
                          {formatLKR(p.price)}
                        </span>
                        <a
                          href={waLink(
                            `Hi ${SITE.name}, I'm interested in: ${p.name} (${p.specs}) at ${formatLKR(p.price)}`,
                          )}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-[var(--border-glow)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-white)] hover:bg-[rgba(0,217,255,0.08)]"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[var(--success)]" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
