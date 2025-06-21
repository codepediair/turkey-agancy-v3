'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard, Tally1, Tally2, Tally3, Tally4 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/magicui/border-beam'
import { Button } from './ui/button'

export default function Features() {
  type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
  const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

  const images = {
    'item-1': {
      image: '/Yeni-Yuzyil-University.jpg',
      alt: 'Yeni Yuzyil University',
    },
    'item-2': {
      image: '/Isik.jpeg',
      alt: 'Isik University',
    },
    'item-3': {
      image: '/Okan-University.png',
      alt: 'Okan University',
    },
    'item-4': {
      image: '/Istanbul-Ticaret-University.jpg',
      alt: 'Istanbul Ticaret University',
    },
  }

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">Find University</h2>
          <p>we work with best Universities in turkey you can see and read more about them</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Tally1 className="size-4" />
                  Yeni Yüzil University
                </div>
              </AccordionTrigger>
              <AccordionContent>
                is located in the “Topkapi” region on the European side of Istanbul:
                It consists of 7 floors and an annex with ten floors containing houses,
                the academic and administrative units,
                <Button variant="link" className='text-blue-400 block p-0'>Read More</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Tally2 className="size-4" />
                  Isik University
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Işik University is one of the well-known private universities in Turkey and was founded in 1996 by Feyziye Schools Foundation.
                <Button variant="link" className='text-blue-400 block p-0'>Read More</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Tally3 className="size-4" />
                  Okan University
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Okan University is a private university in Istanbul that offers a
                great education for both Turkish and international students. With many degree programs in both the English and Turkish languages.
                <Button variant="link" className='text-blue-400 block p-0'>Read More</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Tally4 className="size-4" />
                  Istanbul Ticaret University
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Istanbul Ticaret University is one of the private research universities in Turkey, distinguished by its academic level and highly qualified faculty members.
                <Button variant="link" className='text-blue-400 block p-0'>Read More</Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
