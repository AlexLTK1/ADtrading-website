'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { CountryMarquee } from '@/components/country-marquee'
import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'

const details = [
  { icon: MapPin, label: 'Office', value: 'Richmond, BC, Canada' },
  { icon: Phone, label: 'Phone', value: '+1 (778) 321-5858', href: 'tel:+17783215858' },
  { icon: Mail, label: 'Email', value: 'Info@adtradings.com', href: 'mailto:Info@adtradings.com' },
  { icon: Clock, label: 'Response', value: 'Within one business day' },
]

export default function ContactPage() {
  const { t } = useLocale()

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pt-36 pb-16 md:px-8 md:pt-44 md:pb-24">
        <Kicker>{t.contact.hero.kicker}</Kicker>
        <h1 className="mt-5 max-w-3xl text-balance text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
          {t.contact.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {t.contact.hero.subtitle}
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="flex flex-col gap-4 border border-border bg-card p-6 shadow-sm md:p-7">
            <p className="text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
              {t.contact.infoTitle}
            </p>
            {details.map((detail) => {
              const Icon = detail.icon
              return (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
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
