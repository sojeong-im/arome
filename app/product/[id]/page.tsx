import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import { ProductDetail } from "@/components/product-detail"

type Props = { params: { id: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return { title: "Product Not Found | AROM" }
  }

  return {
    title: `${product.name} | AROM`,
    description: `${product.name} (${product.englishName ?? ""}) - ${product.description}. ${product.flowerMeaning}의 의미를 담은 향기.`,
    openGraph: {
      title: `${product.name} | AROM`,
      description: product.description,
      images: [
        {
          url: product.image || "/arome-lifestyle-main.jpg",
          alt: product.name,
        },
      ],
    },
  }
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // JSON-LD for Product Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product!.name,
    image: product!.image ? [`https://aromeperfume.site${product!.image}`] : [],
    description: product!.description,
    sku: product!.id,
    brand: {
      "@type": "Brand",
      name: "AROM",
    },
    offers: {
      "@type": "Offer",
      url: `https://aromeperfume.site/product/${product!.id}`,
      priceCurrency: "KRW",
      price: product!.price,
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <div className="pt-48 pb-32 px-6">
        <div className={`max-w-6xl mx-auto ${!product!.image ? "max-w-3xl" : ""}`}>
          <ProductDetail product={product!} />
        </div>
      </div>

      <Footer />
    </main>
  )
}
