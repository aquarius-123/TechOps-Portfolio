import { motion } from "framer-motion";
import type { Responsibility } from "../data/responsibilities";

type ResponsibilityCardProps = {
  item: Responsibility;
  index: number;
};

export function ResponsibilityCard({ item, index }: ResponsibilityCardProps) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col justify-between border border-line bg-ink-2 p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-2xl hover:shadow-blue/5 md:p-7"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="inscription text-xs font-semibold text-gold">{item.index}</span>
          <div className="inline-flex h-9 w-9 items-center justify-center border border-line bg-panel text-blue transition-colors duration-300 group-hover:border-gold/50 group-hover:text-gold">
            <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
          </div>
        </div>

        <h3 className="mt-8 font-sans text-lg font-semibold tracking-tight text-ivory transition-colors group-hover:text-gold">
          {item.title}
        </h3>

        <p className="mt-3 text-xs leading-relaxed text-muted md:text-sm">
          {item.description}
        </p>
      </div>

      <div className="mt-6 border-t border-line/60 pt-4">
        <p className="text-[0.68rem] font-medium tracking-wider text-gold/90 uppercase">
          {item.focus}
        </p>
      </div>
    </motion.article>
  );
}
