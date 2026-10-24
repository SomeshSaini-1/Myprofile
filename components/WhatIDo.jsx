'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SERVICES } from '@/data/content'

export default function WhatIDo() {
  const [open, setOpen] = useState(0)
  return (
    <section id="what" className="relative z-[1] flex min-h-screen flex-col justify-center gap-6 px-[8vw] pt-[16vh] md:flex-row md:items-center md:gap-[4vw] md:pt-0">
      <h2 className="text-[clamp(44px,7vw,100px)] font-bold leading-[.95] md:ml-[24vw]">WHAT<br />I <span className="text-pu2">DO</span></h2>
      <div className="relative w-[88vw] py-5 md:ml-auto md:w-[min(44vw,560px)]">
        <span className="absolute -left-2.5 top-0 h-4 w-4 border-2 border-r-0 border-b-0 border-white" />
        <span className="absolute -left-2.5 bottom-0 h-4 w-4 border-2 border-r-0 border-t-0 border-white" />
        {SERVICES.map((s, i) => (
          <button key={s.title} data-hover onClick={() => setOpen(open === i ? -1 : i)} className="block w-full border-b border-dashed border-white/20 px-7 py-6 text-left last:border-0">
            <h3 className="flex items-center justify-between text-2xl font-bold">{s.title}
              <motion.span animate={{ rotate: open === i ? 135 : 0 }} className="text-[22px] text-pu2">+</motion.span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#d5cfe4]">{s.text}</p>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {s.chips.map((c) => <span key={c} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px]">{c}</span>)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </section>
  )
}
