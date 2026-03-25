"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

export function ScentKitSection() {
  const [showForm, setShowForm] = useState(false)
  const formUrl = "https://forms.gle/uDPXfv2GJq7DhhjW9"

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#faf8f5] to-[#f5f0e8]" aria-labelledby="scent-kit-title">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#faf8f5] rounded-2xl shadow-xl ring-1 ring-[#e8dfd3]/60 p-8 md:p-12 lg:p-16">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 id="scent-kit-title" className="headline-secondary mb-4 text-[#5a6f4c]">
              <span className="whitespace-nowrap">ARÔME 시향 키트 신청</span>
            </h2>
            <p className="body-primary text-[#7a7a7a] max-w-2xl mx-auto leading-luxury-relaxed">
              <span className="whitespace-nowrap">꽃과 향으로</span> 나만의 기억을 시작해보세요.
              <br />
              간단한 신청 후, 안내에 따라 <span className="whitespace-nowrap">시향 키트를</span> 받아보실 수 있습니다.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-[#5a6f4c] hover:bg-[#3d4a33] text-white rounded-full px-8 button-text-luxury shadow-lg"
              aria-label="새 탭에서 ARÔME 시향 키트 신청 폼 열기"
            >
              <a href={formUrl} target="_blank" rel="noopener noreferrer">
                <span className="whitespace-nowrap">신청 폼 열기</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowForm(!showForm)}
              className="rounded-full px-8 border-[#5a6f4c] text-[#5a6f4c] hover:bg-[#5a6f4c]/10 bg-transparent button-text-luxury"
              aria-label={showForm ? "신청 폼 숨기기" : "페이지 내에서 신청 폼 보기"}
              aria-expanded={showForm}
            >
              {showForm ? (
                <span className="whitespace-nowrap">폼 숨기기</span>
              ) : (
                <span className="whitespace-nowrap">여기서 신청하기</span>
              )}
            </Button>
          </div>

          {/* Embedded Form */}
          {showForm && (
            <div className="mt-8 rounded-xl overflow-hidden border border-[#e8dfd3] shadow-inner bg-white">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="ARÔME 시향 키트 신청 폼"
              >
                로딩 중…
              </iframe>
            </div>
          )}

          {/* Privacy Notice */}
          <div className="mt-8 pt-6 border-t border-[#e8dfd3]">
            <p className="body-small text-[#7a7a7a] text-center">
              ※ 개인정보는 신청 용도로만 사용되며, <span className="whitespace-nowrap">외부 결제를</span> 요구하지
              않습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
