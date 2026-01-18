export function BlogHero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black dark:text-white">
          <span className="bg-[#FF6B7A] dark:bg-red-900 text-white px-3 py-1 inline-block">KNOWLEDGE BASE</span>
        </h1>
        <p className="text-[#393939] dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
          Thoughts on distributed systems, AI engineering, and software architecture
        </p>
      </div>
    </section>
  )
}
