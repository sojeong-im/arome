"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      <Header />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-32">
              <span className="label-luxury text-primary mb-6 block text-center">Brand Essence</span>
              <h1 className="headline-hero text-center mb-12">
                기억을 향기로<br />기록하는 집, AROM
              </h1>
              <div className="w-px h-24 bg-primary/20 mx-auto mb-12"></div>
              <p className="body-primary text-xl text-center max-w-2xl mx-auto font-serif italic text-foreground/70 leading-relaxed">
                "우리는 단순히 향을 조제하지 않습니다. 우리는 당신의 생에서 가장 찬란했던 계절과, 말로 다 하지 못한 진심을 향기라는 언어로 번역합니다."
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-24 items-center mb-40">
            <Reveal delay={0.2}>
              <div className="aspect-[4/5] bg-secondary/20 relative overflow-hidden group">
                <img 
                  src="/rom1.jpg" 
                  alt="AROM Philosophy" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-8">
                <h2 className="headline-secondary text-4xl">우리의 철학</h2>
                <p className="body-primary text-foreground/80 leading-relaxed">
                  AROM은 프랑스어로 '향기'를 뜻하지만, 우리에게 이 단어는 '감정의 잔상'을 의미합니다. 
                  우리는 수만 가지의 천연 원료 중에서도 꽃이 가진 고유의 꽃말과 생명력에 집중합니다.
                </p>
                <p className="body-primary text-foreground/80 leading-relaxed">
                  꽃은 피어나는 순간부터 지는 찰나까지 저마다의 이야기를 전합니다. 
                  우리는 그 짧고도 강렬한 이야기를 오랜 시간 머무는 베이스 노트로 치환하여, 당신의 공간과 시간 속에 영원히 박제해 드립니다.
                </p>
              </div>
            </Reveal>
          </div>

          {/* New Content: The Experience */}
          <div className="grid md:grid-cols-2 gap-24 items-center mb-40">
            <div className="order-2 md:order-1 space-y-8">
              <h2 className="headline-secondary text-4xl">기억의 아카이브</h2>
              <p className="body-primary text-foreground/80 leading-relaxed">
                성수동에 위치한 AROM의 시향실은 단순히 제품을 판매하는 곳이 아닙니다. 
                이곳은 당신의 기억을 발굴하고, 기록하고, 보관하는 아카이브 센터입니다. 
                우리는 조향사와의 1:1 대화를 통해 당신이 잊고 지냈던 소중한 찰나의 향기를 찾아드립니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-foreground/70"><strong>Scent Interview:</strong> 전문 조향사가 당신의 기억 속 온도를 질문하고 답을 기록합니다.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-foreground/70"><strong>Emotional Mapping:</strong> 분석된 답변을 토대로 당신만의 감정 지도를 시각화합니다.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-foreground/70"><strong>Custom Curation:</strong> 당신의 이야기에 가장 어울리는 세 가지 시그니처 향을 제안합니다.</p>
                </div>
              </div>
            </div>
            <Reveal delay={0.2}>
              <div className="order-1 md:order-2 aspect-[4/5] bg-secondary/20 relative overflow-hidden group">
                <img 
                  src="/rom4.jpg" 
                  alt="AROM Seongsu Experience" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-16 mb-40">
            {[
              { num: "01", title: "기억의 파편", desc: "잊혀가는 순간들을 향기로 아카이빙합니다. 코끝에 닿는 순간, 당신은 다시 그날의 공기 속에 서 있게 될 것입니다." },
              { num: "02", title: "감정의 언어", desc: "말로는 전하기 어려운 고백과 위로를 꽃말이 담긴 향기에 실어 보내세요. 향기는 가장 우아한 대화의 방식입니다." },
              { num: "03", title: "시간의 기록", desc: "우리의 모든 제품은 한 사람의 인생 서사를 위해 기획됩니다. 당신의 삶이라는 위대한 소설을 향기로 완성하세요." },
            ].map((item, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <div className="text-center space-y-6">
                  <span className="font-serif text-5xl text-primary/20 leading-none">{item.num}</span>
                  <h3 className="headline-tertiary text-xl">{item.title}</h3>
                  <p className="body-secondary text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* New Content: Craftsmanship */}
          <div className="mb-40 text-center">
            <Reveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="headline-secondary text-4xl mb-12">한 방울의 진심을 위해</h2>
                <div className="aspect-video bg-secondary/20 relative overflow-hidden mb-12 group">
                  <img 
                    src="/rom5.jpg" 
                    alt="AROM Craftsmanship" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
                <p className="body-primary text-foreground/80 leading-relaxed text-left md:text-center">
                  AROM은 대량 생산을 지향하지 않습니다. 우리는 최고의 원재료를 찾기 위해 전 세계의 꽃밭을 탐험하고, 
                  추출된 에센스가 가진 본연의 힘을 유지하기 위해 저온 숙성 공법을 고수합니다. 
                  우리의 향수가 당신의 살결에 닿는 순간 느껴지는 깊이감은, 오랜 시간 기다려온 인내의 결과물입니다.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.6}>
            <div className="text-center py-20 bg-secondary/10 border-y border-primary/10">
              <p className="body-primary text-foreground/60 italic mb-2 tracking-widest uppercase text-xs">A Scented Legacy</p>
              <h2 className="headline-secondary text-3xl mb-8">당신의 이야기는 어떤 향인가요?</h2>
              <p className="body-secondary max-w-xl mx-auto text-foreground/70 mb-10">
                우리는 매일 성수동 시향실에서 새로운 기억을 조제합니다. 
                당신만을 위해 열려 있는 이 공간에서, 잊고 있던 당신의 계절을 다시 만나보세요.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
