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
    title: "Brand Identity Design & Strategy",
    description: "Building cohesive, strategic, and timeless brand systems that truly represent your vision and values.",
    features: [
      "Logo Design",
      "Comprehensive Brand Guidelines",
      "Color Systems & Typography",
      "Brand Strategy",
      "Visual Identity System",
      "Brand Positioning"
    ],
    startingPrice: "Contact",
    timeline: "2-4 weeks"
  },
  {
    id: "visual-communication",
    icon: FileText,
    title: "Visual Communication & Collateral Design",
    description: "Designing high-impact pitch decks, magazines, brochures, and print materials that speak with elegance and intention.",
    features: [
      "Pitch Decks",
      "Magazines & Publications",
      "Brochures & Flyers",
      "Print Materials",
      "Marketing Collateral",
      "Print-Ready Files"
    ],
    startingPrice: "Contact",
    timeline: "1-3 weeks"
  },
  {
    id: "brand-strategy",
    icon: PenTool,
    title: "Brand Strategy & Positioning",
    description: "Helping brands find and own their unique voice in the marketplace through strategic planning.",
    features: [
      "Brand Voice Development",
      "Market Positioning",
      "Strategic Planning",
      "Brand Messaging",
      "Audience Analysis",
      "Competitive Analysis"
    ],
    startingPrice: "Contact",
    timeline: "2-3 weeks"
  },
  {
    id: "motion-design",
    icon: Smartphone,
    title: "Motion & Digital Design",
    description: "Translating brand stories into dynamic, captivating visuals that engage and inspire your audience.",
    features: [
      "Motion Graphics",
      "Digital Assets",
      "Video Design",
      "Animations",
      "Social Media Content",
      "Dynamic Visuals"
    ],
    startingPrice: "Contact",
    timeline: "2-4 weeks"
  },
  {
    id: "social-media",
    icon: Camera,
    title: "Social Media Design & Strategy",
    description: "Shaping visual narratives that enhance your brand presence and community engagement across platforms.",
    features: [
      "Social Media Graphics",
      "Content Strategy",
      "Brand Consistency",
      "Community Engagement",
      "Platform Optimization",
      "Visual Storytelling"
    ],
    startingPrice: "Contact",
    timeline: "Ongoing"
  },
  {
    id: "event-branding",
    icon: PenTool,
    title: "Event & Experiential Branding",
    description: "Designing cohesive, memorable brand experiences across events and touchpoints.",
    features: [
      "Event Branding",
      "Signage Design",
      "Event Collateral",
      "Experiential Design",
      "Brand Activation",
      "Event Materials"
    ],
    startingPrice: "Contact",
    timeline: "3-5 weeks"
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
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A full suite of design and brand communication services, tailored to help 
            businesses tell their stories beautifully and strategically.
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
            Need a custom solution? We&apos;re here to help with any design challenge.
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
