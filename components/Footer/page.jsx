import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import styles from './footer.module.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={`bg-black text-gray-200 ${styles.glowTop}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 xl:px-24 py-12">

        <div className="mt-10 border-t border-emerald-500/20 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {year} Amit. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

function Social({ href, icon }) {
  return (
    <Link
      href={href}
      className="grid h-9 w-9 place-items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20"
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </Link>
  )
}

function Info({ icon, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
        {icon}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  )
}
