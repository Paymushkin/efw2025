<template>
  <div class="container mx-auto px-5 py-10 md:py-16">
    <AppSeo
      title="Gallery FW 2025 — Emirates Fashion Week Dubai"
      description="Autumn/Winter 2025 gallery of Emirates Fashion Week Dubai. View exclusive photos from runway shows, designer collections, and behind-the-scenes moments."
      keywords="Emirates Fashion Week Gallery FW25, Dubai Fashion Photos, Fashion Show Gallery, Runway Photos Dubai, Fashion Week Images"
      schema-type="collection"
    />
    <h1 class="text-3xl md:text-4xl xl:text-5xl mb-10 md:mb-16">13th Season Fall Winter 25</h1>

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
import AppSeo from '@/components/AppSeo.vue';

const { photographers, isLoading, errorMessage, fetchPhotographers } = usePhotographers();

onMounted(() => {
  fetchPhotographers();
});
</script>

<style scoped>
.photographers-list > :last-child {
  margin-bottom: 0;
}
</style>