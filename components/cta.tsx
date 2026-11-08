import { ArrowRightIcon, GitHubIcon } from './icons'

export function Cta() {
  return (
    <section className="border-t border-canvas-100 py-24 sm:py-32 dark:border-canvas-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-canvas-900 px-8 py-16 text-center sm:px-16 sm:py-20">
          <h2 className="mb-4 text-balance text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            Give your Laravel app the eloquent writing
            <br />
            experience it deserves
          </h2>
          <p className="mx-auto mb-8 max-w-md text-pretty text-[15px] text-canvas-300">
            Ready when you are. Install the package, grant yourself access, and
            open{' '}
            <code className="rounded bg-white/10 px-1 font-mono text-[13px]">
              /canvas
            </code>
            .
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <a
              href="#install"
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-white px-5 py-2.5 text-sm font-medium text-canvas-900 transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-canvas-100 active:scale-[0.97]"
            >
              Install Canvas
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/austintoddj/canvas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-canvas-700 px-5 py-2.5 text-sm font-medium text-white transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/10 active:scale-[0.97]"
            >
              <GitHubIcon className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
