import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function AnnouncementBar() {
  return (
    <div className="text-[10px] sm:text-xs bg-[var(--bg-section)] border-b border-[var(--border-glow)] text-[var(--text-muted)]">
      <div className="container mx-auto px-3 min-[320px]:px-4 lg:px-8 min-h-[2.25rem] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 tracking-wide font-semibold text-[var(--text-white)] truncate">
          <span className="hidden sm:inline text-[var(--primary-cyan)]">●</span>
          <span className="uppercase truncate">
            Premium used PCs · parts · custom builds · pre-orders
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-1.5 hover:text-[var(--primary-cyan)] transition-colors"
          >
            <Phone className="w-3 h-3" /> {SITE.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsappE164}`}
            className="flex items-center gap-1.5 hover:text-[var(--primary-cyan)] transition-colors"
          >
            <MessageCircle className="w-3 h-3" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
