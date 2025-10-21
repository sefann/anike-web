import { Layout } from "@/components/layout"
import { ProjectsHero } from "@/components/sections/projects-hero"
import { BrandProjectsGrid } from "@/components/sections/brand-projects-grid"

export const metadata = {
  title: "Projects - AnikeBrands",
  description: "Explore our brand identity projects. See how we've helped businesses create strategic, timeless brand systems that truly represent their vision.",
}

export default function ProjectsPage() {
  return (
    <Layout>
      <ProjectsHero />
      <BrandProjectsGrid />
    </Layout>
  )
}

