import { createFileRoute } from "@tanstack/react-router";
import { Cpu, ShieldCheck, Users, Award, Wrench, Heart } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${SITE.name} | Sri Lanka's Premium Gaming PC Builder` },
      {
        name: "description",
        content:
          `Founded by gamers, for gamers. ${SITE.name} builds, services and trades premium gaming hardware across Sri Lanka.`,
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHeroBanner
        image={SITE_IMAGES.aboutWorkshop}
        size="lg"
        className="lg:min-h-[400px]"
        objectPosition="object-[center_35%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          ABOUT US
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight text-[var(--text-white)] drop-shadow-lg md:text-7xl">
          Built by gamers, <span className="text-[var(--primary-cyan)] text-glow">for gamers</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c8d0e0] drop-shadow-md">
          Since 2018 we&apos;ve been assembling premium gaming PCs in Colombo, hand-picking
          components, stress-testing every build and standing behind our work.
        </p>
      </PageHeroBanner>

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: "10K+", l: "Builds Delivered" },
            { n: "98%", l: "5-Star Reviews" },
            { n: "25", l: "Brand Partners" },
            { n: "8 yrs", l: "In Business" },
          ].map((s) => (
            <div key={s.l} className="glass cyber-corners rounded-lg p-6 text-center">
              <div className="font-display font-black text-4xl text-primary text-glow">{s.n}</div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-10">What we believe</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              Icon: Cpu,
              t: "Engineering First",
              d: "Cable management, thermal headroom and silent operation aren't optional — they're standard.",
            },
            {
              Icon: ShieldCheck,
              t: "Honest Trade",
              d: "Every used item is tested, graded and labelled honestly. No surprises after delivery.",
            },
            {
              Icon: Heart,
              t: "Built to Last",
              d: "We pick parts you'll love for years, not the cheapest combo on a spec sheet.",
            },
            {
              Icon: Wrench,
              t: "Lifetime Support",
              d: "Bring your rig back any time for upgrades, diagnostics or a full re-paste.",
            },
            {
              Icon: Users,
              t: "Local & Personal",
              d: "Talk to the actual technician building your PC, not a call center half a world away.",
            },
            {
              Icon: Award,
              t: "Authorized Partner",
              d: "Official Sri Lanka partner of ASUS, MSI, Corsair, Kingston and more.",
            },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="glass cyber-corners rounded-lg p-6 glass-hover">
              <div className="w-12 h-12 grid place-items-center rounded-md bg-primary/15 border border-primary/40 text-primary mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
