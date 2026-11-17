import { useEffect, useRef } from "react";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { CapabilityDomain } from "../data/projects";

type ProjectModalProps = {
  domain: CapabilityDomain | null;
  onClose: () => void;
};

export function ProjectModal({ domain, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!domain) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [domain, onClose]);

  return (
    <AnimatePresence>
      {domain && (
        <div
          className="fixed inset-0 z-[75] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="capability-dialog-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[90svh] w-full max-w-2xl overflow-y-auto border border-line bg-ink-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {domain.image ? (
              <div className="relative border-b border-line">
                <img
                  src={domain.image}
                  alt={domain.imageAlt ?? domain.title}
                  className="max-h-[38vh] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
              </div>
            ) : null}

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="kicker">{domain.category}</span>
                  <p className="mt-1 text-xs tracking-wider text-muted">
                    Technical Scope · ACM FAST Karachi
                  </p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center border border-line text-ivory/80 transition hover:border-gold hover:text-gold"
                  onClick={onClose}
                  aria-label="Close capability details"
                >
                  <X size={18} />
                </button>
              </div>

              <h3 id="capability-dialog-title" className="display mt-4 text-3xl text-ivory md:text-4xl">
                {domain.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                {domain.summary}
              </p>

              <div className="mt-6 border-t border-line pt-6">
                <p className="kicker">Core Responsibilities & Deliverables</p>
                <ul className="mt-4 space-y-3">
                  {domain.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-ivory/90">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {domain.externalLink ? (
                <div className="mt-8 border-t border-line pt-6">
                  <a
                    href={domain.externalLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-deep px-6 py-3 text-xs font-semibold tracking-[0.16em] text-ivory uppercase transition hover:bg-blue"
                  >
                    {domain.externalLink.label}
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
