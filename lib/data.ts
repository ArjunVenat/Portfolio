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
    title: "Summer Intern at Persistent Systems",
    location: "Bridgewater, NJ",
    description:
      "Worked as a Summer Intern at Persistent Systems. Developed an application to push Identity and Access Management (IAM) data logs from AWS DynamoDB to a React-based front-end using AWS Lambda. Built a live audit report of the IAM data using jsPDF. Conducted market analysis on the cloud space and Persistent’s standing in the market, for their Cloud and Infrastructure leadership team.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2022",
  },
  {
    title: "Data Science NSF REU Student for WPI",
    location: "Worcester, MA",
    description:
      "Developed a model to simulate and analyze the market behavior of non-profit organizations (NPOs) using SWAP: a growing platform for NPOs to standardize the exchange of resources. Pioneered a credit redistribution mechanism with significant anticipated impact toward equity for future exchanges between NPOs, which led to a co-authorship position on a paper submitted to the INFORMS Operations Research Journal.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - August 2023",
  },{
    title: "Global Product Technology Summer Intern at ADP",
    location: "Worcester, MA",
    description:
      "Developed a full-stack application that enables the Site Reliability Engineering (SRE) team to dynamically control concurrency and rate limiting for all APIs for the Autopay Core payroll product. Actively deployed in production, this solution protects vital APIs for the core payroll engine from excessive use and overload, ensuring seamless payroll processing for over 500k ADP clients across North America. Tech stack is MongoDB, Apache Ignite, Java, Spring Boot, React.js, Node.js, MSAL for Azure.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - August 2024",
  },
  {
    title: "Junior Advanced Analytics Engineer at Empower Analytics, LLC.",
    location: "Worcester, MA",
    description:
      "Leading the development of an MLOps pipeline that pairs ML models and LLMs with a backend API and deploys it in the cloud infrastructure for a leading expedited shipping company in the US. This work allows for streamlined access to cutting edge pricing models, boosting the productivity of their employees. Building pipeline with Docker, GitHub Actions, AWS Elastic Kubernetes Service, and AWS Elastic Container Registry.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2024 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Fidelity Enterprise Development Group Early Career Portal (ECP)",
    description:
      "Leading 4 students in the development of a full stack application for the Talent and Acquisitions team at Fidelity to provide recommendations on future placements of interns in the firm.",
    tags: ["Angular.js", "Java", "Spring Boot", "PostgreSQL", "Oracle DB", "Power BI", "Python"],
    imageUrl: FidelityEDGECP,
  },  
  {
    title: "MTC Scheduler for WPI Math Department",
    description:
      "Pitched and secured funding for developing a full-stack application for the universitys Math Tutoring Center, which is projected to save the math department 14 hours of administrative work per semester.",
    tags: ["Python", "Flask", "React.js", "Gurobi"],
    imageUrl: MTCImg,
  },
  {
    title: "Software Engineering Project",
    description:
      "Collaboration between WPI and the hospital to build a full-stack application for hospital kiosks which is used by guests for navigation information as well as hospital staff for service requests.",
    tags: ["React.js", "Prisma ORM", "Express.js", "AWS"],
    imageUrl: BWHImg,
  }  
] as const;

export const skillsData = [
  "Python",
  "Java",
  "Spring Boot",
  "React.js",
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub Actions",
  "Express.js",
  "AWS",
  "SQL",
  "TypeScript",
  "REST APIs",
  "Flask",
  "PostgreSQL",
  "MongoDB",
  "Redis",
] as const;
