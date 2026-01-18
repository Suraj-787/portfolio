import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import ClickSpark from "@/components/click-spark"
import LightRays from "@/components/light-rays"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Full-Stack Developer & AI Builder",
  description:
    "Portfolio of a full-stack developer building AI applications and scalable products. Next.js, React, Node.js, Python, and DevOps.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden cursor-none`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Light Rays Background - Dark Mode Only */}
          <div className="hidden dark:block fixed inset-0 z-10 opacity-60 pointer-events-none">
            <LightRays
              raysOrigin="top-center"
              raysColor="#2F81F7"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
            />
          </div>

          <CustomCursor />
          <ClickSpark sparkColor="#FFC224" sparkSize={15} sparkRadius={25} sparkCount={12} duration={600}>
            {children}
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  )
}
