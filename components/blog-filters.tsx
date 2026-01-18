"use client"

import { useState } from "react"

const CATEGORIES = ["All", "Engineering", "DevOps", "System Design", "Career Guide", "Development", "AI/ML"]

interface BlogFiltersProps {
  onFilterChange?: (category: string) => void
}

export function BlogFilters({ onFilterChange }: BlogFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  const handleFilterClick = (category: string) => {
    setActiveFilter(category)
    onFilterChange?.(category)
  }

  return (
    <div className="mb-12 md:mb-16">
      <p className="text-[#717171] dark:text-gray-500 text-sm font-medium mb-4">Filter by Tag</p>
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base ${
              activeFilter === category
                ? "bg-black dark:bg-white text-white dark:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                : "bg-white dark:bg-[#1a1a1a] border-2 border-black dark:border-white text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
