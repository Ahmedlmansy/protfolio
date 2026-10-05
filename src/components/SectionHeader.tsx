import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";
import { useMotionPresets } from "@/lib/motion";
import BrandLogo from "./BrandLogo";

const MotionLink = motion.create(Link);

export default function SectionHeader() {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 24);
  const scrollState = useRef(isScrolled);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const motionPresets = useMotionPresets();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 24;
      if (scrollState.current === scrolled) return;
      scrollState.current = scrolled;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const sectionId = location.hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections = site.navigation
      .map(({ section }) => document.getElementById(section))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (activeEntry) setActiveSection(activeEntry.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const isHomeRoute = location.pathname === "/";
  const currentSection = isHomeRoute ? activeSection : "";
  const linkClass =
    "relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground";

  return (
    <motion.header
      variants={motionPresets.fadeDown}
      initial="hidden"
      animate="visible"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        isScrolled
          ? "border-border bg-background/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-background/55 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] w-[min(100%-2rem,1440px)] items-center justify-between gap-4">
        <BrandLogo onClick={() => setIsMenuOpen(false)} />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {site.navigation.map(({ label, href, section }) => {
            const isActive = currentSection === section;
            return (
              <Link
                key={section}
                to={href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveSection(section)}
                className={`${linkClass} ${
                  isActive ? "text-foreground" : ""
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <MotionLink
            to="/#contact"
            whileHover={motionPresets.reduceMotion ? undefined : { y: -2 }}
            whileTap={motionPresets.tapPress}
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-primary)] transition-colors hover:bg-primary-light sm:inline-flex"
          >
            Let&apos;s work together
            <ArrowUpRight size={15} aria-hidden="true" />
          </MotionLink>
          <motion.button
            type="button"
            whileTap={motionPresets.tapPress}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface-container text-foreground transition-colors hover:bg-surface-high lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            variants={motionPresets.mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="border-t border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
              {site.navigation.map(({ label, href, section }) => (
                <motion.div key={section} variants={motionPresets.staggerItem}>
                  <Link
                    to={href}
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className={`rounded-lg px-3 py-3 text-sm transition-colors ${
                      currentSection === section
                        ? "bg-surface-container text-foreground"
                        : "text-muted-foreground hover:bg-surface-container hover:text-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={motionPresets.staggerItem}>
                <MotionLink
                  to="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={motionPresets.tapPress}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground sm:hidden"
                >
                  Let&apos;s work together
                  <ArrowUpRight size={16} aria-hidden="true" />
                </MotionLink>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
