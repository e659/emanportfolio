export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  year: string;
  role: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "khatib-law",
    number: "01",
    title: "Khatib Law LLC",
    category: "Legal Platform",
    shortDescription:
      "A modern legal website designed to present practice areas, resources and client services through a polished digital experience.",

    description:
      "A production-ready legal platform built to provide a clear and professional experience for users looking for legal services. The project combines responsive UI, structured content, SEO-focused pages and reusable frontend components.",

    year: "2025",
    role: "Frontend Developer",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "REST APIs",
      "Redux Toolkit & Redux toolkit Query",
      "SEO",
    ],

    image: "/khatib-law.png",

    liveUrl: "https://www.khatiblaw.com/",
    githubUrl: "https://github.com/e659",

    overview:
      "The goal was to create a professional legal platform that communicates trust while keeping navigation simple and content easy to discover.",

    challenges: [
      "Creating a professional visual identity for a legal brand.",
      "Organizing multiple practice areas and content-heavy pages.",
      "Maintaining responsive layouts across different screen sizes.",
      "Improving SEO and page discoverability.",
    ],

    solutions: [
      "Built reusable React and Next.js components.",
      "Created consistent design patterns across the website.",
      "Implemented responsive layouts using Tailwind CSS.",
      "Structured metadata and SEO-friendly page architecture.",
      "Used animations selectively to improve the experience without hurting usability.",
    ],

    features: [
      "Practice Areas",
      "Blog System",
      "Responsive Navigation",
      "ChatBot Integration",
      "SEO Optimization",
      "Contact Experience",
      "Reusable UI Components",
    ],
  },

  {
    slug: "cook-county-tax-appeal",
    number: "02",
    title: "Cook County Tax Appeal",
    category: "Property Tax Platform",

    shortDescription:
      "A user-focused property tax platform designed around property information, calculations and conversion-oriented user flows.",

    description:
      "A responsive property tax platform focused on helping users understand property tax information and navigate complex property-related workflows through a simple interface.",

    year: "2025",
    role: "Frontend Developer",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Responsive Design",
      "Redux Toolkit & Redux toolkit Query",
      "Framer Motion",
    ],

    image: "/cook-county.png",

    liveUrl: "https://www.cookcountytaxappeal.com/",
    githubUrl: "https://github.com/e659",

    overview:
      "The application was designed to simplify property tax-related workflows and present complex information in a user-friendly way.",

    challenges: [
      "Handling property search interactions.",
      "Presenting tax-related information clearly.",
      "Creating responsive layouts for data-heavy screens.",
      "Connecting the interface with backend APIs.",
    ],

    solutions: [
      "Implemented reusable search and form components.",
      "Integrated REST APIs for property information.",
      "Built responsive layouts with Tailwind CSS.",
      "Added loading and error states for asynchronous operations.",
      "Focused on clear information hierarchy.",
    ],

    features: [
      "Property Search",
      "Property Information",
      "Tax Calculations",
      "Responsive UI",
      "Chatbot Integration",
      "Live Chat Support",
      "Authentication & User Profiles",
      "API Integration",
      "Loading & Error States",
    ],
  },

  {
    slug: "chat-application",
    number: "03",
    title: "Realtime Chat Application",
    category: "Communication Product",

    shortDescription:
      "A responsive realtime chat application featuring authentication, profiles, messaging and Firebase integration.",

    description:
      "A modern chat application built to explore realtime communication, authentication and user profile management using React and Firebase.",

    year: "2026",
    role: "Frontend Developer",

    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "Firestore",
      "Firebase Storage",
      "Tailwind CSS",
    ],

    image: "/chat-app.png",

    liveUrl: "https://my-chat-9ah91s478-emans-projects-d604a4d3.vercel.app",
    githubUrl: "https://github.com/e659/Live-Chat",

    overview:
      "The project focuses on creating a clean messaging experience while handling authentication, realtime data and user profiles.",

    challenges: [
      "Implementing realtime messaging.",
      "Managing authenticated users.",
      "Handling profile image uploads.",
      "Keeping the UI responsive across devices.",

      "for testing purposes, you can use the following credentials to log in and explore the chat application:",
      "Email:elhame@gmail.com & Password: 123456",
      "Email:emanshalapy@gmail.com & Password: 123456",
    ],

    solutions: [
      "Used Firebase Authentication for user management.",
      "Used Firestore for realtime messaging data.",
      "Integrated Firebase Storage for profile images.",
      "Created reusable React components for the chat interface.",
      "Built responsive mobile and desktop layouts.",
    ],

    features: [
      "Authentication",
      "Realtime Messaging",
      "User Profiles",
      "Profile Images",
      "Firestore",
      "Responsive Chat UI",
    ],
  },
];
