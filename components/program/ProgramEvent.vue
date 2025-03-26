<template>
  <div class="flex items-center xl:gap-[120px] md:gap-[60px] gap-[30px] border border-black py-3 2xl:py-7 md:py-5">
    <h4 class="xl:w-[500px] md:w-[350px] shrink-0 text-sm xl:text-2xl md:text-xl xl:pl-[60px] md:pl-[30px] pl-4">{{ time }}</h4>
    <div class="grow flex flex-col md:gap-4 gap-3 xl:pr-[60px] md:pr-[30px] pr-4">
      <p class="text-sm xl:text-2xl md:text-xl">{{ description }}</p>
      <p v-html="details" v-if="details" class="md:text-lg text-sm text-black-70"></p>
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