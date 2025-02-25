<template>
  <div id="how-it-was" class="container mx-auto">
    <h2 class="text-xl md:text-3xl xl:text-4xl mb-4 xl:mb-8 md:mb-6">How it was</h2>
    <div class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0">
      <div class="flex gap-8 mb-6 md:mb-8 xl:mb-10 whitespace-nowrap pb-4 md:pb-0 pr-4 md:pr-0 pl-4 md:pl-0">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          class="flex flex-col items-start md:gap-2 gap-1 hover:text-black flex-shrink-0"
          :class="{
            'text-black': currentTab === index,
            'text-black-16': currentTab !== index,
          }"
        >
          <span class="text-xl xl:text-4xl md:text-3xl transition-colors duration-300">{{
            tab.year
          }}</span>
          <span class="transition-colors duration-300">
            {{ tab.season }}
          </span>
        </button>
      </div>
    </div>
    <div class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0">
      <div class="flex md:grid md:grid-cols-3 gap-4 px-4 md:px-0">
        <div
          v-for="(image, index) in currentImages"
          :key="index"
          class="overflow-hidden rounded-lg shadow-lg flex-shrink-0 w-[280px] md:w-auto"
        >
          <img :src="image" alt="" class="w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// Импортируем изображения
import image1 from '@/assets/image/item-1.png';
import image2 from '@/assets/image/item-2.png';
import image3 from '@/assets/image/item-3.png';

const tabs = [
  { year: '2020', season: 'Spring', images: [image1, image2, image3] },
  { year: '2021', season: 'Summer', images: [image3, image2, image1] },
  { year: '2022', season: 'Autumn', images: [image2, image1, image3] },
  { year: '2023', season: 'Winter', images: [image2, image3, image1] },
  { year: '2024', season: 'Spring', images: [image1, image2, image3] },
];

const currentTab = ref(0);

const selectTab = (index) => {
  currentTab.value = index;
};

const currentImages = computed(() => tabs[currentTab.value].images);
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
