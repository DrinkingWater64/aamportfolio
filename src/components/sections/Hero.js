"use client";
import { motion } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(204,255,0,0.1)_50%,transparent_52%)] bg-[length:20px_20px]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-zen-neon/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-zen-blue/20 rounded-full blur-[100px]" />
      </div>

      <div className="zen-container relative z-10 w-full">
        <div className="flex flex-col items-start max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1 bg-zen-neon text-zen-black font-bold uppercase tracking-widest text-sm skew-x-[-10deg]">
              System Online
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="zen-title text-6xl md:text-8xl lg:text-9xl mb-2 text-white glitch-text"
            data-text={cvData.personalInfo.name}
          >
            {cvData.personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-zen-light-gray mb-8 font-mono border-l-4 border-zen-neon pl-4"
          >
            {cvData.experience[0].role} <span className="text-zen-neon">{"//"}</span> {cvData.experience[0].company}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <a href="#projects" className="zen-btn inline-block">
              Initiate Mission
            </a>
            <a href="#contact" className="px-8 py-3 border border-zen-gray text-white font-bold uppercase tracking-wider hover:bg-zen-gray transition-all duration-300" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}>
              Contact Agent
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="flex flex-col items-end space-y-2 text-zen-neon font-mono text-xs">
          <div>COORD: 23.8103° N, 90.4125° E</div>
          <div>STATUS: ACTIVE</div>
          <div>PING: 12ms</div>
        </div>
      </div>
    </section>
  );
}
