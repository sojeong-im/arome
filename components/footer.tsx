"use client"

import { Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="headline-tertiary text-2xl mb-4">ARÔME</h3>
            <p className="body-secondary text-muted-foreground">
              <span className="whitespace-nowrap">꽃과 향으로</span> 감정을 전하는{" "}
              <span className="whitespace-nowrap">퍼퓸 하우스</span>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="label-luxury mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/events"
                  className="body-secondary text-muted-foreground hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="body-secondary text-muted-foreground hover:text-primary transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="body-secondary text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="body-secondary text-muted-foreground hover:text-primary transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="label-luxury mb-4">Follow Us</h4>
            <a
              href="https://instagram.com/_arome_perfume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 body-secondary text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>@_arome_perfume</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="body-small text-muted-foreground">&copy; {currentYear} ARÔME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
