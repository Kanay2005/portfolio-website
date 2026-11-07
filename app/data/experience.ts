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
      "Delivered 40+ features, defect fixes, and migrations on a cloud device simulation platform that about 18 product and V&V teams use to test ResMed's connected CPAP and ventilator devices, across a Java REST API, an Angular portal, data generation engines, and a Python MCP server.",
      "Built simulation support for the AirSense 11 Pro launch, adding settings acknowledgement, schema-version-aware IoT endpoint routing, a review-and-retry flow for failed data sends, filter presets, and Care Check-In data, and fixed Protobuf encoding defects in its new JSON-schema data engine.",
      "Implemented Breath-by-Breath data delivery controls, initialising control flags at device creation and simulating device acknowledgement of control and over-the-air update messages, then deployed the release to production.",
      "Migrated the web portal and API from ECS to the company's shared Kubernetes (EKS) platform and moved 10+ services, including an AWS China deployment, from NGINX Ingress to Envoy Gateway, updating Helm values, Terraform load balancer rules, and GitHub Actions pipelines.",
      "Extended an MCP server that lets testers set up simulations in natural language, adding compliance-device assignment and per-environment default users, and fixed intermittent connection resets and spurious 400 API responses.",
    ],
  },
  {
    role: "Undergraduate Honours Researcher",
    company:
      "UNSW Computer Science and Engineering — Satire Explanation with Language Models (Honours Thesis)",
    period: "February 2026 - Present",
    tags: ["Python", "PyTorch", "Hugging Face"],
    achievements: [
      "First-author paper accepted at ALTA 2026: “Unreliable Narrator Framing as a Cost-effective Mechanism for Satire Explanation of Australian and American Satirical News”, with David Y. Liu and Dr. Aditya Joshi.",
      "Built a 1,000-article benchmark of Australian (The Betoota Advocate) and American (The Onion) satirical news to test whether Large Language Models can explain satire that depends on recent, local context.",
      "Designed an “unreliable narrator” prompting framework grounded in narrative theory that improved judged explanation quality in 16 of 17 model and dataset comparisons (+0.27 to +0.90 on a 5-point scale, all significant), making 7–8B open-weight models a low-cost alternative to frontier models.",
      "Built an LLM-as-judge pipeline scoring six-dimension rubrics across 50+ generation runs on four open-weight and two frontier models, validated against three human annotators (judge correlation 0.44–0.76).",
      "Ran control experiments separating the narrative framing from prompt structure and answer length, and deployed a live Gradio web demo of the full pipeline with per-session and spending limits.",
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
