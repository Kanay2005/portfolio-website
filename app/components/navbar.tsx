"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/app/data/site";
import { scrollToSection } from "@/app/lib/scroll";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>(navItems[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // One observer for all sections, instead of measuring every section's
  // offsetTop on every scroll event. The rootMargin narrows the viewport to a
  // band just above the middle: whichever section covers that band wins.
  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Sections can straddle the band, and entry order is not document order,
    // so track what is currently visible and resolve ties by page order.
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        const current = navItems.find((item) => visible.has(item.id));
        if (current) setActiveSection(current.id);
      },
      // A 5% band, not a zero-height line: a zero-area root can fail to report
      // an intersection at all.
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 z-50 max-w-screen-xl mx-auto lg:max-w-full lg:left-1/2 transform lg:-translate-x-1/2">
      <nav
        aria-label="Main"
        className="transform translate-x-4 lg:translate-x-0 bg-white/50 backdrop-blur-md px-4.5 lg:px-6 py-3 rounded-full flex shadow-lg justify-center"
      >
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <div className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={`px-4 py-2 rounded-full transition-all duration-100 ${
                activeSection === item.id
                  ? "bg-gray-100/80 shadow-md"
                  : "text-gray-700 hover:bg-gray-100/40 hover:shadow-md hover:text-black"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {/* `inert` keeps the slide-out animation while taking the off-screen menu
          out of the tab order — previously it stayed focusable when closed. */}
      <div
        id="mobile-menu"
        inert={!isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
        className={`lg:hidden fixed top-20 left-0 w-64 bg-white/50 backdrop-blur-md px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 z-40 ${
          isMobileMenuOpen ? "translate-x-4" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={`w-full px-4 py-2 rounded-lg transition-all text-left ${
                activeSection === item.id
                  ? "bg-gray-100/80 shadow-md"
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
