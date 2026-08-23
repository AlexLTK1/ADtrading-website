import Image from 'next/image'

type PageHeroProps = {
  label: string
  title: React.ReactNode
  intro: string
  image: string
  imageAlt: string
}

export function PageHero({ label, title, intro, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <Image
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{label}</p>
        <h1 className="mt-5 max-w-4xl text-balance font-mono text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      </div>
    </section>
  )
}
