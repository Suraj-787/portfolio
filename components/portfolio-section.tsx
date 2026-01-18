import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "Kuma AI - Intelligent Personal Assistant",
      description:
        "AI-powered personal assistant with multi-agent architecture, long-term memory, vision capabilities, and native integrations with Gmail, Calendar, GitHub. Features real-time streaming, document intelligence, and Redis queue processing.",
      tags: ["React", "TypeScript", "Bun", "Express", "PostgreSQL", "Prisma", "Redis", "Docker", "OpenAI", "Gemini", "TailwindCSS"],
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#6366F1]",
      illustration: "/projects/kuma.png",
      githubUrl: "https://github.com/Suraj-787/kuma",
      liveUrl: "#", // To be updated when deployed
    },
    {
      title: "FinTalk - Multilingual Conversational Loan Advisor",
      description:
        "AI-powered financial advisor providing personalized loan guidance in 11+ Indian languages. Features voice support, personal financial profiling, and secure data handling using Google Gemini and Sarvam AI.",
      tags: ["Python", "Streamlit", "Google Gemini", "Sarvam AI", "Speech-to-Text", "Multilingual"],
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/projects/fintalk.png",
      githubUrl: "https://github.com/Suraj-787/fintalk",
      liveUrl: "https://fintalk.streamlit.app/",
    },
    {
      title: "Sayan - Government Schemes Discovery Platform",
      description:
        "Comprehensive platform for discovering Indian government schemes with AI-powered chatbot, multilingual support, smart search & filtering, and personalized recommendations. Built with Next.js, MongoDB, and Google Gemini AI.",
      tags: ["Next.js", "React", "TypeScript", "MongoDB", "Google Gemini", "Sarvam AI", "Tailwind CSS", "JWT"],
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#10B981]",
      illustration: "/projects/sayan.png",
      githubUrl: "https://github.com/Suraj-787/sayan",
      liveUrl: "https://sayan-delta.vercel.app/",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Featured <br />
            <span className="bg-[#FFC224] dark:bg-yellow-900 text-black dark:text-white px-3 py-1 inline-block">projects</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`group grid ${index === 1 ? 'md:grid-cols-[60%_40%]' : 'md:grid-cols-[40%_60%]'} bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all`}
              >
                {/* Content Section */}
                <div className={`p-6 md:p-8 flex flex-col justify-center bg-white dark:bg-[#1a1a1a] ${index === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B] dark:text-white mt-4">
                    {project.title}
                  </h3>

                  <p className="text-base md:text-[18px] text-[#393939] dark:text-gray-400 mb-6 leading-relaxed md:leading-[30px] font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 font-semibold text-[#0B0B0B] dark:text-white hover:gap-3 transition-all text-sm md:text-base border-2 border-black dark:border-white rounded-full px-6 py-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 font-semibold text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-sm md:text-base border-2 border-black dark:border-white rounded-full px-6 py-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Image Section */}
                <div className={`${project.bgColor} relative overflow-hidden min-h-[220px] md:min-h-[350px] ${index === 1 ? 'md:order-1' : ''}`}>
                  <Image
                    src={project.illustration || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <button className="bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white rounded-full px-8 py-4 md:px-10 md:py-5 font-bold hover:bg-gray-900 dark:hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Browse all projects
          </button>
        </div>
      </div>
    </section>
  )
}
