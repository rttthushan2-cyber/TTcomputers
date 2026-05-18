import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import bannerBuild from "@/assets/banner-build.jpg";
import bannerLaptop from "@/assets/banner-laptop.jpg";
import bannerGpu from "@/assets/banner-gpu.jpg";

const slides = [
  {
    eyebrow: "FLAGSHIP RIGS",
    title: "BUILD YOUR\nDREAM PC",
    sub: "Custom gaming PCs engineered in Sri Lanka. RTX 40-series ready, RGB perfected, delivered ready to play.",
    image: bannerBuild,
    bg: "purple-block",
    text: "text-primary-foreground",
    primary: { label: "Build Your PC", to: "/configurator" },
    secondary: { label: "Shop Catalog", to: "/catalog" },
  },
  {
    eyebrow: "MEGA SALE",
    title: "GAMING LAPTOPS\nUP TO 25% OFF",
    sub: "ASUS ROG, MSI Stealth, Lenovo Legion. Limited stock on flagship models with extended warranty.",
    image: bannerLaptop,
    bg: "bg-background",
    text: "text-ink",
    primary: { label: "Shop Laptops", to: "/catalog" },
    secondary: { label: "View Deals", to: "/catalog" },
  },
  {
    eyebrow: "COMPONENTS",
    title: "RTX 40 SERIES\nIN STOCK NOW",
    sub: "GeForce RTX 4070, 4070 Ti Super and 4080 Super available with same-day Colombo delivery.",
    image: bannerGpu,
    bg: "purple-block",
    text: "text-primary-foreground",
    primary: { label: "Shop Graphics", to: "/catalog" },
    secondary: { label: "Compare", to: "/catalog" },
  },
];

export function HeroCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const id = setInterval(() => embla.scrollNext(), 6000);
    return () => {
      clearInterval(id);
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className={`relative flex-[0_0_100%] min-w-0 ${s.bg}`}>
              <div className="relative h-[460px] md:h-[560px] lg:h-[600px] overflow-hidden">
                <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="container mx-auto px-4 lg:px-8 relative h-full flex items-center">
                  <div className={`max-w-xl animate-fade-up ${s.text}`}>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 ${s.bg === "purple-block" ? "bg-white/15 backdrop-blur" : "bg-primary-soft text-primary"}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full animate-pulse ${s.bg === "purple-block" ? "bg-white" : "bg-primary"}`}
                      />
                      <span className="text-[10px] tracking-[0.3em] uppercase font-bold">
                        {s.eyebrow}
                      </span>
                    </div>
                    <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight whitespace-pre-line">
                      {s.title}
                    </h1>
                    <p
                      className={`mt-5 text-base md:text-lg max-w-lg leading-relaxed ${s.bg === "purple-block" ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                    >
                      {s.sub}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        to={s.primary.to}
                        className={`group inline-flex items-center gap-2 px-7 py-3.5 font-bold tracking-wider uppercase text-xs rounded-full transition-all ${s.bg === "purple-block" ? "bg-background text-primary hover:bg-background/90" : "purple-block text-primary-foreground hover:shadow-glow-lg"}`}
                      >
                        {s.primary.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to={s.secondary.to}
                        className={`inline-flex items-center gap-2 px-7 py-3.5 border font-bold tracking-wider uppercase text-xs rounded-full transition-all ${s.bg === "purple-block" ? "border-white/40 text-primary-foreground hover:bg-white/10" : "border-border text-ink hover:border-primary hover:text-primary"}`}
                      >
                        {s.secondary.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${selected === i ? "bg-primary w-10" : "bg-border w-4 hover:bg-muted-foreground"}`}
          />
        ))}
      </div>
    </section>
  );
}
