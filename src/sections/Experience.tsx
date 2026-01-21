import { motion, type Variants } from "framer-motion";
import { experienceData } from "@/data/experience";
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: (isReverse: boolean) => ({
    opacity: 0,
    x: isReverse ? 60 : -60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function Experience() {
  return (
    <section className="min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-blue-500 text-sm font-bold uppercase tracking-wider mb-4">
            CAREER PATH
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 md:-translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experienceData.map((job, index) => {
              const isReverse = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  custom={isReverse}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    isReverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <motion.div
                    variants={dotVariants}
                    className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-950 md:-translate-x-1/2 z-10"
                  >
                    {job.current && (
                      <span className="absolute inset-0 bg-blue-500 rounded-full animate-ping" />
                    )}
                  </motion.div>

                  {/* Card */}
                  <div
                    className={`flex-1 ml-12 md:ml-0 ${
                      isReverse ? "md:text-right md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="bg-gradient-to-b from-slate-900/50 to-slate-800/30
                                 border border-slate-700/50 rounded-2xl p-6 md:p-8
                                 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="flex flex-wrap items-start gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {job.position}
                        </h3>

                        {job.current && (
                          <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-4">
                        <span className="font-medium text-blue-400">
                          {job.company}
                        </span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>

                      <div className="inline-block px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 text-sm mb-4">
                        {job.period}
                      </div>

                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {job.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
