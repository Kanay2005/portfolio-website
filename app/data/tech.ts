// Every technology that has a logo. Keying project tags and the skills grid off
// this map means a misspelled name is a type error rather than a missing image.
export const techLogos = {
  Python: "/tech-logos/python.webp",
  Rust: "/tech-logos/rust.webp",
  C: "/tech-logos/c.webp",
  "C#": "/tech-logos/cs.webp",
  JavaScript: "/tech-logos/javascript.webp",
  TypeScript: "/tech-logos/typescript.webp",
  React: "/tech-logos/react.webp",
  "Next.js": "/tech-logos/nextjs.webp",
  Tailwind: "/tech-logos/tailwind.webp",
  HTML5: "/tech-logos/html5.webp",
  CSS3: "/tech-logos/css3.webp",
  Bash: "/tech-logos/bash.webp",
  Linux: "/tech-logos/linux.webp",
  SQL: "/tech-logos/sql.webp",
  PostgreSQL: "/tech-logos/postgresql.webp",
  Java: "/tech-logos/java.webp",
  LaTeX: "/tech-logos/latex.webp",
  Git: "/tech-logos/git.webp",
  Unity: "/tech-logos/unity.webp",
  "MS Office Suite": "/tech-logos/office.webp",
  OpenCV: "/tech-logos/opencv.webp",
} as const;

export type TechName = keyof typeof techLogos;

// Order shown in the skills grid.
export const skills: TechName[] = [
  "Python",
  "Rust",
  "C",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "HTML5",
  "CSS3",
  "Bash",
  "Linux",
  "SQL",
  "PostgreSQL",
  "Java",
  "LaTeX",
  "Git",
  "Unity",
  "MS Office Suite",
];
