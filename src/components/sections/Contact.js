"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-500">
        Join the Party
      </h2>
      <div className="container mx-auto px-4 text-center">
        <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-2 bg-gray-700 text-white rounded"
            rows="4"
            required
          />

          <button
            type="submit"
            className="bg-dark-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-light-green">{status}</p>}

        <div className="mt-6">
          <a href="#" className="text-light-green">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="#" className="text-light-green">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
