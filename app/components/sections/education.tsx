import { education } from "@/app/data/education";

import AnimatedSection from "../animated-section";
import Section from "../section";

export default function Education() {
  return (
    <Section id="education" title="Education" tone="to-gray">
      <div className="space-y-12 max-w-4xl mx-auto">
        {education.map((entry, index) => (
          <AnimatedSection key={entry.degree} delay={index * 200}>
            <article className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{entry.degree}</h3>
                  <p className="text-gray-600 text-lg mt-1">
                    {entry.institution}
                  </p>
                </div>
                <div className="md:text-right mt-2">
                  <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 font-medium rounded-full whitespace-nowrap">
                    {entry.period}
                  </span>
                  <p className="mt-4 text-base font-medium">{entry.result}</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-medium text-lg mb-3">{entry.listTitle}</h4>
                <ul className="flex flex-wrap gap-2">
                  {entry.items.map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
