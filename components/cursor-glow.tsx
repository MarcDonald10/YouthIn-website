"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function CursorGlow() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 200)
      cursorY.set(e.clientY - 200)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <div className="h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
    </motion.div>
  )
}
