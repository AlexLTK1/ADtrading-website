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
    <section className="relative flex min-h-[95vh] flex-col overflow-hidden bg-background md:min-h-[42rem]">
      {/* Mobile: full-bleed photo with a dark wash so the header can float on top. */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/hero-port.png"
          alt="Aerial view of a busy Asia-Pacific shipping port at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-primary/40" />
      </div>

      {/* Desktop / tablet: TOKI-style diagonal split — the photo occupies a clipped
          panel on the right while the section's own light background shows through
          as the wedge on the left, where the headline and copy live. The header
          floats transparently on top of this same composition (logo over the wedge,
          nav over the photo) and only becomes a solid bar once scrolled past it. */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 55% 100%)' }}
      >
        <Image
          src="/images/hero-port.png"
          alt="Aerial view of a busy Asia-Pacific shipping port at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-24 pb-14 md:px-8 md:pb-20 md:pt-28">
        <div className="max-w-xl md:drop-shadow-none">
          <Kicker tone="inverse" className="w-fit md:hidden">
            {t.home.hero.kicker}
          </Kicker>
          <Kicker tone="accent" className="hidden w-fit md:flex">
            {t.home.hero.kicker}
          </Kicker>
          <h1 className="mt-5 max-w-xl text-balance text-5xl leading-[0.98] font-semibold tracking-tight text-primary-foreground sm:text-6xl md:text-foreground md:text-7xl lg:text-[5rem]">
            {t.home.hero.title} <span className="text-highlight">{t.home.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground md:text-foreground/80 md:text-lg">
            {t.home.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button render={<Link href="/contact" />} size="xl" variant="inverse" className="md:bg-primary md:text-primary-foreground md:hover:bg-accent md:hover:text-accent-foreground">
              {t.home.hero.ctaPrimary}
              <ArrowUpRight data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="/services" />}
              size="xl"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground md:border-primary/30 md:text-foreground md:hover:border-accent md:hover:bg-accent md:hover:text-accent-foreground"
            >
              {t.home.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
