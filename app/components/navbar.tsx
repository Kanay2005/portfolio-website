"use client"; // Required in Next.js 13+ App Router

import { useState, useEffect, useMemo } from "react";

// Function to smoothly scroll to a section
export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const start = window.scrollY;
    const end = section.offsetTop;
    const distance = end - start;
    const duration = 500; // Duration in milliseconds (lower value = faster scroll)

    let startTime: number | null = null;

    const scrollAnimation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollAmount = easeInOut(timeElapsed, start, distance, duration);
      window.scrollTo(0, scrollAmount);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      } else {
        window.scrollTo(0, end); // Ensure it ends exactly at the target
      }
    };

    requestAnimationFrame(scrollAnimation);
  }
};

// Ease-in-out function for smooth acceleration and deceleration
const easeInOut = (t: number, b: number, c: number, d: number) => {
  let tNorm = t / (d / 2);
  if (tNorm < 1) return (c / 2) * tNorm * tNorm * tNorm + b;
  tNorm -= 2;
  return (c / 2) * (tNorm * tNorm * tNorm + 2) + b;
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      { name: "Home", id: "home" },
      { name: "Projects", id: "projects" },
      { name: "Skills", id: "skills" },
      { name: "Education", id: "education" },
      { name: "Experience", id: "experience" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-white/70 px-6 py-3 rounded-full flex gap-6 items-center shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-2 rounded-full transition-all duration-100 ${
              activeSection === item.id
                ? "bg-gray-100/80 shadow-md" // Active button
                : "text-gray-700 hover:bg-gray-100/40 hover:shadow-md hover:text-black"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
