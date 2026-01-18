import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsGrid } from "@/components/projects-grid"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Navigation />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </main>
  )
}
