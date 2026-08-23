import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Kicker } from '@/components/ui/kicker'

export function HomeHero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col overflow-hidden">
      <Image
        src="/images/hero-port.png"
        alt="Container shipping port at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07]/95 via-[#0e0b07]/65 to-[#0e0b07]/35" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-14 md:px-8 md:pt-40">
        <Kicker tone="inverse" className="w-fit">
          Asia — North America trade house
        </Kicker>
        <h1 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Premium Asian goods, <span className="text-[#8fd6b4]">sourced and delivered</span> with
          precision.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
          Asia Direct Tradings LTD. is a Vancouver-based trade house connecting North American
          markets with premium suppliers across Asia. With representatives on the ground and a
          single team accountable at every stage, we deliver an experience as dependable as the
          products are exceptional.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button render={<Link href="/contact" />} size="xl">
            Request a consultation
            <ArrowUpRight
              data-icon="inline-end"
              className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            />
          </Button>
          <Button
            render={<Link href="/services" />}
            size="xl"
            variant="inverse"
            className="bg-white/10 text-white hover:bg-white/20"
          >
            Our services
          </Button>
        </div>
      </div>
    </section>
  )
}
