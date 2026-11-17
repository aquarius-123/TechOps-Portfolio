export const site = {
  title: "ACM FAST Karachi TechOps — Behind Every Seamless Experience",
  description:
    "Official 2026–27 portfolio of the Tech Operations department at ACM FAST-NUCES Karachi. Technical infrastructure, Coders' Cup, events, and department leadership.",
  organization: "Association for Computing Machinery",
  shortName: "ACM FAST",
  campus: "FAST-NUCES Karachi",
  department: "Tech Operations",
  departmentShort: "TechOps",
  tenure: "2026–27",
  tagline: "Behind Every Seamless Experience.",
  supportingTagline: "Engineering the Systems. Powering the Experiences.",
  heroLead:
    "We are the technical minds powering ACM FAST Karachi's events, platforms, competitions and digital infrastructure.",
  about:
    "The Tech Operations (Tech Ops) team at ACM FAST manages the technical infrastructure, software systems, and on-ground technical execution that power the society's flagship events and day-to-day operations.",
  aboutPurpose:
    "TechOps exists so the chapter's events, competitions, and digital platforms can run with technical care — from preparation, through live execution, to the systems that support day-to-day society work.",
  techOpsRole:
    "The Tech Operations (Tech Ops) team at ACM FAST manages the technical infrastructure, software systems, and on-ground technical execution that power the society's flagship events and day-to-day operations.",
  logo: "/assets/logo/acm-nuces-karachi.jpg",
  logoAlt:
    "ACM Student Chapter logo for NUCES Karachi, with a blue gear and circuit mark.",
} as const;

export const navItems = [
  { id: "home", href: "#home", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "responsibilities", href: "#responsibilities", label: "Responsibilities" },
  { id: "capabilities", href: "#capabilities", label: "Capabilities" },
  { id: "coders-cup", href: "#coders-cup", label: "Coders' Cup" },
  { id: "events", href: "#events", label: "Events" },
  { id: "team", href: "#team", label: "Leadership" },
  { id: "gallery", href: "#gallery", label: "Gallery" },
  { id: "contact", href: "#contact", label: "Contact" },
] as const;

export const footerNav = navItems;
