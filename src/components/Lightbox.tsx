import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "../data/gallery";

type LightboxProps = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onIndex }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const item = open ? items[index] : undefined;

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, index, items.length, onClose, onIndex]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden border border-line bg-ink-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-line px-5 py-4 text-ivory">
              <div>
                <span className="display text-xl text-ivory">{item.caption}</span>
                {item.subcaption ? (
                  <span className="ml-3 hidden text-xs text-muted md:inline">
                    · {item.subcaption}
                  </span>
                ) : null}
              </div>
              <div className="flex items-center gap-4">
                <span className="inscription text-xs text-gold">
                  {index + 1} / {items.length}
                </span>
                <button
                  ref={closeRef}
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center border border-line text-ivory transition hover:border-gold hover:text-gold"
                  onClick={onClose}
                  aria-label="Close photograph"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Image viewport */}
            <div className="relative flex max-h-[72vh] min-h-[300px] w-full items-center justify-center overflow-hidden bg-black p-2">
              <motion.img
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={item.src}
                alt={item.alt}
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            {/* Bottom navigation bar */}
            <div className="flex items-center justify-between border-t border-line px-5 py-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition hover:text-gold"
                onClick={() => onIndex((index - 1 + items.length) % items.length)}
              >
                <ChevronLeft size={16} /> Previous
              </button>

              <span className="text-xs text-muted">
                Use ← → arrow keys to navigate
              </span>

              <button
                type="button"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition hover:text-gold"
                onClick={() => onIndex((index + 1) % items.length)}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
