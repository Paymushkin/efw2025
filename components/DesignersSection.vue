<template>
  <section class="container mx-auto">
    <div class="flex justify-between items-center pl-4 md:pl-0">
      <h2 class="text-xl md:text-3xl xl:text-4xl mb-4">ALL DESIGNERS · ALL SEASONS</h2>
      <div class="flex items-center gap-4">
        <button 
          @click="handlePrev"
          class="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center"
          aria-label="Previous designers"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button 
          @click="handleNext"
          class="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center"
          aria-label="Next designers"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- SSR-compatible fallback for SEO - показываем ВСЕ дизайнеры для индексации -->
    <div v-if="!isClient" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      <div 
        v-for="designer in designers" 
        :key="designer.name"
        class="designer-card"
      >
        <div class="aspect-[3/4] relative overflow-hidden rounded-lg">
          <img 
            :src="designer.image"
            :alt="`${designer.name} designer collection`"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h3 class="text-center mt-4 text-lg font-medium">{{ designer.name }}</h3>
      </div>
    </div>

    <!-- Client-only Swiper for interactive experience -->
    <ClientOnly>
      <div class="overflow-x-auto hide-scrollbar md:mx-0">
        <swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="1.2"
          :space-between="16"
          :navigation="false"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 7
          }"
          :breakpoints="{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="relative px-4 md:px-0"
      >
      <swiper-slide v-for="(designer, index) in designers" :key="index">
        <div class="designer-card h-auto">
          <img 
            v-bind="getOptimizedImageAttributes(designer.image, designer.name)"
            class="w-full aspect-[3/4] object-cover"
            :loading="index === 0 ? 'eager' : 'lazy'"
          />
          <div class="designer-info mt-4">
            <h3 class="text-lg font-medium">{{ designer.name }}</h3>
            <p class="text-gray-600">{{ designer.category }}</p>
          </div>
        </div>
      </swiper-slide>

        <div class="swiper-pagination"></div>
      </swiper>
    </div>
    </ClientOnly>
  </section>
</template>

<style scoped>
:deep(.swiper) {
  padding-bottom: 40px !important;
  position: relative;
  overflow: hidden !important;
}

:deep(.swiper-wrapper) {
  align-items: stretch;
}

:deep(.swiper-slide) {
  height: auto;
}

/* Стили для навигации */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  top: 50%;
  transform: translateY(-50%);
  display: flex !important;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 20px;
}

@media (max-width: 767px) {
  button {
    display: none;
  }
  
  :deep(.swiper) {
    padding: 0 !important;
  }
  
  :deep(.swiper-slide) {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  :deep(.swiper-slide-next) {
    opacity: 0.5;
  }
}

.designer-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.designer-info {
  padding: 1rem 0;
}

/* Обновленные стили пагинации */
:deep(.swiper-pagination) {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background-color: #D1D5DB;
  opacity: 0.2;
  margin: 0 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background-color: #000;
}

button {
  transition: opacity 0.3s ease;
}

button:hover {
  opacity: 0.7;
}

button:active {
  opacity: 0.5;
}

/* Скрытие скроллбара */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}
</style>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getOptimizedImageAttributes, preloadImage } from '@/utils/imageOptimization';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { designers } from '@/constants/images';

const swiperInstance = ref(null);
const isClient = ref(false);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const handlePrev = () => {
  swiperInstance.value?.slidePrev();
};

const handleNext = () => {
  swiperInstance.value?.slideNext();
};

const preloadNextSlide = (currentIndex) => {
  const nextIndex = (currentIndex + 1) % designers.length;
  preloadImage(designers[nextIndex].image);
};

const onSlideChange = () => {
  if (swiperInstance.value) {
    const currentIndex = swiperInstance.value.activeIndex;
    preloadNextSlide(currentIndex);
  }
};

onMounted(() => {
  isClient.value = true;
  preloadNextSlide(0);
});
</script>
