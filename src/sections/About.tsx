import { motion } from "framer-motion";
import { Code2, Layers3, LayoutPanelTop, Plug, Sparkles, UsersRound } from "lucide-react";
import { site } from "@/data/site";
import { sectionViewport, useMotionPresets } from "@/lib/motion";

const principleIcons = {
  layout: LayoutPanelTop,
  layers: Layers3,
  plug: Plug,
  users: UsersRound,
} as const;

export function About() {
  const motionPresets = useMotionPresets();

  return (
    <section id="about" className="section-wrap">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={motionPresets.staggerContainer}
        className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <motion.div variants={motionPresets.staggerItem} className="relative lg:col-span-5">
          <div className="absolute -left-4 -top-4 size-24 rounded-tl-2xl border-l border-t border-primary/35" />
          <div className="relative flex aspect-[4/4.6] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface-low p-5 shadow-xl sm:p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 size-56 rounded-full bg-tertiary/10 blur-3xl" />

            <div className="relative flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary-light">
                  <Code2 size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">Developer mode</p>
                  <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
                    Crafting digital experiences
                  </p>
                </div>
              </div>
              <span className="flex shrink-0 items-center gap-2 rounded-full border border-tertiary/20 bg-tertiary/10 px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-wider text-tertiary">
                <span className="size-1.5 rounded-full bg-tertiary" />
                Available
              </span>
            </div>

            <motion.div
              variants={motionPresets.scaleIn}
              className="relative rounded-xl border border-border bg-background/80 p-4 shadow-2xl shadow-black/20 sm:p-5"
            >
              <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  <span className="font-mono text-xs text-muted-foreground">about.tsx</span>
                </div>
                <Sparkles size={15} className="text-secondary" aria-hidden="true" />
              </div>
              <div className="space-y-2 font-mono text-xs leading-5 sm:text-sm">
                <p><span className="text-primary-light">const</span> <span className="text-secondary">developer</span> = {"{"}</p>
                <p className="pl-4"><span className="text-muted-foreground">focus:</span> <span className="text-tertiary">&quot;Frontend&quot;</span>,</p>
                <p className="pl-4"><span className="text-muted-foreground">tools:</span> [</p>
                <p className="pl-8 text-tertiary">&quot;React&quot;, &quot;Next.js&quot;,</p>
                <p className="pl-8 text-tertiary">&quot;TypeScript&quot;</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-muted-foreground">mission:</span> <span className="text-tertiary">&quot;Make it useful.&quot;</span></p>
                <p>{"}"}</p>
              </div>
            </motion.div>

            <div className="relative flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "UI Engineering"].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-surface-container/90 px-3 py-1.5 font-mono text-[0.62rem] text-muted-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.div variants={motionPresets.staggerItem} className="eyebrow mb-3 flex items-center gap-3">
            <span className="h-px w-7 bg-secondary" />
            A little about me
          </motion.div>
          <motion.h2
            variants={motionPresets.staggerItem}
            className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl"
          >
            {site.aboutHeading}{" "}
            <span className="text-primary-light">{site.aboutHeadingAccent}</span>
          </motion.h2>
          <motion.p
            variants={motionPresets.staggerItem}
            className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground"
          >
            {site.aboutDescription}
          </motion.p>

          <motion.div
            variants={motionPresets.staggerContainer}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {site.aboutPrinciples.map((principle) => {
              const Icon = principleIcons[principle.icon];
              return (
                <motion.article
                  key={principle.title}
                  variants={motionPresets.staggerItem}
                  whileHover={motionPresets.hoverLift}
                  transition={{ duration: motionPresets.reduceMotion ? 0 : 0.18 }}
                  className="rounded-xl border border-border bg-surface-low p-4 transition-colors hover:border-primary/25 hover:bg-surface-container sm:p-5"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-surface-high text-primary-light">
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {principle.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
