import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CapabilityDomain } from "../data/projects";

type ProjectCardProps = {
  domain: CapabilityDomain;
  index: number;
  onOpen: (domain: CapabilityDomain) => void;
};

export function ProjectCard({ domain, index, onOpen }: ProjectCardProps) {
  const Icon = domain.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col justify-between border border-line bg-ink-2 p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-2xl hover:shadow-blue/5 md:p-8"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center border border-line bg-panel text-blue transition-colors duration-300 group-hover:border-gold/50 group-hover:text-gold">
              <Icon size={20} strokeWidth={1.8} />
            </div>
            <span className="kicker">{domain.category}</span>
          </div>
          <span className="inscription text-xs text-muted/60">
            0{index + 1}
          </span>
        </div>

        {/* Optional Media Preview */}
        {domain.image ? (
          <div className="relative mt-5 overflow-hidden border border-line">
            <img
              src={domain.image}
              alt={domain.imageAlt ?? domain.title}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 bg-ink/80 px-2.5 py-1 text-[0.65rem] tracking-[0.16em] text-gold uppercase backdrop-blur-sm">
              Coders' Cup Floor
            </span>
          </div>
        ) : null}

        {/* Title & Summary */}
        <h3 className="display mt-6 text-2xl text-ivory transition-colors duration-200 group-hover:text-gold md:text-3xl">
          {domain.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {domain.summary}
        </p>

        {/* Core Architecture Points */}
        <ul className="mt-5 space-y-2.5 border-t border-line/60 pt-4">
          {domain.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-xs leading-relaxed text-ivory/85">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-blue/90" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-4">
        <button
          type="button"
          onClick={() => onOpen(domain)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.16em] text-gold uppercase transition-transform duration-200 hover:translate-x-1"
        >
          View Scope <ChevronRight size={14} />
        </button>

        {domain.externalLink ? (
          <a
            href={domain.externalLink.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium tracking-[0.14em] text-blue hover:text-ivory uppercase"
          >
            {domain.externalLink.label}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
