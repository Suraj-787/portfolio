"use client"

import { useState, useMemo } from "react"
import { ChevronRight } from "lucide-react"

const BLOG_POSTS = [
  {
    id: 1,
    title: "If I Were You in 1st Year, This Is What I'd Do",
    category: "Career Guide",
    date: "Sept 20, 2024",
    readTime: "10 min",
    excerpt:
      "A comprehensive roadmap for CS students covering everything from basic programming to advanced system design and career planning",
    categoryColor: "bg-[#10B981]",
  },
  {
    id: 2,
    title: "Building a Dynamic Reverse Proxy for Docker Containers",
    category: "DevOps",
    date: "Sept 29, 2024",
    readTime: "4 min",
    excerpt:
      "Step-by-step tutorial on creating a dynamic reverse proxy with Docker, including practical insights for container orchestration",
    categoryColor: "bg-[#2F81F7]",
  },
  {
    id: 3,
    title: "How I Implemented My Blog Section Using MDX, Next.js, and React",
    category: "Development",
    date: "Sept 26, 2024",
    readTime: "4 min",
    excerpt:
      "Technical breakdown of building a modern blog with MDX for content, Next.js for framework, and React for components",
    categoryColor: "bg-[#F59E0B]",
  },
  {
    id: 4,
    title: "How Your Code Runs on Platforms Like LeetCode",
    category: "System Design",
    date: "Sept 14, 2024",
    readTime: "4 min",
    excerpt:
      "Behind the scenes look at how online judges execute code securely, manage resources, and provide instant feedback",
    categoryColor: "bg-[#8B5CF6]",
  },
  {
    id: 5,
    title: "Optimizing React Performance: Real-World Lessons",
    category: "Engineering",
    date: "June 15, 2024",
    readTime: "7 min",
    excerpt:
      "Practical techniques for improving React application performance including memoization, lazy loading, and render optimization",
    categoryColor: "bg-[#EC4899]",
  },
  {
    id: 6,
    title: "My Tech Stack for Building Products in 2024",
    category: "Development",
    date: "May 22, 2024",
    readTime: "5 min",
    excerpt:
      "A walkthrough of the technologies I use daily, why I chose them, and how they work together in production",
    categoryColor: "bg-[#06B6D4]",
  },
  {
    id: 7,
    title: "Understanding WebRTC for Real-Time Applications",
    category: "Engineering",
    date: "April 18, 2024",
    readTime: "6 min",
    excerpt:
      "Complete guide to implementing WebRTC for peer-to-peer connections, covering signaling, STUN/TURN servers, and best practices",
    categoryColor: "bg-[#FF6B7A]",
  },
  {
    id: 8,
    title: "Distributed Systems: Key Concepts Explained",
    category: "System Design",
    date: "March 10, 2024",
    readTime: "8 min",
    excerpt:
      "Fundamentals of distributed architecture including CAP theorem, consistency models, and consensus algorithms made simple",
    categoryColor: "bg-[#6366F1]",
  },
]

interface BlogPostsProps {
  selectedCategory?: string
}

export function BlogPosts({ selectedCategory = "All" }: BlogPostsProps) {
  const [filter, setFilter] = useState("All")

  const filteredPosts = useMemo(() => {
    if (filter === "All") {
      return BLOG_POSTS
    }
    return BLOG_POSTS.filter((post) => post.category === filter)
  }, [filter])

  return (
    <div className="space-y-6 md:space-y-8">
      {filteredPosts.map((post, index) => (
        <article
          key={post.id}
          className="group bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white rounded-2xl p-6 md:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all animate-in fade-in duration-500"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span
              className={`${post.categoryColor} text-white text-xs font-semibold px-3 py-1.5 rounded-lg inline-block`}
            >
              {post.category.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-[#0B0B0B] dark:text-white leading-tight group-hover:underline transition-all cursor-pointer">
            {post.title}
          </h3>

          {/* Date & Read Time */}
          <div className="text-sm md:text-base text-[#717171] dark:text-gray-500 font-medium mb-4">
            {post.date} · {post.readTime} read
          </div>

          {/* Excerpt */}
          <p className="text-[#393939] dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6">{post.excerpt}</p>

          {/* Read More Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#FF6B7A] font-semibold text-base md:text-lg hover:gap-3 transition-all group/link"
          >
            Read More
            <ChevronRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
          </a>
        </article>
      ))}
    </div>
  )
}
