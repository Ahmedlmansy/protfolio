import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { experienceData } from "@/data/experience";
import { sectionViewport, useMotionPresets } from "@/lib/motion";

export default function Experience() {
  const motionPresets = useMotionPresets();

  return (
    <section id="experience" className="section-wrap">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={motionPresets.staggerContainer}
      >
        <motion.div variants={motionPresets.staggerItem} className="mb-9 max-w-2xl">
          <p className="eyebrow mb-3 flex items-center gap-3">
            <span className="h-px w-7 bg-secondary" />
            Career path
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
            Experience &amp; progression
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            A growing practice in frontend development, product interfaces, and modern web applications.
          </p>
        </motion.div>

        <div className="relative space-y-4">
          <motion.div
            initial={{ scaleY: motionPresets.reduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={sectionViewport}
            transition={{ duration: motionPresets.reduceMotion ? 0 : 0.55, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            aria-hidden="true"
            className="absolute bottom-8 left-[1.125rem] top-8 w-px bg-border sm:left-6"
          />
          {experienceData.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.position}`}
              variants={motionPresets.staggerItem}
              whileHover={motionPresets.hoverLift}
              className="relative grid gap-4 rounded-xl border border-border bg-surface-low p-4 pl-12 transition-colors hover:border-primary/25 hover:bg-surface-container sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8 sm:p-6 sm:pl-16"
            >
              <span className={`absolute left-[0.8rem] top-6 z-10 flex size-3 items-center justify-center rounded-full ring-4 ring-surface-low sm:left-[1.7rem] ${
                index % 2 === 0 ? "bg-primary" : "bg-secondary"
              }`}>
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <BriefcaseBusiness size={16} className="text-primary-light" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-foreground">{job.position}</h3>
                  {job.current && (
                    <span className="rounded-full border border-tertiary/20 bg-tertiary/10 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider text-tertiary">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{job.company}</span>
                  <span className="mx-2 text-border">·</span>
                  {job.location}
                </p>
                <p className="mt-4 max-w-3xl whitespace-pre-line text-sm leading-7 text-muted-foreground">
                  {job.description.trim()}
                </p>
              </div>
              <div className="flex items-start justify-between gap-4 sm:flex-col sm:items-end sm:justify-start">
                <span className="rounded-md bg-surface-high px-3 py-1.5 font-mono text-[0.62rem] text-secondary">
                  {job.period}
                </span>
                <ArrowUpRight size={16} className="text-muted-foreground" aria-hidden="true" />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
