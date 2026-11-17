export type GalleryGroup = "all" | "leadership" | "event" | "coders-cup" | "promotional";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  subcaption?: string;
  group: Exclude<GalleryGroup, "all">;
  width: number;
  height: number;
};

export const galleryFilterTabs: { id: GalleryGroup; label: string }[] = [
  { id: "all", label: "All Records" },
  { id: "leadership", label: "Leadership" },
  { id: "event", label: "Event Floor" },
  { id: "coders-cup", label: "Coders' Cup" },
  { id: "promotional", label: "Announcements & Banners" },
];

export const gallery: GalleryItem[] = [
  {
    id: "portrait-uzair",
    src: "/assets/team/uzair-mustafa.jpg",
    alt: "Uzair Mustafa, Head of Tech Operations, ACM FAST-NUCES Karachi 2026–27.",
    caption: "Uzair Mustafa",
    subcaption: "Head · Tech Operations 2026–27",
    group: "leadership",
    width: 720,
    height: 884,
  },
  {
    id: "portrait-ahsan",
    src: "/assets/team/ahsan-abbasi.jpg",
    alt: "Ahsan Abbasi, Co-Head of Tech Operations, ACM FAST-NUCES Karachi 2026–27.",
    caption: "Ahsan Abbasi",
    subcaption: "Co-Head · Tech Operations 2026–27",
    group: "leadership",
    width: 720,
    height: 884,
  },
  {
    id: "portrait-fareed",
    src: "/assets/team/muhammad-fareed.jpg",
    alt: "Muhammad Fareed, Co-Head of Tech Operations, ACM FAST-NUCES Karachi 2026–27.",
    caption: "Muhammad Fareed",
    subcaption: "Co-Head · Tech Operations 2026–27",
    group: "leadership",
    width: 720,
    height: 884,
  },
  {
    id: "day-1",
    src: "/assets/events/coders-cup-2026-day-1.jpg",
    alt: "Students working at desktop computers in computer lab during Coders' Cup 2026 Day 1.",
    caption: "Coders' Cup 2026 — Day 1",
    subcaption: "Computer Laboratory Setup & Session",
    group: "event",
    width: 720,
    height: 852,
  },
  {
    id: "day-2",
    src: "/assets/events/coders-cup-2026-day-2.jpg",
    alt: "A participant reviewing work on a monitor during Coders' Cup 2026 Day 2.",
    caption: "Coders' Cup 2026 — Day 2",
    subcaption: "Live Contestant Workstation & Monitoring",
    group: "event",
    width: 720,
    height: 852,
  },
  {
    id: "day-3",
    src: "/assets/events/coders-cup-2026-day-3.jpg",
    alt: "Students gathered around a monitor during Coders' Cup 2026 Day 3.",
    caption: "Coders' Cup 2026 — Day 3",
    subcaption: "Final Rounds & Team Collaboration",
    group: "event",
    width: 720,
    height: 852,
  },
  {
    id: "what-is",
    src: "/assets/coders-cup/what-is-coders-cup.jpg",
    alt: "Promotional announcement titled What is Coders' Cup? describing modules and recognition.",
    caption: "What is Coders' Cup?",
    subcaption: "Official Announcement Parchment",
    group: "coders-cup",
    width: 720,
    height: 812,
  },
  {
    id: "why-participate",
    src: "/assets/coders-cup/why-participate.jpg",
    alt: "Promotional announcement titled Why participate? describing competitive challenges and ACM recognition.",
    caption: "Why Participate?",
    subcaption: "Official Announcement Parchment",
    group: "coders-cup",
    width: 720,
    height: 812,
  },
  {
    id: "trial-v",
    src: "/assets/coders-cup/trial-v-four-houses.png",
    alt: "Banner reading Trial V, Competitive Programming, and Four Houses, One Castle.",
    caption: "Trial V — Four Houses",
    subcaption: "Competitive Programming Banner",
    group: "promotional",
    width: 417,
    height: 214,
  },
  {
    id: "choose-path",
    src: "/assets/coders-cup/choose-your-path.png",
    alt: "Banner reading Choose Your Path, with house pennants and ACM marks.",
    caption: "Choose Your Path",
    subcaption: "Official House Banner Graphic",
    group: "promotional",
    width: 456,
    height: 194,
  },
  {
    id: "teknofest",
    src: "/assets/coders-cup/teknofest-copartner.png",
    alt: "Official graphic presenting TeknoFest as co-partner for Coders' Cup '26.",
    caption: "TeknoFest Co-Partner",
    subcaption: "Official Co-Partner Announcement",
    group: "promotional",
    width: 451,
    height: 190,
  },
  {
    id: "raqami",
    src: "/assets/coders-cup/raqami-main-sponsor.png",
    alt: "Official graphic presenting Raqami Islamic Digital Bank as main sponsor for Coders' Cup '26.",
    caption: "Raqami Islamic Digital Bank",
    subcaption: "Main Sponsor Announcement",
    group: "promotional",
    width: 453,
    height: 191,
  },
];

export function galleryIndex(id: string) {
  return gallery.findIndex((item) => item.id === id);
}
