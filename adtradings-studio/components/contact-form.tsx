'use client'

import { useState, useTransition } from 'react'
import { ArrowUpRight, Check, AlertCircle, Loader2 } from 'lucide-react'
import { submitInquiry } from '@/app/actions'
import { Button } from '@/components/ui/button'

const inquiryTypes = [
  'B2B wholesale supply',
  'Sourcing service',
  'Market expansion',
  'Reverse export',
  'Vancouver local delivery',
]

const fieldClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15'
const labelClass = 'text-sm font-medium text-foreground'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await submitInquiry(formData)
      if (result.ok) {
        setSubmitted(true)
      } else {
        setError(result.error)
      }
    })
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">Inquiry received.</h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Thank you — a consultant will reply within one business day. For anything urgent, call us
          at{' '}
          <a href="tel:+17783215858" className="font-medium text-primary">
            +1 (778) 321-5858
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setError(null)
          }}
          className="mt-8 text-sm font-semibold text-primary"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            className={fieldClass}
            placeholder="Company (optional)"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass}
            placeholder="Phone (optional)"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="inquiry" className={labelClass}>
          Inquiry type
        </label>
        <select id="inquiry" name="inquiry" defaultValue="" required className={fieldClass}>
          <option value="" disabled>
            Select a service
          </option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className={labelClass}>
          Tell us the product and the market
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="What would you like to source, supply or ship?"
        />
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <Button type="submit" size="lg" disabled={isPending} className="group w-full sm:w-fit">
        {isPending ? (
          <>
            Sending
            <Loader2 className="size-4 animate-spin" />
          </>
        ) : (
          <>
            Start an inquiry
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </Button>
    </form>
  )
}
