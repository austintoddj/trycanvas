import { GitHubIcon, QuillIcon } from './icons'
import { MobileNav } from './mobile-nav'
import { ThemeToggle } from './theme-toggle'

type HeaderProps = {
  stars?: number | null
}

const starFormatter = Intl.NumberFormat('en', { notation: 'compact' })

export function Header({ stars = null }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-canvas-200/60 bg-white/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl dark:border-canvas-800/60 dark:bg-canvas-950/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-canvas-900 dark:bg-white">
            <QuillIcon className="h-4 w-4 text-white dark:text-canvas-900" />
          </div>
          <span className="text-[15px] font-semibold">Canvas</span>
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
          <MobileNav />
          <ThemeToggle />
          <a
            href="https://github.com/austintoddj/canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-canvas-600 transition-colors hover:text-canvas-900 dark:text-canvas-400 dark:hover:text-white"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            <span>Star</span>
            {typeof stars === 'number' && (
              <span className="tabular-nums">
                {starFormatter.format(stars)}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  )
}
