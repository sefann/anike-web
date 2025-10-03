"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Target } from "lucide-react"

const stats = [
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Target, value: "100%", label: "Client Satisfaction" }
]

export function AboutBio() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="text-gradient">My Story</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I&apos;m AnikeBrands, a passionate graphics designer with over 5 years of experience 
                  in creating compelling visual identities and digital experiences. My journey began 
                  with a simple love for art and design, which has evolved into a career dedicated 
                  to helping businesses tell their stories through powerful visual communication.
                </p>
                
                <p>
                  I specialize in brand identity design, print materials, and photography, always 
                  striving to create work that not only looks beautiful but also serves a purpose. 
                  Every project is an opportunity to push creative boundaries while maintaining 
                  the highest standards of quality and professionalism.
                </p>
                
                <p>
                  When I&apos;m not designing, you&apos;ll find me exploring new design trends, experimenting 
                  with different creative techniques, or collaborating with fellow creatives to 
                  bring innovative ideas to life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Profile Image Placeholder */}
              <div className="aspect-square bg-muted/50 rounded-2xl flex items-center justify-center">
                <div className="text-muted-foreground text-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AB</span>
                  </div>
                  <p className="text-sm">Profile Photo</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}
