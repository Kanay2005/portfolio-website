"use client";

import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "./components/navbar";
import {
  ChevronDown,
  Code,
  Database,
  FileCode,
  Github,
  Globe,
  Server,
  Cpu,
  Braces,
  BarChart,
} from "lucide-react";
import AnimatedSection from "./components/animated-section";
import SkillIcon from "./components/skill-icon";

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
          <div className="container mx-auto px-4">
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
                    title: "E-commerce Platform",
                    description:
                      "A full-stack e-commerce platform built with Next.js and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.",
                    image: "/placeholder.svg?height=400&width=600",
                    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
                    link: "#",
                  },
                  {
                    title: "Machine Learning Model",
                    description:
                      "A machine learning model for predicting student performance based on various factors including study habits, previous grades, and attendance. Achieved 92% accuracy on test data.",
                    image: "/placeholder.svg?height=400&width=600",
                    tags: ["Python", "TensorFlow", "Pandas"],
                    link: "#",
                  },
                  {
                    title: "Mobile App",
                    description:
                      "A cross-platform mobile app for tracking fitness goals. Users can log workouts, track nutrition, and view progress over time. Includes social features for sharing achievements.",
                    image: "/placeholder.svg?height=400&width=600",
                    tags: ["React Native", "Firebase", "Redux"],
                    link: "#",
                  },
                  {
                    title: "Data Visualization Dashboard",
                    description:
                      "Interactive dashboard for visualizing complex datasets. Includes customizable charts, filters, and export options. Used by researchers to analyze climate data.",
                    image: "/placeholder.svg?height=400&width=600",
                    tags: ["D3.js", "React", "Node.js"],
                    link: "#",
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
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link
                          href={project.link}
                          target="_blank"
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                        >
                          View Project
                        </Link>
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
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Skills
                </span>
              </h2>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <AnimatedSection delay={100}>
                  <SkillIcon icon={Braces} name="JavaScript" />
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <SkillIcon icon={FileCode} name="TypeScript" />
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <SkillIcon icon={Code} name="Python" />
                </AnimatedSection>
                <AnimatedSection delay={250}>
                  <SkillIcon icon={Code} name="Java" />
                </AnimatedSection>
                <AnimatedSection delay={300}>
                  <SkillIcon icon={Code} name="C++" />
                </AnimatedSection>
                <AnimatedSection delay={350}>
                  <SkillIcon icon={Database} name="SQL" />
                </AnimatedSection>
                <AnimatedSection delay={400}>
                  <SkillIcon icon={Globe} name="React" />
                </AnimatedSection>
                <AnimatedSection delay={450}>
                  <SkillIcon icon={Globe} name="Next.js" />
                </AnimatedSection>
                <AnimatedSection delay={500}>
                  <SkillIcon icon={Globe} name="HTML5" />
                </AnimatedSection>
                <AnimatedSection delay={550}>
                  <SkillIcon icon={Globe} name="CSS3" />
                </AnimatedSection>
                <AnimatedSection delay={600}>
                  <SkillIcon icon={Globe} name="Tailwind" />
                </AnimatedSection>
                <AnimatedSection delay={650}>
                  <SkillIcon icon={Server} name="Node.js" />
                </AnimatedSection>
                <AnimatedSection delay={700}>
                  <SkillIcon icon={Server} name="Express" />
                </AnimatedSection>
                <AnimatedSection delay={750}>
                  <SkillIcon icon={Server} name="Django" />
                </AnimatedSection>
                <AnimatedSection delay={800}>
                  <SkillIcon icon={Database} name="MongoDB" />
                </AnimatedSection>
                <AnimatedSection delay={850}>
                  <SkillIcon icon={Database} name="PostgreSQL" />
                </AnimatedSection>
                <AnimatedSection delay={900}>
                  <SkillIcon icon={Github} name="Git" />
                </AnimatedSection>
                <AnimatedSection delay={950}>
                  <SkillIcon icon={Cpu} name="Docker" />
                </AnimatedSection>
                <AnimatedSection delay={1000}>
                  <SkillIcon icon={Cpu} name="AWS" />
                </AnimatedSection>
                <AnimatedSection delay={1050}>
                  <SkillIcon icon={BarChart} name="TensorFlow" />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container mx-auto px-4">
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
                  degree: "Bachelor of Science in Computer Science",
                  institution: "University of Technology",
                  period: "2021 - Present",
                  gpa: "3.8/4.0",
                  courses: [
                    "Data Structures and Algorithms",
                    "Database Systems",
                    "Web Development",
                    "Machine Learning",
                    "Computer Networks",
                    "Software Engineering",
                  ],
                },
                {
                  degree: "High School Diploma",
                  institution: "Science Academy",
                  period: "2017 - 2021",
                  gpa: "4.0/4.0",
                  courses: [
                    "Advanced Placement Computer Science",
                    "Advanced Placement Calculus",
                    "Advanced Placement Physics",
                    "Robotics Club",
                    "Science Olympiad",
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
                        <p className="mt-2 text-base font-medium">
                          GPA: {edu.gpa}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium text-lg mb-3">
                        Relevant Coursework:
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
          <div className="container mx-auto px-4">
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
                  role: "Software Engineering Intern",
                  company: "Tech Solutions Inc.",
                  period: "May 2023 - August 2023",
                  description:
                    "Developed and maintained web applications using React and Node.js. Collaborated with the team to implement new features and fix bugs.",
                  achievements: [
                    "Implemented a new feature that increased user engagement by 20%",
                    "Optimized database queries resulting in 30% faster load times",
                    "Participated in code reviews and agile development processes",
                  ],
                },
                {
                  role: "Research Assistant",
                  company: "University AI Lab",
                  period: "January 2023 - Present",
                  description:
                    "Assisting professors with research in machine learning and natural language processing.",
                  achievements: [
                    "Co-authored a research paper on sentiment analysis",
                    "Developed a Python library for data preprocessing",
                    "Mentored junior students in machine learning concepts",
                  ],
                },
                {
                  role: "Web Development Freelancer",
                  company: "Self-employed",
                  period: "June 2022 - December 2022",
                  description:
                    "Designed and developed websites for small businesses and startups.",
                  achievements: [
                    "Completed 10+ projects with 100% client satisfaction",
                    "Specialized in responsive design and SEO optimization",
                    "Managed client relationships and project timelines effectively",
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
                      <p className="text-gray-700">{exp.description}</p>
                      <div>
                        <h4 className="font-medium text-lg mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-2"></span>
                              <span>{achievement}</span>
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
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Contact Me
                </span>
              </h2>
            </AnimatedSection>

            <div className="max-w-lg mx-auto">
              <AnimatedSection>
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold">Get In Touch</h3>
                    <p className="text-gray-600 mt-2">
                      Fill out the form below and I&apos;ll get back to you as
                      soon as possible.
                    </p>
                  </div>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200"
                    >
                      Send Message
                    </button>
                  </form>
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
