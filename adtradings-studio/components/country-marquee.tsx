'use client'

import { useLocale } from '@/lib/i18n/language-provider'
import { ScrollReveal } from '@/components/scroll-reveal'

const countries = [
  'Japan',
  'Hong Kong',
  'China',
  'Thailand',
  'Vietnam',
  'Malaysia',
  'Taiwan',
]

export function CountryMarquee() {
  const { t } = useLocale()

  return (
    <div className="border-y border-border bg-secondary/60 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal variant="fade">
          <p className="font-mono text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
            {t.home.network.kicker}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-6">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-0">
            {/* Origin node */}
            <div className="flex items-center gap-2 md:pr-6">
              <span className="clip-corner-sm size-2.5 bg-accent" />
              <span className="text-sm font-semibold tracking-tight whitespace-nowrap">Asia</span>
            </div>

            {/* Connecting line with horizontally scrolling country labels */}
            <div className="group relative w-full flex-1 overflow-hidden border-t border-dashed border-border py-4 md:border-t-0 md:border-l md:py-0 md:pl-6">
              {/* Fade masks at the edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-secondary/60 to-transparent md:w-16" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-secondary/60 to-transparent md:w-16" />

              <div className="flex w-max animate-marquee items-center gap-x-10 whitespace-nowrap group-hover:[animation-play-state:paused]">
                {[...countries, ...countries].map((country, i) => (
                  <span
                    key={`${country}-${i}`}
                    className="text-sm font-medium text-muted-foreground"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            {/* Destination node */}
            <div className="flex items-center gap-2 border-t border-dashed border-border pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-6">
              <span className="clip-corner-sm size-2.5 bg-primary" />
              <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
                North America
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
