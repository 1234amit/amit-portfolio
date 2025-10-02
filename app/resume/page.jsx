'use client'

import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './resume.module.scss'

const EXPERIENCE = [
  { period: '2025 - 2025(September)', role: 'Full-Stack Developer', org: 'Webefo Limited' },
  { period: '2023-2025', role: 'Full stack Developer', org: 'THCOO inc', accent: true },
  { period: '2023 — 2024', role: 'Software Engineer(Backend)', org: 'Nextwift Solution' },
  { period: '2019 — 2023', role: 'Software Engineer', org: 'Best Tycon BD VIVO' }
]

const EDUCATION = [
  { period: '2015 — 2019', role: 'B.Sc. in Computer Science', org: 'International University of Business and Agriculture Technology', cgpa: '3.53(out of - 4)' },
  { period: '2011 — 2013', role: 'Higher Secondary (Science)', org: 'Faridpur Rajandro College', cgpa: '5(out of - 5)' }
]

const SKILLS = {
  Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Sass'],
  Backend: ['Node.js', 'Express.js', 'Java (Spring Boot)', 'C# (ASP.NET)'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
  Tools: ['Git', 'Docker']
}

export default function ResumePage() {
  const [tab, setTab] = useState('experience')
  const root = useRef(null)
  const content = useRef(null)

  useLayoutEffect(() => {
    if (!root.current) return
    const ctx = gsap.context(() => {
      gsap.set('[data-left]', { opacity: 0, y: 18 })
      gsap.set('[data-nav]>button', { opacity: 0, y: 12 })
      gsap.set('[data-head]', { opacity: 0, y: 16 })
      gsap.set('[data-card]', { opacity: 0, y: 20, scale: 0.98 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } })
      tl.to('[data-left]', { opacity: 1, y: 0, stagger: 0.06 }, 0)
      tl.to('[data-nav]>button', { opacity: 1, y: 0, stagger: 0.05 }, 0.05)
      tl.to('[data-head]', { opacity: 1, y: 0, stagger: 0.06 }, 0.1)
      tl.to('[data-card]', { opacity: 1, y: 0, scale: 1, stagger: 0.06 }, 0.15)
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!content.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-card]', { opacity: 0, y: 18, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.06 })
      gsap.fromTo('[data-chip]', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.02 })
    }, content)
    return () => ctx.revert()
  }, [tab])

  return (
    <main ref={el => (root.current = el)} className="bg-black text-gray-100 px-6 md:px-10 lg:px-16 xl:px-24 py-12">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <section>
          <h1 data-left className="text-4xl md:text-5xl font-extrabold tracking-tight">Why hire me?</h1>
          <p data-left className="mt-3 max-w-prose text-sm text-gray-400">I design, build, and ship production-ready web apps with clean code, strong UX, and a focus on performance.</p>
          <div data-nav className="mt-6 space-y-3">
            <NavBtn active={tab==='experience'} onClick={() => setTab('experience')}>Experience</NavBtn>
            <NavBtn active={tab==='education'} onClick={() => setTab('education')}>Education</NavBtn>
            <NavBtn active={tab==='skills'} onClick={() => setTab('skills')}>Skills</NavBtn>
          </div>
        </section>

        <section ref={content}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 data-head className="text-3xl md:text-4xl font-extrabold">
                {tab === 'experience' && 'My experience'}
                {tab === 'education' && 'My education'}
                {tab === 'skills' && 'My skills'}
              </h2>
              <p data-head className="mt-2 text-sm text-gray-400 max-w-prose">Scelerisque consequat, faucibus et, et. Built with modern tools and best practices.</p>
            </div>
          </div>

          {tab === 'experience' && (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {EXPERIENCE.map((item, i) => (
                <ResumeCard key={i} period={item.period} role={item.role} lines={[item.org]} accent={item.accent} />
              ))}
            </div>
          )}

          {tab === 'education' && (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {EDUCATION.map((item, i) => (
                <ResumeCard key={i} period={item.period} role={item.role} lines={[item.org, item.cgpa]} />
              ))}
            </div>
          )}

          {tab === 'skills' && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {Object.entries(SKILLS).map(([group, list]) => (
                <div data-card key={group} className={`${styles.panel} rounded-2xl p-5`}>
                  <div className="text-sm font-medium text-gray-300">{group}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {list.map(s => (
                      <span data-chip key={s} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

function NavBtn({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={[
        'w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors',
        active ? 'bg-emerald-500 text-black' : 'bg-zinc-900/60 text-gray-300 hover:bg-zinc-900'
      ].join(' ')}
    >
      {children}
    </button>
  )
}

function ResumeCard({ period, role, lines = [], accent }) {
  return (
    <article data-card className={`${styles.card} ${accent ? styles.rightAccent : ''} rounded-2xl p-5`}>
      <div className="text-emerald-400 text-xs font-semibold">{period}</div>
      <h3 className="mt-2 text-lg font-semibold">{role}</h3>
      {lines.map((text, i) =>
        text ? (
          <div key={i} className="mt-3 flex items-center gap-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {text}
          </div>
        ) : null
      )}
    </article>
  )
}
