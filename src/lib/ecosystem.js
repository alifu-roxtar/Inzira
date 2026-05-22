import { Bus, Store, HeartPulse, GraduationCap, Wallet } from "lucide-react";

export const products = [
  {
    slug: "move",
    name: "InziraMove",
    tagline: "Smart mobility for everyday journeys",
    description:
      "A transport coordination platform helping citizens access route information, real-time travel updates, and a better commuting experience.",
    status: "flagship",
    icon: Bus,
  },
  {
    slug: "biz",
    name: "InziraBiz",
    tagline: "Simple tools for small businesses",
    description:
      "Inventory, customers, and sales — organized. A digital management platform built for SMEs that prefer simple over complicated.",
    status: "building",
    icon: Store,
  },
  {
    slug: "health",
    name: "InziraHealth",
    tagline: "Healthcare access made easy",
    description:
      "Connecting citizens with medical services, appointments, and trusted health information from one accessible platform.",
    status: "building",
    icon: HeartPulse,
  },
  {
    slug: "learn",
    name: "InziraLearn",
    tagline: "Opportunities for young people",
    description:
      "Education, internships and digital learning — a platform built to unlock real opportunities for Rwandan youth.",
    status: "building",
    icon: GraduationCap,
  },
  {
    slug: "pay",
    name: "InziraPay",
    tagline: "Payments that connect the ecosystem",
    description:
      "A digital payment layer that powers transactions across the Inzira ecosystem and supports financial inclusion.",
    status: "soon",
    icon: Wallet,
  },
];
