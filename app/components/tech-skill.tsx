import Image from "next/image";
import { techLogos } from "./tech-tag";

interface TechSkillProps {
  name: string;
}

export default function TechSkill({ name }: TechSkillProps) {
  // Default to a placeholder if the logo isn't found
  const logoSrc = techLogos[name] || "/placeholder.svg?height=80&width=80";

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
      <div className="relative w-16 h-16 mb-3">
        <Image
          src={logoSrc || "/placeholder.svg"}
          alt={`${name} logo`}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
