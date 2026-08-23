'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'

export function WhatWeDo() {
  const { t } = useLocale()

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-0">
        <div className="relative min-h-[320px] overflow-hidden md:min-h-[520px]">
          <div className="clip-diagonal-r absolute inset-0">
            <Image
              src="/images/warehouse.png"
              alt="Interior of a modern distribution warehouse"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/15" />
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-6 md:px-14 md:py-10">
          <Kicker className="w-fit">{t.home.whatWeDo.kicker}</Kicker>
          <h2 className="mt-6 text-balance text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl">
            {t.home.whatWeDo.title}
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.home.whatWeDo.body}
          </p>
          <Link
            href="/about"
            className="group/link mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            {t.nav.about}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
