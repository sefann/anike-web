"use client"

import { motion } from "framer-motion"
import { Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioHero() {
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
              <span className="text-gradient">My Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of my best work showcasing creativity, attention to detail, 
              and innovative design solutions across various industries and mediums.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Brand Identity", "Web Design", "Print Design", "Mobile Design"].map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-gradient-primary text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center space-x-4"
          >
            <Button variant="outline" size="sm">
              <Grid className="h-4 w-4 mr-2" />
              Grid View
            </Button>
            <Button variant="ghost" size="sm">
              <List className="h-4 w-4 mr-2" />
              List View
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
