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

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="grid gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm md:grid-cols-[auto_1fr] md:gap-10 md:p-10"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                    {service.long}
                  </p>
                </div>
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
