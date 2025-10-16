'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

const Navber = () => {
  const pathname = usePathname()
  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href))
  const linkCls = (href) =>
    isActive(href)
      ? 'relative text-emerald-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-6 after:bg-emerald-400'
      : 'text-gray-300 hover:text-white'

  return (
    <div className="px-6 md:px-10 lg:px-16 xl:px-24 bg-black">
      <header className="flex items-center justify-between py-6">
        <div className="text-2xl font-extrabold tracking-tight text-white">
          <Link href="/">Amit<span className="text-emerald-400">.</span></Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link className={linkCls('/')} href="/">Home</Link>
          <Link className={linkCls('/about')} href="/about">About</Link>
          <Link className={linkCls('/services')} href="/services">Services</Link>
          <Link className={linkCls('/resume')} href="/resume">Resume</Link>
          <Link className={linkCls('/work')} href="/work">Work</Link>
          <Link className={linkCls('/theme')} href="/theme">Theme</Link>
          <Link className={linkCls('/contact')} href="/contact">Contact</Link>
          <Link href="/contact">
            <Button className="ml-4 rounded-full bg-emerald-500 text-black hover:bg-emerald-400">Hire me</Button>
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="rounded-full border-emerald-500/40 bg-transparent">
                <Menu className="h-5 w-5 text-emerald-400" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-black text-gray-100 border-emerald-500/20 p-0" aria-describedby={undefined}>
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>

              <SheetClose asChild>
                <button aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full hover:bg-emerald-500/10">
                  <X className="h-5 w-5 text-emerald-400" />
                </button>
              </SheetClose>

              <div className="h-full flex flex-col items-center justify-center gap-10 px-6">
                <ul className="w-full space-y-8 text-center text-xl">
                  <li><SheetClose asChild><Link href="/" className={linkCls('/')}>Home</Link></SheetClose></li>
                  <li><SheetClose asChild><Link href="/about" className={linkCls('/about')}>About</Link>
                  </SheetClose></li>
                  <li><SheetClose asChild><Link href="/services" className={linkCls('/services')}>Services</Link></SheetClose></li>
                  <li><SheetClose asChild><Link href="/resume" className={linkCls('/resume')}>Resume</Link></SheetClose></li>
                  <li><SheetClose asChild><Link href="/work" className={linkCls('/work')}>Work</Link></SheetClose></li>
                  <li><SheetClose asChild><Link href="/contact" className={linkCls('/contact')}>Contact</Link></SheetClose></li>
                </ul>
                <SheetClose asChild>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full rounded-full bg-emerald-500 text-black hover:bg-emerald-400">Hire me</Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}

export default Navber
