<template>
  <div id="program" class="container mx-auto">
    <div class="flex justify-between md:items-center gap-8 md:mb-[113px] mb-8 max-w-[1200px]">
      <h2 class="text-xl md:text-3xl xl:text-4xl">Calendar</h2>
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
      <div class="flex md:gap-10 gap-8 mb-4 md:mb-10 whitespace-nowrap pb-4 md:pb-0 pr-4 md:pr-0 pl-4 md:pl-0">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          class="flex flex-col items-start gap-2 hover:text-black flex-shrink-0"
          :class="{
            'text-black': currentTab === index,
            'text-black-20': currentTab !== index,
          }"
        >
          <span class="text-xl 2xl:text-4xl md:text-3xl transition-colors duration-300">{{
            tab.title
          }}</span>
          <span class="transition-colors duration-300">
            {{ tab.date }}
          </span>
        </button>
      </div>
    </div>

    <div class="flex flex-col md:gap-6 gap-5">
      <div
        v-for="(event, index) in currentProgram.events"
        :key="index"
      >
        <template v-if="event.type === 'sponsorStation'">
          <SponsorStation 
            :video-url="event.videoUrl" 
            :title="event.title"
            :description="event.description"
            :button-text="event.buttonText"
            :button-link="event.buttonLink"
          />
        </template>

        <template v-else-if="event.type === 'bigSponsorStation'">
          <BigSponsorStation 
            :title="event.title"
            :description="event.description"
            :button-text="event.buttonText"
            :images="event.images"
          />
        </template>

        <template v-else>
          <ProgramEvent
            :time="event.time"
            :place="event.place"
            :description="event.description"
            :details="event.details"
            :button-text="event.buttonText"
            :button-link="event.buttonLink"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import SponsorStation from '~/components/program/SponsorStation.vue';
import BigSponsorStation from '~/components/program/BigSponsorStation.vue';
import ProgramEvent from '~/components/program/ProgramEvent.vue';
import { EVENT_TYPES, PROGRAM_TABS } from '~/constants/program';

const currentTab = ref(1);
const tabs = PROGRAM_TABS;

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

