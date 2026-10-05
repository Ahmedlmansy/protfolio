import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { sectionViewport, useMotionPresets } from "@/lib/motion";

const MotionLink = motion.create(Link);

export default function FeaturedProjects() {
  const motionPresets = useMotionPresets();

  return (
    <section id="projects" className="section-wrap">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={motionPresets.staggerContainer}
      >
        <motion.div
          variants={motionPresets.staggerItem}
          className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-primary" />
              Selected work
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
              Projects in practice
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            A selection of web applications spanning e-commerce, education, analytics, and document workflows.
          </p>
        </motion.div>

        <div className="space-y-6 lg:space-y-8">
          {projects.map((project, index) => {
            const reverseLayout = index % 2 === 1;
            return (
              <motion.article
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                variants={motionPresets.staggerContainer}
                whileHover={motionPresets.reduceMotion ? undefined : { y: -3 }}
                className="group overflow-hidden rounded-2xl border border-border bg-surface-low shadow-xl shadow-black/10 transition-colors hover:border-primary/25"
              >
                <div className="grid items-stretch lg:grid-cols-2">
                  <motion.div
                    variants={motionPresets.scaleIn}
                    className={`relative min-h-64 overflow-hidden bg-surface-lowest sm:min-h-80 ${
                      reverseLayout ? "lg:order-2" : ""
                    }`}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      aria-label={`View ${project.title} details`}
                      className="absolute inset-0 z-10 focus-visible:outline-offset-[-4px]"
                    />
                    <motion.img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      whileHover={motionPresets.reduceMotion ? undefined : { scale: 1.025 }}
                      transition={{ duration: motionPresets.reduceMotion ? 0 : 0.4, ease: "easeOut" }}
                      className="h-full min-h-64 w-full object-cover object-top sm:min-h-80"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/75 via-background/5 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/15" />
                    <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/10 bg-background/80 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-foreground backdrop-blur-md">
                      <span className="text-primary-light">{String(index + 1).padStart(2, "0")}</span>
                      <span>/</span>
                      {project.category}
                    </div>
                    {project.featured && (
                      <span className="pointer-events-none absolute bottom-4 left-4 rounded-md border border-secondary/25 bg-background/80 px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-wider text-secondary backdrop-blur-md">
                        Featured project
                      </span>
                    )}
                  </motion.div>

                  <motion.div
                    variants={motionPresets.staggerContainer}
                    className={`flex flex-col justify-center p-5 sm:p-7 lg:p-9 ${
                      reverseLayout ? "lg:order-1" : ""
                    }`}
                  >
                    <motion.div variants={motionPresets.staggerItem} className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-tertiary/20 bg-tertiary/10 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-tertiary"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="font-mono text-[0.58rem] text-muted-foreground">
                        {project.version}
                      </span>
                    </motion.div>
                    <motion.h3 variants={motionPresets.staggerItem} className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {project.title}
                    </motion.h3>
                    <motion.p variants={motionPresets.staggerItem} className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      {project.shortDescription}
                    </motion.p>

                    <motion.div variants={motionPresets.staggerItem} className="mt-5 border-l-2 border-primary/60 pl-3">
                      <p className="font-mono text-[0.58rem] uppercase tracking-wider text-primary-light">
                        Contribution · {project.role}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-foreground/85">
                        {project.contribution}
                      </p>
                    </motion.div>

                    <motion.div variants={motionPresets.staggerContainer} className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((technology) => (
                        <motion.span
                          key={technology.name}
                          variants={motionPresets.staggerItem}
                          whileHover={motionPresets.reduceMotion ? undefined : { y: -2 }}
                          className="rounded-md bg-surface-container px-2.5 py-1.5 font-mono text-[0.62rem] text-muted-foreground"
                        >
                          {technology.name}
                        </motion.span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="rounded-md bg-surface-container px-2.5 py-1.5 font-mono text-[0.62rem] text-muted-foreground">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </motion.div>

                    <motion.div variants={motionPresets.staggerItem} className="mt-7 flex flex-wrap items-center gap-2 border-t border-border pt-5">
                      <MotionLink
                        to={`/projects/${project.slug}`}
                        whileHover={motionPresets.reduceMotion ? undefined : { y: -2 }}
                        whileTap={motionPresets.tapPress}
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
                      >
                        View case study
                        <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </MotionLink>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={motionPresets.hoverLift}
                        whileTap={motionPresets.tapPress}
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-border bg-surface-container px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-surface-high"
                        aria-label={`${project.title} source code on GitHub`}
                      >
                        <Code2 size={15} aria-hidden="true" />
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={motionPresets.hoverLift}
                        whileTap={motionPresets.tapPress}
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-surface-container hover:text-foreground"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        Live demo
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div variants={motionPresets.staggerItem} className="mt-8 flex justify-center">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
          >
            More about my work
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
