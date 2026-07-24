import { creator, productLinks } from '@/lib/seo'
import { QuillIcon } from './icons'

export function Footer() {
  return (
    <footer className="border-t border-canvas-100 py-12 dark:border-canvas-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-canvas-900 dark:bg-white">
              <QuillIcon className="h-3.5 w-3.5 text-white dark:text-canvas-900" />
            </div>
            <span className="text-sm font-medium text-canvas-900 dark:text-white">
              Canvas
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-canvas-500">
            <a
              href={productLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-canvas-900 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href={productLinks.upgradeGuide}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-canvas-900 dark:hover:text-white"
            >
              Upgrade guide
            </a>
            <a
              href={productLinks.discussions}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-canvas-900 dark:hover:text-white"
            >
              Discussions
            </a>
            <a
              href={productLinks.packagist}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-canvas-900 dark:hover:text-white"
            >
              Packagist
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-canvas-100 pt-8 text-[12px] text-canvas-500 sm:flex-row sm:items-center dark:border-canvas-900">
          <p>
            Open source under the{' '}
            <a
              href={productLinks.license}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-canvas-900 dark:hover:text-white"
            >
              MIT License
            </a>
            . Created by{' '}
            <a
              href={creator.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-canvas-900 dark:hover:text-white"
            >
              Todd Austin
            </a>
            .
          </p>
          <p>A publishing platform for Laravel applications.</p>
        </div>
      </div>
    </footer>
  )
}
