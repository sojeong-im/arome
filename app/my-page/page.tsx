"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { products, events } from "@/lib/data"
import Link from "next/link"
import { Calendar, Heart, Sparkles, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MyPage() {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    joinDate: "2024.11",
    scentProfile: {
      personality: "섬세하고 감성적인",
      preferredNotes: ["플로럴", "파우더리", "우디"],
      season: "봄",
      mood: "고요하고 따뜻한",
    },
  }

  // Mock registered events
  const registeredEvents = events.slice(0, 2)

  // Mock favorite products
  const favoriteProducts = products.slice(0, 3)

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <Reveal>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h1 className="headline-primary mb-4 tracking-[-0.02em] text-foreground">나의 향 여정</h1>
              <p className="body-primary text-foreground/60 leading-relaxed">
                AROM과 함께한 시간 · {user.joinDate}부터
              </p>
            </div>
          </Reveal>

          {/* Scent Profile Section */}
          <Reveal delay={0.1}>
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="headline-secondary tracking-[-0.02em] text-foreground">나의 향 프로필</h2>
                <Button variant="ghost" size="sm" className="label-luxury text-primary">
                  수정하기
                </Button>
              </div>
              <div className="bg-secondary/10 p-8 border border-primary/10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h3 className="label-luxury text-primary">향 성향</h3>
                    </div>
                    <p className="body-primary leading-relaxed mb-6 text-foreground/80">{user.scentProfile.personality}</p>
                    <div className="space-y-4">
                      <div>
                        <p className="body-secondary text-foreground/50 mb-2">선호하는 노트</p>
                        <div className="flex flex-wrap gap-2">
                          {user.scentProfile.preferredNotes.map((note) => (
                            <span
                              key={note}
                              className="px-3 py-1 bg-background border border-primary/10 text-foreground/70 text-sm"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="body-secondary text-foreground/50 mb-2">어울리는 계절</p>
                        <p className="body-primary text-foreground/80">{user.scentProfile.season}</p>
                      </div>
                      <div>
                        <p className="body-secondary text-foreground/50 mb-2">향의 분위기</p>
                        <p className="body-primary text-foreground/80">{user.scentProfile.mood}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-l border-primary/10 pl-8">
                    <h3 className="label-luxury mb-4 text-primary">추천 향수</h3>
                    <p className="body-secondary text-foreground/50 leading-relaxed mb-4">
                      당신의 향 프로필을 바탕으로 선별한 향수입니다.
                    </p>
                    <div className="space-y-3">
                      <Link
                        href={`/product/${products[4].id}`}
                        className="block p-3 bg-background border border-primary/10 hover:border-primary transition-colors"
                      >
                        <p className="font-serif text-lg mb-1 text-foreground">{products[4].name}</p>
                        <p className="body-secondary text-foreground/40 text-sm">{products[4].englishName}</p>
                      </Link>
                      <Link
                        href={`/product/${products[1].id}`}
                        className="block p-3 bg-background border border-primary/10 hover:border-primary transition-colors"
                      >
                        <p className="font-serif text-lg mb-1 text-foreground">{products[1].name}</p>
                        <p className="body-secondary text-foreground/40 text-sm">{products[1].englishName}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Registered Events Section */}
          <Reveal delay={0.2}>
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="headline-secondary tracking-[-0.02em] text-foreground">참여한 이벤트</h2>
                <Link href="/events">
                  <Button variant="ghost" size="sm" className="label-luxury text-primary">
                    더 보기
                  </Button>
                </Link>
              </div>
              {registeredEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {registeredEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={`/events/${event.id}`}
                      className="group border border-primary/10 overflow-hidden hover:border-primary transition-colors bg-background/50"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="body-secondary text-foreground/50 text-sm">
                            {event.startDate} ~ {event.endDate}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl mb-2 tracking-[-0.02em] text-foreground">{event.title}</h3>
                        <p className="body-secondary text-foreground/60 leading-relaxed line-clamp-2">
                          {event.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-secondary/10 border border-primary/10">
                  <Calendar className="w-12 h-12 text-primary/20 mx-auto mb-4" />
                  <p className="body-primary text-foreground/50 mb-4">아직 참여한 이벤트가 없습니다.</p>
                  <Link href="/events">
                    <Button variant="outline" className="border-primary text-primary rounded-none">이벤트 둘러보기</Button>
                  </Link>
                </div>
              )}
            </div>
          </Reveal>

          {/* Favorite Products Section */}
          <Reveal delay={0.3}>
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="headline-secondary tracking-[-0.02em]">관심 향수</h2>
                <Link href="/shop">
                  <Button variant="ghost" size="sm" className="label-luxury text-primary">
                    더 보기
                  </Button>
                </Link>
              </div>
              {favoriteProducts.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-6">
                  {favoriteProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="group border border-primary/10 p-8 h-full flex flex-col bg-background/60 group-hover:bg-background/90 group-hover:border-primary/30 transition-all duration-500 backdrop-blur-sm relative"
                    >
                      <button className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center transition-colors">
                        <Heart className="w-5 h-5 text-primary fill-primary" />
                      </button>
                      <div className="flex-1">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 mb-6 block">{product.category}</span>
                        <h3 className="headline-tertiary text-2xl mb-1 tracking-[-0.02em]">{product.name}</h3>
                        <p className="font-serif italic text-foreground/40 text-sm mb-6">{product.englishName}</p>
                        <div className="w-6 h-px bg-primary/20 mb-6" />
                        <p className="body-primary text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-3">
                          {product.storyCopy}
                        </p>
                      </div>
                      <div className="w-full h-px bg-primary/10 mt-auto pt-6 mb-4" />
                      <div className="flex items-center justify-between">
                        <p className="font-sans text-lg tracking-tight font-medium">
                          {product.price.toLocaleString()}원
                        </p>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                          View →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-secondary/20 rounded-none border border-primary/10">
                  <Heart className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                  <p className="body-primary text-foreground/50 mb-4">아직 관심 향수가 없습니다.</p>
                  <Link href="/shop">
                    <Button variant="outline" className="border-primary text-primary rounded-none">향수 둘러보기</Button>
                  </Link>
                </div>
              )}
            </div>
          </Reveal>

          {/* Scent Journey Timeline */}
          <Reveal delay={0.4}>
            <div>
              <h2 className="headline-secondary mb-8 tracking-[-0.02em] text-foreground">나의 향 여정</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="w-px h-full bg-primary/10 mt-2" />
                  </div>
                  <div className="pb-8">
                    <p className="body-secondary text-foreground/40 mb-2">2025.01.15</p>
                    <h3 className="label-luxury mb-2 text-primary">기억의 시향실 참여</h3>
                    <p className="body-secondary text-foreground/60 leading-relaxed">
                      당신의 기억을 듣고 어울리는 향을 제안받았습니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="w-px h-full bg-primary/10 mt-2" />
                  </div>
                  <div className="pb-8">
                    <p className="body-secondary text-foreground/40 mb-2">2024.12.20</p>
                    <h3 className="label-luxury mb-2 text-primary">첫 향수 구매</h3>
                    <p className="body-secondary text-foreground/60 leading-relaxed">
                      "편지에 남은 향"을 선택하셨습니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/30" />
                  </div>
                  <div>
                    <p className="body-secondary text-foreground/40 mb-2">2024.11.05</p>
                    <h3 className="label-luxury mb-2 text-primary/50">AROM과의 첫 만남</h3>
                    <p className="body-secondary text-foreground/40 leading-relaxed">
                      당신의 향 여정이 시작되었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Footer />
    </main>
  )
}
