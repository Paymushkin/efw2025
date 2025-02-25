<template>
  <div id="designers" class="container mx-auto">
    <div class="flex justify-between items-center mb-8 xl:mb-[75px]">
      <h2 class="text-xl md:text-3xl xl:text-4xl">Featured Designers</h2>
      <!-- Навигация перемещена сюда -->
      <div class="flex relative items-center gap-4 xl:translate-y-20 translate-y-3">
        <div class="swiper-button-prev !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl"></div>
        <div class="swiper-button-next !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl"></div>
      </div>
    </div>
    
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="{
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }"
      :pagination="{ 
        clickable: true,
        el: '.swiper-pagination'
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      class="relative"
    >
      <swiper-slide v-for="(designer, index) in designers" :key="index">
        <div class="relative h-full">
          <div class="aspect-[3/4] mb-4">
            <img :src="designer.image" alt="" class="w-full h-full object-cover rounded-lg" />
          </div>
          <div class="mt-4">
            <h3 class="lg:text-xl 2xl:text-2xl text-lg">{{ designer.name }}</h3>
            <p class="text-gray-500 text-sm md:text-base">{{ designer.category }}</p>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination !bottom-[-30px]"></div>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { designers } from '@/constants/images';

const modules = [Autoplay, Pagination, Navigation];
</script>

<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #000;
  opacity: 0.2;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

</style>
