import {
  Cable,
  MonitorCog,
  Siren,
  Trophy,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

export type Responsibility = {
  id: string;
  index: string;
  title: string;
  description: string;
  focus: string;
  icon: LucideIcon;
};

export const responsibilities: Responsibility[] = [
  {
    id: "event-setup",
    index: "01",
    title: "Event Technical Setup",
    description:
      "Managing end-to-end technical arrangements and ensuring competition and auditorium environments are fully prepared for high-stakes execution.",
    focus: "Lab configuration, workstation readiness & network stability",
    icon: Cable,
  },
  {
    id: "platforms",
    index: "02",
    title: "Platform & System Management",
    description:
      "Maintaining, deploying, and monitoring digital platforms and web systems that support chapter activities and university-wide initiatives.",
    focus: "Web applications, runtime health & continuous uptime",
    icon: MonitorCog,
  },
  {
    id: "troubleshooting",
    index: "03",
    title: "Live Troubleshooting",
    description:
      "Rapid on-site diagnosis and real-time resolution of unforeseen hardware, network, or software bottlenecks during live events.",
    focus: "Zero-downtime response & real-time operational triage",
    icon: Siren,
  },
  {
    id: "logistics",
    index: "04",
    title: "Competition Logistics",
    description:
      "Engineering robust technical infrastructure, contest environments, and scoring systems required for flagship hackathons and coding battles.",
    focus: "Competitive programming platforms & multi-tier logistics",
    icon: Trophy,
  },
  {
    id: "coordination",
    index: "05",
    title: "Cross-Team Coordination",
    description:
      "Working seamlessly with university administration, event management, and partner teams to ensure synchronized, flawless event delivery.",
    focus: "Inter-departmental alignment & unified execution",
    icon: Waypoints,
  },
];
