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

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`grid gap-6 border-t border-border py-10 md:grid-cols-[auto_1fr] md:gap-12 ${i === 0 ? 'border-t-0 pt-0' : ''}`}
            >
              <span className="shrink-0 font-mono text-sm text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-balance text-2xl leading-tight font-semibold tracking-tight md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  {service.long}
                </p>
              </div>
            </article>
          ))}
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
