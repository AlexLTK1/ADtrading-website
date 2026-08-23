'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'

export function HomeHero() {
  const { t } = useLocale()

  return (
    <section className="relative flex min-h-[92vh] flex-col overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-port.png"
          alt="Container shipping port at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Diagonal color-block overlay */}
      <div className="clip-panel-r absolute inset-0 bg-primary/92" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

      {/* Thin geometric line accents */}
      <div className="absolute top-0 left-[28%] hidden h-full w-px bg-primary-foreground/15 md:block" />
      <div className="absolute top-0 right-[8%] hidden h-1/3 w-px bg-accent/60 md:block" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-14 md:px-8 md:pt-40">
        <Kicker tone="inverse" className="w-fit">
          {t.home.hero.kicker}
        </Kicker>
        <h1 className="mt-8 max-w-4xl text-balance text-4xl leading-[1.08] font-semibold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {t.home.hero.title} <span className="text-accent">{t.home.hero.titleAccent}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          {t.home.hero.subtitle}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button render={<Link href="/contact" />} size="xl" variant="inverse">
            {t.home.hero.ctaPrimary}
            <ArrowUpRight data-icon="inline-end" />
          </Button>
          <Button
            render={<Link href="/services" />}
            size="xl"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            {t.home.hero.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  )
}
