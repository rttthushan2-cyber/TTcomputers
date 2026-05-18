import pcTower from "@/assets/pc-tower.jpg";
import pcWhite from "@/assets/pc-white.jpg";
import laptop from "@/assets/laptop.jpg";
import monitor from "@/assets/monitor.jpg";
import gpu from "@/assets/gpu.jpg";
import cpu from "@/assets/cpu.jpg";
import ram from "@/assets/ram.jpg";
import ssd from "@/assets/ssd.jpg";
import keyboard from "@/assets/keyboard.jpg";
import motherboard from "@/assets/motherboard.jpg";
import psu from "@/assets/psu.jpg";
import usedLaptop from "@/assets/used-laptop.jpg";
import cooler from "@/assets/cooler.jpg";
import pcCase from "@/assets/case.jpg";

export type Condition = "Like New" | "Good" | "Used" | "Needs Repair";

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: "NEW" | "TOP" | "SALE";
  isUsed?: boolean;
  condition?: Condition;
  warranty?: string;
  tested?: boolean;
  inStock: boolean;
  description?: string;
  specs?: { label: string; value: string }[];
}

export const IMAGES = {
  pcTower,
  pcWhite,
  laptop,
  monitor,
  gpu,
  cpu,
  ram,
  ssd,
  keyboard,
  motherboard,
  psu,
  usedLaptop,
  cooler,
  pcCase,
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Predator Ryzen 5 RTX 3060 Build",
    category: "Gaming PCs",
    brand: "ExpertPC",
    price: 285000,
    originalPrice: 320000,
    rating: 4.8,
    reviews: 142,
    image: pcTower,
    badge: "TOP",
    inStock: true,
    description:
      "Premium gaming rig built for 1440p high-refresh gameplay. RGB throughout, whisper-quiet thermals.",
    specs: [
      { label: "CPU", value: "AMD Ryzen 5 7600X" },
      { label: "GPU", value: "NVIDIA RTX 3060 12GB" },
      { label: "RAM", value: "16GB DDR5 6000MHz" },
      { label: "Storage", value: "1TB NVMe Gen4" },
      { label: "PSU", value: "750W 80+ Gold" },
      { label: "Cooling", value: "240mm AIO RGB" },
    ],
  },
  {
    id: "p2",
    name: "Phantom i5 14th Gen Custom Build",
    category: "Gaming PCs",
    brand: "ExpertPC",
    price: 365000,
    rating: 4.9,
    reviews: 89,
    image: pcWhite,
    badge: "NEW",
    inStock: true,
    specs: [
      { label: "CPU", value: "Intel Core i5-14600K" },
      { label: "GPU", value: "RTX 4070 12GB" },
      { label: "RAM", value: "32GB DDR5" },
      { label: "Storage", value: "2TB NVMe" },
    ],
  },
  {
    id: "p3",
    name: "ASUS ROG Strix G16 Gaming Laptop",
    category: "Laptops",
    brand: "ASUS",
    price: 425000,
    rating: 4.7,
    reviews: 56,
    image: laptop,
    badge: "NEW",
    inStock: true,
  },
  {
    id: "p4",
    name: 'ASUS TUF 27" 165Hz Gaming Monitor',
    category: "Monitors",
    brand: "ASUS",
    price: 78000,
    originalPrice: 92000,
    rating: 4.6,
    reviews: 211,
    image: monitor,
    badge: "SALE",
    inStock: true,
  },
  {
    id: "p5",
    name: "NVIDIA RTX 4070 Ti Super 16GB",
    category: "Graphic Cards",
    brand: "NVIDIA",
    price: 245000,
    rating: 4.9,
    reviews: 78,
    image: gpu,
    inStock: true,
  },
  {
    id: "p6",
    name: "Intel Core i7-14700K Processor",
    category: "Processors",
    brand: "Intel",
    price: 132000,
    rating: 4.8,
    reviews: 134,
    image: cpu,
    inStock: true,
  },
  {
    id: "p7",
    name: "Corsair Vengeance 16GB DDR4 3600MHz",
    category: "RAM",
    brand: "Corsair",
    price: 18500,
    rating: 4.7,
    reviews: 320,
    image: ram,
    inStock: true,
  },
  {
    id: "p8",
    name: "Samsung 980 Pro 1TB NVMe SSD",
    category: "SSD",
    brand: "Samsung",
    price: 26500,
    originalPrice: 31000,
    rating: 4.9,
    reviews: 412,
    image: ssd,
    badge: "SALE",
    inStock: true,
  },
  {
    id: "p9",
    name: "Razer Huntsman V3 Mechanical Keyboard",
    category: "Accessories",
    brand: "Razer",
    price: 42000,
    rating: 4.6,
    reviews: 88,
    image: keyboard,
    inStock: true,
  },
  {
    id: "p10",
    name: "ASUS ROG Strix B760-F Motherboard",
    category: "Motherboards",
    brand: "ASUS",
    price: 65000,
    rating: 4.7,
    reviews: 52,
    image: motherboard,
    inStock: true,
  },
  // Used items
  {
    id: "u1",
    name: "Used GTX 1660 Super 6GB",
    category: "Graphic Cards",
    brand: "MSI",
    price: 38000,
    originalPrice: 72000,
    rating: 4.3,
    reviews: 24,
    image: gpu,
    isUsed: true,
    condition: "Like New",
    warranty: "3 months",
    tested: true,
    inStock: true,
  },
  {
    id: "u2",
    name: "Second-hand Dell Latitude i7",
    category: "Laptops",
    brand: "Dell",
    price: 95000,
    originalPrice: 180000,
    rating: 4.1,
    reviews: 18,
    image: usedLaptop,
    isUsed: true,
    condition: "Good",
    warranty: "1 month",
    tested: true,
    inStock: true,
  },
  {
    id: "u3",
    name: "Used Corsair RM750 PSU",
    category: "Accessories",
    brand: "Corsair",
    price: 14500,
    originalPrice: 28000,
    rating: 4.5,
    reviews: 12,
    image: psu,
    isUsed: true,
    condition: "Good",
    warranty: "1 month",
    tested: true,
    inStock: true,
  },
  {
    id: "u4",
    name: "Used 240mm AIO Cooler",
    category: "Accessories",
    brand: "DeepCool",
    price: 9800,
    originalPrice: 22000,
    rating: 3.9,
    reviews: 7,
    image: cooler,
    isUsed: true,
    condition: "Used",
    warranty: "No warranty",
    tested: true,
    inStock: true,
  },
  {
    id: "u5",
    name: "Refurbished NZXT Mid Tower Case",
    category: "Accessories",
    brand: "NZXT",
    price: 8500,
    originalPrice: 18000,
    rating: 4.0,
    reviews: 5,
    image: pcCase,
    isUsed: true,
    condition: "Like New",
    warranty: "1 month",
    tested: true,
    inStock: false,
  },
  {
    id: "u6",
    name: "Used 16GB DDR4 Kit",
    category: "RAM",
    brand: "Kingston",
    price: 6200,
    originalPrice: 16000,
    rating: 4.2,
    reviews: 9,
    image: ram,
    isUsed: true,
    condition: "Needs Repair",
    warranty: "No warranty",
    tested: false,
    inStock: true,
  },
];

export const categories = [
  { name: "Gaming PCs", icon: "Cpu", image: pcTower },
  { name: "Laptops", icon: "Laptop", image: laptop },
  { name: "Monitors", icon: "Monitor", image: monitor },
  { name: "Graphic Cards", icon: "Zap", image: gpu },
  { name: "Processors", icon: "Cpu", image: cpu },
  { name: "Motherboards", icon: "CircuitBoard", image: motherboard },
  { name: "RAM", icon: "MemoryStick", image: ram },
  { name: "SSD", icon: "HardDrive", image: ssd },
  { name: "Accessories", icon: "Keyboard", image: keyboard },
  { name: "Second-Hand", icon: "Recycle", image: usedLaptop },
];

export const reviews = [
  {
    name: "Kavindu Perera",
    role: "Streamer",
    rating: 5,
    text: "Best gaming PC I've ever owned. Build quality and cable management is unreal.",
  },
  {
    name: "Nimasha Silva",
    role: "Game Developer",
    rating: 5,
    text: "Custom configurator was super easy. Got exactly the build I wanted within a week.",
  },
  {
    name: "Tharindu Jayawardena",
    role: "Esports Player",
    rating: 4,
    text: "Great prices on second-hand parts. The tested badge gave me confidence.",
  },
  {
    name: "Sahan Bandara",
    role: "Content Creator",
    rating: 5,
    text: "After-sales support is phenomenal. They actually care about your build.",
  },
];

export const formatLKR = (n: number) => `Rs. ${n.toLocaleString("en-LK")}`;
