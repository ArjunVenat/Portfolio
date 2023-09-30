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
        I am an undergraduate student at{" "}<span className="font-medium">
        Worcester Polytechnic Institute</span> studying{" "}<span className="font-medium">
        Computer Science </span> and <span className="font-medium"> Data Science</span>.
        I am interested in the intersection between Mathematics and Software. These interests include <span className="underline">Machine Learning</span> and <span className="underline">Interactive Optimization</span>, which uses Human-Computer Interaction to enhance the flexibility of an optimization model. 
        My favorite part of programming is building a unique project from the ground up and watching it come to life.
        My core stack is{" "} <span className="font-medium"> Python, Flask, React, Next.js, and AWS. </span>
        {" "}<span> </span> I am currently looking for a{" "}
        <span className="font-medium">summer internship</span> as a software
        developer.
      </p>

      <p>
        When I am not coding, I enjoy studying photography, 
        watching movies, and playing volleyball.
      </p>
    </motion.section>
  );
}
