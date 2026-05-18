import { useEffect, useState } from "react";
import brandLogo from "@/assets/ttcomputers-logo.png";

type Phase = "idle" | "visible" | "fading";

export function PageIntro() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("ttc-intro")) return;
    } catch {
      return; // sessionStorage unavailable — skip intro
    }

    setPhase("visible");
    const t1 = setTimeout(() => setPhase("fading"), 1200);
    const t2 = setTimeout(() => {
      setPhase("idle");
      try {
        sessionStorage.setItem("ttc-intro", "1");
      } catch {
        /* noop */
      }
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "idle") return null;

  return (
    <div
      className={`page-intro${phase === "fading" ? " page-intro-exit" : ""}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="page-intro-particles" aria-hidden>
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className={`intro-particle intro-particle-${i + 1}`} />
        ))}
      </div>

      <div className="page-intro-content">
        <div className="intro-logo-wrap">
          <div className="intro-logo-glow" aria-hidden />
          <img src={brandLogo} alt="TTComputers" className="intro-logo-img" />
        </div>
        <p className="intro-tagline">Premium Computer Shop · Colombo</p>
        <span className="intro-scanline" aria-hidden />
      </div>
    </div>
  );
}
