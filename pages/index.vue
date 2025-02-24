<template>
  <div>
    <HeroSection class="mb-[56px] md:mb-[76px]" />
    <HowItWasSection class="mb-[56px] md:mb-[76px]" />
    <ProgramSection class="md:mb-[56px] mb-[36px]" />
    <MarqueeSection :content="sponsors" class="mb-[56px] md:mb-[76px]" />
    <DesignersSection class="md:mb-[76px] mb-[56px]" />
    <SponsorsSection class="md:mb-[76px] mb-[56px]" />
    <StatisticsSection class="md:mb-[76px] mb-[56px]" />
    <FacesSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue';
import HowItWasSection from '~/components/HowItWasSection.vue';
import ProgramSection from '~/components/ProgramSection.vue';
import DesignersSection from '~/components/DesignersSection.vue'
import SponsorsSection from '~/components/SponsorsSection.vue';
import StatisticsSection from '@/components/StatisticsSection.vue';
import MarqueeSection from '~/components/MarqueeSection.vue';

import sponsor1 from '@/assets/image/sponsor-logo.png'
import sponsor2 from '@/assets/image/sponsor-logo.png'
import sponsor3 from '@/assets/image/sponsor-logo.png'
import sponsor4 from '@/assets/image/sponsor-logo.png'

const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4]
</script>
