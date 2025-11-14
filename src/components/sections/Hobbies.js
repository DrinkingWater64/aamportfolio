"use client";

import { motion } from 'framer-motion';

export default function Hobbies() {
  return (
    <section className="py-16 bg-white text-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8 text-orange-500"
      >
        Off-Duty Adventures
      </motion.h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Indie Gaming', 'Sketching Mechs'].map((hobby, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 p-4 rounded-lg text-center"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {hobby}
          </motion.div>
        ))}
      </div>
    </section>
  );
}