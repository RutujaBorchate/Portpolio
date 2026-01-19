"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Ride Sharing App with Advanced Safety Features",
    description:
      "Developed a mobile application focused on user safety with real-time GPS tracking, emergency alerts, and driver rating system. The app supported over 1,000 users and provided comprehensive safety features for secure ride-sharing experiences.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
    tech: ["React Native", "Node.js", "Firebase", "Google Maps API", "Express.js", "Redux", "WebSockets"],
    liveUrl: "https://github.com/RutujaBorchate",
    githubUrl: "https://github.com/RutujaBorchate",
    featured: true,
  },
  {
    title: "Biomedical Waste Management Portal",
    description:
      "Built a comprehensive web platform for tracking, monitoring, and compliance management of biomedical waste. Features include real-time updates, automated reporting, and role-based access control for efficient waste management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tech: ["React", "JavaScript", "SQL Database", "Node.js", "Express.js"],
    liveUrl: "https://github.com/RutujaBorchate",
    githubUrl: "https://github.com/RutujaBorchate",
    featured: true,
  },
  {
    title: "Potato Plant Disease Detection using ML",
    description:
      "Developed a machine learning system to detect and classify potato plant diseases using computer vision. Implemented CNN, SVM, and K-Means clustering to improve early disease detection for agriculture use cases.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "CNN", "SVM", "K-Means", "NumPy", "Pandas"],
    liveUrl: "https://github.com/RutujaBorchate",
    githubUrl: "https://github.com/RutujaBorchate",
    featured: true,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 sm:py-32">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects I've worked on, from full-stack
              applications to open source contributions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-border">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>

                {/* Project Info */}
                <div
                  className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-1 lg:text-right" : ""}`}
                >
                  <p className="text-primary font-mono text-sm">
                    Featured Project
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {project.title}
                  </h3>
                  <div className="p-6 rounded-xl bg-card border border-border shadow-lg">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/RutujaBorchate"
                target="_blank"
                rel="noopener noreferrer"
              >
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
