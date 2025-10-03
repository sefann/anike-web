"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactHero() {
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
              <span className="text-gradient">Let&apos;s Work Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I&apos;d love to hear about your project 
              and discuss how we can create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
          >
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm">hello@anikebrands.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">24h Response Time</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm">Free Consultation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              <Link href="#contact-form">
                Start Your Project
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                View My Work
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
