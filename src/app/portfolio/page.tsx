import { Layout } from "@/components/layout"
import { PortfolioHero } from "@/components/sections/portfolio-hero"
import { PortfolioGrid } from "@/components/sections/portfolio-grid"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Portfolio - AnikeBrands",
  description: "Explore my portfolio of creative design projects including brand identity, web design, print design, and more. See how I bring ideas to life through design.",
}

export default function PortfolioPage() {
  return (
    <Layout>
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </Layout>
  )
}
