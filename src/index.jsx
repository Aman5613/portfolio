import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import {
  SiExpress,
  SiLeetcode,
  SiMongodb,
  SiNodedotjs,
  SiSocketdotio,
  SiVercel,
} from "react-icons/si";
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiPython,
  DiReact,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFramer } from "react-icons/cg";
import { ImGithub } from "react-icons/im";
import { FaJava } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

export const icons_links = [
  {
    icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/in/amankumarguptabeginner/",
  },
  // {
  //   icon: IoLogoTwitter,
  //   link: "https://x.com/aman3779956",
  // },
  {
    icon: BiLogoGmail,
    link: "mailto:connect2amangupta@gmail.com?subject=Hellooo%20Aman%2C%20I%20found%20your%20portfolio!&body=Hi%20aman%2C%0D%0AI%20found%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0D%0AI'm%20%7Byour%20name%7D%2C%0D%0A%7Bwrite%20your%20message%20for%20aman%7D",
  },
  {
    icon: BsGithub,
    link: "https://github.com/Aman5613",
  },
  {
    icon: SiLeetcode,
    link: "https://leetcode.com/u/Aman_5613/",
  },
  // {
  //   icon: BsWhatsapp,
  //   link: "https://api.whatsapp.com/send?phone=918738038451",
  // },
  // {
  //   icon: BsInstagram,
  //   link: "https://instagram.com/amangupta_5613",
  // },
];

export const skills = [
  {
    id: 1,
    icon: DiJavascript,
    name: "JavaScript",
  },
  {
    id: 2,
    icon: DiReact,
    name: "React.js",
  },
  {
    id: 5,
    icon: RiTailwindCssFill,
    name: "Tailwind CSS",
  },
  {
    id: 6,
    icon: SiNodedotjs,
    name: "Node.js",
  },
  {
    id: 7,
    icon: SiExpress,
    name: "Express.js",
  },
  {
    id: 8,
    icon: SiMongodb,
    name: "MongoDB",
  },
  {
    id: 9,
    icon: TbBrandRedux,
    name: "Redux",
  },
  {
    id: 10,
    icon: FaJava,
    name: "Java",
  },
  {
    id: 11,
    icon: DiPython,
    name: "Python",
  },
  {
    id: 12,
    icon: ImGithub,
    name: "Git & GitHub",
  },
  {
    id: 13,
    icon: SiSocketdotio,
    name: "Socket.io",
  },
  {
    id: 14,
    icon: SiVercel,
    name: "Deployment",
  },
];

export const projects = [
  {
    title: "PKSM Pizza - Food Delivery Platform",
    description:
      "Scalable full-stack food delivery platform built with React.js, Node.js, Express.js, and MongoDB. Features include REST APIs, JWT authentication, role-based access control (RBAC), real-time order tracking via WebSockets, SMTP email notifications, customizable coupon systems, and secure payment integration.",
    image: "https://ik.imagekit.io/6i2qiqf2n/resume/pksm.in.png",
    link: "https://pksm.in/",
  },
  {
    title: "KVF Serverless E-commerce",
    description:
      "High-performance serverless e-commerce platform handling 800+ orders with optimized backend workflows and database design. Generated over 2 Lakh INR in revenue within the first 50 days of launch through checkout flow optimization and system performance improvements.",
    image: "https://ik.imagekit.io/6i2qiqf2n/resume/kvf.png",
    link: "https://kisaanvegetable.in/",
  },
  {
    title: "ChatGPT Clone with Global Memory",
    description:
      "AI-powered chatbot leveraging Retrieval-Augmented Generation (RAG) to maintain short-term and long-term conversation memory. Integrated Pinecone vector database with custom embeddings for efficient context retrieval and highly contextual query responses.",
    image: "https://ik.imagekit.io/6i2qiqf2n/resume/rag.png",
    link: "https://github.com/Aman5613/ChatGPT",
  },
  {
    title: "Moody - AI Song Recommender",
    description:
      "Web application that detects user facial expressions and recommends music tailored to their mood. Integrated Google Gemini-Flash-2.5 LLM to dynamically determine and categorize music genres based on facial emotion detection.",
    image: "https://ik.imagekit.io/6i2qiqf2n/resume/moody.jpg",
    link: "https://github.com/Aman5613/Moody",
  },
  {
    title: "Anjali Enterprises",
    description:
      "company website for Anjali Enterprises, a local business specializing in packaging products",
    image: "https://ik.imagekit.io/6i2qiqf2n/resume/anjalienterprises.png",
    link: "https://anjalienterprises.org/",
  },
  {
    title: "Super Bright",
    description:
      "company website for Super Bright, a local business electroplating in lighting solutions",
    image: "https://ik.imagekit.io/6i2qiqf2n/resume/superbright.png",
    link: "https://superbright.in/",
  },
  {
    title: "GitGuard-AI",
    description:
      "A automated PR reviewer that uses AI to analyze code quality, security, and best practices in GitHub repositories, providing actionable feedback and automated post comments on pull requests to enhance code quality and streamline the review process.",
    image: "https://ik.imagekit.io/6i2qiqf2n/resume/gitguard-ai.png",
    link: "https://github.com/jaspreetkaur123/GitGuard-AI",
  },
  {
    title: "Carrera - AI Resume Builder",
    description:
      "AI-powered resume builder that generates professional resumes based on user Job Descriptions and market trends.",
    image: "https://ik.imagekit.io/6i2qiqf2n/resume/carrerforge.png",
    link: "https://github.com/Aman5613/CareerForge-pro",
  },
];
