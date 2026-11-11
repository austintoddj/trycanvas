'use client'

import { Children, type ReactNode, useEffect, useRef, useState } from 'react'

type HeldFramesProps = {
  holdMs: number
  present: 'mask' | 'fade'
  children: ReactNode
}

const ease = 'ease-[cubic-bezier(0.23,1,0.32,1)]'

export function HeldFrames({ holdMs, present, children }: HeldFramesProps) {
  const frames = Children.toArray(children)
  const count = frames.length
  const [index, setIndex] = useState(0)
  const indexRef = useRef(0)

  useEffect(() => {
    if (count < 2) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer: ReturnType<typeof setInterval> | undefined

    const setFrame = (next: number | ((current: number) => number)) => {
      setIndex(current => {
        const resolved = typeof next === 'function' ? next(current) : next
        indexRef.current = resolved
        return resolved
      })
    }

    const stop = () => {
      if (timer === undefined) return
      clearInterval(timer)
      timer = undefined
    }

    const start = () => {
      stop()
      timer = setInterval(() => {
        if (document.hidden) return
        setFrame(current => (current + 1) % count)
      }, holdMs)
    }

    if (media.matches) {
      stop()
      if (indexRef.current !== 0) setFrame(0)
    } else if (!document.hidden) {
      start()
    }

    const onVisibility = () => {
      if (document.hidden) {
        stop()
        return
      }
      if (!media.matches) start()
    }

    const onMedia = () => {
      if (media.matches) {
        stop()
        setFrame(0)
        return
      }
      if (!document.hidden) start()
    }

    document.addEventListener('visibilitychange', onVisibility)
    media.addEventListener('change', onMedia)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
      media.removeEventListener('change', onMedia)
    }
  }, [count, holdMs])

  if (present === 'mask') {
    return (
      <span className="block h-[1lh] overflow-hidden">
        <span
          style={{ transform: `translateY(calc(${index} * -1lh))` }}
          className={`block w-full transition-transform duration-[400ms] ${ease} motion-reduce:!transform-none motion-reduce:!transition-none`}
        >
          {frames.map((frame, frameIndex) => (
            <span
              key={frameIndex}
              className="block h-[1lh] w-full"
              aria-hidden={frameIndex !== index}
            >
              {frame}
            </span>
          ))}
        </span>
      </span>
    )
  }

  return (
    <span className="grid">
      {frames.map((frame, frameIndex) => {
        const shown = frameIndex === index
        const resting = frameIndex === 0
        return (
          <span
            key={frameIndex}
            className={[
              'col-start-1 row-start-1 transition-opacity duration-300',
              ease,
              'motion-reduce:!transition-none',
              shown ? 'opacity-100' : 'opacity-0',
              resting
                ? 'motion-reduce:!opacity-100'
                : 'motion-reduce:!opacity-0',
              shown ? 'pointer-events-auto' : 'pointer-events-none',
              resting
                ? 'motion-reduce:!pointer-events-auto'
                : 'motion-reduce:!pointer-events-none'
            ].join(' ')}
            aria-hidden={frameIndex !== index}
          >
            {frame}
          </span>
        )
      })}
    </span>
  )
}
