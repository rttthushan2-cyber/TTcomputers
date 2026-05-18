import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  Cpu,
  Layers,
  MessageCircle,
  Save,
  Send,
  Zap,
} from "lucide-react";
import type { GpuTier } from "@/lib/pc-builder/types";
import { BUILD_PURPOSES, cases, gpus } from "@/lib/pc-builder/parts";
import {
  allStorages,
  bottleneckWarnings,
  compatibilityOk,
  coolersForCpu,
  cpusByBrand,
  estimateGameFps,
  gamingLevelLabel,
  motherboardsForCpu,
  psuOptionsFor,
  ramForBoard,
  totalPrice,
} from "@/lib/pc-builder/engine";
import type { BuilderSelection } from "@/lib/pc-builder/types";
import { formatLKR } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";
import pcTower from "@/assets/pc-tower.jpg";

const STEPS = [
  "Purpose",
  "CPU brand",
  "CPU model",
  "Compatible parts",
  "Graphics",
  "Power & chassis",
  "Performance & summary",
] as const;

type StepIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

function selectionSummary(sel: BuilderSelection): string {
  const lines: string[] = [];
  if (sel.purpose) lines.push(`Purpose: ${sel.purpose}`);
  if (sel.cpu) lines.push(`CPU: ${sel.cpu.name}`);
  if (sel.motherboard) lines.push(`Motherboard: ${sel.motherboard.name}`);
  if (sel.cooler) lines.push(`Cooler: ${sel.cooler.name}`);
  if (sel.ram) lines.push(`RAM: ${sel.ram.name}`);
  if (sel.gpu) lines.push(`GPU: ${sel.gpu.name}`);
  if (sel.storage) lines.push(`Storage: ${sel.storage.name}`);
  if (sel.psu) lines.push(`PSU: ${sel.psu.name}`);
  if (sel.pcCase) lines.push(`Case: ${sel.pcCase.name}`);
  lines.push(`Estimate: ${formatLKR(totalPrice(sel))}`);
  return lines.join("\n");
}

export function PcBuilderSimulator() {
  const [step, setStep] = useState<StepIndex>(0);
  const [sel, setSel] = useState<BuilderSelection>({});
  const [gpuTier, setGpuTier] = useState<GpuTier | "All">("All");

  const mbs = sel.cpu ? motherboardsForCpu(sel.cpu) : [];
  const rams = sel.motherboard ? ramForBoard(sel.motherboard) : [];
  const cls = sel.cpu ? coolersForCpu(sel.cpu) : [];
  const ssds = allStorages();
  const gpuList = useMemo(() => {
    if (gpuTier === "All") return gpus;
    return gpus.filter((g) => g.tier === gpuTier);
  }, [gpuTier]);
  const psuList = sel.cpu && sel.gpu ? psuOptionsFor(sel.cpu, sel.gpu) : [];

  const price = totalPrice(sel);
  const ok = compatibilityOk(sel);
  const warns = bottleneckWarnings(sel);
  const fps = estimateGameFps(sel);

  const canGoStep3 = !!sel.cpuBrand;
  const canGoStep4 = !!sel.cpu;
  const canGoStep5 = !!(sel.motherboard && sel.cooler && sel.ram && sel.storage);
  const canGoStep6 = !!sel.gpu;
  const canGoStep7 = !!(sel.psu && sel.pcCase);

  function persistSave() {
    try {
      localStorage.setItem(
        "ttcomputers-pc-build",
        JSON.stringify({ savedAt: Date.now(), selection: sel, gpuTier }),
      );
    } catch {
      /* ignore */
    }
  }

  const wa = waLink(`Hi ${SITE.name}, here is my custom PC build:\n\n${selectionSummary(sel)}`);

  return (
    <div className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-8 pb-8 pt-4 sm:pb-12 sm:pt-6">
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 justify-center sm:justify-start">
        {STEPS.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setStep(Math.min(i, 6) as StepIndex)}
            className={`px-2.5 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border transition-all ${
              step === i
                ? "border-[var(--primary-cyan)] bg-[rgba(0,217,255,0.1)] text-[var(--primary-cyan)]"
                : "border-[var(--border-glow)] text-[var(--text-muted)] hover:border-[var(--primary-cyan)]/50"
            }`}
          >
            {i + 1}. {label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-6 lg:gap-8 items-start">
        <div className="glass cyber-corners rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 space-y-6">
          {step === 0 && (
            <section className="builder-step-enter space-y-4">
              <h2 className="font-display text-xl font-bold flex items-center gap-2 text-[var(--text-white)]">
                <Layers className="w-5 h-5 text-[var(--primary-cyan)]" />
                Select build purpose
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {BUILD_PURPOSES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setSel((s) => ({ ...s, purpose: p }))}
                    className={`text-left rounded-xl border p-4 transition-all ${
                      sel.purpose === p
                        ? "border-[var(--primary-cyan)] bg-[var(--gradient-card)] neon-border"
                        : "border-[var(--border-glow)] hover:border-[var(--primary-cyan)]/45 bg-[var(--bg-card)]/60"
                    }`}
                  >
                    <div className="font-display font-bold text-sm text-[var(--text-white)]">
                      {p}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                      {p === "Gaming" && "High FPS focus, balanced GPU priority."}
                      {p === "Streaming" && "CPU headroom for encode + stable frame times."}
                      {p === "Office" && "Quiet, efficient, reliable productivity."}
                      {p === "Editing" && "Multi-core and RAM-friendly configuration."}
                      {p === "Student Budget" && "Best value per rupee — upgrade ready."}
                      {p === "High-End Workstation" && "Maximum throughput for pro workloads."}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 1 && (
            <section className="builder-step-enter space-y-4">
              <h2 className="font-display text-xl font-bold text-[var(--text-white)]">CPU brand</h2>
              <div className="grid grid-cols-2 gap-3">
                {(["Intel", "AMD"] as const).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() =>
                      setSel((s) => ({
                        ...s,
                        cpuBrand: b,
                        cpu: undefined,
                        motherboard: undefined,
                        ram: undefined,
                      }))
                    }
                    className={`rounded-xl border p-6 font-display font-black text-lg tracking-wide transition-all ${
                      sel.cpuBrand === b
                        ? "border-[var(--primary-cyan)] bg-[var(--gradient-card)] neon-border text-[var(--text-white)]"
                        : "border-[var(--border-glow)] bg-[var(--bg-card)]/60 text-[var(--text-muted)] hover:text-[var(--text-white)]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 2 && !sel.cpuBrand && (
            <section className="text-sm text-[var(--text-muted)] py-6">
              Select a CPU brand in the previous step to load compatible processors.
            </section>
          )}

          {step === 2 && sel.cpuBrand && (
            <section className="builder-step-enter space-y-4">
              <h2 className="font-display text-xl font-bold text-[var(--text-white)] flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[var(--primary-cyan)]" />
                Select {sel.cpuBrand} CPU
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {cpusByBrand(sel.cpuBrand).map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() =>
                      setSel((s) => ({
                        ...s,
                        cpu: c,
                        motherboard: undefined,
                        cooler: undefined,
                        ram: undefined,
                      }))
                    }
                    className={`text-left rounded-xl border p-4 transition-all ${
                      sel.cpu?.id === c.id
                        ? "border-[var(--primary-cyan)] bg-[var(--gradient-card)] neon-border"
                        : "border-[var(--border-glow)] hover:border-[var(--primary-cyan)]/45 bg-[var(--bg-card)]/60"
                    }`}
                  >
                    <div className="text-[10px] tracking-widest text-[var(--text-muted)] uppercase">
                      {c.tierLabel}
                    </div>
                    <div className="font-semibold text-sm text-[var(--text-white)] mt-1">
                      {c.name}
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)] mt-2">
                      Socket {c.socket} · TDP {c.tdp}W · Score {c.score}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 3 && !sel.cpu && (
            <section className="text-sm text-[var(--text-muted)] py-6">
              Pick a CPU first — motherboard, RAM, and cooler lists are generated from that socket.
            </section>
          )}

          {step === 3 && sel.cpu && (
            <section className="builder-step-enter space-y-8">
              <h2 className="font-display text-xl font-bold text-[var(--text-white)]">
                Auto-filtered compatible parts
              </h2>

              <div>
                <h3 className="text-xs tracking-[0.25em] text-[var(--primary-cyan)] font-bold mb-3">
                  MOTHERBOARD
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {mbs.map((m) => (
                    <PickRow
                      key={m.id}
                      active={sel.motherboard?.id === m.id}
                      title={m.name}
                      sub={`${m.ddr} · ${m.socket}`}
                      price={m.price}
                      onClick={() => setSel((s) => ({ ...s, motherboard: m, ram: undefined }))}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.25em] text-[var(--primary-cyan)] font-bold mb-3">
                  CPU COOLER
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {cls.map((c) => (
                    <PickRow
                      key={c.id}
                      active={sel.cooler?.id === c.id}
                      title={c.name}
                      sub={`Up to ${c.maxTdp}W TDP · ${c.aio ? "AIO" : "Air"}`}
                      price={c.price}
                      onClick={() => setSel((s) => ({ ...s, cooler: c }))}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.25em] text-[var(--primary-cyan)] font-bold mb-3">
                  RAM
                </h3>
                {!sel.motherboard ? (
                  <p className="text-sm text-[var(--text-muted)]">
                    Select a motherboard to show matching DDR4/DDR5 kits.
                  </p>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {rams.map((r) => (
                      <PickRow
                        key={r.id}
                        active={sel.ram?.id === r.id}
                        title={r.name}
                        sub={`${r.sizeGb}GB ${r.ddr}`}
                        price={r.price}
                        onClick={() => setSel((s) => ({ ...s, ram: r }))}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xs tracking-[0.25em] text-[var(--primary-cyan)] font-bold mb-3">
                  STORAGE
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {ssds.map((d) => (
                    <PickRow
                      key={d.id}
                      active={sel.storage?.id === d.id}
                      title={d.name}
                      sub="NVMe"
                      price={d.price}
                      onClick={() => setSel((s) => ({ ...s, storage: d }))}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {step === 4 && (
            <section className="builder-step-enter space-y-4">
              <h2 className="font-display text-xl font-bold flex items-center gap-2 text-[var(--text-white)]">
                <Zap className="w-5 h-5 text-[var(--primary-cyan)]" />
                GPU tier & card
              </h2>
              <div className="flex flex-wrap gap-2">
                {(["All", "Entry", "Mid-range", "High-end", "Ultra"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setGpuTier(t);
                      setSel((s) => ({ ...s, gpu: undefined }));
                    }}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                      gpuTier === t
                        ? "border-[var(--primary-cyan)] bg-[rgba(0,217,255,0.12)] text-[var(--primary-cyan)]"
                        : "border-[var(--border-glow)] text-[var(--text-muted)]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {gpuList.map((g) => (
                  <PickRow
                    key={g.id}
                    active={sel.gpu?.id === g.id}
                    title={g.name}
                    sub={`${g.tier} · ${g.tdp}W TDP · Gaming score ${g.score}`}
                    price={g.price}
                    onClick={() => setSel((s) => ({ ...s, gpu: g, psu: undefined }))}
                  />
                ))}
              </div>
            </section>
          )}

          {step === 5 && (!sel.cpu || !sel.gpu) && (
            <section className="animate-fade-up text-sm text-[var(--text-muted)]">
              Select a CPU and GPU in earlier steps to unlock PSU recommendations.
            </section>
          )}

          {step === 5 && sel.cpu && sel.gpu && (
            <section className="builder-step-enter space-y-6">
              <h2 className="font-display text-xl font-bold text-[var(--text-white)]">
                Power & chassis
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                Recommended minimum PSU calculated from CPU + GPU + platform overhead (mock
                formula).
              </p>
              <div>
                <h3 className="text-xs tracking-[0.25em] text-[var(--primary-cyan)] font-bold mb-3">
                  POWER SUPPLY
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {psuList.map((p) => (
                    <PickRow
                      key={p.id}
                      active={sel.psu?.id === p.id}
                      title={p.name}
                      sub={`${p.watts}W`}
                      price={p.price}
                      onClick={() => setSel((s) => ({ ...s, psu: p }))}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.25em] text-[var(--primary-cyan)] font-bold mb-3">
                  CASE
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {cases.map((c) => (
                    <PickRow
                      key={c.id}
                      active={sel.pcCase?.id === c.id}
                      title={c.name}
                      sub="ATX / mATX compatible (mock)"
                      price={c.price}
                      onClick={() => setSel((s) => ({ ...s, pcCase: c }))}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {step === 6 && (
            <section className="builder-step-enter space-y-8">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="rounded-xl overflow-hidden border border-[var(--border-glow)] bg-[var(--bg-section)]">
                  <img
                    src={pcTower}
                    alt="PC build preview"
                    className="w-full h-48 object-contain p-6"
                  />
                  <div className="p-4 border-t border-[var(--border-glow)] text-xs text-[var(--text-muted)]">
                    Visual mockup — drop a hero render of your chassis line here.
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-[var(--text-white)]">
                    Build summary
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
                    {sel.purpose && (
                      <li className="text-[var(--text-white)]">Purpose: {sel.purpose}</li>
                    )}
                    {sel.cpu && <li>CPU: {sel.cpu.name}</li>}
                    {sel.motherboard && <li>Board: {sel.motherboard.name}</li>}
                    {sel.cooler && <li>Cooler: {sel.cooler.name}</li>}
                    {sel.ram && <li>RAM: {sel.ram.name}</li>}
                    {sel.storage && <li>Storage: {sel.storage.name}</li>}
                    {sel.gpu && <li>GPU: {sel.gpu.name}</li>}
                    {sel.psu && <li>PSU: {sel.psu.name}</li>}
                    {sel.pcCase && <li>Case: {sel.pcCase.name}</li>}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 items-center text-sm">
                    <span className="text-[var(--text-muted)]">Gaming tier:</span>
                    <span className="font-bold text-[var(--primary-cyan)]">
                      {gamingLevelLabel(sel)}
                    </span>
                    <span className="text-[var(--text-muted)]">· Compatibility:</span>
                    <span
                      className={
                        ok ? "text-[var(--success)] font-bold" : "text-[var(--warning)] font-bold"
                      }
                    >
                      {ok ? "PASS (mock)" : "CHECK REQUIRED"}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] mt-2">
                    Warranty: assembly & testing by TTComputers technicians — parts carry manufacturer
                    warranty where applicable.
                  </p>
                </div>
              </div>

              {sel.cpu && sel.gpu && (
                <>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--text-white)] mb-3">
                      Estimated gaming FPS (mock)
                    </h3>
                    <div className="grid gap-3">
                      {Object.entries(fps).map(([game, v]) => (
                        <div
                          key={game}
                          className="rounded-xl border border-[var(--border-glow)] p-4 bg-[var(--bg-card)]/50"
                        >
                          <div className="flex justify-between text-sm font-bold text-[var(--text-white)] mb-2">
                            <span>{game}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                            <span>1080p</span>
                            <span>1440p</span>
                            <span>4K</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 mt-1">
                            <FpsBar label={`${v.p1080} FPS`} pct={Math.min(100, v.p1080 / 3.2)} />
                            <FpsBar label={`${v.p1440} FPS`} pct={Math.min(100, v.p1440 / 2.6)} />
                            <FpsBar label={`${v.p4k} FPS`} pct={Math.min(100, v.p4k / 2)} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {warns.length > 0 && (
                    <div className="bottleneck-appear rounded-xl border border-[rgba(255,176,32,0.35)] bg-[rgba(255,176,32,0.06)] p-4">
                      <div className="flex items-center gap-2 text-[var(--warning)] font-bold text-sm mb-2">
                        <AlertTriangle className="w-4 h-4" />
                        Bottleneck & balance
                      </div>
                      <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                        {warns.map((w) => (
                          <li key={w}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <button
                  type="button"
                  onClick={persistSave}
                  className="btn-gradient inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs"
                >
                  <Save className="w-4 h-4" /> Save build (browser)
                </button>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[var(--border-glow)] text-xs font-bold tracking-wider uppercase text-[var(--text-white)] hover:bg-[rgba(0,217,255,0.08)]"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--success)]" />
                  WhatsApp this build
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[var(--primary-purple)]/40 text-xs font-bold tracking-wider uppercase text-[var(--primary-purple)] hover:bg-[rgba(124,77,255,0.08)]"
                >
                  <Send className="w-4 h-4" /> Request this build
                </Link>
              </div>
            </section>
          )}

          <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-4 border-t border-[var(--border-glow)]">
            <button
              type="button"
              disabled={step === 0}
              onClick={() => setStep((s) => (s > 0 ? ((s - 1) as StepIndex) : s))}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border-glow)] text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-white)] disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            <button
              type="button"
              disabled={
                (step === 0 && !sel.purpose) ||
                (step === 1 && !canGoStep3) ||
                (step === 2 && !canGoStep4) ||
                (step === 3 && !canGoStep5) ||
                (step === 4 && !canGoStep6) ||
                (step === 5 && !canGoStep7)
              }
              onClick={() => setStep((s) => (s < 6 ? ((s + 1) as StepIndex) : s))}
              className="btn-gradient inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 glass cyber-corners rounded-xl p-4 sm:p-5 space-y-4">
          <div>
            <div className="text-[10px] tracking-[0.25em] text-[var(--text-muted)] uppercase font-bold">
              Live total
            </div>
            <div key={price} className="price-pop-anim font-display text-3xl font-black text-[var(--primary-cyan)] text-glow mt-1">
              {formatLKR(price)}
            </div>
          </div>
          <div className="space-y-2 text-xs border-t border-[var(--border-glow)] pt-3">
            {[
              ["Purpose", sel.purpose],
              ["CPU", sel.cpu?.name],
              ["Motherboard", sel.motherboard?.name],
              ["Cooler", sel.cooler?.name],
              ["RAM", sel.ram?.name],
              ["Storage", sel.storage?.name],
              ["GPU", sel.gpu?.name],
              ["PSU", sel.psu?.name],
              ["Case", sel.pcCase?.name],
            ].map(([k, v]) => (
              <div key={k as string} className="flex justify-between gap-2">
                <span className="text-[var(--text-muted)] tracking-wide uppercase">{k}</span>
                <span
                  className={`text-right ${v ? "text-[var(--text-white)] font-medium" : "text-[var(--text-muted)]/70"}`}
                >
                  {v ? "✓" : "—"}
                </span>
              </div>
            ))}
          </div>
          {step === 6 && sel.cpu && sel.gpu && (
            <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
              FPS values are simulated for the configurator experience only — final in-game
              performance varies by settings, drivers, and thermals.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}

function PickRow({
  active,
  title,
  sub,
  price,
  onClick,
}: {
  active: boolean;
  title: string;
  sub: string;
  price: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-xl border p-3 sm:p-4 flex gap-3 items-start transition-all ${
        active
          ? "border-[var(--primary-cyan)] bg-[var(--gradient-card)] neon-border"
          : "border-[var(--border-glow)] bg-[var(--bg-card)]/50 hover:border-[var(--primary-cyan)]/35"
      }`}
    >
      <div className="mt-0.5 w-5 h-5 rounded-full border border-[var(--border-glow)] grid place-items-center shrink-0">
        {active && <Check className="w-3 h-3 text-[var(--primary-cyan)]" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-[var(--text-white)] leading-snug">{title}</div>
        <div className="text-[11px] text-[var(--text-muted)] mt-1">{sub}</div>
      </div>
      <div className="font-display text-sm font-bold text-[var(--primary-cyan)] shrink-0">
        {formatLKR(price)}
      </div>
    </button>
  );
}

function FpsBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] text-[var(--text-muted)] mb-1">
        <span>{label}</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--bg-section)] overflow-hidden border border-[var(--border-glow)]">
        <div
          className="h-full rounded-full bg-[var(--gradient-main)] animate-bar-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
