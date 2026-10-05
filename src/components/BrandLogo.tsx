import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

type BrandLogoProps = {
  onClick?: () => void;
};

export default function BrandLogo({ onClick }: BrandLogoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Link
      to="/"
      onClick={onClick}
      className="group inline-flex min-w-0 items-center gap-3 rounded-md"
      aria-label="Ahmed Mahmoud home"
    >
      <motion.img
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        className="h-10 w-10 shrink-0 object-contain"
        whileHover={reduceMotion ? undefined : { rotate: -4, scale: 1.04 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate font-display text-sm font-bold tracking-tight text-foreground sm:text-base">
          Ahmed Mahmoud
        </span>
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-muted-foreground sm:text-[0.62rem]">
          Frontend Developer
        </span>
      </span>
    </Link>
  );
}
