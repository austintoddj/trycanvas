'use client'

import { MoonIcon, SunIcon } from './icons'
import { useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

function getSnapshot(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function getServerSnapshot(): Theme {
  return 'light'
}

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })

  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const onMediaChange = () => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.toggle('dark', media.matches)
      onStoreChange()
    }
  }
  media.addEventListener('change', onMediaChange)

  return () => {
    observer.disconnect()
    media.removeEventListener('change', onMediaChange)
  }
}

export function ThemeToggle() {
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  function toggleTheme() {
    const next: Theme = document.documentElement.classList.contains('dark')
      ? 'light'
      : 'dark'
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-lg p-2 text-canvas-500 transition-colors hover:bg-canvas-100 hover:text-canvas-900 dark:hover:bg-canvas-800 dark:hover:text-white"
    >
      <SunIcon className="hidden h-[18px] w-[18px] dark:block" />
      <MoonIcon className="block h-[18px] w-[18px] dark:hidden" />
    </button>
  )
}
