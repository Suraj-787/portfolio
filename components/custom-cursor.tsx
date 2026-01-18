"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

// Define bubble configurations: size and speed (smaller = faster)
const BUBBLES = [
    { size: 24, speed: 0.08, opacity: 0.4 },
    { size: 20, speed: 0.1, opacity: 0.45 },
    { size: 16, speed: 0.12, opacity: 0.5 },
    { size: 12, speed: 0.15, opacity: 0.55 },
    { size: 10, speed: 0.18, opacity: 0.6 },
]

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [bubblePositions, setBubblePositions] = useState(
        BUBBLES.map(() => ({ x: 0, y: 0 }))
    )
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement
            const isInteractive = target.closest('a, button, input, textarea, [role="button"]')
            setIsHovering(!!isInteractive)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)
        }
    }, [])

    // Animate all bubbles - smooth trailing
    useEffect(() => {
        let animationFrameId: number

        const animate = () => {
            setBubblePositions(prevPositions =>
                prevPositions.map((pos, index) => {
                    const bubble = BUBBLES[index]
                    const dx = mousePosition.x - pos.x
                    const dy = mousePosition.y - pos.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    // Stop when very close to target
                    if (distance < 0.5) {
                        return mousePosition
                    }

                    return {
                        x: pos.x + dx * bubble.speed,
                        y: pos.y + dy * bubble.speed,
                    }
                })
            )

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => cancelAnimationFrame(animationFrameId)
    }, [mousePosition])

    if (!mounted) return null

    // Theme-based colors
    const isDark = theme === 'dark'
    const primaryColor = isDark ? '#00ffff' : '#FFC224' // Cyan for dark, Yellow for light
    const secondaryColor = isDark ? '#6366F1' : '#FF6B7A' // Indigo for dark, Pink for light

    return (
        <>
            {/* Inner dot - follows instantly */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
            >
                <div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150"
                    style={{
                        width: isClicking ? '6px' : isHovering ? '8px' : '6px',
                        height: isClicking ? '6px' : isHovering ? '8px' : '6px',
                        background: primaryColor,
                        boxShadow: `0 0 ${isHovering ? '12px' : '8px'} ${primaryColor}, 0 0 ${isHovering ? '20px' : '15px'} ${primaryColor}`,
                    }}
                />
            </div>

            {/* Multiple trailing bubbles with theme colors */}
            {BUBBLES.map((bubble, index) => (
                <div
                    key={index}
                    className="fixed top-0 left-0 pointer-events-none z-[9998]"
                    style={{
                        transform: `translate(${bubblePositions[index].x}px, ${bubblePositions[index].y}px)`,
                    }}
                >
                    <div
                        className="relative -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300"
                        style={{
                            width: isClicking ? `${bubble.size - 4}px` : isHovering ? `${bubble.size + 6}px` : `${bubble.size}px`,
                            height: isClicking ? `${bubble.size - 4}px` : isHovering ? `${bubble.size + 6}px` : `${bubble.size}px`,
                            background: index % 2 === 0
                                ? `radial-gradient(circle at 30% 30%, ${primaryColor}${Math.floor(bubble.opacity * 255).toString(16).padStart(2, '0')}, ${primaryColor}${Math.floor(bubble.opacity * 0.3 * 255).toString(16).padStart(2, '0')})`
                                : `radial-gradient(circle at 30% 30%, ${secondaryColor}${Math.floor(bubble.opacity * 255).toString(16).padStart(2, '0')}, ${secondaryColor}${Math.floor(bubble.opacity * 0.3 * 255).toString(16).padStart(2, '0')})`,
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            border: `1.5px solid ${index % 2 === 0 ? primaryColor : secondaryColor}40`,
                            boxShadow: isHovering
                                ? `0 0 ${bubble.size}px ${index % 2 === 0 ? primaryColor : secondaryColor}80, inset 0 2px 4px rgba(255, 255, 255, 0.3)`
                                : `0 0 ${bubble.size * 0.5}px ${index % 2 === 0 ? primaryColor : secondaryColor}60, inset 0 1px 2px rgba(255, 255, 255, 0.2)`,
                        }}
                    />
                </div>
            ))}

            {/* Outer ring on hover */}
            {isHovering && (
                <div
                    className="fixed top-0 left-0 pointer-events-none z-[9997]"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    }}
                >
                    <div
                        className="relative -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 animate-pulse"
                        style={{
                            width: '50px',
                            height: '50px',
                            border: `2px solid ${primaryColor}60`,
                            boxShadow: `0 0 20px ${primaryColor}40`,
                        }}
                    />
                </div>
            )}
        </>
    )
}
