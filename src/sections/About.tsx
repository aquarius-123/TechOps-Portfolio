import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { site } from "../data/siteConfig";

export function About() {
  return (
    <section id="about" className="section-anchor bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 md:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <SectionHeading
            index="02"
            kicker="About TechOps"
            title="The systems behind the society."
          />
          <p className="mt-8 max-w-2xl text-base leading-8 text-ivory/90 md:text-lg">
            {site.about}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
            {site.aboutPurpose}
          </p>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="relative border border-line bg-ink-2 p-8 shadow-2xl md:p-10">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
              viewBox="0 0 400 320"
              fill="none"
              aria-hidden="true"
            >
              <path d="M20 40 H140 V90 H220" stroke="#2477E8" strokeWidth="1" />
              <path d="M380 60 V160 H260" stroke="#C5A46D" strokeWidth="1" />
              <circle cx="220" cy="90" r="3" fill="#2477E8" />
              <circle cx="260" cy="160" r="3" fill="#C5A46D" />
              <path d="M40 260 H180 V210 H300" stroke="rgba(242,239,232,0.3)" strokeWidth="1" />
            </svg>

            <div className="relative flex flex-col items-start">
              <div className="relative">
                <img
                  src={site.logo}
                  alt={site.logoAlt}
                  className="h-28 w-28 rounded-full bg-white object-cover ring-2 ring-gold/40 shadow-xl"
                />
              </div>

              <p className="kicker mt-8">Chapter Record</p>
              <p className="display mt-2 text-3xl text-ivory md:text-4xl">ACM Student Chapter</p>

              <dl className="mt-8 w-full space-y-4 text-sm">
                <div className="flex justify-between gap-6 border-t border-line/70 pt-4">
                  <dt className="text-muted">University</dt>
                  <dd className="font-medium text-right text-ivory">FAST-NUCES</dd>
                </div>
                <div className="flex justify-between gap-6 border-t border-line/70 pt-4">
                  <dt className="text-muted">Campus</dt>
                  <dd className="font-medium text-right text-ivory">Karachi</dd>
                </div>
                <div className="flex justify-between gap-6 border-t border-line/70 pt-4">
                  <dt className="text-muted">Department</dt>
                  <dd className="font-medium text-right text-gold">Tech Operations</dd>
                </div>
                <div className="flex justify-between gap-6 border-t border-line/70 pt-4">
                  <dt className="text-muted">Tenure</dt>
                  <dd className="font-medium text-right text-ivory">{site.tenure}</dd>
                </div>
                <div className="flex justify-between gap-6 border-t border-line/70 pt-4">
                  <dt className="text-muted">Core Scope</dt>
                  <dd className="font-medium text-right text-ivory/90">Infrastructure & Platforms</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
