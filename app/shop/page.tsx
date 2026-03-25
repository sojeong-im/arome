"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { products } from "@/lib/data"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("name")
  const [filterCategory, setFilterCategory] = useState("all")

  const categories = ["all", "floral", "aromatic", "oriental", "powdery"]

  let filteredProducts = products.filter((p) => filterCategory === "all" || p.category === filterCategory)

  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return a.name.localeCompare(b.name)
  })

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="headline-primary mb-4">Shop</h1>
            <p className="body-primary text-muted-foreground max-w-2xl mx-auto">당신만의 시그니처 향을 찾아보세요</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex-1">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="rounded-full">
                  <SelectValue placeholder="카테고리" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="floral">플로럴</SelectItem>
                  <SelectItem value="aromatic">아로마틱</SelectItem>
                  <SelectItem value="oriental">오리엔탈</SelectItem>
                  <SelectItem value="powdery">파우더리</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="rounded-full">
                  <SelectValue placeholder="정렬" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">이름순</SelectItem>
                  <SelectItem value="price-low">가격 낮은순</SelectItem>
                  <SelectItem value="price-high">가격 높은순</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card className="overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
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
                    <div className="flex items-center justify-between">
                      <p className="font-sans font-semibold text-lg tracking-luxury-normal">
                        {product.price.toLocaleString()}원
                      </p>
                      <span className="body-small text-muted-foreground">{product.volume}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
