import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { sectionViewport, useMotionPresets } from "@/lib/motion";
import { usePageMeta } from "@/lib/usePageMeta";
import NotFound from "./NotFound";

const MotionLink = motion.create(Link);

export default function ProjectDetails() {
  const { slug = "" } = useParams();
  const motionPresets = useMotionPresets();
  const project = projects.find((item) => item.slug === slug);
  usePageMeta(
    project
      ? `${project.title} | ${site.name}`
      : `Page not found | ${site.name}`,
    project?.shortDescription ?? "The project you requested could not be found.",
  );

  if (/^\d+$/.test(slug)) {
    const legacyProject = projects[Number(slug)];
    return legacyProject ? (
      <Navigate replace to={`/projects/${legacyProject.slug}`} />
    ) : (
      <NotFound />
    );
  }

  if (!project) return <NotFound />;

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const relatedProject = projects[(projectIndex + 1) % projects.length];
  const gallery = project.gallery.slice(0, 3);

  return (
    <motion.div
      initial={motionPresets.reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionPresets.reduceMotion ? 0 : 0.3, ease: "easeOut" }}
      className="mx-auto w-[min(100%-2rem,1280px)] pb-16 pt-8 sm:pb-24 sm:pt-12"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionPresets.staggerContainer}
      >
        <motion.div
          variants={motionPresets.staggerItem}
          className="mb-9 flex flex-wrap items-center justify-between gap-4"
        >
          <MotionLink
            to="/#projects"
            whileHover={motionPresets.hoverLift}
            whileTap={motionPresets.tapPress}
            className="group inline-flex items-center gap-2 rounded-lg px-1 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary-light"
          >
            <ArrowLeft
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-1"
            />
            All projects
          </MotionLink>
          <span className="rounded-md border border-border bg-surface-container px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
            Case study · {project.category}
          </span>
        </motion.div>

        <motion.section
          variants={motionPresets.staggerContainer}
          className="grid items-end gap-8 pb-9 lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-8">
            <motion.p variants={motionPresets.staggerItem} className="eyebrow mb-3">
              {project.version} · {project.tags.join(" / ")}
            </motion.p>
            <motion.h1
              variants={motionPresets.staggerItem}
              className="font-display text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {project.title}
            </motion.h1>
            <motion.p
              variants={motionPresets.staggerItem}
              className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {project.shortDescription}
            </motion.p>
          </div>
          <motion.div variants={motionPresets.staggerItem} className="flex flex-wrap gap-2 lg:col-span-4 lg:justify-end">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={motionPresets.hoverLift}
              whileTap={motionPresets.tapPress}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
            >
              Live demo
              <ExternalLink size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={motionPresets.hoverLift}
              whileTap={motionPresets.tapPress}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface-container px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-high"
            >
              Source code
              <Code2 size={16} aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.section
          variants={motionPresets.scaleIn}
          viewport={sectionViewport}
          className="overflow-hidden rounded-2xl border border-border bg-surface-low shadow-2xl shadow-black/20"
        >
          <div className="flex h-11 items-center justify-between border-b border-border bg-surface-lowest px-4">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-primary" />
              <span className="size-2.5 rounded-full bg-secondary" />
              <span className="size-2.5 rounded-full bg-tertiary" />
            </div>
            <span className="max-w-[60%] truncate rounded bg-surface-container px-3 py-1 font-mono text-[0.58rem] text-muted-foreground">
              {project.title} · project preview
            </span>
            <span className="font-mono text-[0.58rem] text-tertiary">Preview</span>
          </div>
          <motion.div
            initial={motionPresets.reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: motionPresets.reduceMotion ? 0 : 0.4, delay: motionPresets.reduceMotion ? 0 : 0.08 }}
            className="relative bg-surface-lowest"
          >
            <img
              src={project.image}
              alt={`${project.title} application screenshot`}
              fetchPriority="high"
              className="max-h-[680px] min-h-64 w-full object-contain object-top sm:min-h-96"
            />
          </motion.div>
        </motion.section>

        <section className="mt-6 grid gap-4 md:grid-cols-3" aria-label="Project metadata">
          {[
            { label: "My role", value: project.role, icon: Code2 },
            { label: "Project type", value: project.category, icon: Layers3 },
            { label: "Release", value: project.version, icon: ArrowUpRight },
          ].map(({ label, value, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={motionPresets.reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={sectionViewport}
              transition={{ duration: motionPresets.reduceMotion ? 0 : 0.3, delay: motionPresets.reduceMotion ? 0 : index * 0.05 }}
              className="rounded-xl border border-border bg-surface-low p-4 sm:p-5"
            >
              <div className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                <Icon size={14} className="text-primary-light" aria-hidden="true" />
                {label}
              </div>
              <p className="mt-3 font-display text-base font-semibold text-foreground">{value}</p>
            </motion.div>
          ))}
        </section>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={motionPresets.staggerContainer}
            className="lg:col-span-7"
          >
            <motion.p variants={motionPresets.staggerItem} className="eyebrow mb-3">
              The contribution
            </motion.p>
            <motion.h2
              variants={motionPresets.staggerItem}
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              What I contributed.
            </motion.h2>
            <motion.p
              variants={motionPresets.staggerItem}
              className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
              {project.contribution}
            </motion.p>
            <motion.div variants={motionPresets.staggerItem} className="mt-7 rounded-xl border border-border bg-surface-low p-5 sm:p-6">
              <div className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-wider text-secondary">
                <Layers3 size={15} aria-hidden="true" />
                Technical context
              </div>
              <p className="mt-3 text-sm leading-7 text-foreground/85">
                {project.overview.challenge}
              </p>
            </motion.div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={motionPresets.staggerContainer}
            className="lg:col-span-5"
          >
            <motion.p variants={motionPresets.staggerItem} className="eyebrow mb-3">
              Key features
            </motion.p>
            <ul className="space-y-3">
              {project.features.slice(0, 4).map((feature) => (
                <motion.li
                  key={feature.title}
                  variants={motionPresets.staggerItem}
                  className="flex gap-3 rounded-xl border border-border bg-surface-low p-4"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-tertiary/10 text-tertiary">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={motionPresets.staggerContainer}
          className="mt-12 rounded-2xl border border-border bg-surface-low p-5 sm:p-7"
        >
          <motion.div variants={motionPresets.staggerItem} className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-2">Built with</p>
              <h2 className="font-display text-xl font-semibold text-foreground">Technology stack</h2>
            </div>
            <p className="font-mono text-[0.6rem] text-muted-foreground">{project.technologies.length} technologies</p>
          </motion.div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology, index) => (
              <motion.span
                key={technology.name}
                initial={motionPresets.reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={sectionViewport}
                transition={{ duration: motionPresets.reduceMotion ? 0 : 0.22, delay: motionPresets.reduceMotion ? 0 : index * 0.035 }}
                className="rounded-md border border-border bg-surface-container px-3 py-2 font-mono text-xs text-foreground/90"
              >
                {technology.name}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {gallery.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={motionPresets.staggerContainer}
            className="mt-12"
          >
            <motion.div variants={motionPresets.staggerItem} className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">Screenshots</p>
                <h2 className="font-display text-2xl font-semibold text-foreground">Inside the project</h2>
              </div>
              <span className="font-mono text-[0.6rem] text-muted-foreground">{gallery.length} views</span>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <motion.figure
                  key={item.title}
                  variants={motionPresets.staggerItem}
                  whileHover={motionPresets.hoverLift}
                  className="overflow-hidden rounded-xl border border-border bg-surface-low"
                >
                  <img
                    src={item.image}
                    alt={`${project.title} — ${item.title}`}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top"
                  />
                  <figcaption className="px-4 py-3 text-sm font-medium text-foreground">{item.title}</figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={motionPresets.staggerItem}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          <MotionLink
            to={`/projects/${relatedProject.slug}`}
            whileHover={motionPresets.hoverLift}
            whileTap={motionPresets.tapPress}
            className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-low p-5 transition-colors hover:bg-surface-container sm:p-6"
          >
            <span>
              <span className="block font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">Next project</span>
              <span className="mt-2 block font-display text-lg font-semibold text-foreground">{relatedProject.title}</span>
            </span>
            <ArrowRight size={19} className="shrink-0 text-primary-light transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </MotionLink>
          <MotionLink
            to="/#contact"
            whileHover={motionPresets.hoverLift}
            whileTap={motionPresets.tapPress}
            className="group flex items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/10 p-5 transition-colors hover:bg-primary/15 sm:p-6"
          >
            <span>
              <span className="block font-mono text-[0.6rem] uppercase tracking-wider text-primary-light">Have a project in mind?</span>
              <span className="mt-2 block font-display text-lg font-semibold text-foreground">Let&apos;s work together</span>
            </span>
            <ArrowUpRight size={19} className="shrink-0 text-primary-light transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
          </MotionLink>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
