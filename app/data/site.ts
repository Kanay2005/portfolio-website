export const site = {
  name: "Kanay Gupta",
  role: "Computer Science Student",
  // Used by Next to resolve Open Graph image URLs to absolute ones.
  url: "https://kanay2005.github.io/portfolio-website",
  description:
    "Computer Science student at UNSW building AI tools, language-model pipelines, and performance-critical systems in Rust.",
  intro:
    "I am currently a university student studying at UNSW expected to graduate in late 2026. My project experience ranges from developing AI-powered tools and fine-tuning language models with PyTorch to architecting performance-critical systems from the ground up in Rust. Driven by a desire to tackle complex challenges, I am eager to apply my broad skill set to create impactful solutions.",
  email: "kanayg@icloud.com",
  location: "Sydney, Australia",
  linkedin: "https://linkedin.com/in/kanay-gupta",
  github: "https://github.com/Kanay2005",
  resume: "/Resume.pdf",
  profileImage: "/profilePicture.webp",
} as const;

export const navItems = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
] as const;
