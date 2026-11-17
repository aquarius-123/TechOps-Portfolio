import { ArrowUpRight, Globe } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { socialLinks } from "../data/socialLinks";

function LinkIcon({ id }: { id: string }) {
  if (id === "linkedin") {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  if (id === "instagram") {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  return <Globe size={22} className="text-gold" />;
}

export function Contact() {
  return (
    <section id="contact" className="section-anchor bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="09"
            kicker="Connect with ACM"
            title="Follow the chapter."
            lede="Engage with the official digital channels of ACM FAST-NUCES Karachi to stay updated on upcoming competitions, technical initiatives, and department activities."
          />
        </Reveal>

        <ul className="mt-14 border-t border-line">
          {socialLinks.map((link, idx) => (
            <Reveal key={link.id} delay={idx * 0.1}>
              <li className="border-b border-line">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 py-8 transition-colors duration-200"
                >
                  <span className="flex items-center gap-5">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center border border-line bg-ink-2 transition-all duration-300 group-hover:border-gold/60 group-hover:scale-105">
                      <LinkIcon id={link.id} />
                    </span>
                    <span>
                      <span className="display block text-3xl text-ivory transition-colors duration-200 group-hover:text-gold sm:text-4xl md:text-5xl">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-xs tracking-wider text-muted sm:text-sm">
                        {link.handle} · {link.note}
                      </span>
                    </span>
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-line/60 text-muted transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:translate-x-1">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
