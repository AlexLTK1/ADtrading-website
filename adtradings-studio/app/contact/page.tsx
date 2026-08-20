import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { CountryMarquee } from '@/components/country-marquee'

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
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Start an inquiry
        </p>
        <h1 className="mt-5 max-w-3xl text-balance font-mono text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          Tell us the product. We will source it the right way.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Wholesale buyers, retail shoppers and Asian brands — one form, one business day, one
          seamless experience.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="flex flex-col divide-y divide-border border-t border-border">
            {details.map((detail) => {
              const Icon = detail.icon
              return (
                <div key={detail.label} className="flex items-start gap-4 py-6">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-lg text-foreground transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg text-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              )
            })}
            <p className="pt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
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
