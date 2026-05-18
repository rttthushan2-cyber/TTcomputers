export type Socket = "LGA1700" | "AM4" | "AM5";
export type Ddr = "DDR4" | "DDR5";
export type GpuTier = "Entry" | "Mid-range" | "High-end" | "Ultra";

export type BuildPurpose =
  | "Gaming"
  | "Streaming"
  | "Office"
  | "Editing"
  | "Student Budget"
  | "High-End Workstation";

export interface CpuPart {
  id: string;
  brand: "Intel" | "AMD";
  tierLabel: string;
  name: string;
  socket: Socket;
  tdp: number;
  /** Relative gaming CPU strength 20–100 */
  score: number;
}

export interface MotherboardPart {
  id: string;
  name: string;
  socket: Socket;
  ddr: Ddr;
  price: number;
}

export interface CoolerPart {
  id: string;
  name: string;
  sockets: Socket[];
  maxTdp: number;
  price: number;
  /** AIO models handle more heat burst */
  aio: boolean;
}

export interface RamPart {
  id: string;
  name: string;
  ddr: Ddr;
  sizeGb: number;
  price: number;
}

export interface GpuPart {
  id: string;
  name: string;
  tier: GpuTier;
  tdp: number;
  /** Relative gaming GPU strength 25–100 */
  score: number;
  price: number;
}

export interface StoragePart {
  id: string;
  name: string;
  price: number;
}

export interface PsuPart {
  id: string;
  name: string;
  watts: number;
  price: number;
}

export interface CasePart {
  id: string;
  name: string;
  price: number;
}

export type BuilderSelection = {
  purpose?: BuildPurpose;
  cpuBrand?: "Intel" | "AMD";
  cpu?: CpuPart;
  motherboard?: MotherboardPart;
  cooler?: CoolerPart;
  ram?: RamPart;
  gpu?: GpuPart;
  storage?: StoragePart;
  psu?: PsuPart;
  pcCase?: CasePart;
};
