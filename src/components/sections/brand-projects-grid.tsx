"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink, Calendar, MapPin, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { projects } from "@/data/projects-data"

export function BrandProjectsGrid() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleExpanded = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "url('/assets/genback.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-background/95" />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Brand Identity Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive brand identity projects. Each project tells a unique story of transformation, strategy, and creative excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Project Card Header */}
              <div className="p-6">
                {/* Logo Placeholder */}
                <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                
                {/* Project Meta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{project.country}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Brief Description */}
                <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Sector Badge */}
                <div className="flex justify-center mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.sector}
                  </span>
                </div>

                {/* Expand Button */}
                <Button
                  onClick={() => toggleExpanded(project.id)}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  {expandedProject === project.id ? (
                    <>
                      <ChevronUp className="mr-2 h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2 h-4 w-4" />
                      Read More
                    </>
                  )}
                </Button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border"
                  >
                    <div className="p-6 space-y-6">
                      {/* Project Details */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-primary">Project Brief</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.brief}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-primary">Our Approach</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.approach}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-primary">The Result</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.result}
                          </p>
                        </div>
                      </div>

                      {/* Project Images */}
                      <div>
                        <h4 className="font-semibold mb-4 text-primary">Project Gallery</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {project.images.slice(0, 4).map((image, imgIndex) => (
                            <div key={imgIndex} className="aspect-square relative rounded-lg overflow-hidden bg-muted/50">
                              <Image
                                src={image}
                                alt={`${project.title} - Image ${imgIndex + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                            </div>
                          ))}
                        </div>
                        {project.images.length > 4 && (
                          <p className="text-xs text-muted-foreground mt-2 text-center">
                            +{project.images.length - 4} more images
                          </p>
                        )}
                      </div>

                      {/* Scope of Work */}
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Scope of Work</h4>
                        <p className="text-sm text-muted-foreground">{project.scope}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Brand Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Sectors Covered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

