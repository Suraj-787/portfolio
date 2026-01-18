"use client"

import { useState } from "react"

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      title: "Languages",
      color: "bg-[#FFC224] dark:bg-yellow-900",
      borderColor: "border-[#FFC224] dark:border-yellow-700",
      items: ["C++", "C", "Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      color: "bg-[#2F81F7] dark:bg-blue-900",
      borderColor: "border-[#2F81F7] dark:border-blue-700",
      items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    },
    {
      title: "Backend",
      color: "bg-[#6366F1] dark:bg-indigo-900",
      borderColor: "border-[#6366F1] dark:border-indigo-700",
      items: ["Node.js", "Express", "Bun", "REST APIs", "JWT"],
    },
    {
      title: "Databases",
      color: "bg-[#FF6B7A] dark:bg-red-900",
      borderColor: "border-[#FF6B7A] dark:border-red-700",
      items: ["PostgreSQL", "MongoDB", "SQL", "Prisma"],
    },
    {
      title: "AI & Systems",
      color: "bg-purple-400 dark:bg-purple-900",
      borderColor: "border-purple-400 dark:border-purple-700",
      items: ["LLM Integration", "Gemini", "OpenAI", "NLP", "Multi-Agent Systems", "Redis", "LiveKit"],
    },
    {
      title: "Tools",
      color: "bg-teal-400 dark:bg-teal-900",
      borderColor: "border-teal-400 dark:border-teal-700",
      items: ["Git", "GitHub", "CI/CD", "Docker"],
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-12 text-[#0B0B0B] dark:text-white">
          TECHNOLOGIES & TOOLS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Category Buttons */}
          <div className="space-y-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`
                  w-full text-left p-6 rounded-2xl border-4 border-black dark:border-white
                  font-bold text-lg md:text-xl
                  transition-all duration-300 ease-out
                  ${activeCategory === index
                    ? `${category.color} text-black dark:text-white transform scale-105 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]`
                    : 'bg-white dark:bg-[#1a1a1a] text-[#0B0B0B] dark:text-white hover:scale-102 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className={`
                    text-2xl transition-transform duration-300
                    ${activeCategory === index ? 'rotate-90' : ''}
                  `}>
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Tech Stack Display */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="border-4 border-black dark:border-white rounded-2xl p-8 bg-white dark:bg-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] min-h-[400px]">
                {/* Category Title */}
                <div className="mb-6">
                  <div className={`
                    inline-block px-4 py-2 rounded-full border-2 border-black dark:border-white
                    ${categories[activeCategory].color}
                    font-bold text-sm md:text-base
                  `}>
                    {categories[activeCategory].title}
                  </div>
                </div>

                {/* Tech Items with staggered animation */}
                <div className="flex flex-wrap gap-3">
                  {categories[activeCategory].items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`
                        px-4 py-3 text-sm md:text-base font-semibold rounded-xl
                        border-3 border-black dark:border-white
                        bg-white dark:bg-[#0a0a0a]
                        text-[#0B0B0B] dark:text-white
                        shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]
                        hover:transform hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.3)]
                        transition-all duration-200
                        animate-slideIn
                      `}
                      style={{
                        animationDelay: `${itemIndex * 50}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className={`
                  absolute -bottom-3 -right-3 w-12 h-12 rounded-full
                  ${categories[activeCategory].color}
                  border-4 border-black dark:border-white
                  transition-all duration-300
                `} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
