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
    <section className="relative flex min-h-[64vh] items-end overflow-hidden">
      <Image
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07]/90 via-[#0e0b07]/55 to-[#0e0b07]/15" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <Kicker tone="inverse" className="w-fit">
          {label}
        </Kicker>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">{intro}</p>
      </div>
    </section>
  )
}
