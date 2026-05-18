import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products, formatLKR } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart | TTComputers" },
      {
        name: "description",
        content: "Review your gaming PC build and accessories before checkout.",
      },
    ],
  }),
  component: CartPage,
});

const initial = [products[0], products[6], products[8]].map((p) => ({ ...p, qty: 1 }));

function CartPage() {
  const [items, setItems] = useState(initial);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 50000 ? 0 : 1500;
  const total = subtotal + shipping;

  return (
    <>
      <PageHeroBanner
        image={SITE_IMAGES.catalogFloor}
        size="sm"
        objectPosition="object-[center_35%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          CHECKOUT LANE
        </p>
        <h1 className="font-display mt-1 text-2xl font-black tracking-tight text-[var(--text-white)] drop-shadow-lg sm:text-3xl md:text-4xl">
          Your cart
        </h1>
        <p className="mt-2 max-w-xl text-sm text-[#c8d0e0] drop-shadow-md">
          Review quantities and shipping before you pay — swap items anytime from the catalog.
        </p>
      </PageHeroBanner>

      <div className="container mx-auto px-4 py-10 lg:px-8 lg:py-12">
        {items.length === 0 ? (
          <div className="glass rounded-xl p-16 text-center">
            <p className="text-muted-foreground mb-4">Your cart is empty.</p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md neon-border tracking-wider uppercase text-sm"
            >
              Browse catalog
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-8">
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="glass cyber-corners rounded-lg p-4 flex gap-4 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-muted-foreground tracking-widest uppercase">
                      {item.brand}
                    </div>
                    <Link
                      to="/product/$id"
                      params={{ id: item.id }}
                      className="font-medium text-sm hover:text-primary line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <div className="font-display font-bold text-primary mt-1">
                      {formatLKR(item.price)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border border-border rounded-md p-1">
                    <button
                      onClick={() =>
                        setItems((arr) =>
                          arr.map((i) =>
                            i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i,
                          ),
                        )
                      }
                      className="w-7 h-7 grid place-items-center hover:text-primary"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-sm">{item.qty}</span>
                    <button
                      onClick={() =>
                        setItems((arr) =>
                          arr.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i)),
                        )
                      }
                      className="w-7 h-7 grid place-items-center hover:text-primary"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => setItems((arr) => arr.filter((i) => i.id !== item.id))}
                    className="p-2 text-muted-foreground hover:text-destructive"
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="pt-10">
                <h2 className="font-display text-xl font-bold mb-4">You may also like</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {products
                    .filter((p) => !items.find((i) => i.id === p.id))
                    .slice(0, 3)
                    .map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 self-start glass cyber-corners rounded-xl p-6 space-y-4">
              <h2 className="font-display text-xl font-bold">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <Row label="Subtotal" value={formatLKR(subtotal)} />
                <Row label="Shipping" value={shipping === 0 ? "FREE" : formatLKR(shipping)} />
                <Row label="Tax" value="Included" />
              </div>
              <div className="border-t border-border pt-4 flex justify-between items-end">
                <span className="text-sm tracking-wider uppercase">Total</span>
                <span className="font-display font-bold text-2xl text-primary text-glow">
                  {formatLKR(total)}
                </span>
              </div>
              <Link
                to="/checkout"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-md neon-border hover:shadow-glow-lg transition-all"
              >
                Checkout <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/catalog"
                className="block text-center text-sm text-muted-foreground hover:text-primary"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
