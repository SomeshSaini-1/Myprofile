'use client'
import { motion } from 'framer-motion'

const wrap = { hidden: {}, show: { transition: { staggerChildren: 0.045 } }, out: { transition: { staggerChildren: 0.025 } } }
const letter = {
  hidden: { y: '70%', rotateX: -95, opacity: 0 },
  show: { y: 0, rotateX: 0, opacity: 1, transition: { duration: 0.75, ease: [0.2, 0.8, 0.2, 1] } },
  out: { y: '-70%', rotateX: 95, opacity: 0, transition: { duration: 0.45 } },
}

// Letter-by-letter flip animation. Change the `key` to replay it.
export default function Letters({ text, className = '' }) {
  return (
    <motion.span variants={wrap} initial="hidden" animate="show" exit="out" className={`block whitespace-nowrap [perspective:600px] ${className}`}>
      {[...text].map((c, i) => (
        <motion.span key={i} variants={letter} className="inline-block origin-bottom">{c === ' ' ? '\u00A0' : c}</motion.span>
      ))}
    </motion.span>
  )
}
