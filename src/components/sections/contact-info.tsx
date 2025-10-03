"use client"

import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send me an email and I'll respond within 24 hours",
    value: "hello@anikebrands.com",
    action: "mailto:hello@anikebrands.com"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call me for urgent projects or detailed discussions",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in New York, serving clients worldwide",
    value: "New York, NY",
    action: "#"
  }
]

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "💼" },
  { name: "Instagram", href: "#", icon: "📸" },
  { name: "Twitter", href: "#", icon: "🐦" },
  { name: "Behance", href: "#", icon: "🎨" }
]

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Brand identity projects typically take 2-3 weeks, while web design projects can take 3-4 weeks."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! All projects include revisions. The number depends on the package you choose, ranging from 2-5 revisions to unlimited revisions for enterprise projects."
  },
  {
    question: "What's included in the initial consultation?",
    answer: "The free consultation includes project discussion, timeline planning, budget estimation, and strategy development. No obligation required."
  }
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <method.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-1">{method.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <a
                  href={method.action}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {method.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <span className="text-lg">{social.icon}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Quick Info */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Quick Info</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Response Time</div>
              <div className="text-sm text-muted-foreground">Within 24 hours</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Availability</div>
              <div className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM EST</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Free Consultation</div>
              <div className="text-sm text-muted-foreground">No obligation required</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 bg-muted/30 rounded-lg"
            >
              <h4 className="font-medium mb-2">{faq.question}</h4>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-primary/10 border border-primary/20 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
        <p className="text-sm text-muted-foreground mb-4">
            Let&apos;s discuss your project and create something amazing together.
        </p>
        <Button asChild className="bg-gradient-primary hover:opacity-90 text-white">
          <Link href="#contact-form">
            <MessageCircle className="mr-2 h-4 w-4" />
            Start Your Project
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
