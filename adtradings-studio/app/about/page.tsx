'use client'

import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'

export default function AboutPage() {
  const { t } = useLocale()

  return (
    <main>
      <PageHero
        label={t.about.hero.kicker}
        title={t.about.hero.title}
        intro={t.about.hero.subtitle}
        image="/images/about-vancouver.png"
        imageAlt="Vancouver harbour and port at golden hour with coastal mountains"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:px-8 md:py-28">
        <div className="relative min-h-[340px] overflow-hidden shadow-sm md:min-h-[560px]">
          <div className="clip-panel-r absolute inset-0 z-10 hidden bg-primary/10 md:block" />
          <Image
            src="/images/about-inspection.png"
            alt="A sourcing agent inspecting packaged goods at an Asian supplier"
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <Kicker className="w-fit">{t.about.story.kicker}</Kicker>
          <h2 className="mt-6 text-balance text-3xl leading-[1.12] font-semibold tracking-tight md:text-4xl">
            {t.about.story.title}
          </h2>
          <div className="mt-7 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.about.story.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Kicker className="w-fit">{t.about.process.kicker}</Kicker>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl leading-[1.12] font-semibold tracking-tight md:text-4xl">
            {t.about.process.title}
          </h2>
          <div className="mt-14 flex flex-col">
            {t.about.process.steps.map((step, i) => (
              <div
                key={step.title}
                className={`grid gap-6 border-t border-border py-10 md:grid-cols-[auto_1fr] md:gap-12 ${
                  i === 0 ? 'border-t-0 pt-0' : ''
                }`}
              >
                <span className="shrink-0 font-mono text-sm text-accent">{step.n}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
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
