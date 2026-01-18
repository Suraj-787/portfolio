import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Shuffle from '@/components/shuffle'

export function ExperienceSection() {
  const experiences = [
    {
      period: "2026 - Present",
      title: "AI/ML Development",
      description:
        "Building production AI applications with multi-agent architectures, RAG systems, and LLM integrations. Developed Kuma AI assistant, FinTalk multilingual advisor, and Sayan government schemes platform using OpenAI, Gemini, and Sarvam AI.",
      icon: "/images/startup.png",
    },
    {
      period: "2024 - 2025",
      title: "Full-Stack Web Development",
      description:
        "Created multiple full-stack applications using Next.js, React, TypeScript, and modern backend technologies. Implemented real-time features, database design with MongoDB and PostgreSQL, and deployed scalable applications on Vercel and cloud platforms.",
      icon: "/images/company.png",
    },
    {
      period: "2023 - 2024",
      title: "Learning & Foundation Building",
      description:
        "Deep dived into data structures, algorithms, and web development fundamentals. Built strong foundation in JavaScript/TypeScript, React, and backend development. Started competitive programming and system design practice.",
      icon: "/images/busines.png",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              My journey<span className="bg-[#6366F1] dark:bg-indigo-900 text-white px-3 py-1 inline-block"><Shuffle text="building products" tag="span" className="text-inherit" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} /></span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              From learning fundamentals to shipping production applications. Each project taught me valuable lessons
              about system design, user experience, and scalable architecture.
            </p>
            <Link href="/Resume_Suraj_Kumar.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white dark:bg-gray-800 text-black dark:text-white border-4 border-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] dark:hover:shadow-[6px_6px_0px_0px_rgba(156,163,175,0.5)]">
                <FileText className="w-5 h-5" />
                View résumé
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-[#1a1a1a] border-4 border-black dark:border-gray-700 rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B] dark:text-white">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black dark:border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(75,85,99,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black dark:border-gray-700 mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] dark:text-white mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] dark:text-gray-300 text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
