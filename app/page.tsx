"use client";

import Link from "next/link";
import { scrollToSection } from "./components/navbar";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./components/animated-section";
import TechSkill from "./components/tech-skill";
import TechTag from "./components/tech-tag";
import Image from "./components/custom-image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Home Section */}
        <section
          id="home"
          className="h-screen flex items-center relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-400 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-indigo-400 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <AnimatedSection delay={200}>
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Hi, I&apos;m{" "}
                    <span className="text-indigo-600">Kanay Gupta</span>
                  </h1>
                </AnimatedSection>
                <AnimatedSection delay={400}>
                  <h2 className="text-2xl md:text-3xl text-gray-600">
                    Computer Science Student
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={600}>
                  <p className="text-lg">
                    I am currently a university student studying at UNSW
                    expected to graduate in late 2025. I&apos;m passionate about
                    machine learning, web development, and creating innovative
                    solutions to real-world problems.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={800}>
                  <div className="flex gap-4">
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200"
                    >
                      View Projects
                    </button>
                    <a
                      href="/Resume.pdf"
                      download="Resume.pdf"
                      className="px-6 py-3 bg-white text-gray-900 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors shadow-md hover:shadow-md"
                    >
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
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Kanay Gupta"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container mx-auto px-4 py-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Projects
                </span>
              </h2>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 gap-16">
                {[
                  {
                    title: "Aim and Wall Hacks for CS:GO",
                    description:
                      "Engineered advanced game hacks using Python-based memory manipulation, leveraging reverse engineering techniques to modify game behavior in real time. Developed and integrated multiple advanced features, requiring an in-depth understanding of the game’s internal mechanics, memory structures, and event handling.",
                    image: "/csgo.png?height=400&width=600",
                    tags: ["Python"],
                    link: "https://youtu.be/o7_jr6U4AoY?si=s-XPBWvEBEePyYSG",
                  },
                  {
                    title: "Portfolio Website",
                    description:
                      "Developed a responsive portfolio website using React.js, Next.js, and Tailwind CSS, implementing dynamic routing, optimized image handling, and server-side rendering for improved performance and SEO. Designed and deployed a modern, mobile-friendly UI with Tailwind CSS, ensuring fast load times and accessibility, while leveraging Next.js static generation for enhanced scalability and efficiency.",
                    image: "/portfolio.png?height=400&width=600",
                    tags: ["React", "Next.js", "Tailwind"],
                    link: "#home",
                  },
                  {
                    title: "Real Time Tetris Bot",
                    description:
                      "Developed an AI-powered Tetris bot that detects game blocks in real-time using OpenCV image processing and executes optimal moves via PyAutoGUI keyboard inputs, achieving gameplay speeds faster than any human. Implemented advanced computer vision techniques such as edge detection and template matching in OpenCV to recognize falling Tetriminos instantly, enabling near-instant decision-making and outperforming human reaction times.",
                    image: "/tetrio.jpg?height=400&width=600",
                    tags: ["Python", "OpenCV"],
                    link: "N/A",
                  },
                  {
                    title: "Backend JavaScript Server",
                    description:
                      "Developed a backend JavaScript server replicating the features of Kahoot using TypeScript working effectively in a group environment using Git. Successfully created and implemented unit testing and full program testing using the Jest module.",
                    image: "/1531.png?height=400&width=600",
                    tags: ["JavaScript", "TypeScript", "Git"],
                    link: "N/A",
                  },
                ].map((project, index) => (
                  <AnimatedSection key={index} delay={index * 200}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row">
                      <div className="relative h-64 md:h-auto md:w-1/2">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-8 md:w-1/2 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-3">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, tagIndex) => (
                              <TechTag key={tagIndex} name={tag} />
                            ))}
                          </div>
                        </div>
                        {project.link && project.link !== "N/A" && (
                          <Link
                            href={project.link}
                            target="_blank"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                          >
                            View Project
                          </Link>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 py-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Skills
                </span>
              </h2>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {[
                  "Python",
                  "Rust",
                  "C",
                  "C#",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind",
                  "HTML5",
                  "CSS3",
                  "Bash",
                  "Linux",
                  "SQL",
                  "PostgreSQL",
                  "Java",
                  "LaTeX",
                  "Git",
                  "Unity",
                  "MS Office Suite",
                ].map((skill, index) => (
                  <AnimatedSection key={index} delay={index * 50 + 100}>
                    <TechSkill name={skill} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container mx-auto px-4 py-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Education
                </span>
              </h2>
            </AnimatedSection>

            <div className="space-y-12 max-w-4xl mx-auto">
              {[
                {
                  degree: "Bachelor of Computer Science",
                  institution: "University of New South Wales (UNSW)",
                  period: "February 2023 - December 2025",
                  gpa: "WAM: High Distinction",
                  courseTitle: "Relevant Coursework",
                  courses: [
                    "Machine Learning and Data Mining",
                    "Artificical Intelligence",
                    "Natural Language Processing",
                    "Data Structures and Algorithms",
                    "Database Systems",
                    "Computer Networks",
                    "Extended Security Engineering",
                    "Software Engineering",
                    "Extended Operating Systems",
                    "Modern Programming Problems with Rust",
                  ],
                },
                {
                  degree: "High School Certificate",
                  institution: "Carlingford High School",
                  period: "Graduated: September 2022",
                  gpa: "ATAR: 98.50",
                  courseTitle: "Achievements",
                  courses: [
                    "1st in Information and Processing Technology",
                    "3rd in Mathematics Extension 2",
                    "3rd in Mathematics Extension 1",
                    "3rd in Software Design and Development",
                  ],
                },
              ].map((edu, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <p className="text-gray-600 text-lg mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="md:text-right">
                        <span className="px-4 py-2 bg-indigo-100 text-indigo-800 font-medium rounded-full">
                          {edu.period}
                        </span>
                        <p className="mt-2 text-base font-medium">{edu.gpa}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium text-lg mb-3">
                        {edu.courseTitle}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 py-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Experience
                </span>
              </h2>
            </AnimatedSection>

            <div className="space-y-12 max-w-4xl mx-auto">
              {[
                {
                  role: "High School Tutor",
                  company: "Cluey Learning",
                  period: "April 2023 - Ongoing",
                  achievements: [
                    "Tutored students ranging from Year 9 to Year 12 in various concepts from Mathematics Standard to Mathematics Extension 1 resulting in a significant improvement in their academic performance.",
                    "Adapted teaching techniques and approaches to accommodate diverse learning styles and abilities, resulting in increased student engagement and understanding.",
                    "Provided feedback to supervisors on the effectiveness of the provided teaching materials, leading to continuous improvement and refinement of the curriculum.",
                  ],
                },
              ].map((exp, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <p className="text-gray-600 text-lg mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-indigo-100 text-indigo-800 font-medium rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-2"></span>
                              <span className="flex-1 break-words">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container mx-auto px-4 py-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Contact Me
                </span>
              </h2>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold">Get In Touch</h3>
                    <p className="text-gray-600 mt-2">
                      Feel free to reach out to me through any of the following
                      channels:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {/* Email */}
                      <div className="flex items-center gap-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Email
                          </h4>
                          <a
                            href="mailto:kanayg@icloud.com"
                            className="text-lg font-medium text-indigo-600 hover:underline"
                          >
                            kanayg@icloud.com
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Phone
                          </h4>
                          <a
                            href="tel:+61480121598"
                            className="text-lg font-medium text-indigo-600 hover:underline"
                          >
                            +61 480 121 598
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Location */}
                      <div className="flex items-center gap-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Location
                          </h4>
                          <p className="text-lg font-medium">
                            Sydney, Australia
                          </p>
                        </div>
                      </div>

                      {/* LinkedIn */}
                      <div className="flex items-center gap-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-indigo-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            LinkedIn
                          </h4>
                          <a
                            href="https://linkedin.com/in/kanay-gupta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-indigo-600 hover:underline"
                          >
                            linkedin.com/in/kanay-gupta
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <a
                      href="https://linkedin.com/in/kanay-gupta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    >
                      Connect on LinkedIn
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronDown className="h-6 w-6 transform rotate-180" />
      </button>
    </div>
  );
}
