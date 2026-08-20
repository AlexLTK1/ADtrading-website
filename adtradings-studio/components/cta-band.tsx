import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type CtaBandProps = {
  eyebrow?: string
  title: string
  body: string
  href?: string
  cta?: string
}

export function CtaBand({
  eyebrow,
  title,
  body,
  href = '/contact',
  cta = 'Start an inquiry',
}: CtaBandProps) {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
          )}
          <h2 className="mt-4 text-balance font-mono text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {body}
          </p>
        </div>
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-7 py-4 font-mono text-sm uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  )
}
