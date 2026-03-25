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
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary/30 shadow-xl">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              {/* Poetic Name */}
              <div className="mb-8">
                <h1 className="headline-primary mb-2">{product.name}</h1>
                {product.englishName && (
                  <p className="font-sans text-lg tracking-luxury-wide text-muted-foreground/70 uppercase">
                    {product.englishName}
                  </p>
                )}
              </div>

              {/* Story / Memory Section */}
              <div className="mb-8 p-6 bg-secondary/20 rounded-2xl">
                <h3 className="headline-tertiary text-xl mb-3">Story & Memory</h3>
                <p className="body-primary text-muted-foreground mb-4 leading-relaxed">{product.storyCopy}</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="body-small text-muted-foreground/70 mb-1">꽃말</p>
                    <p className="body-secondary font-medium">{product.flowerMeaning}</p>
                  </div>
                  <div>
                    <p className="body-small text-muted-foreground/70 mb-1">기억 테마</p>
                    <p className="body-secondary font-medium">{product.memoryTheme}</p>
                  </div>
                </div>
              </div>

              {/* Technical Info */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <span className="body-secondary text-muted-foreground">제품명</span>
                  <span className="body-secondary font-medium">{product.technicalName}</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <span className="body-secondary text-muted-foreground">용량</span>
                  <span className="body-secondary font-medium">{product.volume}</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <span className="body-secondary text-muted-foreground">카테고리</span>
                  <span className="body-secondary font-medium capitalize">{product.category}</span>
                </div>
              </div>

              {/* Fragrance Notes */}
              <div className="mb-8">
                <h3 className="headline-tertiary text-xl mb-4">Fragrance Notes</h3>
                <div className="space-y-4">
                  <div>
                    <p className="body-small text-muted-foreground/70 mb-2">Top Notes</p>
                    <p className="body-secondary">{product.notes.top.join(", ")}</p>
                  </div>
                  <div>
                    <p className="body-small text-muted-foreground/70 mb-2">Middle Notes</p>
                    <p className="body-secondary">{product.notes.middle.join(", ")}</p>
                  </div>
                  <div>
                    <p className="body-small text-muted-foreground/70 mb-2">Base Notes</p>
                    <p className="body-secondary">{product.notes.base.join(", ")}</p>
                  </div>
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
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full button-text-luxury"
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
