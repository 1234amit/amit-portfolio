"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./theme.module.scss"
import theme1 from "../../public/themeone.png"

gsap.registerPlugin(ScrollTrigger)

const DATA = [
  { id: "t1", name: "ByteWorks(Company Website)", slug: "aster-portfolio", image: theme1, tags: ["Portfolio","Creative"], price: 15, rating: 4.8 },
]

const allTags = Array.from(new Set(DATA.flatMap(i => i.tags))).sort()
const sorters = [
  { key: "featured", label: "Featured" },
  { key: "price_asc", label: "Price: Low → High" },
  { key: "price_desc", label: "Price: High → Low" },
  { key: "rating_desc", label: "Rating: High → Low" }
]

function ThemeCard({ item }) {
  const cardRef = useRef(null)
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const tl = gsap.timeline({ paused: true })
    tl.to(el, { y: -6, duration: 0.25, ease: "power2.out" })
    tl.to(el.querySelector("[data-img]"), { scale: 1.04, duration: 0.25, ease: "power2.out" }, "<")
    const onEnter = () => tl.play()
    const onLeave = () => tl.reverse()
    el.addEventListener("mouseenter", onEnter)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mouseenter", onEnter)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [])
  return (
    <div ref={cardRef} data-card className={`group rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden backdrop-blur ${styles.card}`}>
      <div className={`relative aspect-[16/10] overflow-hidden ${styles.screenshotBg}`}>

       <Image
            src={item.image}
            alt={item.name}
            fill
            quality={85}
            priority
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-contain"
            data-img
          />


        <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs" style={{marginTop:"40px"}}>{item.rating.toFixed(1)}★</div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="shrink-0 rounded-lg bg-emerald-500/10 px-2 py-1 text-emerald-300 text-sm">${item.price}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map(t => (
            <span key={t} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Link href="https://first-react-theme.vercel.app/" className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-3 py-2 text-sm font-medium text-white hover:bg-sky-400 transition">Preview</Link>
          <Link href="https://www.linkedin.com/in/amit-goswami1/" className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800 transition">Buy</Link>
        </div>
      </div>
    </div>
  )
}

export default function ThemePage() {
  const [q, setQ] = useState("")
  const [tag, setTag] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const wrapRef = useRef(null)

  const list = useMemo(() => {
    let items = DATA.filter(i => i.name.toLowerCase().includes(q.toLowerCase()) || i.tags.some(t => t.toLowerCase().includes(q.toLowerCase())))
    if (tag) items = items.filter(i => i.tags.includes(tag))
    if (sortBy === "price_asc") items = [...items].sort((a,b)=>a.price-b.price)
    if (sortBy === "price_desc") items = [...items].sort((a,b)=>b.price-a.price)
    if (sortBy === "rating_desc") items = [...items].sort((a,b)=>b.rating-a.rating)
    return items
  }, [q, tag, sortBy])

  useEffect(() => {
    const container = wrapRef.current
    const cards = container ? container.querySelectorAll("[data-card]") : []
    gsap.fromTo(cards, { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "power2.out", scrollTrigger: { trigger: container, start: "top 80%" } })
  }, [list.length])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-6 md:px-10 lg:px-16 xl:px-24 py-12">
      <section className="container mx-auto px-4 py-14">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className={`text-3xl md:text-4xl font-semibold tracking-tight ${styles.glow}`}>All Themes</h1>
            <p className="text-slate-300 mt-2">Please check the themes and if you want to buy please contact me.</p>
          </div>
          {/* <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <div className="relative w-full sm:w-60">
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search themes" className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 outline-none ring-0 focus:border-slate-500" />
            </div>
            <select value={tag} onChange={e=>setTag(e.target.value)} className="w-full sm:w-44 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2">
              <option value="">All categories</option>
              {allTags.map(t=>(<option key={t} value={t}>{t}</option>))}
            </select>
            <select value={sortBy} onChange={e=>setSortBy(e.target.value)} className="w-full sm:w-48 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2">
              {sorters.map(s=>(<option key={s.key} value={s.key}>{s.label}</option>))}
            </select>
          </div> */}
        </div>
        <div ref={wrapRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {list.map(item => (<ThemeCard key={item.id} item={item} />))}
        </div>
      </section>
    </main>
  )
}
