type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  lede?: string;
};

export function SectionHeading({ index, kicker, title, lede }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-4">
        <span className="inscription text-[0.68rem] text-gold">{index}</span>
        <span className="h-px w-12 bg-gold/70" />
        <span className="kicker">{kicker}</span>
      </div>
      <h2 className="display text-[clamp(2.6rem,6vw,5.2rem)] text-ivory">{title}</h2>
      {lede ? (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
