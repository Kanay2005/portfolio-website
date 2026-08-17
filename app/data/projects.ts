import type { TechName } from "./tech";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: TechName[];
  /** Omitted when the project has nothing public to link to. */
  link?: string;
}

export const projects: Project[] = [
  {
    title:
      "AI-Powered Job Ad Information Extraction (SEEK Industry Group Project)",
    description:
      "Led a comparative analysis of three distinct models for a SEEK-sponsored project: a traditional Scikit-learn baseline, a fine-tuned open-weight LLM (Pythia), and the proprietary Gemini API. Engineered and fine-tuned a Pythia-160m model with custom prediction heads, reducing MAE by over 95% compared to the logistic regression baseline. Benchmarked the Gemini API, establishing its state-of-the-art performance (MAE <$1k) for numerical extraction, and built the foundational dataset by annotating 50+ samples to achieve a 94% inter-annotator agreement.",
    image: "/nlpProject.webp",
    tags: ["Python"],
  },
  {
    title: "Ray Tracing Engine from Scratch in Rust",
    description:
      "Architected a high-performance, multithreaded path tracing engine in Rust from the ground up without the use of external crates, implementing physically-based materials (metals, dielectrics), a configurable camera with depth-of-field, and texture mapping. Leveraged Rust's concurrency primitives (Arc, Mutex) to parallelize rendering, achieving a 7.16x performance increase on a 16-core CPU compared to a single-threaded approach.",
    image: "/raytracing.webp",
    tags: ["Rust"],
    link: "https://github.com/Kanay2005/ray-tracing",
  },
  {
    title: "Health Tracking Web App (Hackathon Project)",
    description:
      "Spearheaded the development of a core feature: an AI-powered natural language food-to-calorie estimator by integrating the Gemini API. Engineered the React front-end and managed state for a personalized calorie tracker and a user-facing blog, delivering a fully functional prototype within the 48-hour hackathon timeframe.",
    image: "/fitrack.webp",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Game Engine Memory Analysis for CS:GO",
    description:
      "Engineered advanced game hacks using Python-based memory manipulation, leveraging reverse engineering techniques to modify game behavior in real time. Developed and integrated multiple advanced features, requiring an in-depth understanding of the game's internal mechanics, memory structures, and event handling.",
    image: "/csgo.webp",
    tags: ["Python"],
    link: "https://youtu.be/o7_jr6U4AoY?si=s-XPBWvEBEePyYSG",
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
      "Developed a responsive portfolio website using React.js, Next.js, and Tailwind CSS, implementing dynamic routing, optimized image handling, and server-side rendering for improved performance and SEO. Designed and deployed a modern, mobile-friendly UI with Tailwind CSS, ensuring fast load times and accessibility, while leveraging Next.js static generation for enhanced scalability and efficiency.",
    image: "/portfolio.webp",
    tags: ["React", "Next.js", "Tailwind"],
    link: "https://github.com/Kanay2005/portfolio-website",
  },
  {
    title: "Backend JavaScript Server",
    description:
      "Developed a backend JavaScript server replicating the features of Kahoot using TypeScript working effectively in a group environment using Git. Successfully created and implemented unit testing and full program testing using the Jest module.",
    image: "/1531.webp",
    tags: ["JavaScript", "TypeScript", "Git"],
  },
];
