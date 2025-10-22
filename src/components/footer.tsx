"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  MessageCircle
} from "lucide-react"
import { companyInfo } from "@/data/company-info"

const socialLinks = [
  { name: "LinkedIn", href: companyInfo.social.linkedin, icon: Linkedin },
  { name: "Instagram", href: companyInfo.social.instagram, icon: Instagram },
  { name: "TikTok", href: companyInfo.social.tiktok, icon: MessageCircle },
  { name: "Twitter", href: companyInfo.social.twitter, icon: Twitter },
]

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]


const services = [
  { name: "Brand Identity", href: "/services#brand-identity" },
  { name: "Logo Design", href: "/services#logo-design" },
  { name: "Print Design", href: "/services#print-design" },
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex flex-col">
              <Image
                src="/anike logos/AnikeBrands-02.svg"
                alt="AnikeBrands Logo"
                width={1600}
                height={360}
                className="object-contain object-left"
                sizes="1600px"
              />
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs -mt-4">
                Building timeless brands through thoughtful and intentional visual storytelling
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href={`mailto:${companyInfo.email.primary}`}
                className="flex items-center space-x-3 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {companyInfo.email.primary}
                </span>
              </a>
              <a 
                href={`tel:${companyInfo.phone.number}`}
                className="flex items-center space-x-3 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {companyInfo.phone.formatted}
                </span>
              </a>
              <a 
                href={`https://wa.me/${companyInfo.phone.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  WhatsApp: {companyInfo.phone.formatted}
                </span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {companyInfo.location.country}
                </span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mb-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Follow Me
              </motion.button>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} AnikeBrands. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <a
                href="https://www.linkedin.com/in/stephen-iortyer-5b602b140/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Built by SefxSolutions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
