"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "EcoTech Solutions",
    text: "AnikeBrands transformed our brand identity completely. The logo design exceeded our expectations, and the brand guidelines were incredibly detailed. Our brand recognition has increased by 40% since the rebrand.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "Fashion Forward",
    text: "The e-commerce website design was outstanding. The user experience is smooth, and the conversion rate has improved by 35%. AnikeBrands understood our vision perfectly and brought it to life.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Bella Vista Restaurant",
    text: "The menu design was elegant and perfectly captured our restaurant's atmosphere. The custom illustrations and typography choices were spot-on. Our customers love the new design.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Product Manager",
    company: "FitLife App",
    text: "The mobile app design was intuitive and engaging. The user interface flows perfectly, and the visual design motivates users to stay active. User engagement has increased by 50%.",
    rating: 5
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselTestimonials.length) % carouselTestimonials.length)
  }

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
            <span className="text-gradient">Featured Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes working with AnikeBrands special through these 
            detailed client experiences and success stories.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-background border border-border rounded-lg p-8 md:p-12 text-center"
            >
              <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
              
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(carouselTestimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                &ldquo;{carouselTestimonials[currentIndex].text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {carouselTestimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">{carouselTestimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {carouselTestimonials[currentIndex].role} at {carouselTestimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {carouselTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
