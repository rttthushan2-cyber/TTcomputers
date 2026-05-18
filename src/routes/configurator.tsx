import { createFileRoute } from "@tanstack/react-router";
import { PcBuilderSimulator } from "@/components/pc-builder/PcBuilderSimulator";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";

export const Route = createFileRoute("/configurator")({
  head: () => ({
    meta: [
      { title: "Advanced PC Builder Simulator | TTComputers" },
      {
        name: "description",
        content:
          "Premium step-by-step PC configurator with mock compatibility, live pricing, FPS estimates, and WhatsApp handoff.",
      },
    ],
  }),
  component: ConfiguratorPage,
});

function ConfiguratorPage() {
  return (
    <>
      <PageHeroBanner
        image={SITE_IMAGES.homeCustomBg}
        size="sm"
        objectPosition="object-[center_38%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          ADVANCED SIMULATOR
        </p>
        <h1 className="font-display mt-1 text-2xl font-black tracking-tight text-[var(--text-white)] drop-shadow-lg sm:text-3xl md:text-4xl">
          Custom PC Builder
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#c8d0e0] drop-shadow-md sm:mx-0">
          Step-by-step configurator with mock compatibility, live pricing, FPS estimates, and
          bottleneck hints — connect your inventory API later without redesigning the flow.
        </p>
      </PageHeroBanner>
      <PcBuilderSimulator />
    </>
  );
}
