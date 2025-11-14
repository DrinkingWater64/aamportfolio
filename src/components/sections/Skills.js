"use client";

import { motion } from "framer-motion";

export default function ret() {
    return (
        <section className="py-16 bg-white text-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8 text-light-green"
      >
        Power-Ups Unlocked
      </motion.h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {['React', 'Next.js', 'Tailwind'].map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 p-6 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
    );
};
