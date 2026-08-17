import type { TechName } from "./tech";

export interface Project {
  title: string;
  /** Shown under the title — role, context, or timeframe. */
  subtitle?: string;
  description: string;
  /** Omit when there is no screenshot; the card falls back to a title panel. */
  image?: string;
  tags: TechName[];
  /** Omitted when the project has nothing public to link to. */
  link?: string;
}

export const projects: Project[] = [
  {
    title: "LedgerMind – AI-Powered Tax Compliance App",
    subtitle:
      "Project Manager and Engineer, Capstone Project for IntelliServe · September – November 2025",
    description:
      "Led a 6-person agile team through weekly sprints and stakeholder meetings to deliver a functional MVP for an AI-driven tax deduction mobile app. Built an LLM extraction pipeline pulling vendor, date, and amount details from receipt images, voice logs, and email invoices, removing manual data entry. Designed a Retrieval-Augmented Generation (RAG) system validating expenses against live Australian Taxation Office (ATO) feeds, with compliance-ready PDF audit exports.",
    tags: ["Python", "React", "PostgreSQL", "Docker", "Git", "Jira"],
  },
  {
    title: "AI-Powered Job Ad Extractor – LLM Comparative Analysis",
    subtitle: "AI Engineer, Industry Project for SEEK · March – April 2025",
    description:
      "Benchmarked three approaches to numerical extraction from job ads, then fine-tuned an open-weight Pythia-160m model with custom prediction heads, cutting Mean Absolute Error by over 95% against a Scikit-learn baseline. Annotated a foundational dataset of 50+ samples, achieving 94% inter-annotator agreement to establish a reliable evaluation benchmark.",
    image: "/nlpProject.webp",
    tags: ["Python", "PyTorch", "Hugging Face", "scikit-learn", "pandas"],
  },
  {
    title: "Ray Tracing Engine from Scratch in Rust",
    subtitle: "July 2025",
    description:
      "Wrote a multithreaded path tracing engine from scratch without external rendering crates, implementing physically based materials (metals, dielectrics), texture mapping, and a configurable depth-of-field camera. Achieved a 7.16x rendering speedup on a 16-core CPU by parallelising the workload using Rust's native concurrency primitives (Arc, Mutex).",
    image: "/raytracing.webp",
    tags: ["Rust"],
    link: "https://github.com/Kanay2005/ray-tracing",
  },
  {
    title: "Health Tracking Web App",
    subtitle: "Hackathon Project",
    description:
      "Spearheaded the development of a core feature: an AI-powered natural language food-to-calorie estimator by integrating the Gemini API. Engineered the React front-end and managed state for a personalized calorie tracker and a user-facing blog, delivering a fully functional prototype within the 48-hour hackathon timeframe.",
    image: "/fitrack.webp",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Autonomous Tetris Agent with Computer Vision",
    description:
      "Engineered an autonomous Tetris agent by creating a computer vision pipeline in Python and OpenCV that performs real-time screen analysis to determine optimal block placement, consistently clearing 40 lines in 15 seconds, a performance ranking within the top 3 of global player leaderboards.",
    image: "/tetrio.webp",
    tags: ["Python", "OpenCV"],
  },
  {
    title: "Portfolio Website",
    description:
      "This site. Built with Next.js and Tailwind CSS as a statically exported single page, deployed to GitHub Pages by a GitHub Actions pipeline that lints, type checks, and builds on every push. Content is data-driven and type-checked, scroll-triggered reveals run off a single IntersectionObserver, and the whole page loads in well under a megabyte.",
    image: "/portfolio.webp",
    tags: ["React", "Next.js", "Tailwind"],
    link: "https://github.com/Kanay2005/portfolio-website",
  },
];
