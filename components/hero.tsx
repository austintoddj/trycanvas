import { CopyPromptButton } from './copy-prompt-button'
import { HeldFrames } from './held-frames'
import { GitHubIcon } from './icons'

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
          className="mb-8 inline-block animate-fade-in text-[13px] font-medium text-canvas-600 transition-colors hover:text-canvas-900 dark:text-canvas-400 dark:hover:text-white"
        >
          {`New · ${shippedLabel}`}
        </a>

        <h1
          className="mb-6 animate-fade-in-up font-medium text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.02] tracking-[-0.03em] text-canvas-900 dark:text-white"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="block">Publishing,</span>
          <span className="block text-canvas-500 dark:text-canvas-400">
            on your own terms.
          </span>
          <HeldFrames holdMs={2800} present="mask">
            <span>write</span>
            <span>edit</span>
            <span>schedule</span>
            <span>ship</span>
          </HeldFrames>
        </h1>

        <p
          className="mx-auto mb-10 max-w-xl animate-fade-in-up text-lg leading-relaxed text-canvas-600 dark:text-canvas-400"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="block">Drafts, media, and roles.</span>
          <span className="block">
            Inside the Laravel app you already have.
          </span>
        </p>

        <div
          className="flex animate-fade-in-up flex-row flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: '0.15s' }}
        >
          <CopyPromptButton />
          <a
            href="https://github.com/austintoddj/canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-canvas-200 bg-white px-5 py-2.5 text-sm font-medium text-canvas-700 transition-[transform,background-color,border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-canvas-300 hover:bg-canvas-50 active:scale-[0.97] dark:border-canvas-700 dark:bg-canvas-900 dark:text-canvas-200 dark:hover:bg-canvas-800"
          >
            <GitHubIcon className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
