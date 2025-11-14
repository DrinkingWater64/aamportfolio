"use client";

import { motion } from "framer-motion";

export default function About() {
return (
    <section className="py-16 bg-gray-100 text-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8 text-dark-red"
      >
        My Adventure Log
        </motion.h2>
            <div className="container mx-auto px-4">
        <motion.div
          className="overflow-x-auto whitespace-nowrap py-4"
          initial={{ x: '100%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
            <div className="inline-flex space-x-8">
            {['2018: First Code Quest', '2020: Level Up - React', '2023: Next.js Mastery'].map((milestone, index) => (
              <motion.div
                key={index}
                className="bg-gray-300 p-4 rounded-lg inline-block"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                {milestone}
              </motion.div>
            ))}
        </div>
        </motion.div>
        <p className="mt-6 text-center">
          Gamer-turned-dev, conquering bugs since [Year]. Passionate about [Your Role].
        </p>
      </div>
    </section>
  );
}