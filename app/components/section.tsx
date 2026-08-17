import type { ReactNode } from "react";

import { navItems } from "@/app/data/site";

import AnimatedSection from "./animated-section";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  // Sections alternate gradient direction so consecutive backgrounds meet on
  // the same shade. Derived from nav order rather than passed in, so reordering
  // the page can't leave a visible seam.
  const position = navItems.findIndex((item) => item.id === id);
  const gradient =
    position % 2 === 1
      ? "bg-gradient-to-b from-white to-gray-50"
      : "bg-gradient-to-b from-gray-50 to-white";

  return (
    <section id={id} className={`py-20 ${gradient}`}>
      <div className="container mx-auto px-4 py-6 md:py-12">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {title}
            </span>
          </h2>
        </AnimatedSection>
        {children}
      </div>
    </section>
  );
}
