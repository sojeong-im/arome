"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { events } from "@/lib/data"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"ongoing" | "upcoming" | "ended">("ongoing")

  const filteredEvents = events.filter((event) => event.status === activeTab)

  const tabs = [
    { id: "ongoing" as const, label: "진행중" },
    { id: "upcoming" as const, label: "예정" },
    { id: "ended" as const, label: "종료" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="headline-primary mb-6">감정을 기록하는 시간</h1>
            <p className="body-primary text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              향은 말하지 못한 마음을 대신합니다.
            </p>
            <p className="body-secondary text-muted-foreground/80 max-w-xl mx-auto leading-relaxed italic text-sm">
              Scent speaks for the heart that couldn't speak.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-secondary/30 rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full button-text-luxury transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <Card className="overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full caption-luxury">
                      {event.status === "ongoing" ? "진행중" : event.status === "upcoming" ? "예정" : "종료"}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="headline-tertiary text-2xl mb-2 tracking-[-0.02em]">{event.title}</h3>
                    <p className="body-secondary text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                    <div className="flex items-center body-small text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {event.startDate} ~ {event.endDate}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="body-primary text-muted-foreground">해당하는 이벤트가 없습니다.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
