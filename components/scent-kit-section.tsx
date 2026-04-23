"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Reveal } from "./reveal"

export function ScentKitSection() {
  const [showForm, setShowForm] = useState(false)
  const formUrl = "https://forms.gle/uDPXfv2GJq7DhhjW9"

  return (
    <section className="py-40 px-6 bg-secondary" aria-labelledby="scent-kit-title">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-background p-12 md:p-24 border border-border overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-olive/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />

          {/* Header */}
          <Reveal>
            <div className="text-center mb-16 relative z-10">
              <span className="label-luxury text-olive mb-6 block">Direct Experience</span>
              <h2 id="scent-kit-title" className="headline-secondary text-5xl mb-8">
                기억의 파편을 담은 시향 키트
              </h2>
              <p className="body-primary text-text/60 max-w-2xl mx-auto leading-relaxed font-serif italic text-lg">
                집으로 찾아가는 AROM의 작은 정원.<br />
                간단한 시향 신청을 통해 당신의 공간에서 꽃과 향기를 경험해 보세요.
              </p>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 relative z-10">
              <Button
                asChild
                className="bg-olive hover:bg-olive-dark text-white rounded-none px-12 h-16 button-text-luxury transition-all duration-500 shadow-xl shadow-olive/10"
              >
                <a href={formUrl} target="_blank" rel="noopener noreferrer">
                  신청 폼 열기 <ExternalLink className="ml-3 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowForm(!showForm)}
                className="border-olive text-olive hover:bg-olive hover:text-white rounded-none px-12 h-16 button-text-luxury transition-all duration-500"
              >
                {showForm ? "폼 숨기기" : "간편 신청하기"}
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          {/* Embedded Form */}
          {showForm && (
            <Reveal delay={0.1}>
              <div className="mt-12 border border-olive/10 bg-white relative z-10 shadow-lg">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="AROM 시향 키트 신청 폼"
                >
                  로딩 중…
                </iframe>
              </div>
            </Reveal>
          )}

          {/* Privacy Notice */}
          <div className="mt-16 pt-10 border-t border-olive/10 relative z-10">
            <p className="body-small text-text/40 text-center uppercase tracking-widest text-[10px]">
              ※ Personal information is for application only. No external payment required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
