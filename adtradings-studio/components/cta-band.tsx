import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Kicker } from '@/components/ui/kicker'

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
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
        <div className="max-w-2xl">
          {eyebrow && (
            <Kicker tone="inverse" className="w-fit">
              {eyebrow}
            </Kicker>
          )}
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            {body}
          </p>
        </div>
        <Button render={<Link href={href} />} size="xl" variant="inverse" className="shrink-0">
          {cta}
          <ArrowUpRight
            data-icon="inline-end"
            className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
          />
        </Button>
      </div>
    </section>
  )
}
