"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Bring Your
            <br />
            <span className="text-gradient">Vision to Life?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Let&apos;s collaborate to create something extraordinary. Whether you need a complete 
            brand identity, stunning print materials, or eye-catching marketing materials, 
            I&apos;m here to help you stand out from the crowd.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Let&apos;s Chat
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gradient">Free</div>
              <div className="text-sm text-muted-foreground">Initial Consultation</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gradient">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
