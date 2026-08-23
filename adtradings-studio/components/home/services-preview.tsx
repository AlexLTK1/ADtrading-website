'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/services'
import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'

export function ServicesPreview() {
  const { t } = useLocale()

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Kicker className="w-fit">{t.home.servicesPreview.kicker}</Kicker>
          <h2 className="mt-6 max-w-xl text-balance text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl">
            {t.home.servicesPreview.title}
          </h2>
        </div>
        <Link
          href="/services"
          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        >
          {t.home.servicesPreview.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>

      <div className="mt-16 flex flex-col">
        {services.map((service, i) => (
          <Link
            key={service.title}
            href="/services"
            className={`group flex items-start gap-6 border-t border-border py-8 transition-colors hover:bg-secondary/60 md:items-center ${i === 0 ? 'border-t-0 pt-0' : ''}`}
          >
            <span className="w-10 shrink-0 font-mono text-sm text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="flex-1 text-xl font-semibold tracking-tight md:text-2xl">
              {service.title}
            </h3>
            <p className="hidden max-w-md flex-1 text-pretty leading-relaxed text-muted-foreground md:block">
              {service.short}
            </p>
            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        ))}
      </div>
    </section>
  )
}
