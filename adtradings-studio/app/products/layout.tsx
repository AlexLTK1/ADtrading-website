import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — Asia Direct Tradings LTD.',
  description:
    'From snacks and food to household and general goods, we source virtually anything across Asia. Contact us for available products or a custom request.',
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
