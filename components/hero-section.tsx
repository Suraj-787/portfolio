'use client'

import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Magnet from "@/components/magnet"
import Shuffle from "@/components/shuffle"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a] relative">
      {/* Floating Decorative Stickers - Behind content */}
      <div className="absolute -top-8 -left-6 w-20 h-20 bg-pink-400 dark:bg-pink-900 rounded-full border-4 border-black dark:border-white rotate-12 hidden lg:block z-0" />
      <div className="absolute bottom-24 -left-4 w-12 h-24 bg-yellow-400 dark:bg-yellow-900 border-4 border-black dark:border-white rounded-full rotate-45 hidden lg:block z-0" />

      {/* Floating Decorative Stickers - Above content */}
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-teal-400 dark:bg-teal-900 rounded-full border-4 border-black dark:border-white rotate-12 hidden lg:block z-0" />
      <div className="absolute bottom-12 right-1/4 w-14 h-14 bg-purple-400 dark:bg-purple-900 border-4 border-black dark:border-white rounded-full -rotate-6 hidden lg:block z-20" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px] text-black dark:text-white">
            I'm a <br /><span className="bg-[#FF6B7A] dark:bg-red-900 text-white px-3 py-1 inline-block"><Shuffle text="Full-Stack" tag="span" className="text-inherit" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} /><br /><Shuffle text="Developer" tag="span" className="text-inherit" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} /></span> building{" "}
            <span className="bg-[#2F81F7] dark:bg-blue-900 text-white px-3 py-1 inline-block"><Shuffle text="AI & Scalable" tag="span" className="text-inherit" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} /><br /><Shuffle text="Products" tag="span" className="text-inherit" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} /></span>
          </h1>

          <p className="text-[#393939] dark:text-gray-400 text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            3rd year AI & Data Science student passionate about building intelligent AI systems and scalable web applications. Specializing in LLM integrations, multi-agent architectures, and full-stack development.
          </p>

          {/* Available for Freelance Badge - Back to original position */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-400 dark:bg-green-900 text-black dark:text-white border-3 border-black dark:border-white rounded-full text-sm font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Available for Oppurtunities
            </span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Link href="mailto:iamsuraj787@gmail.com">
              <Button className="bg-[#FFC224] dark:bg-yellow-900 text-black dark:text-white border-4 border-black dark:border-white rounded-full px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold h-auto w-full sm:w-auto sm:min-w-[240px] hover:bg-[#FFD666] dark:hover:bg-yellow-800 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200">
                <Mail className="w-5 h-5" />
                Get in touch
              </Button>
            </Link>
            <Button
              variant="outline"
              className="bg-white dark:bg-transparent border-4 border-black dark:border-white text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold h-auto w-full sm:w-auto sm:min-w-[240px] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200"
            >
              <FolderOpen className="w-5 h-5" />
              View projects
            </Button>
          </div>
        </div>


        <div className="flex justify-center md:justify-end relative">
          {/* Name Badge - Top right, replacing teal circle */}
          <div className="absolute -top-40 -right-8 z-20 hidden lg:block">
            <Magnet padding={80} disabled={false} magnetStrength={3}>
              <span className="inline-flex items-center px-6 py-2.5 bg-blue-400 dark:bg-blue-900 text-black dark:text-white border-4 border-black dark:border-white rounded-full text-base md:text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] cursor-pointer">
                Suraj
              </span>
            </Magnet>
          </div>

          {/* Cursor Pointer - Pointing to image */}
          <div className="absolute -top-20 right-18 z-20 hidden lg:block">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="transform rotate-[260deg]">
              <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                fill="white"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dark:fill-black dark:stroke-white" />
            </svg>
          </div>



          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] dark:bg-yellow-900 border-4 border-black dark:border-white rounded-3xl overflow-visible shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-2 hover:rotate-2 cursor-pointer group">
            <div className="absolute -top-25 left-0 right-0 bottom-0 rounded-3xl overflow-hidden">
              <img
                src="/image.png"
                alt="Suraj - Developer"
                className="w-full h-full object-cover object-top dark:[filter:drop-shadow(0_0_2px_rgba(255,255,255,0.5))_drop-shadow(0_0_4px_rgba(255,255,255,0.3))] transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
