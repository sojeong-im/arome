import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_KR } from "next/font/google"
import "./globals.css"

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-kr",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "ARÔME — 향으로 감정을 전하는 퍼퓸 하우스",
  description: "감성적인 플로럴 퍼퓸 브랜드 ARÔME. 꽃과 향수로 전하는 특별한 이벤트와 제품을 만나보세요.",
  verification: {
    other: {
      "naver-site-verification": "70af4d50c775c12b9bc08448be0a1736f4fb3d5f",
    },
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSerifKR.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard-dynamic-subset.css"
        />
      </head>
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  )
}
