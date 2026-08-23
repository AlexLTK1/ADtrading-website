import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function WhatWeDo() {
  return (
    <section className="grid items-stretch md:grid-cols-2">
      <div className="relative min-h-[360px] md:min-h-[560px]">
        <Image
          src="/images/warehouse.png"
          alt="Interior of a modern distribution warehouse"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center bg-card px-5 py-16 md:px-14 md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">What we do</p>
        <h2 className="mt-6 text-balance font-mono text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
          From factory floor to store shelf.
        </h2>
        <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          We are a trade house rooted in Vancouver, with sourcing agents stationed across Asia.
          Small enough to answer the phone, expert enough to clear customs, label to CFIA and FDA
          standards, and deliver a seamless experience from first quote to store door.
        </p>
        <Link
          href="/about"
          className="group mt-10 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-primary"
        >
          Our story
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  )
}
