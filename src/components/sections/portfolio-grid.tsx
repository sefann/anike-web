"use client"

import { motion } from "framer-motion"
import { ExternalLink, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const portfolioItems = [
  {
    id: 1,
    title: "EcoTech Brand Identity",
    category: "Brand Identity",
    description: "Complete brand identity design for a sustainable technology startup, including logo, color palette, and brand guidelines.",
    image: "/api/placeholder/600/400",
    tags: ["Logo Design", "Brand Guidelines", "Color Palette"],
    link: "/projects/ecotech-brand",
    featured: true
  },
  {
    id: 2,
    title: "Fashion Brand Campaign",
    category: "Print Design",
    description: "Complete print campaign design for a fashion brand including posters, flyers, and marketing materials.",
    image: "/api/placeholder/600/400",
    tags: ["Print Design", "Campaign", "Marketing"],
    link: "/projects/fashion-campaign",
    featured: true
  },
  {
    id: 3,
    title: "Restaurant Menu Design",
    category: "Print Design",
    description: "Elegant menu design for a fine dining restaurant with custom illustrations and typography.",
    image: "/api/placeholder/600/400",
    tags: ["Print Design", "Typography", "Illustration"],
    link: "/projects/restaurant-menu",
    featured: false
  },
  {
    id: 4,
    title: "Fitness App Design",
    category: "Mobile Design",
    description: "Mobile app design for a fitness tracking application with intuitive user interface and engaging visuals.",
    image: "/api/placeholder/600/400",
    tags: ["Mobile UI", "App Design", "User Experience"],
    link: "/projects/fitness-app",
    featured: true
  },
  {
    id: 5,
    title: "Coffee Shop Branding",
    category: "Brand Identity",
    description: "Complete branding package for a local coffee shop including logo, packaging, and marketing materials.",
    image: "/api/placeholder/600/400",
    tags: ["Branding", "Packaging", "Marketing"],
    link: "/projects/coffee-shop",
    featured: false
  },
  {
    id: 6,
    title: "Tech Startup Branding",
    category: "Brand Identity",
    description: "Complete brand identity design for a technology startup with modern aesthetics and clear messaging.",
    image: "/api/placeholder/600/400",
    tags: ["Corporate", "Branding", "Technology"],
    link: "/projects/tech-startup",
    featured: false
  },
  {
    id: 7,
    title: "Book Cover Design",
    category: "Print Design",
    description: "Book cover design for a fantasy novel with custom illustration and typography.",
    image: "/api/placeholder/600/400",
    tags: ["Book Design", "Illustration", "Typography"],
    link: "/projects/book-cover",
    featured: false
  },
  {
    id: 8,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description: "Social media campaign design with consistent branding across multiple platforms.",
    image: "/api/placeholder/600/400",
    tags: ["Social Media", "Campaign", "Branding"],
    link: "/projects/social-campaign",
    featured: false
  },
  {
    id: 9,
    title: "Product Photography",
    category: "Photography",
    description: "Professional product photography for an e-commerce brand with clean, modern aesthetics.",
    image: "/api/placeholder/600/400",
    tags: ["Photography", "Product", "E-commerce"],
    link: "/projects/product-photography",
    featured: false
  }
]

export function PortfolioGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ${
                item.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <div className={`bg-muted/50 flex items-center justify-center ${
                  item.featured ? "aspect-[2/1]" : "aspect-[4/3]"
                }`}>
                  <div className="text-muted-foreground text-sm">Project Image</div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button asChild size="sm" variant="secondary">
                    <Link href={item.link}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Project
                    </Link>
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Heart className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary font-medium">{item.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>2024</span>
                  </div>
                </div>
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
          <p className="text-muted-foreground mb-4">
            Want to see more of my work? Check out my complete portfolio or get in touch for a custom project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/about">
                Learn More About Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
