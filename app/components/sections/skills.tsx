import { skills } from "@/app/data/tech";

import AnimatedSection from "../animated-section";
import Section from "../section";
import TechSkill from "../tech-skill";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" tone="to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill} delay={index * 50 + 100}>
              <TechSkill name={skill} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
