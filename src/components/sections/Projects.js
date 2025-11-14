"use client";

import { motion } from "framer-motion";
import projectsData from '../../data/projects.json';

export default function Projects() {
    return (
    <section className="py-16 bg-gray-100 text-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8 text-yellow-500"
      >
        Boss Fights Conquered
      </motion.h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-300 p-4 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{duration: 0.8 }}
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex space-x-2 mt-2">
                {project.tech.map((tech, index) => (
                    <span key={index} className="bg-gray-400 text-white px-2 py-1 rounded">
                    {tech}
                    </span>
                ))}
            </div>
            <a href={project.link} className="text-orange-500 mt-2 inline-block">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
