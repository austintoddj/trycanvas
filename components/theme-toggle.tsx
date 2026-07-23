'use client'

import { MoonIcon, SunIcon } from './icons'
import { useEffect, useSyncExternalStore } from 'react'

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

  return () => {
    observer.disconnect()
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function ThemeToggle() {
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  // Follow OS preference until the visitor explicitly chooses a theme.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    function onSystemThemeChange(event: MediaQueryListEvent) {
      if (localStorage.getItem('theme')) return
      applyTheme(event.matches ? 'dark' : 'light')
    }

    media.addEventListener('change', onSystemThemeChange)
    return () => media.removeEventListener('change', onSystemThemeChange)
  }, [])

  function toggleTheme() {
    const next: Theme = document.documentElement.classList.contains('dark')
      ? 'light'
      : 'dark'
    localStorage.setItem('theme', next)
    applyTheme(next)
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
