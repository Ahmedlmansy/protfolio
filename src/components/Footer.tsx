import { ArrowUpRight, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { sectionViewport, useMotionPresets } from "@/lib/motion";

export default function Footer() {
  const motionPresets = useMotionPresets();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={motionPresets.fadeIn}
      className="border-t border-border bg-surface-lowest"
    >
      <div className="mx-auto flex w-[min(100%-2rem,1440px)] flex-col gap-8 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-start gap-3">
          <BrandLogo />
          <p className="max-w-md text-xs leading-6 text-muted-foreground">{site.footerSummary}</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {site.navigation.map(({ label, href, section }) => (
            <a
              key={section}
              href={href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={name}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface-container text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary-light transition-colors hover:bg-primary/20"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex w-[min(100%-2rem,1440px)] flex-col gap-2 py-4 text-[0.62rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1 hover:text-foreground">
            Built with care
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
