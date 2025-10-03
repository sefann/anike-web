import { Layout } from "@/components/layout"
import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { ProcessSection } from "@/components/sections/process-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Services - AnikeBrands",
  description: "Professional graphics design services including brand identity, web design, print design, and more. Get custom design solutions for your business.",
}

export default function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </Layout>
  )
}
