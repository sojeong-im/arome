"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { products } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import { ScentKitSection } from "@/components/scent-kit-section"

export default function HomePage() {
  const featuredProducts = products.slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "AROM",
    "description": "감정을 기록하는 퍼퓸 하우스, AROM",
    "url": "https://aromeperfume.site",
    "logo": "https://aromeperfume.site/apple-icon.png",
    "sameAs": [
      "https://www.instagram.com/arome_official"
    ]
  }

  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-xl">
              <span className="label-luxury text-olive mb-4 block">Signature Collection</span>
              <h2 className="headline-secondary text-5xl mb-6">여운이 남는 시그니처 향</h2>
              <p className="body-primary text-muted-foreground">
                AROM의 향수는 단순히 좋은 냄새를 넘어, 당신의 가장 소중한 기억을 소환하는 매개체가 됩니다.
              </p>
            </div>
            <Link href="/shop" className="group flex items-center gap-2 text-olive font-medium border-b border-olive/20 pb-1 hover:border-olive transition-all">
              전체 컬렉션 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group">
                <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-secondary/20">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 block">{product.category}</span>
                  <h3 className="headline-tertiary text-2xl mb-2">{product.name}</h3>
                  <p className="body-secondary text-muted-foreground/80 mb-4 line-clamp-1 italic text-sm">{product.englishName}</p>
                  <p className="font-sans text-lg tracking-tight">
                    {product.price.toLocaleString()}원
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scent Kit Application Section */}
      <section className="bg-[#F9F5F0]">
        <ScentKitSection />
      </section>

      {/* Events Teaser */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative aspect-[4/5] rounded-none overflow-hidden group">
              <img
                src="/seongsu-scent-exhibition-main.png"
                alt="AROM Events"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
            <div className="order-1 md:order-2">
              <span className="label-luxury text-olive mb-4 block">Limited Experience</span>
              <h2 className="headline-secondary text-5xl mb-8">당신의 기억을 기록하는<br/>오감의 전시</h2>
              <p className="body-primary text-muted-foreground mb-12 leading-relaxed">
                AROM은 매달 성수동 시향실에서 특별한 꽃말과 함께하는 참여형 이벤트를 진행합니다. 
                향기를 맡으며 떠오르는 누군가에게, 진심이 담긴 쪽지를 남겨보세요.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-olive text-olive hover:bg-olive hover:text-white rounded-none px-10 h-14 button-text-luxury transition-all duration-300"
              >
                <Link href="/events">
                  진행중인 이벤트 보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
