"use client"

import { motion } from "framer-motion"
// Removed unused imports
import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/contact-banner.png"
          alt="Contact - AnikeBrands"
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
              <span className="text-gradient">Let&apos;s Work Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I&apos;d love to hear about your project 
              and discuss how we can create something amazing together.
            </p>
          </motion.div>

        </div>
      </div>
      </div>
    </section>
  )
}
