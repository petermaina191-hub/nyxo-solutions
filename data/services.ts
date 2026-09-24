import type { ComponentType } from "react";
import {
  Globe,
  ShoppingCart,
  Wrench,
  Wifi,
  Cloud,
  Shield,
  Database,
  Megaphone,
  Zap,
  ClipboardCheck,
  Settings,
} from "lucide-react";

export type ServiceTier = {
  name: string;
  price: string;
  items: string[];
};

export type Service = {
  id: string;
  name: string;
  summary: string;
  icon: ComponentType<{ size?: number; color?: string }>;
  gradient: [string, string];
  tiers: ServiceTier[];
  note?: string;
};

export const SERVICES: Service[] = [
  {
    id: "web",
    name: "Website Development",
    summary: "Business websites, from a simple presence to a full site.",
    icon: Globe,
    gradient: ["#7C4DFF", "#4A2FD1"],
    tiers: [
      {
        name: "Starter",
        price: "KES 25,000 – 40,000",
        items: [
          "3–5 pages",
          "Mobile responsive design",
          "Contact form & WhatsApp button",
          "Google Maps embed",
          "Basic on-page SEO",
          "Domain & hosting setup, SSL",
          "30 days of support",
        ],
      },
      {
        name: "Business",
        price: "KES 50,000 – 80,000",
        items: [
          "6–10 pages",
          "Product / service catalogue",
          "Blog or news section",
          "Search indexing & advanced SEO",
          "Google Business integration",
          "Analytics setup",
          "Professional business email",
          "3 months of support",
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    summary: "Online stores with real checkout, not just a catalogue.",
    icon: ShoppingCart,
    gradient: ["#45E6E6", "#2F87E0"],
    tiers: [
      {
        name: "Standard",
        price: "KES 60,000 – 100,000",
        items: [
          "Product catalogue with variations",
          "Shopping cart",
          "WhatsApp checkout & order alerts",
          "Basic admin panel",
        ],
      },
      {
        name: "Advanced",
        price: "KES 100,000 – 200,000+",
        items: [
          "M-Pesa / Paystack integration",
          "Customer accounts",
          "Inventory sync",
          "Order management dashboard",
        ],
      },
    ],
  },
  {
    id: "itsupport",
    name: "IT Support",
    summary: "Computer setup, troubleshooting, software installs.",
    icon: Wrench,
    gradient: ["#4F7DFF", "#7C4DFF"],
    tiers: [
      {
        name: "Call-out",
        price: "Per visit",
        items: ["Computer & software setup", "Troubleshooting", "Printer & peripheral setup"],
      },
      {
        name: "Monthly Support",
        price: "KES 8,000 – 15,000 / mo",
        items: ["Remote support", "Monthly system check", "Priority response"],
      },
    ],
  },
  {
    id: "networking",
    name: "Networking",
    summary: "LAN / Wi-Fi setup and troubleshooting for your premises.",
    icon: Wifi,
    gradient: ["#2FD9C4", "#45E6E6"],
    tiers: [
      {
        name: "Setup",
        price: "From KES 5,000",
        items: [
          "Router & Wi-Fi configuration",
          "Single-location LAN setup",
          "Guest network & basic security",
        ],
      },
      {
        name: "Multi-site",
        price: "By consultation",
        items: ["Multi-outlet connectivity", "Ongoing troubleshooting retainer"],
      },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & Email",
    summary: "Business email and cloud workspace setup.",
    icon: Cloud,
    gradient: ["#5AC8FA", "#5B2FE0"],
    tiers: [
      {
        name: "Setup",
        price: "KES 5,000 – 12,000",
        items: [
          "Google Workspace or Microsoft 365 setup",
          "Domain & DNS configuration",
          "Migration of existing email",
        ],
      },
      {
        name: "Managed",
        price: "By consultation",
        items: ["User onboarding / offboarding", "Ongoing account management"],
      },
    ],
  },
  {
    id: "security",
    name: "Cybersecurity",
    summary: "Foundational security hygiene for small businesses.",
    icon: Shield,
    gradient: ["#C74DFF", "#7C4DFF"],
    tiers: [
      {
        name: "Foundations",
        price: "By consultation",
        items: [
          "Backup setup",
          "Password & access management guidance",
          "Basic device security hardening",
        ],
      },
    ],
    note: "Full security assessments are on our roadmap as we build toward formal certification.",
  },
  {
    id: "systems",
    name: "Systems",
    summary: "POS, inventory, and CRM implementation.",
    icon: Database,
    gradient: ["#7C4DFF", "#C74DFF"],
    tiers: [
      {
        name: "Single outlet",
        price: "KES 20,000 – 40,000",
        items: ["POS / inventory software setup", "Staff training", "Basic reporting"],
      },
      {
        name: "Multi-outlet",
        price: "By consultation",
        items: [
          "Inventory sync across branches",
          "Basic CRM / customer database",
          "Ongoing support",
        ],
      },
    ],
  },
  {
    id: "marketing",
    name: "Digital Marketing",
    summary: "Google presence and social media foundations.",
    icon: Megaphone,
    gradient: ["#FF6FB0", "#7C4DFF"],
    tiers: [
      {
        name: "Foundations",
        price: "KES 8,000 – 15,000",
        items: ["Google Business Profile setup & optimisation", "Social media page setup"],
      },
      {
        name: "Managed",
        price: "By consultation",
        items: ["Content calendar support", "Basic Google Ads campaign setup"],
      },
    ],
  },
  {
    id: "automation",
    name: "Business Automation",
    summary: "Turning manual processes into simple digital workflows.",
    icon: Zap,
    gradient: ["#34D399", "#2FD9C4"],
    tiers: [
      {
        name: "Process digitisation",
        price: "By consultation",
        items: [
          "Digitising paper-based order / stock records",
          "Automated order notifications",
          "Simple workflow tools",
        ],
      },
    ],
  },
  {
    id: "audit",
    name: "IT Audit",
    summary: "A practical review of how technology is used in your business.",
    icon: ClipboardCheck,
    gradient: ["#8B7FD9", "#4A2FD1"],
    tiers: [
      {
        name: "Process review",
        price: "By consultation",
        items: ["Review of current systems & processes", "Findings & recommendations report"],
      },
    ],
    note: "Formal information-systems audit services are in development as we build toward certification.",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    summary: "Keep what we build running.",
    icon: Settings,
    gradient: ["#45E6E6", "#2FD9C4"],
    tiers: [
      {
        name: "Care plan",
        price: "KES 3,000 – 10,000 / mo",
        items: ["Hosting", "Updates & minor changes", "Backups & monitoring", "Technical support"],
      },
    ],
  },
];
