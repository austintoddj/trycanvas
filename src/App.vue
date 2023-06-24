<template>
    <div class="bg-gray-900">
        <main>
            <HeroComponent />
            <SponsorsComponent />
            <FeaturesComponent />
            <StatsComponent />
            <CTAComponent />
        </main>
        <FooterComponent />
    </div>
</template>

<script setup>
import HeroComponent from '@/components/HeroComponent.vue'
import SponsorsComponent from '@/components/SponsorsComponent.vue'
import FeaturesComponent from '@/components/FeaturesComponent.vue'
import StatsComponent from '@/components/StatsComponent.vue'
import CTAComponent from '@/components/CTAComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
