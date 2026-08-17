export interface Education {
  degree: string;
  institution: string;
  period: string;
  result: string;
  /** Awards worth calling out above the coursework list. */
  honours?: string[];
  listTitle: string;
  items: string[];
}

export const education: Education[] = [
  {
    degree: "Bachelor of Advanced Computer Science (Honours)",
    institution: "University of New South Wales (UNSW)",
    period: "February 2023 - December 2026",
    result: "WAM: 87 (High Distinction)",
    honours: ["Faculty of Engineering Dean's Honours List (2023)"],
    listTitle: "Relevant Coursework",
    items: [
      "Machine Learning and Data Mining",
      "Artificial Intelligence",
      "Natural Language Processing",
      "Data Structures and Algorithms",
      "Database Systems",
      "Computer Networks",
      "Extended Security Engineering",
      "Software Engineering",
      "Extended Operating Systems",
      "Modern Programming Problems with Rust",
    ],
  },
  {
    degree: "High School Certificate",
    institution: "Carlingford High School",
    period: "Graduated: September 2022",
    result: "ATAR: 98.50",
    listTitle: "Achievements",
    items: [
      "1st in Information and Processing Technology",
      "3rd in Mathematics Extension 2",
      "3rd in Mathematics Extension 1",
      "3rd in Software Design and Development",
    ],
  },
];
