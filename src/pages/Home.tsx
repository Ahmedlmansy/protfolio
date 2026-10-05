import {About} from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import {Skills} from "../sections/Skills";
import { site } from "@/data/site";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Home() {
  usePageMeta(`${site.name} | ${site.role}`, site.bio);

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
