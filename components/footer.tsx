"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/RutujaBorchate", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/rutuja-borchate-7226a025b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:borchaterutuja496@gmail.com", label: "Email" },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Rutuja Borchate
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border" />

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
              <span>
                {currentYear} Rutuja Borchate. All rights reserved.
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="h-3 w-3 text-primary" /> using
                Next.js
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
