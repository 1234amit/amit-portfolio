'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './work.module.scss'


const PROJECTS = [
  {
    no: '01',
    title: 'School quiz System',
    desc:
      'Welcome to the Online Quiz Application, a cutting-edge platform designed to revolutionize learning and assessment experiences for teachers and students alike. Developed using Django, Bootstrap, JavaScript, Sass, and HTML5, this application offers a dynamic and interactive environment for conducting quizzes, tests, and assessments online.',
    stack: ['Django', 'css', 'Javascript', 'Bootstrap'],
    image: '/projects/cila.png',          // ⬅ use the import
    live: 'https://cila-challenge.fr/',
    repo: '#',
  },
  {
    no: '02',
    title: 'Agency Website Development(Incofile Limited)',
    desc:
      'Our agency website project aimed to establish an online presence that showcases our services, expertise, and portfolio to potential clients Leveraging Django, Tailwind CSS, MySQL, and Sass, we crafted a dynamic and responsive website tailored to meet the needs of our agency and engage visitors effectively.',
    stack: ['Django', 'Tailwind', 'Mysql', "sass"],
    image: '/projects/kalu.PNG',         // ⬅
    live: 'https://incofile.com/',
    repo: '#',
  },
  {
    no: '03',
    title: 'Accessory Store Management System',
    desc:
      'Accessory store mangament system is a ecommerce website. i created by using django, mongodb, tailwind css, bootstrap',
    stack: ['django', 'mongodb', 'tailwind css'],
    image: '/projects/ecom.PNG',          // ⬅
    live: 'https://ecnavi.jp/',
    repo: '#',
  },
  {
    no: '04',
    title: 'Book selling Application',
    desc:
      'online marketplace is one of product selling website. it is created by using django, react js, react-bootstrap',
    stack: ['django', 'mongodb', 'react js', 'react-bootstrap'],
    image: '/projects/7-project.PNG',         // ⬅
    live: '#',
    repo: 'https://github.com/1234amit/OnlineMarketPlace',
  },
  {
    no: '05',
    title: 'Pos Application(Backend Project)',
    desc:
      'A full-featured Point of Sale (POS) application API developed using Spring Boot and PostgreSQL. This project provides core functionalities for managing products, handling sales transactions, generating invoices, and tracking customer and inventory data. It is designed with scalability and performance in mind, featuring secure REST APIs and database integration. Ideal for retail or business operations looking for a reliable POS backend system.',

    stack: ['Spring Boot', 'Postgrasql'],
    image: '/projects/8.png',         // ⬅
    live: '#',
    repo: 'https://github.com/1234amit/Pos-Application-using-React-and-Spring-Boot',
  },

  {
    no: '06',
    title: 'Note Application',
    desc:
      'NoteApp is a modern, full-stack note application built with Next.js (App Router) and NestJS, written end-to-end in TypeScript. It’s designed for speed, clarity, and focus—so you can capture ideas, organize them instantly, and get back to work without friction.',

    stack: ['Next js', 'Nest js'],
    image: '/projects/note.png',         // ⬅
    live: 'https://note-application-zeta.vercel.app/',
    repo: 'https://github.com/1234amit/note-application',
  },

   {
    no: '07',
    title: 'Job Portal',
    desc:
      'A full-featured Job portal application API developed using Spring Boot and PostgreSQL.',

    stack: ['Spring Boot', 'PostgreSql'],
    image: '/projects/1.png',         // ⬅
    live: '#',
    repo: 'https://github.com/1234amit/job-portal-backend',
  }

]

export default function WorkPage() {
  const [i, setI] = useState(0)
  const p = PROJECTS[i]
  const prev = () => setI(v => (v - 1 + PROJECTS.length) % PROJECTS.length)
  const next = () => setI(v => (v + 1) % PROJECTS.length)

  return (
    <main className="bg-black text-gray-100 px-6 md:px-10 lg:px-16 xl:px-24 py-12">
      <div className="mx-auto max-w-6xl grid items-center gap-10 md:grid-cols-2">
        {/* Left side – copy */}
        <section>
          <div className={styles.numBadge}>{p.no}</div>

          <h1 className={`${styles.blueBlock} mt-4 inline-block text-3xl md:text-4xl font-extrabold`}>
            {p.title}
          </h1>

          <p className={`${styles.blueBlock} mt-4 max-w-xl text-sm leading-relaxed`} style={{ textAlign: "justify" }}>
            {p.desc}
          </p>

          <p className={`${styles.blueBlock} mt-4 text-sm`}>
            {p.stack.join(', ')}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Link href={p.live} target="_blank" className={styles.circleBtn} aria-label="Open live project">
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <Link href={p.repo} target="_blank" className={styles.circleBtn} aria-label="Open GitHub repo">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Right side – image & controls */}

        <section className="relative">
          <div className="relative mx-auto w-full max-w-[720px] rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-emerald-500/10 ring-1 ring-white/10 backdrop-blur">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
              <Image
                src={p.image}
                alt={p.title}
                fill
                priority={i === 0}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 600px"
                quality={85}
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5 dark:ring-white/5" />
              <div className="pointer-events-none absolute -inset-6 blur-3xl bg-emerald-400/10" />
            </div>
          </div>

          <div className="absolute bottom-3 right-3 flex gap-2">
            <button onClick={prev} aria-label="Previous project" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/70 text-gray-900 backdrop-blur hover:bg-white dark:bg-gray-900/70 dark:text-gray-100 dark:hover:bg-gray-900">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next project" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-emerald-500 text-white hover:bg-emerald-400">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>

      </div>
    </main>
  )
}
