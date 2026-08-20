import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

const explore = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-md">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em]">
              Asia<span className="text-primary">Direct</span> Tradings LTD.
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Premium Asian sourcing, handled end to end. Wholesale supply, sourcing, market entry,
              reverse export and Vancouver local delivery — with sourcing agents stationed across
              Asia.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Richmond, BC, Canada
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+17783215858" className="transition-colors hover:text-primary">
                  +1 (778) 321-5858
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:Info@adtradings.com"
                  className="transition-colors hover:text-primary"
                >
                  Info@adtradings.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Asia Direct Tradings LTD.</p>
          <p className="font-mono uppercase tracking-[0.15em]">
            Premium Asian sourcing — snacks, food &amp; goods.
          </p>
        </div>
      </div>
    </footer>
  )
}
