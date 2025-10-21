"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

    const certifications = [
      {
        title: "Foundations of Project Management",
        focus: "Coursera",
        period: "April 2023",
        description: "Comprehensive project management fundamentals covering planning, execution, and team leadership.",
        achievements: [
          "Mastered project planning methodologies",
          "Developed leadership and team management skills",
          "Learned risk assessment and mitigation strategies"
        ]
      },
      {
        title: "Intro to Analytic Thinking, Data Science, and Data Mining",
        focus: "Coursera",
        period: "July 2021",
        description: "Advanced data analysis and mining techniques for business intelligence and decision making.",
        achievements: [
          "Gained expertise in data analysis fundamentals",
          "Learned data mining techniques and tools",
          "Developed analytical thinking skills"
        ]
      },
      {
        title: "Big Data and Language 1",
        focus: "Coursera",
        period: "June 2021",
        description: "Introduction to big data processing and natural language processing technologies.",
        achievements: [
          "Understanding of big data technologies",
          "Natural language processing fundamentals",
          "Data processing and analysis skills"
        ]
      },
      {
        title: "Crash Course on Python",
        focus: "Coursera",
        period: "December 2020",
        description: "Comprehensive Python programming course covering fundamentals to advanced concepts.",
        achievements: [
          "Mastered Python programming fundamentals",
          "Learned advanced Python concepts",
          "Developed problem-solving with Python"
        ]
      },
      {
        title: "Data Analysis Masterclass (4 courses in 1)",
        focus: "Coursera",
        period: "2020",
        description: "Comprehensive data analysis training covering multiple analytical techniques and tools.",
        achievements: [
          "Advanced data analysis techniques",
          "Multiple analytical tool proficiency",
          "Comprehensive data science skills"
        ]
      },
      {
        title: "Deestincts Creative Bootcamp",
        focus: "Brand Identity Design",
        period: "2023",
        description: "Comprehensive training in brand identity design principles, logo creation, and visual identity systems.",
        achievements: [
          "Mastered brand identity design fundamentals",
          "Developed strategic approach to visual branding",
          "Built portfolio of brand identity projects"
        ]
      },
      {
        title: "Synthera Fellowship Cohort 1",
        focus: "Brand Design and Innovation",
        period: "2024",
        description: "Advanced fellowship program focused on innovative brand design strategies and contemporary design thinking.",
        achievements: [
          "Explored cutting-edge brand design methodologies",
          "Collaborated with industry professionals",
          "Enhanced strategic brand positioning skills"
        ]
      },
      {
        title: "Bizmarrow Technologies",
        focus: "Motion Design Bootcamp",
        period: "2025",
        description: "Specialized training in motion graphics and dynamic visual content creation for digital platforms.",
        achievements: [
          "Gained expertise in motion design principles",
          "Learned industry-standard animation tools",
          "Expanded capabilities in digital storytelling"
        ]
      }
    ]

const education = [
  {
    degree: "Bachelor of Arts in Linguistics",
    school: "University of Abuja",
    location: "Abuja, Nigeria",
    period: "Completed",
    description: "B.A. in Linguistics - providing deep understanding of communication, language structure, and cultural context that informs brand messaging and visual communication strategies."
  }
]

export function ExperienceSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-gradient">Experience & Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over the years, we have improved on our skills through professional training and 
            hands-on experience, building expertise in brand design and visual communication.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Professional Certifications */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 flex items-center"
            >
              <Building className="h-6 w-6 text-primary mr-3" />
              Professional Certifications & Training
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background border border-border rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-3">
                    <div>
                      <h4 className="text-base font-semibold mb-1">{cert.title}</h4>
                      <p className="text-primary font-medium mb-2 text-sm">{cert.focus}</p>
                      <p className="text-muted-foreground text-xs mb-3">{cert.description}</p>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      {cert.period}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-xs font-medium mb-2">Key Learnings:</h5>
                    <ul className="space-y-1">
                      {cert.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 flex items-center"
            >
              <Calendar className="h-6 w-6 text-primary mr-3" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background border border-border rounded-lg p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-2">{edu.school}</p>
                      <p className="text-muted-foreground text-sm">{edu.description}</p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 mt-4 md:mt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
