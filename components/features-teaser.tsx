"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Lightbulb, Users, Award, TrendingUp, Heart, Zap, Sparkles, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const features = [
  {
    icon: Lightbulb,
    title: "Projets Innovants",
    description: "Créez et partagez vos projets avec une communauté engagée",
  },
  {
    icon: Users,
    title: "Mentorat Expert",
    description: "Connectez-vous avec des mentors expérimentés dans votre domaine",
  },
  {
    icon: TrendingUp,
    title: "Financement",
    description: "Financez vos projets grâce au crowdfunding communautaire",
  },
  {
    icon: Heart,
    title: "Communauté",
    description: "Rejoignez une communauté de jeunes innovateurs passionnés",
  },
  {
    icon: Award,
    title: "Gamification",
    description: "Gagnez des badges et progressez dans votre parcours",
  },
  {
    icon: Zap,
    title: "Impact Réel",
    description: "Transformez vos idées en actions concrètes",
  },
]

export default function FeaturesTeaser() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-primary opacity-30" />
      <div className="absolute inset-0 dots-pattern opacity-50" />

      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(220, 247, 99, 0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(220, 247, 99, 0.1) 0%, transparent 70%)" }}
        animate={{ y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary/15 text-primary px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full mb-6 sm:mb-7 md:mb-8 border-2 border-primary/30 backdrop-blur-xl glow-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={18} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-black tracking-wide">Fonctionnalités</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-foreground mb-6 sm:mb-7 md:mb-8 px-4">
            Un Écosystème <span className="gradient-primary-animated text-glow-primary">Complet</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Tout ce dont tu as besoin pour transformer tes idées en projets à impact mondial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative card-primary p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl h-full overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at center, rgba(220, 247, 99, 0.1) 0%, transparent 70%)",
                  }}
                />

                <div className="absolute inset-0 shimmer-primary opacity-0 group-hover:opacity-100" />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary/15 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8 border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/25 transition-all"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-primary" size={28} strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mb-10 sm:mb-12 md:mb-16 relative">
          <div className="relative bg-gradient-to-br from-primary/10 via-background to-background p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-primary/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primary/10 rounded-full blur-3xl" />

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center relative z-10">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-5 md:mb-6">
                  Interface <span className="text-primary">Intuitive</span> et Moderne
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  Une expérience utilisateur pensée pour les jeunes entrepreneurs. Design moderne, navigation fluide, et
                  fonctionnalités puissantes à portée de main.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Dashboard personnalisé avec analytics",
                    "Notifications en temps réel",
                    "Mode sombre élégant",
                    "Performance optimisée",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/modern-mobile-app-dashboard-with-dark-theme-and-li.jpg"
                    alt="YouthIn App Interface"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </motion.div>

                <motion.div
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-primary text-background px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  100% Mobile
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-dark hover:bg-primary/90 glow-primary-intense text-base sm:text-lg md:text-xl font-black px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 h-auto group rounded-xl sm:rounded-2xl"
            >
              <Link href="/features" className="flex items-center justify-center">
                <span className="mr-2 sm:mr-3 text-secondary">Découvrir Toutes les Fonctionnalités</span>
                <Target className="group-hover:rotate-90 transition-transform duration-500 text-secondary" size={20} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
