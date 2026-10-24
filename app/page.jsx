import Cursor from '@/components/Cursor'
import ScrollBar from '@/components/ScrollBar'
import Header from '@/components/Header'
import SceneLoader from '@/components/SceneLoader'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhatIDo from '@/components/WhatIDo'
import Stats from '@/components/Stats'
import Career from '@/components/Career'
import Work from '@/components/Work'
import Tech from '@/components/Tech'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <main>
      <Cursor />
      <ScrollBar />
      <Header />
      <SceneLoader />
      <Hero />
      <About />
      <WhatIDo />
      <Stats />
      <Career />
      <Work />
      <Tech />
      <Contact />
    </main>
  )
}
