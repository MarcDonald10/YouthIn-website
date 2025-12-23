"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-40"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="relative">
            <motion.button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={14} />
            </motion.button>

            <motion.div
              className="card-primary p-4 rounded-2xl shadow-2xl max-w-xs neon-border"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 20px 40px rgba(220, 247, 99, 0.2)",
                  "0 20px 60px rgba(220, 247, 99, 0.4)",
                  "0 20px 40px rgba(220, 247, 99, 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <h4 className="font-bold text-lg mb-2">Prêt à transformer votre idée?</h4>
              <p className="text-sm text-muted-foreground mb-4">Rejoignez 50,000+ jeunes innovateurs</p>

              <Link
                href="/download"
                className="flex items-center justify-center gap-2 bg-primary text-background px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all group"
              >
                Télécharger l'App
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
