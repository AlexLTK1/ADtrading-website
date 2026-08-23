const countries = [
  'Canada',
  'Japan',
  'Hong Kong',
  'China',
  'USA',
  'Thailand',
  'Vietnam',
  'Malaysia',
  'Taiwan',
]

export function CountryMarquee() {
  const items = [...countries, ...countries]
  return (
    <div
      className="overflow-hidden bg-secondary py-6"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee items-center gap-3">
        {items.map((country, i) => (
          <span
            key={i}
            className="rounded-full border border-border/70 bg-background px-4 py-1.5 text-sm font-medium text-foreground/70"
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  )
}
