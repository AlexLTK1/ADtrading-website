import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Kicker } from '@/components/ui/kicker'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Products — Asia Direct Tradings LTD.',
  description:
    'From snacks and food to household and general goods, we source virtually anything across Asia. Contact us for available products or a custom request.',
}

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        label="What we supply"
        title="If it comes from Asia, we can source it."
        intro="Snacks and food are our specialty, but we don't stop there — from everyday goods to hard-to-find lines, our agents find it, vet it and land it import-ready in North America."
        image="/images/premium-goods.png"
        imageAlt="Premium Asian snacks and specialty goods arranged on a warm surface"
      />

      <section className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
        <Kicker className="mx-auto">How it works</Kicker>
        <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.12] tracking-tight md:text-4xl">
          One desk for anything you want from Asia.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          We keep a rotating range of snacks, drinks and specialty foods ready to ship, and we
          source household items and general goods to order. Rather than list a fixed catalogue,
          we&apos;d rather hear what you&apos;re after — tell us the product and roughly how much,
          and we&apos;ll come back with import-ready options and pricing within one business day.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8 text-left shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">Available now</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Ask us for our current in-stock snacks and food lines — contact us and we&apos;ll
              share what&apos;s ready to ship today.
            </p>
          </div>
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8 text-left shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">Custom request</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Looking for something specific — food or otherwise? Send us the details and we&apos;ll
              source it for you.
            </p>
          </div>
        </div>

        <Button render={<Link href="/contact" />} size="lg" className="mt-12">
          Contact us for details
          <ArrowUpRight
            data-icon="inline-end"
            className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
          />
        </Button>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid items-stretch overflow-hidden rounded-3xl bg-card shadow-sm md:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-24">
            <Kicker className="w-fit">Import-ready, compliant</Kicker>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.12] tracking-tight md:text-4xl">
              Everything lands ready to sell.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
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
        eyebrow="Just ask"
        title="Tell us what you're looking for."
        body="Whether it's our current stock or a custom source, contact us and we'll reply within one business day."
        cta="Contact us"
      />
    </main>
  )
}
