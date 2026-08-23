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

      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:px-8 md:py-28">
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
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Kicker className="w-fit">{t.about.process.kicker}</Kicker>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl leading-[1.12] font-semibold tracking-tight md:text-4xl">
            {t.about.process.title}
          </h2>
          <div className="mt-14 flex flex-col">
            {t.about.process.steps.map((step, i) => {
              const backgroundImages = [
                '/images/about-inspection.png',
                '/images/warehouse-interior.png',
                '/images/port-containers.png',
              ]

              return (
                <article
                  key={step.title}
                  tabIndex={0}
                  className={`group relative isolate grid gap-6 overflow-hidden border-t-2 border-primary/15 px-5 py-10 transition-colors duration-500 hover:border-accent focus-visible:border-accent md:grid-cols-[5rem_1fr_auto] md:items-start md:gap-10 md:px-10 ${
                    i === 0 ? 'border-t-0' : ''
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                    style={{ backgroundImage: `url(${backgroundImages[i]})` }}
                  />
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-primary/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                  <span className="font-mono text-2xl font-semibold text-accent transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent">{step.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent">{step.title}</h3>
                    <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent">
                      {step.body}
                    </p>
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
