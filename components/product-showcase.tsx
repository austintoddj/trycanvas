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
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-xl border border-canvas-200 bg-canvas-50 shadow-xl shadow-canvas-900/5 sm:rounded-2xl dark:border-canvas-800 dark:bg-canvas-900/40 dark:shadow-black/40">
          <div className="flex items-center gap-1.5 border-b border-canvas-200/80 bg-white/80 px-2.5 py-1.5 sm:gap-2 sm:px-4 sm:py-3 dark:border-canvas-800 dark:bg-canvas-950/60">
            <div className="flex gap-1 sm:gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-canvas-300 sm:h-2.5 sm:w-2.5 dark:bg-canvas-700" />
              <div className="h-1.5 w-1.5 rounded-full bg-canvas-300 sm:h-2.5 sm:w-2.5 dark:bg-canvas-700" />
              <div className="h-1.5 w-1.5 rounded-full bg-canvas-300 sm:h-2.5 sm:w-2.5 dark:bg-canvas-700" />
            </div>
            <span className="ml-1.5 text-[10px] font-medium text-canvas-500 sm:ml-2 sm:text-[12px]">
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
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="h-auto w-full dark:hidden"
            />
            <Image
              src="/editor-dark.png"
              alt="Canvas post editor with a clean writing surface and minimal chrome"
              width={2952}
              height={1760}
              priority
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="hidden h-auto w-full dark:block"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {highlights.map(item => (
            <div
              key={item.title}
              className="rounded-2xl border border-canvas-200 bg-white px-5 py-4 dark:border-canvas-800 dark:bg-canvas-900/50"
            >
              <div className="mb-1.5 text-[13px] font-semibold text-canvas-900 dark:text-white">
                {item.title}
              </div>
              <p className="text-[13px] leading-relaxed text-canvas-600 dark:text-canvas-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
