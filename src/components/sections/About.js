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
    <section className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Title + Section Number */}
          <div className="space-y-8">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold text-black"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-8xl md:text-9xl font-bold text-black/10"
            >
              02
            </motion.div>
          </div>

          {/* Right side - Experience Cards (centered vertically & horizontally in their column) */}
          <div className="flex flex-col gap-8 justify-center">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <SpotlightCard
                  className="custom-spotlight-card p-8"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}