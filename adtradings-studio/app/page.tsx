'use client'

import { HomeHero } from '@/components/home/home-hero'
import { CountryMarquee } from '@/components/country-marquee'
import { WhyUs } from '@/components/home/why-us'
import { WhatWeDo } from '@/components/home/what-we-do'
import { ServicesPreview } from '@/components/home/services-preview'
import { CtaBand } from '@/components/cta-band'
import { useLocale } from '@/lib/i18n/language-provider'

export default function HomePage() {
  const { t } = useLocale()

  return (
    <main>
      <HomeHero />
      <CountryMarquee />
      <WhyUs />
      <WhatWeDo />
      <ServicesPreview />
      <CtaBand
        title={t.home.cta.title}
        body={t.home.cta.body}
        cta={t.home.cta.ctaPrimary}
      />
    </main>
  )
}
