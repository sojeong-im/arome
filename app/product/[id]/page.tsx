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
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col">
            {/* Product Info */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-10 border-b border-olive/10 pb-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-olive/50 mb-4 block">{product.category}</span>
                <h1 className="headline-primary mb-2">{product.name}</h1>
                {product.englishName && (
                  <p className="font-sans text-lg tracking-luxury-wide text-muted-foreground/70 uppercase">
                    {product.englishName}
                  </p>
                )}
              </div>

              {/* Story / Memory Section */}
              <div className="mb-10">
                <h3 className="headline-tertiary text-xl mb-4">Story</h3>
                <p className="body-primary text-muted-foreground leading-relaxed">{product.storyCopy}</p>
              </div>

              {/* Flower Meaning & Memory Theme */}
              <div className="grid grid-cols-2 gap-8 mb-10 border-y border-olive/10 py-8">
                <div>
                  <p className="body-small text-muted-foreground/50 mb-2 uppercase tracking-widest text-[10px]">꽃말</p>
                  <p className="body-secondary font-medium">{product.flowerMeaning}</p>
                </div>
                <div>
                  <p className="body-small text-muted-foreground/50 mb-2 uppercase tracking-widest text-[10px]">기억 테마</p>
                  <p className="body-secondary font-medium">{product.memoryTheme}</p>
                </div>
              </div>

              {/* Fragrance Notes */}
              <div className="mb-10">
                <h3 className="headline-tertiary text-xl mb-6">Fragrance Notes</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="body-small text-muted-foreground/50 mb-3 uppercase tracking-widest text-[10px]">Top</p>
                    <div className="space-y-1">
                      {product.notes.top.map((note) => (
                        <p key={note} className="body-secondary text-sm">{note}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="body-small text-muted-foreground/50 mb-3 uppercase tracking-widest text-[10px]">Middle</p>
                    <div className="space-y-1">
                      {product.notes.middle.map((note) => (
                        <p key={note} className="body-secondary text-sm">{note}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="body-small text-muted-foreground/50 mb-3 uppercase tracking-widest text-[10px]">Base</p>
                    <div className="space-y-1">
                      {product.notes.base.map((note) => (
                        <p key={note} className="body-secondary text-sm">{note}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Info */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-olive/10">
                  <span className="body-secondary text-muted-foreground">제품명</span>
                  <span className="body-secondary font-medium">{product.technicalName}</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-olive/10">
                  <span className="body-secondary text-muted-foreground">용량</span>
                  <span className="body-secondary font-medium">{product.volume}</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center gap-6">
                <div>
                  <p className="body-small text-muted-foreground/70 mb-1">Price</p>
                  <p className="headline-tertiary text-3xl">{product.price.toLocaleString()}원</p>
                </div>
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-none button-text-luxury"
                  onClick={addToCart}
                  disabled={isAdding}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {isAdding ? "담는 중..." : "장바구니 담기"}
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
