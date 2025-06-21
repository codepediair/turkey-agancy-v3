export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">Our Students Stats</h2>
          <p>our acadmeia granted you find best universties and find a job in turkey</p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+1200</div>
            <p>Education satisfaction</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">1 Million</div>
            <p>Foreign students</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">80%</div>
            <p>Stay in Turkey after studying</p>
          </div>
        </div>
      </div>
    </section>
  )
}
