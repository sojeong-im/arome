"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/data"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

export default function ShopPage() {
  const [filterCategory, setFilterCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Collections" },
    { id: "floral", name: "Floral" },
    { id: "aromatic", name: "Aromatic" },
    { id: "oriental", name: "Oriental" },
    { id: "powdery", name: "Powdery" }
  ]

  const filteredProducts = products.filter((p) => filterCategory === "all" || p.category === filterCategory)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <span className="label-luxury text-olive mb-6 block">Our Collection</span>
              <h1 className="headline-hero mb-8">당신의 계절을 위한 향기</h1>
              <p className="body-primary text-text/60 max-w-xl mx-auto font-serif italic text-lg">
                AROM의 모든 향수는 엄선된 프리미엄 원재료와 한 사람의 진심 어린 이야기를 담아 조제됩니다.
              </p>
            </div>
          </Reveal>

          {/* Luxury Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-24 border-y border-olive/10 py-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`label-luxury transition-all duration-300 relative pb-1 ${
                  filterCategory === cat.id ? "text-olive" : "text-text/40 hover:text-text/60"
                }`}
              >
                {cat.name}
                {filterCategory === cat.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-olive" />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <Reveal key={product.id} delay={0.1 * (i % 3)}>
                <Link href={`/product/${product.id}`} className="group block h-full">
                  <div className="border border-olive/10 group-hover:border-olive/30 transition-all duration-500 p-8 h-full flex flex-col bg-white/60 group-hover:bg-white/80">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-olive/50 mb-6 block">{product.category}</span>
                    <h3 className="headline-tertiary text-2xl mb-1">{product.name}</h3>
                    <p className="font-serif italic text-text/40 text-sm mb-6">{product.englishName}</p>
                    <div className="w-6 h-px bg-olive/20 mb-6" />
                    <p className="text-sm text-text/60 leading-relaxed mb-4 flex-1">{product.storyCopy}</p>
                    <div className="text-xs text-text/40 mb-1">
                      <span className="uppercase tracking-widest text-[9px] text-olive/40">꽃말</span>
                      <p className="mt-1">{product.flowerMeaning}</p>
                    </div>
                    <div className="my-4 space-y-2">
                      <p className="text-[9px] uppercase tracking-widest text-olive/40">Notes</p>
                      <p className="text-xs text-text/50">{[...product.notes.top, ...product.notes.middle, ...product.notes.base].join(" · ")}</p>
                    </div>
                    <div className="w-full h-px bg-olive/10 mt-auto pt-6 mb-4" />
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-lg font-medium tracking-tight">{product.price.toLocaleString()}원</p>
                      <span className="text-[10px] uppercase tracking-widest text-olive">View →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
