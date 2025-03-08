<template>
  <div class="pt-10">
    <div class="container">
        <BigSponsorStation 
            :title="event.title"
            :description="event.description"
            :button-text="event.buttonText"
            :images="event.images"
            :link="'#stations'"
            :isStationPage="true"
            @click.prevent="scrollToSection('stations')"
        />
    </div>
    <MarqueeSection :content="sponsors" />
    <div class="container">
        <div id="stations" class="xl:px-4 xl:py-20 py-10">
            <div class="flex flex-col xl:gap-32 divide-y-2 divide-[#EFF5F6]">
                <StationSection
                    title="Station 1"
                    :description="stationDescriptions[0]"
                    :image-src="station1"
                    :is-reversed="false"
                    :price="500"
                />
        
                <StationSection
                    title="Station 2"
                    :description="stationDescriptions[1]"
                    :image-src="station2"
                    :is-reversed="true"
                    :price="1000"
                />

                <StationSection
                    title="Station 3"
                    :description="stationDescriptions[2]"
                    :image-src="station3"
                    :is-reversed="false"
                    :price="2000"
                />
            </div>
        </div>
    </div>
    <MarqueeSection :content="marqueeText2" />
  </div>
</template>

<script setup>
import MarqueeSection from '~/components/MarqueeSection.vue';
import BigSponsorStation from '~/components/program/BigSponsorStation.vue';
import { EVENT_TYPES } from '~/constants/program';
import StationSection from '~/components/StationSection.vue';
import { marqueeText2} from '~/constants/texts';

const event = {
  ...EVENT_TYPES.bigSponsorStation,
  link: '/stations'
};

import sponsor1 from '@/assets/image/sponsor-logo.png'
import sponsor2 from '@/assets/image/sponsor-logo.png'
import sponsor3 from '@/assets/image/sponsor-logo.png'
import sponsor4 from '@/assets/image/sponsor-logo.png'

import station1 from '@/assets/image/stations/station-1.png'
import station2 from '@/assets/image/stations/station-2.png'
import station3 from '@/assets/image/stations/station-3.png'

const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4]

const stationDescriptions = [
    'Our AI-powered business stations transform networking and lead generation, offering an interactive, digital-first experience. With your presentations, real-time engagement tools, and seamless integration, businesses can showcase services, connect with the fashion audience, and maximize event impact. Designed for efficiency, these stations replace traditional booths with a smarter, more streamlined approach to engagement, ensuring every connection leads to meaningful business opportunities.',
    'Our AI-powered business stations transform networking and lead generation, offering an interactive, digital-first experience. With your presentations, real-time engagement tools, and seamless integration, businesses can showcase services, connect with the fashion audience, and maximize event impact. Designed for efficiency, these stations replace traditional booths with a smarter, more streamlined approach to engagement, ensuring every connection leads to meaningful business opportunities.',
    'Our AI-powered business stations transform networking and lead generation, offering an interactive, digital-first experience. With your presentations, real-time engagement tools, and seamless integration, businesses can showcase services, connect with the fashion audience, and maximize event impact. Designed for efficiency, these stations replace traditional booths with a smarter, more streamlined approach to engagement, ensuring every connection leads to meaningful business opportunities.',
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>