"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a Software Engineer at {" "}<span className="font-medium">
        ADP </span> with a background in {" "}<span className="font-medium">
        Computer Science </span> and <span className="font-medium"> Data Science</span>.
        I'm drawn to the intersection of mathematics and software engineering, with a particular interest in <span className="font-medium">system design</span> and building reliable, scalable backend infrastructure. 
        My favorite part of engineering is architecting a solution from the ground up — thinking through the tradeoffs, designing for scale, and watching a well-structured system come to life.
        My core stack is{" "} <span className="font-medium"> Python, Go, Node.js, React.js, PostgreSQL, and AWS. </span>
      </p>

      <p>
        When I am not coding, I enjoy homelabbing, studying photography, 
        watching movies, and playing pickleball.
      </p>
    </motion.section>
  );
}
