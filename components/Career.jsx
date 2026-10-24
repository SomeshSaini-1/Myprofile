'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { JOBS } from '@/data/content'

export default function Career() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const top = useTransform(scrollYProgress, (p) => `${p * 100}%`)
  return (
    <section id="career" className="relative z-[1] px-[8vw] py-[14vh]">
      <h2 className="mb-[12vh] text-center text-[clamp(34px,4.6vw,64px)] font-medium leading-[1.1]">My career &amp;<br /><span className="text-[#8b6cf0]">experience</span></h2>
      <div ref={ref} className="relative mx-auto grid max-w-[1000px] gap-[70px] pl-6 md:pl-0">
        <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-white/10 md:left-1/2" />
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute bottom-0 left-0 top-0 w-0.5 origin-top bg-pu md:left-1/2" />
        <motion.div style={{ top }} className="absolute -left-1.5 h-3.5 w-3.5 rounded-full bg-pu shadow-[0_0_22px_6px_#a78bfa88] md:left-[calc(50%-6px)]" />
        {JOBS.map((j) => (
          <motion.div key={j.role} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3, once: true }} transition={{ duration: 0.9 }} className="grid items-start gap-2 md:grid-cols-[1fr_150px_1.2fr] md:gap-[30px]">
            <div><h4 className="text-xl font-semibold">{j.role}</h4><div className="mt-1.5 text-sm text-pu">{j.org}</div></div>
            <div className="text-[34px] font-medium md:text-center">{j.year}</div>
            <p className="text-sm leading-relaxed text-[#d5cfe4]">{j.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
