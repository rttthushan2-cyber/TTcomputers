import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SITE_IMAGES } from "@/lib/site-images";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${SITE.name} | Get in Touch` },
      {
        name: "description",
        content:
          "Visit our Colombo showroom or reach our team for builds, repairs, trade-ins and tech support.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeroBanner
        image={SITE_IMAGES.contactStore}
        size="lg"
        objectPosition="object-[center_42%]"
      >
        <p className="text-[10px] font-bold tracking-[0.28em] text-[var(--primary-cyan)] drop-shadow-md sm:text-xs">
          GET IN TOUCH
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold text-[var(--text-white)] drop-shadow-lg md:text-6xl">
          Contact
        </h1>
        <p className="mt-3 max-w-xl text-sm text-[#c8d0e0] drop-shadow-md">
          Visit the showroom, call the bench, or WhatsApp photos — we reply with real stock and
          straight timelines.
        </p>
      </PageHeroBanner>

      <div className="container mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { Icon: MapPin, t: "Showroom", d: "45 Galle Road, Colombo 03, Sri Lanka" },
              { Icon: Phone, t: "Call us", d: `${SITE.phoneDisplay} (WhatsApp same number)` },
              { Icon: Mail, t: "Email", d: SITE.email },
              { Icon: Clock, t: "Hours", d: "Mon–Sat 9:00–20:00 · Sun 11:00–18:00" },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="glass cyber-corners rounded-lg p-5 flex gap-4 glass-hover">
                <div className="w-10 h-10 grid place-items-center rounded-md bg-primary/15 border border-primary/40 text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold tracking-wider uppercase text-sm">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass cyber-corners rounded-xl p-6 md:p-8 space-y-4"
          >
            <h2 className="font-display text-xl font-bold mb-2">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Name" required />
              <Input label="Email" type="email" required />
              <Input label="Phone" />
              <Input label="Subject" />
            </div>
            <label className="block">
              <span className="text-xs text-muted-foreground tracking-wider uppercase block mb-1.5">
                Message *
              </span>
              <textarea
                required
                rows={6}
                className="w-full px-3 py-2.5 bg-input border border-border rounded-md text-sm focus:border-primary outline-none focus:neon-border transition-all resize-none"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground tracking-wider uppercase text-sm rounded-md neon-border hover:shadow-glow-lg transition-all"
            >
              <Send className="w-4 h-4" /> {sent ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function Input({
  label,
  type = "text",
  required,
}: {
  label: string;
  type?: string;
  required?: boolean;
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
        className="w-full px-3 py-2.5 bg-input border border-border rounded-md text-sm focus:border-primary outline-none focus:neon-border transition-all"
      />
    </label>
  );
}
