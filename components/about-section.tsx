import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Shuffle from "@/components/shuffle"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center group">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black dark:border-white rounded-full overflow-hidden bg-[#FF6B6B] dark:bg-red-900 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[-8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out hover:scale-105 hover:rotate-2 hover:shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[-12px_12px_0px_0px_rgba(255,255,255,0.2)]">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image with zoom effect */}
            <Image
              src="/about-image1.png"
              alt="Suraj Kumar - AI/ML Engineer"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ objectPosition: 'center 20%' }}
              priority
            />

            {/* Animated border pulse */}
            <div className="absolute inset-0 rounded-full border-4 border-[#FFC224] dark:border-cyan-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
              Building the <span className="bg-[#2F81F7] dark:bg-blue-900 text-white px-3 py-1 inline-block"><Shuffle text="future with AI" tag="span" className="text-inherit" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} /></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              I'm a 3rd-year AI & Data Science student who builds production-grade applications that solve real problems.
              From multi-agent AI systems to full-stack web platforms, I specialize in turning complex ideas into
              scalable, user-friendly products.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] dark:bg-indigo-900 border-2 border-black dark:border-white rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">AI/ML Production Systems</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  Built AI assistants with RAG architectures, multi-agent systems, and LLM integrations using OpenAI,
                  Gemini, and Sarvam AI for real-world applications.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] dark:bg-red-900 border-2 border-black dark:border-white rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">Full-Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  Expert in Next.js, React, TypeScript, Node.js, and modern databases. I build scalable web applications
                  with clean architecture and deploy them to production.
                </p>
              </div>
            </div>
          </div>

          <Link href="/about">
            <Button className="bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white hover:bg-black/90 dark:hover:bg-gray-100 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)]">
              <User className="w-5 h-5" />
              More about me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
