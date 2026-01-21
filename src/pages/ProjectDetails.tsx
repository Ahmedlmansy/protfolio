import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code,
  Eye,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useParams } from "react-router-dom";
export default function ProjectDetailsPage() {
  const { id } = useParams();
  const projectId = parseInt(id || "0", 10);
  return (
    <div className="min-h-screen ">
      {/* Main Content */}
      <div className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {projects[projectId].category}
            </a>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-white">{projects[projectId].title}</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {projects[projectId].title}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[projectId].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full bg-slate-800 text-gray-400 text-xs font-bold uppercase">
                  {projects[projectId].version}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                {projects[projectId].description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projects[projectId].technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800"
                    >
                      <span className="text-sm text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-6 rounded-lg shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                  <a
                    href={`${projects[projectId].liveDemo}`}
                    className="flex gap-1 items-center"
                  >
                    <Rocket className="w-5 h-5" />
                    View Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold text-sm py-6 rounded-lg flex items-center justify-center gap-2"
                >
                  <a
                    href={`${projects[projectId].sourceCode}`}
                    className="flex gap-1 items-center"
                  >
                    <Code className="w-5 h-5" />
                    View Source
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                  <img
                    src={projects[projectId].mainImage}
                    alt={projects[projectId].title}
                    className="w-full h-full  transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-xs text-white border border-white/10 flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    Preview
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-slate-800 my-8"></div>

          {/* Deep Dive Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Overview */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-white">
                Project Overview
              </h2>
              <div className="text-gray-400 space-y-4">
                <p>{projects[projectId].overview.challenge}</p>
                <p>{projects[projectId].overview.solution}</p>
                <p>{projects[projectId].overview.approach}</p>
              </div>

              {/* Gallery */}
              <div className="mt-4">
                <h3 className="text-white text-lg font-bold mb-4">Gallery</h3>
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
                  {projects[projectId].gallery.map((item, i) => (
                    <div
                      key={i}
                      className="snap-start shrink-0 w-64 md:w-80 rounded-lg overflow-hidden border border-slate-800 bg-slate-900"
                    >
                      <div className="aspect-video w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full "
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium text-white">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="md:col-span-1">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-full">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  Key Features
                </h3>
                <ul className="flex flex-col gap-4">
                  {projects[projectId].features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white text-sm font-bold">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
