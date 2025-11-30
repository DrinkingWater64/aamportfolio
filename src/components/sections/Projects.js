"use client";
import { motion } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Projects() {
  return (
    <section className="py-20 bg-zen-dark relative overflow-hidden">
      <div className="zen-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="zen-title text-5xl md:text-7xl text-white mb-4">
            MISSION<br />ARCHIVE
          </h2>
          <div className="h-1 w-32 bg-zen-neon mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cvData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="zen-card group"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-zen-neon transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs font-mono text-zen-gray border border-zen-gray px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="h-px w-full bg-zen-gray/50" />
                  <ul className="text-sm text-gray-500 space-y-2">
                    {project.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start">
                        <span className="text-zen-neon mr-2">►</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zen-gray/30 flex justify-end">
                  <button className="text-sm font-bold text-zen-neon uppercase tracking-wider hover:text-white transition-colors">
                    View Details &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
