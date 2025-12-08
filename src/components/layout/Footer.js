import { cvData } from "@/data/cv";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p>© 2025 Abdullah Al Muti</p>
      <a target="_blank" className="text-[#db7602]" href="https://www.starwars.com/databank/sith">Through passion, I gain strength. Through strength, I gain power. Through power, I gain victory.</a>
      <div className="mt-2">
        <a target="_blank" href={cvData.personalInfo.links.linkedin}>LinkedIn</a> | <a target="_blank" href={cvData.personalInfo.links.github}>GitHub</a>
      </div>
    </footer>
  );
}