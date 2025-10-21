"use client"

import { motion } from "framer-motion"
import { 
  Palette, 
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
    title: "Brand Identity Design & Strategy",
    description: "Building cohesive, strategic, and timeless brand systems that truly represent your vision.",
    features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"]
  },
  {
    icon: FileText,
    title: "Visual Communication & Collateral Design",
    description: "Designing high-impact pitch decks, magazines, brochures, and print materials that speak with elegance and intention.",
    features: ["Pitch Decks", "Magazines", "Brochures", "Print Materials"]
  },
  {
    icon: PenTool,
    title: "Brand Strategy & Positioning",
    description: "Helping brands find and own their unique voice in the marketplace.",
    features: ["Brand Voice", "Market Positioning", "Strategic Planning", "Brand Messaging"]
  },
  {
    icon: Smartphone,
    title: "Motion & Digital Design",
    description: "Translating brand stories into dynamic, captivating visuals that engage and inspire.",
    features: ["Motion Graphics", "Digital Assets", "Video Design", "Animations"]
  },
  {
    icon: Camera,
    title: "Social Media Design & Strategy",
    description: "Shaping visual narratives that enhance your brand presence and community engagement.",
    features: ["Social Graphics", "Content Strategy", "Brand Consistency", "Community Engagement"]
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "url('/assets/featured.png')",
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
            <span className="text-gradient">Creative Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a full suite of design and brand communication services, tailored to help 
            businesses tell their stories beautifully and strategically.
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
