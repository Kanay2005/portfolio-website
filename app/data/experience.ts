export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export const experience: Experience[] = [
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
