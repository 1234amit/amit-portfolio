'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MonitorSmartphone, Server, ShoppingCart, Database, Gauge, Wrench, Rocket } from 'lucide-react'
import styles from './services.module.scss'

const services = [
  { title: 'Web App Development', desc: 'Responsive, accessible UIs with React and Next.js, styled with Tailwind/Sass.', points: ['Next.js', 'React', 'Tailwind CSS', 'Sass'], Icon: MonitorSmartphone },
  { title: 'Backend APIs', desc: 'Secure REST services, auth, and integrations built for scale.', points: ['Node.js', 'Express.js', 'Spring Boot', 'ASP.NET'], Icon: Server },
  { title: 'E-commerce', desc: 'Checkout flows, product catalogs, carts, and payments.', points: ['Stripe', 'Checkout', 'Cart', 'Admin'], Icon: ShoppingCart },
  { title: 'Data & Databases', desc: 'Schema design, migrations, indexing, and optimization.', points: ['MySQL', 'PostgreSQL', 'MongoDB', 'Prisma/ORM'], Icon: Database },
  { title: 'Performance & SEO', desc: 'Core Web Vitals, image strategy, caching, and metadata.', points: ['Lighthouse', 'Images/CDN', 'Caching', 'SEO'], Icon: Gauge },
  { title: 'DevOps & Docker', desc: 'Containerized apps with sensible CI/CD-ready structure.', points: ['Docker', 'Git', 'Envs', 'Observability'], Icon: Wrench }
]

const plans = [
  { name: 'Starter', price: '$799', tagline: 'Landing or small MVP', features: ['1 page or small MVP', 'Basic SEO', 'Deploy ready', 'Support 1 week'], cta: 'Get Starter' },
  { name: 'Growth', price: '$1,999', tagline: 'Multi-page, API, auth', features: ['Up to 6 pages', 'Auth + API', 'DB setup', 'Support 1 month'], cta: 'Choose Growth' },
  { name: 'Scale', price: '$3,999', tagline: 'Custom features at scale', features: ['Custom UI system', 'Advanced API', 'Perf + analytics', 'Support 2 months'], cta: 'Scale with me' }
]

export default function ServicesPage() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (!root.current) return
    const ctx = gsap.context(() => {
      gsap.set('[data-hero]>*', { opacity: 0, y: 18 })
      gsap.set('[data-service]', { opacity: 0, y: 20, scale: 0.98 })
      gsap.set('[data-chip]', { opacity: 0, y: 8 })
      gsap.set('[data-step]', { opacity: 0, x: -16 })
      gsap.set('[data-delivery]>li', { opacity: 0, x: 16 })
      gsap.set('[data-pricecard]', { opacity: 0, y: 22, scale: 0.98 })
      gsap.set('[data-cta]', { opacity: 0, y: 16 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } })
      tl.to('[data-hero]>*', { opacity: 1, y: 0, stagger: 0.06 }, 0)
      tl.to('[data-service]', { opacity: 1, y: 0, scale: 1, stagger: 0.07 }, 0.05)
      tl.to('[data-chip]', { opacity: 1, y: 0, stagger: 0.02, duration: 0.4 }, 0.12)
      tl.to('[data-step]', { opacity: 1, x: 0, stagger: 0.08, duration: 0.5 }, 0.14)
      tl.to('[data-delivery]>li', { opacity: 1, x: 0, stagger: 0.06, duration: 0.5 }, 0.18)
      tl.to('[data-pricecard]', { opacity: 1, y: 0, scale: 1, stagger: 0.08 }, 0.22)
      tl.to('[data-cta]', { opacity: 1, y: 0 }, 0.26)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={el => (root.current = el)} className="bg-black text-gray-100 px-6 md:px-10 lg:px-16 xl:px-24 py-12">
      <section className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-6">
          <div data-hero>
            <p className="text-emerald-400 font-medium tracking-wider">Services</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">Everything you need to launch and scale</h1>
            <p className="mt-4 max-w-prose text-gray-300">Full-stack delivery across frontend, backend, data, and DevOps. Production-ready, maintainable, and fast.</p>
          </div>
          <div className="hidden sm:block">
            <div className={`${styles.heroGlow} h-24 w-24 rounded-full`} />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <div data-service key={s.title} className={`${styles.panel} rounded-2xl p-6`}>
              <div className="flex items-center gap-3">
                <s.Icon className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-300">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.points.map(p => (
                  <span data-chip key={p} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className={`${styles.panel} rounded-2xl p-6`}>
            <h2 className="text-xl font-semibold">Process</h2>
            <div className="mt-6 grid gap-6">
              <Step n="01" title="Discover" text="Goals, constraints, and success metrics." />
              <Step n="02" title="Design" text="Wireframes, UI patterns, and data models." />
              <Step n="03" title="Build" text="Incremental delivery with clean code." />
              <Step n="04" title="Launch" text="Deploy, monitor, and iterate." />
            </div>
          </div>

          <div className={`${styles.panel} rounded-2xl p-6`}>
            <h2 className="text-xl font-semibold">Delivery</h2>
            <ul data-delivery className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Clean repo with Git workflows</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Dockerized services where appropriate</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Performance budgets and checks</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Docs and handover session</li>
            </ul>
            <div className="mt-6">
              <Link href="/contact">
                <Button className="rounded-full bg-emerald-500 text-black hover:bg-emerald-400 gap-2">
                  <Rocket className="h-4 w-4" />
                  Start a project
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-extrabold">Pricing</h2>
          <p className="mt-2 text-sm text-gray-400">Fixed scopes that can be tailored to your needs.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {plans.map(p => (
              <div data-pricecard key={p.name} className={`${styles.panel} rounded-2xl p-6 flex flex-col`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="text-emerald-400 font-bold">{p.price}</div>
                </div>
                <div className="mt-1 text-xs text-gray-400">{p.tagline}</div>
                <ul className="mt-5 space-y-3 text-sm">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />{f}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button className="w-full rounded-full bg-emerald-500 text-black hover:bg-emerald-400">{p.cta}</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-cta className={`${styles.cta} mt-16 rounded-2xl p-6 flex flex-col items-center justify-center text-center`}>
          <h3 className="text-xl font-semibold">Have a brief ready</h3>
          <p className="mt-1 text-sm text-gray-300">Send details and I will reply with scope and timeline.</p>
          <Link href="/contact" className="mt-4">
            <Button className="rounded-full bg-emerald-500 text-black hover:bg-emerald-400">Contact me</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

function Step({ n, title, text }) {
  return (
    <div data-step className="relative rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
      <div className="text-emerald-400 text-xs font-semibold">{n}</div>
      <div className="mt-1 font-medium">{title}</div>
      <div className="text-sm text-gray-300">{text}</div>
    </div>
  )
}
