"use client"

import { motion } from "framer-motion"
import { Check, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Starter",
    price: "$100",
    description: "Perfect for small projects and startups",
    features: [
      "Logo Design (2 concepts)",
      "Business Card Design",
      "Logo Identity Presentation",
      "2 Revisions",
      "Source Files",
      "2-3 Weeks Delivery"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$250",
    description: "Ideal for growing businesses",
    features: [
      "Complete Brand Identity",
      "Logo Design (3 concepts)",
      "Comprehensive Brand Guidelines",
      "Business Card & Letterhead",
      "Social Media Templates",
      "5 Revisions",
      "3-4 Weeks Delivery",
      "Priority Support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$500",
    description: "For established companies and agencies",
    features: [
      "Full Brand Identity Package",
      "Logo Design (5 concepts)",
      "Complete Brand Guidelines",
      "All Print Materials",
      "Web Design Mockups",
      "Unlimited Revisions",
      "4-8 Weeks Delivery",
      "Dedicated Project Manager",
      "Ongoing Support"
    ],
    popular: false,
    custom: false
  }
]

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that best fits 
            your needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative bg-background border rounded-lg p-8 hover:shadow-lg transition-all duration-300 ${
                plan.popular 
                  ? "border-primary shadow-lg scale-105" 
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gradient mb-2">{plan.price}</div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild 
                className={`w-full ${
                  plan.popular 
                    ? "bg-gradient-primary hover:opacity-90 text-white" 
                    : "bg-background border border-border hover:bg-muted"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href={`/contact?plan=${plan.name.toLowerCase()}`}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-muted/50 border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Need a Custom Solution?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Every project is unique. Contact me for a personalized quote tailored to your specific needs.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
