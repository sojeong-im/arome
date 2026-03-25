"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { events } from "@/lib/data"
import { ExternalLink, Calendar, Flower2 } from "lucide-react"
import { notFound } from "next/navigation"

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const event = events.find((e) => e.id === id)

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-8 shadow-xl">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`px-4 py-1 rounded-full caption-luxury ${
                    event.status === "ongoing"
                      ? "bg-primary text-primary-foreground"
                      : event.status === "upcoming"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {event.status === "ongoing" ? "진행중" : event.status === "upcoming" ? "예정" : "종료"}
                </span>
                <div className="flex items-center body-small text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {event.startDate} ~ {event.endDate}
                  </span>
                </div>
              </div>
              <h1 className="headline-primary mb-4">{event.title}</h1>
              <p className="body-primary text-muted-foreground">{event.description}</p>
            </div>

            {/* Flower Meaning */}
            <div className="bg-secondary/20 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <Flower2 className="h-6 w-6 text-primary" />
                <h2 className="headline-tertiary">꽃말</h2>
              </div>
              <p className="body-primary">{event.flowerMeaning}</p>
            </div>

            {/* Story */}
            <div>
              <h2 className="headline-secondary mb-4">이야기</h2>
              <p className="body-primary text-muted-foreground">{event.story}</p>
            </div>

            {/* CTA */}
            {event.status === "ongoing" && (
              <div className="flex justify-center pt-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 button-text-luxury"
                  onClick={() => window.open(event.formUrl, "_blank")}
                >
                  이벤트 참여하기 <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
