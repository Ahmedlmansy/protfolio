import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-12">
        <a
          href="/#about"
          className="text-white text-[14px] font-medium hover:text-cyan-400 transition-colors"
        >
          About
        </a>
        <a
          href="/#projects"
          className="text-white text-[14px] font-medium hover:text-cyan-400 transition-colors"
        >
          Projects
        </a>
        <a
          href="/#skills"
          className="text-white text-[14px] font-medium hover:text-cyan-400 transition-colors"
        >
          Skills
        </a>
        <a
          href="/#experience"
          className="text-white text-[14px] font-medium hover:text-cyan-400 transition-colors"
        >
          Experience
        </a>
        <Button
          className="bg-[#1313EC] hover:bg-blue-700 text-white px-6 py-4 text-[14px] font-bold rounded-xl transition-all hover:scale-105"
          asChild
        >
          <a href="/#contact">Hire Me</a>
        </Button>
      </div>

      {/* Mobile Menu Button & Hire Me */}
      <div className="md:hidden flex items-center gap-3">
        <Button
          className="bg-[#1313EC] hover:bg-blue-700 text-white px-4 py-2 text-[14px] font-bold rounded-xl"
          asChild
        >
          <a href="/#contact">Hire Me</a>
        </Button>
        <button
          className="text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 px-5">
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 flex flex-col gap-2 shadow-xl border border-gray-800">
            <a
              href="/#about"
              className="text-white text-[14px] font-medium hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/#projects"
              className="text-white text-[14px] font-medium hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/#skills"
              className="text-white text-[14px] font-medium hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="/#experience"
              className="text-white text-[14px] font-medium hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
