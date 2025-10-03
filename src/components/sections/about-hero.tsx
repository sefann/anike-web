"use client"

import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="pt-20 pb-16 bg-muted/30">
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
              Passionate about creating visual experiences that tell stories, 
              build connections, and drive results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              <Link href="/portfolio/anikebrands-portfolio.pdf" download>
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
    </section>
  )
}
