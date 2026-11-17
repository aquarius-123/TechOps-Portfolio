export type SocialLink = {
  id: string;
  label: string;
  href: string;
  handle: string;
  note: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/acmnuceskhi/posts/?feedView=all",
    handle: "ACM NUCES Karachi",
    note: "Official chapter page",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/acmnuceskhi/",
    handle: "@acmnuceskhi",
    note: "Official chapter account",
  },
  {
    id: "coders-cup",
    label: "Coders' Cup",
    href: "https://www.coderscup26.com/",
    handle: "coderscup26.com",
    note: "Public event website",
  },
];
