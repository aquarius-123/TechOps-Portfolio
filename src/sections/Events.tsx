import { SectionHeading } from "../components/SectionHeading";
import { EventCard } from "../components/EventCard";
import { Reveal } from "../components/Reveal";
import { events } from "../data/events";
import { gallery } from "../data/gallery";

type EventsProps = {
  onOpen: (galleryId: string) => void;
};

export function Events({ onOpen }: EventsProps) {
  return (
    <section id="events" className="section-anchor bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="06"
            kicker="Event Execution"
            title="On-ground technical execution."
            lede="Documented technical operations during Coders' Cup 2026. TechOps ensures total laboratory readiness, continuous network uptime, and zero-downtime troubleshooting across all tournament days."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {events.map((event, index) => {
            const image = gallery.find((item) => item.id === event.galleryId);
            if (!image) return null;
            return (
              <EventCard
                key={event.id}
                event={event}
                image={image}
                index={index}
                onOpen={onOpen}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
