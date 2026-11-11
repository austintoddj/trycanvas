import { ArrowRightIcon, GitHubIcon } from './icons'

export function Cta() {
  return (
    <section className="border-t border-canvas-100 py-24 sm:py-32 dark:border-canvas-900">
      <div className="mx-auto grid max-w-5xl px-6 md:grid-cols-2">
        <div className="md:border-r md:border-canvas-200 md:pr-16 dark:md:border-canvas-800">
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-canvas-900 sm:text-3xl dark:text-white">
            Install in your app.
          </h2>
          <div className="mt-4 space-y-1 text-[15px] leading-relaxed text-canvas-600 dark:text-canvas-400">
            <p>Add the package.</p>
            <p>Use the login you already have.</p>
            <p>Open /canvas.</p>
          </div>
          <a
            href="#install"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-canvas-900 px-5 py-2.5 text-sm font-medium text-white transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-canvas-800 active:scale-[0.97] dark:bg-white dark:text-canvas-900 dark:hover:bg-canvas-100"
          >
            Install Canvas
            <ArrowRightIcon className="install-arrow h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 border-t border-canvas-200 pt-12 md:mt-0 md:border-t-0 md:pt-0 md:pl-16 dark:border-canvas-800">
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-canvas-900 sm:text-3xl dark:text-white">
            Read the source.
          </h2>
          <div className="mt-4 space-y-1 text-[15px] leading-relaxed text-canvas-600 dark:text-canvas-400">
            <p>Issues and discussions.</p>
            <p>The upgrade guide.</p>
            <p>No second user system.</p>
          </div>
          <a
            href="https://github.com/austintoddj/canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-canvas-200 px-5 py-2.5 text-sm font-medium text-canvas-700 transition-[transform,background-color,border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-canvas-300 hover:bg-canvas-50 active:scale-[0.97] dark:border-canvas-700 dark:text-canvas-200 dark:hover:border-canvas-600 dark:hover:bg-canvas-800"
          >
            <GitHubIcon className="h-4 w-4" />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
