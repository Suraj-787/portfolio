import { Mail, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-white rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]">
        <Link
          href="/"
          className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 bg-white dark:bg-black rounded-full"></div>
        </Link>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link
            href="/"
            className="text-[18px] font-bold leading-[20px] text-black dark:text-white hover:opacity-70 transition-opacity"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-[18px] font-bold leading-[20px] text-black dark:text-white hover:opacity-70 transition-opacity"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-[18px] font-bold leading-[20px] text-black dark:text-white hover:opacity-70 transition-opacity"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="mailto:iamsuraj787@gmail.com">
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-gray-100 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0 transition-colors">
              <Mail className="w-10 h-10" strokeWidth={2.5} />
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
