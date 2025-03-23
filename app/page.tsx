// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <section id="home" className="h-screen bg-red-100">
//         Home Section
//       </section>
//       <section id="projects" className="h-screen bg-blue-100">
//         Projects Section
//       </section>
//       <section id="skills" className="h-screen bg-green-100">
//         Skills Section
//       </section>
//       <section id="experience" className="h-screen bg-yellow-100">
//         Experience Section
//       </section>
//       <section id="education" className="h-screen bg-purple-100">
//         Education Section
//       </section>
//       <section id="contact" className="h-screen bg-gray-100">
//         Contact Section
//       </section>
//       <h1>Hello world</h1>
//     </>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "./components/navbar";
import { ChevronDown } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Home Section */}
        <section id="home" className="h-screen bg-red-100 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi, I'm <span className="text-blue-600">Kanay Gupta</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-600">
                  Computer Science Student
                </h2>
                <p className="text-lg">
                  I am currently a university student studying at UNSW expected
                  to graduate in late 2025. I'm passionate about machine
                  learning, web development, and creating innovative solutions
                  to real-world problems.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-2 bg-white text-gray-900 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="John Doe"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-blue-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-stack e-commerce platform built with Next.js and MongoDB",
                  image: "/placeholder.svg?height=200&width=300",
                  tags: ["Next.js", "MongoDB", "Tailwind CSS"],
                  link: "#",
                },
                {
                  title: "Machine Learning Model",
                  description:
                    "A machine learning model for predicting student performance",
                  image: "/placeholder.svg?height=200&width=300",
                  tags: ["Python", "TensorFlow", "Pandas"],
                  link: "#",
                },
                {
                  title: "Mobile App",
                  description:
                    "A cross-platform mobile app for tracking fitness goals",
                  image: "/placeholder.svg?height=200&width=300",
                  tags: ["React Native", "Firebase", "Redux"],
                  link: "#",
                },
                {
                  title: "Data Visualization Dashboard",
                  description:
                    "Interactive dashboard for visualizing complex datasets",
                  image: "/placeholder.svg?height=200&width=300",
                  tags: ["D3.js", "React", "Node.js"],
                  link: "#",
                },
                {
                  title: "Blockchain Application",
                  description: "A decentralized application built on Ethereum",
                  image: "/placeholder.svg?height=200&width=300",
                  tags: ["Solidity", "Web3.js", "React"],
                  link: "#",
                },
                {
                  title: "AI Chatbot",
                  description: "An AI-powered chatbot for customer support",
                  image: "/placeholder.svg?height=200&width=300",
                  tags: ["Python", "NLP", "Flask"],
                  link: "#",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="mt-4 inline-flex items-center w-full justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen bg-green-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Programming Languages",
                  skills: [
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "Java",
                    "C++",
                    "SQL",
                  ],
                },
                {
                  category: "Frontend Development",
                  skills: [
                    "React",
                    "Next.js",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Redux",
                  ],
                },
                {
                  category: "Backend Development",
                  skills: [
                    "Node.js",
                    "Express",
                    "Django",
                    "Flask",
                    "RESTful APIs",
                    "GraphQL",
                  ],
                },
                {
                  category: "Database",
                  skills: [
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "Firebase",
                    "Redis",
                  ],
                },
                {
                  category: "DevOps & Tools",
                  skills: [
                    "Git",
                    "Docker",
                    "AWS",
                    "CI/CD",
                    "Vercel",
                    "Netlify",
                  ],
                },
                {
                  category: "Data Science & AI",
                  skills: [
                    "TensorFlow",
                    "PyTorch",
                    "Pandas",
                    "NumPy",
                    "Data Visualization",
                    "NLP",
                  ],
                },
              ].map((skillGroup, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 border border-gray-300 text-gray-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen bg-purple-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Education
            </h2>
            <div className="space-y-8 max-w-3xl mx-auto">
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-gray-600 text-base">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                        {edu.period}
                      </span>
                      <p className="mt-2 text-sm font-medium">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen bg-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Experience
            </h2>
            <div className="space-y-8 max-w-3xl mx-auto">
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-gray-600 text-base">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mt-4 space-y-4">
                    <p>{exp.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Contact Me
            </h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Get In Touch</h3>
                  <p className="text-gray-600">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-2 border rounded-md"
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
                      className="w-full p-2 border rounded-md"
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
                      className="w-full p-2 border rounded-md"
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
                      className="w-full p-2 border rounded-md"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-6 right-6 p-2 rounded-full bg-blue-600 text-white shadow-lg"
        aria-label="Scroll to top"
      >
        <ChevronDown className="h-6 w-6 transform rotate-180" />
      </button>
    </div>
  );
}
