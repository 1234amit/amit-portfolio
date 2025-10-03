'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Briefcase, Award, HeartHandshake, Download } from 'lucide-react'
import styles from './about.module.scss'
import me from '../assets/assets/me.jpg'

const FRONTEND = ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Sass']
const BACKEND = ['Node.js', 'Express.js', 'Java (Spring Boot)', 'C# (ASP.NET)']
const DATABASES = ['MySQL', 'MongoDB', 'PostgreSQL']
const TOOLS = ['Git', 'Docker']

export default function AboutPage() {
  const root = useRef(null)
  const portrait = useRef(null)

  useLayoutEffect(() => {
    if (!root.current) return
    const ctx = gsap.context(() => {
      gsap.set('[data-fade]', { opacity: 0, y: 20 })
      gsap.set('[data-chip]', { opacity: 0, y: 10 })
      gsap.set('[data-panel]', { opacity: 0, y: 24, scale: 0.98 })
      gsap.set('[data-timeline]>div', { opacity: 0, x: -12 })
      gsap.set(portrait.current, { opacity: 0, scale: 0.94, rotate: -2 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
      tl.to(portrait.current, { opacity: 1, scale: 1, rotate: 0 }, 0)
      tl.to('[data-fade]', { opacity: 1, y: 0, stagger: 0.08 }, 0.05)
      tl.to('[data-panel]', { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6 }, 0.1)
      tl.to('[data-chip]', { opacity: 1, y: 0, stagger: 0.03, duration: 0.4 }, 0.2)
      tl.to('[data-timeline]>div', { opacity: 1, x: 0, stagger: 0.08, duration: 0.5 }, 0.25)
      gsap.to(portrait.current, { scale: 1.02, duration: 1.6, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={el => (root.current = el)} className="bg-black text-gray-100 px-6 md:px-10 lg:px-16 xl:px-24 py-12">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-[1.05fr_.95fr]">
        <section>
          <p data-fade className="text-emerald-400 font-medium tracking-wider">Full-Stack Software Developer</p>
          <h1 data-fade className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">I design, build, and ship end-to-end web applications</h1>
          <p data-fade className="mt-4 max-w-prose text-gray-300">I build modern, fast, and scalable products across the stack. From accessible UIs in React/Next.js to robust APIs in Node, Spring Boot, or ASP.NET, and production-ready databases with MySQL, PostgreSQL, and MongoDB.</p>

          <ul data-fade className="mt-6 space-y-3">
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" /><span>Clean, responsive frontend with reusable components</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" /><span>Secure REST services, auth, and integrations</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" /><span>SQL and NoSQL data modeling, migrations, and performance</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" /><span>Git workflows and containerized delivery with Docker</span></li>
          </ul>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <StackCard title="Frontend" items={FRONTEND} />
            <StackCard title="Backend" items={BACKEND} />
            <StackCard title="Databases" items={DATABASES} />
            <StackCard title="Tools" items={TOOLS} />
          </div>

          <div data-fade className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="https://www.linkedin.com/in/amit-goswami1/">
              <Button className="rounded-full bg-emerald-500 text-black hover:bg-emerald-400 gap-2">
                <HeartHandshake className="h-4 w-4" />
                Work with me
              </Button>
            </Link>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 hover:text-black hover:bg-white gap-2"
            >
              <a href="/amitgoswami_new.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          
        </section>

        <aside className="flex flex-col items-center md:items-end">
          <div ref={el => (portrait.current = el)} className={`relative mx-auto h-[320px] w-[320px] md:h-[420px] md:w-[420px] ${styles.neon}`}>
            <Image src={me} alt="Profile" fill priority className="rounded-full object-cover object-center" sizes="(max-width:768px) 320px, 420px" />
          </div>
          <div data-panel className={`${styles.panel} mt-8 w-full max-w-sm rounded-2xl p-6`}>
            <div className="text-sm font-medium text-gray-300">Focus areas</div>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />Product-ready UI</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />API design and security</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />Database performance</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />DevOps-friendly delivery</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  )
}

function StackCard({ title, items }) {
  return (
    <div data-panel className={`${styles.panel} rounded-2xl p-5`}>
      <div className="text-sm font-medium text-gray-300">{title}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map(i => (
          <span data-chip key={i} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{i}</span>
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ title, meta, desc }) {
  return (
    <div>
      <div className="relative pl-6">
        <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-emerald-400" />
        <div className="font-medium">{title}</div>
        <div className="text-xs text-gray-400 mt-0.5">{meta}</div>
        <div className="text-sm text-gray-300 mt-1">{desc}</div>
      </div>
    </div>
  )
}
