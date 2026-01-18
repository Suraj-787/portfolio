export function AboutHero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a] relative overflow-visible">
      {/* Floating Decorative Stickers */}
      <div className="absolute top-12 left-4 w-16 h-16 bg-purple-400 dark:bg-purple-900 rounded-full border-4 border-black dark:border-white -rotate-12 hidden lg:block" />
      <div className="absolute top-1/3 right-4 w-20 h-20 bg-teal-400 dark:bg-teal-900 border-4 border-black dark:border-white rounded-full rotate-45 hidden lg:block" />
      <div className="absolute bottom-16 left-1/4 w-14 h-14 bg-pink-400 dark:bg-pink-900 border-4 border-black dark:border-white rounded-full rotate-12 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px] text-black dark:text-white">
          <span className="bg-[#2F81F7] dark:bg-blue-900 text-white px-3 py-1 inline-block">ABOUT</span>
        </h1>
      </div>
    </section>
  )
}
