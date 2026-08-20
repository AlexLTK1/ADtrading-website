const points = [
  {
    n: '01',
    title: 'Representatives on the ground',
    body: 'Our representatives across Asia evaluate every supplier in person, ensuring that what arrives in Vancouver meets the exact specifications you approved.',
  },
  {
    n: '02',
    title: 'A single point of accountability',
    body: 'Sourcing, ocean freight, customs clearance, bilingual labelling and final delivery are managed by one dedicated team — a seamless process from origin to destination, with no hand-offs and no gaps.',
  },
  {
    n: '03',
    title: 'Compliance by design',
    body: 'Every shipment is labelled and documented to CFIA and FDA standards prior to departure, ensuring smooth customs clearance and a predictable path to market.',
  },
]

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Why buyers stay with us
          </p>
          <h2 className="mt-6 text-balance font-mono text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
            A trade house, not a marketplace.
          </h2>
          <p className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us what you intend to buy or sell, and our representatives across Asia manage
            supplier evaluation, freight, customs and compliance labelling on your behalf. Every
            shipment is overseen by specialists with deep category expertise and delivered through a
            single, coordinated point of contact.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border border-t border-border">
          {points.map((point) => (
            <div key={point.n} className="flex gap-6 py-9 md:gap-8">
              <span className="font-mono text-sm font-medium text-accent">{point.n}</span>
              <div>
                <h3 className="font-mono text-xl font-medium tracking-tight md:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
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
