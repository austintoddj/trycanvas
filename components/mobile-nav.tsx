'use client'

import { useState } from 'react'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#install', label: 'Install' },
  {
    href: 'https://github.com/austintoddj/canvas',
    label: 'GitHub',
    external: true
  }
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(value => !value)}
        className="rounded-md px-2 py-1.5 text-[13px] font-medium text-canvas-600 dark:text-canvas-300"
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-canvas-200 bg-white px-6 py-4 dark:border-canvas-800 dark:bg-canvas-950"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-[15px] font-medium text-canvas-800 dark:text-canvas-100">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
