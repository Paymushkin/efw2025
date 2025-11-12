<template>
  <div class="container mx-auto px-5 py-10 md:py-16">
    <h1 class="text-3xl md:text-4xl xl:text-5xl mb-10 md:mb-16">14th Season Spring Summer 26</h1>

    <div v-if="isLoading" class="flex items-center justify-center py-10 text-gray-500">
      Loading galleries…
    </div>

    <div v-else-if="errorMessage" class="flex flex-col items-center justify-center gap-4 py-10 text-center text-sm text-red-600">
      <p>Не удалось загрузить галерею из Google Sheets.</p>
      <p class="max-w-[480px] text-gray-500">{{ errorMessage }}</p>
      <p class="text-gray-400">Проверьте доступность таблицы и попробуйте обновить страницу.</p>
    </div>

    <div v-else class="photographers-list space-y-12 md:space-y-16">
      <PhotographerBlock
        v-for="photographer in photographers"
        :key="photographer.id ?? photographer.order ?? photographer.name"
        :photographer="photographer"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import PhotographerBlock from '@/components/PhotographerBlock.vue';
import { usePhotographers } from '~/composables/usePhotographers';

useHead({
  title: 'Gallery SS 2026 — Emirates Fashion Week Dubai',
  meta: [
    {
      name: 'description',
      content:
        'Spring/Summer 2026 gallery of Emirates Fashion Week Dubai. Browse photo and video highlights from runway shows, designers, and special events.',
    },
    {
      name: 'keywords',
      content:
        'Emirates Fashion Week Gallery, SS26 Dubai Fashion Photos, Spring Summer Runway Images, Dubai Fashion Week Media',
    },
    {
      property: 'og:title',
      content: 'Gallery SS 2026 — Emirates Fashion Week Dubai',
    },
    {
      property: 'og:description',
      content:
        'Spring/Summer 2026 gallery of Emirates Fashion Week Dubai. Browse photo and video highlights from runway shows, designers, and special events.',
    },
    {
      property: 'og:image',
      content: 'https://emiratesfashionweeks.com/seo-poster.png',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
});

const { photographers, isLoading, errorMessage, fetchPhotographers } = usePhotographers({
  sheetId: '13bnAmO2lUWaA55k6bOZ-oYH-t9LxRcdXBFkEGMG5MUA',
  initialData: [],
});

onMounted(() => {
  fetchPhotographers();
});
</script>

<style scoped>
.photographers-list > :last-child {
  margin-bottom: 0;
}
</style>

