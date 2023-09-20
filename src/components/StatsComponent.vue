<template>
  <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
      <h2 class="text-base font-semibold leading-8 text-indigo-400">
        The track record
      </h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Years of experience in the Laravel community
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Canvas was made for developers, by developers. Built for the most
        popular PHP framework on the market today, you'll be in good company.
      </p>
    </div>
    <dl
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
    >
      <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
        <dt class="text-sm leading-6">Total downloads</dt>
        <dd
          v-if="packagist"
          class="order-first text-3xl font-semibold tracking-tight"
        >
          {{ formatter.format(packagist.package.downloads.total) }}
        </dd>
      </div>

      <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
        <dt class="text-sm leading-6">Active forks</dt>
        <dd
          v-if="packagist"
          class="order-first text-3xl font-semibold tracking-tight"
        >
          {{ formatter.format(packagist.package.github_forks) }}
        </dd>
      </div>

      <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
        <dt class="text-sm leading-6">Contributors</dt>
        <dd
          v-if="contributors"
          class="order-first text-3xl font-semibold tracking-tight"
        >
          {{ formatter.format(contributors.length) }}
        </dd>
      </div>

      <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
        <dt class="text-sm leading-6">Open Source</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight">100%</dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const packagist = ref(null)

const contributors = ref(null)

const formatter = Intl.NumberFormat('en', { notation: 'compact' })

watchEffect(async () => {
  packagist.value = await (
    await fetch('https://packagist.org/packages/austintoddj/canvas.json')
  ).json()

  contributors.value =
    await // TODO: Future-proof this by getting the actual total and not relying on numbers <= 100
    (
      await fetch(
        'https://api.github.com/repos/austintoddj/canvas/contributors?per_page=100'
      )
    ).json()
})
</script>
