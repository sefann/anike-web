"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import Image from "next/image"

export function GalleryHero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/gallery-banner.png"
          alt="Gallery - AnikeBrands"
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
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Design Showcase</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Gallery</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A visual collection of our creative work - from brand identities and logos 
              to flyers, social media posts, and print designs. Every piece tells a story.
            </p>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  )
}

