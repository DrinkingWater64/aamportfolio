"use client";
import { motion } from "framer-motion";
import Particles from "../Particles";


export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-300 flex items-center justify-center text-white">
      
      {/* style={{ width: '100%', height: '600px', position: 'relative' }} */}
  <div className="absolute inset-0 z-0 w-full h-full">
  <Particles
    particleColors={['#000000']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={200}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 pointer-events-none"
      >
        <h1 className="text-5xl font-bold mb-4">Level Up: YourName</h1>
        <p className="text-xl mb-6">Crafting digital worlds as a [Your Role]</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-orange-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
        >
          Start Quest
        </motion.button>
      </motion.div>
    </section>
  );
}
