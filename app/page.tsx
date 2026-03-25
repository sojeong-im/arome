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

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-secondary mb-4">대표 향수</h2>
            <p className="body-secondary text-muted-foreground">ARÔME의 시그니처 컬렉션</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card className="overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-square bg-secondary/30 relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="headline-tertiary text-2xl mb-1">{product.name}</h3>
                      {product.englishName && (
                        <p className="font-sans text-sm tracking-luxury-wide text-muted-foreground/70 uppercase">
                          {product.englishName}
                        </p>
                      )}
                    </div>
                    <p className="body-secondary text-muted-foreground mb-4 line-clamp-2">{product.storyCopy}</p>
                    <p className="font-sans font-semibold text-lg tracking-luxury-normal">
                      {product.price.toLocaleString()}원
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scent Kit Application Section */}
      <ScentKitSection />

      {/* Events Teaser */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-secondary mb-6">꽃과 향기의 이야기</h2>
              <p className="body-primary text-muted-foreground mb-8">
                ARÔME은 매달 특별한 꽃말과 함께하는 향수 이벤트를 진행합니다. 당신의 감성을 담은 향기를 발견하고, 소중한
                사람에게 마음을 전해보세요.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full button-text-luxury"
              >
                <Link href="/events">
                  진행중인 이벤트 보기 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/elegant-perfume-bottle-with-flowers.jpg"
                alt="ARÔME Events"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
