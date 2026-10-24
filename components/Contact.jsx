'use client'
import { motion } from 'framer-motion'
import { PROFILE } from '@/data/content'

export default function Contact() {
  return (
    <section id="contact" className="relative z-[1] grid min-h-[80vh] place-content-center gap-4 px-[8vw] py-[10vh] text-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="text-[clamp(34px,6vw,84px)] font-semibold">Let’s build something.</motion.h2>
      <p className="text-mut">Open to relocating to . English: professional working proficiency, Hindi: native.</p>
      <a href={`mailto:${PROFILE.email}`} className="mx-auto border-b border-pu text-[clamp(18px,2.4vw,30px)] text-pu2">{PROFILE.email}</a>
    </section>
  )
}
