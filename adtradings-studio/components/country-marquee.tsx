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
    <div className="overflow-hidden border-y border-border bg-card py-5">
      <div className="flex w-max animate-marquee items-center">
        {items.map((country, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">
              {country}
            </span>
            <span className="text-primary" aria-hidden="true">
              &middot;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
