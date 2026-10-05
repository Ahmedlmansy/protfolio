import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import { Toaster } from "sonner";
import { useMotionPresets } from "@/lib/motion";

export default function MainLayout() {
  const location = useLocation();
  const motionPresets = useMotionPresets();

  return (
    <MotionConfig reducedMotion={motionPresets.reduceMotion ? "always" : "never"}>
      <div className="site-shell">
        <div className="site-grid" aria-hidden="true" />
        <SectionHeader />
        <main id="main-content" className="min-h-screen pt-[4.75rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              variants={motionPresets.pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: motionPresets.reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <Toaster position="top-left" richColors />
      </div>
    </MotionConfig>
  );
}
