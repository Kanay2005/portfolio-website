import { ArrowUp } from "lucide-react";

import ScrollButton from "./components/scroll-button";
import Contact from "./components/sections/contact";
import Education from "./components/sections/education";
import Experience from "./components/sections/experience";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>

      <ScrollButton
        targetId="home"
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all hover:scale-110"
      >
        <ArrowUp className="h-6 w-6" aria-hidden="true" />
      </ScrollButton>
    </div>
  );
}
