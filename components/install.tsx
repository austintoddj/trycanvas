import { CopyCommand } from './copy-command'
import { InstallTerminal } from './install-terminal'

type InstallProps = {
  packageVersion?: string | null
}

export function Install({ packageVersion }: InstallProps) {
  return (
    <section
      id="install"
      className="scroll-mt-20 border-t border-canvas-100 py-24 sm:py-32 dark:border-canvas-900"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-balance text-2xl font-semibold leading-tight tracking-tight text-canvas-900 sm:text-3xl dark:text-white">
          One package.
          <br />
          <span className="text-canvas-500 dark:text-canvas-400">
            Your app.
          </span>
        </h2>
        <p className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium text-canvas-500">
          <span>PHP 8.3+</span>
          <span>Laravel 12+</span>
          <span>MIT License</span>
        </p>

        <div className="mb-4 grid gap-2">
          <CopyCommand command="composer require austintoddj/canvas" />
          <CopyCommand command="php artisan canvas:install" />
        </div>

        <InstallTerminal packageVersion={packageVersion} />

        <div className="mt-8 border-t border-canvas-200 dark:border-canvas-800">
          <div className="border-b border-canvas-200 py-6 dark:border-canvas-800">
            <h3 className="mb-1.5 text-[13px] font-semibold text-canvas-900 dark:text-white">
              Optional reader UI
            </h3>
            <p className="max-w-2xl text-pretty text-[13px] leading-relaxed text-canvas-600 dark:text-canvas-400">
              canvas:ui is optional. Run{' '}
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
          <div className="border-b border-canvas-200 py-6 dark:border-canvas-800">
            <h3 className="mb-1.5 text-[13px] font-semibold text-canvas-900 dark:text-white">
              Requirements
            </h3>
            <p className="max-w-2xl text-pretty text-[13px] leading-relaxed text-canvas-600 dark:text-canvas-400">
              Working authentication for the guard Canvas uses. Full details are
              in the{' '}
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
