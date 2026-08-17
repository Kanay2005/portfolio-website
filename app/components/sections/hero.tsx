import { Download } from "lucide-react";

import { site } from "@/app/data/site";
import { withBasePath } from "@/app/lib/base-path";

import AnimatedSection from "../animated-section";
import AssetImage from "../asset-image";

export default function Hero() {
  return (
    <section
      id="home"
      // min-h (not h) so tall content grows the section instead of being
      // clipped by the centering, and pt-32 keeps the heading clear of the
      // fixed navbar on small screens.
      className="min-h-dvh flex items-center relative overflow-hidden pt-32 pb-16 md:pt-20 md:pb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0" />

      <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-400 mix-blend-multiply filter blur-xl animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-indigo-400 mix-blend-multiply filter blur-xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <AnimatedSection delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I&apos;m <span className="text-indigo-600">{site.name}</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <h2 className="text-2xl md:text-3xl text-gray-600">{site.role}</h2>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <p className="text-lg">{site.intro}</p>
            </AnimatedSection>
            <AnimatedSection delay={800}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={withBasePath(site.resume)}
                  download="Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200"
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection
            delay={300}
            direction="left"
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-2xl">
              <AssetImage
                src={site.profileImage}
                alt={site.name}
                fill
                sizes="(min-width: 768px) 320px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
