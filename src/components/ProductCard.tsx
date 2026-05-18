import { Link } from "@tanstack/react-router";
import { Heart, Eye, ShoppingCart, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Product, formatLKR } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  const [cartPop, setCartPop] = useState(false);

  function handleAddToCart() {
    setCartPop(true);
  }

  return (
    <div className="product-card-border-glow group relative bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col h-full">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.badge && (
          <span
            className={`text-[10px] font-bold px-2 py-1 rounded-md tracking-widest ${
              product.badge === "SALE"
                ? "bg-destructive text-destructive-foreground"
                : product.badge === "NEW"
                  ? "bg-success text-primary-foreground"
                  : "purple-block text-primary-foreground"
            }`}
          >
            {product.badge}
          </span>
        )}
        {product.isUsed && (
          <span className="text-[10px] font-bold px-2 py-1 rounded-md tracking-widest bg-warning text-primary-foreground">
            USED
          </span>
        )}
      </div>

      {/* Quick actions */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
        <button
          aria-label="wishlist"
          className="w-8 h-8 grid place-items-center rounded-full bg-background border border-border shadow-soft hover:border-primary hover:text-primary transition-colors"
        >
          <Heart className="w-4 h-4" />
        </button>
        <Link
          to="/product/$id"
          params={{ id: product.id }}
          aria-label="quick view"
          className="w-8 h-8 grid place-items-center rounded-full bg-background border border-border shadow-soft hover:border-primary hover:text-primary transition-colors"
        >
          <Eye className="w-4 h-4" />
        </Link>
      </div>

      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="block aspect-square overflow-hidden bg-surface"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="text-[10px] text-muted-foreground tracking-widest uppercase font-semibold">
          {product.category} · {product.brand}
        </div>
        <Link
          to="/product/$id"
          params={{ id: product.id }}
          className="font-semibold text-sm leading-snug text-ink hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]"
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="w-3 h-3 fill-warning text-warning" />
          <span className="text-foreground font-medium">{product.rating}</span>
          <span>({product.reviews})</span>
          <span className="ml-auto flex items-center gap-1">
            <span
              className={`w-1.5 h-1.5 rounded-full ${product.inStock ? "bg-success" : "bg-destructive"}`}
            />
            {product.inStock ? "In stock" : "Sold out"}
          </span>
        </div>

        {product.isUsed && (
          <div className="flex flex-wrap gap-1.5 text-[10px]">
            <span className="px-1.5 py-0.5 rounded bg-secondary text-foreground font-medium">
              {product.condition}
            </span>
            {product.tested && (
              <span className="px-1.5 py-0.5 rounded bg-success/15 text-success flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-2.5 h-2.5" />
                Tested
              </span>
            )}
            {product.warranty && product.warranty !== "No warranty" && (
              <span className="px-1.5 py-0.5 rounded bg-primary-soft text-primary flex items-center gap-1 font-medium">
                <ShieldCheck className="w-2.5 h-2.5" />
                {product.warranty}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-3 flex items-end justify-between">
          <div>
            <div className="price-glow-loop font-display font-black text-lg text-primary leading-tight">
              {formatLKR(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-muted-foreground line-through">
                {formatLKR(product.originalPrice)}
              </div>
            )}
          </div>
          <button
            disabled={!product.inStock}
            className={`w-10 h-10 grid place-items-center rounded-full purple-block text-primary-foreground hover:shadow-glow transition-all disabled:opacity-40 disabled:cursor-not-allowed${cartPop ? " cart-btn-pop" : ""}`}
            aria-label="Add to cart"
            onClick={handleAddToCart}
            onAnimationEnd={() => setCartPop(false)}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
