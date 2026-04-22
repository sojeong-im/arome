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
    <main className="min-h-screen bg-[#FDFBF7]">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {filteredProducts.map((product, i) => (
              <Reveal key={product.id} delay={0.1 * (i % 3)}>
                <Link href={`/product/${product.id}`} className="group block">
                  <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-[#F5F1E9]">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="text-center px-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-olive/60 mb-3 block">{product.category}</span>
                    <h3 className="headline-tertiary text-2xl mb-2">{product.name}</h3>
                    <p className="body-secondary text-text/40 italic mb-4 text-sm font-serif">{product.englishName}</p>
                    <div className="w-8 h-px bg-olive/20 mx-auto mb-4" />
                    <p className="font-sans text-lg tracking-tight font-medium">
                      {product.price.toLocaleString()}원
                    </p>
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
