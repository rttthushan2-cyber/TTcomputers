import laptop from "@/assets/laptop.jpg";
import pcTower from "@/assets/pc-tower.jpg";
import pcWhite from "@/assets/pc-white.jpg";
import gpu from "@/assets/gpu.jpg";
import cpu from "@/assets/cpu.jpg";
import ram from "@/assets/ram.jpg";
import ssd from "@/assets/ssd.jpg";
import motherboard from "@/assets/motherboard.jpg";
import monitor from "@/assets/monitor.jpg";
import keyboard from "@/assets/keyboard.jpg";
import psu from "@/assets/psu.jpg";
import cooler from "@/assets/cooler.jpg";
import usedLaptop from "@/assets/used-laptop.jpg";

export type UsedPcCategoryId = "laptops" | "desktops" | "gaming" | "office" | "student";

export interface UsedPcShowcase {
  id: UsedPcCategoryId;
  title: string;
  blurb: string;
  image: string;
  condition: string;
  specs: string[];
  price: number;
  warranty: string;
  tested: boolean;
}

export const usedPcShowcase: UsedPcShowcase[] = [
  {
    id: "laptops",
    title: "Used Laptops",
    blurb: "Business ultrabooks to gaming machines — battery checked, thermals serviced.",
    image: laptop,
    condition: "Good – A grade",
    specs: ['14–17"', "8–32GB RAM", "NVMe SSD"],
    price: 78500,
    warranty: "1–3 months shop",
    tested: true,
  },
  {
    id: "desktops",
    title: "Used Desktop PCs",
    blurb: "Office towers and home PCs — fresh Windows install available on request.",
    image: pcWhite,
    condition: "Like New",
    specs: ["Intel / AMD", "SSD standard", "Wi‑Fi optional"],
    price: 62500,
    warranty: "3 months",
    tested: true,
  },
  {
    id: "gaming",
    title: "Gaming PCs",
    blurb: "Balanced used gaming rigs — stress tested overnight before sale.",
    image: pcTower,
    condition: "Tested",
    specs: ["Dedicated GPU", "16GB+ RAM", "RGB optional"],
    price: 185000,
    warranty: "3 months",
    tested: true,
  },
  {
    id: "office",
    title: "Office PCs",
    blurb: "Quiet, efficient builds for teams — bulk deals for offices.",
    image: pcWhite,
    condition: "Good",
    specs: ["Low noise", "i5 / Ryzen 5 class", "Dual display"],
    price: 72000,
    warranty: "1 month",
    tested: true,
  },
  {
    id: "student",
    title: "Student Budget Laptops",
    blurb: "Affordable, durable models ideal for classwork and light projects.",
    image: usedLaptop,
    condition: "Used – B+ grade",
    specs: ["1080p", "256GB+", "6h+ battery target"],
    price: 48500,
    warranty: "1 month",
    tested: true,
  },
];

export type UsedPartCategory =
  | "CPUs"
  | "GPUs"
  | "RAM"
  | "SSD/HDD"
  | "Motherboards"
  | "Power supplies"
  | "Monitors"
  | "Keyboards / mouse / accessories";

export interface UsedPartCard {
  id: string;
  category: UsedPartCategory;
  name: string;
  image: string;
  condition: string;
  specs: string;
  price: number;
  tested: boolean;
}

export const usedPartCards: UsedPartCard[] = [
  {
    id: "pt1",
    category: "CPUs",
    name: "Intel Core i5-10400F",
    image: cpu,
    condition: "Good",
    specs: "6C/12T · LGA1200",
    price: 18500,
    tested: true,
  },
  {
    id: "pt2",
    category: "CPUs",
    name: "AMD Ryzen 5 3600",
    image: cpu,
    condition: "Like New",
    specs: "6C/12T · AM4",
    price: 22000,
    tested: true,
  },
  {
    id: "pt3",
    category: "GPUs",
    name: "NVIDIA GTX 1660 Super 6GB",
    image: gpu,
    condition: "Good",
    specs: "Dual fan · HDMI/DP",
    price: 38000,
    tested: true,
  },
  {
    id: "pt4",
    category: "GPUs",
    name: "AMD RX 6600 8GB",
    image: gpu,
    condition: "Like New",
    specs: "1080p high",
    price: 52000,
    tested: true,
  },
  {
    id: "pt5",
    category: "RAM",
    name: "16GB DDR4 3200MHz Kit",
    image: ram,
    condition: "Good",
    specs: "2×8GB",
    price: 9200,
    tested: true,
  },
  {
    id: "pt6",
    category: "RAM",
    name: "32GB DDR5 6000 Kit",
    image: ram,
    condition: "Like New",
    specs: "2×16GB EXPO",
    price: 28500,
    tested: true,
  },
  {
    id: "pt7",
    category: "SSD/HDD",
    name: "1TB NVMe Gen3",
    image: ssd,
    condition: "Good",
    specs: "Health 96%+",
    price: 12500,
    tested: true,
  },
  {
    id: "pt8",
    category: "SSD/HDD",
    name: "2TB HDD 7200RPM",
    image: ssd,
    condition: "Used",
    specs: "SMART passed",
    price: 8500,
    tested: true,
  },
  {
    id: "pt9",
    category: "Motherboards",
    name: "B550 ATX (AM4)",
    image: motherboard,
    condition: "Good",
    specs: "PCIe 4.0 · ARGB",
    price: 19500,
    tested: true,
  },
  {
    id: "pt10",
    category: "Motherboards",
    name: "B760 mATX (LGA1700)",
    image: motherboard,
    condition: "Like New",
    specs: "DDR5 · Wi‑Fi",
    price: 26500,
    tested: true,
  },
  {
    id: "pt11",
    category: "Power supplies",
    name: "650W 80+ Bronze",
    image: psu,
    condition: "Good",
    specs: "Non-modular",
    price: 8500,
    tested: true,
  },
  {
    id: "pt12",
    category: "Power supplies",
    name: "850W 80+ Gold",
    image: psu,
    condition: "Like New",
    specs: "Fully modular",
    price: 18500,
    tested: true,
  },
  {
    id: "pt13",
    category: "Monitors",
    name: '24" 1080p 144Hz IPS',
    image: monitor,
    condition: "Good",
    specs: "No dead pixels",
    price: 28500,
    tested: true,
  },
  {
    id: "pt14",
    category: "Monitors",
    name: '27" 1440p 165Hz',
    image: monitor,
    condition: "Like New",
    specs: "GSYNC Compatible",
    price: 52000,
    tested: true,
  },
  {
    id: "pt15",
    category: "Keyboards / mouse / accessories",
    name: "Mechanical RGB Keyboard",
    image: keyboard,
    condition: "Good",
    specs: "Hot-swap",
    price: 12500,
    tested: false,
  },
  {
    id: "pt16",
    category: "Keyboards / mouse / accessories",
    name: "Wireless Ergo Mouse",
    image: keyboard,
    condition: "Like New",
    specs: "Silent clicks",
    price: 6500,
    tested: true,
  },
];

export interface UsedPhone {
  id: string;
  model: string;
  condition: string;
  storage: string;
  batteryHealth?: string;
  price: number;
  warranty: string;
  tested: boolean;
}

export const usedPhones: UsedPhone[] = [
  {
    id: "ph1",
    model: "iPhone 12 128GB",
    condition: "Good",
    storage: "128GB",
    batteryHealth: "84%",
    price: 98500,
    warranty: "1 month",
    tested: true,
  },
  {
    id: "ph2",
    model: "Samsung Galaxy S21 5G",
    condition: "Like New",
    storage: "256GB",
    batteryHealth: "91%",
    price: 72500,
    warranty: "1 month",
    tested: true,
  },
  {
    id: "ph3",
    model: "Xiaomi Redmi Note 12",
    condition: "Good",
    storage: "128GB",
    batteryHealth: "88%",
    price: 38500,
    warranty: "14 days",
    tested: true,
  },
];

export interface PreOrderPhone {
  id: string;
  brand: string;
  headline: string;
  notes: string;
}

export const preorderPhones: PreOrderPhone[] = [
  {
    id: "np1",
    brand: "Apple",
    headline: "iPhone / MacBook requests",
    notes: "Model, storage, colour, budget — we quote duty-aware pricing.",
  },
  {
    id: "np2",
    brand: "Samsung",
    headline: "Galaxy S / Z / A series",
    notes: "Official regional variants where available.",
  },
  {
    id: "np3",
    brand: "Xiaomi / Google / OnePlus",
    headline: "Flagship & value imports",
    notes: "Tell us the exact SKU you want.",
  },
];

export interface ServiceItem {
  title: string;
  desc: string;
}

export const serviceItems: ServiceItem[] = [
  { title: "Computer repair", desc: "Diagnostics, power issues, board-level troubleshooting." },
  { title: "Laptop repair", desc: "Screen, keyboard, charging port, hinge, liquid damage triage." },
  {
    title: "Mobile phone support",
    desc: "Software, battery replacement referrals, data recovery options.",
  },
  {
    title: "CCTV installation",
    desc: "Site survey, cable runs, NVR setup, remote viewing on phone.",
  },
  { title: "POS system setup", desc: "Retail & restaurant workflows, printers, barcode scanners." },
  { title: "POS hardware", desc: "Terminals, cash drawers, customer displays, networking." },
  {
    title: "Full POS software + hardware package",
    desc: "End-to-end rollout with training for staff.",
  },
  {
    title: "Hardware items",
    desc: "Routers, switches, peripherals — sourced to match your budget.",
  },
  {
    title: "Software installation",
    desc: "Office suites, creative tools, drivers, essential apps.",
  },
  {
    title: "Windows installation",
    desc: "Licensed Windows setup with updates and security baseline.",
  },
  { title: "Data backup", desc: "Cloud + local backup plans for home and small business." },
  { title: "Upgrade service", desc: "RAM, SSD, GPU upgrades with compatibility checks." },
  {
    title: "Cleaning / thermal paste service",
    desc: "Deep clean, repaste, fan curve tuning for laptops & desktops.",
  },
];
