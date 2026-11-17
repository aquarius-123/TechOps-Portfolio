import { site } from "../data/siteConfig";

type LoaderProps = {
  visible: boolean;
};

export function Loader({ visible }: LoaderProps) {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink"
      role="status"
      aria-live="polite"
    >
      <div className="w-[min(88vw,420px)] text-center">
        <img
          src={site.logo}
          alt=""
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />
        <p className="inscription mt-8 text-[0.68rem] text-gold">ACM FAST Karachi</p>
        <p className="display mt-3 text-4xl text-ivory">Tech Operations</p>
        <div className="relative mx-auto mt-8 h-px w-40 overflow-hidden bg-white/15">
          <span className="loader-sweep absolute inset-y-0 w-16 bg-gold" />
        </div>
        <p className="mt-4 text-xs tracking-[0.18em] text-muted uppercase">
          Preparing the portfolio
        </p>
      </div>
    </div>
  );
}
