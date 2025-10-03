"use client"

import { motion } from "framer-motion"
import { Star, Quote, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "EcoTech Solutions",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "AnikeBrands transformed our brand identity completely. The logo design exceeded our expectations, and the brand guidelines were incredibly detailed. Our brand recognition has increased by 40% since the rebrand.",
    project: "Brand Identity Design",
    link: "/portfolio/ecotech-brand"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "Fashion Forward",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The print campaign design was outstanding. The visual impact is strong, and our brand recognition has improved by 35%. AnikeBrands understood our vision perfectly and brought it to life.",
    project: "Print Campaign",
    link: "/portfolio/fashion-campaign"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Bella Vista Restaurant",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The menu design was elegant and perfectly captured our restaurant's atmosphere. The custom illustrations and typography choices were spot-on. Our customers love the new design.",
    project: "Restaurant Menu Design",
    link: "/portfolio/restaurant-menu"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Product Manager",
    company: "FitLife App",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The mobile app design was intuitive and engaging. The user interface flows perfectly, and the visual design motivates users to stay active. User engagement has increased by 50%.",
    project: "Fitness App Design",
    link: "/portfolio/fitness-app"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Owner",
    company: "Brew & Bean Coffee",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The complete branding package was exactly what we needed. From logo to packaging design, everything was cohesive and professional. Our sales have increased by 25% since the rebrand.",
    project: "Coffee Shop Branding",
    link: "/portfolio/coffee-shop"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "CTO",
    company: "TechStart Inc.",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The corporate branding design was modern and professional. It perfectly represents our company values and has helped us attract more clients. The design process was smooth and collaborative.",
    project: "Corporate Branding",
    link: "/portfolio/tech-startup"
  }
]

export function TestimonialsGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-gradient">Client Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients. See how my design solutions have helped 
            businesses achieve their goals and grow their brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-primary mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Project: {testimonial.project}
                  </span>
                  <Button asChild size="sm" variant="ghost">
                    <a href={testimonial.link}>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
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
          <div className="bg-muted/50 border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Ready to Join These Happy Clients?</h3>
            <p className="text-muted-foreground mb-6">
            Let&apos;s work together to create something amazing for your business. 
            I&apos;m committed to delivering exceptional results that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-white">
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/portfolio">View My Work</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
