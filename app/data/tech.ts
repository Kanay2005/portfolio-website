// Every technology the site can name. Project tags, experience tags and the
// skills grid are all keyed off this map, so a misspelled name is a type error
// rather than a missing image.
//
// A `null` logo renders a monogram tile instead — used where no usable brand
// mark exists. Logos under tech-logos/*.svg come from Simple Icons (CC0).
export const techLogos = {
  // Languages
  Python: "/tech-logos/python.webp",
  Java: "/tech-logos/java.webp",
  TypeScript: "/tech-logos/typescript.webp",
  JavaScript: "/tech-logos/javascript.webp",
  Rust: "/tech-logos/rust.webp",
  "C#": "/tech-logos/cs.webp",
  C: "/tech-logos/c.webp",
  SQL: "/tech-logos/sql.webp",
  HTML5: "/tech-logos/html5.webp",
  CSS3: "/tech-logos/css3.webp",

  // Frameworks and libraries
  PyTorch: "/tech-logos/pytorch.svg",
  "Hugging Face": "/tech-logos/huggingface.svg",
  "scikit-learn": "/tech-logos/scikit-learn.svg",
  pandas: "/tech-logos/pandas.svg",
  Angular: "/tech-logos/angular.svg",
  React: "/tech-logos/react.webp",
  "Next.js": "/tech-logos/nextjs.webp",
  "Node.js": "/tech-logos/nodejs.svg",
  Tailwind: "/tech-logos/tailwind.webp",
  OpenCV: "/tech-logos/opencv.webp",

  // Tools and platforms
  AWS: null,
  Terraform: "/tech-logos/terraform.svg",
  Docker: "/tech-logos/docker.svg",
  "GitHub Actions": "/tech-logos/github-actions.svg",
  Git: "/tech-logos/git.webp",
  PostgreSQL: "/tech-logos/postgresql.webp",
  Linux: "/tech-logos/linux.webp",
  Bash: "/tech-logos/bash.webp",
  Jira: "/tech-logos/jira.svg",
  LaTeX: "/tech-logos/latex.webp",
  Unity: "/tech-logos/unity.webp",
} as const;

export type TechName = keyof typeof techLogos;

export interface SkillGroup {
  title: string;
  skills: TechName[];
}

// Grouped the way the resume groups them — a flat grid of 30 tiles is a wall.
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "Rust",
      "C#",
      "C",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frameworks and Libraries",
    skills: [
      "PyTorch",
      "Hugging Face",
      "scikit-learn",
      "pandas",
      "Angular",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind",
      "OpenCV",
    ],
  },
  {
    title: "Tools and Platforms",
    skills: [
      "AWS",
      "Terraform",
      "Docker",
      "GitHub Actions",
      "Git",
      "PostgreSQL",
      "Linux",
      "Bash",
      "Jira",
      "LaTeX",
      "Unity",
    ],
  },
];

/** Initials shown when a technology has no logo. */
export function monogram(name: TechName): string {
  const words = name.split(/[\s.]+/).filter(Boolean);
  return words.length > 1
    ? words
        .map((w) => w[0])
        .join("")
        .toUpperCase()
    : name.slice(0, 3).toUpperCase();
}
