import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, FileDown, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion, type Variants } from "framer-motion";
// Contact Data
const contactData = {
  title: "Let's work together",
  description:
    "I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, let's chat.",
  email: "ahmedelmansy579@gmail.com",
  social: [
    { name: "GitHub", icon: Github, url: "https://github.com/Ahmedlmansy" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ahmed-mahmoud-0b165a255/",
    },
  ],
};

export default function Contact() {

const form = useRef<HTMLFormElement | null>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    .then(
      () => {
        toast.success("Email sent successfully!");
        form.current?.reset();
      },
      (error) => {
        toast.error(`Failed to send email: ${error.text}`);
      },
    );
  };
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

    const formVariants: Variants = {
      hidden: { x: 50, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    };
  return (
    <section
      className="min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Title & Description */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                {contactData.title}
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {contactData.description}
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(59, 130, 246, 0.5)",
              }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 transition-all group"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors"
                >
                  <Mail className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-white font-medium hover:text-blue-400 transition-colors"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CV Download Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(59, 130, 246, 0.5)",
              }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 transition-all group cursor-pointer"
            >
              <a
                href="/assets/files/Ahmed-Mahmoud-cv.pdf"
                download="Ahmed-Mahmoud-CV.pdf"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors"
                  >
                    <FileDown className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      CV
                    </p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      Download CV ↓
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4">
                {contactData.social.map((social, index: number) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-600/10 transition-all group"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={formVariants}
            className="bg-gradient-to-b from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="space-y-6">
                {/* hidden fields */}
                <input
                  type="hidden"
                  name="title"
                  value="Portfolio Contact Form"
                />
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                {/* Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {/* Submit */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                  >
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    Send Message
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
