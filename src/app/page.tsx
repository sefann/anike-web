import { Layout } from "@/components/layout"
import { HeroSection } from "@/components/sections/hero-section"
import { BrandsSlider } from "@/components/sections/brands-slider"
import { ServicesSection } from "@/components/sections/services-section"
import { FeaturedWorkSection } from "@/components/sections/featured-work-section"
import { HomeTestimonialsSlider } from "@/components/sections/home-testimonials-slider"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <BrandsSlider />
      <ServicesSection />
      <FeaturedWorkSection />
      <HomeTestimonialsSlider />
      <CTASection />
    </Layout>
  )
}