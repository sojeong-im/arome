import { MetadataRoute } from 'next'
import { products, events } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aromeperfume.site'

  // Product pages
  const productUrls = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Event pages (if they exist as separate routes)
  // Currently events seem to be handled in /events
  const eventUrls = [
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ]

  // Main pages
  const routes = ['', '/shop', '/about', '/cart', '/my-page'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.6,
  }))

  return [...routes, ...productUrls, ...eventUrls]
}
