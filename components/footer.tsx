"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Identity */}
          <div className="md:col-span-2">
            <h3 className="headline-secondary text-4xl mb-8 tracking-[-0.03em]">AROM</h3>
            <p className="body-primary text-text/60 max-w-sm mb-12 font-serif italic italic-luxury">
              "꽃과 향으로 누군가의 기억을 번역합니다. 당신의 가장 찬란한 순간에 AROM이 함께하기를."
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h4 className="label-luxury mb-8 text-olive/80">Collections</h4>
            <ul className="space-y-4">
              {["Floral", "Aromatic", "Oriental"].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/shop?category=${cat.toLowerCase()}`}
                    className="body-secondary text-text/40 hover:text-olive hover:translate-x-1 transition-all inline-block"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="label-luxury mb-8 text-olive/80">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: "About Story", href: "/about" },
                { name: "Seasonal Events", href: "/events" },
                { name: "Scent Kit", href: "/#scent-kit" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="body-secondary text-text/40 hover:text-olive hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-16 border-t border-olive/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-text/30">
            &copy; {currentYear} AROM. Curation for Your Memories.
          </p>
          <div className="flex space-x-10 text-[10px] uppercase tracking-[0.2em] text-text/30">
            <Link href="/privacy" className="hover:text-olive transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-olive transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
