import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { Reveal } from "../components/Reveal";
import { capabilityDomains, type CapabilityDomain } from "../data/projects";

export function Projects() {
  const [selected, setSelected] = useState<CapabilityDomain | null>(null);

  return (
    <section id="capabilities" className="section-anchor relative bg-ink py-24 md:py-32">
      {/* Hidden anchor so existing links to #projects continue to function */}
      <span id="projects" className="absolute -top-24" aria-hidden="true" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="04"
            kicker="Technical capabilities"
            title="Systems engineered to scale."
            lede="Four core technical disciplines define the operational scope of TechOps at ACM FAST-NUCES Karachi. From high-capacity web platforms to live competitive programming infrastructure, our systems power university-wide experiences."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilityDomains.map((domain, index) => (
            <ProjectCard
              key={domain.id}
              domain={domain}
              index={index}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      <ProjectModal domain={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
