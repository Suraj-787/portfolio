import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black dark:bg-[#0a0a0a] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Let's Connect Section */}
          <div className="mb-12 md:mb-16 relative">
            <div className="bg-gradient-to-r from-[#FFC224] to-[#FF6B7A] dark:from-yellow-900 dark:to-red-900 border-4 border-black dark:border-white rounded-3xl py-8 px-6 md:py-12 md:px-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3">
                    Let's Build Something Amazing
                  </h3>
                  <p className="text-base md:text-lg text-gray-900 dark:text-gray-200">
                    Open to freelance projects, collaborations, and full-time opportunities
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                  <Link href="mailto:iamsuraj787@gmail.com">
                    <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-gray-100 rounded-full px-8 py-5 text-base font-bold h-auto whitespace-nowrap transition-colors">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Me
                    </Button>
                  </Link>
                  <Link href="/Resume_Suraj_Kumar.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="bg-white dark:bg-transparent border-4 border-black dark:border-white text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full px-8 py-5 text-base font-bold h-auto whitespace-nowrap transition-colors">
                      View Resume
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[#FFC224] -mt-1">
                  <Image src="/footer-img.png" alt="Logo" width={32} height={32} className="object-cover object-top -translate-y-2" />
                </div>
                <span className="text-lg md:text-xl font-bold text-white">Suraj Kumar</span>
              </div>
              <p className="text-gray-400 dark:text-gray-500 mb-6 text-sm leading-relaxed">
                AI/ML Engineer & Full-Stack Developer building production-grade applications with modern tech.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/suraj787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1DA1F2] dark:bg-blue-900 hover:opacity-80 rounded-full flex items-center justify-center transition-opacity"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/suraj-kumar-99a085295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0A66C2] dark:bg-blue-900 hover:opacity-80 rounded-full flex items-center justify-center transition-opacity"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://github.com/Suraj-787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#333] dark:bg-gray-700 hover:opacity-80 rounded-full flex items-center justify-center transition-opacity"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="mailto:iamsuraj787@gmail.com" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Projects</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500 text-sm">
                <li>
                  <a href="https://github.com/Suraj-787/kuma" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Kuma AI
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Suraj-787/fintalk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    FinTalk
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Suraj-787/sayan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Sayan
                  </a>
                </li>
                <li>
                  <Link href="/Resume_Suraj_Kumar.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Contact</h3>
              <ul className="space-y-3 text-gray-400 dark:text-gray-500 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:iamsuraj787@gmail.com" className="hover:text-white transition-colors">
                    iamsuraj787@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+916299421648" className="hover:text-white transition-colors">
                    +91 6299421648
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 text-center text-gray-400 dark:text-gray-500 text-sm">
            <p>Built with Next.js & TypeScript • © 2026 Suraj Kumar</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
