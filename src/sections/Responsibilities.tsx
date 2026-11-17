import { SectionHeading } from "../components/SectionHeading";
import { ResponsibilityCard } from "../components/ResponsibilityCard";
import { Reveal } from "../components/Reveal";
import { responsibilities } from "../data/responsibilities";

export function Responsibilities() {
  return (
    <section id="responsibilities" className="section-anchor bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="03"
            kicker="Core Responsibilities"
            title="What the department holds."
            lede="Five operational pillars define the verified technical mandate of Tech Operations at ACM FAST-NUCES Karachi. We engineer environments where student competitions and chapter platforms run with absolute precision."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {responsibilities.map((item, index) => (
            <ResponsibilityCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
