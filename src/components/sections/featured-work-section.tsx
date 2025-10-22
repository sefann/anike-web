"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredProjects = [
  {
    id: "creamy-crumbles",
    title: "Creamy Crumbles",
    category: "Confectionary",
    description: "Brand identity for one of Lagos State's foremost luxury cake brands, specializing in luxurious wedding cakes and children's birthday cakes.",
    image: "/Brand identities/CREAMY CRUMBLES- 2025/CCRUMBLES-01.png",
    tags: ["Logo Design", "Brand Identity", "Confectionary"],
    link: "/projects/creamy-crumbles"
  },
  {
    id: "jri",
    title: "Justice Research Institute",
    category: "Justice",
    description: "Brand identity for a public-private think tank dedicated to strengthening governance and advancing legal reforms across Nigeria and West Africa.",
    image: "/Brand identities/JRI - 2025/JRI-01.png",
    tags: ["Brand Refresh", "Visual Identity", "Justice"],
    link: "/projects/jri"
  },
  {
    id: "mc-obed",
    title: "MC Obed",
    category: "Entertainment",
    description: "Brand identity for a Master of Ceremonies that delivers lively and professional hosting experiences across all kinds of events.",
    image: "/Brand identities/MC OBED - 2024/mc obed1.png",
    tags: ["Logo Design", "Entertainment", "MC"],
    link: "/projects/mc-obed"
  }
]

export function FeaturedWorkSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "url('/assets/genback.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-background/95" />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent projects that showcase creativity, 
            attention to detail, and innovative design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href="/projects"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
