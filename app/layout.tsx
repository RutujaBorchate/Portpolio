import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" })

export const metadata: Metadata = {
  title: "Rutuja Borchate | Full Stack Developer & ML Engineer",
  description:
    "Final-year engineering student and aspiring software developer with strong foundations in full-stack development, machine learning, and real-world project implementation. Specializing in React, React Native, Node.js, Python, and TensorFlow.",
  keywords: [
    "Full Stack Developer",
    "Machine Learning",
    "React",
    "React Native",
    "Node.js",
    "Python",
    "TensorFlow",
    "Software Developer",
    "Portfolio",
  ],
  authors: [{ name: "Rutuja Borchate" }],
  openGraph: {
    title: "Rutuja Borchate | Full Stack Developer & ML Engineer",
    description:
      "Final-year engineering student specializing in full-stack development, machine learning, and real-world project implementation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rutuja Borchate | Full Stack Developer & ML Engineer",
    description:
      "Final-year engineering student specializing in full-stack development, machine learning, and real-world project implementation.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
