'use client'

import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'

export function WhyUs() {
  const { t } = useLocale()

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <Kicker className="w-fit">{t.home.whyUs.kicker}</Kicker>
          <h2 className="mt-6 text-balance text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl">
            {t.home.whyUs.title}
          </h2>
        </div>

        <div className="flex flex-col">
          {t.home.whyUs.items.map((point, i) => (
            <div
              key={point.title}
              className={`flex gap-6 border-t border-border py-8 ${i === 0 ? 'border-t-0 pt-0' : ''}`}
            >
              <span className="shrink-0 font-mono text-sm text-accent">{point.n}</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{point.title}</h3>
                <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
