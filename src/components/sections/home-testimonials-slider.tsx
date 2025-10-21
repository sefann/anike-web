"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { companyInfo } from "@/data/company-info"

const testimonials = companyInfo.testimonials

export function HomeTestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/testimonial-background.png"
          alt="Testimonials Background"
          fill
          quality={80}
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/92 to-background/95" />
      <div className="absolute inset-0 bg-muted/40" />
      
      {/* Content */}
      <div className="relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-sm text-primary font-medium mb-2 uppercase tracking-wide">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What the brands say about
            <br />
            <span className="text-gradient">AnikeBrands</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-background border border-border rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base sm:text-lg text-foreground leading-relaxed mb-6 min-h-[140px] sm:min-h-[120px]">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3">
                    {/* Client Image */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-muted">
                        <Image
                          src={testimonials[currentIndex].image || "/api/placeholder/80/80"}
                          alt={testimonials[currentIndex].name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Client Details */}
                    <div>
                      <div className="font-semibold text-base">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-xs text-primary font-medium">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator Only */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-primary"
                    : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-sm mx-auto">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-gradient-primary"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

