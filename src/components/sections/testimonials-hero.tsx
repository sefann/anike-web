"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function TestimonialsHero() {
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
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Quote className="h-4 w-4" />
              <span>Client Testimonials</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">What Clients Say</span>
              <br />
              <span className="text-foreground">About My Work</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say about 
            working with me and the results we&apos;ve achieved together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-2xl font-bold text-gradient">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
