"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type AnimationVariant = "kerning" | "blur" | "wipe" | "cascade" | "sheenHover" | "float"

interface HeroTitleAromeProps {
  variant?: AnimationVariant
  className?: string
}

export function HeroTitleArome({ variant = "kerning", className = "" }: HeroTitleAromeProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Base styles for the AROM title
  const baseStyles =
    "font-serif whitespace-nowrap text-[14vw] md:text-[8.5rem] leading-[0.9] select-none " +
    "text-text relative " +
    "[text-shadow:0_2px_8px_rgba(45,45,45,0.08),0_0_20px_rgba(212,196,176,0.15)] " +
    "animate-arome-luxury-glow"

  // Variant-specific styles and animations
  const getVariantStyles = () => {
    switch (variant) {
      case "kerning":
        return "animate-arome-kerning tracking-[0.08em]"
      case "blur":
        return "animate-arome-blur tracking-[0.08em]"
      case "wipe":
        return "animate-arome-wipe tracking-[0.08em]"
      case "cascade":
        return "tracking-[0.08em]" // Handled separately with staggered children
      case "sheenHover":
        return "relative bg-gradient-to-r from-[#2d2d2d] via-[#d4c4b0] to-[#2d2d2d] bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-300 tracking-[0.08em]"
      case "float":
        return "animate-arome-float tracking-[0.08em]"
      default:
        return "animate-arome-kerning tracking-[0.08em]"
    }
  }

  // For cascade variant, render letters individually
  if (variant === "cascade") {
    const letters = ["A", "R", "Ô", "M", "E"]
    return (
      <h1 className={`${baseStyles} ${className}`} aria-label="AROM – 향으로 감정을 전하는 퍼퓸 하우스">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block animate-arome-cascade"
            style={{
              animationDelay: `${index * 0.06}s`,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    )
  }

  // For sheenHover variant, add hover effect
  if (variant === "sheenHover") {
    return (
      <h1
        className={`${baseStyles} ${getVariantStyles()} ${className}`}
        aria-label="AROM – 향으로 감정을 전하는 퍼퓸 하우스"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundPosition: isHovered ? "200% center" : "-200% center",
          transition: "background-position 1.2s ease-out",
        }}
      >
        AROM
      </h1>
    )
  }

  // Default rendering for other variants
  return (
    <h1
      className={`${baseStyles} ${getVariantStyles()} ${className}`}
      aria-label="AROM – 향으로 감정을 전하는 퍼퓸 하우스"
    >
      AROM
    </h1>
  )
}
