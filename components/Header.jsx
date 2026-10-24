import { PROFILE } from '@/data/content'

export default function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-[3vw] py-5 text-xs font-semibold tracking-wider">
        <a href="#hero" className="text-[17px] font-bold tracking-normal">SOMESH<b className="text-pu">.</b></a>
        <span className="hidden md:block">{PROFILE.email}</span>
        <nav className="flex gap-5 md:gap-9">
          <a href="#about">ABOUT</a><a href="#work">WORK</a><a href="#contact">CONTACT</a>
        </nav>
      </header>
      <div className="fixed bottom-[14vh] left-[3vw] z-20 hidden flex-col gap-5 text-[13px] font-bold md:flex">
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:translate-x-1 hover:text-pu2">in</a>
        <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="transition hover:translate-x-1 hover:text-pu2">@</a>
      </div>
      <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="fixed bottom-[5vh] right-[3vw] z-20 text-xs font-semibold tracking-[.12em] text-mut transition hover:text-white">RESUME ⎘</a>
    </>
  )
}
