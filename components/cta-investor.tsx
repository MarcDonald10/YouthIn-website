"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"

const benefits = [
  { icon: TrendingUp, text: "ROI exceptionnel démontré" },
  { icon: Shield, text: "Marché de 1.2Md€ adressable" },
  { icon: Zap, text: "Modèle économique scalable" },
]

export default function CTAInvestor() {
  return (
    <section className="py-32 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          style={{ backgroundSize: "200% 200%" }}
        />
        <div className="grid-pattern-primary absolute inset-0 opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card-primary p-12 md:p-16 rounded-3xl relative overflow-hidden neon-border">
            {/* Animated orbs */}
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/20 text-primary px-6 py-3 rounded-full mb-8 glow-primary-intense"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={20} />
                <span className="font-bold">Opportunité d'Investissement</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
                Rejoignez la Révolution de <span className="gradient-primary-animated">l'Entrepreneuriat Africain</span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                Investissez dans la prochaine génération d'innovateurs et participez à une croissance explosive sur un
                marché en pleine expansion.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    className="flex items-center gap-3 bg-background/50 p-4 rounded-xl border border-primary/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(220, 247, 99, 0.5)" }}
                  >
                    <benefit.icon className="text-primary flex-shrink-0" size={24} />
                    <span className="font-semibold text-sm">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg glow-primary-intense hover:bg-primary/90 transition-all"
                  >
                    Discuter avec l'Équipe
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/download"
                    className="inline-flex items-center gap-3 bg-transparent border-2 border-primary text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/10 transition-all"
                  >
                    Pitch Deck
                  </Link>
                </motion.div>
              </div>

              <motion.p
                className="text-sm text-muted-foreground mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Levée de fonds Série A ouverte • Valorisation: 8M€ • Tickets: 100K€ - 1M€
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
