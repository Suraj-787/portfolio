"use client"

import { useState, useMemo } from "react"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const PROJECTS = [
  {
    title: "Kuma AI - Intelligent Personal Assistant",
    description:
      "AI-powered personal assistant with multi-agent architecture, long-term memory, vision capabilities, and native integrations with Gmail, Calendar, GitHub. Features real-time streaming, document intelligence, and Redis queue processing.",
    tech: ["React", "TypeScript", "Bun", "Express", "PostgreSQL", "Prisma", "Redis", "Docker", "OpenAI", "Gemini", "TailwindCSS"],
    category: ["AI/ML", "Web Apps"],
    liveUrl: "#",
    codeUrl: "https://github.com/Suraj-787/kuma",
    bgColor: "bg-[#6366F1]",
    image: "/projects/kuma.png",
  },
  {
    title: "FinTalk - Multilingual Conversational Loan Advisor",
    description:
      "AI-powered financial advisor providing personalized loan guidance in 11+ Indian languages. Features voice support, personal financial profiling, and secure data handling using Google Gemini and Sarvam AI.",
    tech: ["Python", "Streamlit", "Google Gemini", "Sarvam AI", "Speech-to-Text", "Multilingual"],
    category: ["AI/ML", "Web Apps"],
    liveUrl: "https://fintalk.streamlit.app/",
    codeUrl: "https://github.com/Suraj-787/fintalk",
    bgColor: "bg-[#2F81F7]",
    image: "/projects/fintalk.png",
  },
  {
    title: "Sayan - Government Schemes Discovery Platform",
    description:
      "Comprehensive platform for discovering Indian government schemes with AI-powered chatbot, multilingual support, smart search & filtering, and personalized recommendations. Built with Next.js, MongoDB, and Google Gemini AI.",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Google Gemini", "Sarvam AI", "Tailwind CSS", "JWT"],
    category: ["AI/ML", "Web Apps"],
    liveUrl: "https://sayan-delta.vercel.app/",
    codeUrl: "https://github.com/Suraj-787/sayan",
    bgColor: "bg-[#10B981]",
    image: "/projects/sayan.png",
  },
  {
    title: "AutoToon - AI Comic Book Generator",
    description:
      "AI-powered full-stack application that generates comic books from text prompts using Google's Gemini AI. Features story generation, AI image creation, PDF export, library management, and style customization with real-time processing.",
    tech: ["Next.js", "TypeScript", "Bun", "Express", "Google Gemini", "Sharp", "PDF-lib", "Tailwind CSS", "Radix UI"],
    category: ["AI/ML", "Web Apps"],
    liveUrl: "https://autotoon-full.vercel.app/",
    codeUrl: "https://github.com/Suraj-787/autotoon_full",
    bgColor: "bg-[#8B5CF6]",
    image: "/projects/autotoon.png",
  },
]

const CATEGORIES = ["All", "AI/ML", "Web Apps"]

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS
    }
    return PROJECTS.filter((project) => project.category.includes(activeFilter))
  }, [activeFilter])

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Filter Section */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#717171] dark:text-gray-500 text-sm font-medium mb-4">Filter by</p>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base ${activeFilter === category
                  ? "bg-black dark:bg-white text-white dark:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                  : "bg-white dark:bg-[#1a1a1a] border-2 border-black dark:border-white text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#2a2a2a]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white rounded-2xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <div className={`${project.bgColor} relative h-48 overflow-hidden`}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                <p className="text-[#393939] dark:text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 font-semibold text-black dark:text-white hover:opacity-70 transition-opacity text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center gap-2 font-semibold text-black dark:text-white hover:opacity-70 transition-opacity text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
