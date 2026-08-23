import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Asia Direct Tradings LTD.',
  description:
    'A Vancouver-rooted trade house with sourcing agents stationed across Asia. We source, vet, import and deliver premium Asian goods so you never have to.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
