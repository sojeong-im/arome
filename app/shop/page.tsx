import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { ShopContent } from "@/components/shop-content"

export const metadata: Metadata = {
  title: "Shop Collection | AROM - 감정을 담은 향기",
  description: "아롬의 시그니처 향수 컬렉션을 만나보세요. 플로럴, 아로마틱, 오리엔탈 등 당신의 기억과 어울리는 최상의 향기를 제안합니다.",
  openGraph: {
    title: "Shop Collection | AROM",
    description: "아롬의 모든 시그니처 향수 컬렉션을 한곳에서 확인해 보세요.",
    images: ["/arome-lifestyle-main.jpg"],
  },
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <span className="label-luxury text-primary mb-6 block">Our Collection</span>
              <h1 className="headline-hero mb-8">당신의 계절을 위한 향기</h1>
              <p className="body-primary text-foreground/60 max-w-xl mx-auto font-serif italic text-lg">
                AROM의 모든 향수는 엄선된 프리미엄 원재료와 한 사람의 진심 어린 이야기를 담아 조제됩니다.
              </p>
            </div>
          </Reveal>

          <ShopContent products={products} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
