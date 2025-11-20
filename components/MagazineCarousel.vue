<template>
  <section class="bg-neutral-50 py-16 md:py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
        <div class="max-w-2xl">
          <p class="text-xs uppercase tracking-[0.5em] text-gray-500 mb-3">EFW Magazine</p>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
            Where East Meets West in Style
          </h2>
          <p class="text-base md:text-lg text-gray-600">
            Fresh stories from <span class="font-semibold">magazine.emiratesfashionweek.com</span> —
            curated interviews, essays, and editorials exploring fashion, culture, and innovation.
          </p>
        </div>
        <a
          class="inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-gray-900 hover:bg-gray-900 hover:text-white transition"
          href="https://magazine.emiratesfashionweek.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Magazine
        </a>
      </div>

      <Swiper
        :modules="[Autoplay, Pagination]"
        :slides-per-view="1.05"
        :space-between="16"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        :breakpoints="{
          768: {
            slidesPerView: 2,
            spaceBetween: 24
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 32
          }
        }"
        :pagination="{
          clickable: true
        }"
        class="magazine-swiper"
      >
        <SwiperSlide v-for="article in magazineArticles" :key="article.id">
          <article class="group flex h-full flex-col overflow-hidden rounded-3xl border border-white bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div class="relative overflow-hidden">
              <img
                :src="article.image"
                :alt="article.title"
                class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span class="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-900 shadow">
                {{ article.eyebrow }}
              </span>
            </div>
            <div class="flex flex-1 flex-col gap-4 p-6">
              <h3 class="text-2xl font-semibold text-gray-900 leading-snug">
                {{ article.title }}
              </h3>
              <p class="text-sm text-gray-600 line-clamp-5">
                {{ article.excerpt }}…
              </p>
              <div class="mt-auto">
                <a
                  :href="article.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-sm font-semibold text-gray-900 hover:opacity-70"
                >
                  Read on EFW Magazine
                  <svg
                    class="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </SwiperSlide>

        <div class="swiper-pagination mt-8"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { magazineArticles } from '@/constants/magazine';
</script>

<style scoped>
.magazine-swiper :deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #d1d5db;
  opacity: 0.6;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.magazine-swiper :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background-color: #111827;
  transform: scale(1.2);
}
</style>

