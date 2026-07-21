export function Quote() {
  return (
    <section className="border-t border-canvas-100 py-24 sm:py-32 dark:border-canvas-900">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <blockquote className="text-xl leading-snug font-medium tracking-tight text-canvas-800 sm:text-2xl dark:text-canvas-200">
          “Your content should live in your application—not a third-party
          silo. Canvas is the publishing layer that respects that boundary.”
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas-200 text-sm font-semibold text-canvas-600 dark:bg-canvas-700 dark:text-canvas-300">
            TA
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-canvas-900 dark:text-white">
              Todd Austin
            </div>
            <div className="text-[12px] text-canvas-500">Creator of Canvas</div>
          </div>
        </div>
      </div>
    </section>
  )
}
