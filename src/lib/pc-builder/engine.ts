import type { BuildPurpose, BuilderSelection, CpuPart, GpuPart, MotherboardPart } from "./types";
import { cpus, coolers, motherboards, psus, ramModules, storages } from "./parts";

export function cpusByBrand(brand: "Intel" | "AMD"): CpuPart[] {
  return cpus.filter((c) => c.brand === brand);
}

export function motherboardsForCpu(cpu: CpuPart): MotherboardPart[] {
  return motherboards.filter((m) => m.socket === cpu.socket);
}

export function ramForBoard(mb: MotherboardPart) {
  return ramModules.filter((r) => r.ddr === mb.ddr);
}

export function coolersForCpu(cpu: CpuPart) {
  return coolers.filter((c) => c.sockets.includes(cpu.socket));
}

export function requiredPsuWatts(cpu: CpuPart, gpu: GpuPart): number {
  return Math.ceil((cpu.tdp + gpu.tdp + 140) * 1.2);
}

export function psuOptionsFor(cpu: CpuPart, gpu: GpuPart) {
  const need = requiredPsuWatts(cpu, gpu);
  return psus.filter((p) => p.watts >= need).sort((a, b) => a.watts - b.watts);
}

export function totalPrice(sel: BuilderSelection): number {
  const parts = [
    sel.cpu,
    sel.motherboard,
    sel.cooler,
    sel.ram,
    sel.gpu,
    sel.storage,
    sel.psu,
    sel.pcCase,
  ];
  return parts.reduce((s, p) => s + (p?.price ?? 0), 0);
}

export function compatibilityOk(sel: BuilderSelection): boolean {
  if (!sel.cpu || !sel.motherboard) return false;
  if (sel.motherboard.socket !== sel.cpu.socket) return false;
  if (sel.ram && sel.ram.ddr !== sel.motherboard.ddr) return false;
  if (sel.cooler && !sel.cooler.sockets.includes(sel.cpu.socket)) return false;
  if (sel.gpu && sel.psu) {
    const need = requiredPsuWatts(sel.cpu, sel.gpu);
    if (sel.psu.watts < need) return false;
  }
  return true;
}

export function bottleneckWarnings(sel: BuilderSelection): string[] {
  const w: string[] = [];
  if (!sel.cpu || !sel.gpu) return w;
  const ratio = sel.gpu.score / Math.max(28, sel.cpu.score);
  if (ratio > 1.75) {
    w.push("⚠ CPU may bottleneck this GPU in CPU-heavy titles or high FPS targets.");
  }
  if (ratio < 0.65) {
    w.push("⚠ GPU may be underutilised — consider a stronger graphics card for this CPU.");
  }
  if (sel.psu && sel.gpu) {
    const need = requiredPsuWatts(sel.cpu, sel.gpu);
    if (sel.psu.watts < need) {
      w.push("⚠ Power supply is below recommended wattage for this CPU + GPU.");
    } else if (sel.psu.watts < need + 40) {
      w.push("⚠ Power supply is close to limit — upgrading headroom is recommended.");
    }
  }
  if (sel.cooler && sel.cpu) {
    if (sel.cpu.tdp > sel.cooler.maxTdp * 0.92 && !sel.cooler.aio) {
      w.push(
        "⚠ CPU cooler is not ideal for sustained loads on this CPU — consider AIO or larger tower.",
      );
    }
  }
  return w;
}

const GAME_BASE: Record<string, { p1080: number; p1440: number; p4k: number }> = {
  Valorant: { p1080: 320, p1440: 260, p4k: 160 },
  "GTA V": { p1080: 130, p1440: 95, p4k: 62 },
  Cyberpunk: { p1080: 85, p1440: 58, p4k: 34 },
  Warzone: { p1080: 155, p1440: 118, p4k: 72 },
  "Apex Legends": { p1080: 190, p1440: 150, p4k: 92 },
};

function purposeMultiplier(p?: BuildPurpose): number {
  switch (p) {
    case "Office":
      return 0.85;
    case "Student Budget":
      return 0.9;
    case "Editing":
      return 0.95;
    case "Streaming":
      return 0.96;
    case "High-End Workstation":
      return 1.02;
    default:
      return 1;
  }
}

/** Mock estimator — scales with GPU/CPU balance; not real benchmarks. */
export function estimateGameFps(
  sel: BuilderSelection,
): Record<string, { p1080: number; p1440: number; p4k: number }> {
  if (!sel.cpu || !sel.gpu) return {};
  const g = sel.gpu.score / 68;
  const c = sel.cpu.score / 68;
  const balance = Math.min(1.15, Math.max(0.72, (c * 0.55 + g * 0.45) / 1));
  const pm = purposeMultiplier(sel.purpose);
  const out: Record<string, { p1080: number; p1440: number; p4k: number }> = {};
  for (const [name, b] of Object.entries(GAME_BASE)) {
    out[name] = {
      p1080: Math.max(24, Math.round(b.p1080 * g * balance * pm)),
      p1440: Math.max(20, Math.round(b.p1440 * g * balance * pm)),
      p4k: Math.max(18, Math.round(b.p4k * g * balance * pm)),
    };
  }
  return out;
}

export function gamingLevelLabel(sel: BuilderSelection): string {
  if (!sel.gpu) return "—";
  return sel.gpu.tier;
}

export function allStorages() {
  return storages;
}
