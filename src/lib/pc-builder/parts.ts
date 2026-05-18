import type {
  BuildPurpose,
  CasePart,
  CoolerPart,
  CpuPart,
  GpuPart,
  MotherboardPart,
  PsuPart,
  RamPart,
  StoragePart,
} from "./types";

export const BUILD_PURPOSES: BuildPurpose[] = [
  "Gaming",
  "Streaming",
  "Office",
  "Editing",
  "Student Budget",
  "High-End Workstation",
];

export const cpus: CpuPart[] = [
  {
    id: "i3-13100",
    brand: "Intel",
    tierLabel: "i3",
    name: "Intel Core i3-13100",
    socket: "LGA1700",
    tdp: 65,
    score: 40,
  },
  {
    id: "i5-14600k",
    brand: "Intel",
    tierLabel: "i5",
    name: "Intel Core i5-14600K",
    socket: "LGA1700",
    tdp: 125,
    score: 72,
  },
  {
    id: "i7-14700k",
    brand: "Intel",
    tierLabel: "i7",
    name: "Intel Core i7-14700K",
    socket: "LGA1700",
    tdp: 125,
    score: 82,
  },
  {
    id: "i9-14900k",
    brand: "Intel",
    tierLabel: "i9",
    name: "Intel Core i9-14900K",
    socket: "LGA1700",
    tdp: 150,
    score: 95,
  },
  {
    id: "r3-7300x",
    brand: "AMD",
    tierLabel: "Ryzen 3",
    name: "AMD Ryzen 3 7300X",
    socket: "AM5",
    tdp: 65,
    score: 44,
  },
  {
    id: "r5-7600x",
    brand: "AMD",
    tierLabel: "Ryzen 5",
    name: "AMD Ryzen 5 7600X",
    socket: "AM5",
    tdp: 105,
    score: 68,
  },
  {
    id: "r7-7800x3d",
    brand: "AMD",
    tierLabel: "Ryzen 7",
    name: "AMD Ryzen 7 7800X3D",
    socket: "AM5",
    tdp: 120,
    score: 92,
  },
  {
    id: "r9-7950x",
    brand: "AMD",
    tierLabel: "Ryzen 9",
    name: "AMD Ryzen 9 7950X",
    socket: "AM5",
    tdp: 170,
    score: 98,
  },
  {
    id: "r5-5600",
    brand: "AMD",
    tierLabel: "Ryzen 5",
    name: "AMD Ryzen 5 5600",
    socket: "AM4",
    tdp: 65,
    score: 55,
  },
  {
    id: "r7-5700x",
    brand: "AMD",
    tierLabel: "Ryzen 7",
    name: "AMD Ryzen 7 5700X",
    socket: "AM4",
    tdp: 65,
    score: 62,
  },
];

export const motherboards: MotherboardPart[] = [
  {
    id: "mb-b760-ddr5",
    name: "ASUS B760M DDR5 (LGA1700)",
    socket: "LGA1700",
    ddr: "DDR5",
    price: 48500,
  },
  {
    id: "mb-z790-ddr5",
    name: "Gigabyte Z790 AORUS DDR5",
    socket: "LGA1700",
    ddr: "DDR5",
    price: 89500,
  },
  { id: "mb-b650-am5", name: "MSI B650M DDR5 (AM5)", socket: "AM5", ddr: "DDR5", price: 42500 },
  { id: "mb-x670e-am5", name: "ASUS X670E DDR5 (AM5)", socket: "AM5", ddr: "DDR5", price: 112000 },
  { id: "mb-b550-am4", name: "ASUS B550 DDR4 (AM4)", socket: "AM4", ddr: "DDR4", price: 31500 },
  { id: "mb-b450-am4", name: "MSI B450 DDR4 (AM4)", socket: "AM4", ddr: "DDR4", price: 22500 },
];

export const coolers: CoolerPart[] = [
  {
    id: "cl-tower",
    name: "Dual-Tower Air Cooler",
    sockets: ["LGA1700", "AM4", "AM5"],
    maxTdp: 165,
    price: 12500,
    aio: false,
  },
  {
    id: "cl-compact",
    name: "Compact Tower Cooler",
    sockets: ["LGA1700", "AM4", "AM5"],
    maxTdp: 105,
    price: 7800,
    aio: false,
  },
  {
    id: "cl-aio240",
    name: "240mm AIO Liquid",
    sockets: ["LGA1700", "AM4", "AM5"],
    maxTdp: 220,
    price: 24500,
    aio: true,
  },
  {
    id: "cl-aio360",
    name: "360mm AIO Liquid",
    sockets: ["LGA1700", "AM4", "AM5"],
    maxTdp: 280,
    price: 38500,
    aio: true,
  },
];

export const ramModules: RamPart[] = [
  { id: "ram-d4-16", name: "16GB DDR4 3200 (2×8GB)", ddr: "DDR4", sizeGb: 16, price: 9200 },
  { id: "ram-d4-32", name: "32GB DDR4 3600 (2×16GB)", ddr: "DDR4", sizeGb: 32, price: 18500 },
  { id: "ram-d5-16", name: "16GB DDR5 5600 (2×8GB)", ddr: "DDR5", sizeGb: 16, price: 14500 },
  { id: "ram-d5-32", name: "32GB DDR5 6000 (2×16GB)", ddr: "DDR5", sizeGb: 32, price: 26500 },
  { id: "ram-d5-64", name: "64GB DDR5 6000 (2×32GB)", ddr: "DDR5", sizeGb: 64, price: 52000 },
];

export const gpus: GpuPart[] = [
  { id: "gpu-4060", name: "NVIDIA RTX 4060", tier: "Entry", tdp: 115, score: 42, price: 88000 },
  {
    id: "gpu-4060ti",
    name: "NVIDIA RTX 4060 Ti 8GB",
    tier: "Mid-range",
    tdp: 160,
    score: 52,
    price: 118000,
  },
  {
    id: "gpu-4070",
    name: "NVIDIA RTX 4070",
    tier: "Mid-range",
    tdp: 200,
    score: 62,
    price: 168000,
  },
  {
    id: "gpu-4070tis",
    name: "NVIDIA RTX 4070 Ti Super",
    tier: "High-end",
    tdp: 285,
    score: 74,
    price: 225000,
  },
  { id: "gpu-4080", name: "NVIDIA RTX 4080", tier: "High-end", tdp: 320, score: 84, price: 298000 },
  { id: "gpu-4090", name: "NVIDIA RTX 4090", tier: "Ultra", tdp: 450, score: 98, price: 485000 },
  { id: "gpu-7600", name: "AMD RX 7600", tier: "Entry", tdp: 165, score: 40, price: 72000 },
  {
    id: "gpu-7800xt",
    name: "AMD RX 7800 XT",
    tier: "Mid-range",
    tdp: 263,
    score: 60,
    price: 155000,
  },
  { id: "gpu-7900xtx", name: "AMD RX 7900 XTX", tier: "Ultra", tdp: 355, score: 90, price: 365000 },
];

export const storages: StoragePart[] = [
  { id: "ssd-512", name: "512GB NVMe Gen4", price: 9800 },
  { id: "ssd-1tb", name: "1TB NVMe Gen4", price: 15500 },
  { id: "ssd-2tb", name: "2TB NVMe Gen4", price: 28500 },
];

export const psus: PsuPart[] = [
  { id: "psu-550", name: "550W 80+ Bronze", watts: 550, price: 8500 },
  { id: "psu-650", name: "650W 80+ Gold", watts: 650, price: 14500 },
  { id: "psu-750", name: "750W 80+ Gold Modular", watts: 750, price: 19500 },
  { id: "psu-850", name: "850W 80+ Gold Modular", watts: 850, price: 24500 },
  { id: "psu-1000", name: "1000W 80+ Platinum", watts: 1000, price: 38500 },
  { id: "psu-1200", name: "1200W 80+ Gold", watts: 1200, price: 42000 },
];

export const cases: CasePart[] = [
  { id: "case-mesh", name: "Mesh Mid Tower — High Airflow", price: 14500 },
  { id: "case-rgb", name: "Tempered Glass RGB Mid Tower", price: 18500 },
  { id: "case-full", name: "Full Tower Workstation Case", price: 26500 },
];
