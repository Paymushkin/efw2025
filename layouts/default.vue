<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden w-full max-w-full">
    <TheHeader />
    <main class="flex-grow w-full max-w-full overflow-x-hidden">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';
</script>
