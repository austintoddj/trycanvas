import type { SiteStats } from '@/lib/stats'

type SocialProofProps = {
  stats: SiteStats
}

const formatter = Intl.NumberFormat('en', { notation: 'compact' })

export function SocialProof({ stats }: SocialProofProps) {
  const items = [
    {
      label: 'Total downloads',
      value: stats.downloads != null ? formatter.format(stats.downloads) : null
    },
    {
      label: 'Active forks',
      value: stats.forks != null ? formatter.format(stats.forks) : null
    },
    {
      label: 'Contributors',
      value:
        stats.contributors != null ? formatter.format(stats.contributors) : null
    },
    {
      label: 'License',
      value: 'MIT'
    }
  ]

  return (
    <section className="border-t border-canvas-100 py-24 sm:py-32 dark:border-canvas-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-balance text-2xl font-semibold leading-tight tracking-tight text-canvas-900 sm:text-3xl dark:text-white">
            Years in the Laravel ecosystem
          </h2>
          <p className="text-pretty text-[15px] leading-relaxed text-canvas-600 dark:text-canvas-400">
            Canvas was made for developers, by developers. Built for the most
            popular PHP framework on the market today, you&#39;ll be in good
            company.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-y border-canvas-200 py-8 lg:grid-cols-4 dark:border-canvas-800">
          {items.map(item => (
            <div key={item.label}>
              <dd className="text-3xl font-semibold tabular-nums tracking-tight text-canvas-900 sm:text-4xl dark:text-white">
                {item.value ?? '—'}
              </dd>
              <dt className="mt-2 text-[13px] text-canvas-500">{item.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-canvas-500">
          <span className="font-medium text-canvas-600 dark:text-canvas-400">
            Featured on
          </span>
          <a
            href="https://laravel-news.com/canvas-a-laravel-publishing-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-canvas-900 dark:hover:text-white"
          >
            Laravel News
          </a>
          <a
            href="https://www.producthunt.com/products/canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-canvas-900 dark:hover:text-white"
          >
            Product Hunt
          </a>
          <a
            href="https://podcast.laravel-news.com/109"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-canvas-900 dark:hover:text-white"
          >
            Laravel News Podcast
          </a>
        </div>
      </div>
    </section>
  )
}
