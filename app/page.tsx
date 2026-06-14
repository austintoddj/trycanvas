import Image from 'next/image'
import type { SVGProps } from 'react'

type GitHubRelease = {
  tag_name: string
  html_url: string
}

type GitHubLicense = {
  html_url: string
}

type PackagistPackageStats = {
  package: {
    downloads: {
      total: number
    }
    github_forks: number
  }
}

type IconProps = SVGProps<SVGSVGElement>

const REVALIDATE_SECONDS = 900

function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function GitHubIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function CanvasLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="50"
      viewBox="0 0 75 50"
      aria-label="Canvas"
    >
      <path
        fill="#6366F1"
        d="M 56.363281 38.394531 C 58.015625 38.394531 59.441406 38.164062 60.636719 37.703125 C 61.890625 37.242188 62.972656 36.722656 63.882812 36.144531 C 64.792969 35.566406 65.5625 35.046875 66.191406 34.585938 C 66.816406 34.125 67.386719 33.894531 67.898438 33.894531 C 69.207031 33.894531 69.863281 34.757812 69.863281 36.492188 C 69.863281 36.894531 69.777344 37.472656 69.609375 38.222656 C 69.4375 38.914062 69.207031 39.664062 68.925781 40.472656 C 68.640625 41.222656 68.324219 41.941406 67.984375 42.632812 C 67.699219 43.328125 67.414062 43.847656 67.128906 44.191406 C 66.84375 44.480469 66.332031 44.941406 65.589844 45.578125 C 64.910156 46.210938 63.96875 46.847656 62.773438 47.480469 C 61.574219 48.117188 60.179688 48.664062 58.585938 49.125 C 56.992188 49.644531 55.226562 49.902344 53.289062 49.902344 C 51.125 49.902344 48.875 49.585938 46.539062 48.953125 C 44.257812 48.257812 42.179688 47.105469 40.300781 45.492188 C 38.421875 43.816406 36.855469 41.597656 35.601562 38.828125 C 34.40625 36 33.808594 32.480469 33.808594 28.269531 C 33.808594 26.769531 33.890625 25.066406 34.0625 23.164062 C 34.292969 21.203125 34.71875 19.210938 35.34375 17.191406 C 35.972656 15.117188 36.796875 13.097656 37.824219 11.132812 C 38.90625 9.117188 40.328125 7.328125 42.09375 5.769531 C 43.859375 4.210938 45.96875 2.972656 48.417969 2.046875 C 50.925781 1.066406 53.886719 0.578125 57.304688 0.578125 C 60.09375 0.578125 62.488281 0.921875 64.480469 1.617188 C 66.53125 2.25 68.210938 3.144531 69.523438 4.296875 C 70.832031 5.394531 71.800781 6.691406 72.425781 8.191406 C 73.109375 9.691406 73.453125 11.308594 73.453125 13.039062 C 73.453125 16.152344 72.484375 18.460938 70.546875 19.960938 C 68.609375 21.402344 65.875 22.125 62.34375 22.125 C 61.492188 22.125 60.890625 22.066406 60.550781 21.953125 C 60.265625 21.777344 60.125 21.433594 60.125 20.914062 C 60.125 19.527344 60.09375 18.289062 60.039062 17.191406 C 59.980469 16.097656 59.808594 15.171875 59.523438 14.421875 C 59.296875 13.671875 58.925781 13.097656 58.414062 12.691406 C 57.902344 12.289062 57.160156 12.085938 56.191406 12.085938 C 54.425781 12.085938 53.003906 12.664062 51.921875 13.816406 C 50.894531 14.972656 50.097656 16.382812 49.527344 18.058594 C 49.015625 19.671875 48.675781 21.347656 48.503906 23.078125 C 48.390625 24.808594 48.332031 26.25 48.332031 27.402344 C 48.332031 31.5 48.957031 34.355469 50.210938 35.972656 C 51.523438 37.585938 53.574219 38.394531 56.363281 38.394531 Z M 56.363281 38.394531 "
      />
      <path
        fill="#6366F1"
        d="M 56.011719 6.25 L 23.257812 6.25 C 21.949219 6.25 20.886719 5.171875 20.886719 3.847656 C 20.886719 2.519531 21.949219 1.441406 23.257812 1.441406 L 56.011719 1.441406 C 57.324219 1.441406 58.386719 2.519531 58.386719 3.847656 C 58.386719 5.171875 57.324219 6.25 56.011719 6.25 Z M 56.011719 6.25 "
      />
      <path
        fill="#6366F1"
        d="M 15.664062 6.25 L 10.917969 6.25 C 9.605469 6.25 8.542969 5.171875 8.542969 3.847656 C 8.542969 2.519531 9.605469 1.441406 10.917969 1.441406 L 15.664062 1.441406 C 16.976562 1.441406 18.039062 2.519531 18.039062 3.847656 C 18.039062 5.171875 16.976562 6.25 15.664062 6.25 Z M 15.664062 6.25 "
      />
      <path
        fill="#6366F1"
        d="M 24.207031 4.328125 L 14.714844 4.328125 C 14.453125 4.328125 14.242188 4.113281 14.242188 3.847656 C 14.242188 3.582031 14.453125 3.367188 14.714844 3.367188 L 24.207031 3.367188 C 24.472656 3.367188 24.683594 3.582031 24.683594 3.847656 C 24.683594 4.113281 24.472656 4.328125 24.207031 4.328125 Z M 24.207031 4.328125 "
      />
      <path
        fill="#6366F1"
        d="M 42.246094 12.980469 L 37.976562 12.980469 C 36.664062 12.980469 35.601562 11.90625 35.601562 10.578125 C 35.601562 9.25 36.664062 8.171875 37.976562 8.171875 L 42.246094 8.171875 C 43.558594 8.171875 44.621094 9.25 44.621094 10.578125 C 44.621094 11.90625 43.558594 12.980469 42.246094 12.980469 Z M 42.246094 12.980469 "
      />
      <path
        fill="#6366F1"
        d="M 30.378906 12.980469 L 18.988281 12.980469 C 17.675781 12.980469 16.613281 11.90625 16.613281 10.578125 C 16.613281 9.25 17.675781 8.171875 18.988281 8.171875 L 30.378906 8.171875 C 31.691406 8.171875 32.753906 9.25 32.753906 10.578125 C 32.753906 11.90625 31.691406 12.980469 30.378906 12.980469 Z M 30.378906 12.980469 "
      />
      <path
        fill="#6366F1"
        d="M 38.925781 11.058594 L 29.429688 11.058594 C 29.167969 11.058594 28.957031 10.84375 28.957031 10.578125 C 28.957031 10.3125 29.167969 10.097656 29.429688 10.097656 L 38.925781 10.097656 C 39.1875 10.097656 39.398438 10.3125 39.398438 10.578125 C 39.398438 10.84375 39.1875 11.058594 38.925781 11.058594 Z M 38.925781 11.058594 "
      />
      <path
        fill="#6366F1"
        d="M 42.246094 20.191406 L 23.257812 20.191406 C 21.949219 20.191406 20.886719 19.117188 20.886719 17.789062 C 20.886719 16.460938 21.949219 15.382812 23.257812 15.382812 L 42.246094 15.382812 C 43.558594 15.382812 44.621094 16.460938 44.621094 17.789062 C 44.621094 19.117188 43.558594 20.191406 42.246094 20.191406 Z M 42.246094 20.191406 "
      />
      <path
        fill="#6366F1"
        d="M 15.664062 20.191406 L 2.375 20.191406 C 1.0625 20.191406 0 19.117188 0 17.789062 C 0 16.460938 1.0625 15.382812 2.375 15.382812 L 15.664062 15.382812 C 16.976562 15.382812 18.039062 16.460938 18.039062 17.789062 C 18.039062 19.117188 16.976562 20.191406 15.664062 20.191406 Z M 15.664062 20.191406 "
      />
      <path
        fill="#6366F1"
        d="M 24.207031 18.269531 L 14.714844 18.269531 C 14.453125 18.269531 14.242188 18.054688 14.242188 17.789062 C 14.242188 17.523438 14.453125 17.308594 14.714844 17.308594 L 24.207031 17.308594 C 24.472656 17.308594 24.683594 17.523438 24.683594 17.789062 C 24.683594 18.054688 24.472656 18.269531 24.207031 18.269531 Z M 24.207031 18.269531 "
      />
      <path
        fill="#6366F1"
        d="M 42.246094 27.402344 L 29.429688 27.402344 C 28.121094 27.402344 27.058594 26.328125 27.058594 25 C 27.058594 23.671875 28.121094 22.597656 29.429688 22.597656 L 42.246094 22.597656 C 43.558594 22.597656 44.621094 23.671875 44.621094 25 C 44.621094 26.328125 43.558594 27.402344 42.246094 27.402344 Z M 42.246094 27.402344 "
      />
      <path
        fill="#6366F1"
        d="M 21.835938 27.402344 L 12.816406 27.402344 C 11.503906 27.402344 10.441406 26.328125 10.441406 25 C 10.441406 23.671875 11.503906 22.597656 12.816406 22.597656 L 21.835938 22.597656 C 23.144531 22.597656 24.207031 23.671875 24.207031 25 C 24.207031 26.328125 23.144531 27.402344 21.835938 27.402344 Z M 21.835938 27.402344 "
      />
      <path
        fill="#6366F1"
        d="M 30.378906 25.480469 L 20.886719 25.480469 C 20.625 25.480469 20.410156 25.265625 20.410156 25 C 20.410156 24.734375 20.625 24.519531 20.886719 24.519531 L 30.378906 24.519531 C 30.640625 24.519531 30.855469 24.734375 30.855469 25 C 30.855469 25.265625 30.640625 25.480469 30.378906 25.480469 Z M 30.378906 25.480469 "
      />
      <path
        fill="#6366F1"
        d="M 42.246094 41.828125 L 20.410156 41.828125 C 19.101562 41.828125 18.039062 40.75 18.039062 39.421875 C 18.039062 38.09375 19.101562 37.019531 20.410156 37.019531 L 42.246094 37.019531 C 43.558594 37.019531 44.621094 38.09375 44.621094 39.421875 C 44.621094 40.75 43.558594 41.828125 42.246094 41.828125 Z M 42.246094 41.828125 "
      />
      <path
        fill="#6366F1"
        d="M 12.816406 41.828125 L 7.121094 41.828125 C 5.808594 41.828125 4.746094 40.75 4.746094 39.421875 C 4.746094 38.09375 5.808594 37.019531 7.121094 37.019531 L 12.816406 37.019531 C 14.128906 37.019531 15.191406 38.09375 15.191406 39.421875 C 15.191406 40.75 14.128906 41.828125 12.816406 41.828125 Z M 12.816406 41.828125 "
      />
      <path
        fill="#6366F1"
        d="M 21.359375 39.902344 L 11.867188 39.902344 C 11.605469 39.902344 11.390625 39.6875 11.390625 39.421875 C 11.390625 39.15625 11.605469 38.941406 11.867188 38.941406 L 21.359375 38.941406 C 21.621094 38.941406 21.835938 39.15625 21.835938 39.421875 C 21.835938 39.6875 21.621094 39.902344 21.359375 39.902344 Z M 21.359375 39.902344 "
      />
      <path
        fill="#6366F1"
        d="M 55.0625 49.039062 L 29.429688 49.039062 C 28.121094 49.039062 27.058594 47.960938 27.058594 46.632812 C 27.058594 45.308594 28.121094 44.230469 29.429688 44.230469 L 55.0625 44.230469 C 56.375 44.230469 57.4375 45.308594 57.4375 46.632812 C 57.4375 47.960938 56.375 49.039062 55.0625 49.039062 Z M 55.0625 49.039062 "
      />
      <path
        fill="#6366F1"
        d="M 22.308594 49.039062 L 19.460938 49.039062 C 18.152344 49.039062 17.089844 47.960938 17.089844 46.632812 C 17.089844 45.308594 18.152344 44.230469 19.460938 44.230469 L 22.308594 44.230469 C 23.621094 44.230469 24.683594 45.308594 24.683594 46.632812 C 24.683594 47.960938 23.621094 49.039062 22.308594 49.039062 Z M 22.308594 49.039062 "
      />
      <path
        fill="#6366F1"
        d="M 30.855469 47.117188 L 21.359375 47.117188 C 21.097656 47.117188 20.886719 46.898438 20.886719 46.632812 C 20.886719 46.367188 21.097656 46.152344 21.359375 46.152344 L 30.855469 46.152344 C 31.117188 46.152344 31.328125 46.367188 31.328125 46.632812 C 31.328125 46.898438 31.117188 47.117188 30.855469 47.117188 Z M 30.855469 47.117188 "
      />
      <path
        fill="#6366F1"
        d="M 42.246094 34.617188 L 17.5625 34.617188 C 16.253906 34.617188 15.191406 33.539062 15.191406 32.210938 C 15.191406 30.882812 16.253906 29.808594 17.5625 29.808594 L 42.246094 29.808594 C 43.558594 29.808594 44.621094 30.882812 44.621094 32.210938 C 44.621094 33.539062 43.558594 34.617188 42.246094 34.617188 Z M 42.246094 34.617188 "
      />
    </svg>
  )
}

export default async function Home() {
  const [release, license, packagist, contributors] = await Promise.all([
    fetch('https://api.github.com/repos/austintoddj/canvas/releases/latest', {
      headers: { Accept: 'application/json' },
      next: { revalidate: REVALIDATE_SECONDS }
    })
      .then(async response =>
        response.ok ? ((await response.json()) as GitHubRelease) : null
      )
      .catch(() => null),
    fetch('https://api.github.com/repos/austintoddj/canvas/license', {
      headers: { Accept: 'application/json' },
      next: { revalidate: REVALIDATE_SECONDS }
    })
      .then(async response =>
        response.ok ? ((await response.json()) as GitHubLicense) : null
      )
      .catch(() => null),
    fetch('https://packagist.org/packages/austintoddj/canvas.json', {
      headers: { Accept: 'application/json' },
      next: { revalidate: REVALIDATE_SECONDS }
    })
      .then(async response =>
        response.ok ? ((await response.json()) as PackagistPackageStats) : null
      )
      .catch(() => null),
    fetch(
      'https://api.github.com/repos/austintoddj/canvas/contributors?per_page=100',
      {
        headers: { Accept: 'application/json' },
        next: { revalidate: REVALIDATE_SECONDS }
      }
    )
      .then(async response =>
        response.ok ? ((await response.json()) as unknown[]) : null
      )
      .catch(() => null)
  ])

  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  return (
    <div className="bg-gray-900">
      <main>
        <div className="relative isolate overflow-hidden bg-gray-900">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <CanvasLogo />

              <div className="mt-24 sm:mt-32 lg:mt-16">
                {release && (
                  <a
                    href={release.html_url}
                    className="inline-flex space-x-6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                      What&apos;s new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                      <span>Just shipped {release.tag_name}</span>
                      <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                    </span>
                  </a>
                )}
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Publishing on your own terms
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Canvas is a powerful tool for Laravel apps that makes it easy to
                write, edit, and brand your work with a range of publishing
                tools.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://github.com/austintoddj/canvas#introduction"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get started
                </a>
                <a
                  href="https://gitpod.io/#https://github.com/austintoddj/canvas/tree/master"
                  className="text-sm font-semibold leading-6 text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src="/editor.png"
                  alt="Canvas editor"
                  className="w-[76rem] rounded-xl bg-white/5 shadow-2xl ring-1 ring-white/10"
                  width={2592}
                  height={1512}
                  priority
                  sizes="(min-width: 1280px) 76rem, (min-width: 1024px) 60vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            As featured in the community
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <a
              href="https://laravel-news.com/canvas-a-laravel-publishing-platform"
              className="mx-auto flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Laravel News</span>
              <svg
                className="h-8 w-8"
                fill="none"
                height="132"
                viewBox="0 0 134 132"
                width="134"
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient id="ln-a">
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".1217" stopColor="#fffbfb" />
                  <stop offset=".241" stopColor="#fff0ef" />
                  <stop offset=".3594" stopColor="#ffdedc" />
                  <stop offset=".4773" stopColor="#ffc3c0" />
                  <stop offset=".5948" stopColor="#ffa29c" />
                  <stop offset=".7121" stopColor="#ff7970" />
                  <stop offset=".8272" stopColor="#ff493e" />
                  <stop offset=".8616" stopColor="#ff392d" />
                  <stop offset="1" stopColor="#ff2d20" />
                </linearGradient>
                <linearGradient
                  id="ln-b"
                  gradientUnits="userSpaceOnUse"
                  x1="27.8771"
                  x2="86.7363"
                  y1="65.8138"
                  y2="65.8138"
                  xlinkHref="#ln-a"
                />
                <linearGradient
                  id="ln-c"
                  gradientUnits="userSpaceOnUse"
                  x1="54.7828"
                  x2="54.7828"
                  y1="57.2727"
                  y2="86.9087"
                  xlinkHref="#ln-a"
                />
                <path
                  d="m129.001 0h-124.22756c-2.20914 0-4.000002 1.79086-4.000002 4v123.628c0 2.209 1.790872 4 4.000012 4h124.22755c2.209 0 4-1.791 4-4v-123.628c0-2.20914-1.791-4-4-4z"
                  fill="#ff2d20"
                />
                <path
                  d="m81.5414 89.0681h-42.8088v-56.1614h-10.8537v65.8141h9.0356 1.8181 47.9877z"
                  fill="url(#ln-b)"
                />
                <path
                  d="m105.894 32.9067h-10.3027v55.229l-30.0267-55.229h-15.8673v48.3734h10.1374v-37.7883l30.0268 55.229h16.0325z"
                  fill="#fff"
                />
                <path
                  d="m59.8347 57.2583h-10.1374v29.6163h10.1374z"
                  fill="url(#ln-c)"
                />
              </svg>
              <p className="ml-2 mr-4 text-xl font-bold leading-normal text-white">
                Laravel News
              </p>
            </a>

            <a
              className="mx-auto flex items-center"
              href="https://www.producthunt.com/products/canvas"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Product Hunt</span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                    fill="#FF6154"
                  />
                  <path
                    d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                    fill="#FFF"
                  />
                </g>
              </svg>
              <p className="ml-2 mr-4 text-xl font-bold leading-normal text-white">
                Product Hunt
              </p>
            </a>

            <a
              href="https://podcast.laravel-news.com/109"
              className="text-center text-xl font-bold text-white"
              target="_blank"
              rel="noreferrer"
            >
              Laravel News Podcast
            </a>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Packed with all the right tools
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Build a blog. Publish a newsletter. Keep a journal. Use it to
              write about anything that matters to you, it&apos;s a blank
              Canvas.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-indigo-400">
              The track record
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Years of experience in the Laravel community
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Canvas was made for developers, by developers. Built for the most
              popular PHP framework on the market today, you&apos;ll be in good
              company.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-sm leading-6">Total downloads</dt>
              {packagist && (
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {formatter.format(packagist.package.downloads.total)}
                </dd>
              )}
            </div>
            <div className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-sm leading-6">Active forks</dt>
              {packagist && (
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {formatter.format(packagist.package.github_forks)}
                </dd>
              )}
            </div>
            <div className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-sm leading-6">Contributors</dt>
              {contributors && (
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {formatter.format(contributors.length)}
                </dd>
              )}
            </div>
            <div className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-sm leading-6">Open Source</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                100%
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Give your Laravel app the eloquent writing experience it deserves.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Not convinced yet? Try the links below to read more about what
              Canvas can do for you or spin up a live demo of your own with{' '}
              <a
                href="https://www.gitpod.io"
                className="font-bold"
                target="_blank"
                rel="noreferrer"
              >
                Gitpod
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <footer aria-labelledby="footer-heading" className="relative">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
          <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a
                href="https://github.com/austintoddj/canvas"
                className="text-gray-500 hover:text-gray-400"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <GitHubIcon className="h-6 w-6" />
              </a>
            </div>
            {license && (
              <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                Created by{' '}
                <a
                  className="font-bold"
                  href="https://x.com/austintoddj"
                  target="_blank"
                  rel="noreferrer"
                >
                  Todd Austin
                </a>
                . Released under the{' '}
                <a
                  className="font-bold"
                  href={license.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  MIT License
                </a>
                .
              </p>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}
