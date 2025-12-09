"use client";
import { motion } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Skills() {
  const categories = [
    { name: "Programming", skills: cvData.skills.programming, color: "zen-neon" },
    { name: "Backend", skills: cvData.skills.backend, color: "zen-blue" },
    { name: "Tools", skills: cvData.skills.tools, color: "zen-orange" },
  ];

  return (
    <section className="py-20 bg-zen-black relative overflow-hidden">
      <div className="zen-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="zen-title text-5xl md:text-7xl text-white mb-2">
            EQUIPMENT<br />LOADOUT
          </h2>
          <div className="h-2 w-24 bg-zen-neon" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-zen-dark border border-zen-gray p-6 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-${category.color}`} />
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider flex items-center">
                <span className={`w-3 h-3 bg-${category.color} mr-3`} />
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 bg-zen-gray/50 text-gray-300 text-sm font-mono border border-transparent hover:border-white hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative background number */}
              <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white/5 pointer-events-none select-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
