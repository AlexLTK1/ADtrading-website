'use client'

import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { services } from '@/lib/services'
import { useLocale } from '@/lib/i18n/language-provider'

export default function ServicesPage() {
  const { t } = useLocale()

  return (
    <main>
      <PageHero
        label={t.services.hero.kicker}
        title={t.services.hero.title}
        intro={t.services.hero.subtitle}
        image="/images/sourcing-market.png"
        imageAlt="Asian trade market at dawn"
      />

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">Built for the full trade journey.</h2>
            <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-accent md:block">What we do</span>
          </div>
          <div className="flex flex-col">
            {services.map((service, i) => {
              const localizedService = t.services.items?.[i]
              const serviceTitle = localizedService?.title ?? service.title
              const serviceLong = localizedService?.long ?? service.long
              const backgroundImages = [
                '/images/premium-goods.png',
                '/images/sourcing-market.png',
                '/images/trade-route.png',
                '/images/warehouse.png',
                '/images/delivery.png',
              ]

              return (
                <article
                  key={service.n}
                  tabIndex={0}
                  className="group relative isolate grid gap-5 overflow-hidden border-t-2 border-primary/15 px-5 py-9 transition-colors duration-500 hover:border-accent focus-visible:border-accent md:grid-cols-[5rem_1fr_auto] md:items-start md:gap-10 md:px-10 md:py-10"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                    style={{ backgroundImage: `url(${backgroundImages[i]})` }}
                  />
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-primary/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                  <span className="font-mono text-2xl font-semibold text-accent transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent md:text-3xl">{serviceTitle}</h2>
                    <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent">{serviceLong}</p>
                  </div>
                  <span className="hidden text-2xl text-primary transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent group-focus-visible:translate-x-2 group-focus-visible:text-accent md:block">→</span>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title={t.home.cta.title}
        body={t.home.cta.body}
        cta={t.home.cta.ctaPrimary}
      />
    </main>
  )
}
