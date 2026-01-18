import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-12 text-[#0B0B0B] dark:text-white">LET'S WORK TOGETHER</h2>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 justify-center">
          <Link href="/Resume_Suraj_Kumar.pdf" download="Suraj_Kumar_Resume.pdf">
            <Button className="bg-[#FFC224] dark:bg-yellow-900 text-black dark:text-white border-4 border-black dark:border-white rounded-full px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold h-auto w-full sm:w-auto sm:min-w-[240px] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200">
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </Link>
          <Link href="mailto:iamsuraj787@gmail.com">
            <Button
              variant="outline"
              className="bg-white dark:bg-transparent border-4 border-black dark:border-white text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold h-auto w-full sm:w-auto sm:min-w-[240px] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
