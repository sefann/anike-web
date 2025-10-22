"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import Image from "next/image"
import { projects, Project } from "@/data/projects-data"
import { useState } from "react"
import { ProjectModal } from "@/components/project-modal"
import { PlaceholderImage } from "@/components/placeholder-image"

export function BrandProjectsGrid() {
  // Split projects: first 5 are large, rest are small
  const largeProjects = projects.slice(0, 5)
  const smallProjects = projects.slice(5)
  
  // State for image navigation
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({})
  
  // State for modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const getCurrentImageIndex = (projectId: string) => currentImageIndex[projectId] || 0
  
  const nextImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }))
  }
  
  const prevImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
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

        {/* Large Projects */}
        <div className="space-y-16 mb-16">
          {largeProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={project.logo}
                          alt={`${project.title} Logo`}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                        <div>
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <p className="text-primary font-medium">{project.client}</p>
                        </div>
                      </div>

                      {/* Project Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4" />
                          <span>{project.sector}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{project.country}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
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

                    {/* Scope of Work */}
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Scope of Work</h4>
                      <p className="text-sm text-muted-foreground">{project.scope}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Images Grid */}
                <div className="p-8 lg:p-12 bg-muted/30">
                  <h4 className="font-semibold mb-6 text-primary">Project Gallery</h4>
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      {project.images.slice(0, 6).map((image, imgIndex) => {
                        const actualIndex = (getCurrentImageIndex(project.id) + imgIndex) % project.images.length
                        return (
                          <div key={imgIndex} className="aspect-square relative rounded-lg overflow-hidden bg-muted/50 group">
                            <Image
                              src={project.images[actualIndex]}
                              alt={`${project.title} - Image ${actualIndex + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 50vw, 25vw"
                            />
                          </div>
                        )
                      })}
                    </div>
                    
                    {/* Navigation Arrows */}
                    {project.images.length > 6 && (
                      <div className="flex justify-center items-center mt-4 space-x-4">
                        <button
                          onClick={() => prevImage(project.id, project.images.length)}
                          className="p-2 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span className="text-sm text-muted-foreground">
                          {getCurrentImageIndex(project.id) + 1} - {Math.min(getCurrentImageIndex(project.id) + 6, project.images.length)} of {project.images.length}
                        </span>
                        <button
                          onClick={() => nextImage(project.id, project.images.length)}
                          className="p-2 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleProjectClick(project)
              }}
            >
              {/* Project Image */}
              <div className="aspect-video relative">
                <PlaceholderImage
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center space-x-2 text-white">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm font-medium">View Project</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <PlaceholderImage
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                    <span className="text-white text-sm font-medium">{project.client}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{project.sector}</span>
                  <span>{project.year}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{project.country}</span>
                  <div className="flex items-center space-x-1 text-primary group-hover:text-primary/80 transition-colors">
                    <span className="text-xs">View Project</span>
                    <Eye className="h-3 w-3" />
                  </div>
                </div>
              </div>
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

      {/* Project Modal */}
      <ProjectModal
        key={selectedProject?.id || 'modal'}
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

