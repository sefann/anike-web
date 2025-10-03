"use client"

import { motion } from "framer-motion"
import { 
  Palette, 
  FileText, 
  Smartphone, 
  Camera, 
  PenTool,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "brand-identity",
    icon: Palette,
    title: "Brand Identity Design",
    description: "Complete brand identity packages including logo design, color palette, typography, and comprehensive brand guidelines.",
    features: [
      "Logo Design (3 concepts)",
      "Brand Guidelines Document",
      "Color Palette & Typography",
      "Business Card Design",
      "Letterhead & Envelope Design",
      "Social Media Templates"
    ],
    startingPrice: "$1,500",
    timeline: "2-3 weeks"
  },
  {
    id: "print-design",
    icon: FileText,
    title: "Print Design",
    description: "Professional print materials including business cards, brochures, posters, and marketing collateral.",
    features: [
      "Business Cards",
      "Brochures & Flyers",
      "Posters & Banners",
      "Marketing Materials",
      "Packaging Design",
      "Print-Ready Files"
    ],
    startingPrice: "$800",
    timeline: "1-2 weeks"
  },
  {
    id: "mobile-design",
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Mobile-first design for iOS and Android apps with intuitive user interfaces and seamless user experience.",
    features: [
      "Mobile UI Design",
      "App Icon Design",
      "User Flow Design",
      "Prototyping",
      "Design System",
      "App Store Graphics"
    ],
    startingPrice: "$3,000",
    timeline: "4-5 weeks"
  },
  {
    id: "photography",
    icon: Camera,
    title: "Photography Services",
    description: "Professional photography for products, portraits, events, and marketing imagery with post-processing.",
    features: [
      "Product Photography",
      "Portrait Sessions",
      "Event Photography",
      "Marketing Images",
      "Photo Editing",
      "High-Resolution Files"
    ],
    startingPrice: "$500",
    timeline: "1 week"
  },
  {
    id: "illustration",
    icon: PenTool,
    title: "Custom Illustration",
    description: "Custom illustrations, icons, and graphics that bring your ideas to life with artistic flair and creativity.",
    features: [
      "Custom Illustrations",
      "Icon Design",
      "Vector Graphics",
      "Digital Art",
      "Character Design",
      "Multiple Formats"
    ],
    startingPrice: "$300",
    timeline: "1-2 weeks"
  }
]

export function ServicesGrid() {
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
            <span className="text-gradient">What I Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design services tailored to your needs, from concept to completion, 
            with a focus on quality, creativity, and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gradient">{service.startingPrice}</span>
                    <span className="text-sm text-muted-foreground ml-1">starting</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {service.timeline}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="w-full" variant="outline">
                <Link href={`/contact?service=${service.id}`}>
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
          <p className="text-muted-foreground mb-4">
            Need a custom solution? I&apos;m here to help with any design challenge.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Discuss Your Project
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
