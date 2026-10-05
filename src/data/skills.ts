export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Core languages and libraries for building web interfaces.",
    items: ["React", "TypeScript", "JavaScript", "HTML5 / CSS3"],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    description: "Application frameworks and client-side navigation.",
    items: ["Next.js", "Vite", "React Router"],
  },
  {
    id: "state-data",
    title: "State & Data",
    description: "State management, APIs, and connected application data.",
    items: ["Redux Toolkit", "Axios", "REST APIs"],
  },
  {
    id: "ui-styling",
    title: "UI & Styling",
    description: "Design systems, component libraries, and motion.",
    items: ["Tailwind CSS", "Material UI", "Hero UI", "Framer Motion"],
  },
  {
    id: "backend-services",
    title: "Backend & Services",
    description: "Services and integrations used across portfolio projects.",
    items: ["Supabase", "Firebase", "OCR integrations"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Design and development tools used in the workflow.",
    items: ["Git & GitHub", "Figma & Adobe XD", "VS Code", "Jest"],
  },
];
