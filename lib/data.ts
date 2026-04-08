import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import FidelityEDGECP from "@/public/FidelityEDGECP.png"
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import tctImg from "@/public/tct.png";
import BWHImg from "@/public/BWHwebsite.png"
import MTCImg from "@/public/MTCPage.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer at ADP",
    location: "New York City, NY",
    description:
      "Developing features for the Lyric payroll platform in Go and TypeScript across multiple repositories responsible for processing payroll. Built a feature allowing clients to pay employees at multiple frequencies within a single pay group. Resolved 100+ critical security vulnerabilities identified by Snyk across 4 backend services, including Path Traversal, Server Side Request Forgery, and Cross-Site Scripting.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2025 - Present",
  },
  {
    title: "Junior Advanced Analytics Engineer at Empower Analytics, LLC.",
    location: "Worcester, MA",
    description:
      "Designed and deployed a production-grade MLOps pipeline integrating ML models and LLMs, and a Kubernetes ETL workflow with a backend API on AWS for a leading US expedited shipping company. Engineered pipeline using Docker, GitHub Actions, AWS EKS, and AWS ECR with automated, reproducible ETL and model deployments. Implemented industry-standard security best practices including HTTPS and bcrypt password hashing.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2024 - March 2025",
  },
  {
    title: "Global Product Technology Summer Intern at ADP",
    location: "Roseland, NJ",
    description:
      "Developed a full-stack application enabling the Site Reliability Engineering team to dynamically control concurrency and rate limiting for all APIs in the Autopay Core payroll product. Actively deployed in production, protecting vital APIs from excessive load and ensuring seamless payroll processing for over 500k ADP clients across North America. Tech stack: MongoDB, Apache Ignite, Java, Spring Boot, React.js, Node.js, MSAL for Azure.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - August 2024",
  },
  {
    title: "Data Science NSF REU Student for WPI",
    location: "Worcester, MA",
    description:
      "Developed a model to simulate and analyze the market behavior of non-profit organizations using SWAP, a growing platform for NPOs to standardize resource exchange. Pioneered a credit redistribution mechanism with significant anticipated impact toward equity in future exchanges, leading to a co-authorship position on a paper submitted to the INFORMS Operations Research Journal.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - August 2023",
  },
  {
    title: "Summer Intern at Persistent Systems",
    location: "Bridgewater, NJ",
    description:
      "Developed an application to push Identity and Access Management (IAM) data logs from AWS DynamoDB to a React-based front-end using AWS Lambda. Built a live audit report of IAM data using jsPDF. Conducted market analysis on the cloud space and Persistent's standing for their Cloud and Infrastructure leadership team.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2022",
  },
] as const;

export const projectsData = [
  {
    title: "MTC Scheduler for WPI Math Department",
    description:
      "Pitched and secured funding for an end-to-end scheduling application for the university's Math Tutoring Center. Built a preference-based matching algorithm to schedule TA tutoring shifts, projected to save the math department 14 hours of administrative work per semester.",
    tags: ["Python", "Flask", "React.js", "Node.js", "Gurobi"],
    imageUrl: MTCImg,
  },
  {
    title: "Fidelity Investments — Early Career Portal",
    description:
      "Led 4 engineers in building a full-stack application for Fidelity's University Talent team to recommend intern-to-manager assignments based on historical conversion rate data. Leveraged integer optimization modeling to maximize expected intern-to-full-time conversion.",
    tags: ["Angular", "Python", "Flask", "CVXPY", "Node.js", "PostgreSQL"],
    imageUrl: FidelityEDGECP,
  },
  {
    title: "Brigham & Women's Hospital Kiosk Application",
    description:
      "Collaborated with WPI and Brigham & Women's Hospital to build a full-stack kiosk application used by guests for navigation and hospital staff for service requests.",
    tags: ["React.js", "Prisma ORM", "Express.js", "AWS"],
    imageUrl: BWHImg,
  },
] as const;

export const skillsData = [
  "Go",
  "Python",
  "TypeScript",
  "Java",
  "SQL",
  "React.js",
  "Spring Boot",
  "Express.js",
  "Flask",
  "REST APIs",
  "Prisma ORM",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Apache Ignite",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Git",
] as const;
