'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Letters from './Letters'
import { PROFILE, ROLES } from '@/data/content'

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 3800); return () => clearInterval(t) }, [])
  const [a, b] = ROLES[i]
  return (
    <section id="hero" className="relative z-[1] min-h-screen">
      <div className="absolute left-[6vw] top-[62%] -translate-y-1/2 md:left-[8vw] md:top-1/2">
        <small className="mb-1 block text-[clamp(15px,1.5vw,20px)] text-pu">Hello! I’m</small>
        <h1 className="text-[clamp(26px,3.2vw,46px)] font-semibold leading-[1.02] tracking-[.03em]">{PROFILE.first}<br />{PROFILE.last}</h1>
      </div>
      <div className="absolute left-[6vw] top-[80%] w-[90vw] -translate-y-1/2 md:left-auto md:right-[6vw] md:top-1/2 md:w-[min(30vw,420px)]">
        <small className="text-[clamp(14px,1.4vw,19px)] text-pu2">A Creative</small>
        <AnimatePresence mode="wait"><Letters key={`a${i}`} text={a} className="text-[clamp(26px,3.4vw,50px)] font-bold leading-[1.05] tracking-[.02em] text-pu [text-shadow:0_0_26px_#7c3aedaa]" /></AnimatePresence>
        <AnimatePresence mode="wait"><Letters key={`b${i}`} text={b} className="text-[clamp(26px,3.4vw,50px)] font-bold leading-[1.05] tracking-[.02em]" /></AnimatePresence>
      </div>
      <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-[3vh] left-1/2 text-[11px] tracking-[.2em] text-mut">SCROLL</motion.div>
    </section>
  )
}
