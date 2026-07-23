import {
  AiIcon,
  AnalyticsIcon,
  EditorIcon,
  MediaIcon,
  RolesIcon,
  ScheduleIcon
} from './icons'
import type { ComponentType, SVGProps } from 'react'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const features: {
  title: string
  description: string
  icon: IconComponent
}[] = [
  {
    title: 'A quiet writing surface',
    description:
      'Draft without distraction. Focus mode, headings, lists, tables, code blocks, and embeds keep you in flow from first line to final polish.',
    icon: EditorIcon
  },
  {
    title: 'Draft, schedule, revise safely',
    description:
      'Save work-in-progress, schedule when a post goes live, and edit published pieces privately—then promote when ready or discard the draft.',
    icon: ScheduleIcon
  },
  {
    title: 'AI in the draft, not the way',
    description:
      'Tighten a paragraph, fix grammar, expand a rough idea, or improve an SEO title—right where you’re already writing, with your own API keys.',
    icon: AiIcon
  },
  {
    title: 'Media without the detour',
    description:
      'Upload images, set a featured image, and pull stock photos from Unsplash without leaving the post you’re working on.',
    icon: MediaIcon
  },
  {
    title: 'Traffic you can act on',
    description:
      'See views, visitors, top posts, and referrers so you know what’s landing. Optional weekly digests keep authors in the loop.',
    icon: AnalyticsIcon
  },
  {
    title: 'Access that matches your team',
    description:
      'Writers draft, editors publish, admins configure—using the login you already have. No second accounts or separate user system.',
    icon: RolesIcon
  }
]

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-canvas-100 py-24 sm:py-32 dark:border-canvas-900"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-canvas-900 sm:text-3xl dark:text-white">
            Everything you need.
            <br />
            <span className="text-canvas-500 dark:text-canvas-400">
              Nothing you don’t.
            </span>
          </h2>
          <p className="text-[15px] leading-relaxed text-canvas-600 dark:text-canvas-400">
            Write, organize, ship, and learn—publishing tools that fit how teams
            actually work, without turning your Laravel app into a CMS.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(feature => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-canvas-200 bg-white p-6 transition-colors hover:border-canvas-300 dark:border-canvas-800 dark:bg-canvas-900/50 dark:hover:border-canvas-700"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-canvas-100 transition-transform group-hover:scale-105 dark:bg-canvas-800">
                  <Icon className="h-5 w-5 text-canvas-700 dark:text-canvas-300" />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-canvas-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-canvas-600 dark:text-canvas-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
