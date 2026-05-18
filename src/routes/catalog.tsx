import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { SlidersHorizontal } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Catalog — Gaming PCs & Components | TTComputers" },
      {
        name: "description",
        content:
          "Browse premium gaming PCs, laptops, GPUs, processors, RAM, storage and accessories. Filter by brand, price and condition.",
      },
    ],
  }),
  component: CatalogPage,
});

const allCategories = [
  "All",
  "Gaming PCs",
  "Laptops",
  "Monitors",
  "Graphic Cards",
  "Processors",
  "Motherboards",
  "RAM",
  "SSD",
  "Accessories",
];
const allBrands = Array.from(new Set(products.map((p) => p.brand)));

function CatalogPage() {
  const [cat, setCat] = useState("All");
  const [brand, setBrand] = useState<string>("All");
  const [condition, setCondition] = useState<"All" | "New" | "Used">("All");
  const [sort, setSort] = useState("newest");
  const [maxPrice, setMaxPrice] = useState(500000);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let r = products.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        (brand === "All" || p.brand === brand) &&
        (condition === "All" || (condition === "Used" ? p.isUsed : !p.isUsed)) &&
        p.price <= maxPrice,
    );
    if (sort === "low") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "high") r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [cat, brand, condition, sort, maxPrice]);

  return (
    <>
      <PageHeroBanner
        image={SITE_IMAGES.catalogFloor}
        size="lg"
        objectPosition="object-[center_30%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          SHOP
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold text-[var(--text-white)] drop-shadow-lg md:text-5xl">
          Product Catalog
        </h1>
        <p className="mt-2 max-w-xl text-sm text-[#c8d0e0] drop-shadow-md">
          Browse builds, laptops, GPUs, memory, storage and peripherals — filter by condition and
          budget.
        </p>
      </PageHeroBanner>

      <div className="container mx-auto px-4 py-12 lg:px-8">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="lg:hidden mb-4 inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm"
        >
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className={`${filtersOpen ? "block" : "hidden"} lg:block space-y-6`}>
            <FilterGroup title="Category">
              {allCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`block w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${cat === c ? "bg-primary/15 text-primary border border-primary/40" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {c}
                </button>
              ))}
            </FilterGroup>

            <FilterGroup title="Condition">
              {(["All", "New", "Used"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCondition(c)}
                  className={`block w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${condition === c ? "bg-primary/15 text-primary border border-primary/40" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {c}
                </button>
              ))}
            </FilterGroup>

            <FilterGroup title="Brand">
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded text-sm focus:border-primary outline-none"
              >
                <option value="All">All brands</option>
                {allBrands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </FilterGroup>

            <FilterGroup title="Max Price">
              <input
                type="range"
                min={5000}
                max={500000}
                step={5000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(+e.target.value)}
                className="w-full accent-primary"
              />
              <div className="text-sm text-muted-foreground mt-1">
                Up to Rs. {maxPrice.toLocaleString()}
              </div>
            </FilterGroup>
          </aside>

          <div>
            <div className="flex items-center justify-between mb-6 glass rounded-md px-4 py-3">
              <div className="text-sm text-muted-foreground">{filtered.length} products</div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-1.5 bg-input border border-border rounded text-sm focus:border-primary outline-none"
              >
                <option value="newest">Newest</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="glass rounded-lg p-16 text-center text-muted-foreground">
                No products match these filters.
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass cyber-corners rounded-lg p-4">
      <h3 className="font-display text-sm tracking-widest uppercase mb-3 text-primary">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}
