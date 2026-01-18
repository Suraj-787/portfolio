import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutIntro } from "@/components/about-intro"
import { AchievementsSection } from "@/components/achievements-section"
import { TechStack } from "@/components/tech-stack"
import { CurrentlyExploring } from "@/components/currently-exploring"
import { AboutCTA } from "@/components/about-cta"
import { ConnectSection } from "@/components/connect-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Navigation />
      <AboutHero />
      <AboutIntro />
      <TechStack />
      <AchievementsSection />
      <CurrentlyExploring />
      <AboutCTA />
      <ConnectSection />
      <Footer />
    </main>
  )
}
