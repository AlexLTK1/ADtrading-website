import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/services'
import { Kicker } from '@/components/ui/kicker'

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Kicker className="w-fit">Five ways to work with us</Kicker>
          <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Choose the lane that matches your business.
          </h2>
        </div>
        <Link
          href="/services"
          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
        >
          All services
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Link
              key={service.title}
              href="/services"
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {service.short}
              </p>
            </Link>
          )
        })}

        <Link
          href="/contact"
          className="group flex flex-col justify-between rounded-2xl bg-primary p-8 text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          <p className="text-sm font-medium text-primary-foreground/60">Not sure which fits?</p>
          <div>
            <h3 className="mt-8 text-xl font-semibold tracking-tight">
              Tell us the goal — we&apos;ll map the route.
            </h3>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
              Start an inquiry
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
