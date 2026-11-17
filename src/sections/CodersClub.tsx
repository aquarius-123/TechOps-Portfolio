import { ArrowUpRight, Trophy, Cpu, Server, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import {
  codersClubOverview,
  codersCupContributions,
  codersCupPromotionalAssets,
} from "../data/codersClub";

const contributionIcons = [Cpu, Server, ShieldCheck, Trophy];

export function CodersClub() {
  const featureParchments = codersCupPromotionalAssets.filter(
    (item) => item.type === "feature",
  );
  const bannersAndPartners = codersCupPromotionalAssets.filter(
    (item) => item.type === "banner" || item.type === "partner",
  );

  return (
    <section id="coders-cup" className="section-anchor relative bg-[#0a0e1a] py-24 md:py-32">
      {/* Hidden anchor so existing links to #coders-club continue to work */}
      <span id="coders-club" className="absolute -top-24" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              index="05"
              kicker={codersClubOverview.badge}
              title={codersClubOverview.title}
              lede={codersClubOverview.description}
            />

            <div className="shrink-0">
              <a
                href={codersClubOverview.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 border border-gold/70 bg-gold px-7 py-4 text-xs font-semibold tracking-[0.2em] text-ink uppercase transition duration-300 hover:bg-transparent hover:text-gold"
              >
                <span>{codersClubOverview.websiteLabel}</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Feature Parchments: What is Coders' Cup & Why Participate */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {featureParchments.map((image, idx) => (
            <Reveal key={image.id} delay={idx * 0.1}>
              <figure className="group relative overflow-hidden border border-line bg-ink-2 transition-all duration-300 hover:border-gold/50">
                <div className="overflow-hidden bg-black">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="flex items-center justify-between border-t border-line/70 px-5 py-4 text-xs tracking-[0.16em] text-ivory uppercase">
                  <span>{image.title}</span>
                  <span className="text-gold">Official Release</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Banners & Partners Grid */}
        <Reveal delay={0.15}>
          <div className="mt-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="kicker">Official Visuals, Houses & Partners</span>
              <span className="h-px flex-1 bg-line/60" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bannersAndPartners.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between border border-line bg-ink-2 p-4 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1"
                >
                  <div className="flex h-36 items-center justify-center overflow-hidden bg-black/60 p-2">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 border-t border-line/60 pt-3">
                    <p className="text-xs font-semibold text-ivory">{item.title}</p>
                    <p className="mt-1 text-[0.68rem] tracking-wider text-gold uppercase">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Confirmed TechOps Technical Contributions */}
        <Reveal delay={0.2}>
          <div className="mt-16 border border-line bg-ink-2 p-8 md:p-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="kicker">Engineering the Arena</span>
                <h3 className="display mt-2 text-3xl text-ivory md:text-4xl">
                  TechOps Technical Contributions
                </h3>
              </div>
              <p className="text-xs tracking-[0.18em] text-muted uppercase">
                Coders' Cup 2026 Core Support
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {codersCupContributions.map((item, idx) => {
                const Icon = contributionIcons[idx % contributionIcons.length];
                return (
                  <article
                    key={item.id}
                    className="border border-line/80 bg-ink p-6 transition duration-300 hover:border-gold/50"
                  >
                    <div className="inline-flex h-9 w-9 items-center justify-center border border-line bg-panel text-gold">
                      <Icon size={18} />
                    </div>
                    <h4 className="mt-4 text-base font-semibold text-ivory">{item.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
