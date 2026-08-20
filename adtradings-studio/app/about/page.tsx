import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About — Asia Direct Tradings LTD.',
  description:
    'A Vancouver-rooted trade house with sourcing agents stationed across Asia. We source, vet, import and deliver premium Asian goods so you never have to.',
}

const steps = [
  {
    n: '01',
    title: 'We find and vet',
    body: 'You tell us what you want — a specific snack, a food line, or general goods. Our agents on the ground in Asia track it down, visit the supplier in person and confirm quality before anything is committed. Nothing is sourced sight unseen.',
  },
  {
    n: '02',
    title: 'We import and clear',
    body: 'We arrange ocean freight, manage customs clearance and handle bilingual compliance labelling to CFIA and FDA standards. The paperwork, the logistics and the regulatory details are ours to solve, not yours.',
  },
  {
    n: '03',
    title: 'We deliver, end to end',
    body: 'What lands in Vancouver is exactly what you approved, ready to sell or use. From first quote to final delivery, one team owns your file — so there is a single number to call and a single answer you can trust.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="Our story"
        title="A trade house rooted in Vancouver."
        intro="Asia Direct Tradings LTD. connects North American buyers with the finest of Asia. We are small enough to answer the phone and expert enough to clear customs — with sourcing agents stationed across Asia and one team owning every step."
        image="/images/about-vancouver.png"
        imageAlt="Vancouver harbour and port at golden hour with coastal mountains"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:px-8 md:py-28">
        <div className="relative min-h-[340px] overflow-hidden rounded-sm md:min-h-[560px]">
          <Image
            src="/images/about-inspection.png"
            alt="A sourcing agent inspecting packaged goods at an Asian supplier"
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Who we are</p>
          <h2 className="mt-6 text-balance font-mono text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
            People at the source, not just a supplier list.
          </h2>
          <div className="mt-7 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              We are a trade house, not a marketplace. That means real people standing in real
              warehouses across Asia, choosing what makes the cut. Snacks and food are our
              specialty — but if it comes from Asia, we can likely source it.
            </p>
            <p>
              Because we sit between the factory floor and your front door, buyers get one
              accountable team instead of a chain of middlemen. Tell us what you want to buy; we
              handle sourcing, vetting, freight, customs, labelling and delivery so you can focus on
              selling.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">What we do</p>
          <h2 className="mt-6 max-w-2xl text-balance font-mono text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
            One team, from first quote to store door.
          </h2>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="flex flex-col bg-card p-8 md:p-10">
                <span className="font-mono text-sm text-accent">{step.n}</span>
                <h3 className="mt-8 font-mono text-xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Let's talk trade"
        title="Work with a team that owns every step."
        body="Tell us what you're looking to source or sell, and we'll reply within one business day."
      />
    </main>
  )
}
