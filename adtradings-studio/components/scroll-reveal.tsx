'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in ms, typically i * 80 */
  delay?: number
  /** Animation style */
  variant?: 'up' | 'fade' | 'left' | 'right'
  as?: 'div' | 'span'
}

/**
 * Reveals its children with a one-time fade/slide transition the first time
 * they enter the viewport, mirroring the per-section scroll animation used
 * on the Optimus template reference.
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  as = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const hidden = {
    up: 'translate-y-6 opacity-0',
    fade: 'opacity-0',
    left: '-translate-x-6 opacity-0',
    right: 'translate-x-6 opacity-0',
  }[variant]

  const Comp = as as 'div'

  return (
    <Comp
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${visible ? 'translate-x-0 translate-y-0 opacity-100' : hidden} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Comp>
  )
}
