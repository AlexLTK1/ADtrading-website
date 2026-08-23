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

  // Reproduces the TOKI header composition: a large 45° diagonal color block is a
  // structural part of the HEADER only (never the hero/banner below it), with the
  // logo anchored inside that diagonal. Scrolling collapses the whole thing into a
  // compact standard sticky bar and the diagonal disappears.
  const tall = !scrolled

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 isolate bg-primary transition-[height] duration-300 ease-out',
        tall ? 'h-24 md:h-28 lg:h-32' : 'h-16',
      )}
    >
      {/* Diagonal geometric block — structural part of the header, sized relative to
          viewport width (clamp) so it never relies on fixed pixel breakpoints. */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-y-0 left-0 w-[clamp(9.5rem,25vw,21rem)] bg-accent transition-[opacity,transform] duration-300 ease-out [clip-path:polygon(0_0,100%_0,0_100%)]',
          tall ? 'opacity-100' : 'pointer-events-none -translate-x-6 opacity-0',
        )}
      />

      {/* Logo — lives inside the diagonal at the top state, and reflows to the
          standard inline position once the header collapses. */}
      <Link
        href="/"
        className={cn(
          'absolute inset-y-0 left-0 z-20 flex items-center gap-2 px-4 transition-[padding] duration-300 md:px-6 lg:px-8',
          tall ? 'items-start pt-4 md:pt-5 lg:pt-6' : 'items-center',
        )}
      >
        <svg viewBox="0 0 36 36" className="size-8 shrink-0 md:size-9" aria-hidden="true" focusable="false">
          <rect x="1" y="1" width="34" height="34" className="fill-primary" />
          <path d="M1 1 L35 1 L1 35 Z" className={tall ? 'fill-primary-foreground' : 'fill-accent'} />
          <text
            x="24"
            y="26"
            textAnchor="middle"
            className={cn(
              'font-mono text-[13px] font-semibold',
              tall ? 'fill-accent' : 'fill-primary-foreground',
            )}
          >
            AD
          </text>
        </svg>
        <span
          className={cn(
            'hidden text-base font-semibold tracking-tight sm:inline',
            tall ? 'text-primary-foreground' : 'text-primary-foreground',
          )}
        >
          Asia<span className={tall ? 'text-primary' : 'text-accent'}>Direct</span>
        </span>
      </Link>

      <div
        className={cn(
          'relative mx-auto flex h-full max-w-7xl items-center justify-end gap-4 pr-5 transition-[padding] duration-300 lg:pr-8',
          tall ? 'pl-[clamp(9.5rem,25vw,21rem)]' : 'pl-5 lg:pl-8',
        )}
      >
        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3.5 py-2 text-sm font-medium tracking-wide transition-colors',
                pathname === link.href
                  ? 'bg-accent text-accent-foreground'
                  : 'text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-primary-foreground',
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
            className="inline-flex size-10 shrink-0 items-center justify-center border-2 border-primary-foreground bg-primary text-primary-foreground transition-colors hover:bg-highlight hover:text-primary xl:hidden"
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
