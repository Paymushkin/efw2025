<template>
  <div id="program" class="container mx-auto">
    <div class="flex flex-col md:flex-row justify-between md:items-center gap-8 md:mb-[113px] mb-8 max-w-[1200px]">
      <h2 class="text-xl md:text-3xl xl:text-4xl">Schedule</h2>
      <NuxtLink 
        target="_blank"
        class="hover:opacity-80 transition-opacity duration-300"
        to="https://docs.google.com/forms/d/11I7bcoDEzErBszt2UfZqf04LAjljlpkBhdRTD6CrC7g/edit?fbclid=PAZXh0bgNhZW0CMTEAAabTXlVnA-8uMswE4mM1iOQkULaorR2fFi9eZsVZlgEe1jMJH0Kb7OcDJJk_aem_LIewtA-gbtt6seDB3ZE4pw">
        <BaseButton variant="primary">
          <span>Visit</span>
          <span>></span>
        </BaseButton>
      </NuxtLink>
    </div>

    <div class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0">
      <div class="flex gap-8 mb-8 md:mb-10 whitespace-nowrap pb-4 md:pb-0 pr-4 md:pr-0 pl-4 md:pl-0">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          class="flex flex-col items-start gap-2 hover:text-black flex-shrink-0"
          :class="{
            'text-black': currentTab === index,
            'text-black-16': currentTab !== index,
          }"
        >
          <span class="text-2xl 2xl:text-4xl md:text-3xl transition-colors duration-300">{{
            tab.title
          }}</span>
          <span class="transition-colors duration-300">
            {{ tab.date }}
          </span>
        </button>
      </div>
    </div>

    <div class="flex flex-col md:gap-6 gap-2">
      <div
        v-for="(event, index) in currentProgram.events"
        :key="index"
      >
        <template v-if="event.type === 'sponsorStation'">
          <div class="grid md:grid-cols-3 grid-cols-1 md:border-t items-center border-[#EFF5F6]">
            <h3 class="2xl:text-4xl md:text-2xl text-xl md:pl-10 md:pr-5 md:pt-[60px] md:pb-10 pt-5 pb-8">Stations for sponsors</h3>
            <div class="grow max-w-[600px]">
              <img src="~assets/image/all-station.png" alt="stations">
            </div>
            <div class="flex flex-col items-start md:gap-10 gap-5 md:pl-10 md:pr-5 md:pt-[60px] md:pb-10 pt-3 pb-5">
              <p class="2xl:text-base text-sm">AI-powered business stations designed for seamless networking, lead generation, and interactive presentations.<br>
              Engage with prospects through dynamic screens and real-time media integration, ensuring impactful connections at every moment.</p>
              <BaseButton variant="primary">More information ></BaseButton>
            </div>
          </div>
        </template>

        <template v-else-if="event.type === 'bigSponsorStation'">
            <div class="mx-auto md:my-10 my-5">
              <div class="flex flex-col gap-11">
                <div class="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-6 gap-4">
                  <h3 class="2xl:text-4xl xl:text-3xl text-xl text-center md:text-left">{{ event.title }}</h3>
                  <div class="flex flex-col items-start md:gap-9 gap-5 max-w-[415px]">
                    <p class="text-lg">{{ event.description }}</p>
                    <BaseButton variant="primary">{{ event.buttonText }}</BaseButton>
                  </div>
                </div>

                <div class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0">
                  <div class="flex md:grid md:grid-cols-3 gap-6 px-4 md:px-0">
                    <div 
                      v-for="(image, idx) in event.images" 
                      :key="idx" 
                      class="flex flex-col gap-4 flex-shrink-0 w-[280px] md:w-auto"
                    >
                      <img :src="image.src" :alt="image.caption" class="w-full">
                      <div class="flex flex-col">
                        <span class="xl:text-xl text-lg">{{ image.caption }}</span>
                        <span class="text-gray-500">{{ image.subcaption }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </template>

        <template v-else>
          <div class="flex md:grid-cols-3 items-center md:items-start md:gap-5 gap-[60px] border border-black 2xl:px-7 md:px-5 px-4 py-3 2xl:py-[60px] md:py-10">
            <h4 class="text-sm 2xl:text-2xl md:text-xl">{{ event.time }}</h4>
            <div class="hidden md:block grow"></div>
            <div class="flex flex-col md:gap-4 gap-2">
              <p class="text-sm 2xl:text-2xl md:text-xl">{{ event.description }}</p>
              <p class="text-sm 2xl:text-xl md:text-base text-black-16">{{ event.details }}</p>
              <NuxtLink v-if="event.buttonText" :to="event.buttonLink" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                <BaseButton variant="primary">{{ event.buttonText }}</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import Station1 from '~/assets/image/stations/station-1.png';
import Station2 from '~/assets/image/stations/station-2.png';
import Station3 from '~/assets/image/stations/station-3.png';

// Объект с типами событий
const eventTypes = {
  sponsorStation: {
    type: 'sponsorStation',
  },
  bigSponsorStation: {
    type: 'bigSponsorStation',
    title: 'Stations for sponsors',
    description: 'AI-powered business stations designed for seamless networking, lead generation, and interactive presentations. Engage with prospects through dynamic screens and real-time media integration, ensuring impactful connections at every moment.',
    images: [
      { src: Station1, caption: 'Station 1', subcaption: 'Описание и цена' },
      { src: Station2, caption: 'Station 1', subcaption: 'Описание и цена' },
      { src: Station3, caption: 'Station 1', subcaption: 'Описание и цена' }
    ],
    buttonText: 'More information >'
  }
};

const tabs = [
  {
    title: 'Prelaunch',
    date: '11/04/2025',
    events: [
      {
        type: 'event',
        time: '10:00 – 20:00',
        description: 'Выставка целый день',
        details: 'тематика',
      },
      { type: 'event', time: '10:10 – 11:40', description: 'Designer', details: 'Country' },
      { ...eventTypes.sponsorStation },
      {
        type: 'event',
        time: '10:00 – 20:00',
        description: 'Выставка целый день',
        details: 'тематика',
      },
    ],
  },
  { title: 'KidsDay', date: '11/04/2025', events: [] },
  { title: 'WomenDay', date: '11/04/2025', events: [] },
  { title: 'BeautyDay', date: '11/04/2025', events: [
    {
      type: 'event',
      time: '10:00 – 20:00',
      description: 'Выставка целый день',
      details: 'тематика',
    },
    { ...eventTypes.bigSponsorStation },
  ] },
  { title: 'BeautyAwards', date: '11/04/2025', events: [
    {
      type: 'event',
      time: '10:00 – 20:00',
      description: 'Выставка целый день',
      details: 'тематика',
      buttonText: 'Presentation >',
      buttonLink: 'https://storage.yandexcloud.net/videos-meyou/efw2025/Deluxe%20Beauty%20Awards%202025%20ENG.pdf'
    },
    
  ] },
  { title: 'AfterDay', date: '11/04/2025', events: [] },
];

const currentTab = ref(0);

const selectTab = (index) => {
  currentTab.value = index;
};

const currentProgram = computed(() => tabs[currentTab.value]);
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}

.hide-scrollbar {
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}
</style>
