import Image from "next/image";
import Hero from "@/components/sections/Hero";
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Hobbies from '@/components/sections/Hobbies';
import Contact from '@/components/sections/Contact';


export default function Home() {
  return (
    <main className="bg-yellow-50">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="hobbies"><Hobbies /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
