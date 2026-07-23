import { ArrowRightIcon, GitHubIcon } from './icons'

export function Cta() {
  return (
    <section className="border-t border-canvas-100 py-24 sm:py-32 dark:border-canvas-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-canvas-900 px-8 py-16 text-center ring-1 ring-transparent sm:px-16 sm:py-20 dark:ring-canvas-800">
          <div className="bg-grid absolute inset-0 opacity-20" />
          <div className="relative">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Give your Laravel app the eloquent writing
              <br />
              experience it deserves
            </h2>
            <p className="mx-auto mb-8 max-w-md text-[15px] text-canvas-300">
              Ready when you are. Install the package, grant yourself access,
              and open <code className="font-mono text-[13px]">/canvas</code>.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#install"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-canvas-900 transition-all hover:bg-canvas-100"
              >
                Install Canvas
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/austintoddj/canvas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-canvas-700 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
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
