"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Rocket, ArrowRight, Zap, Star } from "lucide-react"
import { useEffect } from "react"

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 grid-pattern-primary opacity-40" />
      <div className="absolute inset-0 dots-pattern" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(220, 247, 99, 0.3) 0%, transparent 70%)",
            x: mouseXSpring,
            y: mouseYSpring,
          }}
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(220, 247, 99, 0.25) 0%, transparent 70%)",
            x: useTransform(mouseXSpring, (x) => x * -0.5),
            y: useTransform(mouseYSpring, (y) => y * -0.5),
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(220, 247, 99, 0.2) 0%, transparent 70%)",
            x: useTransform(mouseXSpring, (x) => x * 0.8),
            y: useTransform(mouseYSpring, (y) => y * 0.8),
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div className="container mx-auto px-4 py-20 relative z-10" style={{ opacity, scale }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-dark/80 text-primary px-8 py-4 rounded-full border-2 border-primary/30 backdrop-blur-xl glow-primary pulse-primary">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Zap size={22} className="text-primary" fill="currentColor" />
              </motion.div>
              <span className="text-base font-bold tracking-wide">50,000+ Jeunes Innovateurs</span>
              <Star size={18} className="text-primary" fill="currentColor" />
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-8 leading-[1.05] text-balance">
              Transforme Tes <br />
              <span className="gradient-primary-animated text-glow-primary">Idées en Réalité</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-white/80 mb-16 max-w-4xl mx-auto text-center text-balance leading-relaxed font-medium"
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
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-primary text-dark hover:bg-primary/90 glow-primary-intense text-xl font-black px-14 py-8 h-auto group rounded-2xl"
              >
                <Link href="/download">
                  <Rocket className="mr-3 group-hover:translate-y-[-4px] transition-transform" size={28} />
                  Commencer Maintenant
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-3 border-primary text-foreground hover:bg-primary/20 hover:border-primary text-xl font-black px-14 py-8 h-auto backdrop-blur-xl bg-dark/50 rounded-2xl glow-primary"
              >
                <Link href="/about">
                  <Sparkles className="mr-3" size={24} />
                  Découvrir YouthIn
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-12 max-w-4xl mx-auto"
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
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all" />
                <div className="relative bg-dark/60 backdrop-blur-xl p-8 rounded-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-all">
                  <div className="text-5xl md:text-6xl font-black text-primary text-glow-primary mb-3">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-white/70">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ delay: 1.2, duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-10 h-16 border-3 border-primary rounded-full flex items-start justify-center p-3 glow-primary">
          <motion.div
            className="w-3 h-3 bg-primary rounded-full"
            animate={{ y: [0, 28, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
