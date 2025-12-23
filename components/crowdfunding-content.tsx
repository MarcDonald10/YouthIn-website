"use client"

import { motion } from "framer-motion"
import { DollarSign, Shield, Users, TrendingUp, CheckCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "Paiements Sécurisés",
    description:
      "Toutes les transactions sont cryptées et sécurisées avec les standards internationaux les plus élevés.",
  },
  {
    icon: Users,
    title: "Communauté Engagée",
    description: "Accédez à une base de contributeurs passionnés par l'innovation et l'impact social.",
  },
  {
    icon: TrendingUp,
    title: "Transparence Totale",
    description: "Suivez l'utilisation des fonds en temps réel et communiquez avec vos supporters.",
  },
  {
    icon: Zap,
    title: "Campagnes Flexibles",
    description: 'Choisissez entre financement "tout ou rien" ou "flexible" selon vos besoins.',
  },
]

const steps = [
  {
    number: "01",
    title: "Créez Votre Campagne",
    description: "Présentez votre projet avec des visuels attractifs et un pitch convaincant",
  },
  {
    number: "02",
    title: "Définissez Votre Objectif",
    description: "Fixez un montant réaliste et proposez des récompenses pour vos contributeurs",
  },
  {
    number: "03",
    title: "Partagez & Mobilisez",
    description: "Utilisez nos outils pour promouvoir votre campagne auprès de votre réseau",
  },
  {
    number: "04",
    title: "Recevez Vos Fonds",
    description: "Une fois l'objectif atteint, les fonds sont transférés sur votre compte",
  },
]

const contributionTypes = [
  { icon: DollarSign, title: "Dons Simples", description: "Contributions libres sans contrepartie" },
  { icon: CheckCircle, title: "Récompenses", description: "Offrez des avantages exclusifs à vos supporters" },
  { icon: TrendingUp, title: "Equity", description: "Partagez une part de votre entreprise (à venir)" },
]

export default function CrowdfundingContent() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-secondary/90">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">
              Financez Vos Projets avec la Communauté
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Lancez votre campagne de crowdfunding et transformez vos idées en réalité grâce au soutien collectif
            </p>
            <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 glow-effect">
              <Link href="/download">Lancer une Campagne</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4">
              Pourquoi Choisir YouthIn ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-secondary p-6 rounded-xl border border-muted hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-display font-semibold text-tertiary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-tertiary mb-4">Comment Ça Marche</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-display font-semibold text-tertiary mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Types */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4">Types de Contributions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contributionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-8 rounded-xl border border-muted text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold text-tertiary mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-muted p-12 rounded-2xl text-center border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tertiary mb-4">
              Prêt à Lancer Votre Campagne ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez les centaines de projets qui ont été financés sur YouthIn
            </p>
            <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90">
              <Link href="/download">Créer Ma Campagne</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
