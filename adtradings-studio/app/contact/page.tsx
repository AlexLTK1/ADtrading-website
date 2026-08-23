import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { CountryMarquee } from '@/components/country-marquee'
import { Kicker } from '@/components/ui/kicker'

export const metadata: Metadata = {
  title: 'Contact — Asia Direct Tradings LTD.',
  description:
    'Tell us the product and the market — our agents reply within one business day. Wholesale and consumer retail welcome.',
}

const details = [
  { icon: MapPin, label: 'Office', value: 'Richmond, BC, Canada' },
  { icon: Phone, label: 'Phone', value: '+1 (778) 321-5858', href: 'tel:+17783215858' },
  { icon: Mail, label: 'Email', value: 'Info@adtradings.com', href: 'mailto:Info@adtradings.com' },
  { icon: Clock, label: 'Response', value: 'Within one business day' },
]

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <Kicker>Start an inquiry</Kicker>
        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          Tell us the product. We will source it the right way.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Wholesale buyers, retail shoppers and Asian brands — one form, one business day, one
          seamless experience.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-7">
            {details.map((detail) => {
              const Icon = detail.icon
              return (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-lg font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg font-medium text-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              )
            })}
            <p className="mt-2 border-t border-border pt-5 text-sm text-muted-foreground">
              Wholesale &amp; consumer retail — everyone welcome.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <CountryMarquee />
    </main>
  )
}
