'use server'

type InquiryResult = { ok: true } | { ok: false; error: string }

const REQUIRED = ['name', 'email', 'inquiry', 'message'] as const

export async function submitInquiry(formData: FormData): Promise<InquiryResult> {
  const name = String(formData.get('name') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const inquiry = String(formData.get('inquiry') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const values: Record<string, string> = { name, email, inquiry, message }
  for (const field of REQUIRED) {
    if (!values[field]) {
      return { ok: false, error: 'Please complete all required fields.' }
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      ok: false,
      error: 'Email delivery is not configured yet. Please email Info@adtradings.com directly.',
    }
  }

  const to = process.env.INQUIRY_TO_EMAIL || 'Info@adtradings.com'
  const text = [
    `New inquiry from ${name}${company ? ` (${company})` : ''}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Type: ${inquiry}`,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Asia Direct Tradings <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `New inquiry — ${inquiry} — ${name}`,
        text,
      }),
    })

    if (!res.ok) {
      console.log('[v0] Resend error:', res.status, await res.text())
      return { ok: false, error: 'Something went wrong sending your inquiry. Please try again.' }
    }

    return { ok: true }
  } catch (err) {
    console.log('[v0] Inquiry send failed:', err)
    return { ok: false, error: 'Something went wrong sending your inquiry. Please try again.' }
  }
}
