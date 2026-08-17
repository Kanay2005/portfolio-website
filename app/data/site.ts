export const site = {
  name: "Kanay Gupta",
  role: "Computer Science Student & Software Engineering Intern",
  // Used by Next to resolve Open Graph image URLs to absolute ones.
  url: "https://kanay2005.github.io/portfolio-website",
  description:
    "Honours Computer Science student at UNSW, software engineering intern at ResMed, and researcher working on satire explanation with language models.",
  intro:
    "I am an Honours Computer Science student at UNSW, graduating in late 2026. I am currently a software engineering intern at ResMed, working across a Java API, an Angular portal, and Python services on a cloud-hosted device simulation platform, and an undergraduate researcher writing my thesis on whether large language models can explain satire rather than merely classify it. My project experience ranges from fine-tuning language models with PyTorch to architecting performance-critical systems from the ground up in Rust.",
  email: "kanayg@icloud.com",
  location: "Sydney, Australia",
  linkedin: "https://linkedin.com/in/kanay-gupta",
  github: "https://github.com/Kanay2005",
  resume: "/Resume.pdf",
  profileImage: "/profilePicture.webp",
} as const;

// Order matters: this drives the navbar, and it must match the section order in
// page.tsx for scroll-spy to resolve overlapping sections correctly.
export const navItems = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
] as const;
