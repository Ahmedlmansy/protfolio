import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { motion, type Variants } from "framer-motion";
import { Eye } from "lucide-react";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeaturedProjects() {
  return (
    <section className="min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-blue-500 text-sm font-bold uppercase tracking-wider mb-4">
            PORTFOLIO
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-b from-slate-900/50 to-slate-800/30
                         border border-slate-700/50 rounded-2xl overflow-hidden
                         hover:border-blue-500/30 transition-all duration-300 group"
            >
              {/* Image */}
              <motion.div
                variants={imageVariants}
                className="h-48 sm:h-56 relative overflow-hidden"
              >
                <motion.img
                  src={project.mainImage}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-all" />
              </motion.div>

              {/* Info */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-500/30
                                 rounded-md text-blue-300 text-xs font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Button */}
                <motion.div whileHover={{ scale: 1.03 }}>
                  <Button
                    className="w-full bg-slate-800/50 hover:bg-blue-600
                                     text-white border border-slate-700
                                     hover:border-blue-500 py-6 rounded-lg
                                     flex items-center justify-center gap-2"
                  >
                    <a
                      href={`/projects/${index}`}
                      className="flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Project Details
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
