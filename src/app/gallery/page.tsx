import { Layout } from "@/components/layout"
import { GalleryHero } from "@/components/sections/gallery-hero"
import { GalleryGrid } from "@/components/sections/gallery-grid"

export const metadata = {
  title: "Gallery - AnikeBrands",
  description: "Explore our gallery of creative design work including brand identities, flyers, social media posts, and visual communications. See the Anike Brands design portfolio.",
}

export default function GalleryPage() {
  return (
    <Layout>
      <GalleryHero />
      <GalleryGrid />
    </Layout>
  )
}


