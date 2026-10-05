export const site = {
  name: "Ahmed Mahmoud",
  shortName: "Ahmed",
  role: "Frontend Developer",
  headline: "Building digital experiences that feel",
  headlineAccent: "exceptional.",
  bio: "I build accessible, pixel-perfect, and performant web experiences with React, Next.js, and TypeScript.",
  aboutDescription:
    "I focus on responsive, user-centric web applications and scalable frontend architecture, with a practical emphasis on React, Next.js, and performance.",
  availability:
    "Open to freelance work and full-time opportunities",
  email: "ahmedelmansy579@gmail.com",
  cvUrl: "/assets/files/Ahmed-Mahmoud-cv.pdf",
  profileImage: "/assets/images/AM.png",
  navigation: [
    { label: "Home", href: "/#home", section: "home" },
    { label: "About", href: "/#about", section: "about" },
    { label: "Skills", href: "/#skills", section: "skills" },
    { label: "Projects", href: "/#projects", section: "projects" },
    { label: "Experience", href: "/#experience", section: "experience" },
    { label: "Contact", href: "/#contact", section: "contact" },
  ],
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Supabase",
  ],
  highlights: [
    { value: "React · Next.js", label: "Core stack" },
    { value: "Accessible", label: "UI focus" },
    { value: "Responsive", label: "By design" },
  ],
  aboutHeading: "Thoughtful engineering,",
  aboutHeadingAccent: "human-centered design.",
  contactHeading: "Let's build something useful.",
  contactPrompt:
    "Share your idea, product goals, or timeline, and I'll get back to you.",
  footerSummary:
    "Building responsive, user-centered web applications with modern frontend tools.",
  aboutPrinciples: [
    {
      icon: "layout",
      title: "User-centered interfaces",
      description:
        "Responsive, accessible experiences designed around the people using them.",
    },
    {
      icon: "layers",
      title: "Scalable frontend systems",
      description:
        "Reusable React architecture and clear component boundaries that support growth.",
    },
    {
      icon: "plug",
      title: "Reliable integrations",
      description:
        "Practical API, state, and data integrations built into cohesive product workflows.",
    },
    {
      icon: "users",
      title: "Continuous learning",
      description:
        "A collaborative mindset and steady curiosity for improving the craft.",
    },
  ],
} as const;
