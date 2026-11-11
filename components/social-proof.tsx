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
        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-y border-canvas-200 py-8 lg:grid-cols-4 dark:border-canvas-800">
          {items.map(item => (
            <div key={item.label}>
              <dd className="text-[clamp(3rem,6vw,4.5rem)] font-medium tabular-nums tracking-tight text-canvas-900 dark:text-white">
                {item.value ?? '—'}
              </dd>
              <dt className="mt-2 text-[13px] text-canvas-500">{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
