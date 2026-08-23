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
        'fixed inset-x-0 top-0 z-50 border-b',
        floating ? 'border-transparent bg-transparent' : 'border-border bg-primary',
      )}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* On the homepage the logo is anchored to the hero wedge, rather than the
            centered content container, so it stays locked to the upper-left panel. */}
        <Link
          href="/"
          className={cn(
            'flex items-center gap-2.5',
            isHome ? 'absolute left-5 top-1/2 -translate-y-1/2 md:left-8' : 'relative',
          )}
        >
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

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-4 lg:ml-auto xl:flex xl:gap-8 xl:pr-5">
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

        <div className="flex shrink-0 items-center gap-3 xl:gap-4">
          <div className="hidden shrink-0 items-center gap-1 rounded-sm border border-primary-foreground/30 bg-primary-foreground/10 px-2 py-1 whitespace-nowrap font-mono text-xs tracking-wider uppercase xl:ml-2 xl:flex">
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
                      ? 'rounded-sm bg-accent px-1.5 py-0.5 font-semibold text-primary'
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
            className="hidden shrink-0 xl:inline-flex"
          >
            {t.nav.getInTouch}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex size-10 shrink-0 items-center justify-center border-2 transition-colors xl:hidden',
              floating
                ? 'border-primary-foreground bg-primary/90 text-primary-foreground hover:bg-highlight hover:text-primary'
                : 'border-primary-foreground bg-primary text-primary-foreground hover:bg-highlight hover:text-primary',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 pb-6 pt-2 xl:hidden">
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
                      ? 'rounded-sm bg-accent px-1.5 py-0.5 font-semibold text-primary'
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
