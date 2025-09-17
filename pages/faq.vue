<template>
  <div class="min-h-screen bg-white">
    <FaqSectionDynamic :standalone="true" />
  </div>
</template>

<script setup>
import FaqSectionDynamic from '~/components/FaqSectionDynamic.vue';

useHead({
  title: 'FAQ - Dubai Fashion Week',
  meta: [
    {
      name: 'description',
      content: 'Frequently Asked Questions about Dubai Fashion Week. Find answers about visitor passes, buyers, AI matchmaking tool, and more.'
    }
  ]
});
</script> 