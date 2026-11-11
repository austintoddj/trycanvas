import { HeldFrames } from './held-frames'
import Image from 'next/image'

type Feature =
  | {
      kind: 'lines'
      title: string
      body: string
      holdMs: 4000
      frames: readonly [string, string]
    }
  | {
      kind: 'status'
      title: string
      body: string
      holdMs: 2400
      frames: readonly [string, string, string]
    }
  | { kind: 'proof'; title: string; body: string }
  | { kind: 'note'; title: string; body: string }

const features: readonly Feature[] = [
  {
    kind: 'lines',
    title: 'AI in the draft, not the way',
    body: 'Tighten a paragraph, fix grammar, expand a rough idea, or improve an SEO title—right where you’re already writing, with your own API keys.',
    holdMs: 4000,
    frames: [
      'Tighten a paragraph where you’re already writing.',
      'This paragraph is a bit loose and could be shorter.'
    ]
  },
  {
    kind: 'status',
    title: 'Draft, schedule, revise safely',
    body: 'Save work-in-progress, schedule when a post goes live, and edit published pieces privately—then promote when ready or discard the draft.',
    holdMs: 2400,
    frames: ['Draft', 'Scheduled', 'Published']
  },
  {
    kind: 'proof',
    title: 'A quiet writing surface',
    body: 'Draft without distraction. Focus mode, headings, lists, tables, code blocks, and embeds keep you in flow from first line to final polish.'
  },
  {
    kind: 'note',
    title: 'Media without the detour',
    body: 'Upload images, set a featured image, and pull stock photos from Unsplash without leaving the post you’re working on.'
  },
  {
    kind: 'note',
    title: 'Traffic you can act on',
    body: 'See views, visitors, top posts, and referrers so you know what’s landing. Optional weekly digests keep authors in the loop.'
  },
  {
    kind: 'note',
    title: 'Access that matches your team',
    body: 'Writers draft, editors publish, admins configure—using the login you already have. No second accounts or separate user system.'
  }
]

const panels = features.filter(
  (feature): feature is Exclude<Feature, { kind: 'note' }> =>
    feature.kind !== 'note'
)

const notes = features.filter(
  (feature): feature is Extract<Feature, { kind: 'note' }> =>
    feature.kind === 'note'
)

function FeatureStage({
  feature
}: {
  feature: Exclude<Feature, { kind: 'note' }>
}) {
  switch (feature.kind) {
    case 'lines':
      return (
        <HeldFrames holdMs={feature.holdMs} present="fade">
          {feature.frames.map(frame => (
            <span
              key={frame}
              className="block text-[15px] leading-relaxed text-canvas-800 dark:text-canvas-200"
            >
              {frame}
            </span>
          ))}
        </HeldFrames>
      )
    case 'status':
      return (
        <div className="text-[15px] leading-relaxed text-canvas-900 dark:text-white">
          <HeldFrames holdMs={feature.holdMs} present="mask">
            {feature.frames.map(frame => (
              <span key={frame} className="flex h-[1lh] items-center gap-2">
                <span
                  aria-hidden="true"
                  className={
                    frame === 'Published'
                      ? 'h-[6px] w-[6px] rounded-full bg-emerald-500'
                      : 'h-[6px] w-[6px] rounded-full bg-canvas-400'
                  }
                />
                {frame}
              </span>
            ))}
          </HeldFrames>
        </div>
      )
    case 'proof':
      return (
        <div>
          <p className="mb-3 text-[12px] font-medium text-canvas-500">
            yourapp.test/canvas
          </p>
          <Image
            src="/editor.png"
            alt="Canvas post editor with a clean writing surface and minimal chrome"
            width={2952}
            height={1760}
            priority
            sizes="(min-width: 768px) 22rem, 100vw"
            className="h-auto w-full dark:hidden"
          />
          <Image
            src="/editor-dark.png"
            alt="Canvas post editor with a clean writing surface and minimal chrome"
            width={2952}
            height={1760}
            sizes="(min-width: 768px) 22rem, 100vw"
            className="hidden h-auto w-full dark:block"
          />
        </div>
      )
    default: {
      const unreachable: never = feature
      return unreachable
    }
  }
}

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 border-t border-canvas-100 py-24 sm:py-32 dark:border-canvas-900"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 max-w-2xl text-balance text-2xl font-semibold leading-tight tracking-tight text-canvas-900 sm:text-3xl dark:text-white">
          Everything you need.
          <br />
          <span className="text-canvas-500 dark:text-canvas-400">
            Nothing you don’t.
          </span>
        </h2>

        <div className="grid md:grid-cols-3">
          {panels.map((feature, panelIndex) => (
            <article
              key={feature.title}
              className={[
                'relative min-w-0 border border-canvas-200 p-6 transition-colors duration-150 hover:z-10 hover:border-canvas-300 focus-within:z-10 focus-within:border-canvas-300 dark:border-canvas-800 dark:hover:border-canvas-600 dark:focus-within:border-canvas-600',
                panelIndex === 0 ? '' : '-mt-px md:mt-0 md:-ml-px'
              ].join(' ')}
            >
              <FeatureStage feature={feature} />
              <h3 className="mt-6 text-[15px] font-semibold text-canvas-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-canvas-600 dark:text-canvas-400">
                {feature.body}
              </p>
            </article>
          ))}
        </div>

        <div>
          {notes.map(note => (
            <div
              key={note.title}
              className="border-b border-canvas-200 py-8 dark:border-canvas-800"
            >
              <h3 className="text-[15px] font-semibold text-canvas-900 dark:text-white">
                {note.title}
              </h3>
              <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-canvas-600 dark:text-canvas-400">
                {note.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
