"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Users, Globe, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Inclusion",
    description: "Chaque jeune mérite sa chance, peu importe son origine",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous encourageons la créativité et la pensée disruptive",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Ensemble, nous sommes plus forts et plus impactants",
  },
  {
    icon: Globe,
    title: "Impact Global",
    description: "Des solutions locales avec un impact mondial",
  },
]

export default function AboutContent() {
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
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">Qui Sommes-Nous ?</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              YouthIn est née d&apos;une conviction simple : chaque jeune a le potentiel de changer le monde. Nous
              construisons l&apos;infrastructure qui rend cela possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary p-8 rounded-2xl border border-muted"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-tertiary mb-4">Notre Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Un monde où chaque jeune a accès aux ressources, au mentorat et à la communauté nécessaires pour
                transformer leurs idées en innovations qui résolvent les défis de notre temps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary p-8 rounded-2xl border border-muted"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-tertiary mb-4">Notre Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Créer une plateforme inclusive qui connecte les jeunes innovateurs avec des mentors experts, des
                opportunités de financement et une communauté engagée pour catalyser l&apos;innovation sociale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-tertiary mb-4">Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-muted p-6 rounded-xl text-center border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold text-tertiary mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-8 text-center">
              Notre Histoire
            </h2>
            <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-muted">
              <p className="text-muted-foreground leading-relaxed mb-6">
                YouthIn est née en 2023 du constat que de nombreux jeunes innovateurs africains avaient des idées
                brillantes mais manquaient de ressources pour les concrétiser. Nous avons créé une plateforme qui
                démocratise l&apos;accès au mentorat, au financement et à une communauté de soutien.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aujourd&apos;hui, nous comptons plus de 10 000 jeunes innovateurs actifs, 500+ projets lancés et un
                réseau de 200+ mentors experts dans divers domaines. Notre impact se mesure non seulement en chiffres,
                mais aussi dans les vies transformées et les communautés impactées.
              </p>
              <p className="text-primary font-semibold text-lg">
                Ensemble, nous construisons l&apos;avenir que nous voulons voir.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
