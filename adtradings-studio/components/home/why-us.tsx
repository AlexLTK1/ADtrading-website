import { MapPinned, ShieldCheck, Users } from 'lucide-react'
import { Kicker } from '@/components/ui/kicker'

const points = [
  {
    icon: MapPinned,
    title: 'Representatives on the ground',
    body: 'Our representatives across Asia evaluate every supplier in person, ensuring that what arrives in Vancouver meets the exact specifications you approved.',
  },
  {
    icon: Users,
    title: 'A single point of accountability',
    body: 'Sourcing, ocean freight, customs clearance, bilingual labelling and final delivery are managed by one dedicated team — a seamless process from origin to destination, with no hand-offs and no gaps.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance by design',
    body: 'Every shipment is labelled and documented to CFIA and FDA standards prior to departure, ensuring smooth customs clearance and a predictable path to market.',
  },
]

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <Kicker className="w-fit">Why buyers stay with us</Kicker>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            A trade house, not a marketplace.
          </h2>
          <p className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us what you intend to buy or sell, and our representatives across Asia manage
            supplier evaluation, freight, customs and compliance labelling on your behalf. Every
            shipment is overseen by specialists with deep category expertise and delivered through a
            single, coordinated point of contact.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{point.title}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {point.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
