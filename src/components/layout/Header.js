"use client";

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isPastHero, setIsPastHero] = useState(false);

  // Assume hero section height is 150px (as provided)
  const heroHeight = 150;

  // Listen for scroll changes
  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Trigger animation when scrollY exceeds hero section height
    setIsPastHero(latest > heroHeight);
  });

  return (
    <motion.header
      className="fixed w-full bg-neutral-200/50 backdrop-blur-2xl text-black py-2 px-4 z-50"
      animate={{ top: isPastHero ? 0 : 24 }} // 24px (top-6) to 0px
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="container w-7xl mx-auto flex justify-start items-center relative">
        <div className="flex justify-start items-center w-full max-w-7xl">
          <div className="relative">
            <motion.h1
              className="text-xl font-bold"
              animate={{ opacity: isPastHero ? 1 : 0 }} // Fade in when logo fades out
              initial={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            >
              Abdullah Al Muti
            </motion.h1>
            <motion.img
              src="images/aamLogoBorder.png" // Logo path as provided
              alt="Logo"
              className="absolute left-0"
              style={{
                top: '-25px', // Extend 20px above navbar
                height: '80px', // Logo height to stick out top/bottom
                width: 'auto',
              }}
              animate={{
                scale: isPastHero ? 0 : 1, // Shrink to 0
                opacity: isPastHero ? 0 : 1, // Fade out
                y: isPastHero ? 10 : 0, // Slight downward shift while shrinking
              }}
              initial={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            />
          </div>
          <nav>
            <ul className="flex ml-4 space-x-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#hobbies"
                  className="px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  Hobbies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex ml-auto space-x-4">
          <button className="px-4 py-2 bg-black text-[#ccff00] text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.5)] hover:scale-105 whitespace-nowrap border border-[#ccff00]/30">
            Download Resume
          </button>
          <button className="px-4 py-2 bg-black text-[#ccff00] text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.5)] hover:scale-105 whitespace-nowrap border border-[#ccff00]/30">
            Connect
          </button>
        </div>
      </div>
    </motion.header>
  );
}