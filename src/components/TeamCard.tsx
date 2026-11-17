import { Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { TeamMember } from "../data/team";

type TeamCardProps = {
  member: TeamMember;
  featured?: boolean;
  index?: number;
};

export function TeamCard({ member, featured = false, index = 0 }: TeamCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden border border-line bg-ink-2 transition-all duration-300 hover:border-gold/60 hover:shadow-2xl hover:shadow-blue/5 ${
        featured ? "lg:grid lg:grid-cols-12" : "flex flex-col justify-between"
      }`}
    >
      {/* Photo Frame */}
      <div
        className={`relative overflow-hidden bg-black ${
          featured ? "lg:col-span-6" : "aspect-[4/5]"
        }`}
      >
        <img
          src={member.image}
          alt={member.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent opacity-70" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="border border-gold/40 bg-ink/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
            {member.role}
          </span>
          {featured ? (
            <span className="hidden items-center gap-1 border border-blue/40 bg-ink/90 px-2.5 py-1 text-[0.65rem] tracking-[0.16em] text-blue uppercase backdrop-blur-sm sm:inline-flex">
              <Sparkles size={11} /> Executive Lead
            </span>
          ) : null}
        </div>
      </div>

      {/* Leadership Details */}
      <div
        className={`flex flex-col justify-between p-6 md:p-8 ${
          featured ? "lg:col-span-6 lg:p-12" : ""
        }`}
      >
        <div>
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase">
            <Shield size={13} className="text-gold" />
            <span>{member.department} · {member.tenure}</span>
          </div>

          <h3
            className={`display mt-3 text-ivory transition-colors duration-200 group-hover:text-gold ${
              featured ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl"
            }`}
          >
            {member.name}
          </h3>

          <p className="mt-2 text-xs font-medium tracking-[0.14em] text-gold uppercase">
            {member.organization}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
            {member.scope}
          </p>
        </div>

        <div className="mt-8 border-t border-line/60 pt-5">
          <div className="flex items-center justify-between text-xs tracking-wider text-muted/70 uppercase">
            <span>Verified Tenure</span>
            <span className="text-ivory">{member.tenure}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
