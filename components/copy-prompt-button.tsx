'use client'

import { CheckIcon, CopyIcon } from './icons'
import { installPrompt } from '@/lib/install-prompt'
import { useEffect, useRef, useState } from 'react'

const COPIED_MS = 2000

const fade =
  'transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none'

const iconSwap =
  'absolute inset-0 transition-[opacity,scale] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none'

function copyWithSelection(text: string) {
  const area = document.createElement('textarea')
  area.value = text
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.left = '-9999px'
  document.body.appendChild(area)
  area.select()
  document.execCommand('copy')
  area.remove()
}

export function CopyPromptButton() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current != null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  function markCopied() {
    setCopied(true)
    if (timeoutRef.current != null) {
      window.clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopied(false)
      timeoutRef.current = null
    }, COPIED_MS)
  }

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(installPrompt)
    } catch {
      copyWithSelection(installPrompt)
    }
    markCopied()
  }

  return (
    <button
      type="button"
      onClick={() => {
        void onCopy()
      }}
      aria-live="polite"
      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-transparent bg-canvas-900 px-5 py-2.5 text-sm font-medium text-white transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-canvas-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas-900 active:scale-[0.97] dark:border-canvas-600 dark:bg-canvas-100 dark:text-canvas-900 dark:hover:bg-white dark:focus-visible:outline-white"
    >
      <span className="relative block h-4 w-4" aria-hidden="true">
        <span
          className={`${iconSwap} ${copied ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`}
        >
          <CopyIcon className="h-4 w-4" />
        </span>
        <span
          className={`${iconSwap} ${copied ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
        >
          <CheckIcon className="h-4 w-4" />
        </span>
      </span>
      <span className="grid">
        <span
          aria-hidden={copied}
          className={`col-start-1 row-start-1 ${fade} ${copied ? 'opacity-0' : 'opacity-100'}`}
        >
          Copy prompt
        </span>
        <span
          aria-hidden={!copied}
          className={`col-start-1 row-start-1 ${fade} ${copied ? 'opacity-100' : 'opacity-0'}`}
        >
          Copied
        </span>
      </span>
    </button>
  )
}
