import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import IQPReport from "@/public/IQPReport.png"
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import tctImg from "@/public/tct.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BS in Computer Science and Data Science at WPI",
    location: "Worcester, MA",
    description:
      "Currently pursuing a Bachelor of Science degree in Computer Science and Data Science at Worcester Polytechnic Institute. ",
    icon: React.createElement(LuGraduationCap),
    date: "August 2021 -",
  },
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
    icon: React.createElement(LuGraduationCap),
    date: "May 2023 - August 2023",
  },
] as const;

export const projectsData = [
  {
    title: "WPI Interactive Qualifying Project",
    description:
      "Collected and analyzed data to deliver a report on how Strætó bs can integrate UN Sustainable Development Goals into their operations.",
    tags: ["Tableau, Data Collection, Research, Graphic Design"],
    imageUrl: IQPReport,
  },
  {
    title: "Team Comp Tailor",
    description:
      "A gaming software API which uses Integer Optimization with the Gurobi solver engine to determine the best possible board for the user to play.",
    tags: ["Python", "Flask", "React.js", "Next.js", "Gurobi"],
    imageUrl: tctImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Tableau",
  "Java",
  "React.js",
  "AWS",
  "SQL",
  "Gurobi",
  "PyTorch",
  "Docker",
  "Android Studio",
  "R",
  "Raspberry Pi",
] as const;
