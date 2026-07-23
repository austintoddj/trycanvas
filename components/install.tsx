const commands = [
  { type: 'command' as const, text: 'composer require austintoddj/canvas' },
  { type: 'command' as const, text: 'php artisan canvas:install' },
  { type: 'command' as const, text: 'php artisan storage:link' },
  { type: 'comment' as const, text: '# Grant yourself admin access' },
  {
    type: 'command' as const,
    text: 'php artisan canvas:make-admin you@example.com'
  },
  {
    type: 'comment' as const,
    text: '# Sign in to your app, then visit /canvas'
  }
]

export function Install() {
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

        <div className="overflow-hidden rounded-2xl border border-canvas-200 bg-white shadow-sm dark:border-canvas-800 dark:bg-canvas-950">
          <div className="flex items-center gap-2 border-b border-canvas-100 bg-canvas-50/80 px-4 py-3 dark:border-canvas-800 dark:bg-canvas-900/50">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-canvas-300 dark:bg-canvas-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-canvas-300 dark:bg-canvas-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-canvas-300 dark:bg-canvas-700" />
            </div>
            <span className="ml-2 text-[12px] font-medium text-canvas-500">
              terminal
            </span>
          </div>
          <div className="code-block overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:p-6 sm:text-[14px]">
            <div className="space-y-3">
              {commands.map((line, index) =>
                line.type === 'comment' ? (
                  <div
                    key={index}
                    className={
                      index > 0 && commands[index - 1]?.type === 'command'
                        ? 'pt-2 text-canvas-500'
                        : 'text-canvas-500'
                    }
                  >
                    {line.text}
                  </div>
                ) : (
                  <div key={index}>
                    <span className="select-none text-canvas-400">$ </span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {line.text}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

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
              Laravel 11+ and PHP 8.2+. The current major is a clean break from
              prior majors—see the{' '}
              <a
                href="https://github.com/austintoddj/canvas/blob/v7/.github/UPGRADE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-canvas-900 dark:hover:text-white"
              >
                upgrade guide
              </a>{' '}
              before migrating from v6.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
