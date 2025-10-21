"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/service-banner.png"
          alt="Services - AnikeBrands"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Color Overlay - Darkened */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/92 to-background/95" />
      <div className="absolute inset-0 bg-muted/40" />
      
      {/* Content */}
      <div className="relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Design Services</span>
              <br />
              <span className="text-foreground">That Drive Results</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From brand identity to web design, I offer comprehensive design solutions 
              that help your business stand out and connect with your audience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">Custom Design Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">Fast Turnaround Times</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">Unlimited Revisions</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View My Work
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  )
}
