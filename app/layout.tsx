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
  title: "AROM | 감정을 기록하는 퍼퓸 하우스",
  description: "AROM는 당신의 소중한 감정과 기억을 꽃말과 향기로 기록합니다. 성수동 시향실에서 당신만의 향을 발견하거나, 마음을 전하는 이벤트에 참여해 보세요.",
  keywords: ["AROM", "아롬", "성수동 향수", "향수 브랜드", "꽃말 향수", "기억의 시향실", "퍼퓸 하우스"],
  openGraph: {
    title: "AROM | 감정을 기록하는 퍼퓸 하우스",
    description: "당신의 소중한 감정을 꽃말과 향기로 기록하는 공간, AROM",
    url: "https://aromeperfume.site",
    siteName: "AROM",
    images: [
      {
        url: "/seongsu-scent-exhibition-main.png",
        width: 1200,
        height: 630,
        alt: "AROM Exhibition",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AROM | 감정을 기록하는 퍼퓸 하우스",
    description: "당신의 소중한 감정을 꽃말과 향기로 기록하는 공간, AROM",
    images: ["/seongsu-scent-exhibition-main.png"],
  },
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
