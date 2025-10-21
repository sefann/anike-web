"use client"

import { motion } from "framer-motion"
import { 
  Palette, 
  PenTool, 
  FileText,
  Smartphone
} from "lucide-react"
import Image from "next/image"

const skillCategories = [
  {
    title: "Design Tools",
    icon: Palette,
    skills: [
      { name: "Adobe Creative Suite", level: 95 },
      { name: "Figma", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "Canva Pro", level: 80 }
    ]
  },
  {
    title: "Brand Identity",
    icon: PenTool,
    skills: [
      { name: "Logo Design", level: 95 },
      { name: "Brand Guidelines", level: 90 },
      { name: "Typography", level: 88 },
      { name: "Color Theory", level: 92 }
    ]
  },
  {
    title: "Product Design",
    icon: Smartphone,
    skills: [
      { name: "UI/UX Design", level: 88 },
      { name: "Web Design", level: 85 },
      { name: "User Interface", level: 87 },
      { name: "Prototyping", level: 82 }
    ]
  },
  {
    title: "Print Design",
    icon: FileText,
    skills: [
      { name: "Layout Design", level: 90 },
      { name: "Print Production", level: 85 },
      { name: "Packaging Design", level: 80 },
      { name: "Marketing Materials", level: 88 }
    ]
  }
]

export function SkillsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/about-banner.png"
          alt="Skills Background"
          fill
          quality={80}
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/92 to-background/95" />
      <div className="absolute inset-0 bg-muted/40" />
      
      {/* Content */}
      <div className="relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills and tools that enable me to deliver 
            exceptional design solutions across various mediums and platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-primary h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Photography", "Video Editing", "Motion Graphics", "3D Design",
              "Illustration", "Icon Design", "Social Media Design", "Presentation Design",
              "Infographic Design", "Book Design", "Packaging", "Typography"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
