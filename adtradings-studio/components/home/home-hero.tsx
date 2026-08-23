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
    <section className="relative flex min-h-[95vh] flex-col overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-port.png"
          alt="Aerial view of a busy Asia-Pacific shipping port at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Depth gradient for text legibility over the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />

      {/* Diagonal white wedge — backdrop for the logo/nav at the top */}
      <div className="clip-wedge-l absolute inset-x-0 top-0 h-[46%] bg-background md:h-[50%]" />
      <div className="absolute top-0 right-[8%] hidden h-1/3 w-px bg-accent/60 md:block" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-32 pb-14 md:px-8 md:pb-20">
        <Kicker tone="inverse" className="w-fit">
          {t.home.hero.kicker}
        </Kicker>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl leading-[1.05] font-semibold tracking-tight text-primary-foreground sm:text-5xl md:text-7xl lg:text-[5.5rem]">
          {t.home.hero.title} <span className="text-accent">{t.home.hero.titleAccent}</span>
        </h1>

        <div className="clip-corner mt-8 max-w-md bg-background px-6 py-5 md:mt-10">
          <p className="text-pretty text-sm leading-relaxed text-foreground md:text-base">
            {t.home.hero.subtitle}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
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
