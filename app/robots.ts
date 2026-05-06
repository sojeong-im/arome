import { MetadataRoute } from 'next'

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart', '/my-page'], // User-specific or sensitive pages
    },
    sitemap: 'https://aromeperfume.site/sitemap.xml',
  }
}
