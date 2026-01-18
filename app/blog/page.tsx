import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogFilters } from "@/components/blog-filters"
import { BlogPosts } from "@/components/blog-posts"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Navigation />
      <BlogHero />
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <BlogFilters />
          <BlogPosts />
        </div>
      </section>
      <Footer />
    </main>
  )
}
