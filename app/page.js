'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Download, Github, Linkedin, Youtube, Twitter, Menu, X } from 'lucide-react'
import styles from './hero.module.scss'
import me from './assets/assets/me.jpg'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 xl:px-24 bg-black">
      <section className="grid items-center gap-12 py-10 md:grid-cols-[1.1fr_1fr]">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-sm tracking-wide text-gray-400">Full-Stack Software Developer</p>
          <h1 className="text-5xl font-extrabold leading-[1.1] md:text-6xl xl:text-7xl">
            <span className="text-white">Hello I&apos;m </span><span className="text-emerald-400">Amit Kumar Goswami</span>
          </h1>
          <p className="mt-5 max-w-xl text-gray-300">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button className="rounded-full bg-emerald-500 text-black hover:bg-emerald-400 gap-2">
              <Download size={16} />
              Download CV
            </Button>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
                <Github className="h-4 w-4 text-emerald-400" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
                <Linkedin className="h-4 w-4 text-emerald-400" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
                <Youtube className="h-4 w-4 text-emerald-400" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
                <Twitter className="h-4 w-4 text-emerald-400" />
              </Button>
            </div>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4 text-white">
            <div><div className="text-4xl font-bold">6+</div><div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Years of experience</div></div>
            <div><div className="text-4xl font-bold">26</div><div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Projects completed</div></div>
            <div><div className="text-4xl font-bold">8</div><div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Technologies mastered</div></div>
            <div><div className="text-4xl font-bold">155</div><div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Code push into Github</div></div>
          </div>
        </div>

        <div className="order-1 flex items-center justify-center md:order-2">
          <div className={`relative mx-auto h-[320px] w-[320px] md:h-[420px] md:w-[420px] ${styles.neon}`}>
            <Image src={me} alt="Profile" fill priority className="rounded-full object-cover object-center" sizes="(max-width: 768px) 320px, 420px" />
          </div>
        </div>
      </section>
    </main>
  )
}
