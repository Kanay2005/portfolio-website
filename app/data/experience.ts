import type { TechName } from "./tech";

export interface Experience {
  role: string;
  company: string;
  period: string;
  tags?: TechName[];
  achievements: string[];
}

export const experience: Experience[] = [
  {
    role: "Student Intern – Software Engineer, Digital Platform Engineering",
    company: "ResMed",
    period: "May 2026 - Present",
    tags: [
      "Java",
      "TypeScript",
      "Angular",
      "Python",
      "Terraform",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
    achievements: [
      "Delivered 20+ features and defect fixes across four services of a cloud-hosted device simulation platform used company-wide for device verification and validation, spanning a Java REST API, an Angular portal, and Python services.",
      "Built end-to-end simulation support for a new generation of connected medical devices, adding settings acknowledgement, schema-version-aware IoT endpoint routing, filter presets, and a review-and-retry flow letting users edit and resend failed device signals.",
      "Resolved defects across the Java API layer, correcting spurious 400 responses on optional parameters, adding global exception handling for failed type conversions, and reconciling mismatched product names generated for one device by two services.",
      "Migrated the web portal and public API onto the company's shared Kubernetes (EKS) deployment platform, reworking GitHub Actions pipelines and validating routing across development, staging, and production.",
    ],
  },
  {
    role: "Undergraduate Honours Researcher",
    company:
      "UNSW Computer Science and Engineering — Satire Explanation with Language Models (Honours Thesis)",
    period: "February 2026 - Present",
    tags: ["Python", "PyTorch", "Hugging Face"],
    achievements: [
      "Curated a 1,074-article dataset of Australian satirical and factual news to test whether Large Language Models can explain satire rather than merely classify it, addressing prior work limited to US-centric cartoon corpora.",
      "Designed an “unreliable narrator” prompting framework grounded in narrative theory that raised judged explanation quality by 0.26–0.80 points on a 5-point scale across all four model families tested.",
      "Built an LLM-as-judge evaluation harness with Prometheus-style rubrics scoring 32 generation runs across two datasets, four models, and four context conditions, validated by a blind dual-annotator study.",
      "Established two negative results by ablation: a sentence-level pre-classifier lowered event-grounding scores in seven of eight conditions, and article images improved grounding without improving explanation quality.",
      "Preparing a paper for ALTA 2026 archival submission covering the generalisation finding, null results, and failure modes, supervised by Dr. Aditya Joshi.",
    ],
  },
  {
    role: "High School Tutor",
    company: "Cluey Learning",
    period: "April 2023 - Ongoing",
    achievements: [
      "Mentored 15+ students from Year 9 to Year 12 in various concepts from Mathematics Standard to Mathematics Extension 1 leading to an average grade increase of over 20% for long-term students.",
      "Designed personalized learning plans and provided curriculum feedback to supervisors, resulting in improved student engagement and course materials.",
    ],
  },
];
