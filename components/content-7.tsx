import { Zap, HeartHandshake } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">About US</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              It was established in 2016 that the number of Iranian students was less than 1000 people in private universities , this number has now reached more than 10000 people in 2024, which means that the average every year is 2 times compared to the previous year. Many universities like atlas,istinye,Fenerbahçe ,galata & nişantaşi were opened after us, and we played a significant role in increasing the number of foreign students, especially Iranian
            </p>
            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Best way</h3>
                </div>
                <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="size-4" />
                  <h3 className="text-sm font-medium">Healpful</h3>
                </div>
                <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
              </div>
            </div>
          </div>
          <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                className="hidden rounded-[15px] dark:block"
                alt="team"
                width={1206}
                height={612} />
              <Image src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                className="rounded-[15px] shadow dark:hidden"
                alt="team"
                width={1206}
                height={612} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
