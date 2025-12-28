"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Rocket, ArrowRight, Zap, Star } from "lucide-react"
import { useEffect } from "react"
import MagneticButton from "./magnetic-button"

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / 50)
      mouseY.set((clientY - innerHeight / 2) / 50)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background mt-10">
      <div className="absolute inset-0 grid-pattern-primary opacity-30 md:opacity-40" />
      <div className="absolute inset-0 dots-pattern opacity-50 md:opacity-70" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 md:top-20 left-5 md:left-10 w-[250px] md:w-[400px] lg:w-[500px] h-[250px] md:h-[400px] lg:h-[500px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(220, 247, 99, 0.3) 0%, transparent 70%)",
            x: mouseXSpring,
            y: mouseYSpring,
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-5 md:right-20 w-[200px] md:w-[350px] lg:w-[400px] h-[200px] md:h-[350px] lg:h-[400px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(220, 247, 99, 0.25) 0%, transparent 70%)",
            x: useTransform(mouseXSpring, (x) => x * -0.5),
            y: useTransform(mouseYSpring, (y) => y * -0.5),
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 md:bottom-20 left-1/4 w-[220px] md:w-[380px] lg:w-[450px] h-[220px] md:h-[380px] lg:h-[450px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(220, 247, 99, 0.2) 0%, transparent 70%)",
            x: useTransform(mouseXSpring, (x) => x * 0.8),
            y: useTransform(mouseYSpring, (y) => y * 0.8),
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex justify-center mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-dark/80 text-primary px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full border-2 border-primary/30 backdrop-blur-xl glow-primary pulse-primary">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Zap size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" fill="currentColor" />
              </motion.div>
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-wide">
                50,000+ Jeunes Innovateurs
              </span>
              <Star size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" fill="currentColor" />
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-display font-black mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-[1.05] text-balance px-2">
              Transforme Tes <br className="hidden sm:block" />
              <span className="gradient-primary-animated text-glow-primary">Idées en Réalité</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto text-center text-balance leading-relaxed font-medium px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            La plateforme mobile qui connecte les jeunes entrepreneurs avec{" "}
            <span className="text-primary font-bold">mentorat</span>,{" "}
            <span className="text-primary font-bold">financement</span> et{" "}
            <span className="text-primary font-bold">communauté</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-stretch sm:items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <MagneticButton className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-dark hover:bg-primary/90 glow-primary-intense glow-expand-hover text-base sm:text-lg md:text-xl font-black px-6 sm:px-10 md:px-14 py-5 sm:py-6 md:py-8 h-auto group rounded-xl sm:rounded-2xl ripple-effect"
                >
                  <Link href="/download" className="flex items-center justify-center">
                    <Rocket className="mr-2 sm:mr-3 group-hover:translate-y-[-4px] transition-transform text-secondary" size={20} />
                    <span className="sm:hidden text-secondary">Commencer</span>
                    <span className="hidden sm:inline text-secondary">Commencer Maintenant</span>
                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform text-secondary" size={20} />
                  </Link>
                </Button>
              </motion.div>
            </MagneticButton>

            <MagneticButton className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-3 border-primary text-foreground hover:bg-primary/20 hover:border-primary text-base sm:text-lg md:text-xl font-black px-6 sm:px-10 md:px-14 py-5 sm:py-6 md:py-8 h-auto backdrop-blur-xl bg-dark/50 rounded-xl sm:rounded-2xl glow-primary border-dance"
                >
                  <Link href="/about" className="flex items-center justify-center text-primary">
                    <Sparkles className="mr-2 sm:mr-3 text-primary" size={20} />
                    Découvrir YouthIn
                  </Link>
                </Button>
              </motion.div>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { value: "50K+", label: "Utilisateurs Actifs" },
              { value: "2.5K+", label: "Projets Financés" },
              { value: "€5M+", label: "Fonds Levés" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center relative group"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.15, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl blur-xl group-hover:bg-primary/20 transition-all" />
                <div className="relative bg-dark/60 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-all">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary text-glow-primary mb-2 sm:mb-3">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-semibold text-white/70">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ delay: 1.2, duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-8 h-12 sm:w-10 sm:h-16 border-2 sm:border-3 border-primary rounded-full flex items-start justify-center p-2 sm:p-3 glow-primary">
          <motion.div
            className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
