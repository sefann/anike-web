"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects-data"

// Projects are now imported from data file

export function ProjectsGrid() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                  expandedId === project.id ? "md:col-span-2" : ""
                }`}
              >
                {/* Card Header - Always Visible */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{project.tagline}</p>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.briefDescription}
                  </p>

                  {/* Expand Button */}
                  <Button
                    onClick={() => toggleExpand(project.id)}
                    variant="ghost"
                    className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10"
                  >
                    <span>{expandedId === project.id ? "Show Less" : "View Full Project"}</span>
                    {expandedId === project.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="p-6 bg-muted/30">
                        {/* Full Description */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Project Overview</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>

                        {/* Services */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Services Provided</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.services.map((service) => (
                              <span
                                key={service}
                                className="px-3 py-1 bg-background border border-border rounded-full text-sm"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Images */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Brand Materials</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.images.map((image) => (
                              <div
                                key={image.id}
                                className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-border overflow-hidden"
                              >
                                <div className="text-center text-muted-foreground p-4">
                                  <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-2 flex items-center justify-center">
                                    <ExternalLink className="h-6 w-6 text-white" />
                                  </div>
                                  <p className="text-xs font-medium">{image.title}</p>
                                  <p className="text-xs mt-1 capitalize">{image.type}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

