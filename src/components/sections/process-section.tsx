"use client"

import { motion } from "framer-motion"
import { MessageCircle, Lightbulb, Palette, CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description: "We start with a detailed discussion about your project goals, target audience, and brand vision.",
    icon: MessageCircle,
    details: [
      "Project brief and requirements",
      "Target audience analysis",
      "Brand positioning discussion",
      "Timeline and budget planning"
    ]
  },
  {
    step: "02",
    title: "Research & Strategy",
    description: "I conduct thorough research and develop a strategic approach tailored to your specific needs.",
    icon: Lightbulb,
    details: [
      "Market and competitor analysis",
      "Design strategy development",
      "Creative direction planning",
      "Technical requirements review"
    ]
  },
  {
    step: "03",
    title: "Design & Creation",
    description: "The creative process begins with concept development, iterations, and refinement.",
    icon: Palette,
    details: [
      "Initial concept development",
      "Design iterations and refinements",
      "Client feedback integration",
      "Final design approval"
    ]
  },
  {
    step: "04",
    title: "Delivery & Support",
    description: "Final deliverables are provided with ongoing support to ensure your success.",
    icon: CheckCircle,
    details: [
      "Final file delivery",
      "Brand guidelines documentation",
      "Implementation support",
      "Post-project consultation"
    ]
  }
]

export function ProcessSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-gradient">My Design Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures every project is delivered on time, 
            on budget, and exceeds expectations.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-primary transform translate-x-4 z-0" />
                )}
                
                <div className="bg-background border border-border rounded-lg p-6 relative z-10 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gradient mb-2">{step.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-background border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
            Let&apos;s discuss your project and create something amazing together. 
            I&apos;m here to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">Free</div>
                <div className="text-sm text-muted-foreground">Initial Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
