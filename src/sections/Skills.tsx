import { AnimatePresence, motion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  Layers3,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { sectionViewport, useMotionPresets } from "@/lib/motion";

const categoryIcons = {
  frontend: Code2,
  frameworks: PanelsTopLeft,
  "state-data": Database,
  "ui-styling": Layers3,
  "backend-services": Braces,
  tools: Wrench,
} as const;

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const motionPresets = useMotionPresets();
  const visibleCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter(({ id }) => id === activeCategory);

  return (
    <section id="skills" className="section-wrap">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={motionPresets.staggerContainer}
      >
        <motion.div
          variants={motionPresets.staggerItem}
          className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-secondary" />
              Technical toolkit
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
              Skills &amp; ecosystem
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            Technologies I use to shape responsive interfaces and connected web applications.
          </p>
        </motion.div>

        <motion.div
          variants={motionPresets.staggerItem}
          role="group"
          aria-label="Filter skill categories"
          className="mb-6 flex max-w-full flex-wrap gap-2 rounded-xl border border-border bg-surface-low p-2"
        >
          {[{ id: "all", title: "All areas" }, ...skillCategories].map(
            ({ id, title }) => (
              <button
                key={id}
                type="button"
                aria-pressed={activeCategory === id}
                onClick={() => setActiveCategory(id)}
                className={`relative rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  activeCategory === id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeCategory === id && (
                  <motion.span
                    layoutId="active-skill-category"
                    className="absolute inset-0 rounded-lg bg-surface-high"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                )}
                <span className="relative">{title}</span>
              </button>
            ),
          )}
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory}
            initial={motionPresets.reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: motionPresets.reduceMotion ? 0 : -6 }}
            transition={{ duration: motionPresets.reduceMotion ? 0 : 0.2 }}
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {visibleCategories.map((category, categoryIndex) => {
              const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
              return (
                <motion.article
                  key={category.id}
                  initial={motionPresets.reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: motionPresets.reduceMotion ? 0 : 0.32,
                    delay: motionPresets.reduceMotion ? 0 : categoryIndex * 0.055,
                  }}
                  whileHover={motionPresets.reduceMotion ? undefined : { y: -4 }}
                  className="rounded-xl border border-border bg-surface-low p-5 transition-colors hover:border-primary/25 hover:bg-surface-container"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-high text-primary-light">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={motionPresets.reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: motionPresets.reduceMotion ? 0 : 0.2,
                          delay: motionPresets.reduceMotion ? 0 : categoryIndex * 0.04 + index * 0.025,
                        }}
                        className="rounded-md border border-border bg-surface-container px-2.5 py-1.5 font-mono text-[0.62rem] text-foreground/90"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
