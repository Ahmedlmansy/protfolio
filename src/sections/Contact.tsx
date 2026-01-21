import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, FileDown, Github, Linkedin, Send } from "lucide-react";

// Contact Data
const contactData = {
  title: "Let's work together",
  description:
    "I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, let's chat.",
  email: "ahmed@mahmoud.dev",
  social: [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
  ],
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen  py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Title & Description */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                {contactData.title}
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {contactData.description}
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
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
            </div>

            {/* CV Download Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <FileDown className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                    CV
                  </p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    Download CV ↓
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4">
                {contactData.social.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-600/10 transition-all group"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-b from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-lg shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
