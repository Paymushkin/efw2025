<template>
  <div class="min-h-screen bg-white">
    <FaqSection :standalone="true" />
  </div>
</template>

<script setup>
import FaqSection from '~/components/FaqSection.vue';

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