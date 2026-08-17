import { skillGroups } from "@/app/data/tech";

import AnimatedSection from "../animated-section";
import Section from "../section";
import TechTag from "../tech-tag";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="max-w-4xl mx-auto space-y-10">
        {skillGroups.map((group) => (
          <AnimatedSection key={group.title}>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <TechTag key={skill} name={skill} size="md" />
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
