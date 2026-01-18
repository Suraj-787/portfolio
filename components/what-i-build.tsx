export function WhatIBuild() {
  const projects = [
    {
      name: "Voltstream",
      description: "Live-streaming platform using WebRTC and AWS infrastructure for real-time video delivery",
    },
    {
      name: "Project0",
      description: "AI study companion that auto-generates notes, flashcards, and quizzes from uploaded content",
    },
    {
      name: "Sonex",
      description: "Self-hosted text-to-speech and voice conversion system built with PyTorch",
    },
    {
      name: "Uply",
      description: "Distributed system monitoring tool with Redis and Docker for container management",
    },
    {
      name: "Drift",
      description: "P2P file-sharing application in Go with AES-256 encryption and decentralized architecture",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-12 text-[#0B0B0B] dark:text-white">WHAT I BUILD</h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="pb-6 border-b border-[#E5E5E5] dark:border-gray-700 last:border-b-0">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#0B0B0B] dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-[15px] md:text-[16px] text-[#393939] dark:text-gray-400 leading-[24px]">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
