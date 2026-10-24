'use client'
import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { STATS } from '@/data/content'

function Counter({ to }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: setV })
    return () => c.stop()
  }, [inView, to])
  return <b ref={ref} className="block bg-gradient-to-b from-white to-pu bg-clip-text text-[clamp(38px,5.4vw,80px)] font-semibold leading-none text-transparent">{to % 1 ? v.toFixed(1) : Math.round(v)}+</b>
}

export default function Stats() {
  return (
    <section className="relative z-[1] grid grid-cols-2 gap-8 px-[8vw] py-[12vh] text-center md:grid-cols-4">
      {STATS.map((s) => (
        <div key={s.label}><Counter to={s.n} /><span className="mt-2.5 block text-[13px] text-mut">{s.label}</span></div>
      ))}
    </section>
  )
}
