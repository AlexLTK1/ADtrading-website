'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'
import { ScrollReveal } from '@/components/scroll-reveal'

export function WhatWeDo() {
  const { t } = useLocale()
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-0">
        <div className="flex flex-col justify-center px-4 py-6 md:px-14 md:py-10">
          <ScrollReveal delay={80}>
            <Kicker className="w-fit">{t.home.whatWeDo.kicker}</Kicker>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <h2 className="mt-6 text-balance text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl">
              {t.home.whatWeDo.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.home.whatWeDo.body}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={320}>
            <Link
              href="/about"
              className="group/link mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              {t.nav.about}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
        <ScrollReveal variant="right" className="relative min-h-[320px] overflow-hidden md:min-h-[520px]">
          <div className="clip-diagonal-r absolute inset-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={(event) => {
                event.currentTarget.currentTime = 0.5
              }}
              onCanPlay={(event) => {
                event.currentTarget.currentTime = 0.5
              }}
              onSeeked={() => setVideoReady(true)}
              onTimeUpdate={(event) => {
                if (event.currentTarget.currentTime < 0.5) {
                  event.currentTarget.currentTime = 0.5
                }
              }}
              className={`h-full w-full scale-[1.5] object-cover object-center transition-opacity duration-200 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
            >
              <source src="/videos/port-timelapse.webm#t=0.5" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-primary/15" />
            <span className="sr-only">Video attribution: Anibal Trejo, CC BY 3.0, via Wikimedia Commons</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
