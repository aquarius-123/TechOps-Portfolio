import { useCallback, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { BackToTop } from "./components/BackToTop";
import { Lightbox } from "./components/Lightbox";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Responsibilities } from "./sections/Responsibilities";
import { Projects } from "./sections/Projects";
import { CodersClub } from "./sections/CodersClub";
import { Events } from "./sections/Events";
import { Team } from "./sections/Team";
import { GallerySection } from "./sections/GallerySection";
import { Contact } from "./sections/Contact";
import { gallery, galleryIndex } from "./data/gallery";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

export default function App() {
  const reduced = usePrefersReducedMotion();
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), reduced ? 150 : 1000);
    return () => window.clearTimeout(timeout);
  }, [reduced]);

  const openGallery = useCallback((id: string) => {
    const index = galleryIndex(id);
    if (index >= 0) setLightbox(index);
  }, []);

  return (
    <>
      <Loader visible={loading} />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:bg-ivory focus:px-4 focus:py-2 focus:text-ink focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Responsibilities />
        <Projects />
        <CodersClub />
        <Events onOpen={openGallery} />
        <Team />
        <GallerySection onOpen={openGallery} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Lightbox
        items={gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndex={setLightbox}
      />
    </>
  );
}
