import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { products, formatLKR } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";
import {
  Star,
  ShieldCheck,
  Truck,
  RefreshCw,
  CheckCircle2,
  ShoppingCart,
  Heart,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Product"} | TTComputers` },
      {
        name: "description",
        content: loaderData?.description ?? `Buy ${loaderData?.name} at TTComputers Sri Lanka.`,
      },
      { property: "og:image", content: loaderData?.image },
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="container mx-auto py-32 text-center">Product not found.</div>
  ),
});

function ProductPage() {
  const product = Route.useLoaderData();
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <PageHeroBanner
        image={SITE_IMAGES.homeMonitorsBg}
        size="sm"
        objectPosition="object-[center_42%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          PRODUCT
        </p>
        <h1 className="font-display mt-1 text-xl font-black tracking-tight text-[var(--text-white)] drop-shadow-lg line-clamp-2 sm:text-3xl md:text-4xl">
          {product.name}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#c8d0e0] drop-shadow-md">
          {product.brand} · {product.category}
          {product.isUsed ? " · Certified used" : " · New retail"}
        </p>
      </PageHeroBanner>

      <div className="container mx-auto px-4 py-10 lg:px-8 lg:py-12">
        <div className="text-xs text-muted-foreground tracking-wider mb-6">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/catalog" className="hover:text-primary">
            Catalog
          </Link>{" "}
          / <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="glass cyber-corners rounded-xl overflow-hidden aspect-square relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded bg-primary text-primary-foreground tracking-widest">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.image, product.image, product.image].map((img, i) => (
                <div
                  key={i}
                  className="glass rounded-md overflow-hidden aspect-square cursor-pointer hover:border-primary border border-border transition-colors"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-primary tracking-[0.3em] mb-2">
              {product.brand} · {product.category}
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">{product.name}</h2>

            <div className="flex items-center gap-4 mb-6 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              <span
                className={`flex items-center gap-1.5 ${product.inStock ? "text-success" : "text-destructive"}`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${product.inStock ? "bg-success" : "bg-destructive"}`}
                />
                {product.inStock ? "In stock" : "Sold out"}
              </span>
            </div>

            <div className="glass rounded-lg p-6 mb-6">
              <div className="flex items-end gap-3">
                <div className="font-display font-bold text-4xl text-primary text-glow">
                  {formatLKR(product.price)}
                </div>
                {product.originalPrice && (
                  <div className="text-lg text-muted-foreground line-through pb-1">
                    {formatLKR(product.originalPrice)}
                  </div>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Inclusive of all taxes · Free island-wide delivery
              </div>
            </div>

            {product.description && (
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
            )}

            {product.isUsed && (
              <div className="glass cyber-corners rounded-lg p-5 mb-6 border-warning/40">
                <div className="text-xs text-warning tracking-[0.3em] mb-3">CONDITION REPORT</div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <Info label="Condition" value={product.condition!} />
                  <Info label="Warranty" value={product.warranty!} />
                  <Info
                    label="Tested"
                    value={product.tested ? "Yes — full diagnostics" : "Not tested"}
                  />
                  <Info label="Returns" value="7 days" />
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-8">
              <button className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-md neon-border hover:shadow-glow-lg transition-all">
                <Zap className="w-4 h-4" /> Buy Now
              </button>
              <button className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-6 py-4 border border-primary text-primary font-medium tracking-wider uppercase text-sm rounded-md hover:bg-primary/10 transition-all">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
              <button
                aria-label="wishlist"
                className="px-4 py-4 border border-border rounded-md hover:border-primary hover:text-primary transition-colors"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { Icon: Truck, t: "Free Delivery", s: "Over Rs. 50,000" },
                { Icon: ShieldCheck, t: "2-Year Warranty", s: "On new builds" },
                { Icon: RefreshCw, t: "7-Day Returns", s: "No questions" },
              ].map(({ Icon, t, s }) => (
                <div key={t} className="glass rounded-md p-3 text-center">
                  <Icon className="w-5 h-5 mx-auto text-primary mb-1" />
                  <div className="font-medium">{t}</div>
                  <div className="text-muted-foreground">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {product.specs && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-6">Specifications</h2>
            <div className="glass rounded-lg overflow-hidden">
              <div className="grid sm:grid-cols-2">
                {product.specs.map((s: { label: string; value: string }, i: number) => (
                  <div
                    key={s.label}
                    className={`px-5 py-4 flex justify-between gap-4 border-border ${i % 2 === 0 ? "sm:border-r" : ""} ${i < product.specs!.length - (product.specs!.length % 2 === 0 ? 2 : 1) ? "border-b" : ""}`}
                  >
                    <span className="text-muted-foreground text-sm">{s.label}</span>
                    <span className="text-sm font-medium text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1">
        {label}
      </div>
      <div className="flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-success" />
        {value}
      </div>
    </div>
  );
}
