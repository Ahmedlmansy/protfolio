import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found | Ahmed Mahmoud", "The page you requested could not be found.");

  return (
    <section className="mx-auto flex min-h-[65vh] w-[min(100%-2rem,1200px)] flex-col items-start justify-center py-20">
      <p className="eyebrow">404 · Not found</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        This page isn&apos;t here.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
        The link may be outdated, or the project could not be found. Head back to the portfolio to continue exploring.
      </p>
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </motion.div>
    </section>
  );
}
