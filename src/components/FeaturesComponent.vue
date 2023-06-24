<template>
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-400">
                Deploy faster
            </h2>
            <p
                class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
                Everything you need to deploy your app
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-300">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl
                class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
            >
                <div class="flex flex-col">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <div
                            class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500"
                        >
                            <ChartBarIcon
                                class="h-6 w-6 text-white"
                                aria-hidden="true"
                            />
                        </div>
                        Audience insights
                    </dt>
                    <dd
                        class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300"
                    >
                        <p class="flex-auto">
                            Not everyone needs the headache of setting up Google
                            Analytics, so we built in just the best parts, and
                            added a couple new ones.
                        </p>
                        <p class="mt-6">
                            <a
                                href="#"
                                class="text-sm font-semibold leading-6 text-indigo-400"
                                >Learn more <span aria-hidden="true">→</span></a
                            >
                        </p>
                    </dd>
                </div>

                <div class="flex flex-col">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <div
                            class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500"
                        >
                            <PhotoIcon
                                class="h-6 w-6 text-white"
                                aria-hidden="true"
                            />
                        </div>
                        Unsplash integration
                    </dt>
                    <dd
                        class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300"
                    >
                        <p class="flex-auto">
                            Access the Unsplash API directly inside the editor
                            and give your content a splash of color with over 3
                            million free, hi-res images.
                        </p>
                        <p class="mt-6">
                            <a
                                href="#"
                                class="text-sm font-semibold leading-6 text-indigo-400"
                                >Learn more <span aria-hidden="true">→</span></a
                            >
                        </p>
                    </dd>
                </div>

                <div class="flex flex-col">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <div
                            class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500"
                        >
                            <TagIcon
                                class="h-6 w-6 text-white"
                                aria-hidden="true"
                            />
                        </div>
                        SEO Optimization
                    </dt>
                    <dd
                        class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300"
                    >
                        <p class="flex-auto">
                            Publish once, distribute everywhere. Attach tags,
                            descriptions, and canonical links so your content up
                            to be discovered in as many ways as possible.
                        </p>
                        <p class="mt-6">
                            <a
                                href="#"
                                class="text-sm font-semibold leading-6 text-indigo-400"
                                >Learn more <span aria-hidden="true">→</span></a
                            >
                        </p>
                    </dd>
                </div>
            </dl>
        </div>
    </div>

    <div class="mt-32 sm:mt-56">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl sm:text-center">
                <h2 class="text-base font-semibold leading-7 text-indigo-400">
                    Everything you need
                </h2>
                <p
                    class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                    No server? No problem.
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-300">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis.
                </p>
            </div>
        </div>
        <div class="relative overflow-hidden pt-16">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <img
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                    alt="App screenshot"
                    class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                    width="2432"
                    height="1442"
                />
                <div class="relative" aria-hidden="true">
                    <div
                        class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]"
                    />
                </div>
            </div>
        </div>
        <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
            >
                <div
                    v-for="feature in secondaryFeatures"
                    :key="feature.name"
                    class="relative pl-9"
                >
                    <dt class="inline font-semibold text-white">
                        <component
                            :is="feature.icon"
                            class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                            aria-hidden="true"
                        />
                        {{ feature.name }}
                    </dt>
                    {{ ' ' }}
                    <dd class="inline">{{ feature.description }}</dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup>
import { ChartBarIcon, TagIcon, PhotoIcon } from '@heroicons/vue/24/outline'
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon
} from '@heroicons/vue/20/solid'

const secondaryFeatures = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon
    },
    {
        name: 'SSL certificates.',
        description:
            'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon
    },
    {
        name: 'Simple queues.',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ArrowPathIcon
    },
    {
        name: 'Advanced security.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FingerPrintIcon
    },
    {
        name: 'Powerful API.',
        description:
            'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: Cog6ToothIcon
    },
    {
        name: 'Database backups.',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
        icon: ServerIcon
    }
]
</script>
