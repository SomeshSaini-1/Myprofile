'use client'
import { motion } from 'framer-motion'
import { ABOUT } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="relative z-[1] flex min-h-screen items-start px-[8vw] md:items-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.4 }} transition={{ duration: 0.9 }} className="ml-0 mt-[34vh] w-[88vw] md:ml-auto md:mt-0 md:w-[min(46vw,560px)]">
        <p className="mb-5 text-[13px] font-semibold tracking-[.3em] text-pu2">ABOUT ME</p>
        <p className="text-[clamp(16px,1.6vw,21px)] font-medium leading-normal">{ABOUT}</p>
      </motion.div>
    </section>
  )
}
