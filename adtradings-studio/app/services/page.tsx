import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services — Asia Direct Tradings LTD.',
  description:
    'Five ways to work with us: B2B wholesale supply, sourcing, market expansion for Asian brands, reverse export to Asia, and Vancouver local delivery.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        label="Five ways to work with us"
        title="Choose the lane that matches your business."
        intro="From wholesale supply to reverse export, every service runs through one seamless desk — with sourcing agents stationed across Asia and a team rooted in Vancouver."
        image="/images/sourcing-market.png"
        imageAlt="Asian trade market at dawn"
      />

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="flex flex-col divide-y divide-border border-b border-border">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.n}
                className="grid gap-6 py-12 md:grid-cols-[auto_1fr_1.4fr] md:gap-12 md:py-16"
              >
                <span className="font-mono text-sm text-primary">{service.n}</span>
                <div className="flex items-start gap-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <h2 className="text-balance font-mono text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                </div>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  {service.long}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <CtaBand
        eyebrow="One form, one business day"
        title="Not sure which lane fits? Start with a conversation."
        body="Tell us the product and the market — our agents reply within one business day with the right approach."
      />
    </main>
  )
}
