import Image from 'next/image'
import { Kicker } from '@/components/ui/kicker'

type PageHeroProps = {
  label: string
  title: React.ReactNode
  intro: string
  image: string
  imageAlt: string
}

export function PageHero({ label, title, intro, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-navy">
      <Image
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/92 via-navy/60 to-navy/20" />
      <div
        aria-hidden
        className="panel-diagonal absolute inset-y-0 right-0 hidden w-[45%] bg-gradient-to-br from-primary/40 via-deep-blue/30 to-transparent md:block"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <Kicker tone="inverse" className="w-fit">
          {label}
        </Kicker>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">{intro}</p>
      </div>
    </section>
  )
}
