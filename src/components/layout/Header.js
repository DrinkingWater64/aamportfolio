"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Assume hero section height is 150px (as provided)
  const heroHeight = 150;

  // Listen for scroll changes
  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Trigger animation when scrollY exceeds hero section height
    setIsPastHero(latest > heroHeight);
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="fixed w-full bg-neutral-200/50 backdrop-blur-2xl text-black py-2 px-4 z-50"
      animate={{ top: isPastHero ? 0 : 24 }} // 24px (top-6) to 0px
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="container w-full max-w-7xl mx-auto flex justify-between items-center relative">
        <div className="flex justify-start items-center">
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
          {/* Desktop Navigation */}
          <nav className="hidden md:block ml-8">
            <ul className="flex space-x-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="px-3 py-1.5 transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="px-3 py-1.5 transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="px-3 py-1.5 transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="px-3 py-1.5 transition-all duration-300 hover:bg-black hover:text-[#ccff00] hover:shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex ml-auto space-x-4">
          <a
            href="/AbdullahAlMuti.pdf"
            download="AbdullahAlMuti.pdf"
            className="px-4 py-2 bg-black text-[#ccff00] text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.5)] hover:scale-105 whitespace-nowrap border border-[#ccff00]/30 inline-flex items-center gap-2 text-center"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-black text-[#ccff00] text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.5)] hover:scale-105 whitespace-nowrap border border-[#ccff00]/30 inline-block text-center"
          >
            Connect
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-4 right-4 md:hidden bg-neutral-100/95 backdrop-blur-xl overflow-hidden shadow-lg mt-2 rounded-lg"
          >
            <nav className="flex flex-col p-4 space-y-4">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-black transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-black transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-black transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-black transition-colors"
              >
                Projects
              </a>
              <hr className="border-gray-300" />
              <div className="flex flex-col space-y-3">
                <a
                  href="/AbdullahAlMuti.pdf"
                  download="AbdullahAlMuti.pdf"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 bg-black text-[#ccff00] text-sm font-semibold transition-all duration-300 whitespace-nowrap border border-[#ccff00]/30 flex items-center justify-center gap-2 rounded text-center"
                >
                  Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 bg-black text-[#ccff00] text-sm font-semibold transition-all duration-300 whitespace-nowrap border border-[#ccff00]/30 block text-center rounded"
                >
                  Connect
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}