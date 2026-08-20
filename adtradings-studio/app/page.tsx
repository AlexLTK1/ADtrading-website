import { HomeHero } from '@/components/home/home-hero'
import { CountryMarquee } from '@/components/country-marquee'
import { WhyUs } from '@/components/home/why-us'
import { WhatWeDo } from '@/components/home/what-we-do'
import { ServicesPreview } from '@/components/home/services-preview'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <CountryMarquee />
      <WhyUs />
      <WhatWeDo />
      <ServicesPreview />
      <CtaBand
        eyebrow="One form, one business day"
        title="Tell us the product. We'll source it the right way."
        body="Snacks are our specialty, but we source any goods across Asia. Send us what you're after and our agents reply within one business day."
      />
    </main>
  )
}
