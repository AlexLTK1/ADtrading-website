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
            {services.map((service, i) => (
              <article key={service.title} className="group grid gap-5 border-t-2 border-primary/15 py-9 transition-colors hover:border-accent md:grid-cols-[5rem_1fr_auto] md:items-start md:gap-10">
                <span className="font-mono text-2xl font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{service.title}</h2>
                  <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{service.long}</p>
                </div>
                <span className="hidden text-2xl text-primary transition-transform group-hover:translate-x-2 md:block">→</span>
              </article>
            ))}
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
