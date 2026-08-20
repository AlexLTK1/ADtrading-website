import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <Image
        src="/images/hero-port.png"
        alt="Container shipping port at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07]/95 via-[#0e0b07]/70 to-[#0e0b07]/45" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-14 md:px-8 md:pt-40">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/70">
          Asia <span className="text-white">—</span> North America
        </p>
        <h1 className="mt-8 max-w-5xl text-balance font-mono text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
          Premium Asian goods, <span className="text-[#8fd6b4]">sourced and delivered</span> with
          precision.
        </h1>
        <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
          Asia Direct Tradings LTD. is a Vancouver-based trade house connecting North American
          markets with premium suppliers across Asia. With representatives on the ground and a
          single team accountable at every stage, we deliver an experience as dependable as the
          products are exceptional.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 font-mono text-sm uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a consultation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-7 py-4 font-mono text-sm uppercase tracking-[0.15em] text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Our services
          </Link>
        </div>
      </div>
    </section>
  )
}
