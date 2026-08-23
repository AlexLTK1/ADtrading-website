'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useLocale } from '@/lib/i18n/language-provider'

export function SiteFooter() {
  const { t } = useLocale()

  const explore = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/products', label: t.nav.products },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-md">
            <p className="flex items-center gap-2.5 text-base font-semibold tracking-tight">
              <span className="clip-corner-sm flex size-8 items-center justify-center bg-primary-foreground/15 font-mono text-xs font-semibold">
                AD
              </span>
              Asia Direct Tradings LTD.
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/70">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
              {t.footer.explore}
            </p>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
              {t.footer.contact}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/60" />
                Richmond, BC, Canada
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/60" />
                <a
                  href="tel:+17783215858"
                  className="transition-colors hover:text-primary-foreground"
                >
                  +1 (778) 321-5858
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/60" />
                <a
                  href="mailto:Info@adtradings.com"
                  className="transition-colors hover:text-primary-foreground"
                >
                  Info@adtradings.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>{t.footer.rights}</p>
          <p className="font-mono uppercase tracking-[0.15em]">{t.footer.strapline}</p>
        </div>
      </div>
    </footer>
  )
}
