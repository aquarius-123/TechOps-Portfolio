import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Cpu, Sparkles } from "lucide-react";
import { site } from "../data/siteConfig";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduced ? 0 : 80]);
  const fade = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <section id="home" className="section-anchor relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background Ambience */}
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-96 w-96 rounded-full bg-gold/10 blur-[140px]" />

      <div className="pointer-events-none absolute top-32 -left-6 hidden select-none inscription text-[0.7rem] text-white/20 [writing-mode:vertical-rl] lg:block">
        Karachi Chapter · {site.tenure}
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1440px] items-center gap-12 px-5 pt-28 pb-16 md:px-8 lg:grid-cols-12 lg:pt-20">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          className="lg:col-span-7"
          style={{ opacity: reduced ? 1 : fade }}
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Chapter & Department Badge */}
          <div className="flex items-center gap-4">
            <img
              src={site.logo}
              alt={site.logoAlt}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40 shadow-lg shadow-gold/10"
            />
            <div>
              <div className="flex items-center gap-2">
                <p className="kicker">ACM FAST-NUCES Karachi</p>
                <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="hidden sm:inline-block text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                  Tenure {site.tenure}
                </span>
              </div>
              <p className="mt-1 text-xs tracking-[0.18em] text-muted uppercase">
                Tech Operations Department
              </p>
            </div>
          </div>

          {/* Majestic Heading */}
          <h1 className="display mt-8 text-[clamp(3.4rem,8.4vw,7.6rem)] text-ivory">
            Behind
            <br />
            every
            <br />
            <span className="text-gold italic">seamless</span>
            <br />
            experience.
          </h1>

          {/* Verified Lead Text */}
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.heroLead}
          </p>

          <p className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-ivory/80 uppercase">
            <Cpu size={14} className="text-blue" />
            <span>{site.supportingTagline}</span>
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#team"
              className="group inline-flex items-center justify-center bg-gold px-7 py-4 text-xs font-semibold tracking-[0.18em] text-ink uppercase transition duration-300 hover:bg-ivory"
            >
              <span>Explore Leadership</span>
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center border border-ivory/30 px-7 py-4 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition duration-300 hover:border-gold hover:text-gold"
            >
              <span>Technical Capabilities</span>
            </a>
            <a
              href="#coders-cup"
              className="inline-flex items-center gap-2 border border-blue/40 bg-blue-deep/20 px-6 py-4 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition duration-300 hover:border-blue hover:bg-blue-deep/40"
            >
              <Sparkles size={13} className="text-gold" />
              <span>Coders' Cup 2026</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Featured Visual */}
        <motion.figure
          className="relative lg:col-span-5"
          style={{ y: reduced ? 0 : y }}
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative border border-line bg-ink-2 shadow-2xl">
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />

            <div className="overflow-hidden">
              <img
                src="/assets/events/coders-cup-2026-day-2-round1.jpg"
                alt="Participants gathered around a workstation during Coders' Cup 2026, Day 3."
                className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border-t border-line/60 pt-3 text-xs tracking-[0.16em] uppercase">
              <span className="text-ivory font-medium">Coders' Cup 2026 · Day 3</span>
              <span className="text-gold font-semibold">Active Floor</span>
            </div>
          </div>
        </motion.figure>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="group absolute bottom-6 left-5 hidden items-center gap-3 text-[0.68rem] tracking-[0.22em] text-muted uppercase transition hover:text-gold md:left-8 md:inline-flex"
      >
        <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" />
        <span>Scroll to Discover</span>
      </a>
    </section>
  );
}
