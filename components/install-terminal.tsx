'use client'

import { ReplayIcon } from './icons'
import {
  type TerminalLine,
  getCompletedTerminalLines,
  installScript
} from '@/lib/install-script'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore
} from 'react'

const CHAR_MS = 30
const AFTER_COMMAND_MS = 280
const OUTPUT_LINE_MS = 55
const BETWEEN_STEPS_MS = 450
const COMMENT_MS = 200

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  media.addEventListener('change', onStoreChange)
  return () => media.removeEventListener('change', onStoreChange)
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  )
}

function wait(ms: number, isActive: () => boolean) {
  return new Promise<void>(resolve => {
    if (!isActive()) {
      resolve()
      return
    }
    window.setTimeout(resolve, ms)
  })
}

export function InstallTerminal() {
  const reducedMotion = usePrefersReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const runIdRef = useRef(0)
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [status, setStatus] = useState<'idle' | 'playing' | 'complete'>('idle')
  const [showCursor, setShowCursor] = useState(false)

  const displayLines = reducedMotion ? getCompletedTerminalLines() : lines
  const displayStatus = reducedMotion ? 'complete' : status
  const displayCursor = reducedMotion ? false : showCursor

  useEffect(() => {
    const body = bodyRef.current
    if (!body) return
    body.scrollTop = body.scrollHeight
  }, [displayLines, displayCursor, displayStatus])

  const runAnimation = useCallback(async () => {
    const runId = ++runIdRef.current
    const isActive = () => runIdRef.current === runId

    setLines([])
    setStatus('playing')
    setShowCursor(true)

    for (const step of installScript) {
      if (!isActive()) return

      if (step.kind === 'comment') {
        setShowCursor(false)
        setLines(prev => [...prev, { type: 'comment', text: step.text }])
        await wait(COMMENT_MS, isActive)
        continue
      }

      setShowCursor(true)
      setLines(prev => [...prev, { type: 'command', text: '' }])

      for (let i = 1; i <= step.input.length; i++) {
        if (!isActive()) return
        const partial = step.input.slice(0, i)
        setLines(prev => {
          const next = [...prev]
          next[next.length - 1] = { type: 'command', text: partial }
          return next
        })
        await wait(CHAR_MS, isActive)
      }

      await wait(AFTER_COMMAND_MS, isActive)
      if (!isActive()) return

      if (step.output?.length) {
        setShowCursor(false)
        for (const text of step.output) {
          if (!isActive()) return
          setLines(prev => [...prev, { type: 'output', text }])
          await wait(OUTPUT_LINE_MS, isActive)
        }
      }

      await wait(BETWEEN_STEPS_MS, isActive)
    }

    if (!isActive()) return
    setShowCursor(false)
    setStatus('complete')
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      runIdRef.current += 1
      return
    }

    const node = containerRef.current
    if (!node) return

    let started = false
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (!entry?.isIntersecting || started) return
        started = true
        observer.disconnect()
        void runAnimation()
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      runIdRef.current += 1
    }
  }, [reducedMotion, runAnimation])

  function handleReplay() {
    if (reducedMotion) return
    void runAnimation()
  }

  return (
    <div
      ref={containerRef}
      className="flex h-[22rem] flex-col overflow-hidden rounded-xl border border-canvas-200 bg-white shadow-sm sm:h-[24rem] sm:rounded-2xl dark:border-canvas-800 dark:bg-canvas-950"
    >
      <div className="flex shrink-0 items-center gap-1.5 border-b border-canvas-100 bg-canvas-50/80 px-2.5 py-1.5 sm:gap-2 sm:px-4 sm:py-2.5 dark:border-canvas-800 dark:bg-canvas-900/50">
        <div className="flex gap-1 sm:gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-canvas-300 sm:h-2.5 sm:w-2.5 dark:bg-canvas-700" />
          <div className="h-1.5 w-1.5 rounded-full bg-canvas-300 sm:h-2.5 sm:w-2.5 dark:bg-canvas-700" />
          <div className="h-1.5 w-1.5 rounded-full bg-canvas-300 sm:h-2.5 sm:w-2.5 dark:bg-canvas-700" />
        </div>
        <span className="ml-1 text-[11px] font-medium text-canvas-500 sm:ml-2 sm:text-[12px]">
          terminal
        </span>
        {!reducedMotion && (
          <button
            type="button"
            onClick={handleReplay}
            aria-label="Replay animation"
            tabIndex={displayStatus === 'complete' ? 0 : -1}
            aria-hidden={displayStatus !== 'complete'}
            disabled={displayStatus !== 'complete'}
            className={`ml-auto inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-[11px] font-medium text-canvas-400 transition-all duration-300 hover:bg-canvas-200/60 hover:text-canvas-700 sm:gap-1.5 sm:px-2 sm:py-1 sm:text-[12px] dark:hover:bg-canvas-800 dark:hover:text-canvas-200 ${
              displayStatus === 'complete'
                ? 'pointer-events-auto opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            <ReplayIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Replay
          </button>
        )}
      </div>

      <div
        ref={bodyRef}
        className="code-block min-h-0 flex-1 overflow-x-auto overflow-y-auto p-3 font-mono text-[12px] leading-relaxed sm:p-5 sm:text-[13px] md:p-6 md:text-[14px]"
        aria-live="polite"
      >
        <div className="space-y-0.5">
          {displayLines.map((line, index) => {
            const isLast = index === displayLines.length - 1
            const cursorHere =
              displayCursor && isLast && line.type === 'command'

            if (line.type === 'comment') {
              return (
                <div
                  key={index}
                  className={
                    index > 0 ? 'pt-3 text-canvas-500' : 'text-canvas-500'
                  }
                >
                  {line.text}
                </div>
              )
            }

            if (line.type === 'output') {
              return (
                <div
                  key={index}
                  className="min-h-[1.25em] whitespace-pre text-canvas-500"
                >
                  {line.text}
                </div>
              )
            }

            return (
              <div key={index} className={index > 0 ? 'pt-2' : undefined}>
                <span className="select-none text-canvas-400">$ </span>
                <span className="text-emerald-600 dark:text-emerald-400">
                  {line.text}
                </span>
                {cursorHere && (
                  <span
                    className="terminal-cursor ml-0.5 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.1em] bg-canvas-900 align-middle dark:bg-canvas-100"
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          })}

          {displayStatus === 'idle' && (
            <div>
              <span className="select-none text-canvas-400">$ </span>
              <span
                className="terminal-cursor inline-block h-[1.05em] w-[0.55ch] translate-y-[0.1em] bg-canvas-900 align-middle dark:bg-canvas-100"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
