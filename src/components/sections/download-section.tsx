"use client"

import { motion } from "framer-motion"
import { Download, FileText, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DownloadSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-gradient">Download My Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a comprehensive overview of my work, skills, and experience in a 
            beautifully designed PDF portfolio that you can share or keep for reference.
          </p>

          <div className="bg-background border border-border rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">AnikeBrands Portfolio 2024</h3>
            <p className="text-muted-foreground text-sm mb-4">
              A comprehensive showcase of my best work, design process, and professional achievements.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center space-x-1">
                <FileText className="h-4 w-4" />
                <span>24 pages</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Updated 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>PDF Format</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white w-full sm:w-auto">
                <Link href="/projects/anikebrands-portfolio.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Portfolio PDF
                </Link>
              </Button>
              
              <div className="text-sm text-muted-foreground">
                <p>Includes: Featured projects, design process, client testimonials, and contact information</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Let&apos;s Discuss Your Project
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/projects">
                View Online Portfolio
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
