"use client"

export function CurrentlyExploring() {
  const items = [
    "Multi-Agent AI Systems",
    "Distributed Systems Architecture",
    "LLM Fine-tuning & RAG",
    "Real-time Systems (WebSockets, Redis)",
  ]

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[28px] md:text-[36px] font-bold mb-6 text-[#0B0B0B] dark:text-white">
          CURRENTLY EXPLORING
        </h2>

        <div className="flex flex-wrap gap-3">
          {items.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm md:text-base font-semibold rounded-full border-3 border-black dark:border-white bg-[#FFC224] dark:bg-yellow-900 text-black dark:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] hover:transform hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
