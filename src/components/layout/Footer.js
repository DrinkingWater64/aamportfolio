import { cvData } from "@/data/cv";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 px-4">
      <p>© 2025 Abdullah Al Muti</p>
      <a target="_blank" className="text-zen-orange" href="https://www.starwars.com/databank/sith">Through passion, I gain strength. Through strength, I gain power. Through power, I gain victory.</a>
      <div className="mt-2">
        <a target="_blank" href={cvData.personalInfo.links.linkedin} className="px-2">LinkedIn</a> | <a target="_blank" href={cvData.personalInfo.links.github} className="px-2">GitHub</a>
      </div>
    </footer>
  );
}