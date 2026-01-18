import Shuffle from '@/components/shuffle'

export function ProjectsHero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px] text-black dark:text-white">
            <span className="bg-[#FFC224] dark:bg-yellow-900 text-black dark:text-white px-3 py-1 inline-block"><Shuffle text="BUILD LOG" tag="span" className="text-inherit" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} /></span>
          </h1>

          <p className="text-[#393939] dark:text-gray-400 text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-2xl">
            A collection of deployed applications, system experiments, and engineering challenges. Each project represents a learning opportunity and a step forward in building scalable, user-focused software.
          </p>
        </div>
      </div>
    </section>
  )
}
