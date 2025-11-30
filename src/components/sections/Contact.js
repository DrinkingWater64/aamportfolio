"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, { publicKey: EMAILJS_PUBLIC_KEY })
      .then(
        (result) => {
          setStatus("TRANSMISSION SUCCESSFUL");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("TRANSMISSION FAILED: RETRY");
        }
      );
  };

  return (
    <section className="py-20 bg-zen-dark relative overflow-hidden">
      <div className="zen-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="zen-title text-5xl md:text-7xl text-white mb-6">
                COMMS<br />TERMINAL
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Ready to collaborate? Send a signal.
              </p>

              <div className="space-y-4 font-mono">
                <div className="flex items-center text-white">
                  <span className="text-zen-neon mr-4">EMAIL ::</span>
                  <a href={`mailto:${cvData.personalInfo.email}`} className="hover:text-zen-neon transition-colors">
                    {cvData.personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-zen-blue mr-4">PHONE ::</span>
                  <span>{cvData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-zen-orange mr-4">LOC ::</span>
                  <span>{cvData.personalInfo.location}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a href={cvData.personalInfo.links.linkedin} target="_blank" className="zen-btn text-sm py-2 px-6">
                  LinkedIn
                </a>
                <a href={cvData.personalInfo.links.github} target="_blank" className="px-6 py-2 border border-white text-white font-bold uppercase hover:bg-white hover:text-black transition-all">
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zen-black p-8 border border-zen-gray relative"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-zen-neon" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-zen-neon" />

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-zen-gray uppercase mb-2">Identity</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zen-dark border border-zen-gray text-white p-3 focus:border-zen-neon outline-none transition-colors"
                    placeholder="ENTER NAME"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zen-gray uppercase mb-2">Frequency</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zen-dark border border-zen-gray text-white p-3 focus:border-zen-neon outline-none transition-colors"
                    placeholder="ENTER EMAIL"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zen-gray uppercase mb-2">Transmission</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-zen-dark border border-zen-gray text-white p-3 focus:border-zen-neon outline-none transition-colors h-32"
                    placeholder="ENTER MESSAGE"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zen-neon text-zen-black font-bold uppercase py-4 hover:bg-white transition-colors tracking-widest"
                >
                  Send Signal
                </button>
              </form>

              {status && (
                <div className="mt-4 text-center font-mono text-sm text-zen-neon animate-pulse">
                  [{status}]
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
