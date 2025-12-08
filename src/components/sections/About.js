"use client";
import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function AstronautModel() {
  const groupRef = useRef();
  const { scene: astroScene } = useGLTF("/astro.glb");
  const { scene: astroWireScene } = useGLTF("/astro_wire.glb");

  // Clone scenes to avoid modifying the cached versions
  const astro = astroScene.clone();
  const astroWire = astroWireScene.clone();

  useEffect(() => {
    // Apply transparent neon orange material to astro
    astro.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xff6361, // Neon orange
          transparent: true,
          opacity: 0.9,
          emissive: 0xff6b35,
          emissiveIntensity: 0.5,
        });
      }
    });

    // Apply neon blue wireframe material to astro_wire
    astroWire.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: 0x7aec00, // Neon blue
          wireframe: true,
        });
      }
    });
  }, [astro, astroWire]);

  // Rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} scale={2} position={[0, -5, 0]}>
      <primitive object={astro} />
      <primitive object={astroWire} />
    </group>
  );
}

export default function About() {
  return (
    <section className="py-20 bg-zen-black relative overflow-hidden">
      <div className="zen-container">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Header & 3D Model */}
          <div className="w-full md:w-1/3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="zen-title text-5xl md:text-7xl text-white mb-2">
                AGENT<br />PROFILE
              </h2>
              <div className="h-2 w-24 bg-zen-neon mb-6" />
              <p className="text-gray-400 text-lg leading-relaxed">
                Specialized in backend architecture and high-performance systems. Currently deployed at {cvData.experience[0].company}
              </p>
            </motion.div>

            <div className="bg-transparent border border-zen-gray p-6 rounded-lg h-[400px]">
              <div className="w-full h-[calc(100%-2rem)]">
                <Canvas
                  camera={{ position: [0, 0, 8], fov: 50 }}
                  gl={{ alpha: true }}
                  style={{ background: 'transparent' }}
                >
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    <AstronautModel />
                    <OrbitControls
                      enableZoom={false}
                      autoRotate
                      autoRotateSpeed={2}
                      minPolarAngle={Math.PI / 3}
                      maxPolarAngle={Math.PI / 1.5}
                    />
                    <EffectComposer>
                      <Bloom
                        intensity={1.5}
                        luminanceThreshold={0}
                        luminanceSmoothing={0.9}
                        radius={0.5}
                      />
                    </EffectComposer>
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-zen-neon text-zen-black flex items-center justify-center rounded mr-3 text-sm">01</span>
              MISSION HISTORY
            </h3>

            <div className="space-y-6">
              {cvData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="zen-card p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h4>
                      <p className="text-zen-neon font-mono">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0 bg-zen-gray/50 px-3 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.projects.map((project, pIndex) => (
                      <li key={pIndex} className="bg-zen-black/50 p-4 rounded border-l-2 border-zen-blue">
                        <h5 className="font-bold text-white text-sm mb-1">
                          {project.url ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-zen-neon transition-colors duration-200 underline decoration-zen-blue hover:decoration-zen-neon"
                            >
                              {project.name}
                            </a>
                          ) : (
                            project.name
                          )}
                        </h5>
                        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                          {project.details.slice(0, 2).map((detail, dIndex) => (
                            <li key={dIndex}>{detail}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {cvData.education.map((edu, index) => (
                <motion.div
                  key={`edu-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="zen-card p-6 md:p-8 border-l-4 border-l-zen-orange"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                      <p className="text-zen-orange font-mono">{edu.degree}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0 bg-zen-gray/50 px-3 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}