import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Kicker } from '@/components/ui/kicker'

export function HomeHero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col overflow-hidden bg-navy">
      <Image
        src="/images/hero-city-port.png"
        alt="Asian port city skyline at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-navy/30" />
      <div
        aria-hidden
        className="panel-diagonal absolute inset-y-0 right-0 hidden w-[58%] bg-gradient-to-br from-primary/45 via-deep-blue/35 to-transparent md:block"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-14 md:px-8 md:pt-40">
        <Kicker tone="inverse" className="w-fit">
          Asia — North America trade house
        </Kicker>
        <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Sourced in Asia. <span className="text-accent">Delivered</span> with precision.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
          Asia Direct Tradings LTD. is a Vancouver-based trade house connecting North American
          markets with premium suppliers across Asia. With representatives on the ground and a
          single team accountable at every stage, we deliver an experience as dependable as the
          products are exceptional.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button render={<Link href="/contact" />} size="xl" className="rounded-sm">
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
            className="rounded-sm bg-white/10 text-white hover:bg-white/20"
          >
            Our services
          </Button>
        </div>
      </div>
    </section>
  )
}
