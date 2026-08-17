import type { ReactNode } from "react";

import AnimatedSection from "./animated-section";

interface SectionProps {
  id: string;
  title: string;
  /** Sections alternate direction so the page reads as one continuous gradient. */
  tone?: "to-gray" | "to-white";
  children: ReactNode;
}

export default function Section({
  id,
  title,
  tone = "to-gray",
  children,
}: SectionProps) {
  const gradient =
    tone === "to-gray"
      ? "bg-gradient-to-b from-white to-gray-50"
      : "bg-gradient-to-b from-gray-50 to-white";

  return (
    <section id={id} className={`min-h-screen scroll-mt-24 py-20 ${gradient}`}>
      <div className="container mx-auto px-4 py-12">
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
