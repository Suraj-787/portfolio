export function LogoMarquee() {
  const items = [
    { logo: "/logos/Untitled design.svg", alt: "AI" },
    { logo: "/logos/Untitled design (1).svg", alt: "Builder" },
    { logo: "/logos/Untitled design (2).svg", alt: "Engineer" },
    { logo: "/logos/Untitled design (3).svg", alt: "Stack" },
    { logo: "/logos/Untitled design (4).svg", alt: "Systems" },
    { logo: "/logos/Untitled design (5).svg", alt: "Web3" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black dark:bg-gray-900 py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-24 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <img
              key={index}
              src={item.logo || "/placeholder.svg"}
              alt={item.alt}
              className={`h-35 w-35 object-cover object-center ${item.logo === "/logos/Untitled design (1).svg"
                  ? "scale-100"
                  : item.logo === "/logos/Untitled design (3).svg"
                    ? "scale-[1.75]"
                    : "scale-150"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
