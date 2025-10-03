'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin, Youtube, Twitter } from 'lucide-react'
import styles from './hero.module.scss'
import me from './assets/assets/me.jpg'
import Link from 'next/link'

export default function HomePage() {
  const root = useRef(null)
  const imageWrap = useRef(null)

  useLayoutEffect(() => {
    if (!root.current) return
    const ctx = gsap.context(() => {
      gsap.set('[data-fade-up]', { y: 24, opacity: 0 })
      gsap.set('[data-stats]>div', { y: 16, opacity: 0 })
      gsap.set(imageWrap.current, { opacity: 0, scale: 0.94, rotate: -2 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
      tl.to(imageWrap.current, { opacity: 1, scale: 1, rotate: 0 }, 0)
      tl.to('[data-fade-up]', { y: 0, opacity: 1, stagger: 0.08 }, 0.05)
      tl.to('[data-stats]>div', { y: 0, opacity: 1, stagger: 0.06, duration: 0.6 }, 0.2)
      gsap.to(imageWrap.current, { scale: 1.02, duration: 1.6, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={el => (root.current = el)} className="px-6 md:px-10 lg:px-16 xl:px-24 bg-black">
      <section className="grid items-center gap-12 py-10 md:grid-cols-[1.1fr_1fr]">
        <div className="order-2 md:order-1">
          <p data-fade-up className="mb-3 text-sm tracking-wide text-gray-400">Full-Stack Software Developer</p>
          <h1 data-fade-up className="text-5xl font-extrabold leading-[1.1] md:text-6xl xl:text-7xl">
            <span className="text-white">Hello I&apos;m </span><span className="text-emerald-400">Amit Kumar Goswami</span>
          </h1>
          <p data-fade-up className="mt-5 max-w-xl text-gray-300">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
          <div data-fade-up className="mt-8 flex flex-wrap items-center gap-4">
            <Button className="rounded-full bg-emerald-500 text-black hover:bg-emerald-400 gap-2">
              <Download size={16} />
              <a href="/amitgoswami_new.pdf" download>Download CV</a>
            </Button>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
                <a href="https://github.com/1234amit"><Github className="h-4 w-4 text-emerald-400" /></a>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
                <a href="https://www.linkedin.com/in/amit-goswami1/"><Linkedin className="h-4 w-4 text-emerald-400" /></a>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
                <Youtube className="h-4 w-4 text-emerald-400" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
                <Twitter className="h-4 w-4 text-emerald-400" />
              </Button>
            </div>
          </div>
          <div data-stats className="mt-12 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4 text-white">
            <div><div className="text-4xl font-bold">6+</div><div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Years of experience</div></div>
            <div><div className="text-4xl font-bold">42</div><div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Projects completed</div></div>
            <div><div className="text-4xl font-bold">155</div><div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Code push into Github</div></div>
          </div>
        </div>
        <div className="order-1 flex items-center justify-center md:order-2">
          <div ref={imageWrap} className={`relative mx-auto h-[320px] w-[320px] md:h-[420px] md:w-[420px] ${styles.neon}`}>
            <Image src={me} alt="Profile" fill priority className="rounded-full object-cover object-center" sizes="(max-width: 768px) 320px, 420px" />
          </div>
        </div>
      </section>
    </main>
  )
}


// 'use client'

// import Image from 'next/image'
// import { useLayoutEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { Button } from '@/components/ui/button'
// import { Download, Github, Linkedin, Youtube, Twitter } from 'lucide-react'
// import styles from './hero.module.scss'
// import me from './assets/assets/me.jpg'
// import Link from 'next/link'

// export default function HomePage() {
//   const root = useRef(null)
//   const imageWrap = useRef(null)
//   const statsRef = useRef(null)
//   const countersStarted = useRef(false)

//   useLayoutEffect(() => {
//     if (!root.current) return
//     const ctx = gsap.context(() => {
//       gsap.set('[data-fade-up]', { y: 24, opacity: 0 })
//       gsap.set('[data-stats]>div', { y: 16, opacity: 0 })
//       gsap.set(imageWrap.current, { opacity: 0, scale: 0.94, rotate: -2 })

//       const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
//       tl.to(imageWrap.current, { opacity: 1, scale: 1, rotate: 0 }, 0)
//       tl.to('[data-fade-up]', { y: 0, opacity: 1, stagger: 0.08 }, 0.05)
//       tl.to('[data-stats]>div', { y: 0, opacity: 1, stagger: 0.06, duration: 0.6 }, 0.2)

//       // subtle breathing
//       gsap.to(imageWrap.current, { scale: 1.02, duration: 1.6, yoyo: true, repeat: -1, ease: 'sine.inOut' })
//     }, root)

//     // Counter animation (run once when stats enter view)
//     const runCounters = () => {
//       if (!statsRef.current) return
//       const els = Array.from(statsRef.current.querySelectorAll<HTMLElement>('[data-count]'))
//       els.forEach(el => {
//         const end = Number(el.dataset.count || '0')
//         const suffix = el.dataset.suffix ?? ''
//         const obj = { val: 0 }
//         gsap.to(obj, {
//           val: end,
//           duration: 1.2,
//           ease: 'power2.out',
//           onUpdate() {
//             const n = Math.floor(obj.val).toLocaleString()
//             el.textContent = `${n}${suffix}`
//           }
//         })
//       })
//     }

//     // Observe when the stats grid is visible
//     const io = new IntersectionObserver(
//       entries => {
//         const e = entries[0]
//         if (e.isIntersecting && !countersStarted.current) {
//           countersStarted.current = true
//           runCounters()
//         }
//       },
//       { threshold: 0.4 }
//     )
//     if (statsRef.current) io.observe(statsRef.current)

//     return () => {
//       ctx.revert()
//       io.disconnect()
//     }
//   }, [])

//   return (
//     <main ref={root} className="px-6 md:px-10 lg:px-16 xl:px-24 bg-black">
//       <section className="grid items-center gap-12 py-10 md:grid-cols-[1.1fr_1fr]">
//         <div className="order-2 md:order-1">
//           <p data-fade-up className="mb-3 text-sm tracking-wide text-gray-400">Full-Stack Software Developer</p>
//           <h1 data-fade-up className="text-5xl font-extrabold leading-[1.1] md:text-6xl xl:text-7xl">
//             <span className="text-white">Hello I&apos;m </span><span className="text-emerald-400">Amit Kumar Goswami</span>
//           </h1>
//           <p data-fade-up className="mt-5 max-w-xl text-gray-300">
//             I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
//           </p>

//           <div data-fade-up className="mt-8 flex flex-wrap items-center gap-4">
//             <Button className="rounded-full bg-emerald-500 text-black hover:bg-emerald-400 gap-2">
//               <Download size={16} />
//               <a href="/amitgoswami_new.pdf" download>Download CV</a>
//             </Button>
//             <div className="flex items-center gap-3">
//               <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
//                 <a href="https://github.com/1234amit"><Github className="h-4 w-4 text-emerald-400" /></a>
//               </Button>
//               <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
//                 <a href="https://www.linkedin.com/in/amit-goswami1/"><Linkedin className="h-4 w-4 text-emerald-400" /></a>
//               </Button>
//               <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
//                 <Youtube className="h-4 w-4 text-emerald-400" />
//               </Button>
//               <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent hover:bg-emerald-500/10">
//                 <Twitter className="h-4 w-4 text-emerald-400" />
//               </Button>
//             </div>
//           </div>

//           {/* Stats with counter spans */}
//           <div  ref={statsRef} data-stats className="mt-12 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4 text-white">
//             <div>
//               <div className="text-4xl font-bold">
//                 <span data-count="6" data-suffix="+">0</span>
//               </div>
//               <div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Years of experience</div>
//             </div>

//             <div>
//               <div className="text-4xl font-bold">
//                 <span data-count="42">0</span>
//               </div>
//               <div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Projects completed</div>
//             </div>

//             <div>
//               <div className="text-4xl font-bold">
//                 <span data-count="8">0</span>
//               </div>
//               <div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Technologies mastered</div>
//             </div>

//             <div>
//               <div className="text-4xl font-bold">
//                 <span data-count="155">0</span>
//               </div>
//               <div className="mt-1 text-xs uppercase tracking-wider text-gray-400">Code push into Github</div>
//             </div>
//           </div>
//         </div>

//         <div className="order-1 flex items-center justify-center md:order-2">
//           <div ref={imageWrap} className={`relative mx-auto h-[320px] w-[320px] md:h-[420px] md:w-[420px] ${styles.neon}`}>
//             <Image src={me} alt="Profile" fill priority className="rounded-full object-cover object-center" sizes="(max-width: 768px) 320px, 420px" />
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
