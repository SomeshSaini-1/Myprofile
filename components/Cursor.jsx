'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 })
  const [big, setBig] = useState(false)
  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => setBig(!!e.target.closest?.('a,button,[data-hover]'))
    window.addEventListener('pointermove', move)
    document.addEventListener('pointerover', over)
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerover', over) }
  }, [x, y])
  return (
    <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[99] hidden [@media(hover:hover)]:block">
      <motion.div animate={{ width: big ? 56 : 22, height: big ? 56 : 22, opacity: big ? 0.35 : 0.8 }} className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-pu2" />
    </motion.div>
  )
}
