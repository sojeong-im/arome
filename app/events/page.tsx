"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { events } from "@/lib/data"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Reveal } from "@/components/reveal"

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"ongoing" | "upcoming" | "ended">("ongoing")

  const filteredEvents = events.filter((event) => event.status === activeTab)

  const tabs = [
    { id: "ongoing" as const, label: "Ongoing" },
    { id: "upcoming" as const, label: "Upcoming" },
    { id: "ended" as const, label: "Past Events" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <span className="label-luxury text-primary mb-6 block">Our Seasons</span>
              <h1 className="headline-hero mb-8">감정을 기록하는 시간</h1>
              <p className="body-primary text-foreground/60 max-w-xl mx-auto font-serif italic text-lg line-clamp-2">
                향은 말하지 못한 마음을 대신합니다.<br/>
                Scent speaks for the heart that couldn't speak.
              </p>
            </div>
          </Reveal>

          {/* Floating Luxury Tab Bar */}
          <div className="flex justify-center mb-24">
            <div className="inline-flex border-b border-primary/10 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-10 py-6 label-luxury transition-all duration-300 relative ${
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-foreground/30 hover:text-foreground/50"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid - Artistic Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
            {filteredEvents.map((event, i) => (
              <Reveal key={event.id} delay={0.1 * (i % 2)}>
                <Link href={`/events/${event.id}`} className="group block">
                  <div className="relative aspect-[3/2] mb-12 overflow-hidden bg-secondary/20">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-8 left-8">
                      <div className="bg-background/90 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-primary">
                        {event.status}
                      </div>
                    </div>
                  </div>
                  <div className="max-w-md">
                    <h3 className="headline-secondary text-3xl mb-6 group-hover:text-primary transition-colors underline-offset-8 decoration-primary/20 group-hover:underline">
                      {event.title}
                    </h3>
                    <p className="body-secondary text-foreground/60 mb-8 leading-relaxed line-clamp-2 italic font-serif">
                      {event.description}
                    </p>
                    <div className="flex items-center text-[11px] uppercase tracking-[0.2em] text-primary/40 font-medium">
                      <Calendar className="h-4 w-4 mr-3 opacity-50" />
                      <span>{event.startDate} — {event.endDate}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-40">
              <p className="body-primary text-foreground/30 font-serif italic text-xl">
                준비된 이야기가 곧 찾아옵니다.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
