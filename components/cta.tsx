import { ArrowRightIcon, GitHubIcon } from './icons';







export function Cta() {
  return (
    <section className="border-t border-canvas-100 py-24 sm:py-32 dark:border-canvas-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-canvas-900 px-8 py-16 text-center sm:px-16 sm:py-20 dark:bg-white">
          <div className="bg-grid absolute inset-0 opacity-20 dark:opacity-10" />
          <div className="relative">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl dark:text-canvas-900">
              Give your Laravel app the eloquent writing<br />experience it deserves
            </h2>
            <p className="mx-auto mb-8 max-w-md text-[15px] text-canvas-300 dark:text-canvas-600">
              Not convinced yet? Try the links below to read more about what
              Canvas can do for you or spin up a live demo of your own with
              Gitpod.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#install"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-canvas-900 transition-all hover:bg-canvas-100 dark:bg-canvas-900 dark:text-white dark:hover:bg-canvas-800"
              >
                Install Canvas
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/austintoddj/canvas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-canvas-700 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 dark:border-canvas-300 dark:text-canvas-900 dark:hover:bg-canvas-900/10"
              >
                <GitHubIcon className="h-4 w-4" />
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
