"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Senior Graphics Designer",
    company: "Creative Studio Pro",
    location: "New York, NY",
    period: "2022 - Present",
    description: "Leading design projects for Fortune 500 companies, managing a team of 3 designers, and developing brand identities that drive business growth.",
    achievements: [
      "Increased client satisfaction by 40% through improved design processes",
      "Led 20+ successful brand identity projects",
      "Mentored junior designers and improved team productivity"
    ]
  },
  {
    title: "Graphics Designer",
    company: "Digital Marketing Agency",
    location: "San Francisco, CA",
    period: "2020 - 2022",
    description: "Created visual content for digital marketing campaigns, designed websites, and developed brand guidelines for startups and small businesses.",
    achievements: [
      "Designed 50+ websites with 95% client satisfaction rate",
      "Developed brand identities for 30+ startups",
      "Improved campaign performance by 25% through better visual design"
    ]
  },
  {
    title: "Junior Designer",
    company: "Local Design Studio",
    location: "Los Angeles, CA",
    period: "2019 - 2020",
    description: "Assisted senior designers with various projects, created print materials, and learned industry best practices.",
    achievements: [
      "Completed 100+ design projects in first year",
      "Specialized in print design and layout",
      "Built strong foundation in design principles"
    ]
  }
]

const education = [
  {
    degree: "Bachelor of Fine Arts in Graphic Design",
    school: "Art Institute of California",
    location: "Los Angeles, CA",
    period: "2015 - 2019",
    description: "Specialized in digital design, branding, and visual communication with focus on user experience design."
  }
]

export function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            My professional journey and educational background that have shaped 
            my expertise in graphics design and visual communication.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Professional Experience */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 flex items-center"
            >
              <Building className="h-6 w-6 text-primary mr-3" />
              Professional Experience
            </motion.h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
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
