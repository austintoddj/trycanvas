import Image from 'next/image'

const highlights = [
  {
    title: 'Editor',
    body: 'Focus mode, autosave, SEO fields, and a post inspector that stays out of the draft until you need it.'
  },
  {
    title: 'Organize',
    body: 'Topics and tags as deliberate taxonomy—attach from the post, create when you’re ready.'
  },
  {
    title: 'Integrations',
    body: 'Unsplash and BYOK AI (Grok, ChatGPT, Claude) configured once for the site.'
  }
]

export function ProductShowcase() {
  return (
    <section className="pb-24 sm:pb-32" aria-label="Product preview">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-canvas-200 bg-canvas-50 shadow-xl shadow-canvas-900/5 dark:border-canvas-800 dark:bg-canvas-900 dark:shadow-black/40">
          <div className="border-b border-canvas-200 bg-white px-4 py-2.5 dark:border-canvas-800 dark:bg-canvas-900">
            <span className="text-[12px] font-medium text-canvas-500">
              yourapp.test/canvas
            </span>
          </div>
          <div className="relative bg-canvas-100 dark:bg-canvas-950">
            <Image
              src="/editor.png"
              alt="Canvas post editor with a clean writing surface and minimal chrome"
              width={2952}
              height={1760}
              priority
              sizes="(min-width: 1152px) 72rem, 100vw"
              className="h-auto w-full dark:hidden"
            />
            <Image
              src="/editor-dark.png"
              alt="Canvas post editor with a clean writing surface and minimal chrome"
              width={2952}
              height={1760}
              sizes="(min-width: 1152px) 72rem, 100vw"
              className="hidden h-auto w-full dark:block"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-3">
          {highlights.map(item => (
            <div key={item.title}>
              <div className="mb-1.5 text-[13px] font-semibold text-canvas-900 dark:text-white">
                {item.title}
              </div>
              <p className="text-pretty text-sm leading-relaxed text-canvas-600 dark:text-canvas-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
