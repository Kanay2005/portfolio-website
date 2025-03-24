import Image from "next/image";

interface TechTagProps {
  name: string;
}

// Map of technology names to their logo images
export const techLogos: Record<string, string> = {
  Python: "/tech-logos/python.png",
  Rust: "/tech-logos/rust.png",
  C: "/tech-logos/c.png",
  "C#": "/tech-logos/cs.png",
  JavaScript: "/tech-logos/javascript.png",
  TypeScript: "/tech-logos/typescript.png",
  React: "/tech-logos/react.png",
  "Next.js": "/tech-logos/nextjs.png",
  Tailwind: "/tech-logos/tailwind.png",
  HTML5: "/tech-logos/html5.png",
  CSS3: "/tech-logos/css3.png",
  Bash: "/tech-logos/bash.png",
  Linux: "/tech-logos/linux.png",
  SQL: "/tech-logos/sql.png",
  PostgreSQL: "/tech-logos/postgresql.png",
  Java: "/tech-logos/java.png",
  LaTeX: "/tech-logos/latex.png",
  Git: "/tech-logos/git.png",
  Unity: "/tech-logos/unity.png",
  "MS Office Suite": "/tech-logos/office.png",
  OpenCV: "/tech-logos/opencv.png",
};

export default function TechTag({ name }: TechTagProps) {
  // Default to a placeholder if the logo isn't found
  const logoSrc = techLogos[name] || "/placeholder.svg?height=24&width=24";

  return (
    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full flex items-center gap-2">
      <div className="relative w-5 h-5">
        <Image
          src={logoSrc || "/placeholder.svg"}
          alt={`${name} logo`}
          fill
          className="object-contain"
        />
      </div>
      {name}
    </span>
  );
}
