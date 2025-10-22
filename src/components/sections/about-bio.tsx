"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Target } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Target, value: "100%", label: "Client Satisfaction" }
]

export function AboutBio() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-gradient">My Story</span>
              </h2>
              
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Founded by <strong className="text-foreground">Olamide Fatosin</strong>, a Brand Identity Designer with a 
                  B.A. in Linguistics, Anike Brands is built on a deep understanding of communication, 
                  culture, and design psychology. We don&apos;t just design visuals; we create identities 
                  that tell stories, connect emotionally, and inspire action.
                </p>
                
                <p>
                  We blend the art of design with the science of communication. This unique approach 
                  allows us to create brands that not only look good but speak clearly to the right audience. 
                  Every brand deserves to be nurtured with intention, creativity, and strategy.
                </p>
                
                <p>
                  At Anike Brands, every project is handled with care because your brand deserves more 
                  than just attention; it deserves affection. We treat every project like it&apos;s our own. 
                  We truly care about your brand&apos;s growth, your audience&apos;s experience, and your story&apos;s impact.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-background border border-border rounded-lg"
                  >
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              {/* Profile Image */}
              <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/anike photos/aniketwo.PNG"
                  alt="Olamide Fatosin - AnikeBrands Founder"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
