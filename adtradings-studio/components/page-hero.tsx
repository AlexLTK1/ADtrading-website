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
    <section className="relative flex min-h-[25rem] items-center overflow-hidden bg-background md:min-h-[27rem]">
      {/* Mobile: full-bleed photo with a dark wash so the header can float on top. */}
      <div className="absolute inset-0 md:hidden">
        <Image src={image || '/placeholder.svg'} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-accent/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-primary/40" />
      </div>

      {/* Desktop / tablet: same TOKI-style diagonal split as the home hero — the
          photo sits in a clipped panel on the right, the section's own light
          background forms the wedge on the left where the title and copy live,
          and the transparent header floats on top of this composition. */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ clipPath: 'polygon(36% 0, 100% 0, 100% 100%, 44% 100%)' }}
      >
        <Image src={image || '/placeholder.svg'} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-accent/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
      </div>

      {/* Content column stays vertically centered and capped to a width that fits
          inside the wedge at every point (top and bottom), so long CJK/Thai titles
          never wrap past the diagonal boundary into the photo. */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-16 md:px-8">
        <div className="max-w-xs sm:max-w-sm md:max-w-[19rem] lg:max-w-sm">
          <Kicker tone="inverse" className="mb-4 md:hidden">
            {label}
          </Kicker>
          <Kicker tone="accent" className="mb-4 hidden md:flex">
            {label}
          </Kicker>
          <h1 className="font-display text-balance text-5xl leading-[0.98] font-semibold tracking-tight text-primary-foreground md:text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-pretty text-lg font-medium leading-relaxed text-primary-foreground md:text-foreground/80 md:text-base">
            {intro}
          </p>
          <div className="mt-8 h-1 w-16 bg-highlight" />
        </div>
      </div>
    </section>
  )
}
