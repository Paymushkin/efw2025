<template>
  <div class="flex md:grid md:grid-cols-3 items-center md:items-start md:gap-5 gap-[60px] border border-black 2xl:px-7 md:px-5 px-4 py-3 2xl:py-[60px] md:py-10">
    <h4 class="text-sm 2xl:text-2xl md:text-xl">{{ time }}</h4>
    <div class="hidden md:block grow"></div>
    <div class="flex flex-col md:gap-4 gap-2">
      <p class="text-sm 2xl:text-2xl md:text-xl">{{ description }}</p>
      <p class="text-sm 2xl:text-xl md:text-base text-black-16 whitespace-pre-line">{{ details }}</p>
      <NuxtLink v-if="buttonText" :to="buttonLink" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
        <BaseButton variant="primary">{{ buttonText }}</BaseButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '~/components/ui/BaseButton.vue';

defineProps({
  time: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  details: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonLink: {
    type: String,
    default: ''
  }
});
</script> 