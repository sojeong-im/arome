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
              <span className="label-luxury text-primary mb-6 block">Our Collection</span>
              <h1 className="headline-hero mb-8">당신의 계절을 위한 향기</h1>
              <p className="body-primary text-foreground/60 max-w-xl mx-auto font-serif italic text-lg">
                AROM의 모든 향수는 엄선된 프리미엄 원재료와 한 사람의 진심 어린 이야기를 담아 조제됩니다.
              </p>
            </div>
          </Reveal>

          {/* Luxury Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-24 border-y border-primary/10 py-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`label-luxury transition-all duration-300 relative pb-1 ${
                  filterCategory === cat.id ? "text-primary" : "text-foreground/40 hover:text-foreground/60"
                }`}
              >
                {cat.name}
                {filterCategory === cat.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <Reveal key={product.id} delay={0.1 * (i % 3)}>
                <Link href={`/product/${product.id}`} className="group block h-full">
                  <div className="border border-primary/10 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col bg-background/60 group-hover:bg-background/80 backdrop-blur-sm overflow-hidden">
                    {/* Image Container */}
                    {product.image && (
                      <div className="aspect-[4/5] relative overflow-hidden p-10 flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105 mix-blend-multiply brightness-[1.05] contrast-[1.05]"
                        />
                      </div>
                    )}
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 mb-4 block">{product.category}</span>
                      <h3 className="headline-tertiary text-2xl mb-1">{product.name}</h3>
                      <p className="font-serif italic text-foreground/40 text-sm mb-6">{product.englishName}</p>
                      <div className="w-6 h-px bg-primary/20 mb-6" />
                      <p className="text-sm text-foreground/60 leading-relaxed mb-6 flex-1 line-clamp-2">{product.storyCopy}</p>
                      
                      <div className="w-full h-px bg-primary/10 mt-auto pt-6 mb-4" />
                      <div className="flex items-center justify-between">
                        <p className="font-sans text-lg font-medium tracking-tight">{product.price.toLocaleString()}원</p>
                        <span className="text-[10px] uppercase tracking-widest text-primary group-hover:translate-x-1 transition-transform">View Details →</span>
                      </div>
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
