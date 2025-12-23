"use client"

import { motion } from "framer-motion"
import { Smartphone, CheckCircle, QrCode, Apple, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Accès à plus de 200 mentors experts",
  "Outils de gestion de projets intuitifs",
  "Financement participatif sécurisé",
  "Communauté de 10,000+ innovateurs",
  "Système de gamification engageant",
  "Notifications en temps réel",
  "Messagerie instantanée",
  "Événements et workshops exclusifs",
]

export default function DownloadContent() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-secondary/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">
                Téléchargez YouthIn Aujourd&apos;hui
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Commencez votre parcours d&apos;innovation et rejoignez des milliers de jeunes qui transforment leurs
                idées en réalité
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 glow-effect">
                  <Apple className="mr-2" size={20} />
                  App Store
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Chrome className="mr-2" size={20} />
                  Google Play
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">Disponible sur iOS 14+ et Android 8+</p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10 max-w-sm mx-auto">
                <img src="/smartphone-mockup-mobile-app-green-interface.jpg" alt="YouthIn App" className="w-full rounded-3xl shadow-2xl" />
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4">
              Tout Ce Dont Vous Avez Besoin
            </h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Une application complète pour transformer vos idées en projets à impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-3 bg-secondary p-4 rounded-lg border border-muted"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-tertiary">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-tertiary mb-6">Scannez pour Télécharger</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Utilisez votre appareil mobile pour scanner le QR code et télécharger l&apos;app instantanément
            </p>

            <motion.div
              className="bg-tertiary p-8 rounded-2xl inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-64 h-64 bg-secondary/20 rounded-xl flex items-center justify-center">
                <QrCode className="text-secondary" size={200} />
              </div>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-6">Compatible avec tous les lecteurs de QR code</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-secondary p-12 rounded-2xl text-center border border-muted max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Smartphone className="text-primary mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tertiary mb-4">
              Prêt à Transformer Vos Idées ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez YouthIn et faites partie du mouvement qui change le monde, un projet à la fois
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90">
                <Apple className="mr-2" size={20} />
                Télécharger sur App Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <Chrome className="mr-2" size={20} />
                Obtenir sur Google Play
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
