import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, site } from "../data/siteConfig";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const activeId = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-[1440px] items-center justify-between gap-4 px-5 md:px-8">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3.5 transition-opacity hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <img
            src={site.logo}
            alt=""
            className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40 shadow-sm"
          />
          <span className="leading-tight">
            <span className="block text-[0.72rem] font-semibold tracking-[0.22em] text-ivory uppercase">
              ACM FAST
            </span>
            <span className="block text-[0.62rem] tracking-[0.18em] text-gold uppercase">
              TechOps · {site.tenure}
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 min-[1200px]:flex" aria-label="Primary">
          {navItems.map((item) => {
            const current = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={current ? "true" : undefined}
                className={`relative py-2 text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-200 ${
                  current ? "text-gold" : "text-muted hover:text-ivory"
                }`}
              >
                {item.label}
                {current && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line bg-ink-2 text-ivory min-[1200px]:hidden transition hover:border-gold hover:text-gold"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100svh-4.75rem)] overflow-y-auto border-t border-line bg-ink/95 px-6 py-8 backdrop-blur-xl min-[1200px]:hidden shadow-2xl"
            aria-label="Mobile"
          >
            <ul className="space-y-2">
              {navItems.map((item, idx) => {
                const current = activeId === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <a
                      href={item.href}
                      aria-current={current ? "true" : undefined}
                      className={`display block py-2 text-3xl transition-colors ${
                        current ? "text-gold" : "text-ivory hover:text-gold"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-8 border-t border-line/60 pt-6">
              <p className="kicker">ACM FAST-NUCES Karachi</p>
              <p className="mt-1 text-xs text-muted">
                Tech Operations Department · {site.tenure}
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
