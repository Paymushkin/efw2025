<template>
  <div class="container mx-auto px-5 py-10 md:py-16">
    <h1 class="text-3xl md:text-4xl xl:text-5xl mb-6">14th Season Spring Summer 26</h1>
    <p class="text-base md:text-lg text-gray-700 mb-6">
      Statistics: Total 13 Photobanks. 10.000+ photo. 135+ TV interviews. 400+ Videos
    </p>

    <nav
      v-if="tocItems.length"
      class="mb-10 md:mb-16 rounded-2xl border border-gray-200 bg-gray-50/80 p-4 md:p-6"
    >
      <p class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
        Contents
      </p>
      <ul class="flex flex-wrap gap-2">
        <li v-for="item in tocItems" :key="item.id">
          <a
            class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:border-black hover:text-black"
            :href="`#${item.id}`"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>

    <div v-if="isLoading" class="flex items-center justify-center py-10 text-gray-500">
      Loading galleries…
    </div>

    <div v-else-if="errorMessage" class="flex flex-col items-center justify-center gap-4 py-10 text-center text-sm text-red-600">
      <p>Не удалось загрузить галерею из Google Sheets.</p>
      <p class="max-w-[480px] text-gray-500">{{ errorMessage }}</p>
      <p class="text-gray-400">Проверьте доступность таблицы и попробуйте обновить страницу.</p>
    </div>

    <div v-else class="photographers-list space-y-12 md:space-y-16">
      <section
        v-for="(photographer, index) in photographers"
        :key="photographer.id ?? photographer.order ?? photographer.name ?? index"
        :id="getAnchorId(photographer, index)"
        class="scroll-mt-28"
      >
        <PhotographerBlock :photographer="photographer" />
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
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

const getAnchorId = (photographer, index = 0) => {
  const base = (photographer?.name || `photographer-${index + 1}`)
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return base ? `photographer-${base}` : `photographer-${index + 1}`;
};

const tocItems = computed(() =>
  (photographers.value || []).map((photographer, index) => ({
    id: getAnchorId(photographer, index),
    title: photographer?.name || `Photographer ${index + 1}`,
  }))
);

onMounted(() => {
  fetchPhotographers();
});
</script>

<style scoped>
.photographers-list > :last-child {
  margin-bottom: 0;
}
</style>
