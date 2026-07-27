import {
  ArrowRightIcon,
  GitHubIcon,
  LaravelIcon,
  PhpIcon,
  ReactIcon,
  TailwindIcon
} from './icons'

type HeroProps = {
  latestVersion?: string | null
  latestReleaseUrl?: string | null
}

export function Hero({ latestVersion, latestReleaseUrl }: HeroProps) {
  const shippedLabel = latestVersion
    ? `Just shipped ${latestVersion}`
    : 'Just shipped'
  const releaseHref =
    latestReleaseUrl ?? 'https://github.com/austintoddj/canvas/releases/latest'

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-canvas-950" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <a
          href={releaseHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-canvas-200 bg-white/60 px-3 py-1 text-[12px] font-medium text-canvas-600 backdrop-blur transition-colors hover:border-canvas-300 hover:text-canvas-900 dark:border-canvas-800 dark:bg-canvas-900/60 dark:text-canvas-400 dark:hover:border-canvas-700 dark:hover:text-white"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          {shippedLabel}
        </a>

        <h1
          className="mb-6 animate-fade-in-up text-4xl font-semibold tracking-tight text-canvas-900 sm:text-5xl md:text-6xl dark:text-white"
          style={{ animationDelay: '0.05s', lineHeight: 1.1 }}
        >
          Publishing
          <br className="hidden sm:block" />{' '}
          <span className="text-canvas-500 dark:text-canvas-400">
            on your own terms
          </span>
        </h1>

        <p
          className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-lg leading-relaxed text-canvas-600 sm:text-xl dark:text-canvas-400"
          style={{ animationDelay: '0.1s' }}
        >
          Canvas is a powerful tool for Laravel apps that makes it easy to
          write, edit, and brand your work with a range of publishing tools.
        </p>

        <div
          className="flex animate-fade-in-up flex-row flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: '0.15s' }}
        >
          <a
            href="#install"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-canvas-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-canvas-800 active:scale-[0.98] dark:border-canvas-600 dark:bg-canvas-100 dark:text-canvas-900 dark:hover:bg-white"
          >
            Get started
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/austintoddj/canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-canvas-200 bg-white px-5 py-2.5 text-sm font-medium text-canvas-700 transition-all hover:scale-[1.02] hover:bg-canvas-50 active:scale-[0.98] dark:border-canvas-700 dark:bg-canvas-900 dark:text-canvas-200 dark:hover:bg-canvas-800"
          >
            <GitHubIcon className="h-4 w-4" />
            View on GitHub
          </a>
        </div>

        <div
          className="mt-16 flex animate-fade-in flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] font-medium text-canvas-500"
          style={{ animationDelay: '0.25s' }}
        >
          <span className="flex items-center gap-1.5">
            <LaravelIcon className="h-3.5 w-3.5 text-canvas-700 dark:text-canvas-300" />
            Laravel 13
          </span>
          <span className="flex items-center gap-1.5">
            <PhpIcon className="h-3.5 w-3.5" />
            PHP 8.4
          </span>
          <span className="flex items-center gap-1.5">
            <ReactIcon className="h-3.5 w-3.5" />
            React 19
          </span>
          <span className="flex items-center gap-1.5">
            <TailwindIcon className="h-3.5 w-3.5" />
            Tailwind CSS
          </span>
          <span className="flex items-center gap-1.5">
            <GitHubIcon className="h-3.5 w-3.5" />
            MIT License
          </span>
        </div>
      </div>
    </section>
  )
}
