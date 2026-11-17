import { SectionHeading } from "../components/SectionHeading";
import { GalleryGrid } from "../components/GalleryGrid";
import { Reveal } from "../components/Reveal";
import { gallery } from "../data/gallery";

type GallerySectionProps = {
  onOpen: (galleryId: string) => void;
};

export function GallerySection({ onOpen }: GallerySectionProps) {
  return (
    <section id="gallery" className="section-anchor bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="08"
            kicker="Visual Archive"
            title="The chapter record in frame."
            lede="Verified photographic records documenting Coders' Cup 2026, laboratory setups, official announcements, and executive leadership at ACM FAST-NUCES Karachi. Select any item to inspect."
          />
        </Reveal>

        <div className="mt-14">
          <GalleryGrid items={gallery} onOpen={onOpen} />
        </div>
      </div>
    </section>
  );
}
