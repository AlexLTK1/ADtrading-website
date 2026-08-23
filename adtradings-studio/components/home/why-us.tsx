'use client'

import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'
import { ScrollReveal } from '@/components/scroll-reveal'

const POINT_IMAGES = [
  '/images/why-us-boots-on-ground.png',
  '/images/why-us-compliance.png',
  '/images/why-us-two-directions.png',
]

// The source clip opens with a ~7s watermarked title card; skip straight to
// the clean footage and loop within that clean range only. An extra 0.5s is
// trimmed from the loop-in point to avoid a visible jump/flash each time the
// video restarts.
const CLIP_START = 8.5
const CLIP_END = 40

export function WhyUs() {
  const { t } = useLocale()
  const seekToCleanFrame = (video: HTMLVideoElement) => {
    if (video.currentTime < CLIP_START) video.currentTime = CLIP_START
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-stretch md:gap-14">
        <ScrollReveal className="relative order-1 h-[360px] overflow-hidden md:h-[560px] md:self-start">
          <div className="clip-diagonal-l absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              className="h-full w-full scale-[1.22] object-cover object-center"
              onLoadedMetadata={(e) => seekToCleanFrame(e.currentTarget)}
              onLoadedData={(e) => seekToCleanFrame(e.currentTarget)}
              onCanPlay={(e) => {
                seekToCleanFrame(e.currentTarget)
              }}
              onPlay={(e) => {
                seekToCleanFrame(e.currentTarget)
              }}
              onTimeUpdate={(e) => {
                if (e.currentTarget.currentTime >= CLIP_END) {
                  e.currentTarget.currentTime = CLIP_START
                } else if (e.currentTarget.currentTime < CLIP_START) {
                  seekToCleanFrame(e.currentTarget)
                }
              }}
            >
              <source src="/videos/ship-berthing.webm#t=8.5" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-primary/25" />
            <span className="sr-only">Video attribution: PaSt Photo, CC BY 3.0, via Wikimedia Commons</span>
          </div>
        </ScrollReveal>

        <div className="order-2 flex min-h-0 flex-col md:h-[560px]">
          <div className="relative z-10 order-1 mt-12 shrink-0 md:order-1 md:mt-0">
            <ScrollReveal>
              <Kicker className="w-fit">{t.home.whyUs.kicker}</Kicker>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-6 text-balance text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl">
                {t.home.whyUs.title}
              </h2>
            </ScrollReveal>
          </div>

          <div className="relative z-10 order-1 mt-24 flex min-h-0 flex-col justify-start overflow-hidden md:order-2 md:mt-6 md:flex-1">
          {t.home.whyUs.items.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 90} variant="right" className="flex w-full min-w-0 md:flex-1">
              <div
                className={`group relative z-0 flex min-h-0 w-full min-w-0 flex-1 items-start gap-6 border-t border-border px-8 py-4 transition-colors duration-500 md:px-10 md:py-4 ${i === 0 ? 'border-t-0' : ''}`}
              >
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                  style={{ backgroundImage: `url(${POINT_IMAGES[i % POINT_IMAGES.length]})` }}
                />
                <div className="absolute inset-0 z-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/75" />
                <span className="relative z-10 shrink-0 font-mono text-sm text-accent transition-colors duration-500 group-hover:text-highlight">
                  {point.n}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-primary-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/85">
                    {point.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          </div>
        </div> 

      </div>
    </section>
  )
}
