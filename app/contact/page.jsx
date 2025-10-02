'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin } from 'lucide-react'
import styles from './contact.module.scss'

export default function ContactPage() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (!root.current) return
    const ctx = gsap.context(() => {
      gsap.set('[data-panel]', { opacity: 0, y: 24, scale: 0.98 })
      gsap.set('[data-fade]', { opacity: 0, y: 16 })
      gsap.set('[data-field]', { opacity: 0, y: 10 })
      gsap.set('[data-info]', { opacity: 0, x: 20 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } })
      tl.to('[data-panel]', { opacity: 1, y: 0, scale: 1 }, 0)
      tl.to('[data-fade]', { opacity: 1, y: 0, stagger: 0.06 }, 0.05)
      tl.to('[data-field]', { opacity: 1, y: 0, stagger: 0.04, duration: 0.5 }, 0.1)
      tl.to('[data-info]', { opacity: 1, x: 0, stagger: 0.08, duration: 0.5 }, 0.15)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={el => (root.current = el)} className="bg-black text-gray-100 px-6 md:px-10 lg:px-16 xl:px-24 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr]">
          <section data-panel className={`${styles.panel} rounded-2xl p-6 md:p-8`}>
            <h2 data-fade className="text-3xl md:text-4xl font-extrabold text-emerald-400">Let&apos;s work together</h2>
            <p data-fade className="mt-3 text-sm text-gray-400 max-w-prose">Tell me a bit about your project and I&apos;ll get back to you shortly.</p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input data-field placeholder="First name" className="h-11 rounded-lg bg-zinc-900/40 border-zinc-700/60 text-gray-100 placeholder:text-gray-500 focus-visible:ring-emerald-500" />
                <Input data-field placeholder="Last name" className="h-11 rounded-lg bg-zinc-900/40 border-zinc-700/60 text-gray-100 placeholder:text-gray-500 focus-visible:ring-emerald-500" />
                <Input data-field placeholder="Email" type="email" className="h-11 rounded-lg bg-zinc-900/40 border-zinc-700/60 text-gray-100 placeholder:text-gray-500 focus-visible:ring-emerald-500" />
                <Input data-field placeholder="Phone" className="h-11 rounded-lg bg-zinc-900/40 border-zinc-700/60 text-gray-100 placeholder:text-gray-500 focus-visible:ring-emerald-500" />
              </div>

              <Select>
                <SelectTrigger data-field className="h-11 rounded-lg bg-zinc-900/40 border-zinc-700/60 text-gray-100 focus:ring-emerald-500">
                  <SelectValue placeholder="Project type" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-700 text-gray-100">
                  <SelectItem value="web-dev">Web Development</SelectItem>
                  <SelectItem value="web-design">Web Design</SelectItem>
                  <SelectItem value="mobile">Mobile App</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                </SelectContent>
              </Select>

              <Textarea data-field placeholder="Project details" className="min-h-[140px] rounded-lg bg-zinc-900/40 border-zinc-700/60 text-gray-100 placeholder:text-gray-500 focus-visible:ring-emerald-500" />

              <Button data-fade className="rounded-full bg-emerald-500 text-black hover:bg-emerald-400 px-6">Send message</Button>
            </form>
          </section>

          <aside className="flex flex-col justify-center gap-8">
            <div data-info className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                <Phone className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="mt-1 font-medium tracking-wide">+8801644043487</div>
              </div>
            </div>

            <div data-info className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                <Mail className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="mt-1 font-medium tracking-wide">15203023amitgoswami@gmail.com</div>
              </div>
            </div>

            <div data-info className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                <MapPin className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Address</div>
                <div className="mt-1 font-medium tracking-wide">Shamoli Dhaka, Bangladesh</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
