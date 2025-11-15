import Image from "next/image";
import Hero from "@/components/sections/Hero";
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Hobbies from '@/components/sections/Hobbies';
import Contact from '@/components/sections/Contact';


export default function Home() {
  return (
    <>
    <title>Abdullah Al Muti - Portfolio</title>
        <meta name="description" content="Portfolio of Abdullah Al Muti, a Software showcasing skills, projects, and hobbies with a fun game-inspired vibe." />
        <meta name="keywords" content="portfolio, software engineer, backend developer, game developer, dotnet, c# develpoer, c++ developer, projects, hobbyist, art, 3D modeling, game desing" />
        <meta name="robots" content="index, follow" />
    <main className="bg-yellow-50">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="hobbies"><Hobbies /></section>
      <section id="contact"><Contact /></section>
    </main>
    </>
  );
}
