import { Layout } from "@/components/layout"
import { AboutHero } from "@/components/sections/about-hero"
import { AboutBio } from "@/components/sections/about-bio"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { DownloadSection } from "@/components/sections/download-section"

export const metadata = {
  title: "About - AnikeBrands",
  description: "Learn more about AnikeBrands, a creative graphics designer with 5+ years of experience in branding, web design, and visual communication.",
}

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutBio />
      <SkillsSection />
      <ExperienceSection />
      <DownloadSection />
    </Layout>
  )
}
