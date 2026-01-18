"use client"

interface PillBadgeProps {
    children: React.ReactNode
    variant?: "success" | "info" | "warning" | "default"
    className?: string
}

export function PillBadge({ children, variant = "default", className = "" }: PillBadgeProps) {
    const variants = {
        success: "bg-green-400 text-black border-black dark:border-white",
        info: "bg-blue-400 text-black border-black dark:border-white",
        warning: "bg-yellow-400 text-black border-black dark:border-white",
        default: "bg-gray-200 dark:bg-gray-700 text-black dark:text-white border-black dark:border-white",
    }

    return (
        <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 border-3 border-black dark:border-white rounded-full text-sm font-bold ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    )
}
