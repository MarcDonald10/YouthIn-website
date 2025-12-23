"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Rocket, Star } from "lucide-react"

const stats = [
  { value: 50000, label: "Jeunes Innovateurs", suffix: "+", icon: Users, color: "from-blue-500/20 to-cyan-500/20" },
  { value: 2500, label: "Projets Financés", suffix: "+", icon: Rocket, color: "from-purple-500/20 to-pink-500/20" },
  {
    value: 5000000,
    label: "Fonds Levés (€)",
    suffix: "+",
    icon: TrendingUp,
    color: "from-green-500/20 to-emerald-500/20",
  },
  { value: 98, label: "Satisfaction", suffix: "%", icon: Star, color: "from-yellow-500/20 to-orange-500/20" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2500
    const steps = 80
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toLocaleString()
  }

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-display font-black text-primary text-glow">
      {formatNumber(count)}
      {suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <TrendingUp size={16} />
            <span className="text-sm font-semibold">Notre Impact</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-4">
            Des Résultats <span className="text-primary">Concrets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'impact que nous créons ensemble, chaque jour
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all text-center overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="text-primary" size={28} />
                  </motion.div>

                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground mt-3 text-sm font-medium">{stat.label}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
