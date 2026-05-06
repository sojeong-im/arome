import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Us | AROM - 기억을 향기로 기록하는 집",
  description: "당신의 이야기가 궁금합니다. 아롬(AROM) 브랜드에 대한 문의, 성수동 시향실 예약 관련 질문이나 제휴 제안을 남겨주세요.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      <Header />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <span className="label-luxury text-primary mb-6 block">Get in Touch</span>
              <h1 className="headline-hero mb-8">당신의 이야기를<br/>들려주세요</h1>
              <p className="body-primary text-foreground/60 max-w-xl mx-auto font-serif italic text-lg">
                아롬의 향기와 철학에 대한 궁금증, 시향실 방문 안내, 혹은 특별한 협업 제안까지. 
                당신의 소중한 목소리에 귀 기울이겠습니다.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-24 items-start max-w-5xl mx-auto">
            {/* Contact Information */}
            <Reveal delay={0.2}>
              <div className="space-y-16 h-full flex flex-col justify-center">
                <div>
                  <p className="font-serif italic text-foreground/50 leading-relaxed text-2xl">
                    "향기는 보이지 않는 가장 아름다운 대화입니다.<br/>
                    언제든 편하게 안부를 전해주세요."
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={0.4}>
              <div className="bg-secondary/10 p-10 border border-primary/5">
                <form className="space-y-8" action="https://formspree.io/f/placeholder" method="POST">
                  <div>
                    <label htmlFor="name" className="body-small text-foreground/60 mb-3 block uppercase tracking-widest text-[10px]">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full bg-transparent border-b border-primary/20 pb-3 focus:outline-none focus:border-primary transition-colors text-foreground body-secondary"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="body-small text-foreground/60 mb-3 block uppercase tracking-widest text-[10px]">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full bg-transparent border-b border-primary/20 pb-3 focus:outline-none focus:border-primary transition-colors text-foreground body-secondary"
                      placeholder="회신 받으실 이메일을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="body-small text-foreground/60 mb-3 block uppercase tracking-widest text-[10px]">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      className="w-full bg-transparent border-b border-primary/20 pb-3 focus:outline-none focus:border-primary transition-colors text-foreground body-secondary"
                    >
                      <option value="general">일반 문의</option>
                      <option value="reservation">시향실 예약 문의</option>
                      <option value="partnership">제휴 및 협업 제안</option>
                      <option value="other">기타</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="body-small text-foreground/60 mb-3 block uppercase tracking-widest text-[10px]">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      className="w-full bg-transparent border-b border-primary/20 pb-3 focus:outline-none focus:border-primary transition-colors text-foreground body-secondary resize-none"
                      placeholder="문의 내용을 상세히 적어주세요"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-foreground text-background rounded-none h-16 button-text-luxury transition-all duration-500 shadow-lg shadow-primary/5 mt-4"
                  >
                    메시지 보내기
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
