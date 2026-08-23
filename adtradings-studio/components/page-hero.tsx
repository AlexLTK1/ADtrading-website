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
    <section className="relative flex min-h-[25rem] items-center overflow-hidden bg-accent md:min-h-[27rem]">
      <Image
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[#006B9E]/45" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-white/70" />

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center px-5 pt-20 pb-12 text-center md:px-8 md:pt-24 md:pb-14">
        <Kicker tone="inverse" className="mb-4 text-white/85">
          {label}
        </Kicker>
        <h1 className="font-display text-balance text-5xl leading-[0.98] font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-white md:text-xl">
          {intro}
        </p>
        <div className="mt-8 h-1 w-16 bg-highlight" />
      </div>
    </section>
  )
}
