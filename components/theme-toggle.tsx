'use client'

import { MoonIcon, SunIcon } from './icons'
import { useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

const iconTransition =
  'absolute inset-0 transition-[opacity,rotate,scale] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none'

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
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const otherTheme = theme === 'dark' ? 'light' : 'dark'

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
      aria-label={`Switch to ${otherTheme} theme`}
      className="group cursor-pointer rounded-md p-1.5 text-canvas-500 transition-colors hover:text-canvas-900 dark:text-canvas-400 dark:hover:text-canvas-100"
    >
      <span className="relative block h-5 w-5">
        <span
          data-theme-icon="sun"
          className={`${iconTransition} scale-100 rotate-0 opacity-100 dark:scale-50 dark:rotate-90 dark:opacity-0`}
          aria-hidden="true"
        >
          <SunIcon className="h-5 w-5 fill-canvas-100 stroke-canvas-500 transition-colors group-hover:stroke-canvas-700" />
        </span>
        <span
          data-theme-icon="moon"
          className={`${iconTransition} scale-50 -rotate-90 opacity-0 dark:scale-100 dark:rotate-0 dark:opacity-100`}
          aria-hidden="true"
        >
          <MoonIcon className="h-5 w-5 fill-canvas-700 stroke-canvas-500 transition-colors group-hover:stroke-canvas-300" />
        </span>
      </span>
    </button>
  )
}
