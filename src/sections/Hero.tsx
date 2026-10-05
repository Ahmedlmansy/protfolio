import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { useMotionPresets } from "@/lib/motion";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export default function Hero() {
  const motionPresets = useMotionPresets();

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100svh-4.75rem)] w-[min(100%-2rem,1440px)] items-center py-14 sm:py-20 lg:py-24"
    >
      <motion.div
        initial={motionPresets.reduceMotion ? false : { opacity: 0.25, scale: 0.94 }}
        animate={{ opacity: 0.65, scale: 1 }}
        transition={{ duration: motionPresets.reduceMotion ? 0 : 0.9, ease: "easeOut" }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-8 -z-10 size-80 rounded-full bg-primary/10 blur-2xl sm:size-[28rem] sm:blur-3xl"
      />
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          className="z-10 flex flex-col items-start lg:col-span-7"
          variants={motionPresets.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={motionPresets.staggerItem}
            className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-tertiary/20 bg-tertiary/10 px-3.5 py-2"
          >
            <span className="size-2 shrink-0 rounded-full bg-tertiary ring-4 ring-tertiary/15" />
            <span className="truncate font-mono text-[0.62rem] font-medium uppercase tracking-[0.08em] text-tertiary sm:text-xs">
              {site.availability}
            </span>
          </motion.div>

          <motion.p variants={motionPresets.staggerItem} className="eyebrow mb-4">
            Hello, I&apos;m {site.name}
          </motion.p>
          <motion.h1
            variants={motionPresets.staggerItem}
            className="max-w-4xl font-display text-4xl font-bold leading-[1.12] tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl xl:text-[4.4rem]"
          >
            {site.headline}{" "}
            <span className="bg-gradient-to-r from-primary-light via-primary to-secondary bg-clip-text text-transparent">
              {site.headlineAccent}
            </span>
          </motion.h1>
          <motion.p
            variants={motionPresets.staggerItem}
            className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            {site.bio}
          </motion.p>

          <motion.div
            variants={motionPresets.staggerItem}
            className="mt-7 flex flex-wrap gap-2"
            aria-label="Core technologies"
          >
            {site.technologies.map((technology, index) => (
              <motion.span
                key={technology}
                initial={motionPresets.reduceMotion ? false : { opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: motionPresets.reduceMotion ? 0 : 0.32,
                  delay: motionPresets.reduceMotion ? 0 : 0.35 + index * 0.055,
                }}
                whileHover={motionPresets.reduceMotion ? undefined : { y: -2 }}
                className="rounded-md border border-border bg-surface-container px-3 py-1.5 font-mono text-[0.65rem] text-foreground/90 shadow-sm sm:text-xs"
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={motionPresets.staggerItem}
            className="mt-9 flex w-full flex-wrap items-center gap-3"
          >
            <motion.div whileHover={motionPresets.hoverLift} whileTap={motionPresets.tapPress}>
              <Link
                to="/#projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-colors hover:bg-primary-light"
              >
                Explore projects
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div whileHover={motionPresets.hoverLift} whileTap={motionPresets.tapPress}>
              <Link
                to="/#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface-container px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-surface-high"
              >
                Let&apos;s talk
                <ArrowDown size={16} aria-hidden="true" />
              </Link>
            </motion.div>
            <div className="flex items-center gap-2 sm:ml-2">
              {socials
                .filter(({ name }) => name in socialIcons)
                .map(({ name, href }) => {
                  const Icon = socialIcons[name as keyof typeof socialIcons];
                  return (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      whileHover={motionPresets.reduceMotion ? undefined : { y: -3, scale: 1.04 }}
                      whileTap={motionPresets.tapPress}
                      className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface-container text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </motion.a>
                  );
                })}
            </div>
          </motion.div>

          <motion.div
            variants={motionPresets.staggerItem}
            className="mt-10 grid w-full max-w-xl grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-3"
          >
            {site.highlights.map((highlight, index) => (
              <div
                key={highlight.label}
                className={index === 2 ? "col-span-2 sm:col-span-1" : undefined}
              >
                <span className="font-display text-lg font-bold text-foreground">{highlight.value}</span>
                <span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-wider text-muted-foreground">
                  {highlight.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={motionPresets.reduceMotion ? false : { opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: motionPresets.reduceMotion ? 0 : 0.65, delay: motionPresets.reduceMotion ? 0 : 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-primary/10" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-low p-3 shadow-2xl shadow-black/30 sm:p-4">
            <div className="mb-3 flex items-center justify-between rounded-lg bg-surface-lowest px-3 py-2.5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-primary" />
                <span className="size-2.5 rounded-full bg-secondary" />
                <span className="size-2.5 rounded-full bg-tertiary" />
              </div>
              <span className="font-mono text-[0.58rem] text-muted-foreground">ahmed / portfolio</span>
              <span className="size-2 rounded-full bg-tertiary" aria-label="Available" />
            </div>
            <div className="relative overflow-hidden rounded-xl bg-surface-container">
              <img
                src={site.profileImage}
                alt={`${site.name}, ${site.role}`}
                className="aspect-[4/4.3] w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/75 to-transparent p-5 pt-16 sm:p-6 sm:pt-20">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary-light">
                  Frontend · React · Next.js
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                  {site.name}
                </h2>
              </div>
            </div>
          </div>
          <motion.div
            initial={motionPresets.reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionPresets.reduceMotion ? 0 : 0.4, delay: motionPresets.reduceMotion ? 0 : 0.65 }}
            className="absolute -bottom-5 -left-3 rounded-xl border border-border bg-surface-container px-4 py-3 shadow-xl sm:-left-7"
          >
            <span className="font-mono text-[0.58rem] uppercase tracking-wider text-muted-foreground">Currently focused on</span>
            <span className="mt-1 block text-sm font-semibold text-foreground">Useful, polished web products</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
