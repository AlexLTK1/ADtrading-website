'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'
import { OptimusSphere } from '@/components/home/optimus-sphere'

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

      {/* Blue photographic wash so the white type stays easy to read against the photo. */}
      <div className="absolute inset-0 bg-accent/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-accent/20 to-transparent" />

      <div aria-hidden="true" className="pointer-events-none absolute right-[-8rem] top-1/2 z-0 h-[20rem] w-[20rem] -translate-y-1/2 opacity-60 sm:right-[-2rem] sm:h-[26rem] sm:w-[26rem] lg:right-[6%] lg:h-[31rem] lg:w-[31rem]">
        <OptimusSphere />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <div className="max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          <Kicker tone="inverse" className="w-fit">
            {t.home.hero.kicker}
          </Kicker>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl leading-[0.98] font-semibold tracking-tight text-primary-foreground sm:text-6xl md:text-8xl lg:text-[6.5rem]">
            {t.home.hero.title} <span className="text-highlight">{t.home.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground md:text-xl">
            {t.home.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button render={<Link href="/contact" />} size="xl" variant="inverse">
              {t.home.hero.ctaPrimary}
              <ArrowUpRight data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="/services" />}
              size="xl"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              {t.home.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
