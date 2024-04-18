import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import IQPReport from "@/public/IQPReport.png"
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
    title: "Summer Intern",
    location: "Bridgewater, NJ",
    description:
      "Worked as a Summer Intern at Persistent Systems. Developed an application to push Identity and Access Management (IAM) data logs from AWS DynamoDB to a React-based front-end using AWS Lambda. Built a live audit report of the IAM data using jsPDF. Conducted market analysis on the cloud space and Persistent’s standing in the market, for their Cloud and Infrastructure leadership team.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2022",
  },
  {
    title: "Peer Learning Assistant for Math Department",
    location: "Worcester, MA",
    description:
      "Responsible for teaching discussion sections to review concepts in Discrete Math and hosting office hours as well as weekly walk-in sessions to help students with questions.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2023 - March 2023",

  },
  {
    title: "Data Science REU Student",
    location: "Worcester, MA",
    description:
      "Pioneered a credit redistribution mechanism with significant anticipated impact toward equity for future exchanges between nonprofit organizations (NPOs). Used Python to build a simulation of how the non-profits would interact in the exchange platform.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - August 2023",
  }
] as const;

export const projectsData = [
  {
    title: "Software Engineering Project",
    description:
      "Collaboration between WPI and the hospital to build a full-stack application for hospital kiosks which is used by guests for navigation information as well as hospital staff for service requests.",
    tags: ["React.js", "Prisma ORM", "Express.js", "AWS"],
    imageUrl: BWHImg,
  },
  {
    title: "MTC Scheduler for Math Department",
    description:
      "Developed a full-stack application for the university’s Math Tutoring Center, which is projected to save the math department 14 hours of administrative work per semester.",
    tags: ["Python", "Flask", "React.js", "Gurobi"],
    imageUrl: MTCImg,
  },
  {
    title: "WPI Interactive Qualifying Project",
    description:
      "Collected and analyzed data to deliver a report on how Strætó bs can integrate UN Sustainable Development Goals into their operations.",
    tags: ["Tableau, Data Collection, Research, Graphic Design"],
    imageUrl: IQPReport,
  }  
] as const;

export const skillsData = [
  "Python",
  "Java",
  "React.js",
  "AWS",
  "SQL",
  "Typescript",
  "Gurobi",
  "PyTorch",
  "Tableau",
  "REST APIs",
  "Tailwind CSS",
  "Flask",
  "Docker",
  "Android Studio",
  "R",
] as const;
