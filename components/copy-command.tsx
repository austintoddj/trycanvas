'use client'

import { useEffect, useRef, useState } from 'react'

type CopyCommandProps = {
  command: string
}

const fade =
  'col-start-1 row-start-1 transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none'

export function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current != null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(command)
    } catch {
      const area = document.createElement('textarea')
      area.value = command
      area.setAttribute('readonly', '')
      area.style.position = 'fixed'
      area.style.left = '-9999px'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      area.remove()
    }

    setCopied(true)
    if (timeoutRef.current != null) {
      window.clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopied(false)
      timeoutRef.current = null
    }, 2000)
  }

  return (
    <div className="flex items-center justify-between gap-3 border-b border-canvas-200 py-2 dark:border-canvas-800">
      <code className="min-w-0 truncate font-mono text-[13px] text-canvas-800 dark:text-canvas-100">
        {command}
      </code>
      <button
        type="button"
        onClick={() => {
          void onCopy()
        }}
        className="shrink-0 rounded-md px-2 py-1 text-[13px] font-medium text-canvas-600 transition-colors hover:text-canvas-900 dark:text-canvas-300 dark:hover:text-white"
      >
        <span className="grid">
          <span
            aria-hidden={copied}
            className={`${fade} ${copied ? 'opacity-0' : 'opacity-100'}`}
          >
            Copy
          </span>
          <span
            aria-hidden={!copied}
            className={`${fade} ${copied ? 'opacity-100' : 'opacity-0'}`}
          >
            Copied
          </span>
        </span>
      </button>
    </div>
  )
}
