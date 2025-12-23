import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import FloatingCTA from "@/components/floating-cta"
import CursorGlow from "@/components/cursor-glow"
import AnimatedParticles from "@/components/animated-particles"
import PageTransition from "@/components/page-transition"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "YouthIn - Empower les Jeunes. Transforme le Monde.",
  description:
    "La plateforme mobile d'innovation et d'empowerment des jeunes. Projets, mentorat, financement participatif et communauté engagée.",
  keywords: "youth empowerment, innovation, mentorat, financement participatif, jeunes",
  openGraph: {
    title: "YouthIn - Empower les Jeunes. Transforme le Monde.",
    description: "La plateforme mobile d'innovation et d'empowerment des jeunes",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ScrollProgress />
        <CursorGlow />
        <AnimatedParticles />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  )
}
