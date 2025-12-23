"use client"

import { motion } from "framer-motion"
import {
  Lightbulb,
  Users,
  TrendingUp,
  Heart,
  Award,
  BarChart,
  MessageCircle,
  Calendar,
  Shield,
  Zap,
  Target,
  Sparkles,
} from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Gestion de Projets",
    description:
      "Créez, partagez et gérez vos projets innovants avec des outils intuitifs. Collaborez avec d'autres membres, suivez votre progression et présentez vos réalisations.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Mentorat Personnalisé",
    description:
      "Connectez-vous avec des mentors experts dans votre domaine. Bénéficiez de sessions individuelles, de conseils stratégiques et d'un accompagnement sur mesure.",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Financement Participatif",
    description:
      "Lancez des campagnes de crowdfunding sécurisées pour financer vos projets. Transactions transparentes et multiples options de contribution.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Communauté Engagée",
    description:
      "Rejoignez une communauté vibrante de jeunes innovateurs. Partagez vos expériences, collaborez sur des projets et participez à des événements exclusifs.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Système de Gamification",
    description:
      "Gagnez des badges, débloquez des achievements et progressez dans les leaderboards. Votre engagement est récompensé à chaque étape.",
    color: "primary",
  },
  {
    icon: BarChart,
    title: "Tableau de Bord Analytique",
    description:
      "Suivez vos statistiques, analysez l'engagement de votre communauté et mesurez l'impact de vos projets avec des données en temps réel.",
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "Messagerie Instantanée",
    description:
      "Communiquez facilement avec votre réseau. Messages directs, groupes de discussion et notifications en temps réel.",
    color: "primary",
  },
  {
    icon: Calendar,
    title: "Événements & Workshops",
    description:
      "Participez à des webinaires, ateliers et événements de networking. Apprenez de nouveaux skills et élargissez votre réseau.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Sécurité & Confidentialité",
    description:
      "Vos données sont protégées avec les standards de sécurité les plus élevés. Contrôlez votre visibilité et vos paramètres de confidentialité.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Notifications Intelligentes",
    description:
      "Restez informé des opportunités pertinentes, des mises à jour de projets et des messages importants avec notre système de notifications.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Objectifs & Milestones",
    description:
      "Définissez vos objectifs, créez des milestones et suivez votre progression. Célébrez chaque victoire sur votre chemin vers le succès.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Recommandations IA",
    description:
      "Notre intelligence artificielle vous recommande des mentors, projets et opportunités alignés avec vos intérêts et objectifs.",
    color: "primary",
  },
]

export default function FeaturesContent() {
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
              Tout Ce Dont Vous Avez Besoin
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une suite complète d&apos;outils pour transformer vos idées en projets à impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="bg-secondary p-6 rounded-xl border border-muted hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-effect">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold text-tertiary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-tertiary mb-6">Prêt à Commencer ?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Rejoignez des milliers de jeunes innovateurs et transformez vos idées en réalité
            </p>
            <motion.a
              href="/download"
              className="inline-block bg-primary text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger YouthIn
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
