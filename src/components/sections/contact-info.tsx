"use client"

import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  CheckCircle,
  Linkedin,
  Instagram,
  Twitter
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { companyInfo } from "@/data/company-info"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email and we'll respond within 24 hours",
    value: companyInfo.email.primary,
    action: `mailto:${companyInfo.email.primary}`
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for urgent projects or detailed discussions",
    value: companyInfo.phone.formatted,
    action: `tel:${companyInfo.phone.number}`
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Message us on WhatsApp for quick responses",
    value: companyInfo.phone.formatted,
    action: `https://wa.me/${companyInfo.phone.whatsapp}`
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in Nigeria, serving clients worldwide",
    value: companyInfo.location.country,
    action: "#"
  }
]

const socialLinks = [
  { name: "LinkedIn", href: companyInfo.social.linkedin, icon: Linkedin },
  { name: "Instagram", href: companyInfo.social.instagram, icon: Instagram },
  { name: "Twitter", href: companyInfo.social.twitter, icon: Twitter },
  { name: "TikTok", href: companyInfo.social.tiktok, icon: MessageCircle }
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
        <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <social.icon className="h-5 w-5" />
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

    </motion.div>
  )
}
