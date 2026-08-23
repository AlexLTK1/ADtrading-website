'use client'

import { useState, useTransition } from 'react'
import { ArrowUpRight, Check, AlertCircle, Loader2 } from 'lucide-react'
import { submitInquiry } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n/language-provider'

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
  const { t } = useLocale()
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
        setError(t.contact.form.error)
      }
    })
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start border border-border bg-card p-8 shadow-sm md:p-10">
        <div className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">{t.contact.form.success}</h2>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setError(null)
          }}
          className="mt-8 text-sm font-semibold text-primary"
        >
          {t.contact.formTitle}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className={labelClass}>
            {t.contact.form.name}
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder={t.contact.form.name} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="company" className={labelClass}>
            {t.contact.form.company}
          </label>
          <input
            id="company"
            name="company"
            className={fieldClass}
            placeholder={t.contact.form.company}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="email" className={labelClass}>
            {t.contact.form.email}
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
          {t.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder={t.contact.form.message}
        />
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-start gap-2 border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <Button type="submit" size="lg" disabled={isPending} className="group w-full sm:w-fit">
        {isPending ? (
          <>
            {t.contact.form.submitting}
            <Loader2 className="size-4 animate-spin" />
          </>
        ) : (
          <>
            {t.contact.form.submit}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </Button>
    </form>
  )
}
