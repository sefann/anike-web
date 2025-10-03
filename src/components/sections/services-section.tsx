"use client"

import { motion } from "framer-motion"
import { 
  Palette, 
  Monitor, 
  FileText, 
  Smartphone, 
  Camera, 
  PenTool 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"]
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Modern, responsive web design that converts visitors into customers with stunning visuals.",
    features: ["UI/UX Design", "Responsive Layout", "User Experience", "Prototyping"]
  },
  {
    icon: FileText,
    title: "Print Design",
    description: "Professional print materials including business cards, brochures, posters, and marketing materials.",
    features: ["Business Cards", "Brochures", "Posters", "Marketing Materials"]
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Mobile-first design approach for apps and mobile websites with intuitive user interfaces.",
    features: ["App Design", "Mobile UI", "User Interface", "Mobile UX"]
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services for product shots, portraits, and marketing imagery.",
    features: ["Product Photography", "Portraits", "Event Photography", "Marketing Images"]
  },
  {
    icon: PenTool,
    title: "Illustration",
    description: "Custom illustrations and graphics that bring your ideas to life with artistic flair.",
    features: ["Custom Illustrations", "Digital Art", "Vector Graphics", "Icon Design"]
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Creative Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of design services to help your brand stand out 
            and make a lasting impression on your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
