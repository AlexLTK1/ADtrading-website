import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Kicker } from '@/components/ui/kicker'

export function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid items-stretch gap-10 rounded-3xl bg-card p-3 shadow-sm md:grid-cols-2 md:gap-0 md:p-4">
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl md:min-h-[520px]">
          <Image
            src="/images/warehouse.png"
            alt="Interior of a modern distribution warehouse"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-6 md:px-14 md:py-10">
          <Kicker className="w-fit">What we do</Kicker>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            From factory floor to store shelf.
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We are a trade house rooted in Vancouver, with sourcing agents stationed across Asia.
            Small enough to answer the phone, expert enough to clear customs, label to CFIA and
            FDA standards, and deliver a seamless experience from first quote to store door.
          </p>
          <Link
            href="/about"
            className="group/link mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Our story
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
