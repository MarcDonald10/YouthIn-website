"use client"

import { motion } from "framer-motion"
import { Brain, Calendar, MessageSquare, Award, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  {
    icon: Brain,
    title: "Matching Intelligent",
    description:
      "Notre algorithme vous connecte avec des mentors alignés sur vos objectifs, compétences et secteur d'activité.",
  },
  {
    icon: Calendar,
    title: "Sessions Flexibles",
    description:
      "Planifiez vos sessions de mentorat selon votre disponibilité. Vidéo, audio ou messages selon vos préférences.",
  },
  {
    icon: MessageSquare,
    title: "Feedback Continu",
    description:
      "Recevez des conseils réguliers, des retours constructifs et un accompagnement personnalisé tout au long de votre parcours.",
  },
  {
    icon: Award,
    title: "Certification & Badges",
    description:
      "Validez vos compétences acquises et obtenez des certifications reconnues après vos programmes de mentorat.",
  },
  {
    icon: Target,
    title: "Objectifs Mesurables",
    description: "Définissez des objectifs clairs avec votre mentor et suivez vos progrès avec des indicateurs précis.",
  },
  {
    icon: TrendingUp,
    title: "Réseau Professionnel",
    description: "Élargissez votre réseau grâce aux connexions de vos mentors et accédez à de nouvelles opportunités.",
  },
]

const mentorTypes = [
  {
    title: "Entrepreneurs",
    description: "Fondateurs et CEO qui ont lancé et développé des entreprises à succès",
    count: "50+",
  },
  {
    title: "Développeurs",
    description: "Experts techniques en développement logiciel, IA et nouvelles technologies",
    count: "60+",
  },
  {
    title: "Designers",
    description: "Créatifs spécialisés en UX/UI, branding et design thinking",
    count: "30+",
  },
  {
    title: "Marketeurs",
    description: "Professionnels du marketing digital, growth et stratégie de marque",
    count: "40+",
  },
]

export default function MentorshipContent() {
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
              Trouvez Votre Mentor Idéal
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Connectez-vous avec plus de 200 mentors experts qui vous guideront vers le succès
            </p>
            <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 glow-effect">
              <Link href="/download">Trouver un Mentor</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4">Comment Ça Marche</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-secondary p-6 rounded-xl border border-muted hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold text-tertiary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Types */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-tertiary mb-4">Nos Mentors Experts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des professionnels accomplis dans tous les domaines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-muted p-6 rounded-xl text-center border border-border hover:border-primary/50 transition-all"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2">{type.count}</div>
                <h3 className="text-xl font-display font-semibold text-tertiary mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-secondary p-12 rounded-2xl text-center border border-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tertiary mb-4">
              Prêt à Accélérer Votre Croissance ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez YouthIn aujourd&apos;hui et connectez-vous avec un mentor qui transformera votre parcours
            </p>
            <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90">
              <Link href="/download" className="text-secondary">Commencer Maintenant</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
