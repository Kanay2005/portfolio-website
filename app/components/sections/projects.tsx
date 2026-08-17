import { ExternalLink } from "lucide-react";

import { projects, type Project } from "@/app/data/projects";

import AnimatedSection from "../animated-section";
import AssetImage from "../asset-image";
import Section from "../section";
import TechTag from "../tech-tag";

/** Screenshot, or a title panel when the project has no image to show. */
function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <AssetImage
        src={project.image}
        alt={`Screenshot from ${project.title}`}
        fill
        sizes="(min-width: 768px) 512px, 100vw"
        className="object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8"
    >
      <span className="text-center text-2xl font-bold text-white/95">
        {project.title.split("–")[0].trim()}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-16">
          {/* No per-index delay: full-width cards scroll into view one at a
              time, so a stagger would just be lag before each one appears. */}
          {projects.map((project) => (
            <AnimatedSection key={project.title}>
              <article className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row">
                <div className="relative h-64 md:h-auto md:w-1/2">
                  <ProjectVisual project={project} />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.subtitle && (
                      <p className="mt-2 text-sm font-medium text-indigo-600">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="text-gray-600 mt-3 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <TechTag key={tag} name={tag} />
                      ))}
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
