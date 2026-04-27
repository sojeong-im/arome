"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { HeroTitleArome } from "./hero-title-arome"
import { BlurPanel } from "./blur-panel"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 0.98])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-background">
      <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
        <Image
          src="/rom1.jpg"
          alt="AROM Signature Perfume"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-4xl w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="block text-sm uppercase tracking-[0.3em] text-primary mb-8 font-medium"
          >
            Memories in every scent
          </motion.span>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="mb-10"
          >
            <HeroTitleArome variant="kerning" className="scale-110 md:scale-125 mb-12 text-foreground" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-2xl mx-auto mb-16 font-serif italic"
          >
            "향기는 말하지 못한 진정한 마음을 기록하는 유일한 언어입니다."
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
              href="/events"
              className="group relative px-10 py-4 bg-primary text-background overflow-hidden transition-all duration-500 rounded-none min-w-[200px]"
            >
              <span className="relative z-10 button-text-luxury">이벤트 참여하기</span>
              <div className="absolute inset-0 bg-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link
              href="/shop"
              className="group relative px-10 py-4 border border-primary text-primary overflow-hidden transition-all duration-500 rounded-none min-w-[200px]"
            >
              <span className="relative z-10 button-text-luxury">컬렉션 둘러보기</span>
              <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-0 right-0 z-20 hidden md:flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/40 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-primary/60 vertical-text">Scroll</span>
        </div>
      </motion.div>
    </section>

  )
}
