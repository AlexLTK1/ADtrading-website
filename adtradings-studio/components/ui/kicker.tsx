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
        'inline-flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.24em] uppercase',
        tone === 'default' && 'text-foreground/60',
        tone === 'inverse' && 'text-primary-foreground/60',
        tone === 'accent' && 'text-accent',
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'h-px w-6',
          tone === 'inverse' ? 'bg-primary-foreground/50' : tone === 'accent' ? 'bg-accent' : 'bg-foreground/40',
        )}
      />
      {children}
    </span>
  )
}
