import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-1 py-5 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 text-center lg:text-left">
          {/* Left content */}
          <motion.div
            className="flex-1 space-y-6 lg:space-y-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium inline-block">
                👋 Welcome to my Portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Frontend Web Developer
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Hi, I'm Ahmed Mahmoud. I build accessible, pixel-perfect, and
              performant web experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
                <a href="#contact">Hire Me</a>
              </Button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-blue-500/50 bg-transparent hover:bg-blue-600/10 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all"
                  asChild
                >
                  <a href="#projects"> View Projects</a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-blue-500/50 bg-transparent hover:bg-blue-600/10 text-white px-6 py-6 text-base font-semibold rounded-lg transition-all flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <a href="/assets/files/Ahmed-Mahmoud-cv.pdf" download>
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="flex-shrink-0 order-1 lg:order-2 lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/assets/images/AM.png"
              alt="Profile"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
