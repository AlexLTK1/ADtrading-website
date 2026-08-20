import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/services'

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Five ways to work with us
          </p>
          <h2 className="mt-6 max-w-xl text-balance font-mono text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
            Choose the lane that matches your business.
          </h2>
        </div>
        <Link
          href="/services"
          className="font-mono text-sm uppercase tracking-[0.15em] text-primary transition-colors hover:text-primary/70"
        >
          All services →
        </Link>
      </div>

      <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Link
              key={service.n}
              href="/services"
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-medium text-accent">{service.n}</span>
                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-10 font-mono text-xl font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {service.short}
              </p>
            </Link>
          )
        })}

        <Link
          href="/contact"
          className="group flex flex-col justify-between bg-primary p-8 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground/60">
            Not sure which fits?
          </p>
          <div>
            <h3 className="mt-10 font-mono text-xl font-medium tracking-tight">
              Tell us the goal — we&apos;ll map the route.
            </h3>
            <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em]">
              Start an inquiry
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
