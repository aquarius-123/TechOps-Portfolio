import { SectionHeading } from "../components/SectionHeading";
import { TeamCard } from "../components/TeamCard";
import { Reveal } from "../components/Reveal";
import { team } from "../data/team";

export function Team() {
  const head = team.find((member) => member.role === "Head");
  const coHeads = team.filter((member) => member.role === "Co-Head");

  return (
    <section id="team" className="section-anchor bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="07"
            kicker="Leadership 2026–27"
            title="Guiding the operational vision."
            lede="Executive leadership of the Tech Operations department at ACM FAST-NUCES Karachi. Directing end-to-end technical infrastructure, system architecture, and on-ground competition logistics."
          />
        </Reveal>

        {head ? (
          <div className="mt-14">
            <TeamCard member={head} featured index={0} />
          </div>
        ) : null}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {coHeads.map((member, idx) => (
            <TeamCard key={member.id} member={member} index={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
