import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock, Laptop, Monitor, Package, Smartphone, Sparkles } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";

export const Route = createFileRoute("/pre-order")({
  head: () => ({
    meta: [
      { title: "Pre-Order Brand-New Tech | TTComputers" },
      {
        name: "description",
        content:
          "Pre-order brand-new laptops, desktops, components, monitors, phones and gaming accessories with clear timelines.",
      },
    ],
  }),
  component: PreOrderPage,
});

const lines = [
  {
    Icon: Laptop,
    title: "Brand-new laptops",
    desc: "Ultrabooks, gaming, creator — regional warranty paths explained upfront.",
  },
  {
    Icon: Monitor,
    title: "Brand-new PCs",
    desc: "Office towers, SFF, and enthusiast desktops built to your SKU list.",
  },
  {
    Icon: Package,
    title: "PC parts",
    desc: "CPUs, GPUs, RAM, boards, PSUs — model-accurate quotes.",
  },
  {
    Icon: Sparkles,
    title: "Gaming accessories",
    desc: "Headsets, keyboards, chairs, streaming gear on request.",
  },
  {
    Icon: Monitor,
    title: "Monitors",
    desc: "Esports, ultrawide, colour-critical — tell us panel type and refresh target.",
  },
  {
    Icon: Smartphone,
    title: "Mobile phones",
    desc: "iPhone, Samsung, Xiaomi and more — see also our dedicated phones page.",
  },
];

function PreOrderPage() {
  return (
    <>
      <PageHeroBanner
        image={SITE_IMAGES.preorderDesk}
        size="lg"
        objectPosition="object-[center_45%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          BRAND NEW
        </p>
        <h1 className="font-display mt-2 text-2xl font-black text-[var(--text-white)] drop-shadow-lg sm:text-4xl md:text-5xl">
          Pre-Order Desk
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[#c8d0e0] drop-shadow-md sm:mx-0">
          Share model, budget, brand, and when you need it — we confirm availability, duty-aware
          pricing, and expected delivery windows before you commit.
        </p>
      </PageHeroBanner>

      <div className="container mx-auto max-w-5xl px-3 sm:px-4 lg:px-8 py-10 sm:py-14 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 sm:mb-10">
          {lines.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="glass cyber-corners rounded-xl border border-[var(--border-glow)] p-5 card-hover"
            >
              <Icon className="mb-3 h-6 w-6 text-[var(--primary-cyan)]" />
              <h2 className="font-display font-bold text-[var(--text-white)]">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="glass cyber-corners flex flex-col items-start justify-between gap-6 rounded-xl border border-[var(--border-glow)] p-6 sm:p-8 md:flex-row md:items-center">
          <div className="flex gap-3">
            <CalendarClock className="w-8 h-8 text-[var(--primary-purple)] shrink-0" />
            <div>
              <h3 className="font-display font-bold text-lg text-[var(--text-white)]">
                How pre-order works
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                Deposit rules vary by supplier — we document everything in writing. You can request
                any tech item not listed here.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              to="/mobile-phones"
              className="inline-flex justify-center px-5 py-2.5 rounded-full border border-[var(--border-glow)] text-xs font-bold uppercase tracking-wider text-[var(--text-white)] hover:bg-[rgba(0,217,255,0.08)]"
            >
              Phones page
            </Link>
            <a
              href={waLink(`Hi ${SITE.name}, I want to pre-order: `)}
              target="_blank"
              rel="noreferrer"
              className="btn-gradient inline-flex justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-center"
            >
              Start WhatsApp pre-order
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
