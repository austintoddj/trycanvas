import { GitHubIcon, QuillIcon } from './icons'
import { ThemeToggle } from './theme-toggle'

type HeaderProps = {
  stars?: number | null
}

const starFormatter = Intl.NumberFormat('en', { notation: 'compact' })

export function Header({ stars = null }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-canvas-200/60 bg-white/80 backdrop-blur-xl dark:border-canvas-800/60 dark:bg-canvas-950/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-canvas-900 transition-transform group-hover:scale-105 dark:bg-white">
            <QuillIcon className="h-4 w-4 text-white dark:text-canvas-900" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">
            Canvas
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-canvas-600 sm:flex dark:text-canvas-400">
          <a
            href="#features"
            className="transition-colors hover:text-canvas-900 dark:hover:text-white"
          >
            Features
          </a>
          <a
            href="#install"
            className="transition-colors hover:text-canvas-900 dark:hover:text-white"
          >
            Install
          </a>
          <a
            href="https://github.com/austintoddj/canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-canvas-900 dark:hover:text-white"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/austintoddj/canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-canvas-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-canvas-700 transition-colors hover:border-canvas-300 hover:bg-canvas-50 hover:text-canvas-900 dark:border-canvas-700 dark:bg-canvas-800 dark:text-canvas-50 dark:hover:border-canvas-600 dark:hover:bg-canvas-700 dark:hover:text-white"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            <span>Star</span>
            {stars != null && (
              <span className="rounded-full bg-canvas-100 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums leading-none text-canvas-600 dark:bg-black/20 dark:text-canvas-300">
                {starFormatter.format(stars)}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  )
}
