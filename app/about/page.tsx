"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-olive/10">
      <Header />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-32">
              <span className="label-luxury text-olive mb-6 block text-center">Brand Essence</span>
              <h1 className="headline-hero text-center mb-12">
                기억을 향기로<br />기록하는 집, ARÔME
              </h1>
              <div className="w-px h-24 bg-olive/20 mx-auto mb-12"></div>
              <p className="body-primary text-xl text-center max-w-2xl mx-auto font-serif italic text-text/70 leading-relaxed">
                "우리는 단순히 향을 조제하지 않습니다. 우리는 당신의 생에서 가장 찬란했던 계절과, 말로 다 하지 못한 진심을 향기라는 언어로 번역합니다."
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-24 items-center mb-40">
            <Reveal delay={0.2}>
              <div className="aspect-[4/5] bg-secondary/20 relative overflow-hidden">
                <img 
                  src="/elegant-rose-perfume-bottle.jpg" 
                  alt="ARÔME Philosophy" 
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-8">
                <h2 className="headline-secondary text-4xl">우리의 철학</h2>
                <p className="body-primary text-text/80 leading-relaxed">
                  ARÔME은 프랑스어로 '향기'를 뜻하지만, 우리에게 이 단어는 '감정의 잔상'을 의미합니다. 
                  우리는 수만 가지의 천연 원료 중에서도 꽃이 가진 고유의 꽃말과 생명력에 집중합니다.
                </p>
                <p className="body-primary text-text/80 leading-relaxed">
                  꽃은 피어나는 순간부터 지는 찰나까지 저마다의 이야기를 전합니다. 
                  우리는 그 짧고도 강렬한 이야기를 오랜 시간 머무는 베이스 노트로 치환하여, 당신의 공간과 시간 속에 영원히 박제해 드립니다.
                </p>
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
                  <span className="font-serif text-5xl text-olive/20 leading-none">{item.num}</span>
                  <h3 className="headline-tertiary text-xl">{item.title}</h3>
                  <p className="body-secondary text-text/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.6}>
            <div className="text-center py-20 bg-secondary/10 border-y border-olive/10">
              <p className="body-primary text-text/60 italic mb-2 tracking-widest uppercase text-xs">A Scented Legacy</p>
              <h2 className="headline-secondary text-3xl mb-8">당신의 이야기는 어떤 향인가요?</h2>
              <p className="body-secondary max-w-xl mx-auto text-text/70 mb-10">
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
