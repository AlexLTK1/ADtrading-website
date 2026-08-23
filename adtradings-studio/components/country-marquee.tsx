'use client'

import { useLocale } from '@/lib/i18n/language-provider'

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
        <p className="font-mono text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
          {t.home.network.kicker}
        </p>
        <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-0">
          {/* Origin node */}
          <div className="flex items-center gap-2 md:pr-6">
            <span className="clip-corner-sm size-2.5 bg-accent" />
            <span className="text-sm font-semibold tracking-tight whitespace-nowrap">Asia</span>
          </div>

          {/* Connecting line with country labels */}
          <div className="relative flex w-full flex-1 flex-wrap items-center gap-x-6 gap-y-3 border-t border-dashed border-border py-4 md:border-t-0 md:border-l md:py-0 md:pl-6">
            {countries.map((country) => (
              <span key={country} className="text-sm font-medium text-muted-foreground">
                {country}
              </span>
            ))}
          </div>

          {/* Destination node */}
          <div className="flex items-center gap-2 border-t border-dashed border-border pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-6">
            <span className="clip-corner-sm size-2.5 bg-primary" />
            <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
              North America
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
