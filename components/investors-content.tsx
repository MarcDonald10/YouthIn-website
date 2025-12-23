"use client"

import { motion } from "framer-motion"
import {
  TrendingUp,
  Target,
  Users,
  Globe,
  DollarSign,
  Rocket,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const marketData = [
  { label: "Marché TAM", value: "1.2Md€", icon: Globe },
  { label: "Marché SAM", value: "350M€", icon: Target },
  { label: "Marché SOM", value: "80M€", icon: Rocket },
]

const traction = [
  { metric: "MRR", value: "45K€", growth: "+285% MoM", color: "text-primary" },
  { metric: "CAC", value: "12€", growth: "-40% YoY", color: "text-green-500" },
  { metric: "LTV", value: "450€", growth: "Ratio 37:1", color: "text-primary" },
  { metric: "Churn", value: "2.3%", growth: "Industry: 15%", color: "text-green-500" },
]

const investmentTerms = [
  "Levée Série A: 2M€",
  "Valorisation pré-money: 8M€",
  "Tickets: 100K€ - 1M€",
  "Utilisation des fonds: 60% Tech, 25% Marketing, 15% Ops",
]

const competitiveAdvantages = [
  {
    title: "Technologie Propriétaire",
    description: "IA de matching unique avec 94% de satisfaction",
    icon: Zap,
  },
  {
    title: "Réseau d'Effet",
    description: "Plus d'utilisateurs = plus de valeur exponentiellement",
    icon: Users,
  },
  {
    title: "Barrières à l'Entrée",
    description: "Partenariats exclusifs et données propriétaires",
    icon: Shield,
  },
  {
    title: "Modèle Multi-Revenue",
    description: "Freemium + Transactions + B2B SaaS",
    icon: DollarSign,
  },
]

const milestones = [
  { quarter: "Q1 2025", goal: "100K utilisateurs", status: "completed" },
  { quarter: "Q2 2025", goal: "Break-even opérationnel", status: "on-track" },
  { quarter: "Q3 2025", goal: "Expansion 5 nouveaux pays", status: "planned" },
  { quarter: "Q4 2025", goal: "Série B (10M€)", status: "planned" },
]

export default function InvestorsContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <div className="grid-pattern-primary absolute inset-0 opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-8 border border-primary/30 glow-primary"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp size={20} />
              <span className="font-bold">Opportunité d'Investissement</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display font-black mb-6">
              Investissez dans la <span className="gradient-primary-animated">Prochaine Licorne</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Une opportunité unique de participer à la révolution entrepreneuriale africaine avec une croissance
              explosive et des métriques exceptionnelles.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg glow-primary-intense hover:bg-primary/90 transition-all"
              >
                Recevoir le Pitch Deck
                <ArrowRight size={24} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
              Un Marché <span className="text-primary">Gigantesque</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Le marché de l'entrepreneuriat africain est en pleine explosion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {marketData.map((data, index) => (
              <motion.div
                key={data.label}
                className="card-primary p-8 rounded-2xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <data.icon className="text-primary" size={32} />
                </motion.div>
                <div className="text-5xl font-black text-primary text-glow-primary mb-3">{data.value}</div>
                <div className="text-muted-foreground font-semibold">{data.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
              Traction <span className="text-primary">Exceptionnelle</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Des métriques qui parlent d'elles-mêmes</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {traction.map((item, index) => (
              <motion.div
                key={item.metric}
                className="card-primary p-6 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-sm text-muted-foreground mb-2 font-semibold">{item.metric}</div>
                <div className={`text-4xl font-black ${item.color} mb-2`}>{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.growth}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
              Avantages <span className="text-primary">Compétitifs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Ce qui nous rend inimitables</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="card-primary p-8 rounded-2xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <advantage.icon className="text-primary" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Terms */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto card-primary p-12 rounded-3xl neon-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-black mb-8 text-center">
              Conditions d'<span className="text-primary">Investissement</span>
            </h2>

            <div className="space-y-4 mb-10">
              {investmentTerms.map((term, index) => (
                <motion.div
                  key={term}
                  className="flex items-center gap-4 bg-background/50 p-4 rounded-xl border border-primary/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, borderColor: "rgba(220, 247, 99, 0.5)" }}
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="font-semibold text-lg">{term}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg glow-primary-intense hover:bg-primary/90 transition-all"
                >
                  Discuter de l'Opportunité
                  <ArrowRight size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
              Roadmap <span className="text-primary">2025</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Des jalons ambitieux mais réalistes</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.quarter}
                className="flex gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-32">
                  <div className="font-bold text-primary text-lg">{milestone.quarter}</div>
                </div>
                <div className="flex-1">
                  <motion.div className="card-primary p-6 rounded-2xl" whileHover={{ x: 10 }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold mb-1">{milestone.goal}</div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {milestone.status === "completed" && "✓ Complété"}
                          {milestone.status === "on-track" && "→ En cours"}
                          {milestone.status === "planned" && "○ Planifié"}
                        </div>
                      </div>
                      {milestone.status === "completed" && <CheckCircle2 className="text-primary" size={32} />}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
