<template>
  <div id="spring-summer-2026" class="container mx-auto">
    <div class="flex justify-between md:items-center gap-8 md:mb-[50px] mb-4 max-w-[1200px]">
      <h2 data-nosnippet class="text-xl md:text-3xl xl:text-4xl">
        <a href="#spring-summer-2026" class="hover:opacity-80 transition-opacity">PREVIOUS 14<sup class="">th</sup> Spring Summer 2026</a>
      </h2>
    </div>

    <!-- Mobile Tabs -->
    <div class="md:hidden mb-4 sticky top-0 z-10 bg-white">
      <div class="flex w-full border-b border-gray-200">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click.stop="selectTab(index)"
          class="flex flex-col items-center justify-center flex-1 px-2 py-3 border-r border-gray-300 last:border-r-0 transition-colors duration-300"
          :class="{
            'bg-black text-white': currentTab === index,
            'bg-white text-black hover:bg-gray-50': currentTab !== index,
          }"
        >
          <span class="text-sm font-medium">{{ tab.mobileDate?.split(' ')[0] || '1' }}</span>
          <span class="text-xs opacity-75">{{ tab.mobileDate?.split(' ')[1] || 'Nov' }}</span>
        </button>
      </div>
    </div>

    <!-- Desktop Tabs -->
    <div 
      class="hidden md:block overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing w-full" 
      ref="tabsContainer"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @touchstart="startDragTouch"
      @touchmove="onDragTouch"
      @touchend="stopDrag"
    >
      <div class="flex md:gap-10 gap-8 mb-4 md:mb-10 whitespace-nowrap pb-4 md:pb-0 pl-4 md:pl-0" style="padding-right: 100vw;">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click.stop="selectTab(index)"
          class="flex flex-col items-start gap-2 hover:text-black flex-shrink-0"
          :class="{
            'text-black': currentTab === index,
            'text-black-20': currentTab !== index,
          }"
        >
          <span v-html="tab.title" class="text-xl 2xl:text-4xl md:text-3xl transition-colors duration-300"></span>
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
import SponsorStation from '~/components/program/SponsorStation.vue';
import BigSponsorStation from '~/components/program/BigSponsorStation.vue';
import ProgramEvent from '~/components/program/ProgramEvent.vue';
import { NEW_PROGRAM_TABS } from '~/constants/newProgram';

const currentTab = ref(1);
const tabs = NEW_PROGRAM_TABS;
const tabsContainer = ref(null);
let isDragging = false;
let startX = 0;
let scrollLeft = 0;
let hasMoved = false;

const startDrag = (e) => {
  // Проверяем, что клик не на кнопке таба
  if (e.target.closest('button')) {
    return;
  }
  isDragging = true;
  hasMoved = false;
  const slider = tabsContainer.value;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const startDragTouch = (e) => {
  // Проверяем, что клик не на кнопке таба
  if (e.target.closest('button')) {
    return;
  }
  isDragging = true;
  hasMoved = false;
  const slider = tabsContainer.value;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const onDrag = (e) => {
  if (!isDragging) return;
  const slider = tabsContainer.value;
  const x = e.pageX - slider.offsetLeft;
  const walk = Math.abs(x - startX);
  
  // Если движение больше 5px, считаем это перетаскиванием
  if (walk > 5) {
    hasMoved = true;
    e.preventDefault();
    slider.scrollLeft = scrollLeft - (x - startX);
  }
};

const onDragTouch = (e) => {
  if (!isDragging) return;
  const slider = tabsContainer.value;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = Math.abs(x - startX);
  
  // Если движение больше 5px, считаем это перетаскиванием
  if (walk > 5) {
    hasMoved = true;
    e.preventDefault();
    slider.scrollLeft = scrollLeft - (x - startX);
  }
};

const stopDrag = () => {
  isDragging = false;
  hasMoved = false;
};

const selectTab = (index) => {
  // Если было перетаскивание, не обрабатываем клик
  if (isDragging && hasMoved) {
    return;
  }
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

/* Кастомный скроллбар */
.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Для Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
}

.custom-scrollbar {
  -webkit-user-select: none;
  user-select: none;
}
</style> 