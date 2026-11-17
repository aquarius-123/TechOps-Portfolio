import { CheckCircle, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import type { ChapterEvent } from "../data/events";
import type { GalleryItem } from "../data/gallery";

type EventCardProps = {
  event: ChapterEvent;
  image: GalleryItem;
  index: number;
  onOpen: (galleryId: string) => void;
};

export function EventCard({ event, image, index, onOpen }: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col justify-between border border-line bg-ink-2 transition-all duration-300 hover:border-gold/60 hover:shadow-2xl hover:shadow-blue/5"
    >
      <div>
        {/* Image Frame */}
        <div className="relative aspect-[4/3] overflow-hidden bg-black">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent opacity-80" />
          <span className="absolute top-4 left-4 border border-gold/40 bg-ink/90 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
            {event.dayLabel}
          </span>
          <button
            type="button"
            className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-ink/80 text-ivory opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:border-gold hover:text-gold"
            onClick={() => onOpen(event.galleryId)}
            aria-label={`Open ${image.caption}`}
          >
            <Maximize2 size={15} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          <p className="kicker">{event.role}</p>
          <h3 className="display mt-3 text-2xl text-ivory transition-colors duration-200 group-hover:text-gold md:text-3xl">
            {event.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {event.description}
          </p>

          <ul className="mt-6 space-y-2.5 border-t border-line/60 pt-5">
            {event.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-ivory/85">
                <CheckCircle size={14} className="mt-0.5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line/60 p-6 pt-4">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-gold uppercase transition-colors hover:text-ivory"
          onClick={() => onOpen(event.galleryId)}
        >
          <span>Open Full Record</span>
          <Maximize2 size={13} />
        </button>
      </div>
    </motion.article>
  );
}
