<template>
  <div id="designers" class="container mx-auto pb-16">
    <div class="flex justify-between items-center mb-8 xl:mb-[75px]">
      <h2 class="text-xl md:text-3xl xl:text-4xl">Designers</h2>
      <!-- Навигация перемещена сюда -->
      <div class="flex relative items-center gap-4 xl:translate-y-20 translate-y-3">
        <div class="swiper-button-prev !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl"></div>
        <div class="swiper-button-next !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl"></div>
      </div>
    </div>
    
    <swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="1"
      :space-between="30"
      :navigation="true"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 7
      }"
      :breakpoints="{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }"
      @swiper="swiperInstance = $event"
      @slideChange="onSlideChange"
      class="relative pb-12"
    >
      <swiper-slide v-for="(designer, index) in designers" :key="index">
        <div class="designer-card">
          <img 
            v-bind="getOptimizedImageAttributes(designer.image, designer.name)"
            class="w-full h-full object-cover"
          />
          <div class="designer-info">
            <h3>{{ designer.name }}</h3>
            <p>{{ designer.category }}</p>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import { getOptimizedImageAttributes, preloadImage } from '@/utils/imageOptimization';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { designers } from '@/constants/images';

const swiperInstance = ref(null);

// Предзагрузка следующего слайда
const preloadNextSlide = (currentIndex) => {
  const nextIndex = (currentIndex + 1) % designers.length;
  preloadImage(designers[nextIndex].image);
};

const onSlideChange = () => {
  if (swiperInstance.value) {
    const currentIndex = swiperInstance.value.swiper.activeIndex;
    preloadNextSlide(currentIndex);
  }
};

onMounted(() => {
  // Предзагружаем следующий слайд при монтировании
  preloadNextSlide(0);
});
</script>

<style scoped>
:deep(.swiper) {
  padding-bottom: 40px !important;
  position: relative;
}

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

/* Скрываем пагинацию на мобильных устройствах */
@media (max-width: 767px) {
  :deep(.swiper-pagination) {
    display: none !important;
  }
  
  :deep(.swiper) {
    padding-bottom: 0 !important;
  }
}

:deep(.swiper-pagination-bullets.swiper-pagination-horizontal) {
  bottom: 0;
  width: auto;
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
  transform-origin: center;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background-color: #000;
}

:deep(.swiper-pagination-bullet-active-main) {
  transform: scale(1);
  opacity: 1;
  background-color: #000;
}

:deep(.swiper-pagination-bullet-active-prev),
:deep(.swiper-pagination-bullet-active-next) {
  transform: scale(0.66);
  opacity: 0.4;
}

:deep(.swiper-pagination-bullet-active-prev-prev),
:deep(.swiper-pagination-bullet-active-next-next) {
  transform: scale(0.33);
  opacity: 0.2;
}

/* Стили для навигации */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  top: 50%;
  transform: translateY(-50%);
}
</style>
