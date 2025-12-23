"use client"

import { motion } from "framer-motion"
import { Users, MessageCircle, Calendar, Trophy, Heart, Sparkles, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: MessageCircle,
    title: "Fil d'Actualité",
    description: "Partagez vos succès, posez vos questions et engagez avec la communauté dans un espace collaboratif.",
  },
  {
    icon: Users,
    title: "Groupes & Collaborations",
    description: "Rejoignez des groupes thématiques et trouvez des partenaires pour vos projets.",
  },
  {
    icon: Calendar,
    title: "Événements Exclusifs",
    description: "Participez à des webinaires, workshops et meetups organisés par YouthIn.",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description: "Suivez votre progression et celle de la communauté avec nos tableaux de classement.",
  },
  {
    icon: Heart,
    title: "Entraide & Support",
    description: "Bénéficiez du soutien de la communauté et aidez d'autres jeunes innovateurs.",
  },
  {
    icon: Sparkles,
    title: "Challenges & Hackathons",
    description: "Participez à des défis créatifs et gagnez des prix tout en développant vos compétences.",
  },
]

const stats = [
  { value: "10,000+", label: "Membres Actifs" },
  { value: "50+", label: "Pays Représentés" },
  { value: "1,000+", label: "Collaborations" },
  { value: "200+", label: "Événements/An" },
]

export default function CommunityContent() {
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
              Rejoignez Une Communauté Exceptionnelle
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              10,000+ jeunes innovateurs se connectent, collaborent et grandissent ensemble sur YouthIn
            </p>
            <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 glow-effect">
              <Link href="/download">Rejoindre la Communauté</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-tertiary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-secondary/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-tertiary mb-4">
              Ce Qui Rend Notre Communauté Unique
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-muted p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold text-tertiary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges & Gamification */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-muted">
              <div className="text-center mb-8">
                <Trophy className="text-primary mx-auto mb-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-tertiary mb-4">
                  Système de Récompenses
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gagnez des badges et débloquez des avantages exclusifs en participant activement à la communauté
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Pionnier", "Mentor", "Innovateur", "Leader"].map((badge, index) => (
                  <motion.div
                    key={badge}
                    className="bg-muted p-4 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="text-primary" size={28} />
                    </div>
                    <p className="font-display font-semibold text-tertiary">{badge}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tertiary mb-4">
              Faites Partie du Mouvement
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connectez-vous avec des jeunes passionnés qui partagent votre vision d&apos;un monde meilleur
            </p>
            <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90">
              <Link href="/download">Rejoindre Maintenant</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
