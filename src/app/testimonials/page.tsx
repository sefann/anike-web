import { Layout } from "@/components/layout"
import { TestimonialsHero } from "@/components/sections/testimonials-hero"
import { TestimonialsGrid } from "@/components/sections/testimonials-grid"
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Testimonials - AnikeBrands",
  description: "Read what my clients say about working with AnikeBrands. Discover how I've helped businesses achieve their design goals and grow their brands.",
}

export default function TestimonialsPage() {
  return (
    <Layout>
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsCarousel />
      <CTASection />
    </Layout>
  )
}
