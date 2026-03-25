"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <Reveal>
            <div className="text-center mb-20">
              <h1 className="headline-primary mb-6 tracking-[-0.02em]">
                <span className="whitespace-nowrap">ARÔME</span>
              </h1>
              <p className="body-primary text-muted-foreground leading-relaxed italic">
                A perfume house that records a person's story through flowers and scents.
              </p>
            </div>
          </Reveal>

          {/* Philosophy Section */}
          <div className="space-y-16">
            <Reveal delay={0.1}>
              <div className="text-center">
                <h2 className="headline-secondary mb-6 tracking-[-0.02em]">우리의 철학</h2>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="body-primary leading-relaxed">
                    우리는 향을 판매하는 <span className="whitespace-nowrap">브랜드가 아닙니다.</span>
                  </p>
                  <p className="body-primary leading-relaxed">
                    우리는 누군가의 기억을 <span className="whitespace-nowrap">향으로 번역합니다.</span>
                  </p>
                  <p className="body-primary leading-relaxed">
                    꽃과 향은, 결국 한 사람의 <span className="whitespace-nowrap">이야기입니다.</span>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-t border-border pt-16">
                <h3 className="headline-tertiary mb-8 text-center tracking-[-0.02em]">우리가 믿는 것</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="mb-4">
                      <span className="text-4xl font-serif">01</span>
                    </div>
                    <h4 className="label-luxury mb-3">
                      <span className="whitespace-nowrap">기억을 남깁니다</span>
                    </h4>
                    <p className="body-secondary text-muted-foreground leading-relaxed">
                      우리는 향을 만들지 않습니다. 우리는 <span className="whitespace-nowrap">기억을 남깁니다.</span> 한
                      사람의 순간이 <span className="whitespace-nowrap">향기로 기록됩니다.</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-4">
                      <span className="text-4xl font-serif">02</span>
                    </div>
                    <h4 className="label-luxury mb-3">
                      <span className="whitespace-nowrap">마음을 대신합니다</span>
                    </h4>
                    <p className="body-secondary text-muted-foreground leading-relaxed">
                      향은 말하지 못한 <span className="whitespace-nowrap">마음을 대신합니다.</span> 꽃말처럼, 향기는{" "}
                      <span className="whitespace-nowrap">감정의 언어가</span> 됩니다.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-4">
                      <span className="text-4xl font-serif">03</span>
                    </div>
                    <h4 className="label-luxury mb-3">
                      <span className="whitespace-nowrap">한 사람의 이야기</span>
                    </h4>
                    <p className="body-secondary text-muted-foreground leading-relaxed">
                      모든 향은 한 사람의 <span className="whitespace-nowrap">이야기를 담습니다.</span> 당신만의 기억과
                      감정이 <span className="whitespace-nowrap">향기로 기록됩니다.</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="border-t border-border pt-16">
                <h3 className="headline-tertiary mb-8 text-center tracking-[-0.02em]">
                  <span className="whitespace-nowrap">꽃과 향으로</span> 전하는 감정
                </h3>
                <div className="max-w-2xl mx-auto space-y-6">
                  <p className="body-primary leading-relaxed">
                    <span className="whitespace-nowrap">ARÔME은</span> 단순한 향수 브랜드가 아닙니다. 우리는 꽃과 향을
                    통해 감정을 전달하는 <span className="whitespace-nowrap">퍼퓸 하우스입니다.</span>
                  </p>
                  <p className="body-primary leading-relaxed">
                    각각의 향수는 꽃말과 기억, 그리고 한 사람의 이야기를 담고 있습니다.{" "}
                    <span className="whitespace-nowrap">프리지아의 순수함,</span>{" "}
                    <span className="whitespace-nowrap">장미의 열정,</span>{" "}
                    <span className="whitespace-nowrap">라벤더의 평온함.</span> 모든 꽃은 고유한 의미를 가지고 있으며,
                    우리는 그 의미를 <span className="whitespace-nowrap">향으로 번역합니다.</span>
                  </p>
                  <p className="body-primary leading-relaxed">
                    당신이 전하지 못한 말, 기억하고 싶은 순간, 남기고 싶은 감정.{" "}
                    <span className="whitespace-nowrap">ARÔME은</span> 그 모든 것을{" "}
                    <span className="whitespace-nowrap">향기로 기록합니다.</span>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="border-t border-border pt-16 text-center">
                <p className="body-primary text-muted-foreground leading-relaxed italic mb-4">
                  "We don't make scents. We leave memories."
                </p>
                <p className="body-secondary text-muted-foreground/80 leading-relaxed">
                  방문자가 "향수를 산다"가 아니라 "감정을 기록하러 왔다"는 인상을 갖도록.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
