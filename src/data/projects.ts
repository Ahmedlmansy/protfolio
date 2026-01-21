export const projects = [
  {
    title: "Edu Master",
    category: "Web Applications",
    version: "v2.0",
    tags: ["Frontend"],
    description:
      "An educational platform with a powerful admin dashboard, featuring exam question management and a smooth user experience for exam creation.",
    technologies: [
      { name: "React 19", color: "#61DAFB" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "Tailwind CSS", color: "#38B2AC" },
      { name: "Framer Motion", color: "#E91E63" },
      { name: "Hero UI", color: "#000000" },
    ],
    mainImage: "https://696f7b7876634d918b86f661.imgix.net/HomeEduMaster.png",
    overview: {
      challenge:
        "The primary challenge was building a flexible exam management system that supports multiple question types while maintaining high performance.",
      solution:
        "Implemented a modular question management system and optimized the UI with Framer Motion for smooth transitions and interactive elements.",
      approach:
        "Focused on a user-centric design for the admin dashboard to simplify complex tasks like exam creation and question organization.",
    },
    gallery: [
      { title: "Admin Add Questions", image: "https://696f7b7876634d918b86f661.imgix.net/AdminAddQ.png" },
      { title: "All Questions", image: "https://696f7b7876634d918b86f661.imgix.net/AllQu.png" },
      { title: "Register and Login ", image: "https://696f7b7876634d918b86f661.imgix.net/RegisterEdu.png" },
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
    liveDemo: "https://edumaster-mu.vercel.app/",
    sourceCode: "https://github.com/Ahmedlmansy/edumaster",
  },
  {
    title: "Rawaah Perfumes",
    category: "E-commerce",
    version: "v1.0",
    tags: ["Fullstack"],
    description:
      "A full-featured e-commerce platform for perfumes, featuring product discovery, advanced filtering, and a secure admin dashboard.",
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#38B2AC" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "Supabase", color: "#3ECF8E" },
    ],
    mainImage: "https://696f7b7876634d918b86f661.imgix.net/rawaahMain.png",
    overview: {
      challenge:
        "Building a scalable e-commerce architecture that handles product discovery, filtering, and secure checkout flows efficiently.",
      solution:
        "Leveraged Next.js for server-side rendering and Supabase for a secure, real-time database and authentication system.",
      approach:
        "Adopted a mobile-first approach to ensure a seamless shopping experience across all devices.",
    },
    gallery: [
      { title: "Dashboard Rawaah", image: "https://696f7b7876634d918b86f661.imgix.net/dashboradR.png" },
      { title: "Product Management", image: "https://696f7b7876634d918b86f661.imgix.net/productManagemant.png" },
      { title: "Order Management", image: "https://696f7b7876634d918b86f661.imgix.net/orderManagement.png" },
      { title: "Login page", image: "https://696f7b7876634d918b86f661.imgix.net/rawaah.png" },
      { title: "Product Details", image: "https://696f7b7876634d918b86f661.imgix.net/productDetails.png" },
    ],
    features: [
      {
        title: "Product Discovery",
        description: "Advanced filtering and search for finding perfumes easily.",
      },
      {
        title: "Admin Dashboard",
        description: "Role-based access control for managing products and orders.",
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
    liveDemo: "https://rawaah-perfumes-dj1d.vercel.app/",
    sourceCode: "https://github.com/Ahmedlmansy/Rawaah_perfumes",
  },
  {
    title: "Bayan Dashboard",
    category: "Web Applications",
    version: "v1.0",
    tags: ["Frontend", "Analytics"],
    description:
      "A comprehensive analytics dashboard with multi-language support, real-time data visualization, and geographic mapping.",
    technologies: [
      { name: "Next.js 14", color: "#000000" },
      { name: "React 18", color: "#61DAFB" },
      { name: "Material-UI", color: "#0081CB" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "Mapbox GL", color: "#4264FB" },
    ],
    mainImage: "https://696f7b7876634d918b86f661.imgix.net/mainBayan.png",
    overview: {
      challenge:
        "Visualizing complex datasets in real-time while supporting both Arabic and English languages with RTL/LTR layouts.",
      solution:
        "Integrated multiple chart libraries and i18next for localization, with Firebase for real-time data synchronization.",
      approach:
        "Designed a modular dashboard architecture that allows for easy integration of new data sources and visualization types.",
    },
    gallery: [
      { title: "Finance Dashboard", image: "https://696f7b7876634d918b86f661.imgix.net/Finance.png" },
      { title: "CRM Dashboard", image: "https://696f7b7876634d918b86f661.imgix.net/CRM.png" },
      { title: "Login Page", image: "https://696f7b7876634d918b86f661.imgix.net/loginBayan.png" },
    ],
    features: [
      {
        title: "Multi-language",
        description: "Full support for Arabic and English with RTL/LTR layouts.",
      },
      {
        title: "Data Visualization",
        description: "Interactive charts and geographic maps for data insights.",
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
    liveDemo: "https://bayan-self.vercel.app",
    sourceCode: "https://github.com/Ahmedlmansy/Bayan",
  },
  {
    title: "Basket Ecommerce",
    category: "E-commerce",
    version: "v1.0",
    tags: ["Frontend"],
    description:
      "A modern e-commerce application focused on product listing, filtering, and a seamless user experience.",
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Vite", color: "#646CFF" },
      { name: "React Router", color: "#CA4245" },
      { name: "Axios", color: "#5A29E4" },
      { name: "Tailwind CSS", color: "#38B2AC" },
    ],
    mainImage: "https://696f7b7876634d918b86f661.imgix.net/mainBasket.png",
    overview: {
      challenge:
        "Creating a fast and responsive product catalog that integrates smoothly with REST APIs.",
      solution:
        "Used Vite for optimized builds and Axios for efficient API communication and data fetching.",
      approach:
        "Focused on clean UI components and intuitive navigation to enhance the shopping experience.",
    },
    gallery: [
      { title: "Shop Page", image: "https://696f7b7876634d918b86f661.imgix.net/shopPage.png" },
      { title: "Product Details", image: "https://696f7b7876634d918b86f661.imgix.net/productDetailsBas.png" },
      { title: "Filter Options", image: "https://696f7b7876634d918b86f661.imgix.net/filterBas.png" },
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
    liveDemo: "https://basket-ecommerce-iota.vercel.app/",
    sourceCode: "https://github.com/Ahmedlmansy/basket-ecommerce",
  },
  {
    title: "Simply Recipes",
    category: "Web Applications",
    version: "v1.0",
    tags: ["Frontend"],
    description:
      "A dynamic recipe application converted from static HTML to a modern React architecture with real-time API integration.",
    technologies: [
      { name: "React 19", color: "#61DAFB" },
      { name: "Vite", color: "#646CFF" },
      { name: "Material-UI", color: "#0081CB" },
      { name: "Axios", color: "#5A29E4" },
      { name: "React Router", color: "#CA4245" },
    ],
    mainImage: "https://696f7b7876634d918b86f661.imgix.net/mainSi.png",
    overview: {
      challenge:
        "Migrating a legacy static site to a modern React framework while improving accessibility and performance.",
      solution:
        "Refactored the codebase to use functional components and integrated Material-UI for a modern, accessible UI.",
      approach:
        "Prioritized developer experience with Vite and user experience with client-side routing.",
    },
    gallery: [
      { title: "Dish Type", image: "https://696f7b7876634d918b86f661.imgix.net/dishType.png" },
      { title: "Tags Page", image: "https://696f7b7876634d918b86f661.imgix.net/tagsPage.png" },
      { title: "Contact Page", image: "https://696f7b7876634d918b86f661.imgix.net/contactSi.png" },
      { title: "Saved Recipes", image: "https://696f7b7876634d918b86f661.imgix.net/savedRecipes.png" },
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
    liveDemo: "https://simplay-recpise.netlify.app/",
    sourceCode: "https://github.com/Ahmedlmansy/SimplyRecipes",
  },
];