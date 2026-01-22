import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="">
      {/*  navbar */}
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* links */}
          <div className="flex items-center gap-12">
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
            {/* Hire Me */}
            <Button
              className="bg-[#1313EC] hover:bg-blue-700 text-white px-6 py-4 text-[14px] font-bold rounded-xl transition-all hover:scale-105"
              asChild
            >
              <a href="/#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
