import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Kicker({
  children,
  className,
  tone = 'default',
}: {
  children: ReactNode
  className?: string
  tone?: 'default' | 'inverse' | 'accent'
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.7rem] tracking-[0.18em] uppercase',
        tone === 'default' && 'border-border/70 bg-secondary text-foreground/70',
        tone === 'inverse' &&
          'border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground',
        tone === 'accent' && 'border-accent/25 bg-accent/10 text-accent',
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'size-1.5 rounded-full',
          tone === 'inverse' ? 'bg-primary-foreground' : tone === 'accent' ? 'bg-accent' : 'bg-primary',
        )}
      />
      {children}
    </span>
  )
}
