import {
  Globe,
  Ticket,
  Server,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export type CapabilityDomain = {
  id: string;
  title: string;
  category: string;
  summary: string;
  points: string[];
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
  externalLink?: {
    href: string;
    label: string;
  };
};

export const capabilityDomains: CapabilityDomain[] = [
  {
    id: "chapter-websites",
    title: "Official Chapter & Event Websites",
    category: "Web & Platform Development",
    summary:
      "Developing, hosting, and maintaining modern web applications for ACM FAST-NUCES Karachi and its marquee initiatives with a focus on speed, design elegance, and mobile accessibility.",
    points: [
      "Official society web presence and flagship event portals",
      "Modern component-driven frontend architecture",
      "Responsive user experiences optimized for all device sizes",
      "Seamless integration with society announcements and media",
    ],
    icon: Globe,
  },
  {
    id: "registration-systems",
    title: "Registration & Ticketing Systems",
    category: "Platform Infrastructure",
    summary:
      "Architecting reliable digital registration pipelines and verification systems to handle university-wide participant influx for competitions and flagship summits.",
    points: [
      "Digital intake pipelines for individual and team applicants",
      "Ticket credentialing and automated confirmation workflows",
      "On-ground registration check-in and attendance verification",
      "Secure data handling aligned with competition requirements",
    ],
    icon: Ticket,
  },
  {
    id: "competition-infrastructure",
    title: "Competition & Event Infrastructure",
    category: "Competition Engineering",
    summary:
      "Engineering resilient technical environments, laboratory networks, and workstation platforms required to power competitive programming contests, including Coders' Cup 2026.",
    points: [
      "Multi-station lab network deployment and environment readiness",
      "Workstation hardware configuration and continuous uptime",
      "Real-time technical triage during high-stakes contest rounds",
      "Dedicated infrastructure backing ACM's flagship programming cup",
    ],
    icon: Server,
    image: "/assets/events/coders-cup-2026-day-1.jpg",
    imageAlt: "Computer laboratory in session during Coders' Cup 2026.",
    externalLink: {
      href: "https://www.coderscup26.com/",
      label: "Coders' Cup Official Website",
    },
  },
  {
    id: "automation-tooling",
    title: "Internal Automation & Chapter Tooling",
    category: "Internal Tooling & Automation",
    summary:
      "Building specialized utility scripts, team management workflows, and operational automation tools that accelerate day-to-day execution across ACM departments.",
    points: [
      "Automated logistics and operational tracking utilities",
      "Inter-departmental workflow synchronization",
      "Technical triage tools for rapid issue diagnosis",
      "Infrastructure scripts supporting seamless society operations",
    ],
    icon: Cpu,
  },
];
