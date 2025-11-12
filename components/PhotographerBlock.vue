<template>
  <div class="photographer-block mb-16 md:mb-24">
    <div class="mb-6 md:mb-8 flex justify-between items-center">
      <div>
        <h3 class="text-xl md:text-2xl font-medium md:mb-2 mb-1">{{ photographer.name }}</h3>
        <p class="md:text-xl text-gray-600">{{ photographer.profession }}</p>
      </div>
      <div class="flex items-center gap-3">
        <a
          v-if="instagramUrl"
          :href="instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center hover:opacity-70 transition-opacity h-[40px]"
          :aria-label="`${photographer.name} on Instagram`"
        >
          <InstagramIcon />
        </a>
      <NuxtLink 
        v-if="photographer.galleryUrl" 
        :to="photographer.galleryUrl" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <BaseButton variant="primary">
          <span>View Gallery</span>
          <span>></span>
        </BaseButton>
      </NuxtLink>
      </div>
    </div>
    
    <!-- Desktop version -->
    <div class="hidden md:grid grid-cols-3 gap-6">
      <div 
        v-for="(item, index) in photographer.photos || photographer.videos" 
        :key="index"
        :class="[
          'overflow-hidden rounded-lg',
          photographer.videos ? 'aspect-[16/9]' : 'aspect-[3/4]'
        ]"
      >
        <img 
          v-if="!photographer.videos"
          :src="item" 
          :alt="`Photo ${index + 1} by ${photographer.name}`"
          class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
          :loading="index === 0 ? 'eager' : 'lazy'"
        />
        <video
          v-else
          :src="item"
          :title="`Video ${index + 1} by ${photographer.name}`"
          class="w-full h-full object-cover"
          playsinline
          autoplay
          loop
          muted
        ></video>
      </div>
    </div>

    <!-- Mobile version -->
    <div class="md:hidden -mx-5 px-5">
      <div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
        <div 
          v-for="(item, index) in photographer.photos || photographer.videos" 
          :key="index"
          :class="[
            'flex-shrink-0 w-[85vw] max-w-[300px] overflow-hidden rounded-lg snap-center',
            photographer.videos ? 'aspect-[16/9]' : 'aspect-[3/4]'
          ]"
        >
          <img 
            v-if="!photographer.videos"
            :src="item" 
            :alt="`Photo ${index + 1} by ${photographer.name}`"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <video
            v-else
            :src="item"
            :title="`Video ${index + 1} by ${photographer.name}`"
            class="w-full h-full object-cover"
            playsinline
            autoplay
            loop
            muted
          ></video>
        </div>
        <!-- Spacer element for right margin -->
        <div class="flex-shrink-0 w-5"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';

const props = defineProps({
  photographer: {
    type: Object,
    required: true
  }
});

const isVideo = (url) => {
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
};

const instagramUrl = computed(() => {
  if (!props.photographer.instagram) return null;
  
  const inst = props.photographer.instagram.trim();
  
  // Если уже полная ссылка
  if (inst.startsWith('http://') || inst.startsWith('https://')) {
    return inst;
  }
  
  // Если начинается с @, убираем его
  const username = inst.startsWith('@') ? inst.slice(1) : inst;
  
  // Формируем ссылку на Instagram
  return `https://www.instagram.com/${username}/`;
});
</script>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style> 