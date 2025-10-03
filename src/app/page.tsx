import { Layout } from "@/components/layout"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FeaturedWorkSection } from "@/components/sections/featured-work-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <CTASection />
    </Layout>
  )
}