"use client"

import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/about-banner.png"
          alt="About AnikeBrands"
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
              <span className="text-gradient">About</span>
              <br />
              <span className="text-foreground">AnikeBrands</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              &ldquo;Anike,&rdquo; a Yoruba name meaning &ldquo;to care for&rdquo; is the heart of everything we do. 
              We create identities that tell stories, connect emotionally, and inspire action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              <Link href="/projects/anikebrands-portfolio.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Portfolio
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  )
}
