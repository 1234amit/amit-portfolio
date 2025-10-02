'use client'

import { useState } from 'react'
import styles from './resume.module.scss'

const EXPERIENCE = [
  {
    period: '2025 - 2025(September)',
    role: 'Full-Stack Developer',
    org: 'Webefo Limited',
  },
  {
    period: '2023-2025',
    role: 'Full stack Developer',
    org: 'THCOO inc',
    accent: true, // green right bar (like the screenshot)
  },
  {
    period: '2023 — 2024',
    role: 'Software Engineer(Backend)',
    org: 'Nextwift Solution'
  },
  {
    period: '2019 — 2023',
    role: 'Software Engineer',
    org: 'Best Tycon BD VIVO'
  }
]

const EDUCATION = [
  { period: '2015 — 2019', role: 'B.Sc. in Computer Science', org: 'International University of Business and Agriculture Technology', cgpa: '3.53(out of - 4)' },
  { period: '2011 — 2013', role: 'Higher Secondary (Science)', org: 'Faridpur Rajandro College', cgpa: '5(out of - 5)' },
]

const SKILLS = {
  Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Sass'],
  Backend: ['Node.js', 'Express.js', 'Java (Spring Boot)', 'C# (ASP.NET)'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
  Tools: ['Git', 'Docker']
}

export default function ResumePage() {
  const [tab, setTab] = useState('experience')

  return (
    <main className="bg-black text-gray-100 px-6 md:px-10 lg:px-16 xl:px-24 py-12">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT */}
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Why hire me?</h1>
          <p className="mt-3 max-w-prose text-sm text-gray-400">
            I design, build, and ship production-ready web apps with clean code, strong UX,
            and a focus on performance.
          </p>

          <div className="mt-6 space-y-3">
            <NavBtn active={tab==='experience'} onClick={() => setTab('experience')}>Experience</NavBtn>
            <NavBtn active={tab==='education'} onClick={() => setTab('education')}>Education</NavBtn>
            <NavBtn active={tab==='skills'} onClick={() => setTab('skills')}>Skills</NavBtn>
            {/* <NavBtn active={tab==='about'} onClick={() => setTab('about')}>About me</NavBtn> */}
          </div>
        </section>

        {/* RIGHT */}
        <section>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                {tab === 'experience' && 'My experience'}
                {tab === 'education' && 'My education'}
                {tab === 'skills' && 'My skills'}
                {/* {tab === 'about' && 'About me'} */}
              </h2>
              <p className="mt-2 text-sm text-gray-400 max-w-prose">
                Scelerisque consequat, faucibus et, et. Built with modern tools and best practices.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          {tab === 'experience' && (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {EXPERIENCE.map((item, i) => (
                <ResumeCard key={i} {...item} />
              ))}
            </div>
          )}

          {tab === 'education' && (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {EDUCATION.map((item, i) => (
                <ResumeCard key={i} {...item} />
              ))}
            </div>
          )}

          {tab === 'skills' && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {Object.entries(SKILLS).map(([group, list]) => (
                <div key={group} className={`${styles.panel} rounded-2xl p-5`}>
                  <div className="text-sm font-medium text-gray-300">{group}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {list.map((s) => (
                      <span key={s} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* {tab === 'about' && (
            <div className={`${styles.panel} mt-6 rounded-2xl p-6`}>
              <p className="text-gray-300">
                I am a full-stack developer who enjoys building reliable products. I focus on
                developer experience, code quality, and scalability. I love collaborating with
                design and product to deliver outcomes that users value.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Accessible, responsive UI
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Clean APIs & data models
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Performance & DX minded
                </li>
              </ul>
            </div>
          )} */}
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
        active
          ? 'bg-emerald-500 text-black'
          : 'bg-zinc-900/60 text-gray-300 hover:bg-zinc-900'
      ].join(' ')}
    >
      {children}
    </button>
  )
}

function ResumeCard({ period, role, lines = [], accent }) {
  return (
    <article className={`${styles.card} ${accent ? styles.rightAccent : ''} rounded-2xl p-5`}>
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

// Usage
{EXPERIENCE.map((e, i) => (
  <ResumeCard key={i} period={e.period} role={e.role} lines={[e.org]} accent={e.accent} />
))}
{EDUCATION.map((e, i) => (
  <ResumeCard key={i} period={e.period} role={e.role} lines={[e.org, e.cgpa]} />
))}

