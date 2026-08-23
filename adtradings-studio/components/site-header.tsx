'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n/language-provider'
import { locales, localeLabels } from '@/lib/i18n/dictionaries'

export function SiteHeader() {
  const pathname = usePathname()
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/products', label: t.nav.products },
    { href: '/about', label: t.nav.about },
  ]

  // The homepage hero is a full-bleed photo with a diagonal white panel only
  // under the logo — so the nav floats transparently over the photo until scrolled.
  const isHome = pathname === '/'
  const floating = isHome && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        'border-transparent bg-primary',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* The logo always sits on the opaque white wedge panel (never directly on
            the hero photo), so its colors stay constant regardless of scroll state. */}
        <Link href="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 36 36" className="size-9 shrink-0" aria-hidden="true" focusable="false">
            <rect x="1" y="1" width="34" height="34" className="fill-primary" />
            <path d="M1 1 L35 1 L1 35 Z" className="fill-accent" />
            <text
              x="24"
              y="26"
              textAnchor="middle"
              className="fill-primary-foreground font-mono text-[13px] font-semibold"
            >
              AD
            </text>
          </svg>
          <span className="text-base font-semibold tracking-tight text-foreground">
            Asia<span className="text-accent">Direct</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative py-1 text-sm font-medium tracking-wide transition-colors',
                'after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100',
                pathname === link.href
                  ? 'text-primary-foreground after:scale-x-100'
                  : 'text-primary-foreground/80 hover:text-primary-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 font-mono text-xs tracking-wider uppercase md:flex">
            {locales.map((loc, i) => (
              <span key={loc} className="flex items-center">
                {i > 0 && (
                  <span className={cn('mx-1.5', floating ? 'text-primary-foreground/30' : 'text-border')}>
                    /
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setLocale(loc)}
                  aria-pressed={locale === loc}
                  className={cn(
                    'transition-colors',
                    locale === loc
                      ? 'text-accent'
                      : floating
                        ? 'text-primary-foreground/80 hover:text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {localeLabels[loc]}
                </button>
              </span>
            ))}
          </div>
          <Button
            render={<Link href="/contact" />}
            size="sm"
            variant={floating ? 'inverse' : 'default'}
            className="hidden md:inline-flex"
          >
            {t.nav.getInTouch}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center md:hidden',
              floating ? 'text-primary-foreground' : 'text-foreground',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 pb-6 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'py-3 text-base font-medium',
                pathname === link.href ? 'text-accent' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-1 border-t border-border py-3 font-mono text-xs tracking-wider uppercase">
            {locales.map((loc, i) => (
              <span key={loc} className="flex items-center">
                {i > 0 && <span className="mx-1.5 text-border">/</span>}
                <button
                  type="button"
                  onClick={() => setLocale(loc)}
                  aria-pressed={locale === loc}
                  className={cn(
                    'transition-colors',
                    locale === loc
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {localeLabels[loc]}
                </button>
              </span>
            ))}
          </div>
          <Button render={<Link href="/contact" />} className="mt-3 w-full">
            {t.nav.getInTouch}
          </Button>
        </nav>
      )}
    </header>
  )
}
