export type LeadershipRole = "Head" | "Co-Head";

export type TeamMember = {
  id: string;
  name: string;
  role: LeadershipRole;
  department: string;
  tenure: string;
  organization: string;
  image: string;
  imageAlt: string;
  scope: string;
};

export const team: TeamMember[] = [
  {
    id: "uzair-mustafa",
    name: "Uzair Mustafa",
    role: "Head",
    department: "Tech Operations",
    tenure: "2026–27",
    organization: "ACM FAST-NUCES Karachi",
    image: "/assets/team/uzair-mustafa.jpg",
    imageAlt:
      "Uzair Mustafa, Head of Tech Operations, ACM FAST-NUCES Karachi 2026–27.",
    scope:
      "Directs overall technical infrastructure, digital platform roadmaps, and event execution across all ACM FAST Karachi initiatives.",
  },
  {
    id: "ahsan-abbasi",
    name: "Ahsan Abbasi",
    role: "Co-Head",
    department: "Tech Operations",
    tenure: "2026–27",
    organization: "ACM FAST-NUCES Karachi",
    image: "/assets/team/ahsan-abbasi.jpg",
    imageAlt:
      "Ahsan Abbasi, Co-Head of Tech Operations, ACM FAST-NUCES Karachi 2026–27.",
    scope:
      "Oversees live competition infrastructure, systems stability, and on-ground technical operations during chapter events.",
  },
  {
    id: "muhammad-fareed",
    name: "Muhammad Fareed",
    role: "Co-Head",
    department: "Tech Operations",
    tenure: "2026–27",
    organization: "ACM FAST-NUCES Karachi",
    image: "/assets/team/muhammad-fareed.jpg",
    imageAlt:
      "Muhammad Fareed, Co-Head of Tech Operations, ACM FAST-NUCES Karachi 2026–27.",
    scope:
      "Manages technical logistics, platform coordination, and real-time operational troubleshooting for flagship activities.",
  },
];
