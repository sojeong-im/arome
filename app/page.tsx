"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
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

      {/* Brand Story - Product Showcase */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img
                src="/rom3.jpg"
                alt="AROM Premium Packaging"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="label-luxury text-primary mb-4 block">The Art of Scent</span>
              <h2 className="headline-secondary text-5xl mb-8">감정을 담아내는<br/>가장 완벽한 패키지</h2>
              <p className="body-primary text-foreground/70 mb-10 leading-relaxed">
                AROM은 향수 한 병이 담고 있는 서사를 완성하기 위해 패키지 디자인 하나에도 집요한 장인 정신을 담았습니다. 
                재생지를 활용한 따뜻한 질감의 박스와, 시간이 흘러도 변치 않는 견고한 유리 병은 당신의 공간에서 그 자체로 오브제가 됩니다.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="label-luxury text-xs mb-3">Sustainable</h4>
                  <p className="text-sm text-foreground/60">친환경 소재를 활용한 지속 가능한 패키징</p>
                </div>
                <div>
                  <h4 className="label-luxury text-xs mb-3">Minimalism</h4>
                  <p className="text-sm text-foreground/60">불필요한 장식을 배제한 본질적인 디자인</p>
                </div>
              </div>
              <Button
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-background rounded-none px-8"
              >
                <Link href="/about">자세히 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-32 px-6 border-y border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-xl">
              <span className="label-luxury text-primary mb-4 block">Signature Collection</span>
              <h2 className="headline-secondary text-5xl mb-6">여운이 남는 시그니처 향</h2>
              <p className="body-primary text-foreground/60">
                AROM의 향수는 단순히 좋은 냄새를 넘어, 당신의 가장 소중한 기억을 소환하는 매개체가 됩니다.
              </p>
            </div>
            <Link href="/shop" className="group flex items-center gap-2 text-primary font-medium border-b border-primary/20 pb-1 hover:border-primary transition-all">
              전체 컬렉션 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group">
                <div className="border border-primary/10 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col bg-background/60 group-hover:bg-background/90 backdrop-blur-sm overflow-hidden">
                  {/* Image Container */}
                  {product.image && (
                    <div className="aspect-[4/5] relative overflow-hidden p-8 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105 mix-blend-multiply brightness-[1.05] contrast-[1.05]"
                      />
                    </div>
                  )}
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 mb-6 block">{product.category}</span>
                    <h3 className="headline-tertiary text-2xl mb-1">{product.name}</h3>
                    <p className="font-serif italic text-foreground/40 text-sm mb-6">{product.englishName}</p>
                    <div className="w-6 h-px bg-primary/20 mb-6" />
                    <p className="body-primary text-foreground/70 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                      {product.storyCopy}
                    </p>
                    <div className="w-full h-px bg-primary/10 mb-6" />
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-lg tracking-tight font-medium">
                        {product.price.toLocaleString()}원
                      </p>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Mosaic Gallery */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="label-luxury text-primary mb-4 block">Visual Diary</span>
            <h2 className="headline-secondary text-5xl">아롬의 시선</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="aspect-[3/4] overflow-hidden group relative">
              <img src="/rom2.jpg" alt="AROM Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="aspect-[3/4] overflow-hidden group relative md:mt-12">
              <img src="/rom4.jpg" alt="AROM Experience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="aspect-[3/4] overflow-hidden group relative">
              <img src="/rom6.jpg" alt="AROM Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="aspect-[3/4] overflow-hidden group relative md:mt-12">
              <img src="/rom7.jpg" alt="AROM Space" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* Scent Kit Application Section */}
      <section className="bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img src="/rom5.jpg" alt="Background Texture" className="w-full h-full object-cover grayscale" />
        </div>
        <ScentKitSection />
      </section>

      {/* Events Teaser */}
      <section className="py-32 px-6 bg-background">
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
              <span className="label-luxury text-primary mb-4 block">Limited Experience</span>
              <h2 className="headline-secondary text-5xl mb-8">당신의 기억을 기록하는<br/>오감의 전시</h2>
              <p className="body-primary text-foreground/70 mb-12 leading-relaxed">
                AROM은 매달 성수동 시향실에서 특별한 꽃말과 함께하는 참여형 이벤트를 진행합니다. 
                향기를 맡으며 떠오르는 누군가에게, 진심이 담긴 쪽지를 남겨보세요.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-background rounded-none px-10 h-14 button-text-luxury transition-all duration-300"
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
