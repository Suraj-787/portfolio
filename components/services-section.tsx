"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Shuffle from '@/components/shuffle'

export function ServicesSection() {
  // Set Frontend as default active category
  const [activeCategory, setActiveCategory] = useState<string>("Frontend")

  const techStackCategories = [
    {
      category: "Frontend",
      color: "bg-[#61DAFB]",
      darkColor: "dark:bg-[#1e3a5f]",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      category: "Backend",
      color: "bg-[#68A063]",
      darkColor: "dark:bg-[#2d4a2b]",
      technologies: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      ],
    },
    {
      category: "Databases",
      color: "bg-[#4DB33D]",
      darkColor: "dark:bg-[#2a5a26]",
      technologies: [
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
      ],
    },
    {
      category: "AI/ML",
      color: "bg-[#FF6F61]",
      darkColor: "dark:bg-[#5a2a26]",
      technologies: [
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
      ],
    },
    {
      category: "DevOps",
      color: "bg-[#0DB7ED]",
      darkColor: "dark:bg-[#1a4d5f]",
      technologies: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      ],
    },
    {
      category: "Languages",
      color: "bg-[#F7DF1E]",
      darkColor: "dark:bg-[#5a5320]",
      technologies: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      ],
    },
  ]

  return (
    <section className="bg-white dark:bg-[#0f0f0f] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4 text-black dark:text-white">
              What I <span className="bg-[#FF4A60] dark:bg-red-900 text-white px-3 py-1 inline-block"><Shuffle text="specialize in" tag="span" className="text-inherit" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} /></span>
            </h2>
            <p className="text-[#393939] dark:text-gray-400 text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Full-stack development with expertise in building production-grade applications, AI systems, and scalable
              infrastructure.
            </p>
          </div>

          {/* Horizontal Tab Navigation */}
          <div className="mb-8 pt-2">
            <div className="flex flex-nowrap md:justify-center gap-3 overflow-x-auto pb-4 px-1 py-2 scrollbar-hide">
              {techStackCategories.map((category, index) => {
                const isActive = activeCategory === category.category

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      console.log('Switching to:', category.category)
                      setActiveCategory(category.category)
                    }}
                    className={`flex-shrink-0 px-6 py-3 border-[3px] border-black dark:border-white font-bold text-lg transition-all duration-300 ${isActive
                      ? `${category.color} ${category.darkColor} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] -translate-y-1`
                      : 'bg-white dark:bg-[#1a1a1a] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:-translate-y-0.5'
                      }`}
                  >
                    {category.category}
                  </button>
                )
              })}
            </div>
            {/* Debug: Show active category */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Active: <span className="font-bold">{activeCategory}</span>
            </p>
          </div>

          {/* Active Category Content */}
          {techStackCategories.find(cat => cat.category === activeCategory) && (
            <div className="border-[3px] border-black dark:border-white rounded-2xl p-6 bg-gray-50 dark:bg-[#0a0a0a]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techStackCategories.find(cat => cat.category === activeCategory)!.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer min-h-[140px]"
                  >
                    {/* Logo in original shape - no circle */}
                    <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain dark:brightness-90 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] dark:group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-all duration-300"
                      />
                    </div>

                    <p className="text-sm font-bold text-center text-[#0B0B0B] dark:text-white group-hover:text-[#FF4A60] dark:group-hover:text-[#FF6B7A] transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Get in Touch Card */}
          <div className="mt-12">
            <div className="bg-[#FFC224] dark:bg-yellow-900 border-[3px] border-black dark:border-white rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[320px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B] dark:text-white">Got a project?</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] dark:text-gray-300 mb-8">
                Let's build something incredible together. I'm always interested in collaborative projects and new
                opportunities.
              </p>
              <Link href="mailto:iamsuraj787@gmail.com">
                <Button className="bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-black hover:bg-black/90 dark:hover:bg-gray-100 rounded-full px-10 py-5 font-bold text-[18px] w-full max-w-[340px] h-auto hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
