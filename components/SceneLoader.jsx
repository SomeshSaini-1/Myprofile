'use client'
import dynamic from 'next/dynamic'

// three.js needs the browser, so the scene is loaded client-side only.
const Scene = dynamic(() => import('./Scene'), { ssr: false })
export default function SceneLoader() { return <Scene /> }
