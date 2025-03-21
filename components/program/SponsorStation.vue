<template>
  <div class="flex flex-col-reverse md:flex-row justify-between md:border-t items-center border-[#EFF5F6] xl:gap-[120px] md:gap-[60px] gap-[30px]">
    <div class="xl:w-[500px] md:w-[350px] w-full shrink-0">
      <img src="~assets/image/all-station.png" alt="stations">
    </div>
    <div class="grow flex flex-col items-start gap-3">
      <h3 class="md:text-2xl text-xl">
        Stations for sponsors
      </h3>
      <p class="2xl:text-base text-sm">
        AI-powered business stations designed for seamless networking, lead generation, and interactive presentations.<br>
        Engage with prospects through dynamic screens and real-time media integration, ensuring impactful connections at every moment.
      </p>
      <NuxtLink to="/station" class="hover:opacity-80 transition-opacity duration-300">
        <BaseButton variant="primary">More information ></BaseButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '~/components/ui/BaseButton.vue';
</script> 