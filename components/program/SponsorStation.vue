<template>
  <div class="grid md:grid-cols-3 grid-cols-1 md:border-t items-center border-[#EFF5F6]">
    <h3 class="2xl:text-4xl md:text-2xl text-xl md:pl-10 md:pr-5 md:pt-[60px] md:pb-10 pt-5 pb-8">
      Stations for sponsors
    </h3>
    <div class="grow max-w-[600px] px-5">
      <img src="~assets/image/all-station.png" alt="stations">
    </div>
    <div class="flex flex-col items-start md:gap-10 gap-5 md:pr-5 md:pt-[60px] md:pb-10 pt-3 pb-5">
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