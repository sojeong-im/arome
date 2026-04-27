"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { notFound, useRouter } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  const router = useRouter()
  const [isAdding, setIsAdding] = useState(false)

  if (!product) {
    notFound()
  }

  const addToCart = () => {
    setIsAdding(true)

    // Get existing cart
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    // Check if product already in cart
    const existingItemIndex = cart.findIndex((item: any) => item.productId === product.id)

    if (existingItemIndex > -1) {
      // Increment quantity
      cart[existingItemIndex].quantity += 1
    } else {
      // Add new item
      cart.push({ productId: product.id, quantity: 1 })
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart))

    // Trigger storage event for header to update
    window.dispatchEvent(new Event("storage"))

    // Show feedback and redirect to cart
    setTimeout(() => {
      setIsAdding(false)
      router.push("/cart")
    }, 500)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-48 pb-32 px-6">
        <div className={`max-w-6xl mx-auto ${!product.image ? 'max-w-3xl' : ''}`}>
          <div className={`${product.image ? 'grid md:grid-cols-2 gap-24 items-start' : 'flex flex-col'}`}>
            {/* Product Image */}
            {product.image && (
              <div className="aspect-[4/5] bg-secondary/10 relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-105 p-12"
                />
              </div>
            )}

            {/* Product Info */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-12 border-b border-primary/10 pb-12">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 mb-6 block">{product.category}</span>
                <h1 className="headline-hero text-5xl mb-4 text-foreground">{product.name}</h1>
                {product.englishName && (
                  <p className="font-serif italic text-2xl tracking-luxury-wide text-foreground/30">
                    {product.englishName}
                  </p>
                )}
              </div>

              {/* Story / Memory Section */}
              <div className="mb-12">
                <h3 className="label-luxury text-primary mb-6">The Story</h3>
                <p className="body-primary text-foreground/70 leading-relaxed text-lg italic font-serif">
                  "{product.storyCopy}"
                </p>
              </div>

              {/* Flower Meaning & Memory Theme */}
              <div className="grid grid-cols-2 gap-12 mb-12 border-y border-primary/10 py-10">
                <div>
                  <p className="body-small text-foreground/40 mb-3 uppercase tracking-widest text-[10px]">Flower Meaning</p>
                  <p className="body-secondary font-medium text-foreground/80 text-lg">{product.flowerMeaning}</p>
                </div>
                <div>
                  <p className="body-small text-foreground/40 mb-3 uppercase tracking-widest text-[10px]">Memory Theme</p>
                  <p className="body-secondary font-medium text-foreground/80 text-lg">{product.memoryTheme}</p>
                </div>
              </div>

              {/* Fragrance Notes */}
              <div className="mb-12">
                <h3 className="label-luxury text-primary mb-8">Fragrance Notes</h3>
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="body-small text-foreground/40 mb-4 uppercase tracking-widest text-[10px]">Top</p>
                    <div className="space-y-2">
                      {product.notes.top.map((note) => (
                        <p key={note} className="body-secondary text-sm text-foreground/70">{note}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="body-small text-foreground/40 mb-4 uppercase tracking-widest text-[10px]">Middle</p>
                    <div className="space-y-2">
                      {product.notes.middle.map((note) => (
                        <p key={note} className="body-secondary text-sm text-foreground/70">{note}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="body-small text-foreground/40 mb-4 uppercase tracking-widest text-[10px]">Base</p>
                    <div className="space-y-2">
                      {product.notes.base.map((note) => (
                        <p key={note} className="body-secondary text-sm text-foreground/70">{note}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Info */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-primary/10">
                  <span className="body-secondary text-foreground/40 text-sm">제품명</span>
                  <span className="body-secondary font-medium text-foreground/70">{product.technicalName}</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-primary/10">
                  <span className="body-secondary text-foreground/40 text-sm">용량</span>
                  <span className="body-secondary font-medium text-foreground/70">{product.volume}</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-10 mt-auto">
                <div className="w-full sm:w-auto">
                  <p className="body-small text-foreground/40 mb-2 uppercase tracking-widest text-[10px]">Investment</p>
                  <p className="headline-tertiary text-4xl text-foreground">{product.price.toLocaleString()}원</p>
                </div>
                <Button
                  size="lg"
                  className="w-full sm:flex-1 bg-primary hover:bg-foreground text-background rounded-none h-20 button-text-luxury transition-all duration-500 shadow-xl shadow-primary/10"
                  onClick={addToCart}
                  disabled={isAdding}
                >
                  <ShoppingCart className="mr-3 h-5 w-5" />
                  {isAdding ? "아카이빙 중..." : "장바구니 담기"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
