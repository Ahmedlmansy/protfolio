import { useMemo } from "react";
import { useReducedMotion, type Variants } from "framer-motion";

export function useMotionPresets() {
  const reduceMotion = useReducedMotion() ?? false;

  return useMemo(() => {
    const duration = reduceMotion ? 0 : 0.42;
    const distance = reduceMotion ? 0 : 14;
    const stagger = reduceMotion ? 0 : 0.075;

    const fadeDown: Variants = {
      hidden: { opacity: 0, y: -distance },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: "easeOut" },
      },
    };

    const fadeIn: Variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, ease: "easeOut" } },
    };

    const scaleIn: Variants = {
      hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.985 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, ease: "easeOut" },
      },
    };

    const staggerContainer: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: stagger },
      },
    };

    const staggerItem: Variants = {
      hidden: { opacity: 0, y: distance },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: "easeOut" },
      },
    };

    const mobileMenu: Variants = {
      hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -8 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reduceMotion ? 0 : 0.18,
          ease: "easeOut",
          staggerChildren: reduceMotion ? 0 : 0.035,
        },
      },
      exit: {
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : -5,
        transition: { duration: reduceMotion ? 0 : 0.12, ease: "easeIn" },
      },
    };

    const pageTransition: Variants = {
      initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 6 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -4 },
    };

    return {
      reduceMotion,
      fadeDown,
      fadeIn,
      scaleIn,
      staggerContainer,
      staggerItem,
      mobileMenu,
      pageTransition,
      transition: { duration, ease: "easeOut" as const },
      hoverLift: reduceMotion ? undefined : { y: -3 },
      tapPress: reduceMotion ? undefined : { scale: 0.985 },
    };
  }, [reduceMotion]);
}

export const sectionViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -50px 0px",
} as const;
