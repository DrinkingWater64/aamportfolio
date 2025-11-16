"use client";

import { motion } from "framer-motion";
import SpotlightCard from '../SpotlightCard';

export default function About() {

const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Led development of responsive web applications using React and TypeScript, improving user engagement by 40%.",
    },
    {
      title: "Full Stack Developer",
      company: "Innovate Solutions",
      period: "2019 - 2022",
      description: "Built and maintained full-stack applications with Node.js and MongoDB, reducing server response time by 25%.",
    },
    {
      title: "Junior Web Developer",
      company: "StartUp XYZ",
      period: "2017 - 2019",
      description: "Developed interactive UI components and collaborated on API integrations, enhancing app functionality.",
    },
  ];


  return (
    <section className="min-h-screen bg-white text-black relative overflow-hidden w-full flex items-center">

      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start z-10 relative">
        {/* Animated Title */}
        <motion.h2
          initial={{ x: '-100%'}}
          whileInView={{ x: 0}}
          viewport={{ once: true }}
          transition={{ duration: .8, ease: "easeOut" }}
          className="text-6xl font-bold text-black mb-4 text-left"
        >
          About Me
        </motion.h2>
        {/* Section Number */}
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{  duration: 0.8, ease: "easeOut" }}
          className="text-8xl font-bold text-black mb-12 text-left"
        >
          02
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-6 mb-8 md:mb-0">
          {experiences.map((exp, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </SpotlightCard>
          ))}
      </div>
      {/* Subtle background overlay */}
    </section>
  );
}