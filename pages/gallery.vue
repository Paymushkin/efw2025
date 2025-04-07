<template>
  <div class="container mx-auto px-5 py-10 md:py-16">
    <h1 class="text-3xl md:text-4xl xl:text-5xl mb-10 md:mb-16">Our Photographers</h1>
    
    <div class="photographers-list">
      <PhotographerBlock 
        v-for="(photographer, index) in photographers" 
        :key="index"
        :photographer="photographer"
      />
    </div>
  </div>
</template>

<script setup>
import { photographers } from '@/constants/photographers';
import PhotographerBlock from '@/components/PhotographerBlock.vue';
</script>

<style scoped>
.photographers-list > :last-child {
  margin-bottom: 0;
}
</style> 