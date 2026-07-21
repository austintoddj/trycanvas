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
      'Tiptap with a fixed toolbar—no floating chrome. Focus mode, tables, task lists, syntax-highlighted code, and paste-to-embed for YouTube and more.',
    icon: EditorIcon
  },
  {
    title: 'Drafts, schedule, and safe edits',
    description:
      'Ship on a schedule, or keep live posts stable while you revise privately. Promote when ready; discard when you’re not.',
    icon: ScheduleIcon
  },
  {
    title: 'AI you bring yourself',
    description:
      'Optional rewrite and SEO suggestions via your own Grok, ChatGPT, or Claude keys. Improve, fix grammar, shorten, expand—or write a custom instruction.',
    icon: AiIcon
  },
  {
    title: 'Media that stays in place',
    description:
      'Uploads, a justified media library, and Unsplash when you connect it. Featured images and assets without leaving the editor.',
    icon: MediaIcon
  },
  {
    title: 'Traffic you can actually use',
    description:
      'Thirty-day views and visitors, top posts, referrers, and per-post stats. Optional weekly digests in the author’s language and timezone.',
    icon: AnalyticsIcon
  },
  {
    title: 'Your auth, three roles',
    description:
      'Contributor, Editor, and Admin live in canvas_users. Canvas never owns login—your guard, your user model, your domain.',
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
            Built for people who publish
            <br />
            <span className="text-canvas-500 dark:text-canvas-400">
              inside real Laravel apps.
            </span>
          </h2>
          <p className="text-[15px] leading-relaxed text-canvas-600 dark:text-canvas-400">
            Canvas 7 is a full rewrite of the admin experience: React 19, Vite,
            and Tiptap on the frontend; first-class Illuminate primitives on the
            backend. Tags and topics, media, integrations, and access control—
            without turning your app into a CMS.
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
