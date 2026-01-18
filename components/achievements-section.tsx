import { Trophy, Award, Code, Users, Target, Zap } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      color: "bg-[#FFC224] dark:bg-yellow-900",
      text: "Participated in JP Morgan Code for Good 2025, building dashboards for NGO PANS to empower rural women",
    },
    {
      icon: Target,
      color: "bg-[#FF6B7A] dark:bg-red-900",
      text: "Ranked 304th out of 6000+ teams in Amazon ML Challenge 2025",
    },
    {
      icon: Award,
      color: "bg-[#2F81F7] dark:bg-blue-900",
      text: "1st Runner-Up at Research Gate Hackathon for Sayan (Govt. scheme app)",
    },
    {
      icon: Award,
      color: "bg-purple-400 dark:bg-purple-900",
      text: "2nd Runner-Up in UI/UX Design at Browse competition",
    },
    {
      icon: Code,
      color: "bg-[#6366F1] dark:bg-indigo-900",
      text: "Solved 260+ LeetCode problems with a contest rating of 1508",
    },
    {
      icon: Users,
      color: "bg-teal-400 dark:bg-teal-900",
      text: "Organized hackathon for AI Brewery and conducted Generative AI workshop (40+ participants)",
    },
    {
      icon: Zap,
      color: "bg-pink-400 dark:bg-pink-900",
      text: "Ranked in Top 10% among 1200+ teams at The Great Bengaluru Hackathon with FinTalk",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-12 text-[#0B0B0B] dark:text-white">
          ACHIEVEMENTS & HIGHLIGHTS
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="group relative border-4 border-black dark:border-white rounded-2xl p-6 bg-white dark:bg-[#1a1a1a] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
              >
                {/* Icon with colored background */}
                <div className="flex items-start gap-4">
                  <div className={`${achievement.color} p-3 rounded-xl border-2 border-black dark:border-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="w-6 h-6 text-black dark:text-white" strokeWidth={2.5} />
                  </div>

                  <p className="text-[14px] md:text-[15px] text-[#0B0B0B] dark:text-gray-300 leading-[22px] md:leading-[24px] font-medium">
                    {achievement.text}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${achievement.color} border-2 border-black dark:border-white transition-transform duration-300 group-hover:scale-125`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
