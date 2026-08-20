import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'

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
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">How it works</p>
        <h2 className="mt-6 text-balance font-mono text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
          One desk for anything you want from Asia.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          We keep a rotating range of snacks, drinks and specialty foods ready to ship, and we
          source household items and general goods to order. Rather than list a fixed catalogue,
          we&apos;d rather hear what you&apos;re after — tell us the product and roughly how much,
          and we&apos;ll come back with import-ready options and pricing within one business day.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          <div className="flex flex-col bg-background p-8 text-left">
            <h3 className="font-mono text-lg font-medium tracking-tight">Available now</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Ask us for our current in-stock snacks and food lines — contact us and we&apos;ll
              share what&apos;s ready to ship today.
            </p>
          </div>
          <div className="flex flex-col bg-background p-8 text-left">
            <h3 className="font-mono text-lg font-medium tracking-tight">Custom request</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Looking for something specific — food or otherwise? Send us the details and we&apos;ll
              source it for you.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="group mt-12 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 font-mono text-sm uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Contact us for details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>

      <section className="grid items-stretch md:grid-cols-2">
        <div className="flex flex-col justify-center bg-card px-5 py-16 md:px-14 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Import-ready, compliant
          </p>
          <h2 className="mt-5 text-balance font-mono text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
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
