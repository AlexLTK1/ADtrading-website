import { Boxes, Search, Globe, Ship, Truck, type LucideIcon } from 'lucide-react'

export type Service = {
  n: string
  title: string
  short: string
  long: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    n: '01',
    title: 'B2B wholesale supply',
    short: 'Premium, import-ready Asian dried goods — selected by specialists who know the category.',
    long: 'A curated catalogue of premium Asian dried goods and specialty foods, landed import-ready and priced for wholesale. Every line is selected by category specialists, cleared through customs and labelled to CFIA and FDA standards before it reaches your buyers.',
    icon: Boxes,
  },
  {
    n: '02',
    title: 'Sourcing service',
    short: 'Tell us the product you want to sell; our agents on the ground find it, vet it and land it.',
    long: 'Name the product and the market. Our agents across Asia identify candidate suppliers, inspect them in person, negotiate terms and manage freight, customs and compliance — so you receive exactly what you approved, without the guesswork.',
    icon: Search,
  },
  {
    n: '03',
    title: 'Market expansion for Asian brands',
    short: 'A Canadian arm for brands too small to open their own office.',
    long: 'For Asian brands ready to enter North America but too small to open their own office, we act as your Canadian arm — handling import, compliance labelling, warehousing, distribution and buyer relationships under one roof.',
    icon: Globe,
  },
  {
    n: '04',
    title: 'Reverse export to Asia',
    short: 'Canadian goods, exported to buyers across Asia.',
    long: 'The route runs both ways. We export Canadian goods to vetted buyers across Asia, managing documentation, freight and destination compliance through the same single desk that handles inbound trade.',
    icon: Ship,
  },
  {
    n: '05',
    title: 'Vancouver local delivery',
    short: 'Local commercial delivery across Metro Vancouver — from frozen food to oversized freight.',
    long: 'Local commercial delivery across Metro Vancouver — from temperature-controlled frozen food to oversized freight. The final mile is handled by our own desk, so your shipment stays with one team from port to door.',
    icon: Truck,
  },
]
