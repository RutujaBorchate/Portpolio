"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "B.Tech in Electronics and Telecommunication Engineering",
    company: "Vishwakarma Institute of Information Technology (VIIT)",
    companyUrl: "https://www.viit.ac.in/",
    location: "Pune, Maharashtra, India",
    period: "2022 - 2026",
    description:
      "Currently pursuing B.Tech with a CGPA of 8.76/10. Specializing in software development, machine learning, and web technologies. Active member and Joint Head of NSS (2024-2025), leading event and stage management for college-wide programs.",
    skills: ["DSA", "Software Engineering", "Machine Learning", "Web Development"],
  },
  {
    type: "work",
    title: "Winner - Vishwakon 2024 (Agritech Conclave)",
    company: "3rd Place",
    location: "VIIT, Pune",
    period: "2024",
    description:
      "Won 3rd place at Vishwakon 2024 Agritech Conclave for innovative solution in agriculture technology. Demonstrated strong problem-solving and presentation skills.",
    skills: ["Machine Learning", "Agriculture Tech", "Problem Solving"],
  },
  {
    type: "work",
    title: "Runner-Up - Departmental Hackathon",
    company: "VIIT",
    location: "Pune, Maharashtra",
    period: "2025",
    description:
      "Secured runner-up position in the departmental hackathon, showcasing technical skills and innovation in developing practical solutions under time constraints.",
    skills: ["Full-Stack Development", "Rapid Prototyping", "Team Collaboration"],
  },
  {
    type: "work",
    title: "Joint Head - NSS (National Service Scheme)",
    company: "VIIT, Pune",
    location: "Pune, Maharashtra",
    period: "2024 - 2025",
    description:
      "Leading event and stage management for NSS and college-wide programs. Managing logistics, volunteer coordination, and execution of large-scale events. Developed strong leadership, communication, and organizational skills.",
    skills: ["Leadership", "Event Management", "Team Coordination", "Communication"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.title}-${exp.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1.5 md:-translate-x-2 mt-6" />

                  {/* Content */}
                  <div
                    className={`flex-1 ml-8 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {exp.type === "work" ? (
                            <Briefcase className="h-5 w-5 text-primary" />
                          ) : (
                            <GraduationCap className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                {exp.company}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            ) : (
                              <span className="text-primary">{exp.company}</span>
                            )}
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.period}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
