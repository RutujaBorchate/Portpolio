"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code2, Palette, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building end-to-end applications with React, Node.js, and databases",
  },
  {
    icon: Palette,
    title: "Machine Learning",
    description: "Implementing ML solutions using TensorFlow, CNN, and SVM",
  },
  {
    icon: Rocket,
    title: "Real-World Impact",
    description: "Creating solutions for healthcare, agriculture, and safety systems",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-4 bg-primary/20 rounded-2xl -rotate-6" />
                <div className="absolute inset-4 bg-accent/20 rounded-2xl rotate-3" />
                {/* Image container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
                  <Image
                    src="photo_rutuja.jpeg"
                    alt="Rutuja Borchate - Full Stack Developer & ML Engineer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a final-year B.Tech student in Electronics and Telecommunication 
                Engineering at Vishwakarma Institute of Information Technology (VIIT), 
                Pune, graduating in 2026 with a CGPA of 8.59/10. I'm passionate about 
                solving real-world problems through technology, with expertise in 
                full-stack development and machine learning.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My work focuses on building impactful applications across various 
                domains including healthcare, agriculture, and safety systems. I have 
                hands-on experience in developing mobile apps with React Native, 
                web platforms with React and Node.js, and ML-based systems using 
                TensorFlow and Python.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As Joint Head of NSS (2024-2025), I've developed strong leadership 
                and organizational skills while managing large-scale events and 
                volunteer coordination. I'm actively seeking software developer, 
                full-stack, or ML-related roles where I can contribute to innovative 
                projects and continue growing as a developer.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <item.icon className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
