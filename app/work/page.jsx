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
    image: '/projects/cila.PNG',          // ⬅ use the import
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
    title: '',
    desc:
      'online marketplace is one of product selling website. it is created by using django, react js, react-bootstrap',
    stack: ['django', 'mongodb', 'react js', 'react-bootstrap'],
    image: '/projects/7-project.PNG',         // ⬅
    live: '#',
    repo: 'https://github.com/1234amit/OnlineMarketPlace',
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

          <p className={`${styles.blueBlock} mt-4 max-w-xl text-sm leading-relaxed`}>
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
        <section className={styles.previewWrap}>
          <div className={styles.previewInner}>
            <Image
              src={p.image}
              alt={p.title}
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 90vw, 48vw"
              className="object-cover rounded-xl"
            />
          </div>

          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous project">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className={styles.navBtn} onClick={next} aria-label="Next project">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
