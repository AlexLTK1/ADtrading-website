'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Kicker } from '@/components/ui/kicker'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n/language-provider'

export default function ProductsPage() {
  const { t } = useLocale()

  return (
    <main>
      <PageHero
        label={t.products.hero.kicker}
        title={t.products.hero.title}
        intro={t.products.hero.subtitle}
        image="/images/premium-goods.png"
        imageAlt="Premium Asian snacks and specialty goods arranged on a warm surface"
      />

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">Selected categories, sourced with care.</h2>
            <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-accent md:block">Our range</span>
          </div>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {t.products.categories.map((category, i) => (
            <div
              key={category.title}
              className={`border-t border-border py-10 md:py-14 md:pr-10 ${
                i % 2 === 0 ? 'md:border-r' : 'md:pl-10'
              } ${i < 2 ? 'md:border-t' : ''} ${i === 0 || i === 1 ? '' : ''}`}
            >
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{category.title}</h3>
              <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                {category.body}
              </p>
            </div>
          ))}
        </div>

        <Button render={<Link href="/contact" />} size="lg" className="mt-14">
          {t.nav.getInTouch}
          <ArrowUpRight
            data-icon="inline-end"
            className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
          />
        </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="relative grid items-stretch overflow-hidden md:grid-cols-2">
          <div className="absolute inset-0 hidden bg-primary md:block" />
          <div className="relative flex flex-col justify-center bg-primary px-5 py-16 text-primary-foreground md:px-14 md:py-24">
            <Kicker tone="inverse" className="w-fit">
              Import-ready, compliant
            </Kicker>
            <h2 className="mt-5 text-balance text-3xl leading-[1.12] font-semibold tracking-tight md:text-4xl">
              Everything lands ready to sell.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
              We handle supplier vetting, ocean freight, customs clearance and bilingual compliance
              labelling in-house. What arrives in Vancouver is exactly what you approved — whether
              it&apos;s a single line or a full container.
            </p>
          </div>
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <Image
              src="/images/warehouse.png"
              alt="Neatly stocked distribution warehouse"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBand
        title={t.products.cta.title}
        body={t.products.cta.body}
        cta={t.products.cta.button}
      />
    </main>
  )
}
