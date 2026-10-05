export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  version: string;
  tags: string[];
  shortDescription: string;
  description: string;
  role: string;
  contribution: string;
  featured: boolean;
  technologies: { name: string; color: string }[];
  image: string;
  overview: {
    challenge: string;
    solution: string;
    approach: string;
  };
  gallery: { title: string; image: string }[];
  features: { title: string; description: string }[];
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    id: "digital-archive",
    slug: "digital-archive",
    title: "Digital Archive",
    category: "Web Applications",
    version: "v1.0",
    tags: ["Frontend", "AI"],
    shortDescription:
      "An AI-assisted archive for digitizing, organizing, and understanding academic documents.",
    description:
      "An AI-powered digital archiving system used by faculty members and students to manage and digitize academic documents, featuring OCR text extraction and AI-powered summarization. Awarded Best Graduation Project of the Year.",
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Redux", color: "#764ABC" },
      { name: "Grok AI", color: "#000000" },
      { name: "OCR", color: "#F59E0B" },
    ],
    role: "Frontend lead",
    contribution:
      "Led frontend development with a bilingual Arabic/English interface and full RTL support.",
    featured: true,
    image:
      "https://kl5zxw2bu85pkkao.public.blob.vercel-storage.com/MainAR.png",
    overview: {
      challenge:
        "Faculty members and students needed a reliable way to digitize, organize, and quickly understand large volumes of academic documents without manual data entry.",
      solution:
        "Integrated OCR technology to automatically extract text from scanned documents and built AI-powered summarization so users can grasp a document's content in seconds instead of reading full pages.",
      approach:
        "Led frontend development with a bilingual Arabic/English interface and full RTL support, focusing on an intuitive document management experience for both faculty and students.",
    },
    gallery: [
      {
        title: "Dashboard",
        image:
          "https://kl5zxw2bu85pkkao.public.blob.vercel-storage.com/dashAR.png",
      },
      {
        title: "Add Documents",
        image:
          "https://kl5zxw2bu85pkkao.public.blob.vercel-storage.com/AddAr.png",
      },
      {
        title: "User Management",
        image:
          "https://kl5zxw2bu85pkkao.public.blob.vercel-storage.com/UsersAR.png",
      },
      {
        title: "Document Preview",
        image:
          "https://kl5zxw2bu85pkkao.public.blob.vercel-storage.com/ShowAR.jpeg",
      },
    ],
    features: [
      {
        title: "OCR Text Extraction",
        description:
          "Automatically extracts text from scanned documents, removing the need for manual data entry.",
      },
      {
        title: "AI Document Summarization",
        description:
          "AI-powered summarization lets users grasp a document's content in seconds instead of reading full pages.",
      },
      {
        title: "Bilingual RTL Interface",
        description:
          "Full Arabic/English interface with complete RTL support for document management.",
      },
      {
        title: "Award-Winning Project",
        description:
          "Recognized as Best Graduation Project of the Year by the department faculty.",
      },
    ],
    live: "https://digital-archive-theta-taupe.vercel.app/",
    github: "https://github.com/Ahmedlmansy/digital-archive",
  },
  {
    id: "edu-master",
    slug: "edu-master",
    title: "Edu Master",
    category: "Web Applications",
    version: "v2.0",
    tags: ["Frontend"],
    shortDescription:
      "An educational platform with an admin dashboard for creating exams and managing questions.",
    description:
      "An educational platform with a powerful admin dashboard, featuring exam question management and a smooth user experience for exam creation.",
    technologies: [
      { name: "React 19", color: "#61DAFB" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "Tailwind CSS", color: "#38B2AC" },
      { name: "Framer Motion", color: "#E91E63" },
      { name: "Hero UI", color: "#000000" },
    ],
    role: "Frontend development",
    contribution:
      "Built modular exam and question-management workflows with an interactive admin experience.",
    featured: true,
    image: "https://i.postimg.cc/MKSC5ZBQ/Home_Edu_Master.png",
    overview: {
      challenge:
        "The primary challenge was building a flexible exam management system that supports multiple question types while maintaining high performance.",
      solution:
        "Implemented a modular question management system and optimized the UI with Framer Motion for smooth transitions and interactive elements.",
      approach:
        "Focused on a user-centric design for the admin dashboard to simplify complex tasks like exam creation and question organization.",
    },
    gallery: [
      {
        title: "Admin Add Questions",
        image: "https://i.postimg.cc/T1rZxFzK/Add-Ques.png",
      },
      {
        title: "All Questions",
        image: "https://i.postimg.cc/qq89rSPz/All-Qun2.png",
      },
      {
        title: "Register and Login ",
        image: "https://i.postimg.cc/5NVhg9z3/Register_Edu.png",
      },
    ],
    features: [
      {
        title: "Admin Dashboard",
        description: "Powerful management interface for educational content.",
      },
      {
        title: "Exam Management",
        description: "Comprehensive module for creating and assigning exams.",
      },
      {
        title: "Question Types",
        description: "Support for multiple question formats and categories.",
      },
      {
        title: "Interactive UI",
        description: "Smooth user experience powered by Framer Motion.",
      },
    ],
    live: "https://edumaster-mu.vercel.app/",
    github: "https://github.com/Ahmedlmansy/edumaster",
  },
  {
    id: "rawaah-perfumes",
    slug: "rawaah-perfumes",
    title: "Rawaah Perfumes",
    category: "E-commerce",
    version: "v1.0",
    tags: ["Fullstack"],
    shortDescription:
      "A perfume storefront and admin platform for product discovery, orders, and inventory.",
    description:
      "A full-featured e-commerce platform for perfumes, featuring product discovery, advanced filtering, and a secure admin dashboard.",
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#38B2AC" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "Supabase", color: "#3ECF8E" },
    ],
    role: "Full-stack development",
    contribution:
      "Built a mobile-first storefront and connected product, order, and account workflows.",
    featured: true,
    image: "https://i.postimg.cc/9Fz7x97r/Home_Rawaah.png",
    overview: {
      challenge:
        "Building a scalable e-commerce architecture that handles product discovery, filtering, and secure checkout flows efficiently.",
      solution:
        "Leveraged Next.js for server-side rendering and Supabase for a secure, real-time database and authentication system.",
      approach:
        "Adopted a mobile-first approach to ensure a seamless shopping experience across all devices.",
    },
    gallery: [
      {
        title: "Dashboard Rawaah",
        image: "https://i.postimg.cc/nV3mY2MW/Rawaah_Dash.png",
      },
      {
        title: "Product Management",
        image: "https://i.postimg.cc/TwGbQHVv/products_Ma_Rawaah.png",
      },
      {
        title: "Order Management",
        image: "https://i.postimg.cc/YSQg6wW7/orders_Rawaah.png",
      },
      {
        title: "Login page",
        image: "https://i.postimg.cc/nc5QNLKp/login_Page.png",
      },
      {
        title: "Product Details",
        image: "https://i.postimg.cc/tTy6Dm3g/Products_Details.png",
      },
    ],
    features: [
      {
        title: "Product Discovery",
        description:
          "Advanced filtering and search for finding perfumes easily.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Role-based access control for managing products and orders.",
      },
      {
        title: "Secure Checkout",
        description: "Integrated cart, wishlist, and secure payment flow.",
      },
      {
        title: "Scalable Backend",
        description: "Powered by Supabase for reliable data management.",
      },
    ],
    live: "https://rawaah-perfumes-dj1d.vercel.app/",
    github: "https://github.com/Ahmedlmansy/Rawaah_perfumes",
  },
  {
    id: "bayan-dashboard",
    slug: "bayan-dashboard",
    title: "Bayan Dashboard",
    category: "Web Applications",
    version: "v1.0",
    tags: ["Frontend", "Analytics"],
    shortDescription:
      "A multilingual analytics dashboard with real-time visualizations and geographic data.",
    description:
      "A comprehensive analytics dashboard with multi-language support, real-time data visualization, and geographic mapping.",
    technologies: [
      { name: "Next.js 14", color: "#000000" },
      { name: "React 18", color: "#61DAFB" },
      { name: "Material-UI", color: "#0081CB" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "Mapbox GL", color: "#4264FB" },
    ],
    role: "Frontend development",
    contribution:
      "Developed a modular dashboard with Arabic/English localization and RTL/LTR layouts.",
    featured: false,
    image: "https://i.postimg.cc/kMbfgDs6/Main_Bayan.png",
    overview: {
      challenge:
        "Visualizing complex datasets in real-time while supporting both Arabic and English languages with RTL/LTR layouts.",
      solution:
        "Integrated multiple chart libraries and i18next for localization, with Firebase for real-time data synchronization.",
      approach:
        "Designed a modular dashboard architecture that allows for easy integration of new data sources and visualization types.",
    },
    gallery: [
      {
        title: "Finance Dashboard",
        image: "https://i.postimg.cc/nVD0hM24/Finance_Bayan.png",
      },
      {
        title: "CRM Dashboard",
        image: "https://i.postimg.cc/h4dpths7/CRM.png",
      },
      {
        title: "Login Page",
        image: "https://i.postimg.cc/DfXBwm6C/login_Bayan.png",
      },
    ],
    features: [
      {
        title: "Multi-language",
        description:
          "Full support for Arabic and English with RTL/LTR layouts.",
      },
      {
        title: "Data Visualization",
        description:
          "Interactive charts and geographic maps for data insights.",
      },
      {
        title: "Real-time Analytics",
        description: "Instant updates and live data tracking via Firebase.",
      },
      {
        title: "File Management",
        description: "Integrated system for managing and organizing files.",
      },
    ],
    live: "https://bayan-self.vercel.app",
    github: "https://github.com/Ahmedlmansy/Bayan",
  },
  {
    id: "basket-ecommerce",
    slug: "basket-ecommerce",
    title: "Basket Ecommerce",
    category: "E-commerce",
    version: "v1.0",
    tags: ["Frontend"],
    shortDescription:
      "A responsive shopping experience focused on product browsing, filtering, and API data.",
    description:
      "A modern e-commerce application focused on product listing, filtering, and a seamless user experience.",
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Vite", color: "#646CFF" },
      { name: "React Router", color: "#CA4245" },
      { name: "Axios", color: "#5A29E4" },
      { name: "Tailwind CSS", color: "#38B2AC" },
    ],
    role: "Frontend development",
    contribution:
      "Built product listing, filtering, and product-detail flows around REST API data.",
    featured: false,
    image: "https://i.postimg.cc/x8fv5Trf/main_Ec.png",
    overview: {
      challenge:
        "Creating a fast and responsive product catalog that integrates smoothly with REST APIs.",
      solution:
        "Used Vite for optimized builds and Axios for efficient API communication and data fetching.",
      approach:
        "Focused on clean UI components and intuitive navigation to enhance the shopping experience.",
    },
    gallery: [
      {
        title: "Shop Page",
        image: "https://i.postimg.cc/ZqNxKMPg/shop.png",
      },
      {
        title: "Product Details",
        image: "https://i.postimg.cc/TY20qQGS/prod_Det.png",
      },
      {
        title: "Filter Options",
        image: "https://i.postimg.cc/XqL86BKx/filter_Op.png",
      },
    ],
    features: [
      {
        title: "Product Listing",
        description: "Dynamic display of products with advanced filtering.",
      },
      {
        title: "REST API Integration",
        description: "Seamless communication with backend services.",
      },
      {
        title: "Responsive Design",
        description: "Optimized for a great experience on all screen sizes.",
      },
      {
        title: "Fast Performance",
        description: "Built with Vite for lightning-fast load times.",
      },
    ],
    live: "https://basket-ecommerce-iota.vercel.app/",
    github: "https://github.com/Ahmedlmansy/basket-ecommerce",
  },
  {
    id: "simply-recipes",
    slug: "simply-recipes",
    title: "Simply Recipes",
    category: "Web Applications",
    version: "v1.0",
    tags: ["Frontend"],
    shortDescription:
      "A recipe discovery app with dynamic API content and client-side navigation.",
    description:
      "A dynamic recipe application converted from static HTML to a modern React architecture with real-time API integration.",
    technologies: [
      { name: "React 19", color: "#61DAFB" },
      { name: "Vite", color: "#646CFF" },
      { name: "Material-UI", color: "#0081CB" },
      { name: "Axios", color: "#5A29E4" },
      { name: "React Router", color: "#CA4245" },
    ],
    role: "Frontend development",
    contribution:
      "Refactored the application into reusable React components and integrated API-driven content.",
    featured: false,
    image: "https://i.postimg.cc/Gmf11Hqr/Main_Simply.png",
    overview: {
      challenge:
        "Migrating a legacy static site to a modern React framework while improving accessibility and performance.",
      solution:
        "Refactored the codebase to use functional components and integrated Material-UI for a modern, accessible UI.",
      approach:
        "Prioritized developer experience with Vite and user experience with client-side routing.",
    },
    gallery: [
      {
        title: "Dish Type",
        image: "https://i.postimg.cc/cLnFrCdJ/dish_Type.png",
      },
      {
        title: "Tags Page",
        image: "https://i.postimg.cc/7YcBH08z/tags.png",
      },
      {
        title: "Contact Page",
        image: "https://i.postimg.cc/zGv1MnwR/contact.png",
      },
      {
        title: "Saved Recipes",
        image: "https://i.postimg.cc/13XZTp0K/saved.png",
      },
    ],
    features: [
      {
        title: "Dynamic Content",
        description: "Real-time recipe data fetching from RESTful APIs.",
      },
      {
        title: "Modern Architecture",
        description: "Built with React 19 and functional components.",
      },
      {
        title: "Client-side Routing",
        description: "Seamless navigation without page reloads.",
      },
      {
        title: "Accessibility",
        description: "Enhanced UI components with Material-UI standards.",
      },
    ],
    live: "https://simplay-recpise.netlify.app/",
    github: "https://github.com/Ahmedlmansy/SimplyRecipes",
  },
];
