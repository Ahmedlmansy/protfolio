import { skills } from "@/data/skills";
import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

export function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  };

  return (
    <section className="min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h3 className="text-blue-500 text-sm md:text-base font-bold uppercase tracking-wider mb-3">
            MY SKILLS
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Technical Proficiency
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center"
                >
                  <category.icon className="w-6 h-6 text-blue-400" />
                </motion.div>

                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.items.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 text-gray-300"
                  >
                    <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            { label: "Technologies", value: "10+" },
            { label: "Years Experience", value: "1" },
            { label: "Projects", value: "10+" },
            { label: "Client Satisfaction", value: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={statVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-slate-900/30 border border-slate-800/50 rounded-xl"
            >
              <div className="text-3xl font-bold text-blue-400">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
