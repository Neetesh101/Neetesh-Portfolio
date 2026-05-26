import { create } from "zustand";

export const useContentStore = create(() => ({
  header: {
  logoText: "NK",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  contactButton: "Contact Me",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ],
},

 hero: {
  heroGreeting: "Hi, I am",
  heroName: "Neetesh Katiyar",
  heroTitle: "Frontend Engineer • React.js • Next.js • TypeScript",
  seoDescription:
    "Neetesh Katiyar is a Frontend Engineer with 2.5+ years of experience in React.js, Next.js, TypeScript, Redux Toolkit, API Integration, and scalable admin dashboard development.",
},

highlight: {
  aboutTitle: "Professional Summary",
  aboutDescriptionShort:
    "Frontend Engineer with 2.5+ years of experience building scalable service platforms and admin dashboards using React.js, Next.js, and TypeScript.",

  aboutDescriptionLong:
    "Results-driven Frontend Engineer with 2.5+ years of experience developing production-grade web applications, admin dashboards, and scalable frontend architectures. Skilled in React.js, Next.js, TypeScript, Redux Toolkit, API integration, and performance optimization. Experienced in building reusable component systems, integrating third-party APIs, and improving user experience through optimized frontend engineering practices.",
},

  buttons: {
    readMore: "Read More",
    readLess: "Read Less",
  },

  watermarkWord: "NK",

socialLinks: [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/neeteshkatiyar",
    icon: "/social/linkedin.svg",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Neetesh101",
    icon: "/social/github.svg",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    href: "https://leetcode.com/u/Ankyy1996/",
    icon: "/social/leetcode.svg",
  },
  {
    id: "mail",
    label: "Email",
    href: "mailto:neeteshkatiyar101@gmail.com",
    icon: "/social/email.svg",
  },
],

 about: {
  title: "ABOUT ME",
  subtitle:
    "Passionate about building scalable, high-performance frontend applications and modern user experiences.",

  sections: [
    {
      id: 1,
      heading: "Frontend Engineering",
      description:
        "Building scalable and production-grade web applications using React.js, Next.js, and TypeScript.",
      icons: "/about/coding.png",
    },

    {
      id: 2,
      heading: "Reusable Architecture",
      description:
        "Designing reusable UI components, scalable frontend structures, and maintainable application workflows.",
      icons: "/about/development.png",
    },

    {
      id: 3,
      heading: "Performance Optimization",
      description:
        "Optimizing frontend performance using lazy loading, code splitting, efficient rendering, and API handling.",
      icons: "/about/UI.png",
    },
  ],
},
  skills: {
   usingNow: [
  { id: 1, label: "HTML5", icon: "/skills/HTML5.svg" },
  { id: 2, label: "CSS3", icon: "/skills/CSS3.svg" },
  { id: 3, label: "JavaScript", icon: "/skills/JavaScript.svg" },
  { id: 4, label: "TypeScript", icon: "/skills/TypeScript.svg" },
  { id: 5, label: "React.js", icon: "/skills/React.svg" },
  { id: 6, label: "Next.js", icon: "/skills/next.svg" },
  { id: 7, label: "Redux Toolkit", icon: "/skills/Redux.svg" },
  { id: 8, label: "Tailwind CSS", icon: "/skills/Tailwind CSS.svg" },
],
     learning: [
  { id: 9, label: "Node.js", icon: "/skills/Node.js.svg" },
  { id: 10, label: "Express.js", icon: "/skills/Node.js.svg" },
  { id: 11, label: "MongoDB", icon: "/skills/MongoDB.svg" },
  { id: 12, label: "REST APIs", icon: "/skills/api.svg" },
  { id: 13, label: "Shadcn/UI", icon: "/skills/shadcn.svg" },
],

    otherSkills: [
      { id: 14, label: "Next.js", icon: "/skills/next.svg" },
      { id: 15, label: "ESLint", icon: "/skills/ESLint.svg" },
      { id: 16, label: "Webpack", icon: "/skills/Webpack.svg" },
      { id: 17, label: "Vite", icon: "/skills/Vite.svg" },
      {
        id: 18,
        label: "VS Code",
        icon: "/skills/Visual Studio Code (VS Code).svg",
      },
      { id: 19, label: "Babel", icon: "/skills/Babel.svg" },
      { id: 20, label: "Jest", icon: "/skills/Jest.svg" },
      { id: 21, label: "AngularJS", icon: "/skills/AngularJS.svg" },
    ],
    rotationSkills:[
      { id: 1, label: "HTML5", icon: "/skills/HTML5.svg" },
      { id: 2, label: "JavaScript", icon: "/skills/JavaScript.svg" },
      { id: 3, label: "React", icon: "/skills/React.svg" },
      { id: 4, label: "Next.js", icon: "/skills/next.svg" },
      { id: 5, label: "Node.js", icon: "/skills/Node.js.svg" },
      {
        id: 6,
        label: "VS Code",
        icon: "/skills/Visual Studio Code (VS Code).svg",
      },
    ]
  },
  projects: [
  {
  id: 1,
  name: "BBP Platform",
  description:
    "Architected core modules of a scalable service platform connecting users with nearby professionals. Built reusable UI systems and optimized API-driven workflows using Redux Toolkit.",
  
  tech: [
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "REST APIs",
  ],

  github: "",
  liveLink: "https://www.bbp.app/",
},

    {
  id: 2,
  name: "BigSports Admin Dashboard",

  description:
    "Built and maintained a production-level admin dashboard for managing turf schedules, cancellations, payment workflows, and operational tracking.",

  tech: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs",
  ],

  liveLink: "https://admin.bigsports.com.ar/",
},
    {
      id: 6,
      name: "Portfolio Website",
      description:
        "Built a responsive portfolio website using Next.js, showcasing projects and skills. Implemented dark mode support and optimized performance for fast loading.",
      tech: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        
      ],
      mainImage: "/Projects/Portfolio/logo.png",
      logo: "/Projects/Portfolio/logo.png",
      images: [
        { id: 1, url: "/Projects/Portfolio/1.png" },
        { id: 2, url: "/Projects/Portfolio/2.png" },
        { id: 3, url: "/Projects/Portfolio/3.png" },
        { id: 4, url: "/Projects/Portfolio/4.png" },
        { id: 5, url: "/Projects/Portfolio/5.png" },
        { 
          id: 6, url: "/Projects/Portfolio/6.png"
        }

      ],
      liveLink: "https://ayushjaiswal.vercel.app/",
      github:"https://github.com/ayush42837272-eng/Portfolio-Ayush"
    },
  ],
}));
