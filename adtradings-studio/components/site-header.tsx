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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Reproduces the live TOKI header behavior: at the top of the page the header is
  // completely transparent and floats over the hero's own diagonal artwork below it.
  // After scrolling, it becomes a solid rectangular navy bar (no diagonal, no wedge)
  // fixed to the top of the viewport. The diagonal geometry lives in the hero
  // sections themselves (HomeHero / PageHero), never in the header.
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex h-16 items-center transition-colors duration-300 ease-out md:h-20',
        scrolled ? 'bg-primary shadow-[0_2px_16px_rgba(6,31,42,0.25)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        {/* Logo — dark mark on the light wedge while the header is transparent over
            the hero; flips to a light mark once the header becomes a solid bar. */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <svg viewBox="0 0 36 36" className="size-8 shrink-0 md:size-9" aria-hidden="true" focusable="false">
            <rect x="1" y="1" width="34" height="34" className={scrolled ? 'fill-primary-foreground' : 'fill-primary'} />
            <path d="M1 1 L35 1 L1 35 Z" className={scrolled ? 'fill-primary' : 'fill-accent'} />
            <text
              x="24"
              y="26"
              textAnchor="middle"
              className={cn('font-mono text-[13px] font-semibold', scrolled ? 'fill-primary-foreground' : 'fill-accent')}
            >
              AD
            </text>
          </svg>
          <span className={cn('hidden text-base font-semibold tracking-tight sm:inline', scrolled ? 'text-primary-foreground' : 'text-primary')}>
            Asia<span className={scrolled ? 'text-highlight' : 'text-accent'}>Direct</span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3.5 py-2 text-sm font-medium tracking-wide transition-colors',
                pathname === link.href
                  ? 'bg-accent text-accent-foreground'
                  : 'text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 xl:ml-2 xl:gap-4">
          <div className="hidden shrink-0 items-center gap-1 border border-primary-foreground/30 bg-primary-foreground/10 px-2 py-1 whitespace-nowrap font-mono text-xs tracking-wider uppercase xl:flex">
            {locales.map((loc, i) => (
              <span key={loc} className="flex items-center">
                {i > 0 && <span className="mx-1.5 text-primary-foreground/30">/</span>}
                <button
                  type="button"
                  onClick={() => setLocale(loc)}
                  aria-pressed={locale === loc}
                  className={cn(
                    'px-1.5 py-0.5 transition-colors',
                    locale === loc
                      ? 'bg-highlight font-semibold text-primary'
                      : 'text-primary-foreground/80 hover:text-primary-foreground',
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
            className="hidden shrink-0 rounded-none bg-highlight text-primary hover:bg-primary-foreground xl:inline-flex"
          >
            {t.nav.getInTouch}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex size-10 shrink-0 items-center justify-center border-2 transition-colors xl:hidden',
              scrolled
                ? 'border-primary-foreground bg-primary text-primary-foreground hover:bg-highlight hover:text-primary'
                : 'border-primary-foreground/90 bg-primary/20 text-primary-foreground backdrop-blur-sm hover:bg-highlight hover:text-primary',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-primary-foreground/15 bg-primary px-5 pb-6 pt-2 xl:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-3 text-base font-medium',
                pathname === link.href
                  ? 'bg-accent text-accent-foreground'
                  : 'text-primary-foreground/85 hover:bg-primary-foreground/10',
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-1 border-t border-primary-foreground/15 py-3 font-mono text-xs tracking-wider uppercase">
            {locales.map((loc, i) => (
              <span key={loc} className="flex items-center">
                {i > 0 && <span className="mx-1.5 text-primary-foreground/30">/</span>}
                <button
                  type="button"
                  onClick={() => setLocale(loc)}
                  aria-pressed={locale === loc}
                  className={cn(
                    'px-1.5 py-0.5 transition-colors',
                    locale === loc
                      ? 'bg-highlight font-semibold text-primary'
                      : 'text-primary-foreground/80 hover:text-primary-foreground',
                  )}
                >
                  {localeLabels[loc]}
                </button>
              </span>
            ))}
          </div>
          <Button render={<Link href="/contact" />} className="mt-3 w-full rounded-none bg-highlight text-primary hover:bg-primary-foreground">
            {t.nav.getInTouch}
          </Button>
        </nav>
      )}
    </header>
  )
}
