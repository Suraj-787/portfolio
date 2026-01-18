import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Image from "next/image"

export function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">Blog & Insights</h2>
          <Button
            variant="outline"
            className="border-[3px] border-black dark:border-white rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] bg-white dark:bg-[#0a0a0a] font-semibold text-sm md:text-base text-black dark:text-white transition-colors w-full sm:w-auto"
          >
            <Pencil className="w-4 h-4 mr-2" />
            Browse all articles
          </Button>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          {/* Large featured article card */}
          <div className="group bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all duration-300">
            <div className="bg-[#EDEDED] dark:bg-[#2a2a2a] relative min-h-[220px] md:min-h-[320px] m-3 md:m-4 rounded-2xl overflow-hidden">
              <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black dark:bg-white text-white dark:text-black text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                System Design
              </span>
              <Image
                src="/images/article-design-tools.png"
                alt="System design illustration"
                fill
                className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black dark:text-white">
                How Your Code Runs on Platforms Like LeetCode
              </h3>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FDB927] dark:bg-yellow-900 border-2 border-black dark:border-white rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
                    alt="Author"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-base md:text-lg text-[#0B0B0B] dark:text-white">By Author</div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Aug 2024 • 4 min read</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Two smaller article cards */}
          <div className="space-y-6 md:space-y-8">
            {/* First smaller card */}
            <div className="group bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                {/* Image area */}
                <div className="bg-[#EDEDED] dark:bg-[#2a2a2a] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    Development
                  </span>
                  <Image
                    src="/images/article-font-sizes.png"
                    alt="Development article"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                {/* Content area */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-black dark:text-white">
                    Building a Reverse Proxy for Docker Containers
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed">
                    Step-by-step tutorial on implementing a load-balancing reverse proxy in Go
                  </p>
                </div>
              </div>
            </div>

            {/* Second smaller card */}
            <div className="group bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                {/* Image area */}
                <div className="bg-[#EDEDED] dark:bg-[#2a2a2a] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    Career
                  </span>
                  <Image
                    src="/images/article-exercises.png"
                    alt="Career guidance article"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                {/* Content area */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-black dark:text-white">
                    If I Were You in 1st Year, This Is What I'd Do
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed">
                    Complete roadmap and practical advice for CS students to maximize their learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewsletterSignup />
      </div>
    </section>
  )
}
