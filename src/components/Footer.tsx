import { ArrowUpRight } from "lucide-react";
import { footerNav, site } from "../data/siteConfig";
import { socialLinks } from "../data/socialLinks";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-8 lg:grid-cols-12">
        {/* Brand Summary */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3.5">
            <img
              src={site.logo}
              alt={site.logoAlt}
              className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/40 shadow-sm"
            />
            <div>
              <p className="inscription text-xs text-gold">
                {site.shortName} · {site.departmentShort}
              </p>
              <p className="text-xs tracking-wider text-muted uppercase">
                {site.campus}
              </p>
            </div>
          </div>

          <p className="display mt-6 text-3xl text-ivory md:text-4xl">
            Behind every seamless experience.
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            The Tech Operations department at ACM FAST-NUCES Karachi manages the technical infrastructure, software systems, and on-ground technical execution that power the society&apos;s flagship events and day-to-day operations.
          </p>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-4">
          <p className="kicker">Quick Navigation</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {footerNav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-xs font-medium tracking-wide text-ivory/80 transition-colors duration-200 hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Official Channels */}
        <div className="lg:col-span-3">
          <p className="kicker">Official Channels</p>
          <ul className="mt-5 space-y-3.5">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-line/50 pb-2.5 transition-colors duration-200 hover:border-gold/50"
                >
                  <div>
                    <span className="block text-xs font-semibold tracking-wider text-ivory transition-colors group-hover:text-gold uppercase">
                      {link.label}
                    </span>
                    <span className="block text-[0.68rem] text-muted">{link.handle}</span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-line/60 bg-ink">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            Association for Computing Machinery (ACM) · {site.campus} · TechOps {site.tenure}
          </p>
          <p>© {currentYear} ACM FAST-NUCES Karachi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
