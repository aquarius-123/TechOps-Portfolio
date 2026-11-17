import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryFilterTabs, type GalleryGroup, type GalleryItem } from "../data/gallery";

type GalleryGridProps = {
  items: GalleryItem[];
  onOpen: (id: string) => void;
};

export function GalleryGrid({ items, onOpen }: GalleryGridProps) {
  const [activeTab, setActiveTab] = useState<GalleryGroup>("all");

  const filteredItems = activeTab === "all"
    ? items
    : items.filter((item) => item.group === activeTab);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-6" role="tablist" aria-label="Filter gallery">
        {galleryFilterTabs.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              className={`border px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 ${active
                  ? "border-gold bg-gold text-ink"
                  : "border-line bg-ink-2 text-muted hover:border-ivory/40 hover:text-ivory"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Clean 3-Column Aligned Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              key={item.id}
            >
              <button
                type="button"
                className="group flex h-full w-full flex-col overflow-hidden border border-line bg-ink-2 text-left transition-all duration-300 hover:border-gold/60 hover:shadow-xl"
                onClick={() => onOpen(item.id)}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={item.width}
                    height={item.height}
                    className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-105 ${item.group === "promotional" ? "object-contain p-6" : "object-cover object-top"
                      }`}
                  />
                  <div className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex h-11 w-11 items-center justify-center border border-gold bg-ink/90 text-gold shadow-lg">
                      <Maximize2 size={18} />
                    </span>
                  </div>
                </div>

                <div className="mt-auto border-t border-line/60 p-4">
                  <span className="display block text-lg text-ivory transition-colors group-hover:text-gold">
                    {item.caption}
                  </span>
                  {item.subcaption ? (
                    <span className="mt-1 block text-xs tracking-wider text-muted">
                      {item.subcaption}
                    </span>
                  ) : null}
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
