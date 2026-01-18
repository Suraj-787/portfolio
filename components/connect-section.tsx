import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function ConnectSection() {
  const socials = [
    {
      label: "GitHub",
      url: "https://github.com/Suraj-787",
      icon: Github,
      color: "bg-[#333] dark:bg-gray-700",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/suraj-kumar-99a085295/",
      icon: Linkedin,
      color: "bg-[#0A66C2] dark:bg-blue-900",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/suraj787",
      icon: Twitter,
      color: "bg-[#1DA1F2] dark:bg-blue-900",
    },
    {
      label: "Email",
      url: "mailto:iamsuraj787@gmail.com",
      icon: Mail,
      color: "bg-[#FF6B7A] dark:bg-red-900",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[28px] md:text-[36px] font-bold mb-6 text-[#0B0B0B] dark:text-white">
          CONNECT WITH ME
        </h2>

        <div className="flex flex-wrap gap-4">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${social.color} 
                  flex items-center gap-3 px-6 py-3 rounded-full 
                  border-2 border-black dark:border-white
                  text-white font-semibold text-sm md:text-base
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]
                  hover:transform hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.3)]
                  transition-all duration-200
                `}
              >
                <Icon className="w-5 h-5" strokeWidth={2.5} />
                <span>{social.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
