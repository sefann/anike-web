"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Project } from "@/data/projects-data"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle keyboard events
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Don't render if no project or modal is closed
  if (!project || !isOpen) {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background border border-border rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="text-muted-foreground">{project.sector} • {project.country} • {project.year}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="p-6 space-y-8">
                  {/* Project Overview */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Project Brief</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.brief}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Our Approach</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">The Result</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.result}</p>
                      </div>
                    </div>
                    
                    {/* Project Details Sidebar */}
                    <div className="space-y-6">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Project Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Client:</span>
                            <span>{project.client}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sector:</span>
                            <span>{project.sector}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Location:</span>
                            <span>{project.country}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Year:</span>
                            <span>{project.year}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Scope:</span>
                            <span>{project.scope}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Logo Preview */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Logo</h4>
                        <div className="flex items-center justify-center bg-white rounded-lg p-4">
                          <Image
                            src={project.logo}
                            alt={`${project.title} Logo`}
                            width={120}
                            height={120}
                            className="object-contain"
                            onError={(e) => {
                              console.warn(`Failed to load logo: ${project.logo}`)
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative overflow-hidden rounded-lg bg-muted/50"
                        >
                          <div className="aspect-square relative">
                            <Image
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              onError={(e) => {
                                console.warn(`Failed to load image: ${image}`)
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
