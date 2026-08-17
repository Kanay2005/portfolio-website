import { experience } from "@/app/data/experience";

import AnimatedSection from "../animated-section";
import Section from "../section";
import TechTag from "../tech-tag";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12 max-w-4xl mx-auto">
        {experience.map((role) => (
          <AnimatedSection key={`${role.company}-${role.role}`}>
            <article className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{role.role}</h3>
                  <p className="text-gray-600 text-lg mt-1">{role.company}</p>
                </div>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 font-medium rounded-full whitespace-nowrap">
                  {role.period}
                </span>
              </div>
              {role.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <TechTag key={tag} name={tag} />
                  ))}
                </div>
              )}
              <ul className="mt-6 space-y-2">
                {role.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start">
                    <span
                      className="inline-block w-1.5 h-1.5 shrink-0 rounded-full bg-indigo-600 mt-2 mr-2"
                      aria-hidden="true"
                    />
                    <span className="flex-1 break-words">{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
