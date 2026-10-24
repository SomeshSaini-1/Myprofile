'use client'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { LABELS } from '@/data/content'

const damp = THREE.MathUtils.damp

/** The GLB character: follows the cursor and moves between sections as you scroll. */
function Character() {
  const { scene } = useGLTF('/models/character.glb')
  const ref = useRef()
  const { obj, k, off } = useMemo(() => {
    const o = scene.clone(true)
    const b = new THREE.Box3().setFromObject(o)
    const k = 5 / b.getSize(new THREE.Vector3()).y // normalise height to 5 units
    return { obj: o, k, off: b.getCenter(new THREE.Vector3()).multiplyScalar(-k) }
  }, [scene])

  useFrame(({ viewport, pointer }, dt) => {
    const g = ref.current, w = viewport.width
    const m = window.innerWidth < 820, p = window.scrollY / window.innerHeight
    let x = g.position.x, y = g.position.y, s = 0.001
    if (p < 0.55) { x = m ? 0 : 0.3; y = m ? 0.9 : -0.1; s = m ? 0.62 : 1 }          // hero
    else if (p < 1.5) { x = m ? 0 : -w * 0.25; y = m ? 1.2 : -0.2; s = m ? 0.5 : 1.15 } // about
    else if (p < 2.5) { x = m ? 0 : -w * 0.35; y = m ? 1.4 : 0; s = m ? 0.35 : 0.55 }   // what I do
    g.position.x = damp(g.position.x, x, 5, dt)
    g.position.y = damp(g.position.y, y, 5, dt)
    const sc = damp(g.scale.x, s, 5, dt)
    g.scale.setScalar(sc); g.visible = sc > 0.01
    g.rotation.y = damp(g.rotation.y, pointer.x * 0.5, 5, dt)
    g.rotation.x = damp(g.rotation.x, -pointer.y * 0.07, 5, dt)
  })
  return <group ref={ref}><primitive object={obj} scale={k} position={off} rotation-y={0.3} /></group>
}

function labelTexture(text, i) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256
  const x = c.getContext('2d')
  x.fillStyle = '#f1eef6'; x.fillRect(0, 0, 512, 256)
  x.fillStyle = ['#2563eb', '#15803d', '#7c3aed', '#111827', '#be185d', '#b45309'][i % 6]
  x.font = '700 56px Inter, Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'
  x.fillText(text, 128, 128); x.fillText(text, 384, 128)
  return new THREE.CanvasTexture(c)
}

/** Floating tech-stack spheres that bounce away from the cursor. */
function Spheres() {
  const group = useRef(), meshes = useRef([])
  const balls = useMemo(() => Array.from({ length: 24 }, (_, i) => ({
    r: 0.42 + Math.random() * 0.38,
    p: new THREE.Vector3((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 1.5),
    v: new THREE.Vector3((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, 0),
    s: (Math.random() - 0.5) * 0.01,
    tex: labelTexture(LABELS[i % LABELS.length], i),
  })), [])

  useFrame(({ viewport, pointer }, dt) => {
    const el = document.getElementById('tech'), r = el?.getBoundingClientRect()
    const show = r && r.top < innerHeight * 0.6 && r.bottom > innerHeight * 0.3
    const sc = damp(group.current.scale.x, show ? 1 : 0.001, 5, dt)
    group.current.scale.setScalar(sc); group.current.visible = sc > 0.01
    if (!group.current.visible) return
    const w = viewport.width * 0.46, px = pointer.x * w, py = pointer.y * 3
    balls.forEach((b, i) => {
      b.p.add(b.v)
      const dx = b.p.x - px, dy = b.p.y - py, d = Math.hypot(dx, dy)
      if (d < 1.7 && d > 0) { b.v.x += (dx / d) * 0.006; b.v.y += (dy / d) * 0.006 }
      for (let j = i + 1; j < balls.length; j++) {
        const o = balls[j], ex = b.p.x - o.p.x, ey = b.p.y - o.p.y, l = Math.hypot(ex, ey), mn = b.r + o.r
        if (l < mn && l > 0) { const f = (mn - l) * 0.02; b.v.x += (ex / l) * f; b.v.y += (ey / l) * f; o.v.x -= (ex / l) * f; o.v.y -= (ey / l) * f }
      }
      b.v.multiplyScalar(0.985)
      if (b.v.length() < 0.006) b.v.x += (Math.random() - 0.5) * 0.002
      if (Math.abs(b.p.x) > w * 0.95) b.v.x -= Math.sign(b.p.x) * 0.01
      if (Math.abs(b.p.y) > 2.7) b.v.y -= Math.sign(b.p.y) * 0.01
      b.p.z *= 0.98
      const m = meshes.current[i]
      m.position.copy(b.p); m.rotation.y += b.s + 0.004
    })
  })

  return (
    <group ref={group} scale={0.001}>
      {balls.map((b, i) => (
        <mesh key={i} ref={(m) => (meshes.current[i] = m)}>
          <sphereGeometry args={[b.r, 32, 24]} />
          <meshStandardMaterial map={b.tex} roughness={0.35} />
        </mesh>
      ))}
    </group>
  )
}

export default function Scene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="glow absolute inset-0" />
      <Canvas camera={{ fov: 40, position: [0, 0, 9] }} dpr={[1, 2]} eventSource={document.documentElement} eventPrefix="client">
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 5]} intensity={0.9} />
        <pointLight position={[-3, 2, -3]} color="#a855f7" intensity={40} distance={22} />
        <pointLight position={[3, -1, -2]} color="#c084fc" intensity={25} distance={22} />
        <Character />
        <Spheres />
      </Canvas>
    </div>
  )
}
useGLTF.preload('/models/character.glb')
