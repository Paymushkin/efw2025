<template>
  <div>
    <AppSeo
      title="Emirates Fashion Week Dubai 2025 - Fashion & Beauty Event"
      description="Join Emirates Fashion Week Dubai 2025, the premier fashion and beauty event in UAE. Experience runway shows, designer collections, beauty services, and business networking opportunities."
      keywords="Emirates Fashion Week, Dubai Fashion Event, Fashion Shows Dubai, Beauty Exhibition UAE, Fashion Business Dubai, Designer Collections, Beauty Services Dubai"
    />
    <HeroSection class="mb-[56px] md:mb-[76px]" />
    <HowItWasSection class="mb-[56px] md:mb-[76px]" />
    <ProgramSection class="md:mb-[56px] mb-[36px]" />
    <MarqueeSection :content="sponsors" class="mb-[56px] md:mb-[76px]" />
    <DesignersSection class="md:mb-[76px] mb-[56px]" />
    <SponsorsSection class="md:mb-[76px] mb-[56px]" />
    <StatisticsSection class="md:mb-[76px] mb-[56px]" />
    <div class="container mx-auto px-4 md:mb-[76px] mb-[56px]">
      <EventFeatures :data="featuresData.featuresDataPromo" />
    </div>
    <FacesSection class="md:mb-[76px] mb-[56px]" />
    <div class="container mx-auto px-4 md:mb-[76px] mb-[56px]">
      <ImageCarousel 
        title="We invest in and support the economy of Dubai | UAE" 
        :slidesPerView="6" 
        :autoplay="true"
        :autoplaySpeed="5000"
        :gap="20"
      />
    </div>
    <FaqSection class="mb-[56px] md:mb-[76px]" />
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
import ImageCarousel from '~/components/ImageCarousel.vue';
import EventFeatures from '~/components/EventFeatures.vue';
import { FEATURES_DATA } from '~/constants/featuresData';
import AppSeo from '@/components/AppSeo.vue';
import FaqSection from '~/components/FaqSection.vue';

import sponsor1 from '@/assets/image/sponsor-logo.webp'
import sponsor2 from '@/assets/image/sponsor-logo.webp'
import sponsor3 from '@/assets/image/sponsor-logo.webp'
import sponsor4 from '@/assets/image/sponsor-logo.webp'

const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4]
const featuresData = FEATURES_DATA;
</script>
