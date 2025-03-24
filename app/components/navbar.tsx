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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="fixed top-4 z-50 max-w-screen-xl mx-auto lg:max-w-full lg:left-1/2 transform lg:-translate-x-1/2">
      <nav className="transform translate-x-4 lg:translate-x-0 bg-white/50 backdrop-blur-md px-4.5 lg:px-6 py-3 rounded-full flex shadow-lg justify-center">
        {/* Hamburger icon for mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-xl"
        >
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Navigation links for desktop */}
        <div className="hidden lg:flex gap-6">
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
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-64 bg-white/50 backdrop-blur-md px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 z-40 ${
          isMobileMenuOpen
            ? "transform translate-x-4"
            : "transform -translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false); // Close the mobile menu after selecting an item
              }}
              className={`w-full px-4 py-2 rounded-lg transition-all text-left ${
                activeSection === item.id
                  ? "bg-gray-100/80 shadow-md" // Active button
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
