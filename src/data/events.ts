export type ChapterEvent = {
  id: string;
  dayLabel: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  galleryId: string;
};

export const events: ChapterEvent[] = [
  {
    id: "coders-cup-day-1",
    dayLabel: "Day 01 Execution",
    title: "Coders' Cup 2026 — Laboratory Setup & Deployment",
    role: "Event Technical Setup & Environment Readiness",
    description:
      "Preparation and verification of university computer laboratories, workstation diagnostics, local network configuration, and contest environment deployment for opening rounds.",
    highlights: [
      "Workstation environment calibration and network verification",
      "Contest lab technical setup and platform connectivity",
      "Opening session operational monitoring",
    ],
    galleryId: "day-1",
  },
  {
    id: "coders-cup-day-2",
    dayLabel: "Day 02 Execution",
    title: "Coders' Cup 2026 — Live Competition Management",
    role: "Live Troubleshooting & Platform Stability",
    description:
      "Active on-ground technical support and continuous monitoring during intense programming modules, ensuring rapid triage of participant hardware and system issues.",
    highlights: [
      "Real-time contestant workstation troubleshooting",
      "Network stability and server connectivity monitoring",
      "Rapid on-site triage with zero disruption to contest flow",
    ],
    galleryId: "day-2",
  },
  {
    id: "coders-cup-day-3",
    dayLabel: "Day 03 Execution",
    title: "Coders' Cup 2026 — Final Rounds & Wrap-Up",
    role: "Competition Logistics & Infrastructure Closeout",
    description:
      "High-focus technical execution for the championship final rounds, coordinating workstation stability, judge system synchronization, and post-event technical wrap-up.",
    highlights: [
      "High-stakes championship round system oversight",
      "Workstation synchronization and final evaluation logistics",
      "Safe infrastructure teardown and laboratory restoration",
    ],
    galleryId: "day-3",
  },
];
