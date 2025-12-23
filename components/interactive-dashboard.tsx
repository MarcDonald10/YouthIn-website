"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { BarChart3, TrendingUp, Users, Rocket, Target, Zap } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Users,
    title: "Matching IA",
    description: "Algorithme intelligent de mise en relation",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: TrendingUp,
    title: "Analytics",
    description: "Tableaux de bord en temps réel",
    color: "from-primary/20 to-green-500/20",
  },
  {
    icon: Rocket,
    title: "Gamification",
    description: "Système de badges et récompenses",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Target,
    title: "Objectifs",
    description: "Suivi de progression personnalisé",
    color: "from-orange-500/20 to-red-500/20",
  },
]

export default function InteractiveDashboard() {
  const [activeFeature, setActiveFeature] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 100, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 100, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section className="py-32 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6 border border-primary/30 glow-primary"
            whileHover={{ scale: 1.05 }}
          >
            <BarChart3 size={20} />
            <span className="font-bold">Technologie de Pointe</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
            Un Écosystème <span className="gradient-primary-animated">Complet</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une plateforme tout-en-un pensée pour maximiser le succès entrepreneurial
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            className="perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="card-primary p-8 rounded-3xl neon-border">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Dashboard Entrepreneur</h3>
                    <p className="text-sm text-muted-foreground">Vue d'ensemble</p>
                  </div>
                  <motion.div
                    className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Zap className="text-primary" size={24} />
                  </motion.div>
                </div>

                {/* Mock dashboard elements */}
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-background/50 p-4 rounded-xl border border-primary/20"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10, borderColor: "rgba(220, 247, 99, 0.5)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10" />
                        <div className="flex-1">
                          <div className="h-3 bg-primary/20 rounded w-32 mb-2" />
                          <div className="h-2 bg-muted rounded w-24" />
                        </div>
                        <motion.div
                          className="text-2xl font-black text-primary"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          {85 + i * 5}%
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-br from-primary/10 to-transparent p-3 rounded-lg text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-xl font-black text-primary">{120 + i * 40}</div>
                      <div className="text-xs text-muted-foreground">Métrique {i + 1}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`card-primary p-6 rounded-2xl cursor-pointer transition-all ${
                  activeFeature === index ? "border-primary/50 scale-105" : ""
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-primary" size={28} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                  {activeFeature === index && (
                    <motion.div
                      className="w-3 h-3 rounded-full bg-primary pulse-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
