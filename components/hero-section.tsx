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
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0 bg-ivory" style={{ scale: imageScale, y: imageY }}>
        <Image
          src="/subtle-soft-floral-blur-background-low-saturation-.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/50 via-transparent to-ivory/30" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center">
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>

          {/* Main ARÔME Title with animation */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <HeroTitleArome variant="kerning" className="mb-8" />
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>

          {/* Screen reader only text for accessibility */}
          <p className="sr-only">
            ARÔME은 꽃과 향을 통해 한 사람의 이야기를 기록하는 퍼퓸 하우스입니다. A scent that resembles you, a flower
            that remains with you.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/events"
              className="px-8 py-4 bg-olive text-ivory rounded-full button-text-luxury hover:bg-olive-dark transition-colors duration-300 min-w-[180px] text-center"
              aria-label="ARÔME 이벤트 페이지로 이동"
            >
              이벤트 보기
            </Link>
            <Link
              href="/shop"
              className="px-8 py-4 bg-beige text-text rounded-full button-text-luxury hover:bg-accent transition-colors duration-300 min-w-[180px] text-center"
              aria-label="ARÔME 향수 컬렉션 페이지로 이동"
            >
              향수 컬렉션
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Info Strip - keeping existing brand messages */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <BlurPanel className="mx-6 mb-6 px-8 py-4 bg-beige/40 backdrop-blur-md border-beige/60">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-text/80">
            <span className="text-sm leading-relaxed text-center">
              우리는 향을 만들지 않습니다. 우리는 <span className="whitespace-nowrap">기억을 남깁니다.</span>
            </span>
            <span className="hidden md:inline text-text/40">·</span>
            <span className="text-sm leading-relaxed text-center">
              향은 말하지 못한 <span className="whitespace-nowrap">마음을 대신합니다.</span>
            </span>
          </div>
        </BlurPanel>
      </motion.div>
    </section>
  )
}
