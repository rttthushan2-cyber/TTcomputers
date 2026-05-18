import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export function ProductRail({ items }: { items: Product[] }) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    if (!embla) return;
    const update = () => {
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };
    embla.on("select", update);
    embla.on("reInit", update);
    update();
  }, [embla]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 md:gap-5">
          {items.map((p) => (
            <div
              key={p.id}
              className="flex-[0_0_75%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_24%] min-w-0"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => embla?.scrollPrev()}
        disabled={!canPrev}
        aria-label="prev"
        className="hidden md:grid place-items-center absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 border border-border hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:pointer-events-none z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => embla?.scrollNext()}
        disabled={!canNext}
        aria-label="next"
        className="hidden md:grid place-items-center absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 border border-border hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:pointer-events-none z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
