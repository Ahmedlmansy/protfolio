import { motion, type Variants } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageBoxVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, type: "spring", stiffness: 100 },
  },
};

export function About() {
  return (
    <section className="min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8" id="about">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-blue-500 text-sm font-bold uppercase tracking-wider mb-4">
            ABOUT ME
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Passionate about clean code & user experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div variants={imageBoxVariants}>
            <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-12 flex flex-col items-center justify-center shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-40 h-40 rounded-full overflow-hidden border-2 border-slate-700 mb-6"
              >
                <img
                  src="/assets/images/AM.png"
                  alt="Ahmed Mahmoud"
                  className="w-full h-full object-cover "
                />
              </motion.div>
              <p className="text-gray-500 uppercase tracking-wide text-sm">
                Ahmed Mahmoud
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <div className="space-y-8">
            <motion.p variants={itemVariants} className="text-gray-300 text-lg">
              I am Ahmed Mahmoud, a dedicated frontend developer focused on
              building responsive, user-centric web applications.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 text-lg">
              I specialize in React, Next.js, performance optimization, and
              scalable frontend architecture.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex gap-4 bg-slate-900/30 border border-slate-800/50 rounded-xl p-5"
              >
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <div>
                  <h4 className="text-white font-semibold">
                    Continuous Learner
                  </h4>
                  <p className="text-gray-400 text-sm">Tech enthusiast</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex gap-4 bg-slate-900/30 border border-slate-800/50 rounded-xl p-5"
              >
                <Users className="w-6 h-6 text-blue-400" />
                <div>
                  <h4 className="text-white font-semibold">Team Player</h4>
                  <p className="text-gray-400 text-sm">Collaborative mindset</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {["React", "Next.js", "TypeScript", "Tailwind"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300 text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
