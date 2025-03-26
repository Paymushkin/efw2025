<template>
  <div class="pt-10">
    <div class="container flex flex-col gap-[76px]">
      <EventFeatures :data="featuresData.featuresData1" />
      <EventFeatures :data="featuresData.featuresData2" />
      <EventFeatures :data="featuresData.featuresData3" />
      <EventFeatures :data="featuresData.featuresData4" />
      <EventFeatures :data="featuresData.featuresData5" />
      <EventFeatures :data="featuresData.featuresData6" />
      <EventFeatures :data="featuresData.featuresData7" />
    </div>
  </div>
</template>

<script setup>
import EventFeatures from '~/components/EventFeatures.vue';
import { FEATURES_DATA } from '~/constants/featuresData';

// Используем данные из констант
const featuresData = FEATURES_DATA;
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>