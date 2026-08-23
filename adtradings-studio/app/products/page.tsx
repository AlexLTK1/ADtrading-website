'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Kicker } from '@/components/ui/kicker'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n/language-provider'

export default function ProductsPage() {
  const { locale, t } = useLocale()
  const sectionTitle = locale === 'tc' ? '精選品類，悉心採購。' : locale === 'ja' ? '厳選した商品を、丁寧に調達。' : locale === 'zh' ? '精选品类，悉心采购。' : locale === 'th' ? 'คัดสรรสินค้า จัดหาอย่างใส่ใจ' : 'Selected categories, sourced with care.'
  const sectionKicker = locale === 'tc' ? '我們的產品範圍' : locale === 'ja' ? '取扱商品' : locale === 'zh' ? '我们的产品范围' : locale === 'th' ? 'สินค้าของเรา' : 'Our range'
  const readyKicker = locale === 'tc' ? '進口即售，符合規範' : locale === 'ja' ? '輸入対応済み、法令準拠' : locale === 'zh' ? '进口即售，符合规范' : locale === 'th' ? 'พร้อมนำเข้าและเป็นไปตามมาตรฐาน' : 'Import-ready, compliant'
  const readyTitle = locale === 'tc' ? '每批貨物，抵達即可銷售。' : locale === 'ja' ? '届いたその日から販売できます。' : locale === 'zh' ? '每批货物，抵达即可销售。' : locale === 'th' ? 'สินค้าทุก批พร้อมจำหน่าย' : 'Everything lands ready to sell.'
  const readyBody = locale === 'tc' ? '我們在內部處理供應商審核、海運、清關及雙語合規標籤。抵達溫哥華的貨物，正是您核准的內容——無論是一條產品線還是整個貨櫃。' : locale === 'ja' ? '仕入先の確認、海上輸送、通関、二言語の表示対応まで、すべて社内で管理します。バンクーバーに届く商品は、単品でもコンテナ単位でも、お客様が承認した内容そのものです。' : locale === 'zh' ? '我们在内部处理供应商审核、海运、清关及双语合规标签。抵达温哥华的货物，正是您批准的内容——无论是一条产品线还是整柜。' : locale === 'th' ? 'เราดูแลการตรวจสอบซัพพลายเออร์ การขนส่งทางทะเล พิธีการศุลกากร และฉลากสองภาษาให้ครบถ้วน สินค้าที่ถึงแวนคูเวอร์ตรงตามที่คุณอนุมัติ ไม่ว่าจะเป็นสินค้าเพียงรายการเดียวหรือตู้คอนเทนเนอร์เต็มตู้' : 'We handle supplier vetting, ocean freight, customs clearance and bilingual compliance labelling in-house. What arrives in Vancouver is exactly what you approved — whether it\'s a single line or a full container.'

  return (
    <main>
      <PageHero
        label={t.products.hero.kicker}
        title={t.products.hero.title}
        intro={t.products.hero.subtitle}
        image="/images/premium-goods.png"
        imageAlt="Premium Asian snacks and specialty goods arranged on a warm surface"
      />

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">{sectionTitle}</h2>
            <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-accent md:block">{sectionKicker}</span>
          </div>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {t.products.categories.map((category, i) => {
            const backgroundImages = [
              '/images/premium-goods.png',
              '/images/warehouse.png',
              '/images/sourcing-market.png',
              '/images/trade-route.png',
            ]

            return (
              <article
                key={category.title}
                tabIndex={0}
                className={`group relative isolate overflow-hidden border-t border-border px-5 py-10 transition-colors duration-500 hover:border-accent focus-visible:border-accent md:py-14 md:pr-10 md:pl-10 ${
                  i % 2 === 0 ? 'md:border-r md:pr-10 md:pl-10' : 'md:pl-10'
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{ backgroundImage: `url(${backgroundImages[i]})` }}
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-primary/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent">{category.title}</h3>
                <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent">
                  {category.body}
                </p>
              </article>
            )
          })}
        </div>

        <Button render={<Link href="/contact" />} size="lg" className="mt-14">
          {t.nav.getInTouch}
          <ArrowUpRight
            data-icon="inline-end"
            className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
          />
        </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="relative grid items-stretch overflow-hidden md:grid-cols-2">
          <div className="absolute inset-0 hidden bg-primary md:block" />
          <div className="relative flex flex-col justify-center bg-primary px-5 py-16 text-primary-foreground md:px-14 md:py-24">
            <Kicker tone="inverse" className="w-fit">
              {readyKicker}
            </Kicker>
            <h2 className="mt-5 text-balance text-3xl leading-[1.12] font-semibold tracking-tight md:text-4xl">
              {readyTitle}
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
              {readyBody}
            </p>
          </div>
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <Image
              src="/images/warehouse.png"
              alt="Neatly stocked distribution warehouse"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBand
        title={t.products.cta.title}
        body={t.products.cta.body}
        cta={t.products.cta.button}
      />
    </main>
  )
}
