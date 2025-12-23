"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle2 } from "lucide-react"

const partners = [
  { name: "TechStars", category: "Accélérateur" },
  { name: "500 Global", category: "Investisseur" },
  { name: "Y Combinator", category: "Accélérateur" },
  { name: "Partech", category: "Fonds VC" },
  { name: "Orange Ventures", category: "Corporate VC" },
  { name: "AfricArena", category: "Réseau" },
]

const achievements = [
  "Top 10 Startup Africaines 2024",
  "Prix Innovation Sociale",
  "Meilleure App EdTech",
  "Finaliste Vivatech 2024",
]

export default function Partners() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6 border border-primary/30"
            whileHover={{ scale: 1.05 }}
          >
            <Award size={20} />
            <span className="font-bold">Partenaires & Reconnaissances</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
            Soutenus par les <span className="text-primary">Meilleurs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des partenaires stratégiques qui partagent notre vision
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="card-primary p-6 rounded-xl text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                {partner.name.charAt(0)}
              </div>
              <div className="font-bold text-sm mb-1">{partner.name}</div>
              <div className="text-xs text-muted-foreground">{partner.category}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement}
              className="flex items-center gap-3 bg-card/50 p-4 rounded-xl border border-primary/20 hover:border-primary/50 transition-all group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 8 }}
            >
              <CheckCircle2
                className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="font-semibold">{achievement}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
