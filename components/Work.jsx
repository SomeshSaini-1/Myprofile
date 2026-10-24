'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PROJECTS } from '@/data/content'

export default function Work() {
  const ref = useRef(null), track = useRef(null)
  const [max, setMax] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -max])
  useEffect(() => {
    const m = () => setMax(Math.max(0, track.current.scrollWidth - window.innerWidth + 40))
    m(); window.addEventListener('resize', m); return () => window.removeEventListener('resize', m)
  }, [])
  return (
    <section id="work" ref={ref} className="relative z-[1] h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-[5vh] overflow-hidden">
        <h2 className="mx-[8vw] bg-gradient-to-r from-white to-pu bg-clip-text text-[clamp(34px,4.4vw,60px)] font-semibold text-transparent">My Work</h2>
        <motion.div ref={track} style={{ x }} className="flex w-max border-y border-white/20 pl-[8vw]">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="group w-[min(78vw,420px)] border-l border-white/20 bg-bg/80 px-7 py-[30px]">
              <div className="text-[44px] font-semibold text-pu2">0{i + 1}</div>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <em className="text-[13px] not-italic text-mut">{p.sub}</em>
              <dl className="mt-[18px] text-[13px] leading-relaxed text-[#d5cfe4]">
                <dt className="text-xs font-semibold text-pu">Tools and features</dt>
                <dd>{p.tools}</dd>
                <dd className="mt-2">{p.text}</dd>
              </dl>
              {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-3.5 inline-block border-b border-pu text-[13px] text-pu2">Visit site ↗</a>}
              <div className="mt-[18px] grid h-[150px] place-items-center overflow-hidden rounded-md text-[40px] font-bold text-white/80 transition duration-500 group-hover:-rotate-1 group-hover:scale-105" style={{ background: p.image ? `url(${p.image}) center/cover` : `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` }}>
                {!p.image && p.abbr}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
