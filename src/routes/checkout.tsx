import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { formatLKR, products } from "@/lib/data";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";
import { CheckCircle2, CreditCard, Truck, Lock } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | TTComputers" },
      { name: "description", content: "Secure checkout for your gaming PC build and accessories." },
    ],
  }),
  component: CheckoutPage,
});

const items = [products[0], products[6], products[8]].map((p) => ({ ...p, qty: 1 }));
const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
const shipping = subtotal > 50000 ? 0 : 1500;
const total = subtotal + shipping;

function CheckoutPage() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="container mx-auto px-4 py-32 max-w-xl text-center">
        <div className="glass cyber-corners rounded-2xl p-12 animate-fade-up">
          <div className="w-16 h-16 mx-auto rounded-full bg-success/15 grid place-items-center mb-6 animate-pulse-glow">
            <CheckCircle2 className="w-8 h-8 text-success" />
          </div>
          <h1 className="font-display font-bold text-3xl mb-3">Order Confirmed</h1>
          <p className="text-muted-foreground mb-2">
            Order #CYB-{Math.floor(Math.random() * 90000) + 10000}
          </p>
          <p className="text-muted-foreground mb-8">
            Your build is being prepped. We'll email tracking details shortly.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md neon-border tracking-wider uppercase text-sm"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeroBanner
        image={SITE_IMAGES.contactStore}
        size="sm"
        objectPosition="object-[center_40%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          SECURE PAY
        </p>
        <h1 className="font-display mt-1 text-2xl font-black tracking-tight text-[var(--text-white)] drop-shadow-lg sm:text-3xl md:text-4xl">
          Checkout
        </h1>
        <p className="mt-2 max-w-xl text-sm text-[#c8d0e0] drop-shadow-md">
          Encrypted-style mock flow — delivery, payment method, and order summary in one screen.
        </p>
      </PageHeroBanner>

      <div className="container mx-auto px-4 py-10 lg:px-8 lg:py-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="grid lg:grid-cols-[1fr_400px] gap-8"
        >
          <div className="space-y-6">
            <FormSection title="Personal Info">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First name" required />
                <Field label="Last name" required />
                <Field label="Email" type="email" required />
                <Field label="Phone" placeholder="+94 7X XXX XXXX" required />
              </div>
            </FormSection>

            <FormSection title="Delivery" Icon={Truck}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Select
                  label="Method"
                  options={["Courier (1-3 days)", "Express (next day)", "In-store pickup"]}
                />
                <Select label="City" options={["Colombo", "Kandy", "Galle", "Negombo", "Jaffna"]} />
                <div className="sm:col-span-2">
                  <Field label="Street address" required />
                </div>
                <Field label="Postal code" />
              </div>
            </FormSection>

            <FormSection title="Payment" Icon={CreditCard}>
              <div className="space-y-3 mb-4">
                {["Card (PayHere)", "Bank Transfer", "Cash on Delivery"].map((o) => (
                  <label
                    key={o}
                    className="flex items-center gap-3 p-3 glass rounded-md cursor-pointer hover:border-primary border border-border"
                  >
                    <input
                      type="radio"
                      name="pay"
                      defaultChecked={o === "Card (PayHere)"}
                      className="accent-primary"
                    />
                    <span className="text-sm">{o}</span>
                  </label>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <Field label="Card number" placeholder="•••• •••• •••• ••••" />
                </div>
                <Field label="Expiry" placeholder="MM/YY" />
                <Field label="CVC" placeholder="•••" />
              </div>
            </FormSection>
          </div>

          <aside className="lg:sticky lg:top-24 self-start glass cyber-corners rounded-xl p-6 space-y-4">
            <h2 className="font-display text-xl font-bold">Order Summary</h2>
            <div className="space-y-3 max-h-72 overflow-auto pr-1">
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 items-center">
                  <img
                    src={i.image}
                    alt={i.name}
                    className="w-14 h-14 object-cover rounded-md shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium truncate">{i.name}</div>
                    <div className="text-xs text-muted-foreground">Qty {i.qty}</div>
                  </div>
                  <div className="text-sm font-medium text-primary">{formatLKR(i.price)}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-1.5 text-sm">
              <Row label="Subtotal" value={formatLKR(subtotal)} />
              <Row label="Shipping" value={shipping === 0 ? "FREE" : formatLKR(shipping)} />
            </div>
            <div className="border-t border-border pt-3 flex justify-between items-end">
              <span className="text-sm tracking-wider uppercase">Total</span>
              <span className="font-display font-bold text-2xl text-primary text-glow">
                {formatLKR(total)}
              </span>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-md neon-border hover:shadow-glow-lg transition-all"
            >
              <Lock className="w-4 h-4" /> Confirm Order
            </button>
            <p className="text-xs text-center text-muted-foreground">
              256-bit encrypted · Powered by PayHere
            </p>
          </aside>
        </form>
      </div>
    </>
  );
}

function FormSection({
  title,
  Icon,
  children,
}: {
  title: string;
  Icon?: typeof Truck;
  children: React.ReactNode;
}) {
  return (
    <div className="glass cyber-corners rounded-xl p-6">
      <h2 className="font-display text-lg font-bold mb-5 flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-primary" />} {title}
      </h2>
      {children}
    </div>
  );
}

function Field({
  label,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground tracking-wider uppercase block mb-1.5">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 bg-input border border-border rounded-md text-sm focus:border-primary focus:outline-none focus:neon-border transition-all"
      />
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground tracking-wider uppercase block mb-1.5">
        {label}
      </span>
      <select className="w-full px-3 py-2.5 bg-input border border-border rounded-md text-sm focus:border-primary outline-none">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
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
