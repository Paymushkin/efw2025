<template>
  <div id="how-it-was" class="container mx-auto">
    <h2 class="text-xl md:text-3xl xl:text-4xl">How it was</h2>
    <p class="text-sm md:text-base xl:text-xl mb-4 xl:mb-8 md:mb-6">collections</p>
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
          <span class="xl:max-w-[120px] md:max-w-[100px] max-w-[80px] xl:text-base text-sm text-left truncate transition-colors duration-300">
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
          class="overflow-hidden rounded-lg shadow-lg flex-shrink-0 w-[280px] md:w-auto max-h-[680px]"
        >
          <img :src="image" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { tabs } from '@/constants/images';



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
