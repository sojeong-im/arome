"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"

interface CartItem {
  productId: string
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(cart)
    setIsLoading(false)
  }, [])

  const updateCart = (newCart: CartItem[]) => {
    setCartItems(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
    // Trigger storage event for header to update
    window.dispatchEvent(new Event("storage"))
  }

  const updateQuantity = (productId: string, change: number) => {
    const newCart = cartItems.map((item) => {
      if (item.productId === productId) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    updateCart(newCart)
  }

  const removeItem = (productId: string) => {
    const newCart = cartItems.filter((item) => item.productId !== productId)
    updateCart(newCart)
  }

  const getCartProducts = () => {
    return cartItems
      .map((item) => {
        const product = products.find((p) => p.id === item.productId)
        return product ? { ...product, quantity: item.quantity } : null
      })
      .filter(Boolean)
  }

  const cartProducts = getCartProducts()
  const subtotal = cartProducts.reduce((sum, item) => sum + (item?.price || 0) * (item?.quantity || 0), 0)

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-32 pb-24 px-6 flex items-center justify-center min-h-screen">
          <p className="body-primary text-muted-foreground">로딩 중...</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="headline-primary text-center mb-4">
              <span className="whitespace-nowrap">장바구니</span>
            </h1>
            <p className="body-primary text-center text-muted-foreground mb-12">당신이 선택한 향기들</p>
          </Reveal>

          {cartProducts.length === 0 ? (
            // Empty cart state
            <Reveal>
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-24 h-24 rounded-full bg-secondary/30 flex items-center justify-center mb-6">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground/50" />
                </div>
                <h2 className="headline-tertiary mb-3">장바구니가 비어있습니다</h2>
                <p className="body-secondary text-muted-foreground mb-8 text-center max-w-md">
                  <span className="whitespace-nowrap">AROM</span>의 향수 컬렉션에서
                  <br />
                  당신의 이야기를 담은 향을 찾아보세요
                </p>
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full button-text-luxury"
                  >
                    향수 컬렉션 보기
                  </Button>
                </Link>
              </div>
            </Reveal>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartProducts.map((item, index) => (
                  <Reveal key={item?.id} delay={index * 0.1}>
                    <div className="bg-secondary/10 rounded-2xl p-6 flex gap-6">
                      {/* Product Image */}
                      <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-secondary/30">
                        <img
                          src={item?.image || "/placeholder.svg"}
                          alt={item?.name || ""}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="headline-tertiary text-xl mb-1">
                            <span className="whitespace-nowrap">{item?.name}</span>
                          </h3>
                          {item?.englishName && (
                            <p className="body-small text-muted-foreground/70 uppercase tracking-luxury-wide mb-2">
                              {item.englishName}
                            </p>
                          )}
                          <p className="body-secondary text-muted-foreground">{item?.technicalName}</p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-transparent"
                              onClick={() => updateQuantity(item?.id || "", -1)}
                              disabled={item?.quantity === 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="body-secondary font-medium w-8 text-center">{item?.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-transparent"
                              onClick={() => updateQuantity(item?.id || "", 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="headline-tertiary text-xl">
                              {((item?.price || 0) * (item?.quantity || 0)).toLocaleString()}원
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item?.id || "")}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Reveal delay={0.2}>
                  <div className="bg-secondary/10 rounded-2xl p-8 sticky top-32">
                    <h2 className="headline-tertiary text-2xl mb-6">주문 요약</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between body-secondary">
                        <span className="text-muted-foreground">소계</span>
                        <span className="font-medium">{subtotal.toLocaleString()}원</span>
                      </div>
                      <div className="flex justify-between body-secondary">
                        <span className="text-muted-foreground">배송비</span>
                        <span className="font-medium">무료</span>
                      </div>
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between headline-tertiary text-xl">
                          <span>총 금액</span>
                          <span>{subtotal.toLocaleString()}원</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full button-text-luxury mb-4"
                    >
                      주문하기
                    </Button>

                    <Link href="/shop">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full rounded-full button-text-luxury bg-transparent"
                      >
                        쇼핑 계속하기
                      </Button>
                    </Link>

                    <p className="body-small text-muted-foreground/70 text-center mt-6 leading-relaxed">
                      ※ 모든 향수는 정성스럽게 포장되어 배송됩니다
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
