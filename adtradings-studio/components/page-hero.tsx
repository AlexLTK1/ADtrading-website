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
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={image || '/placeholder.svg'}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="clip-panel-r absolute inset-0 bg-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      <div className="absolute top-0 right-[8%] hidden h-1/3 w-px bg-accent/60 md:block" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 md:px-8 md:pb-24">
        <Kicker tone="inverse" className="w-fit">
          {label}
        </Kicker>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl leading-[1.08] font-semibold tracking-tight text-primary-foreground md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {intro}
        </p>
      </div>
    </section>
  )
}
