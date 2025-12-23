"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Users, Zap } from "lucide-react"

const growthData = [
  { month: "Jan", users: 5000, revenue: 15000 },
  { month: "Fév", users: 12000, revenue: 35000 },
  { month: "Mar", users: 22000, revenue: 68000 },
  { month: "Avr", users: 35000, revenue: 120000 },
  { month: "Mai", users: 50000, revenue: 185000 },
]

const metrics = [
  { label: "Croissance MoM", value: "+285%", icon: TrendingUp, color: "text-primary" },
  { label: "ARR", value: "2.2M€", icon: DollarSign, color: "text-primary" },
  { label: "Utilisateurs Actifs", value: "50K+", icon: Users, color: "text-primary" },
  { label: "Taux Rétention", value: "94%", icon: Zap, color: "text-primary" },
]

export default function GrowthChart() {
  const maxUsers = Math.max(...growthData.map((d) => d.users))

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="grid-pattern-primary absolute inset-0 opacity-20" />
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
            <TrendingUp size={20} />
            <span className="font-bold text-base">Traction Explosive</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
            Une Croissance <span className="gradient-primary-animated">Exceptionnelle</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des métriques qui parlent d'elles-mêmes. Une opportunité unique pour les investisseurs visionnaires.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="card-primary p-6 rounded-2xl text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <metric.icon className={metric.color} size={24} />
              </motion.div>
              <div className={`text-3xl font-black ${metric.color} text-glow-primary mb-2`}>{metric.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto card-primary p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Croissance des Utilisateurs</h3>
              <p className="text-muted-foreground">5 derniers mois</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-black text-primary text-glow-primary">+900%</div>
              <div className="text-sm text-muted-foreground">Croissance totale</div>
            </div>
          </div>

          <div className="relative h-80">
            <div className="absolute inset-0 flex items-end justify-between gap-4">
              {growthData.map((data, index) => {
                const heightPercent = (data.users / maxUsers) * 100
                return (
                  <motion.div
                    key={data.month}
                    className="flex-1 flex flex-col items-center gap-4"
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "100%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.8 }}
                  >
                    <motion.div
                      className="w-full rounded-t-xl relative overflow-hidden group cursor-pointer"
                      style={{ height: `${heightPercent}%` }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/50 glow-primary" />
                      <motion.div
                        className="absolute inset-0 shimmer-primary"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-center">
                          <div className="text-2xl font-black text-background">{data.users.toLocaleString()}</div>
                          <div className="text-xs text-background/80 font-semibold">utilisateurs</div>
                        </div>
                      </div>
                    </motion.div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-foreground">{data.month}</div>
                      <div className="text-xs text-muted-foreground">{(data.revenue / 1000).toFixed(0)}K€</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
