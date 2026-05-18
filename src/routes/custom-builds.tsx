import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, Gamepad2, GraduationCap, MonitorPlay, PenTool, Wrench } from "lucide-react";
import { useState } from "react";
import { SITE, waLink } from "@/lib/site";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";

export const Route = createFileRoute("/custom-builds")({
  head: () => ({
    meta: [
      { title: "Custom PC Builds | TTComputers" },
      {
        name: "description",
        content:
          "Gaming, office, student, creator and upgrade PC builds — budget-led quotes from our workshop.",
      },
    ],
  }),
  component: CustomBuildsPage,
});

const buildTypes = [
  {
    Icon: Gamepad2,
    title: "Gaming PC builds",
    body: "1080p esports to 4K cinematic — tuned for thermals, low noise options, and clean cable management.",
  },
  {
    Icon: MonitorPlay,
    title: "Office PC builds",
    body: "Reliable iGPU or discrete options, dual-monitor support, and business-grade stability.",
  },
  {
    Icon: GraduationCap,
    title: "Student budget builds",
    body: "Upgrade-friendly platforms so you can add RAM or GPU later without replacing the whole machine.",
  },
  {
    Icon: PenTool,
    title: "Editing / creator builds",
    body: "CPU-heavy timelines, fast NVMe scratch disks, and colour-accurate display pairings on request.",
  },
  {
    Icon: Wrench,
    title: "Upgrade builds",
    body: "We audit your current rig, reuse what makes sense, and swap only bottleneck components.",
  },
];

function CustomBuildsPage() {
  const [budget, setBudget] = useState("");
  const [purpose, setPurpose] = useState("");
  const [notes, setNotes] = useState("");

  const msg = `Custom build request\nBudget: ${budget}\nPurpose: ${purpose}\nNotes: ${notes}`;

  return (
    <>
      <PageHeroBanner
        image={SITE_IMAGES.homeCustomBg}
        size="lg"
        objectPosition="object-[center_38%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          WORKSHOP
        </p>
        <h1 className="font-display mt-2 text-2xl font-black text-[var(--text-white)] drop-shadow-lg sm:text-4xl md:text-5xl">
          Custom Builds
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[#c8d0e0] drop-shadow-md sm:mx-0">
          Tell us your budget and purpose — we suggest balanced parts, transparent pricing, and a
          clear upgrade path.
        </p>
      </PageHeroBanner>

      <div className="container mx-auto max-w-5xl px-3 sm:px-4 lg:px-8 py-10 sm:py-14 pb-20">
        <div className="mb-12 grid gap-4 sm:gap-5 md:grid-cols-2">
          {buildTypes.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="glass cyber-corners rounded-xl border border-[var(--border-glow)] p-5 sm:p-6 card-hover"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-[var(--border-glow)] bg-[var(--gradient-card)]">
                <Icon className="h-5 w-5 text-[var(--primary-cyan)]" />
              </div>
              <h2 className="font-display text-lg font-bold text-[var(--text-white)]">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </div>
          ))}
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
          <form
            className="glass cyber-corners rounded-xl p-5 sm:p-7 space-y-4 border border-[var(--border-glow)]"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waLink(msg), "_blank");
            }}
          >
            <h2 className="font-display text-xl font-bold text-[var(--text-white)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[var(--primary-cyan)]" />
              Build request
            </h2>
            <label className="block text-xs text-[var(--text-muted)] tracking-wider uppercase">
              Budget (LKR)
              <input
                required
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-1.5 w-full px-3 py-2.5 rounded-lg bg-[var(--input)] border border-[var(--border-glow)] text-sm text-[var(--text-white)] focus:border-[var(--primary-cyan)] outline-none"
                placeholder="e.g. 250000"
              />
            </label>
            <label className="block text-xs text-[var(--text-muted)] tracking-wider uppercase">
              Purpose
              <input
                required
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="mt-1.5 w-full px-3 py-2.5 rounded-lg bg-[var(--input)] border border-[var(--border-glow)] text-sm text-[var(--text-white)] focus:border-[var(--primary-cyan)] outline-none"
                placeholder="Gaming / office / editing…"
              />
            </label>
            <label className="block text-xs text-[var(--text-muted)] tracking-wider uppercase">
              Games or software
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="mt-1.5 w-full px-3 py-2.5 rounded-lg bg-[var(--input)] border border-[var(--border-glow)] text-sm text-[var(--text-white)] focus:border-[var(--primary-cyan)] outline-none resize-none"
                placeholder="Valorant 240Hz, Adobe Premiere, AutoCAD…"
              />
            </label>
            <button
              type="submit"
              className="btn-gradient w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase"
            >
              WhatsApp this brief to {SITE.name}
            </button>
          </form>

          <div className="glass cyber-corners rounded-xl p-5 sm:p-7 border border-[var(--border-glow)] space-y-4">
            <h3 className="font-display font-bold text-lg text-[var(--text-white)]">
              Try the online builder
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Experiment with compatible parts, see mock FPS estimates, and send us the
              configuration in one tap.
            </p>
            <Link
              to="/configurator"
              className="btn-gradient inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase"
            >
              Open PC builder simulator
            </Link>
            <Link
              to="/contact"
              className="block text-sm text-[var(--primary-cyan)] font-semibold hover:underline"
            >
              Or call / visit the showroom →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
