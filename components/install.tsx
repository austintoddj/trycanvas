import { InstallTerminal } from './install-terminal'

type InstallProps = {
  packageVersion?: string | null
}

export function Install({ packageVersion }: InstallProps) {
  return (
    <section
      id="install"
      className="border-t border-canvas-100 bg-canvas-50/50 py-24 sm:py-32 dark:border-canvas-900 dark:bg-canvas-900/20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-canvas-900 sm:text-3xl dark:text-white">
            Install like any other package
          </h2>
          <p className="text-[15px] leading-relaxed text-canvas-600 dark:text-canvas-400">
            Composer, Artisan, and your existing login. Canvas never creates
            host accounts or owns authentication—it plugs into the guard you
            already use.
          </p>
        </div>

        <InstallTerminal packageVersion={packageVersion} />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-canvas-200 bg-white p-5 dark:border-canvas-800 dark:bg-canvas-900/50">
            <h3 className="mb-1.5 text-[13px] font-semibold text-canvas-900 dark:text-white">
              Optional reader UI
            </h3>
            <p className="text-[13px] leading-relaxed text-canvas-600 dark:text-canvas-400">
              Run{' '}
              <code className="rounded bg-canvas-100 px-1 font-mono text-[11px] dark:bg-canvas-800">
                php artisan canvas:ui
              </code>{' '}
              for a starter public blog at{' '}
              <code className="rounded bg-canvas-100 px-1 font-mono text-[11px] dark:bg-canvas-800">
                /canvas-ui
              </code>
              . Customize the published Blade views as you like.
            </p>
          </div>
          <div className="rounded-2xl border border-canvas-200 bg-white p-5 dark:border-canvas-800 dark:bg-canvas-900/50">
            <h3 className="mb-1.5 text-[13px] font-semibold text-canvas-900 dark:text-white">
              Requirements
            </h3>
            <p className="text-[13px] leading-relaxed text-canvas-600 dark:text-canvas-400">
              PHP 8.3+, Laravel 12 or 13, and working authentication for the
              guard Canvas uses. Full details are in the{' '}
              <a
                href="https://github.com/austintoddj/canvas#requirements"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-canvas-900 dark:hover:text-white"
              >
                readme
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
